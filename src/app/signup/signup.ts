import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [FormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {

  email: string = '';
  password: string = '';
  role: string = 'USER'; // valeur par défaut

  constructor(private router: Router, private http: HttpClient) {}

  // Méthode appelée à la soumission du formulaire
  onSignup() {
    const user = {
      email: this.email,
      password: this.password,
      role: this.role,
    };

    // Exemple d'appel POST vers ton backend Spring Boot
    this.http.post('http://localhost:8080/api/auth/signup', user)
      .subscribe({
        next: (res) => {
          console.log('Inscription réussie !', res);
          this.router.navigate(['/login']); // redirige vers login après succès
        },
        error: (err) => {
          console.error('Erreur lors de l\'inscription', err);
          alert('Erreur lors de l’inscription : ' + err.error?.message || err.message);
        }
      });
  }

  // Naviguer vers la page de connexion
  goLogin() {
    this.router.navigate(['/login']);
  }
}