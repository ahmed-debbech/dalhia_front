import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "app/models/user";
import { catchError, Subject, tap, throwError } from "rxjs";
import { UserStored } from "./user-stored";


@Injectable({providedIn: 'root'})
export class AuthService {

    user = new Subject<UserStored>()

    constructor(private http : HttpClient) {}
    signup(user : User) {
       return this.http.post<User>('http://localhost:8089/api/v1/users' ,user)
       .pipe(catchError(errorRes => {
           let errorMessage = 'An unknown error occured'
           console.log(errorRes)
           if(!errorRes.error && !errorRes.error.error && !errorRes.error.error.error) {
               return throwError(errorMessage)
           }
        errorMessage = errorRes.error.message
        return throwError(errorMessage);
       }))
    }

    login(email : string , password : string) {
       return this.http.post('http://localhost:8089/api/v1/users/login', {
            email : email,
            password : password
        }, {
            observe : 'response'
        } ).pipe(catchError(errorRes => {
            let errorMessage = 'Authentication failed'
            return throwError(errorMessage);
         
         
        }) , tap(resData => {
            const expirationDate = new Date(new Date().getTime() + 3600000)
            const user = new UserStored(email , resData.headers.get('userid'),resData.headers.get('authorization'),expirationDate)
            this.user.next(user);
        }))
     }
}