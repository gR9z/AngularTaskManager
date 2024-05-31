import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from '../../../service/task.service/task.service';

@Component({
  selector: 'app-task-line',
  templateUrl: './task-line.component.html',
  styleUrl: './task-line.component.css',
})
export class TaskLineComponent {
  @Input() task!: ITask;
  @Output() deleteTask = new EventEmitter<ITask>();
  @Output() completeTask = new EventEmitter<ITask>();

  deleteHandler() {
    this.deleteTask.emit(this.task);
  }

  completeHandler() {
    this.completeTask.emit(this.task);
  }
}
