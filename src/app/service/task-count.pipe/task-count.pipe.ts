import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskCount',
})
export class TaskCountPipe implements PipeTransform {
  transform(value: number): string {
    if (value === 0) {
      return 'All tasks completed';
    } else if (value === 1) {
      return `${value} task remaining`;
    } else {
      return `${value} tasks remaining`;
    }
  }
}
