import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  routerOutletComponent!: any;

  onActivate(value: string) {
    //this.color = value;
    this.routerOutletComponent = value;
  }
}
