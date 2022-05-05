import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "app/models/user";
import { catchError, tap, throwError } from "rxjs";


@Injectable({providedIn: 'root'})
export class AuthService {
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
        this.http.post('http://localhost:8089/api/v1/users/login', {
            email : email,
            password : password
        }, {
            observe : 'response'
        }).subscribe(responseData => {
            console.log(responseData.headers.get('authorization'))
        })
    }
}