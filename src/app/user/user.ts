import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [FormsModule ,CommonModule],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {


  // Onglet actif (utile si tu gères plusieurs onglets)
  ongletActif = 'utilisateur';
  roleConnecte = 'ADMIN'; // Exemple de rôle connecté

  // Gestion du mode ajout / modification
  isEditMode = false;

  // Contrôle du formulaire
  credentials = {
    email: '',
    password: '',
    confirmPassword: '',
    role: ''
  };

  // Rôles disponibles
  roles = ['USER', 'ADMIN', 'SECRETAIRE'];

  // Liste des utilisateurs
  utilisateurs = [
    { email: 'test1@mail.com', password: '123456', role: 'USER' },
    { email: 'admin@mail.com', password: 'admin', role: 'ADMIN' }
  ];

  // Affichage du mot de passe
  passwordVisible = false;


  // Méthodes
  ajouterUtilisateur() {
    this.utilisateurs.push({ ...this.credentials });
    this.resetForm();
  }

  modifierUtilisateur() {
    const index = this.utilisateurs.findIndex(u => u.email === this.credentials.email);
    if (index > -1) {
      this.utilisateurs[index] = { ...this.credentials };
    }
    this.isEditMode = false;
    this.resetForm();
  }

  remplirFormulairePourModification(u: any) {
    this.credentials = { ...u, confirmPassword: u.password };
    this.isEditMode = true;
  }

  supprimerUtilisateur(index: number) {
    this.utilisateurs.splice(index, 1);
  }

  resetForm() {
    this.credentials = { email: '', password: '', confirmPassword: '', role: '' };
  }
}