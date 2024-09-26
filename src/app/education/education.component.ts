import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  education: Array<any> = [];

  ngOnInit(): void {
    let edu1 = {
      fecha: "2018-2021",
      ubicacion: "Cbtis No 47, Cordoba, Ver",
      titulo: "Tecnico en programación",
      institucion: "CBTIS No. 47",
      logros: [
        { descripcion: "Graduado con honores" },
        { descripcion: "Proyecto Practico Servicio Automotriz Remoto" }
      ]
    };

    let edu2 = {
      fecha: "2021-2025",
      ubicacion: "Ixtaczoquitlan, Veracruz",
      titulo: "Licenciatura en Ingenieria de Software",
      institucion: "Universidad Veracruzana",
      logros: [
        { descripcion: "Especialización en Machine Learning" },
        { descripcion: "Proyecto de conservacion de areas boscosas en Oregon, California utilizando tecnologias" }
      ]
    };

    this.education.push(edu1);
    this.education.push(edu2);
    console.log(this.education);
  }
}
