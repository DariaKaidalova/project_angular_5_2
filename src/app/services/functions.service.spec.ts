import { FunctionsService } from "./functions.service";
import { Task } from "../interfaces/task.interface";
import { Comment } from "../interfaces/comment.interface";

describe('Functions Service: ', () => {

  const task1: Task = {
    id: '0',
    name: 'The first task',
    commentsList: []
  };

  const task2: Task = {
    id: '1',
    name: 'The second Task',
    commentsList: []
  };

  const task3: Task = {
    id: '2',
    name: 'The third task',
    commentsList: []
  }

  const taskName1: string = 'The first task'
  const taskName3: string = 'The third task'

  let subject: FunctionsService;

  beforeEach(() => {
    subject = new FunctionsService();
  });

  it('Should delete task', () => {
    const result = subject.deleteTaskItem('0', [task1, task2]);

    expect(result.length).toEqual(1);
    expect(result).toContain(task2);
  });

  it('Should add task', () => {
    const result = subject.addTaskItem(taskName3, [task1, task2], false, '1');

    expect(result.list.length).toEqual(3);
    expect(result.list).toEqual([task1, task2, task3]);
  });

  it('Should not add task if name repeats', () => {
    const result = subject.addTaskItem(taskName1, [task1, task2], true, '1');

    expect(result.list.length).toEqual(2);
    expect(result.list).toEqual([task1, task2]);
  });

});
