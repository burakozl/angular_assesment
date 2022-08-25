import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ColorService } from '../services/color.service';
import { UserService } from '../services/user.service';

interface AppState {
  color: string;
}

@Component({
  selector: 'app-contentwithgrid',
  templateUrl: './contentwithgrid.component.html',
  styleUrls: ['./contentwithgrid.component.css']
})
export class ContentwithgridComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
    ])
  });

  color$:Observable<string>
  allowNavigation = true;

  constructor(private store: Store<AppState>,private colorService:ColorService,private userService:UserService) {
    this.color$ = this.store.select('color');
   }
  ngOnInit(): void {

  }
  changeColor(color:string){
    this.store.dispatch({type:`${color}`});
    //this.addNewItem(this.color$);
  }
  reset(){
    this.store.dispatch({type:'reset'});
    this.loginForm.reset();
  }
  login(){
    this.userService.getUser(this.loginForm.value.email).subscribe((res) => {
      if(res.length === 0){
        alert("Böyle bir hesap bulunamadı")
      }else{
        if(res[0].password === this.loginForm.value.password){
          this.userService.user = res[0];
          this.colorService.saveData("user",JSON.stringify(res[0]));
        }else{
          alert("Yanlış şifre");
        }
      }
    })
  }

}
