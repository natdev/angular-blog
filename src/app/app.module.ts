import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostListItemComponent } from './PostListItem/PostListItem.component';
import { PostListComponent } from './PostList/PostList.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListItemComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
