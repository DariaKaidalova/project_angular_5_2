import { Injectable } from '@angular/core';
import { MockRestService } from './mock-rest.service';
import { FunctionsService } from './functions.service';
import { Task } from '../interfaces/task.interface';
import { Comment } from '../interfaces/comment.interface';

@Injectable()
export class StorageService {
  tasksList: Array<Task> = [];
  activeTaskItemId: string = '0';
  commentsList: Array<Comment> = [];
  isNotUniqueName: boolean = false;
  isEmptyTasksList: boolean = false;

  constructor(
    private _mockRestService: MockRestService,
    private _functionsService: FunctionsService) {}

  loadTasksList(): void {

    if(!this._mockRestService.getLocalStorageItems('tasksList')) {
      this._mockRestService.getJSON().subscribe(
        items => {
          this.setList(items.tasksList);
          this.getList();
          this.setActiveTaskItem(this.activeTaskItemId);
          this.checkEmptyTasksList(this.tasksList);
        },
        err => { console.error(err); console.error('cannot GET data from the database'); }
      );
    }
    else {
      this.getList();
      this.setActiveTaskItem(this.activeTaskItemId);
      this.checkEmptyTasksList(this.tasksList);
    }

  }

  deleteTaskItem(id: string): void {

    // delete task
    this.tasksList = this._functionsService.deleteTaskItem(id, this.tasksList);

    // clear task's comments
    this.commentsList = this._functionsService.clearCommentsList(this.commentsList);

    // update LC variable
    this.setList(this.tasksList);

    // set newId, if deleted task was active
    let newId = this._functionsService.resetActiveId(id, this.activeTaskItemId, this.tasksList);

    // set active task
    this.setActiveTaskItem(newId);

    this.checkEmptyTasksList(this.tasksList);

  }

  addTaskItem(name: string): void {

    //check name
    this.isNotUniqueName = this._functionsService.сheckIdenticalNames(name, this.tasksList);

    // add task
    let newTasksData = this._functionsService.addTaskItem(name, this.tasksList, this.isNotUniqueName, this.activeTaskItemId);
    this.tasksList = newTasksData.list;

    // update LC variable
    this.setList(this.tasksList);

    // set active task
    this.setActiveTaskItem(newTasksData.id);

    this.checkEmptyTasksList(this.tasksList);
    
  }

  addCommentItem(text: string): void {

    // add comment to task
    this.tasksList = this._functionsService.addCommentItem(this.activeTaskItemId, text, this.tasksList);

    // update LC variable
    this.setList(this.tasksList);

  }

  setActiveTaskItem(id: string): void {

    // set id of active task
    this.activeTaskItemId = id;

    // set task's comments
    this.commentsList = this._functionsService.setCommentsList(id, this.tasksList);

  }

  checkEmptyTasksList(list): void {

    this.isEmptyTasksList = this._functionsService.checkEmptyTasksList(list);
    this.isNotUniqueName = this._functionsService.checkListContent(this.isEmptyTasksList, this.isNotUniqueName)

  }

  // common actions
  private setList(list: Array<Task>): void {

    this._mockRestService.setLocalStorageItems('tasksList', list);

  }

  private getList(): void {

    this.tasksList = this._mockRestService.getLocalStorageItems('tasksList');

  }
}
  

