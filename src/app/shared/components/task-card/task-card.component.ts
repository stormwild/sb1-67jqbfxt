import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Task } from '../../../core/models/task.model';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule
  ],
  template: `
    <mat-card class="task-card">
      <mat-card-content>
        <mat-checkbox
          [checked]="task.completed"
          (change)="onToggleComplete()"
          color="primary"
        >
          <span [class.completed]="task.completed">{{ task.title }}</span>
        </mat-checkbox>
      </mat-card-content>
      <mat-card-actions align="end">
        <button mat-icon-button color="warn" (click)="onDelete()">
          <mat-icon>delete</mat-icon>
        </button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [`
    .completed {
      text-decoration: line-through;
      color: #888;
    }
    .task-card {
      margin-bottom: 16px;
    }
  `]
})
export class TaskCardComponent {
  @Input() task!: Task;
  @Output() toggleComplete = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();

  onToggleComplete(): void {
    this.toggleComplete.emit();
  }

  onDelete(): void {
    this.delete.emit();
  }
}