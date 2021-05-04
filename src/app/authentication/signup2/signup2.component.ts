import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';
//import {SharedService} from ''
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup2.component.html',
  styleUrls: ['./signup2.scss']
})
export class Signup2Component implements OnInit{
  countrycode: any;
  phonecode: any;
  url:any;
  role:any = 'shop'
  submitted:boolean = false
  signUpWithEmail:FormGroup
  countryCode: any;
  signUpWithPhone:FormGroup 
  constructor(private service:SharedService,private fb:FormBuilder,private router:Router,private spinner:NgxSpinnerService) {
    this.service.getJson().subscribe((res:any)=>
      {
        this.countrycode = res.countryArray
        this.phonecode = res.countryArray[0].dial_code
      })
  }
  ngOnInit(){
    this.signUpWithEmail = this.fb.group({
      email:['',[Validators.required,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/)]],
         password:['',[Validators.required,Validators.minLength(8)]],
         firstName:['',[Validators.required,Validators.pattern(/^[a-zA-Z ]*$/i)]],
         lastName:['',[Validators.required,Validators.pattern(/^[a-zA-Z ]*$/i)]],
         confirmPassword:['',Validators.required],
         
         role:[''],
    })
    this.signUpWithPhone = this.fb.group({
      phone:['',Validators.compose([Validators.required,Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$')
        ,Validators.maxLength(15),Validators.minLength(7)])],
        password:['',[Validators.required,Validators.minLength(8)]],
        email:['',[Validators.required,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/)]],
        firstName:['',[Validators.required,Validators.pattern(/^[a-zA-Z ]*$/i)]],
        lastName:['',[Validators.required,Validators.pattern(/^[a-zA-Z ]*$/i)]],
        
         role:[''],
        confirmPassword:['',Validators.required]
    })
  }
  public errorHandlingSignup = (control: string, error: string) => {
    return this.signUpWithEmail.controls[control].hasError(error);
  }
  public errorHandlingphone = (control: string, error: string) => {
    return this.signUpWithPhone.controls[control].hasError(error);
  }
  someMethod(value)
  {
    console.log('Value of code',value,'PhoneCode val',this.phonecode);
    this.countryCode = value;
  }
  changeRole(e) {
if(e.target.value=='shop'){
this.role='shop'
}else if(e.target.value=='franchise'){
  this.role = 'franchise'
}
}
  signUpEmail(){
    if(this.role ==  'shop'){
this.url = `admin/register/shop` 
 }else if(this.role == 'franchise'){
   this.url = `admin/register/franchise`
 }
    this.spinner.show()
    
    this.submitted = true;
    const data =
    {
      "firstName":this.signUpWithEmail.controls['firstName'].value,
      "lastName":this.signUpWithEmail.controls['lastName'].value,
      "email":this.signUpWithEmail.controls['email'].value,
    
      "password":this.signUpWithEmail.controls['password'].value,
      "confirmPassword":this.signUpWithEmail.controls['password'].value,
     // "dialCode":this.countryCode == null ? this.phonecode : this.countryCode
    }
    if(!this.signUpWithEmail.invalid)
    {
      this.service.signUp(this.url,data).subscribe((res:any)=>
      {
        console.log('Res of signup',res);
        
        if(res.statusCode == 200)
        {
          localStorage.setItem('token',res.data.accessToken)
          localStorage.setItem('signupData',JSON.stringify(data))
        
          Swal.fire('Success',res.message,'success')
          sessionStorage.setItem('token',res.data.accessToken)
          this.router.navigate([`vendor_detail/${this.role}`])
          this.submitted = false
          this.spinner.hide()
        }
        else{
          this.spinner.hide()
        Swal.fire('Oops',res.message,'error') 
        
        }
      })
    }else if(this.signUpWithEmail.invalid){
      this.spinner.hide()
Swal.fire('Oops','Please fill all field correctly','error')

    }
  }
  phoneSignUp(){
    if(this.role ==  'shop'){
      this.url = `admin/register/shop` 
       }else if(this.role == 'franchise'){
         this.url = `admin/register/franchise`
       }
this.spinner.show()
    //let url = `admin/register/shop`
    this.submitted = true;
    const data =
    {
      "firstName":this.signUpWithPhone.controls['firstName'].value,
      "lastName":this.signUpWithPhone.controls['lastName'].value,
      "email":this.signUpWithPhone.controls['email'].value,
      "phoneNo":this.signUpWithPhone.controls['phone'].value,
      "password":this.signUpWithPhone.controls['password'].value,
      "confirmPassword":this.signUpWithPhone.controls['password'].value,
     "dialCode":this.countryCode == null ? this.phonecode : this.countryCode
    }
    if(!this.signUpWithPhone.invalid)
    {
      this.service.signUp(this.url,data).subscribe((res:any)=>
      {
        console.log('Res of signup with phone',res);
        
        if(res.statusCode == 200)
        {
          localStorage.setItem('signupData',JSON.stringify(data))
          localStorage.setItem('token',res.data.accessToken)
          Swal.fire('Success',res.message,'success')
          sessionStorage.setItem('token',res.data.accessToken)
          this.router.navigate([`vendor_detail/${this.role}`])
          this.spinner.hide()
        }
        else{
          this.spinner.hide()
        Swal.fire('Oops',res.message,'error') 
        
        }
      })
    }else if(this.signUpWithPhone.invalid){
      this.spinner.hide()
Swal.fire('Oops','Please fill all field correctly','error')
    }

  }
}
