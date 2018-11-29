import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-PostListItem',
  templateUrl: './PostListItem.component.html',
  styleUrls: ['./PostListItem.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number = 0;
  @Input() postCreate: string;


  onLove(){
  return ++this.postLoveIts;


  }
  onDislike(){
    return --this.postLoveIts;
  }
  constructor() { }

  ngOnInit() {
  }

}
