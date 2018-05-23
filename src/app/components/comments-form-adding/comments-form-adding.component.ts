import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comments-form-adding',
  templateUrl: './comments-form-adding.component.html',
  styleUrls: ['./comments-form-adding.component.css']
})
export class CommentsFormAddingComponent implements OnInit {
  @Output() submitAction: EventEmitter<any> = new EventEmitter();
  commentText: string = '';
  commentAddingGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

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

    this.commentAddingGroup = this._formBuilder.group({
      itemText: [this.commentText, [Validators.required]]
    });

  }

  private setItemValues(): void {

    this.commentText= this.commentAddingGroup.value.itemText;
  }

  onSubmit(event, text: string): void {

    if (event.code == 'Enter' && event.ctrlKey === true) {
      this.submitAction.emit([event, text]);
      this.commentAddingGroup.reset();
    }

  }

}
