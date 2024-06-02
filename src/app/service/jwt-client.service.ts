import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {
  constructor(private http:HttpClient) { }


  baseURL:string = 'http://localhost:8080/roadready/';

 

  getGeneratedToken(requestBody: any) {

    return this.http.post(this.baseURL + "user/authenticate", requestBody, { responseType: 'text' as 'json' });

  }

  authorizationTest(token: any) {
    const decodedToken = this.decodeToken(token);
     
    console.log(decodedToken);

    let tokenString = "Bearer " + token;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200'
    }).set("Authorization", tokenString);

   
    if (decodedToken) {
      
      const Id=decodedToken['Id'];
      localStorage.setItem('Id', Id);
      console.log(localStorage.getItem('Id'))
      return {
        
        role: decodedToken.role,
        Id:decodedToken.Id
       
      };
    } else {
      console.error('Error decoding JWT token');
      return null;
    }

  }
 

  
  

  decodeToken(token: string): any {
    try {
      return jwtDecode(token);
    } catch (Error) {
      console.error('Error decoding JWT token:', Error);
      return null;
    }
  }
  storeToken(token: string): void {
    localStorage.setItem('jwtToken', token);
  }

  
  
  getStoredToken(): string | null {
    return localStorage.getItem('jwtToken');
  }

  clearStoredToken(): void {
    localStorage.removeItem('jwtToken');
  }

  getUserRole(): string | null {
    const storedToken = this.getStoredToken();
  
    if (storedToken) {
      const decodedToken = this.decodeToken(storedToken);
  
      if (decodedToken && decodedToken.role) {
        return decodedToken.role;
      } else {
        console.error('Role not found in the decoded token.');
        return null;
      }
    } else {
      console.error('No token found in localStorage.');
      return null;
    }
  }
  

}

