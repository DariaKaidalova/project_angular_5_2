import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

import { CommentsComponent } from "./comments.component";
import { CommentsListComponent } from "../comments-list/comments-list.component";
import { CommentsFormAddingComponent } from "../comments-form-adding/comments-form-adding.component";
import { ReactiveFormsModule } from "@angular/forms";


class CommentsComponentPageObject {

  constructor(private _fixture: ComponentFixture<CommentsComponent>) {}

  get header() { return this._fixture.debugElement.query(By.css('.b-title')); }
  get commentsList() { return this._fixture.debugElement.query(By.css('.b-comments__list')); }
  get newCommentSection() { return this._fixture.debugElement.query(By.css('.b-comments__form')); }
  get newCommentForm() { return this._fixture.debugElement.query(By.css('.b-commentFormAdding')); }
  get newCommentTextArea() { return this._fixture.debugElement.query(By.css('#itemText')); }

}


describe('Comments component:', () => {

  let fixture: ComponentFixture<CommentsComponent>;
  let subject: CommentsComponent;
  let pageObject: CommentsComponentPageObject;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [CommentsComponent, CommentsListComponent, CommentsFormAddingComponent]
    });

    fixture = TestBed.createComponent(CommentsComponent);
    subject = fixture.componentInstance;
    pageObject = new CommentsComponentPageObject(fixture);
  });

  it('should display tasks number', () => {
    subject.taskNumber = '2';

    fixture.detectChanges();

    expect(pageObject.header.nativeElement.innerText).toEqual('Comments #3');
  });

  it('should display comments when tasks list is not empty', () => {
    subject.isEmptyTasksList = false;

    fixture.detectChanges();

    expect(pageObject.commentsList.nativeElement.hidden).toBeFalsy();
  });

  it('should display new comment form when tasks list is not empty', () => {
    subject.isEmptyTasksList = false;

    fixture.detectChanges();

    expect(pageObject.newCommentSection.nativeElement.hidden).toBeFalsy();
  });

  it('should not display comments when tasks list is empty', () => {
    subject.isEmptyTasksList = true;

    fixture.detectChanges();

    expect(pageObject.commentsList).toBeNull();
  });

  it('should not display new comment form when tasks list is empty', () => {
    subject.isEmptyTasksList = true;

    fixture.detectChanges();

    expect(pageObject.newCommentSection).toBeNull();
  });

});
