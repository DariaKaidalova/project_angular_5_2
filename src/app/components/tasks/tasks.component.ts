import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  @Input() list: Array<Task> = [];
  @Input() activeId: string = '0';
  @Input() isNotUniqueName: boolean = false;
  @Input() isEmptyTasksList: boolean = false;
  @Output() deleteAction: EventEmitter<number> = new EventEmitter();
  @Output() activeAction: EventEmitter<number> = new EventEmitter();
  @Output() submitAction: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  deleteItem(id): void {

    this.deleteAction.emit(id);

  }

  activeItem(id): void {

    this.activeAction.emit(id);

  }

  addItem(event, name): void {

    this.submitAction.emit([event, name]);

  }
}
