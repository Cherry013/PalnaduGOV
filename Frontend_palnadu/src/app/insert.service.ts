import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InsertService {

  private Login = {};
  public OverallDetails = {};
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient, private Router: Router) { }

  Getuserandpwd(Login: object): Observable<{}> {
    this.Login = Login;
    // return this.http.post("http://192.168.137.31:3000/Login/", Login, { headers: this.headers })
    return this.http.post("http://localhost:3000/Login/", Login, { headers: this.headers })

  }
  SaveData(data: Object): Object {
    return this.OverallDetails = Object.assign(this.OverallDetails, data);
  }
  SubmitData(data: Object):Observable<{}> {
    return this.http.post("http://localhost:3000/InsertData/Details",data, { headers: this.headers })
    // return this.http.post("http://192.168.137.31:3000/InsertData/Details",data, { headers: this.headers })

  }


}
