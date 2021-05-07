import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
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
  submitted:boolean = false
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
  QtyForm:FormGroup
  Id: any;
  constructor(private spinner:NgxSpinnerService,private fb:FormBuilder,private modalService: NgbModal,public service:SharedService,private router:Router) {}
  
  ngOnInit(): void {
    this.getFoodItem()
    this.getCategory()
    this.QtyForm = this.fb.group({
      qty:['',Validators.required]
    })
  }
  boxDeleteModal(boxDelete) {
    this.modalService.open(boxDelete, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
  }
  inventoryModal(inventory,id) {
    this.Id = id
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
   AddQuantity(){
    this.spinner.show()
    this.submitted = true
    let url = `admin/products/${this.Id}`
    let obj = {
      "type":"ADD",
    "qty":this.QtyForm.value.qty
  }
  if(this.QtyForm.valid){
    this.service.patchApi(url,obj).subscribe((res:any)=>{
      console.log('Added item',res);
      if(res.statusCode==200){
        this.getFoodItem()
        this.spinner.hide()
        this.modalService.dismissAll()
        Swal.fire('Success',res.message,'success')
        this.submitted = false
      }else {
        Swal.fire('Oops',res.message,'error')
        this.spinner.hide()
      }
    },error=>{
      this.spinner.hide()
      Swal.fire('oops',error.error.message)
    })
  }else if(this.QtyForm.invalid){
    this.spinner.hide()
    Swal.fire("Invalid form",'Please fill quantity value','warning')
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
