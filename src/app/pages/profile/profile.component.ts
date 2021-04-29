import { Component } from '@angular/core';
import { SharedService } from 'src/app/authentication/shared.service';
import Swal from 'sweetalert2';
@Component({
  templateUrl: 'profile.component.html'
})
export class ProfileComponent {

  checked:string;
  days:string[]=['sun','mon','tue','wed','thu','fri','sat']
  profileData: any;
    constructor(private service:SharedService) { }
  
    ngOnInit(): void {
      this.getProfile()
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
        }
        else {
          Swal.fire('Oops',res.message,'error')
        }
      })
    }
}
