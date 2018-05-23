import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task.interface';

@Injectable()
export class FunctionsService {

  constructor() {}

  deleteTaskItem(id: string, list: Array<Task>): Array<Task> {

    for(let i = 0; i < list.length; i++) {
      if(list[i].id === id) {
        list.splice(i, 1);
        break;
      }
    }

    return list;
	}

  resetActiveId(id: string, activeId: string, list: Array<Task>): string {
   
    if (!list || list.length === 0) {
      return null;
    }

    let newId = activeId;

    if(id === activeId) {
      newId = list[0].id;
    }

    return newId;

  }

  setCommentsList(id: string, list: Array<Task>): any {

    if(!id || list.length === 0) {
      return []
    }
    else {
      let taskWithId = list.find(task => task.id === id);
      return taskWithId ? taskWithId.commentsList : [];
    }

  }

  clearCommentsList(list): any {

    list = [];
    return list;

  }

  addTaskItem(name: string, list: Array<Task>, isUsedName: boolean, activeId: string): any {

    let finalActiveId = activeId;
    
    let item = {
      id: '',
      name: '',
      commentsList: []
    }

    if(!isUsedName) {
      item.id = String(list.length);
      item.name = name;
      list.push(item);
      finalActiveId = item.id;
    }
    else {
      console.error(`Task ${name} was not added`);
    }

    return { list: list, id: finalActiveId }

  }

  addCommentItem(id: string, text: string, list: Array<Task>): Array<Task> {

    let item = {
      id: '',
      text: ''
    };

    let isEmpty = this.checkEmptyComment(text);

    if(!isEmpty) {

      for(let i = 0; i < list.length; i++) {
        if(list[i].id === id) {
          item.id = String(list[i].commentsList.length);
          item.text = text;
          list[i].commentsList.push(item);
          break;
        }
      }

    }

    return list
  }

  checkEmptyTasksList(list: Array<Task>): boolean {

    return list.length === 0;

  }

  checkEmptyComment(text: string): boolean {

    let isEmpty = false;

    if(text === null || text === '') {
      isEmpty = true;
    }

    return isEmpty;

  }

  сheckIdenticalNames(comparableName: string, list: Array<Task>): boolean {

    let isUsedName = false;

    for(let i = 0; i < list.length; i++) {
      if(list[i].name === comparableName) {
        isUsedName = true;
        break;
      }
      else isUsedName = false;
    }

    return isUsedName;

  }

  checkUniqueMessageNecessity(isEmptyList, isNotUniqueName) {

    if(!isEmptyList) {
      return isNotUniqueName
    }
    else {
      return false;
    }

  }

}
