import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';
import { SharedService } from '../shared.service';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
@Component({
  selector: 'app-detail-form',
  templateUrl: './detail-form.component.html',
  styleUrls: ['./detail-form.component.css']
})
export class DetailFormComponent implements OnInit ,AfterViewInit{
  checked:string;
  profileForm:FormGroup
  formForShop:FormGroup
  days:string[]=['sun','mon','tue','wed','thu','fri','sat']
  role: any;
  countrycode: any;
  phonecode: any;
  countryCode: any;
  submitted:boolean = false
  lat:any = 40.7127753;
  lng:any = -74.0059728;
  fileName:string = 'Choose file'
  @ViewChild("placeRef") 
  state: any;
  
  @ViewChild("placesRef", { static: true }) placesRef: GooglePlaceDirective;
  
  profileData: any;
  files: any;
  ProfilePic:any;
  address:any='Mohali, Punjab, India'
    constructor(private router:Router,private spinner:NgxSpinnerService,private act:ActivatedRoute,public service:SharedService,private fb:FormBuilder) { 
      this.service.getJson().subscribe((res:any)=>
      {
        this.countrycode = res.countryArray
        this.phonecode = res.countryArray[0].dial_code
      })
      this.act.params.subscribe((res:any)=>{
        this.role = res.role
      })
    }
  ngAfterViewInit(){
    
    this.getProfile()

  }
    ngOnInit(): void {
      this.service.getJson().subscribe((res:any)=>
      {
        this.countrycode = res.countryArray
        this.phonecode = res.countryArray[0].dial_code
      })
      
  this.getProfile()
      this.profileForm = this.fb.group({
        email:['',[Validators.required,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/)]],
        firstName:['',[Validators.required,Validators.pattern(/^[a-zA-Z ]*$/i)]],
        lastName:['',[Validators.required,Validators.pattern(/^[a-zA-Z ]*$/i)]],
        resturant:['',[Validators.required]],
        dob:['',Validators.required],
        zip:['',[Validators.required,Validators.pattern(/^([0-9])*$/),Validators.minLength(4),Validators.maxLength(7)]],
        image:[''],
        address:['',Validators.required],
        city:['',Validators.required],
        isDelivery:['',Validators.required],
        resturantType:['',Validators.required]
      })
      this.formForShop = this.fb.group({
        email:['',[Validators.required,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/)]],
        firstName:['',[Validators.required,Validators.pattern(/^[a-zA-Z ]*$/i)]],
        lastName:['',[Validators.required,Validators.pattern(/^[a-zA-Z ]*$/i)]],
        dialCode:[''],
        dob:['',Validators.required],
        phone:['',Validators.compose([Validators.required,Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$')
        ,Validators.maxLength(15),Validators.minLength(7)])],
        location:['',Validators.required],
        address:['',Validators.required],
      
      })
      
    }
    public errorHandling = (control: string, error: string) => {
      return this.profileForm.controls[control].hasError(error);
    }
    updateFranchaise(){
      this.submitted = true
      this.spinner.show()
      let url = `admin/updateProfile`
   let obj =   {
    "city": this.profileForm.value.city,
    "email":this.profileForm.value.email,
  
    "firstName": this.profileForm.value.firstName,
    "lastName": this.profileForm.value.lastName,
    "birthDate": this.profileForm.value.dob,
    "shopName": this.profileForm.value.resturant,
    "address": this.profileForm.value.address,
    "zipCode": this.profileForm.value.zip,
    "deliveringRightNow": this.profileForm.value.isDelivery,
    "typeOfRestaurant": this.profileForm.value.resturantType,
    "image": this.files,
        "latitude":this.lat.toString(),
        "longitude":this.lng.toString(),
        
    }
    if(this.profileForm.valid){
      this.service.putApi(url,obj).subscribe((res:any)=>{
        console.log("Update profile",res)
        if(res.statusCode==200){
          this.router.navigate(['dashboard'])
          this.spinner.hide()
          this.submitted = false
          this.service.subject.next(true)
         
          Swal.fire('Success',res.message,'success')
        }else{
          this.spinner.hide()
          Swal.fire('Oops',res.message,'error')
        }
      },error=>{
        this.spinner.hide()
        Swal.fire('Oops','Something went wrong','error')
      })
    }else if(this.profileForm.invalid){
      this.spinner.hide()
      Swal.fire('Oops','Please fill all field correctly','error')
    }
    }

    sendFile(fileData) {
      let url = `admin/uploadFile`
      this.spinner.show()
      let formdata = new FormData()
      formdata.append('file', fileData);
      // formdata.append('type','profilePic')
      this.service.postApi(url, formdata).subscribe((res: any) => {
        this.spinner.hide()
        console.log(res.data)
        if (res.statusCode==200) {
          // this.service.subject.next(true)
       Swal.fire('Success','File uploaded','success')
          console.log("upload data res=>>", res.data)
          this.files = res.data.filePath
          this.ProfilePic = res.data.filePath
        } else {
          this.spinner.hide()
          Swal.fire('Oops',res.message,'error')
        }
      }, error => {
        
        Swal.fire('Oops',error.message,'error')
        this.spinner.hide()
      });
    }
    uploadFile(event) {
      
      var self = this;
      if (event.target.files && event.target.files[0]) {
        var type = event.target.files[0].type;
        if (type === 'image/png' || type === 'image/jpg' || type === 'image/jpeg') {
          let fileData = event.target.files[0];
          this.fileName = fileData.name
          this.sendFile(fileData)
           var reader = new FileReader()
           this.profileForm.get('image').setValue(fileData)
        } else {
          
        }
      }
    }
    someMethod(value)
  {
    console.log('Value of code',value,'PhoneCode val',this.phonecode);
    this.countryCode = value;
  }
    check(e,ref){
      if(ref=='mon' && e.checked){
         this.checked = 'mon'
        }
        else if(ref=='sun' && e.checked){
          this.checked = 'sun'
          if(ref=='sun' && !e.checked){
            this.checked = 'xyx'
          }
        }
      }
      public errorHandlingphone = (control: string, error: string) => {
        return this.formForShop.controls[control].hasError(error);
      }
    add(){ 
      let row = document.createElement('div');   
        row.className = 'row mb-2'; 
        row.innerHTML = ` 
        <div class="col-md-5">
        <input type="time" placeholder="" class="form-control">
      </div>
      <div class="col-md-5"><input type="time" placeholder="" class="form-control"></div>
      <div class="col-md-2"><a href="javascript:void(0)" ><i class="far fa-times-circle"></i></a></div>
        `; 
        document.querySelector('.showInputField').appendChild(row); 
    } 
    remove(){
      let removed = document.querySelector('.row.mb-2'); 
      console.log(removed);
    }
    getProfile(){
  
      this.service.getApi(`admin/getProfile`).subscribe((res:any)=>{
        console.log('Res of get profile ',res)
        if(res.statusCode==200){
          this.profileData = res.data
          this.ProfilePic = res.data.image,
          this.files = res.data.image
          this.fileName = this.profileData.image.split('/').pop()
          this.profileForm.get('firstName').setValue(res.data.firstName)
          this.profileForm.get('lastName').setValue(res.data.lastName)
          this.profileForm.get('email').setValue(res.data.email)
          this.profileForm.get('dob').setValue(res.data.birthDate)
          this.profileForm.get('resturant').setValue(res.data.shopName)
          
          this.profileForm.get('image').setValue(res.data.image)
          this.profileForm.get('zip').setValue(res.data.zipCode)
          this.profileForm.get('resturantType').setValue(res.data.typeOfRestaurant)
          this.profileForm.get('address').setValue(res.data.location.address)
          this.profileForm.get('city').setValue(res.data.city)
          this.profileForm.get('isDelivery').setValue(res.data.deliveringRightNow)
        
          this.lat = this.profileData.location.coordinates[1];
        this.lng = this.profileData.location.coordinates[0];
        this.formForShop.get('firstName').setValue(res.data.firstName)
          this.formForShop.get('lastName').setValue(res.data.lastName)
          this.formForShop.get('email').setValue(res.data.email)
          this.formForShop.get('dob').setValue(res.data.birthDate)
          this.formForShop.get('location').setValue(res.data.city)
          this.formForShop.get('phone').setValue(res.data.phoneNo)
          this.formForShop.get('dialCode').setValue(res.data.dialCode?res.data.dialCode:this.phonecode)
          this.formForShop.get('address').setValue(res.data.location.address)
          
        }
        else {
          Swal.fire('Oops',res.message,'error')
        }
      })
    }
    public AddressChange(address: any,ref:any) {
      //setting address from API to local variable
      console.log('Address',address,"Ref",ref);
      this.address = ref
      this.profileForm.controls['address'].setValue(ref)
      this.formForShop.controls['address'].setValue(ref)
      this.lat = address.geometry.location.lat()
      this.lng = address.geometry.location.lng()
     // let length = address.address_components.length
      //this.country = address.address_components[0].long_name;
      this.state = address.address_components[0].long_name;
      ///this.profileForm.controls['address'].setValue(this.state)
      console.log('Lng',this.lng,'lat',this.lat);
  
    }
    updateProfile(){
      this.submitted = true
      this.spinner.show()
      let url = `admin/updateProfile`
   let obj =   {
        
        "email":this.formForShop.value.email,
        
        "firstName": this.formForShop.value.firstName,
        "lastName": this.formForShop.value.lastName,
        "birthDate": this.formForShop.value.dob,
        "city": this.formForShop.value.location,
      //  "shopName": this.formForShop.value.resturant,
        "address": this.formForShop.value.address,
        
      "phoneNo":this.formForShop.controls['phone'].value,
      "image": this.files,
     "dialCode":this.countryCode == null ? this.phonecode : this.countryCode,
        "latitude":this.lat.toString(),
        "longitude":this.lng.toString(),
        
    }
    if(this.formForShop.valid){
      this.service.putApi(url,obj).subscribe((res:any)=>{
        console.log("Update profile",res)
        if(res.statusCode==200){
          this.router.navigate(['dashboard'])
          this.spinner.hide()
          this.submitted = false
         this.service.subject.next(true)
         
          Swal.fire('Success',res.message,'success')
        }else{
          this.spinner.hide()
          Swal.fire('Oops',res.message,'error')
        }
      },error=>{
        this.spinner.hide()
        Swal.fire('Oops','Something went wrong','error')
      })
    }else if(this.formForShop.invalid){
      this.spinner.hide()
      Swal.fire('Oops','Please fill all field correctly','error')
    }
    
    }
}
