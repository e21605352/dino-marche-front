import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  formGroup!: FormGroup;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
  }

  onSubmitSigninForm() {
    if (this.formGroup.valid) {
      this.authenticationService.createAccount(this.formGroup.value).subscribe(response => {
        if (response.status == 201) {
          this.router.navigateByUrl('/login');
        } else {
          alert("dommage");
        }
      })
    }
  }

}
