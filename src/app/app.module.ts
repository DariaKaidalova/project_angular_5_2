import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/*routing*/
import { RoutingModule } from './modules/routing.module';

/* services */
import { MockRestService } from './services/mock-rest.service';
import { FunctionsService } from './services/functions.service';
import { StorageService } from './services/storage.service';

/*components*/
import { AppComponent } from './app.component';
import { ContentComponent } from './components/content/content.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { CommentsComponent } from './components/comments/comments.component';
import { ColumnsComponent } from './components/columns/columns.component';
import { PanelComponent } from './components/panel/panel.component';
import { ListComponent } from './components/list/list.component';
import { CommentsFormAddingComponent } from './components/comments-form-adding/comments-form-adding.component';
import { TasksFormAddingComponent } from './components/tasks-form-adding/tasks-form-adding.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { CommentsListComponent } from './components/comments-list/comments-list.component';

/*pipes*/
import { CropTextPipe } from './pipes/crop-text.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    TasksComponent,
    CommentsComponent,
    ColumnsComponent,
    PanelComponent,
    ListComponent,
    CommentsFormAddingComponent,
    TasksFormAddingComponent,
    TasksListComponent,
    CommentsListComponent,
    CropTextPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule
  ],
  providers: [
    MockRestService,
    FunctionsService,
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
