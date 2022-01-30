import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
    constructor(private router: Router){}
    username: string = "johndoe43"; //a garder dans le local storage
    name:string = "John Doe";
    isAuth:boolean = false; //boolean for authentication state ... a garder dans le local storage pour qu'il n'ait pas a se reconnecter
    /*This is the service where authentication functons are defined */
    signInUser(username:string, password:string){
        return new Promise( //asynchronous function
            (resolve, reject) => {
                setTimeout(
                () => {
                    this.isAuth = true;
                    resolve(true);
                }, 2000
                );
            }
        );
    }
    backupPassword(email:string){
        return new Promise( //asynchronous function
            (resolve, reject) => {
                //Place backend function here
            }
        );
    }
    signOut() {
        
        this.isAuth = false;
        
    }
}