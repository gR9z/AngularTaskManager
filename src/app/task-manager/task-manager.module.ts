import { ServiceModule } from './../service/service.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskManagerComponent } from './task-manager.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './tasks/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskLineComponent } from './task-line/task-line.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [
    TaskManagerComponent,
    FormComponent,
    ListComponent,
    TaskLineComponent,
    FilterComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, ServiceModule, FormsModule],
  exports: [TaskManagerComponent],
})
export class TaskManagerModule {}
