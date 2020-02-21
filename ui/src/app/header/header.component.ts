import { Component, OnInit, Input} from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  appTitle:string = "";
  firstLetter: string = "";
  unreadMessagesCount:number = 0;

  @Input()
  showSetting:boolean = true;

  constructor() { }


  ngOnInit() {
    console.log("showSetting --->", this.showSetting)
  }

}
