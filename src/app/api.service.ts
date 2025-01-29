import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class APIService {
  private apiUrl = 'http://localhost:9595/TimelogAPI/v1/'; // Replace with your actual API

  constructor(private http: HttpClient) {}

  // Login function
  login(credentials: { username: string, password: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl+"login", credentials).pipe(
      tap(response => {
        if (response) {
          localStorage.setItem('authToken', response); // Store the token
          console.log("Response : "+ response);
        }
      })
    );
  } // login end 

// Check if user is logged in
isLoggedIn(): boolean {
  return !!localStorage.getItem('authToken');
}

// Logout function
logout(): void {
  localStorage.removeItem('authToken');
}



//Main class
}
