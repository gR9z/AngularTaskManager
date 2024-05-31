import { Pipe, PipeTransform } from '@angular/core';
import { ITask } from '../task.service/task.service';

@Pipe({
  name: 'filterTasks',
  pure: false,
})
export class FilterTasksPipe implements PipeTransform {
  transform(tasks: ITask[], ...args: any[]): ITask[] {
    return tasks.filter((task) => {
      if (args[0] === 'all') {
        return true;
      } else if (args[0] === 'completed') {
        return task.completed;
      } else {
        return !task.completed;
      }
    });
  }
}
