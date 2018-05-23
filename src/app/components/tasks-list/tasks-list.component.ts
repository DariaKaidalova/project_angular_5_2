import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CropTextPipe } from '../../pipes/crop-text.pipe';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  @Input() list: Array<Task> = [];
  @Input() activeId = 0;
  @Output() deleteAction: EventEmitter<number> = new EventEmitter();
  @Output() activeAction: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  deleteItem(id): void {

    this.deleteAction.emit(id);

  }

  activeItem(id): void {

    this.activeAction.emit(id);

  }


}
