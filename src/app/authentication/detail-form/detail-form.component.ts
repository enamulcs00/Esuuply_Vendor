import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-form',
  templateUrl: './detail-form.component.html',
  styleUrls: ['./detail-form.component.css']
})
export class DetailFormComponent implements OnInit {
  checked:string;
  days:string[]=['sun','mon','tue','wed','thu','fri','sat']
    constructor() { }
  
    ngOnInit(): void {
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

}
