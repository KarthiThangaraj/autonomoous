import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  active;
  mob: boolean;
  web: boolean = true;
  constructor() { }

  ngOnInit() {
    this.active = location.href.split('/')[location.href.split('/').length-1];
    window.onresize = () => {
      this.mob = window.innerWidth <= 500
      this.web = window.innerWidth >= 500
    };
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

}
