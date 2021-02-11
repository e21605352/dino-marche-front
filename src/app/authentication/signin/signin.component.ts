import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  formGroup!: FormGroup;

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
  }

  onSubmitSigninForm(){
    if(this.formGroup.valid){
      this.authenticationService.login(this.formGroup.value).subscribe(result=>{
        if(result.success){
          console.log(result);
          alert(result.message);
        } else {
          alert(result.message)
        }
      })
    }
  }
}
