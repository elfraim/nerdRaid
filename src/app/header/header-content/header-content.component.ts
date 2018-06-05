import { Component, OnInit } from '@angular/core';
import { timeout } from 'q';

@Component({
  selector: 'app-header-content',
  templateUrl: './header-content.component.html',
  styleUrls: ['./header-content.component.css']
})

export class HeaderContentComponent implements OnInit {
  nerdsComeTo = 'Share'; // Updating string
  nerdsComeToList = ['Develop', 'Improve', 'Excel', 'Learn', 'Meet', 'Hire', 'Play', 'Teach']; // String list for nerdsComeTo
  nerdsPictureList = ['wolverien.png', 'cuteninja.png', 'minecraft.png']; // Changing pictures
  nerdPicture = `../../../assets/wolverien.png`;
  inputedEmail = '';
  userEmailList = [];

  // Generates new word for nerdsComeTo
  newContentWord() {
      const index = Math.floor(Math.random() * this.nerdsComeToList.length);
      this.nerdsComeTo  = this.nerdsComeToList[index];
  }

  // Generates a new picture
  newNerdPicture() {
    const index = Math.floor(Math.random() * this.nerdsPictureList.length);
    const picture = this.nerdsPictureList[index];
    this.nerdPicture = `../../../assets/${picture}`;
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
    this.userEmailList.push(this.inputedEmail);
    this.inputedEmail = '';
    console.log(this.userEmailList);
  }



}
