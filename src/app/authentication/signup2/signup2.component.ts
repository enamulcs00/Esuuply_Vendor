import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
  openWindowCustomClass(otp) {
    this.modalService.open(otp, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
  }
  countrycode: any;
  phonecode: any;
  otpvalue: number;
  url:any;
  role:any = 'shop'
  submitted:boolean = false
  signUpWithEmail:FormGroup
  countryCode: any;
  signUpWithPhone:FormGroup 
  
  constructor(private modalService: NgbModal,private service:SharedService,private fb:FormBuilder,private router:Router,private spinner:NgxSpinnerService) {
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
    if(!this.signUpWithEmail.invalid && this.signUpWithEmail.controls['password'].value==this.signUpWithEmail.controls['confirmPassword'].value)
    {
      this.spinner.show()
      this.service.signUp(this.url,data).subscribe((res:any)=>
      {
        console.log('Res of signup',res);
        
        if(res.statusCode == 200)
        {
          localStorage.setItem('token',res.data.accessToken)
          localStorage.setItem('signupData',JSON.stringify(data))
        
          Swal.fire('Success','Registered successfully','success')
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
//Swal.fire('Oops','Please fill all field correctly','error')

    }
  }
  phoneSignUp(otp){
    if(this.role ==  'shop'){
      this.url = `admin/register/shop` 
       }else if(this.role == 'franchise'){
         this.url = `admin/register/franchise`
       }

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
    if(!this.signUpWithPhone.invalid && this.signUpWithPhone.controls['password'].value==this.signUpWithPhone.controls['confirmPassword'].value)
    {
      this.spinner.show()
      this.service.signUp(this.url,data).subscribe((res:any)=>
      {
        console.log('Res of signup with phone',res);
        
        if(res.statusCode == 200)
        {
          this.sendOtp()
         // Swal.fire('Success',`Otp sent to  ${this.countryCode == null ? this.phonecode : this.countryCode}-${this.signUpWithPhone.controls['phone'].value}`,'success')
          sessionStorage.setItem('token',res.data.accessToken)
          this.openWindowCustomClass(otp)
          //this.router.navigate([`vendor_detail/${this.role}`])
          this.spinner.hide()
        }
        else{
          this.spinner.hide()
        Swal.fire('Oops',res.message,'error') 
        
        }
      })
    }else if(this.signUpWithPhone.invalid){
      this.spinner.hide()

    }
}
gotoVerify()
{

 const data = {
  "phoneNo":this.signUpWithPhone.controls['phone'].value,
  "dialCode":this.countryCode == null ? this.phonecode : this.countryCode,
    "secretCode": this.otpvalue
}
  this.service.verifyPhone(data).subscribe((res:any)=>
    {
      if(res.statusCode == 200)
      {
        this.modalService.dismissAll()
        localStorage.setItem('token',res.data.accessToken)
        this.router.navigate([`vendor_detail/${this.role}`])
    Swal.fire('Success',res.message,'success')
    
      }
      else{
        this.submitted = true;
        
       Swal.fire('Oops',res.message,'error')
      }
    })
}
onOtpChange(event)
  {
    this.otpvalue = event
    console.log(this.otpvalue);
    
  }
  sendOtp(){
    let obj = {
      "phoneNo":this.signUpWithPhone.controls['phone'].value,
      "dialCode":this.countryCode == null ? this.phonecode : this.countryCode,
    }
    this.service.sentOtp(obj).subscribe((res:any)=>{
      console.log(res,"OTP SENT");
      if(res.statusCode == 200){
        Swal.fire('Otp',res.message,'success')
      }else{
        Swal.fire('Oops',res.message,'error')
      }
    },err=>{
      Swal.fire('Oops',err.message,'error')
    })
  }

}
