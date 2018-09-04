import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth/auth.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  loginForm: FormGroup

  constructor(private authService: AuthService, private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email])
    })
  }

  onSubmit() {
    this.authService.forgotPassword(this.loginForm.value.email)
      .subscribe(response => { console.log(response))
  }
}
