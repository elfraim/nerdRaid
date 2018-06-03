import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  webDevs = 254;
  webDesigners = 165;
  webTeachers = 24;
  marketingGurus = 67;
  showTeachersDiv = false;
  showWebDevDiv = false;
  showDesignersDiv = false;

  constructor() { }

  ngOnInit() {
  }

  showTeachersText() {
    this.showTeachersDiv = true;
    this.showWebDevDiv = false;
    this.showDesignersDiv = false;
  }

  showWebDevText() {
    this.showWebDevDiv = true;
    this.showTeachersDiv = false;
    this.showDesignersDiv = false;
  }

  showDesignersText() {
    this.showDesignersDiv = true;
    this.showWebDevDiv = false;
    this.showTeachersDiv = false;
  }

  getStarted() {
    alert('Thank you for the intrest! This is still under construction');
  }
}
