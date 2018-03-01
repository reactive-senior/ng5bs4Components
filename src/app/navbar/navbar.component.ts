import { Component, OnInit } from '@angular/core';

import { NavItem } from "../navItem";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  label: string = "Nav Label";
  route: string = "";
  // imagePath: string = "../../assets/image/user.png";
  imagePath: string = "anchor";
  links = [];
  constructor() {
    let temp = [];
    for(let i = 0; i < 3; i++)
      temp.push(new NavItem(this.label, this.route, this.imagePath, []));
    temp[0].routerLink = "settings";
    this.links.push(temp[0]);
    this.links.push(new NavItem(this.label, this.route, this.imagePath, [temp[0], temp[1]]));
    this.links.push(new NavItem(this.label, this.route, this.imagePath, [temp[0], temp[1], temp[2]]));
  }

  ngOnInit() {
  }

}
