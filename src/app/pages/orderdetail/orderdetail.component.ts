import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { ShareReplayConfig } from 'rxjs/internal/operators/shareReplay';
import { SharedService } from 'src/app/authentication/shared.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-orderdetail',
  templateUrl: './orderdetail.component.html',
  styleUrls: ['./orderdetail.component.css']
})
export class OrderdetailComponent implements OnInit {
id:any
total:number=0
  particularObject: any;
  constructor(private modalService: NgbModal,private act:ActivatedRoute,public service:SharedService,private spinner:NgxSpinnerService) {
    this.act.params.subscribe((res:any)=>{
this.id = res.id
    })
   }

  ngOnInit(): void {
    this.getParticularOrder()
  }

getParticularOrder(){

  let url = `admin/orders/${this.id}`
  this.spinner.show()
this.service.getApi(url).subscribe((res:any)=>{
  if(res.statusCode==200){
    this.particularObject = res.data.order
    this.spinner.hide()
    for(var price of res.data.order.items){
this.total += price.price
console.log('Price total',this.total);
 
    }
  }else{
    this.spinner.hide()
    Swal.fire('Error',res.message,'error')
  }
},error=>{
  this.spinner.hide()
    Swal.fire('Error',error.message,'error')
})
}

  back()
{
  history.back()
}
itemShowModal(itemShow){
  this.modalService.open(itemShow, { size: 'sm' });
}
}