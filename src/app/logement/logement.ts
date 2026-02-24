import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Log {
  nom: string;
  ville: string;
  prix: number;
  disponible: boolean;
  images: string[];
}
@Component({
  selector: 'app-logement',
  imports: [FormsModule, CommonModule],
  templateUrl: './logement.html',
  styleUrl: './logement.css',
})

export class Logement {
  role: string = 'guest'; // peut être 'user', 'admin', 'guest', etc.
  // Liste des logements
  logements: Log[] = [];

  // Formulaire
  logementForm: Log = {
    nom: '', ville: '', prix: 0, disponible: true,
    images: []
  };

  isEditMode = false;
  editIndex: number | null = null;



  // Supprimer un logement
  deleteLogement(index: number) {
    this.logements.splice(index, 1);
  }

  // Réinitialiser le formulaire
resetForm() {
    this.logementForm = {
      nom: '',
      ville: '',
      prix: 0,
      disponible: true,
      images: []   // ✅ reset images aussi
    };
    this.isEditMode = false;
    this.editIndex = null;
  }

  // Gérer l'image
onFileChange(event: any) {
  const files = event.target.files;
  if (!files) return;

  this.logementForm.images = [];

  for (let i = 0; i < files.length; i++) {
    const reader = new FileReader();
    reader.onload = () => {
      this.logementForm.images!.push(reader.result as string);
    };
    reader.readAsDataURL(files[i]);
  }
}

  showModal = false;

  openModal() {
    this.resetForm();
    this.isEditMode = false;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  submitForm() {
    if (this.isEditMode && this.editIndex !== null) {
      this.logements[this.editIndex] = { ...this.logementForm };
    } else {
      this.logements.push({ ...this.logementForm });
    }

    this.closeModal();
  }

  editLogement(index: number) {
    this.isEditMode = true;
    this.editIndex = index;
    this.logementForm = { ...this.logements[index] };
    this.showModal = true;
  }


}
