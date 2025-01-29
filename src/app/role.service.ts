import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private baseUrl = 'http://localhost:9595/TimelogAPI/v1/'; // Your API endpoint

  constructor(private http: HttpClient) { }

  //Role Api
insertRole(requestPayload: {role_name: string}): Observable<any>{
  return this.http.post<any>(this.baseUrl+"insertRole", requestPayload).pipe(
    tap(response => {
      if(response.roleId){
       console.log("Role Created ... ");
      }
    })
  )
}

  // Get all roles
  getAllRoles(): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}_getAllRoles`, {});
  }


  // Delete role
  deleteRole(requestPayload: {role_id: any}): Observable<void> {
    return this.http.post<any>(this.baseUrl+"deleteRole", requestPayload).pipe(
      tap(response => {
       // if(response){
        // console.log("Role Created ... ");
       // }
      })
    )
  }
  
  // Edit role
  updateRole(requestPayload: {role_id: string, role_name:string}): Observable<any>{
    return this.http.post<any>(this.baseUrl+"updateRole", requestPayload).pipe(
      tap(Response => {
        if(Response.role_id){

        }
      })
    )
  }
}
