import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { BaseHttpService } from "../../../shared/data-access/base-http.service";
import { Observable } from "rxjs";
import { User } from "../../../shared/interfaces/user.interface";

@Injectable({providedIn: 'root'})
export class ProductsService extends BaseHttpService{

  getUser():Observable<User[]>{
    return this.http.get<any[]>(`${this.apiUrl}/users`)
  }
  }
