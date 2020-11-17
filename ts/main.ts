import {getUsers} from './users';
import login from './login';

console.log(getUsers());

document.getElementById('loginButton')!.addEventListener('click',function(){
    e.preventDefault();


let username:string = (<HTMLInputElement>document.getElementById('username')).value;

let password:string = (<HTMLInputElement>document.getElementById('password')).value;


login(getUsers()[0], {username,password});
}