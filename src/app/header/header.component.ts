import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ColorService } from '../services/color.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() color:any = [];

  constructor(public userService:UserService,private router:Router,private colorService:ColorService) { }

  ngOnInit(): void {
    let str = this.colorService.getData("user")
    if(str !== null){
      this.userService.user = JSON.parse(str);
    }
  }

  logout(){
    if(this.userService.user != undefined){
      this.userService.user = undefined;
      this.router.navigateByUrl('/one');
      this.colorService.clearData();
    }else{
      this.router.navigateByUrl('/two');
    }

  }

}
