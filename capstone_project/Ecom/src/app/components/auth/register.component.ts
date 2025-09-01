
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  error = ''; loading = false;
  form = this.fb.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]],
    role: ['CUSTOMER', Validators.required],
    name: [''],
    address: ['']
  });
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router){}
  submit(){
    if(this.form.invalid) return;
    this.loading = true; this.error = '';
    this.auth.register(this.form.value as User).subscribe({
      next: (user) => { this.router.navigate(['/login']); },
      error: (err) => { this.error = err?.error?.message || 'Registration failed'; this.loading = false; }
    });
  }
}
