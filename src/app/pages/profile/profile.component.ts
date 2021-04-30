import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { NgxSpinnerService } from 'ngx-spinner';
import { SharedService } from 'src/app/authentication/shared.service';
import Swal from 'sweetalert2';

@Component({
  templateUrl: 'profile.component.html'
})
export class ProfileComponent {
profileForm:FormGroup
  checked:string;
  lat:any = 40.7127753;
  lng:any = -74.0059728;
  fileName:string = 'Choose file'
  @ViewChild("placeRef") 
  state: any;
  @ViewChild("placesRef", { static: true }) placesRef: GooglePlaceDirective;
  days:string[]=['sun','mon','tue','wed','thu','fri','sat']
  profileData: any;
  files: any;
    constructor(private router:Router,private service:SharedService,private fb:FormBuilder,private spinner:NgxSpinnerService) { }
  
    ngOnInit(): void {
      this.getProfile()
      this.profileForm = this.fb.group({
        email:['',[Validators.required,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/)]],
        firstName:['',[Validators.required,Validators.pattern(/^[a-zA-Z ]*$/i)]],
        lastName:['',[Validators.required,Validators.pattern(/^[a-zA-Z ]*$/i)]],
        resturant:[''],
        dob:[''],
        zip:[''],
        image:[''],
        address:[''],
        city:[''],
        resturantType:['']
      })
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
      
      let url =`admin/getProfile`
      this.service.getApi(url).subscribe((res:any)=>{
        console.log('Res of get profile',res)
        if(res.statusCode==200){
          this.profileData = res.data
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
          this.fileName = this.profileData.image.split('/').pop()
          this.lat = this.profileData.location.coordinates[1];
        this.lng = this.profileData.location.coordinates[0];
        }
        else {
          Swal.fire('Oops',res.message,'error')
        }
      })
    }
    public AddressChange(address: any,ref:any) {
      //setting address from API to local variable
      console.log('Address',address,"Ref",ref);
      this.profileForm.controls['address'].setValue(ref)
      this.lat = address.geometry.location.lat()
      this.lng = address.geometry.location.lng()
     // let length = address.address_components.length
      //this.country = address.address_components[0].long_name;
      this.state = address.address_components[0].long_name;
      ///this.profileForm.controls['address'].setValue(this.state)
      console.log('Lng',this.lng,'lat',this.lat);
      
  
    }
    sendFile(fileData) {
      let url = `admin/uploadFile`
      this.spinner.show()
      let formdata = new FormData()
      formdata.append('file', fileData);
      this.service.postApi(url, formdata).subscribe((res: any) => {
        this.spinner.hide()
        console.log(res.data)
        if (res.statusCode==200) {
       Swal.fire('Success','File uploded','success')
          console.log("upload data res=>>", res.data)
          this.files = res.data.filePath
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
    updateProfile(){
      let url = `admin/updateProfile`
   let obj =   {
        "city": this.profileForm.value.city,
        "email":this.profileForm.value.email,
        "message": "xyz",
        "firstName": this.profileForm.value.firstName,
        "lastName": this.profileForm.value.lastName,
        "birthDate": this.profileForm.value.dob,
        "shopName": this.profileForm.value.resturant,
        "address": this.profileForm.value.address,
        "zipCode": this.profileForm.value.zip,
        "deliveringRightNow": this.profileForm.value.isDelivery,
        "typeOfRestaurant": this.profileForm.value.resturantType,
        "image": this.files,
        "shopStatus": false,
        "commingSoon": false,
        "latitude":this.lat.toString(),
        "longitude":this.lng.toString(),
        "shopHours": [
            {
                "days": "0",
                "hours": [
                    {
                        "start": "11:00",
                        "end": "12:10"
                    }
                ]
            },
            {
                "days": "1",
                "hours": [
                    {
                        "start": "11:00",
                        "end": "12:10"
                    }
                ]
            },
            {
                "days": "2",
                "hours": [
                    {
                        "start": "11:00",
                        "end": "12:10"
                    }
                ]
            },
            {
                "days": "3",
                "hours": [
                    {
                        "start": "11:00",
                        "end": "12:10"
                    }
                ]
            },
            {
                "days": "4",
                "hours": [
                    {
                        "start": "11:00",
                        "end": "12:10"
                    }
                ]
            },
            {
                "days": "5",
                "hours": [
                    {
                        "start": "11:00",
                        "end": "12:10"
                    }
                ]
            },
            {
                "days": "6",
                "isClosed": true
            }
        ]
    }
    this.service.putApi(url,obj).subscribe((res:any)=>{
      console.log("Update profile",res)
      if(res.statusCode==200){
        this.router.navigate(['dashboard'])
        Swal.fire('Success',res.message,'success')
      }else{
        Swal.fire('Oops',res.message,'error')
      }
    },error=>{
      Swal.fire('Oops','Something went wrong','error')
    })
    }
}
