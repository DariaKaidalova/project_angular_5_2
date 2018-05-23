import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comment } from '../../interfaces/comment.interface';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() taskNumber: string = '';
  @Input() list: Array<Comment> = [];
  @Input() isEmptyTasksList: boolean = false;
  @Output() submitAction: EventEmitter<any> = new EventEmitter();
  countedTaskNumber: number = 1;

  constructor() { }

  ngOnInit() {

    this.countTaskNumber();

  }

  ngOnChanges(changes: any) {

    this.countTaskNumber();
    
  }

	addItem(event, text): void {

		this.submitAction.emit([event, text]);

	}

  countTaskNumber(): void {

    this.countedTaskNumber = Number(this.taskNumber) + 1;

  }

}
