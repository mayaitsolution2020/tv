import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route: Router,
    @Inject(DOCUMENT) private _document: Document) { }

  ngOnInit() {
  }

  logoutUser() {
    localStorage.removeItem("userToken");
    this.route.navigate(['/login'])
    this.refresh();
  }
  refresh(): void {
    this._document.defaultView.location.reload();
  }

}
