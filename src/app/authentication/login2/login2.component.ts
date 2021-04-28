import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { validateEvents } from 'calendar-utils';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-login',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.scss']

})
export class Login2Component implements OnInit{
  constructor(private modalService: NgbModal,private service:SharedService,private fb:FormBuilder){
    this.service.getJson().subscribe((res:any)=>
    {
      this.countrycode = res.countryArray
      this.code = res.countryArray[0].dial_code
    })
  }
  countrycode: any;
  code: any;
  submitted:boolean = false
  loginwithEmail:FormGroup
  loginform = true;
  loginform1 = false;
  recoverform = false;
  phonecode = false;
  otp= false;
  loginWithPhone:FormGroup
  showRecoverForm() {
    this.loginform = !this.loginform;
    this.recoverform = !this.recoverform;
  }
  otpFrom() {
    this.loginform1 = !this.loginform1;
    this.loginform = !this.loginform;
    this.otp = !this.otp;
  }

  openWindowCustomClass(content3) {
    this.modalService.open(content3, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
  }
  clicked(){
    console.log("hele");
    this.loginform = true;
    this.phonecode = true;
  }
  ngOnInit(){
    this.loginwithEmail = this.fb.group({
      email:['',[Validators.required,Validators.email,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/)]],
    password:['',Validators.required],
    remember:['']
    })
    this.loginWithPhone = this.fb.group({
      phone:['',Validators.compose([Validators.required,Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$')
         ,Validators.maxLength(15),Validators.minLength(7)])],
         password:['',Validators.required],
         code:[''],
    remember:['']
    })
  }
  public errorHandlingSignup = (control: string, error: string) => {
    return this.loginwithEmail.controls[control].hasError(error);
  }
  public errorHandlingphone = (control: string, error: string) => {
    return this.loginWithPhone.controls[control].hasError(error);
  }
}
