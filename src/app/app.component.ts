import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskManagerModule } from './task-manager/task-manager.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskManagerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Task Manager';
}
