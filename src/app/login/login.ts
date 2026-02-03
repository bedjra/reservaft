import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    // Ici tu fais ton traitement de login
    // Puis navigation vers dashboard si succès
    this.router.navigate(['/dashboard']);
  }
}