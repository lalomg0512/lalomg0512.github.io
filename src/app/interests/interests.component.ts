import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-interests',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interests.component.html',
  styleUrl: './interests.component.css'
})
export class InterestsComponent implements OnInit {
  interests: Array<any> = [];

  ngOnInit(): void {
    this.interests = [
      {
        categoria: "Tecnología",
        items: [
          "Inteligencia Artificial",
          "Desarrollo de aplicaciones móviles",
          "Internet de las cosas (IoT)"
        ]
      },
      {
        categoria: "Deportes",
        items: [
          "Fútbol",
          "Natación",
          "Ciclismo de montaña"
        ]
      },
      {
        categoria: "Arte y Cultura",
        items: [
          "Fotografía",
          "Música clásica",
          "Literatura contemporánea"
        ]
      },
      {
        categoria: "Viajes",
        items: [
          "Exploración de culturas diferentes",
          "Senderismo en parques nacionales",
          "Gastronomía internacional"
        ]
      }
    ];

    console.log(this.interests);
  }
}
