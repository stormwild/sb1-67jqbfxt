import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, LayoutComponent, BrowserAnimationsModule],
  template: '<app-layout></app-layout>'
})
export class AppComponent {}