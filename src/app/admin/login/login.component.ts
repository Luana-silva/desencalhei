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
  		})
  }

  login() {
    this.authService.login(this.loginForm.value.email,
                          this.loginForm.value.password)
                  .subscribe(
                      user => {
                    console.log(user);
                    //this.router.navigate(['/'])
                  }, 
                error => {
                  alert(`Deu um erro ${error}`)
                })

  }

  logged() {
    return this.authService.isLoggedIn();
  }
}
