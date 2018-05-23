import { Comment } from './comment.interface';

export interface Task {
  id: string;
  name: string;
  commentsList: Array<Comment>
}
