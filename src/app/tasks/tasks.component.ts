import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Task } from './task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
  ],
  template: `
    <div class="task-input">
      <mat-form-field class="full-width">
        <mat-label>Add new task</mat-label>
        <input matInput [(ngModel)]="newTaskTitle" (keyup.enter)="addTask()" placeholder="Enter task title">
        <button matSuffix mat-icon-button (click)="addTask()">
          <mat-icon>add</mat-icon>
        </button>
      </mat-form-field>
    </div>

    <div class="task-grid">
      <mat-card *ngFor="let task of tasks" class="task-card">
        <mat-card-content>
          <mat-checkbox
            [(ngModel)]="task.completed"
            color="primary"
          >
            <span [class.completed]="task.completed">{{ task.title }}</span>
          </mat-checkbox>
        </mat-card-content>
        <mat-card-actions align="end">
          <button mat-icon-button color="warn" (click)="deleteTask(task)">
            <mat-icon>delete</mat-icon>
          </button>
        </mat-card-actions>
      </mat-card>
    </div>
  `,
  styles: [`
    .task-input {
      padding: 20px;
    }
    .completed {
      text-decoration: line-through;
      color: #888;
    }
  `]
})
export class TasksComponent {
  tasks: Task[] = [];
  newTaskTitle = '';

  addTask() {
    if (this.newTaskTitle.trim()) {
      this.tasks.push({
        id: Date.now(),
        title: this.newTaskTitle,
        completed: false,
        createdAt: new Date()
      });
      this.newTaskTitle = '';
    }
  }

  deleteTask(task: Task) {
    this.tasks = this.tasks.filter(t => t.id !== task.id);
  }
}