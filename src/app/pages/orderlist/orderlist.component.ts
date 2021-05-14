import { Component, OnInit,ViewChild} from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {FormControl,FormGroup} from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource, } from '@angular/material/table';
import { SharedService } from 'src/app/authentication/shared.service';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';

export interface UserData {
  serial_no:string,
  name: string,    
  id: string,    
  contact:string,
  comment:string;
  action:string,
  address:string,
  orderdate:string,
  deliverydate:string,
  orderStatus:string,
}
@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  
  lat = 51.678418;
  lng = 7.809007;
  closeResult: string;
  displayedColumns: string[] = ['serial_no','name' ,'id','contact','comment','address','orderdate','deliverydate','orderStatus','totalSales','action'];
  dataSource: MatTableDataSource<UserData>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  totalItems: number;
  pageNumber: number=1;
  itemPerpage: number=10;
  searchByName:any = '';
  startDate: any='';
  endDate: any='';
  status:string = ''
  comments: string = '';
  statusId:any;
  changeTo:string = '';
  firstName:any=''
  orderNo:any=''
  comment:any=''
  phoneNo:any=''
  orderedAt:any=''
  statusSort:any=''
  subTotal:any=''
  checkReset:any
  @ViewChild("placesRef", { static: true }) placesRef: GooglePlaceDirective;
  deliveredAt: any=''
  address: any=''
  constructor(private router:Router,private spinner:NgxSpinnerService,private modalService: NgbModal,public service:SharedService) {
   
  }
  ngOnInit(): void {
    this.getOrder()
  }
  ngAfterViewInit() {
  //  this.dataSource.paginator = this.paginator;
  //  this.dataSource.sort = this.sort;
  }
  AcceptModal(accept,status,id){
    this.changeTo = status
    this.statusId = id
    console.log('This is Id for accespt',id);
    
    this.modalService.open(accept, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
  }
  userDeleteModal(userDelete) {
    this.modalService.open(userDelete, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
  }
  reviewModal(review) {
    this.modalService.open(review, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  orderConfirmModal(orderConfirm,status,id) {
    this.changeTo = status
    this.statusId = id
    this.modalService.open(orderConfirm, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
  }
  changedriverModal(changedriver) {
    this.modalService.open(changedriver, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
  } commentModal(comment,comments) {
    this.comments = comments
    this.modalService.open(comment, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
  }
  mapModal(map,lat,long) {
    this.lat = lat
this.lng = long
console.log("This is lat and lng",lat,long);

    this.modalService.open(map, {backdropClass: 'light-blue-backdrop',centered: true,size: 'md'});
  }
  FilterByStatus(ref){
    this.searchByName = ''
    this.startDate = ''
    this.endDate = ''
    this.range.reset()
this.status = ref
this.getOrder()
  }
  startPicker(e){
    if(e.value){
      this.startDate = e.value
    }
  }
  endPicker(e){
    if(e.value){
     this.endDate = e.value 
     this.searchByName= ''
     this.getOrder()
    }
  }
  searchFormSubmit() {
    if (this.searchByName) {
      this.startDate = ''
      this.endDate = ''
      this.range.reset()
      setTimeout(() => {
        this.getOrder()
      }, 700);
     }
    else if(this.searchByName==''){
      this.startDate = ''
      this.endDate = ''
      this.range.reset()
      setTimeout(() => {
        this.getOrder()
      }, 700);
    }
   }
  getOrder(){
    
let url = `admin/orders?limit=${(this.itemPerpage) + ('&page=' + this.pageNumber)
+ (this.searchByName ? ('&search=' + this.searchByName) : '') + (this.firstName ? ('&firstName=' + this.firstName) : '')
+ (this.startDate ? ('&startDateCreation=' + this.startDate) : '') + (this.endDate ? ('&endDateCreation=' + this.endDate) : '') + (this.phoneNo ? ('&phoneNo=' + this.phoneNo) : '')+ (this.status ? ('&status=' + this.status) : '')+ (this.orderNo ? ('&orderNo=' + this.orderNo) : '')+ (this.orderedAt ? ('&orderedAt=' + this.orderedAt) : '')+ (this.statusSort ? ('&statusSort=' + this.statusSort) : '')+ (this.subTotal ? ('&subTotal=' + this.subTotal) : '')+ (this.comment ? ('&comments=' + this.comment) : '')}`
    this.spinner.show()
    
   // let url= `admin/orders?limit=${this.itemPerpage}&page=${this.pageNumber}&search=${this.searchByName}&startDateCreation=${this.startDate}&endDateCreation=${this.endDate}&status=${this.status}&phoneNo=${this.phoneNo}&firstName=${this.firstName}&orderNo=${this.orderNo}&orderedAt=${this.orderedAt}&statusSort=${this.statusSort}&subTotal=${this.subTotal}&comments=${this.comment}`
    this.service.getApi(url).subscribe((res:any)=>{
  console.log('Order item',res.data.results);
  
      if(res.statusCode==200){
        this.checkReset = res.statusCode
        this.totalItems =  res.data.count
        this.dataSource = new MatTableDataSource(res.data.results);
        this.spinner.hide()
      }
      else if(res.statusCode==401){
        localStorage.removeItem('token')
        this.router.navigate(['/login'])
        Swal.fire('Oops',res.message,'error')
        this.spinner.hide()
      }
      else{
        Swal.fire('Oops',res.message,'error')
        this.totalItems = 0
        this.spinner.hide()
      }
    },error=>{
      this.spinner.hide()
      Swal.fire('Oops',error.error.message)
    })
  }
  onPaginateChange(event) {
    console.log('this is ind',event.pageIndex,  'Event',event)
    if (event.pageIndex === 0) {
      this.pageNumber = 1;
      this.itemPerpage =  event.pageSize
    } else {
      this.pageNumber = event.pageIndex + 1;
      this.itemPerpage =  event.pageSize
    }
    this.getOrder();
  }
  UpdateStatus(){
    let obj = {
      "status":this.changeTo  
    }
    let url = `admin/orders/${this.statusId}`
    this.spinner.show()
    this.service.putApi(url,obj).subscribe((res:any)=>{
      console.log('Status Res',res);
      if(res.statusCode==200){
        this.spinner.hide()
        this.getOrder()
        Swal.fire('Success',res.message,'success')
        this.modalService.dismissAll()
      }else{
        this.spinner.hide()
        Swal.fire('Error',res.message,'error')
      }
    },error=>{
      Swal.fire('Error',error.message,'error')
    })
  }
  sortData(e){

console.log('Act',e.active);

    if(e.active=='name'){
      this.firstName = (e.direction=='asc')?1:-1
      this.getOrder()
      if(this.checkReset==200){
        this.firstName= ''
      }
    }else if(e.active=='id'){
      this.orderNo = (e.direction=='asc')?1:-1
      this.getOrder()
      if(this.checkReset==200){
        this.orderNo= ''
      }
    }
    else if(e.active=='contact'){
      this.phoneNo = (e.direction=='asc')?1:-1
      this.getOrder()
      if(this.checkReset==200){
        this.phoneNo= ''
        console.log('Phone',this.phoneNo?'Hai':'Nhi hai');
        
      }
    }
    else if(e.active=='address'){
      this.address = (e.direction=='asc')?1:-1
      this.getOrder()
      if(this.checkReset==200){
        this.address= ''
      }
    }
    else if(e.active=='orderdate'){
      this.orderedAt = (e.direction=='asc')?1:-1
      this.getOrder()
      if(this.checkReset==200){
        this.orderedAt= ''
      }
    }
    else if(e.active=='deliverydate'){
      this.deliveredAt = (e.direction=='asc')?1:-1
      this.getOrder()
      if(this.checkReset==200){
        this.deliveredAt= ''
      }
    }
    else if(e.active=='orderStatus'){
      this.statusSort = (e.direction=='asc')?1:-1
      this.getOrder()
      if(this.checkReset==200){
        this.statusSort= ''
      }
    }
    else if(e.active=='comment'){
      this.subTotal = (e.direction=='asc')?1:-1
      this.getOrder()
      if(this.checkReset==200){
        this.subTotal= ''
      }
    }
    else if(e.active=='comment'){
      
      this.comment = (e.direction=='asc')?1:-1
      this.getOrder()
      console.log('this comment',this.comment,e.active,e.direction);
      if(this.checkReset==200){
        this.comment= ''
        
      }
    }
    }
}
