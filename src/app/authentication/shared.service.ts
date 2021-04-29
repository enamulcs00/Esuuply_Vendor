import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

imageUrl = "http://dev.webdevelopmentsolution.net:3006/";
baseUrl = "http://dev.webdevelopmentsolution.net:3006/api/v1/";
httpOptions: { headers: HttpHeaders; };
  constructor(private http: HttpClient) { }
  getAuth()
  {
    const authorization = localStorage.getItem('token');
    return  this.httpOptions = {
        headers: new HttpHeaders({ 'authorization': authorization })
    }
  }

  getJson()
  {
    return this.http.get<any>('assets/countryCode.json')
  }
  signUp(url,data)
  {
  return this.http.post(`${this.baseUrl}`+url,data);
  }
  postApi(url,data)
  {
    return this.http.post(`${this.baseUrl}`+url,data,this.getAuth());
  }
  signIn(data)
  {
  return this.http.post(`${this.baseUrl}admin/login`,data);
  }
  getApi(url)
    {
      return this.http.get(`${this.baseUrl}`+url,this.getAuth());
    }
}
