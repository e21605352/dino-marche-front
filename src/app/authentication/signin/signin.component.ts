import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { TokenManager } from '../tokenManager/TokenManager';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  formGroup!: FormGroup;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private tokenManager: TokenManager
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formGroup = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
  }

  onSubmitSigninForm() {
    if (this.formGroup.valid) {
      this.authenticationService.login(this.formGroup.value).subscribe(result => {
        if (result.token) {
          console.log(result.token)
          this.tokenManager.store(result.token);
        }
      })
    }
  }

  onSubmitNewAccount() {
    this.router.navigateByUrl('/newAccount');
  }
}
