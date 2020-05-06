import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-christmas',
  templateUrl: './christmas.component.html',
  styleUrls: ['./christmas.component.css']

})
export class ChristmasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


@Component({
  selector: 'app-christmas',
  templateUrl: './christmasprint.html',
  styleUrls: ['./christmas.component.css']

})
export class ChristmasPrintComponent implements OnInit {

  printPage() {
    window.print();
  }
  constructor() { }

  ngOnInit() {
  }

}
