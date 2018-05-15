import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  toggleNavBar: boolean = true;
  toggleMobileNavBar: boolean = false;
  breakpoint: number = 885;
  constructor() { }

  onResize(event) {
      const w = event.target.innerWidth;
      if (w >= this.breakpoint) {
        this.toggleNavBar = true;
        this.toggleMobileNavBar = false;
      } else {
        this.toggleNavBar = false;
        this.toggleMobileNavBar = true;
      }
    }

  ngOnInit() {
  }

}
