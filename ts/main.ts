import {getUsers} from './users';
import login from './login';
import loggedin from './loggedin';

console.log(getUsers());

loggedin();

document.getElementById('loginButton')!.addEventListener('click',function(){
    e.preventDefault();


let username:string = (<HTMLInputElement>document.getElementById('username')).value;

let password:string = (<HTMLInputElement>document.getElementById('password')).value;


login(getUsers()[0], {username,password});
}