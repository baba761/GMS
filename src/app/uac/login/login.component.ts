import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  addressForm = this.fb.group({

    firstName: [null, Validators.required],
    lastName: [null, Validators.required],


  });

  constructor(private fb: FormBuilder,private router: Router) { }
  onSubmit(): void {
    if(1==1){
      this.router.navigateByUrl('dashboard');
    }
    

  }
}
