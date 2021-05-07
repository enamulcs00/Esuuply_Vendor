import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

imageUrl = "http://dev.webdevelopmentsolution.net:3006/";
baseUrl = "http://dev.webdevelopmentsolution.net:3006/api/v1/";
httpOptions: { headers: HttpHeaders; };
  constructor(private http: HttpClient) { }
  public subject = new BehaviorSubject<boolean>(false)

  profileUpdate():Observable<any>
  {
    return this.subject.asObservable()
  }
  public shareableObject = new BehaviorSubject<any>('data')

  SignData():Observable<any>
  {
    return this.subject.asObservable()
  }
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
  deleteApi(url)
  {
    return this.http.delete(`${this.baseUrl}`+url,this.getAuth());
  }
  putApi(url,data)
  {
    return this.http.put(`${this.baseUrl}`+url,data,this.getAuth());
  }
  signIn(data)
  {
  return this.http.post(`${this.baseUrl}admin/login`,data);
  }
  forgot(data)
  {
  return this.http.post(`${this.baseUrl}admin/forgotPasswordWithEmail`,data);
  }
  forgotPhone(data)
  {
  return this.http.post(`${this.baseUrl}admin/forgotPasswordWithPhone`,data);
  }
  changePassword(data)
  {
  return this.http.post(`${this.baseUrl}admin/changePassword`,data,this.getAuth());
  }
  ResetPassword(url,data)
  {
    return this.http.post(`${this.baseUrl}`+url,data);
  }
  getApi(url)
    {
      return this.http.get(`${this.baseUrl}`+url,this.getAuth());
    }
    getToday(): string {
      return new Date().toISOString().split('T')[0]
      }
      verifyPhone(data)
  {
  return this.http.post(`${this.baseUrl}admin/verifyOtp`,data);
  }
  sentOtp(data)
  {
  return this.http.post(`${this.baseUrl}admin/sendOtp`,data);
  }
}
