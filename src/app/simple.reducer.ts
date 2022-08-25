import { Action } from '@ngrx/store';


export function simpleReducer(state: string = '', action: Action){
console.log(action.type);

switch(action.type){
  case 'red':
    return state = 'red'
  case 'purple':
     return state = 'purple'
  case 'fuchsia':
     return state = 'fuchsia'
  case 'olive':
     return state = 'olive'
  case 'teal':
     return state = 'teal'
  case 'blueviolet':
     return state = 'blueviolet'
  case 'chocolate':
     return state = 'chocolate'
  case 'sandybrown':
     return state = 'sandybrown'
  case 'reset':
     return state = ''
  default:
     return state;
}

}
