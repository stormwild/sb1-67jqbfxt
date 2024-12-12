import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TaskCardComponent } from '../../shared/components/task-card/task-card.component';
import { TaskService } from '../../core/services/task.service';
import { Task } from '../../core/models/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    TaskCardComponent
  ],
  template: `
    <div class="task-input">
      <mat-form-field class="full-width">
        <mat-label>Add new task</mat-label>
        <input 
          matInput 
          [(ngModel)]="newTaskTitle" 
          (keyup.enter)="addTask()" 
          placeholder="Enter task title"
        >
        <button matSuffix mat-icon-button (click)="addTask()">
          <mat-icon>add</mat-icon>
        </button>
      </mat-form-field>
    </div>

    <div class="task-grid">
      <app-task-card
        *ngFor="let task of tasks"
        [task]="task"
        (toggleComplete)="toggleTaskCompletion(task.id)"
        (delete)="deleteTask(task.id)"
      ></app-task-card>
    </div>
  `,
  styles: [`
    .task-input {
      padding: 20px;
    }
  `]
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  newTaskTitle = '';

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  addTask(): void {
    if (this.newTaskTitle.trim()) {
      this.taskService.addTask(this.newTaskTitle);
      this.newTaskTitle = '';
    }
  }

  deleteTask(taskId: number): void {
    this.taskService.deleteTask(taskId);
  }

  toggleTaskCompletion(taskId: number): void {
    this.taskService.toggleTaskCompletion(taskId);
  }
}