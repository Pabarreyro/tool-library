import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  toggleNavBar: boolean = true;
  toggleMobileNavBar: boolean = false;
  showhideMobileNavBar: boolean = false;
  breakpoint: number = 885;
  constructor() { }

  ngOnInit() {
    this.onResize();
  }

  onResize() {
    const w = document.getElementById('navbar').clientWidth;
    if (w <= this.breakpoint) {
      this.toggleNavBar = false;
      this.toggleMobileNavBar = true;
    } else if (w >= this.breakpoint){
      this.toggleNavBar = true;
      this.toggleMobileNavBar = false;
    }
  }

  showhide() {
    return this.showhideMobileNavBar = !this.showhideMobileNavBar;
  }

}
