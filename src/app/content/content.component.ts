import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ColorService } from '../services/color.service';
import { UserService } from '../services/user.service';

interface AppState {
  color: string;
}

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  registerForm = new FormGroup({
    firstName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
    ]),
    country: new FormControl(null, [Validators.required]),
  });

  // @Output()
  // newItemEvent = new EventEmitter<string>();

  users:Array<any> = [];
  color$:Observable<string>
  allowNavigation = true;

  constructor(private store: Store<AppState>,private colorService:ColorService,private userService:UserService) {
    this.color$ = this.store.select('color');
   }


  ngOnInit(): void {
    this.userService.getUsers().subscribe((res) => {
      this.users = res;
      //console.log(this.users);
    });
  }

  // addNewItem(value: any) {
  //   this.newItemEvent.emit(value);
  // }
  createAccount(){
    let isHaveEmail:boolean = false;
    this.users.forEach((user: { email: any }) => {
      if(this.registerForm.value.email == user.email ){
        isHaveEmail = true;
      }
    });

    if(!isHaveEmail){
      this.userService.createAccount(this.registerForm.value).subscribe((res) => {
      });
      alert("Hesabınız Başarılı bir şekilde oluşturuldu");
    }else if(isHaveEmail){
      alert("Email kullanılıyor");
    }
  }

  changeColor(color:string){
    this.store.dispatch({type:`${color}`});
    this.colorService.saveData('color',JSON.stringify(color));
    //this.addNewItem(this.color$);
  }
  reset(){
    this.store.dispatch({type:'reset'});
    this.registerForm.reset();
    this.colorService.clearData();
  }

}
