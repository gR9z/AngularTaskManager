import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent implements OnInit {
  @Input({ required: true }) placeHolderInput!: string;
  @Output() submitForm = new EventEmitter();

  constructor() {}

  form = new FormGroup({
    task: new FormControl('', {
      validators: [Validators.required, Validators.minLength(3)],
    }),
  });

  get taskError() {
    return (
      this.form.controls.task.hasError('required') &&
      this.form.controls.task.touched
    );
  }

  ngOnInit(): void {}

  onSubmitEvent() {
    this.submitForm.emit(this.form.value.task);
    this.form.reset();
  }
}
