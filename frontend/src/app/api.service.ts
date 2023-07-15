import { Injectable,Output,EventEmitter } from "@angular/core";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Users } from "./users";

@Injectable({
    providedIn: 'root'
})

export class ApiService{

    baseUrl:string = "http://localhost/angularCRUD/";
    constructor(private httpClient : HttpClient) { }


    public userregistration(f_name:any,l_name:any,email:any,password:any,mobile:any){
        return this.httpClient.post<any>(this.baseUrl + '/register.php',
        {
            f_name,l_name,email,password,mobile}
        )
        .pipe(map(Users => {
            return Users;
        }));
    }


  //  public comments(name:any,email:any,commands:any,mobile:any){
    //    return this.httpClient.post<any>(this.baseUrl + '/commands.php',
      //  {
        //    name,email,commands,mobile}
        //)
       // .pipe(map(Users => {
        //    return Users;
      //  }));
   // }


    public cart(foodName:any,foodPrice:any){
       
        return this.httpClient.post<any>(this.baseUrl + '/cart.php',
        {
           foodName,foodPrice }
        )
        .pipe(map(Users => {
            return Users;
        }));
    }

    public userlogin(email:any,password:any){
        return this.httpClient.post<any>(this.baseUrl + '/login.php',
        {
          email,password}
        )
        .pipe(map(Users => {
           // console.log(Users.email)
            this.setToken(Users.email);
            //this.getLoggedInName.emit(true);
            return Users;
        }));
    }

    setToken(token: string){
        localStorage.setItem('token',token);
    }

} 
