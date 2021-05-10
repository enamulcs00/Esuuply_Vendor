import { Component, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
mon: FormArray;
tue: FormArray;
thu:FormArray
fri:FormArray
wed:FormArray
sat:FormArray
sun:FormArray
  checked:string;
  submitted:boolean = false
  lat:any = 40.7127753;
  lng:any = -74.0059728;
  fileName:any;
  @ViewChild("placeRef") 
  state: any;
  @ViewChild("placesRef", { static: true }) placesRef: GooglePlaceDirective;
  days:string[]=['sun','mon','tue','wed','thu','fri','sat']
  profileData: any;
  files: any;
  shopStatus:boolean=false
  commingSoon:boolean = false
  IsMon:boolean = false;
  IsTue:boolean = false;
  IsThu:boolean = false;
  IsWed:boolean = false;
  IsFri:boolean = false;
  IsSat:boolean = false;
  IsSun:boolean = false;
  ProfilePic:any;
  address:any='Mohali, Punjab, India'
    constructor(private router:Router,private service:SharedService,private fb:FormBuilder,private spinner:NgxSpinnerService) { }
  
    ngOnInit(): void {
      
      this.getProfile()
      this.profileForm = this.fb.group({
        email:['',[Validators.required,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/)]],
        firstName:['',[Validators.required,Validators.pattern(/^[a-zA-Z ]*$/i)]],
        lastName:['',[Validators.required,Validators.pattern(/^[a-zA-Z ]*$/i)]],
        resturant:['',[Validators.required]],
        dob:['',Validators.required],
        zip:['',[Validators.required,Validators.pattern(/^([0-9])*$/),Validators.minLength(4),Validators.maxLength(7)]],
        image:['',Validators.required],
        address:['',Validators.required],
        city:['',Validators.required],
        isDelivery:['',Validators.required],
        resturantType:['',Validators.required],
        mon: new FormArray([]),
        tue: new FormArray([]),
        thu: new FormArray([]),
        fri: new FormArray([]),
        wed: new FormArray([]),
        sat: new FormArray([]),
        sun: new FormArray([]),
      })
    // for(let day of this.days){
    // this.addItem(day)
    // }
    }
    createItem(): FormGroup {
      return this.fb.group({
        start: new FormControl(''),
        end:new FormControl('')
        
      });
    }
    change(e,ref){
      if(ref=='mon' && e.checked || ref=='tue' && e.checked || ref=='wed' && e.checked || ref=='thu' && e.checked || ref=='fri' && e.checked || ref=='sat' && e.checked || ref=='sun' && e.checked){
      this.addItem(ref)       
       }else{
        const remove = this.profileForm.get(ref) as FormArray;
        while (remove.length !== 0) {
          remove.removeAt(0)
        }
       }  
      }
    addItem(ref): void {
      if(ref=='mon'){
        this.mon = this.profileForm.get('mon') as FormArray;
        this.mon.push(this.createItem());
      }else if(ref=='tue'){
        this.tue = this.profileForm.get('tue') as FormArray;
        this.tue.push(this.createItem());
      }else if(ref=='thu'){
        this.thu = this.profileForm.get('thu') as FormArray;
        this.thu.push(this.createItem());
      }else if(ref=='wed'){
        this.wed = this.profileForm.get('wed') as FormArray;
        this.wed.push(this.createItem());
      }else if(ref=='fri'){
        this.fri = this.profileForm.get('fri') as FormArray;
        this.fri.push(this.createItem());
      }else if(ref=='sat'){
        this.sat = this.profileForm.get('sat') as FormArray;
        this.sat.push(this.createItem());
      }else if(ref=='sun'){
        this.sun = this.profileForm.get('sun') as FormArray;
        this.sun.push(this.createItem());
      }
    }
    removeUser(ref,i) {
      if(ref=='mon'){
        const remove = this.profileForm.get('mon') as FormArray;
        remove.removeAt(i);
      }else if(ref=='tue'){
        const remove = this.profileForm.get('tue') as FormArray;
      remove.removeAt(i);
      } 
      else if(ref=='thu'){
        const remove = this.profileForm.get('thu') as FormArray;
      remove.removeAt(i);
      }else if(ref=='fri'){
        const remove = this.profileForm.get('fri') as FormArray;
      remove.removeAt(i);
      }else if(ref=='wed'){
        const remove = this.profileForm.get('wed') as FormArray;
      remove.removeAt(i);
      }else if(ref=='sat'){
        const remove = this.profileForm.get('sat') as FormArray;
      remove.removeAt(i);
      }else if(ref=='sun'){
        const remove = this.profileForm.get('sun') as FormArray;
      remove.removeAt(i);
      }
    }
    
    // add(){ 
    //   let row = document.createElement('div');   
    //     row.className = 'row mb-2'; 
    //     row.innerHTML = ` 
    //     <div class="col-md-5">
    //     <input type="time" placeholder="" class="form-control">
    //   </div>
    //   <div class="col-md-5"><input type="time" placeholder="" class="form-control"></div>
    //   <div class="col-md-2"><a href="javascript:void(0)" ><i class="far fa-times-circle" onclick="remove()"></i></a></div>
    //     `; 
    //     document.querySelector('.showInputField').appendChild(row); 
    // } 
    // remove(){
    //   let removed = document.querySelector('.row.mb-2'); 
    //   console.log('Remove item called',removed);
    // }
    getProfile(){
      
      let url =`admin/getProfile`
      this.service.getApi(url).subscribe((res:any)=>{
        console.log('Res of get profile birth',res.data.birthDate)
        if(res.statusCode==200){
          this.profileData = res.data
          this.ProfilePic = res.data.image,
          this.fileName = this.profileData.image.split('/').pop()
          this.address = res.data.location.address
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
          this.shopStatus = res.data.shopStatus
          this.commingSoon = res.data.commingSoon
          this.lat = this.profileData.location.coordinates[1];
        this.lng = this.profileData.location.coordinates[0];
        let sun = <FormArray>this.profileForm.controls.sun;
          let mon = <FormArray>this.profileForm.controls.mon;
          let tue = <FormArray>this.profileForm.controls.tue;
          let wed = <FormArray>this.profileForm.controls.wed;
          let thu = <FormArray>this.profileForm.controls.thu;
          let fri = <FormArray>this.profileForm.controls.fri;   
          let sat = <FormArray>this.profileForm.controls.sat;
        for(var day of this.profileData.shopHours){
          console.log('X item',day.days)
          for(let x of this.profileData.shopHours[day.days].hours) {
            console.log('X days',x.start);
            
            if(day.days==0 && x.start){
              this.IsSun=true
              sun.push(this.fb.group({
                start: x.start,
                end: x.end,
                
               }));}
            else if(day.days==1 && x.start){
              this.IsMon=true
              mon.push(this.fb.group({
                start: x.start,
                end: x.end
               }));}
             else if(day.days==2 && x.start){
              this.IsTue=true
              tue.push(this.fb.group({
                start: x.start,
                end: x.end
               }));
             }
             else if(day.days==3 && x.start){
              this.IsWed=true
              wed.push(this.fb.group({
                start: x.start,
                end: x.end
               }));
             }
             else if(day.days==4 && x.start){
              this.IsThu=true
              thu.push(this.fb.group({
                start: x.start,
                end: x.end
               }));
             }
             else if(day.days==5 && x.start){
              this.IsFri=true
              fri.push(this.fb.group({
                start: x.start,
                end: x.end
               }));
             }
             else if(day.days==6 && x.start){
              this.IsSat=true
              sat.push(this.fb.group({
                start: x.start,
                end: x.end
               }));
             }}}}
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
    public errorHandling = (control: string, error: string) => {
      return this.profileForm.controls[control].hasError(error);
    }
    updateProfile(){
      this.submitted = true
      this.spinner.show()
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
        "shopStatus": this.shopStatus,
        "commingSoon": this.commingSoon,
        "latitude":this.lat.toString(),
        "longitude":this.lng.toString(),
        "shopHours": [
            {
                "days": "0",
                "hours":this.profileForm.value.sun,
                "isClosed": this.IsSun
            },
            {
                "days": "1",
                "hours":this.profileForm.value.mon,
                "isClosed": this.IsMon
            },
            {
                "days": "2",
                "hours": this.profileForm.value.tue,
                 "isClosed": this.IsTue
            },
            {
                "days": "3",
                "hours":this.profileForm.value.wed,
                "isClosed": this.IsWed
            },
            {
                "days": "4",
                "hours":this.profileForm.value.thu,
                "isClosed": this.IsThu
            },
            {
                "days": "5",
                "hours": this.profileForm.value.fri,
                 "isClosed": this.IsFri
            },
            {
                "days": "6",
                 "hours": this.profileForm.value.sat,
                "isClosed": this.IsSat
            }
        ]
    }
    if(this.profileForm.valid){
      this.service.putApi(url,obj).subscribe((res:any)=>{
        console.log("Update profile",res)
        if(res.statusCode==200){
          this.spinner.hide()
          this.submitted = false
          this.service.subject.next(true)
          this.router.navigate(['dashboard'])
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
}
