
import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { BaseHttpService } from "../shared/data-access/base-http.service";
import { Observable } from "rxjs";
import { User } from "../shared/interfaces/user.interface";
import { createUser } from "../shared/interfaces/createUser.interface";

@Injectable({providedIn: 'root'})
export class FormService extends BaseHttpService{


  addUser(user: createUser): Observable<createUser> {
    return this.http.post<createUser>(`${this.apiUrl}/posts`, user)
     
  }
  }

