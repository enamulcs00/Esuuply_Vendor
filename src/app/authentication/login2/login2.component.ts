import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-login',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.scss']

})
export class Login2Component implements OnInit{
  countryCode: any;
  constructor(private spinner:NgxSpinnerService, private modalService: NgbModal,private service:SharedService,private fb:FormBuilder,private router:Router){
    this.service.getJson().subscribe((res:any)=>
    {
      this.countrycode = res.countryArray
      this.code = res.countryArray[0].dial_code
      
    })
  }
  countrycode: any;
  code: any;
  isphoneLogin:boolean = false
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
         code:[this.code],
    remember:['']
    })
   // this.loginWithPhone.get('code').setValue(this.code)
    if(localStorage.getItem('rememberForEmail')) {
    let formData = JSON.parse(localStorage.getItem('rememberForEmail'))
    
      this.loginwithEmail.patchValue({
        email: formData.email,
        password: formData.password,
        remember: formData.remember
      })
    }
    if(localStorage.getItem('rememberForPhone')) {
      let formData = JSON.parse(localStorage.getItem('rememberForPhone'))
      this.loginWithPhone.get('code').setValue(formData.code)
        this.loginWithPhone.patchValue({
          phone: formData.phone,
          password: formData.password,
          remember: formData.remember
        })
      }
  }
  public errorHandlingSignup = (control: string, error: string) => {
    return this.loginwithEmail.controls[control].hasError(error);
  }
  public errorHandlingphone = (control: string, error: string) => {
    return this.loginWithPhone.controls[control].hasError(error);
  }
  // someMethod(value)
  // {
  //   console.log('Value of code',value,'PhoneCode val',this.code);
  //   this.countryCode = value;
  //   this.code = value
  // }
  login() {
  
    let url = `admin/login`
    this.submitted = true
   if(this.loginwithEmail.valid){
      this.spinner.show()
      this.submitted = false
      let data = {
        email: this.loginwithEmail.value.email,
        password: this.loginwithEmail.value.password,
      }
      this.service.signIn(data).subscribe((response:any) =>{
        console.log('This is login response',response.data.user)
        if(response.statusCode==200) {
          this.submitted = false
          this.router.navigate(['dashboard']);
          localStorage.setItem('eSupply', JSON.stringify(response.data.user))
          localStorage.setItem('token',response.data.user.accessToken)
          if(this.loginwithEmail.value.remember) {
            localStorage.setItem('rememberForEmail', JSON.stringify(this.loginwithEmail.value))
          } else 
          {
            localStorage.removeItem('rememberForEmail')
          }
        
        }else {
          Swal.fire('Oops',response.message,'error')
        }
        this.spinner.hide()
      }, error => {
        this.spinner.hide()
        Swal.fire('Oops',error.message,'error')
        
        console.log(error)
      })
   }else if(this.loginwithEmail.invalid){
      Swal.fire('Oops','Please Enter Required Fields','error')
      this.spinner.hide()
    }
    
  }
  phoneLogin(){
    
    this.isphoneLogin = true
   if(this.loginWithPhone.valid){
      this.spinner.show()
      this.isphoneLogin = false
      let data = {
        phoneNo: this.loginWithPhone.value.phone,
        password: this.loginWithPhone.value.password,
        // dialCode:this.countryCode == null ? this.code : this.countryCode
        dialCode:this.loginWithPhone.value.code
      }
      this.service.signIn(data).subscribe((response:any) =>{
        console.log('This is login response',response.data.user)
        if(response.statusCode==200) {
          this.isphoneLogin = false
          this.router.navigate(['dashboard']);
          localStorage.setItem('eSupply', JSON.stringify(response.data.user))
          localStorage.setItem('token',response.data.user.accessToken)
          if(this.loginWithPhone.value.remember) {
           
            localStorage.setItem('rememberForPhone', JSON.stringify(this.loginWithPhone.value))
          } else 
          {
            localStorage.removeItem('rememberForPhone')
          }
        
        }else {
          Swal.fire('Oops',response.message,'error')
        }
        this.spinner.hide()
      }, error => {
        this.spinner.hide()
        Swal.fire('Oops',error.message,'error')
        
        console.log(error)
      })
   }else if(this.loginWithPhone.invalid){
      Swal.fire('Oops','Please Enter Required Fields','error')
      this.spinner.hide()
    }
   
}
}
