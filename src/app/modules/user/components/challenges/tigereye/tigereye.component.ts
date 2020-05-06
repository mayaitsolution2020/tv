import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tigereye',
  templateUrl: './tigereye.component.html',
  styleUrls: ['./tigereye.component.css']
})
export class TigerEyeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'app-tigereye',
  templateUrl: './tigereyeprint.html',
  styleUrls: ['./tigereye.component.css']
})
export class TigerEyePrintComponent implements OnInit {
  printPage() {
    window.print();
  }
  constructor() { }

  ngOnInit() {
  }

}
