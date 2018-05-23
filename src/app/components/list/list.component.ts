import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { Task } from '../../interfaces/task.interface';
import { Comment } from '../../interfaces/comment.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(public _storageService: StorageService) { }

  ngOnInit() {

    this._storageService.loadTasksList();
  
  }

  ngOnChanges(changes: any) {

    this._storageService.loadTasksList();
    
  }

  deleteTaskItem(id: string): void {

    this._storageService.deleteTaskItem(id);

  }

  activeTaskItem(id: string): void {

    this._storageService.setActiveTaskItem(id);

  }

  addTaskItem(event, name: string): void {

    event.preventDefault();
    this._storageService.addTaskItem(name);

  }

  addCommentItem(event: KeyboardEvent, text: string): void {

    event.preventDefault();
    this._storageService.addCommentItem(text);

  }

}
