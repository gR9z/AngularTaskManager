import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from './task.service/task.service';
import { TaskCountPipe } from './task-count.pipe/task-count.pipe';
import { FilterTasksPipe } from './filter-tasks.pipe/filter-tasks.pipe';

@NgModule({
  declarations: [TaskCountPipe, FilterTasksPipe],
  imports: [CommonModule],
  exports: [TaskCountPipe, FilterTasksPipe],
  providers: [TaskService],
})
export class ServiceModule {}
