import { Injectable } from '@angular/core';

export interface ITask {
  title: string;
  completed: boolean;
}

@Injectable()
export class TaskService {
  private tasks: ITask[] = [
    { title: 'Buy groceries', completed: false },
    { title: 'Complete project report', completed: true },
    { title: 'Schedule dentist appointment', completed: false },
    { title: 'Exercise for 30 minutes', completed: false },
    { title: 'Read a chapter of a book', completed: true },
  ];

  constructor() {}

  add(task: string): void {
    this.tasks.push({ title: task, completed: false });
  }

  getTasks(): ITask[] {
    return this.tasks;
  }

  delete(task: ITask): void {
    this.tasks = this.tasks.filter((t) => t !== task);
  }

  isCompleted(task: ITask): void {
    task.completed = !task.completed;
  }

  getUncompletedTaskCount(): number {
    return this.tasks.filter((task) => task.completed === false).length;
  }
}
