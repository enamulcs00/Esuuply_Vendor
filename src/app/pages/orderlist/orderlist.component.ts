import { Component, OnInit,ViewChild} from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {FormControl,FormGroup} from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource, } from '@angular/material/table';

export interface UserData {
  serial_no:string,
  // hotelName:string,
  name: string,    
  // driver:string,
  id: string,    
  contact:string,
  comment:string;
 // status:string,
  action:string,
  address:string,
  orderdate:string,
  deliverydate:string,
  // foodStatus:string,
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
  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;
  closeResult: string;
  displayedColumns: string[] = ['serial_no','name' ,'id','contact','comment','address','orderdate','deliverydate','orderStatus','totalSales','action'];
  dataSource: MatTableDataSource<UserData>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private modalService: NgbModal) {
    this.dataSource = new MatTableDataSource(this.table);
  }
  toppings = new FormControl();
  toppingList: string[] = ['Jamas Thomas', 'Rony Roy', 'Vicky Andy', 'john Vick', 'Alex Harry', 'Harry Roy'];
  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  table = [
    {   
      serial_no:"1",
      hotelName:"Mcdonalds",
      name: 'Sandy roy',   
      id: "#334553",    
      contact:"+91-33434343",
      comment:"lorem ipsum dummy text",
      address:"#454 1st Block, Rammurthy, Bangalore-560016",
      driver:"Andrew Tye",
      orderdate:"12-05-2021/13:45",
      deliverydate:"12-05-2021/15:45",
      // foodStatus:"Pending and not processed for Pick-Up",
      orderStatus:"Pending",
      totalSales:"500",
      action:"0",      
    },
    {    
      serial_no:"2",
      hotelName:"Mcdonalds",
      name: 'Rohan Smith',   
      id: "#334553",  
      contact:"+91-33434343",
      comment:"lorem ipsum dummy text",
      address:"#454 1st Block, Rammurthy, Bangalore-560016",
      driver:"Andrew Tye",
      orderdate:"12-05-2021/13:45",
      deliverydate:"12-05-2021/15:45",
      // foodStatus:"On The Way",
      orderStatus:"Accepted",   
      totalSales:"500",
      action:"1",      
    },
    {    
      serial_no:"3",
      hotelName:"Mcdonalds",
      name: 'john Doe',   
      id: "#34553",
      contact:"+91-33434343",
      comment:"lorem ipsum dummy text",
      // email:"Burger", 
      address:"#454 1st Block, Rammurthy, Bangalore-560016",   
      driver:"Andrew Tye",
      orderdate:"12-05-2021/13:45",
      deliverydate:"12-05-2021/15:45",
      // foodStatus:"On The Way",
      orderStatus:"Accepted",
      totalSales:"400",
      action:"1",      
    },
   
  ]
  userDeleteModal(userDelete) {
    this.modalService.open(userDelete, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
  }
  reviewModal(review) {
    this.modalService.open(review, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  orderConfirmModal(orderConfirm) {
    this.modalService.open(orderConfirm, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
  }
  changedriverModal(changedriver) {
    this.modalService.open(changedriver, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
  } commentModal(comment) {
    this.modalService.open(comment, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
  }
  mapModal(map) {
    this.modalService.open(map, {backdropClass: 'light-blue-backdrop',centered: true,size: 'md'});
  }
}
