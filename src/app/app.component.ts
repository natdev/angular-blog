import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'blog';
  posts = [{title:'titre', content:'contenu', loveIts:0,created_at:new Date()}, {title:'titre', content:'contenu', loveIts:0,created_at:new Date()}, {title:'titre', content:'contenu', loveIts:0,created_at:new Date()}];



}
