import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-init',
  imports: [RouterModule],   // ✅ AJOUTE ÇA

  templateUrl: './init.html',
  styleUrl: './init.css',
})
export class Init {

}
