import { Component } from '@angular/core';
import { TaskService } from '../service/task.service/task.service';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrl: './task-manager.component.css',
})
export class TaskManagerComponent {
  placeholder = 'Enter a task';

  constructor(public taskService: TaskService) {}

  submitForm(task: string) {
    this.taskService.add(task);
  }
}
