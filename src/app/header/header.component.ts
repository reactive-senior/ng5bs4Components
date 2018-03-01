import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logoUrl: string = "../../assets/image/logo_steam.png";
  profileImage: string = "../../assets/image/user.png";
  messageData = [];
  constructor() {
    let message = {id: 1, userName: 'Annonymous', userImg: this.profileImage, msgSubject:'Greetings Msg', msgContent: 'Hi, my message content goes here and not any other things here.'};
    for(let i = 0; i < 4; i++)
      this.messageData.push(message);
  }

  ngOnInit() {
  }

}
