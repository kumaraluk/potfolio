import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { FloatingNavComponent } from './components/floating-nav/floating-nav.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,SidebarComponent,MainContentComponent,FloatingNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-portfolio-angular';
}
