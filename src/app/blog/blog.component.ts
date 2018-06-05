import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  commentText: string = '';
  users = [
    {
      id: 0,
      name: 'Jessica',
      picture: 'http://icons.iconarchive.com/icons/itzikgur/my-seven/512/Girls-Red-Dress-icon.png',
      text: 'His face! So cuteee',
    },
    {
      id: 1,
      name: 'Mikey',
      picture: 'https://orig00.deviantart.net/8fb9/f/2016/068/b/0/deadpool_icon_by_goldennove-d9u06cn.gif',
      text: 'Thats one badass CEO'
    }

];


  constructor() { }

  ngOnInit() {
  }

  submitComment() {
    this.commentText ?
    this.users.push({
      id: 2, // would be user.id from database
      name: 'Elan', // user.name from database
      picture: 'https://orig00.deviantart.net/eb80/f/2011/297/a/e/free_avatar__ghost_by_tipleloop-d4dsfzo.gif', // etc
      text: this.commentText // 2 way binding from the text-area
    }) : alert('No text');
    this.commentText = '';
  }
}
