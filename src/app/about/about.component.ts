import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatCardModule],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>About TaskFlow</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <p>
          TaskFlow is a modern, intuitive task management application designed to help you stay organized
          and productive. With its clean interface and responsive design, TaskFlow makes it easy to
          create, track, and complete your daily tasks from any device.
        </p>
        <p>
          Built with Angular and Material Design, TaskFlow provides a seamless user experience with
          features like task categorization, completion tracking, and an organized card-based layout.
        </p>
      </mat-card-content>
    </mat-card>
  `
})
export class AboutComponent {}