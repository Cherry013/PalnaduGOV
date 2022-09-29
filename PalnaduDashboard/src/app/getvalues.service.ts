import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetvaluesService {
  work = ['Begging', 'shop/Pvt', 'Railway Station', 'Hotels', 'Brick_Klins', 'Factories', 'Construction_Works', 'others'];

  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient, private Router: Router) { }
  Getallvalues(Mandal: String): Observable<{}> {
    // return this.http.get("http://192.168.137.31:3000/getdata/" + Mandal + "/");
    return this.http.get("http://localhost:3000/getdata/" + Mandal + "/");

  }
  GetDetailed(Mandal: String): Observable<{}> {
    return this.http.get("http://localhost:3000/getdata/Mandal/Detailed/" + Mandal + "/");
    // return this.http.get("http://192.168.137.31:3000/getdata/Mandal/Detailed/" + Mandal + "/");
  }
  getPresisedvalues(MandalAndPresized: {}): Observable<{}> {
    return this.http.post("http://localhost:3000/getdata/Mandal/Presised/", MandalAndPresized);
    // return this.http.post("http://192.168.137.31:3000/getdata/Mandal/Presised/", MandalAndPresized);
  }
}
