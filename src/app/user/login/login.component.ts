import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../shared/auth/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private route: ActivatedRoute,
              private router: Router) { }

  loginForm: FormGroup

  ngOnInit() {
  		this.loginForm = this.fb.group({
  			email: this.fb.control('', [Validators.required, Validators.email]),
  			password: this.fb.control('', [Validators.required])
  		}, {updateOn: true})
  }

  login() {
    if(this.loginForm.valid) {
      this.authService.login(this.loginForm.value.email,
        this.loginForm.value.password)
        .subscribe(
            user => {
         // console.log(user);

          if(user.success) {
          // this.router.navigate(['/'])
          } else {
            console.log('Usuário inválido')
          }
        },
          response => {
          alert(response.error.message)
        })
    } else {
      console.log('O formulário está inválido, verifique todos os campos');
    }
  }

  logged() {
    return this.authService.isLoggedIn();
  }

  isUser() {
    console.log(this.authService.isUser());
    return this.authService.isUser();
  }
}
