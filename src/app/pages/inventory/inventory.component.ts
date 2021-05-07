import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { SharedService } from 'src/app/authentication/shared.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  searchByName:any = '';
  catId:any = ''
  qty:any='ALL'
  Instock:any=''
  totalItems: any;
  pageNumber: number=1;
  itemPerpage: number=10;
  closeResult: string;
  toppings = new FormControl();
  toppingList: string[] = ['Main', 'Desserts', 'Side', 'Drink', 'Appetiser',];
  dishType: string[] = ['Category 1', 'Category 2','Category 3'];
  cusinine: string[] = ['Indian', 'Italian ', 'Chiness',];
  catagoryList: any;
  stockList: any;
  constructor(private spinner:NgxSpinnerService,private fb:FormBuilder,private modalService: NgbModal,public service:SharedService,private router:Router) {}
  
  ngOnInit(): void {
    this.getFoodItem()
    this.getCategory()
  }
  boxDeleteModal(boxDelete) {
    this.modalService.open(boxDelete, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
  }
  inventoryModal(inventory) {
    this.modalService.open(inventory, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
  }
  searchFormSubmit() {
    if (this.searchByName) {
      this.getFoodItem()
    }
    else if(this.searchByName==''){
      this.GetAll()
      //this.getFoodItem()
    }
   }
   FilterByQty(percentage){
this.qty = percentage
this.getFoodItem()
   }
   filter(id){
this.catId = id
this.getFoodItem()
   }
   FilterByStock(ref){
this.Instock = ref
this.getFoodItem()
   }
   GetAll(){
     this.qty='ALL'
     this.Instock=''
     this.searchByName = ''
     this.catId = ''
     this.getFoodItem()
   }
  getFoodItem(){
    this.spinner.show()
    //${this.pageNumber}&pageCount=${this.itemPerpage}
    let url= `admin/products?stockStatus=${this.Instock}&qty=${this.qty}&categoryId=${this.catId}&search=${this.searchByName}`
    this.service.getApi(url).subscribe((res:any)=>{

      console.log('Food item',res.data);
      
      if(res.statusCode==200){
        this.totalItems =  res.data.itemCount
        this.stockList = res.data.results
        this.spinner.hide()
      }else{
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
    console.log('this is ind',event.pageIndex)
    if (event.pageIndex === 0) {
      this.pageNumber = 1;
    } else {
      this.pageNumber = event.pageIndex + 1;
    }
    this.getFoodItem();
  }
  getCategory(){
    this.spinner.show()
    let url= `admin/categories`
    this.service.getApi(url).subscribe((res:any)=>{
      if(res.statusCode==200){
        this.catagoryList = res.data.results
        this.spinner.hide()
      }else{
        this.spinner.hide()
        Swal.fire('Oops',res.message,'error')
      }
    },error=>{
      this.spinner.hide()
      Swal.fire('Oops',error.error.message)
    }) 
  }
  
}
