import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { UserInfo } from 'src/app/product';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  constructor( private httpClient : HttpClient) { }

   loadALlUsers(){
    return this.httpClient.get<UserInfo[]>('http://localhost:3000/api/items')
   }

  addUser(addedUser:UserInfo){
     return this.httpClient.post<UserInfo>('http://localhost:3000/api/items/',addedUser)
  }
   
  deletingItem(id:string){
     return this.httpClient.delete<UserInfo>('http://localhost:3000/api/items/'+id)
  }
   
  updateUser(id:string, updateUser:UserInfo){
    return this.httpClient.put<UserInfo>('http://localhost:3000/api/items/'+id, updateUser)
  }
   
  gettingUserById(id:string){
     return this.httpClient.get<UserInfo>('http://localhost:3000/api/items/'+id)
  }

  validateUser (value : string) : Observable<{found:boolean}>{
    return this.httpClient.get<{found:boolean}>('http://localhost:3000/api/items/is-valid?userName='+value);
 }
}
