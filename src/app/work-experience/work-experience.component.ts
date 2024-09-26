import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent {
  workExperience: Array<any> = [];

  ngOnInit(): void {
    let work1 = {
      fecha: "2023-2024",
      ubicacion: "Ixta, Ver.",
      puesto: "CEO",
      empresa: "Wild Habitat",
      logros: [
        { descripcion: "Gestion del proyecto" },
        { descripcion: "Lider de desarrollo" }
      ]
    };
    let work2 = {
      fecha: "2022-2023",
      ubicacion: "Fortin, Ver.",
      puesto: "CEO",
      empresa: "WildFire",
      logros: [
        { descripcion: "Construccion de una apliacion para prevencion de incendios forestales" },
        { descripcion: "Creacion de un dron pilotado por IA" }
      ]
    };

    this.workExperience.push(work1);
    this.workExperience.push(work2);
    console.log(this.workExperience);
  }
}
