import { Component, OnInit } from '@angular/core';
import { timeout } from 'q';

@Component({
  selector: 'app-header-content',
  templateUrl: './header-content.component.html',
  styleUrls: ['./header-content.component.css']
})
export class HeaderContentComponent implements OnInit {
  nerdsComeTo = 'Share';
  nerdsComeToList = ['Develop', 'Improve', 'Excel', 'Learn', 'Meet', 'Hire', 'Play', 'Teach'];
  nerdsPictureList = ['../../../assets/wolverien.png', '../../../assets/cuteninja.png', '../../../assets/minecraft.png'];
  nerdPicture = '../../../assets/wolverien.png';
  inputedEmail = '';

  newContentWord() {
      const index = Math.floor(Math.random() * this.nerdsComeToList.length);
      this.nerdsComeTo  = this.nerdsComeToList[index];
  }

  newNerdPicture() {
    const index = Math.floor(Math.random() * this.nerdsPictureList.length);
    this.nerdPicture = this.nerdsPictureList[index];
  }
  constructor() {
    setInterval(() => {
      this.newContentWord();
      this.newNerdPicture();
    }, 3000);
  }

  ngOnInit() {
  }

  emailChange(event) {
    this.inputedEmail = event.target.value;
  }

  getStarted() {
    alert('Thank you for Subscribing! More details have been sent to ' + this.inputedEmail);
  }



}
