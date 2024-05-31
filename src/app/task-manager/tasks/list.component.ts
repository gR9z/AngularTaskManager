import { Component } from '@angular/core';
import { ITask, TaskService } from '../../service/task.service/task.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  filterBy: string = 'all';

  constructor(public taskService: TaskService) {}

  deleteTask(task: ITask) {
    this.taskService.delete(task);
  }

  completeTask(task: ITask) {
    this.taskService.isCompleted(task);
  }
}
