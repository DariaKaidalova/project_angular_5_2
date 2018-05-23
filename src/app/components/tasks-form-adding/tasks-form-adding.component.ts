import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tasks-form-adding',
  templateUrl: './tasks-form-adding.component.html',
  styleUrls: ['./tasks-form-adding.component.css']
})
export class TasksFormAddingComponent implements OnInit {
  @Output() submitAction: EventEmitter<any> = new EventEmitter();
  @Input() isNotUniqueName: boolean = false;
  taskName: string = '';
  taskAddingGroup: FormGroup;
  messages = {
    repeatedName: 'The task name already exists'
  }

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {

    this.initForm();

  }

  ngOnChanges(changes: any) {

    this.initForm();
    
  }

  ngDoCheck() {

    this.setItemValues();

  }

  private initForm(): void {

    this.taskAddingGroup = this._formBuilder.group({
      itemName: [this.taskName, [Validators.required]]
    }); 

  }

  private setItemValues(): void {

    this.taskName = this.taskAddingGroup.value.itemName;

  }

  onSubmit(event, name: string): void {

    this.submitAction.emit([event, name]);
    this.taskAddingGroup.reset();

  }

}
