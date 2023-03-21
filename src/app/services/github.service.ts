import { HttpClient, HttpHeaders , } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Root } from '../GH_Interface';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  
  constructor(private httpClient:HttpClient) {  }

  getrepos(): Observable<any> {  
    return this.httpClient.get<Root[]>('https://api.github.com/users/vinniemaster/repos');
  }
}
