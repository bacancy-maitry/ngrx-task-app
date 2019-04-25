import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataInterface } from '../interface/data-interface';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) { }

  getAllData():Observable<any>{
    return this.httpClient.get("https://jsonplaceholder.typicode.com/posts"); 
  }

  // https://jsonplaceholder.typicode.com/posts?userId=4
}
