import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface User {
  id: number;
  nom: string;
  email: string;
  role: 'user' | 'admin' | 'guest';
}

interface Logement {
  id: number;
  nom: string;
  ville: string;
  prix: number;
  disponible: boolean;
  images: string[];
}

interface Reserva {
  id: number;
  dateDebut: Date;
  dateFin: Date;
  montantTotal: number;
  user: User;
  logementReservation: Logement;
}

@Component({
  selector: 'app-reservation',
  imports: [CommonModule,FormsModule ],
  templateUrl: './reservation.html',
  styleUrl: './reservation.css',
})
export class Reservation {
 // Liste des réservations
  reservations: Reserva[] = [];

  // Formulaire
  reservationForm: Partial<Reserva> = {
    dateDebut: new Date(),
    dateFin: new Date(),
    user: undefined,
    logementReservation: undefined,
    montantTotal: 0,
  };

  showModal = false;
  isEditMode = false;
  editIndex: number | null = null;

  // Role actuel (pour contrôle d'affichage)
  role: 'user' | 'admin' | 'guest' = 'admin';

  openModal() {
    this.resetForm();
    this.isEditMode = false;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  resetForm() {
    this.reservationForm = {
      dateDebut: new Date(),
      dateFin: new Date(),
      user: undefined,
      logementReservation: undefined,
      montantTotal: 0,
    };
    this.isEditMode = false;
    this.editIndex = null;
  }

  // Calcul automatique du montant
  calculMontantTotal() {
    if (this.reservationForm.dateDebut && this.reservationForm.dateFin && this.reservationForm.logementReservation) {
      const diff = Math.ceil(
        (new Date(this.reservationForm.dateFin).getTime() - new Date(this.reservationForm.dateDebut).getTime()) / (1000 * 60 * 60 * 24)
      );
      this.reservationForm.montantTotal = diff * this.reservationForm.logementReservation.prix;
    }
  }

  submitForm() {

    
    
    this.closeModal();
  }

  editReservation(index: number) {
    this.isEditMode = true;
    this.editIndex = index;
    this.reservationForm = { ...this.reservations[index] };
    this.showModal = true;
  }

  deleteReservation(index: number) {
    this.reservations.splice(index, 1);
  }
}