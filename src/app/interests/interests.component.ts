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
      // ... (el contenido que te proporcioné anteriormente)
    ];
  }
}
