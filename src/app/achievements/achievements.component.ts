import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.css'
})
export class AchievementsComponent implements OnInit {
  achievements: Array<any> = [];

  ngOnInit(): void {
    this.achievements = [
      {
        titulo: "Desarrollo de aplicación móvil innovadora",
        descripcion: "Lideré el equipo que desarrolló una aplicación móvil que aumentó la eficiencia operativa de la empresa en un 30%.",
        fecha: "2022"
      },
      // ... otros logros ...
    ];
    console.log('Achievements initialized:', this.achievements);
  }
}
