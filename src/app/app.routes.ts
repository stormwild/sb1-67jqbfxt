import { Routes } from '@angular/router';
import { TasksComponent } from './features/tasks/tasks.component';
import { AboutComponent } from './features/about/about.component';

export const routes: Routes = [
  { path: '', component: TasksComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' }
];