import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { SharedService } from 'src/app/authentication/shared.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-food-items',
  templateUrl: './food-items.component.html',
  styleUrls: ['./food-items.component.scss']
})
export class FoodItemsComponent implements OnInit {
  searchByName:any = '';
  catId:any = ''
 fileName:any
  toppings = new FormControl();
  toppingList: string[] = ['Main', 'Desserts', 'Side', 'Drink', 'Appetiser',];
  dishType: string[] = ['Soya Chap', 'Burger','Sandwich'];
  cusinine: string[] = ['Indian', 'Italian ', 'Chiness',];
  foodList: any;
  submitted:boolean = false
  addForm:FormGroup
  Isdelted:boolean = false
  catagoryId:any;
  catagoryList: any;
  subCategoryList: any;
  subId: any;
  Iscategory:boolean = false
  files: any;
  totalItems: any;
  pageNumber: number=1;
  itemPerpage: number=10;
  deleteId: any;
  updateId:any
  constructor(private spinner:NgxSpinnerService,private fb:FormBuilder,private modalService: NgbModal,public service:SharedService,private router:Router) { }

  ngOnInit(): void {
    this.getFoodItem()
    this.getCategory()
   
    this.addForm = this.fb.group({
      categoryId:['',Validators.required],
      subCategories:['',Validators.required],
      name:['',Validators.required],
      image:['',Validators.required],
      stockQuantity:['',Validators.required],
      price:['',Validators.required],
      tax:['',Validators.required],
      deliveryCharges:['',Validators.required],
      minimumStockQuantity:['',Validators.required],
      maximumStockQuantity:['',Validators.required],
      description:['',Validators.required]

    })
  }
  deleteBoxModal(userDelete,id) {
    this.deleteId = id
    this.modalService.open(userDelete, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
  }

  addUserModal(addUser) {
    this.modalService.open(addUser, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  editBoxModal(editModel,id) {
    this.getsubCategory(id)
    this.updateId = id
    this.submitted = false
    this.SetForm(id)
    this.spinner.show()
    setTimeout(() => {
      this.spinner.show()
      this.modalService.open(editModel, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
    this.spinner.hide()
    }, 1000);
  }
  addsubCategoryModel(addsubCategory) {
    this.modalService.open(addsubCategory, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  addCategoryModel(addCategory) {
    this.addForm.reset()
    this.submitted = false
    this.fileName = undefined
    this.modalService.open(addCategory, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
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
  public errorHandling = (control: string, error: string) => {
    return this.addForm.controls[control].hasError(error);
  }
  searchFormSubmit() {
    if (this.searchByName) {
      this.getFoodItem()
    }
    else if(this.searchByName==''){
      this.getFoodItem()
    }
   }
   filter(id){
this.catId = id
this.getFoodItem()
   }
   GetAll(){
     this.searchByName = ''
     this.catId = ''
     this.getFoodItem()
   }
   delFood(){
     this.spinner.show()
     let url = `admin/products/${this.deleteId}`
     this.service.deleteApi(url).subscribe((res:any)=>{
       if(res.statusCode==200){
         this.getFoodItem()
         this.spinner.hide()
         this.modalService.dismissAll()
         Swal.fire('delete',res.message,'success')
       }else{
         Swal.fire('Oops',res.message,'error')
         this.spinner.hide()
       }
     },error=>{
       Swal.fire('Oops',error.error.message,'error')
       this.spinner.hide()
     })
   }
  getFoodItem(){
    this.spinner.show()
    //${this.pageNumber}&pageCount=${this.itemPerpage}
    let url= `admin/products?page=${this.pageNumber}&isDeleted=${this.Isdelted}&search=${this.searchByName}&categoryId=${this.catId}`
    this.service.getApi(url).subscribe((res:any)=>{
      console.log('Food item',res.data.itemCount);
      
      if(res.statusCode==200){
        this.totalItems =  res.data.itemCount
        this.foodList = res.data.results
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
  getsubCategory(id){
    this.spinner.show()
    let url= `admin/allSubCategories/${id}`
    this.service.getApi(url).subscribe((res:any)=>{
      if(res.statusCode==200){
        this.subCategoryList = res.data.results
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
  someMethod(e){
    this.spinner.show()
    console.log('Cat id',e);
    this.Iscategory = true
    this.catagoryId = e
    this.getsubCategory(e)
    this.spinner.hide()
  }
  subCatChange(e){
    this.subId = e
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
         this.addForm.get('image').setValue(fileData)
      } else {
        
      }
    }
  }
  AddProduct(){
    this.spinner.show()
    this.submitted = true
    let url = `admin/products`
    let obj = {
      "categoryId": this.addForm.value.categoryId,
      "subCategories": this.addForm.value.subCategories,
      "name":this.addForm.value.name,
      "image": this.files,
      "stockQuantity": this.addForm.value.stockQuantity,
      "price": this.addForm.value.price,
      "taxValue": this.addForm.value.tax,
      "deliveryCharges": this.addForm.value.deliveryCharges,
      "minimumStockQuantity": this.addForm.value.minimumStockQuantity,
      "maximumStockQuantity": this.addForm.value.maximumStockQuantity,
      "description":this.addForm.value.description
  }
  if(this.addForm.valid){
    this.service.postApi(url,obj).subscribe((res:any)=>{
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
  }else if(this.addForm.invalid){
    this.spinner.hide()
    Swal.fire("Invalid form",'Fill all field correctly','warning')
  }}
  SetForm(id){
    this.spinner.show()
    let url= `admin/products/${id}`
    this.service.getApi(url).subscribe((res:any)=>{
      console.log('Form value res',res)
      if(res.statusCode==200){
        this.files = res.data.image
        this.fileName = res.data.image.split('/').pop()
         
         let geoFenceArray=[]
       for(var id of res.data.subCategories){
         geoFenceArray.push(id._id)
       }
       this.addForm.get('subCategories').setValue(geoFenceArray)
         this.addForm.get('categoryId').setValue(res.data.categoryId._id)
         this.addForm.get('name').setValue(res.data.name)
         this.addForm.get('image').setValue(res.data.image)
         this.addForm.get('stockQuantity').setValue(res.data.stockQuantity)
         this.addForm.get('price').setValue(res.data.price)
         this.addForm.get('tax').setValue(res.data.taxValue)
         this.addForm.get('deliveryCharges').setValue(res.data.deliveryCharges)
         this.addForm.get('minimumStockQuantity').setValue(res.data.minimumStockQuantity)
         this.addForm.get('maximumStockQuantity').setValue(res.data.maximumStockQuantity)
         this.addForm.get('description').setValue(res.data.description)
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
  UpdateProduct()
    {
      this.spinner.show()
      this.submitted = true
      let url = `admin/products/${this.updateId}`
      let obj = {
        "categoryId": this.addForm.value.categoryId,
        "subCategories": this.addForm.value.subCategories,
        "name":this.addForm.value.name,
        "image": this.files,
        "stockQuantity": this.addForm.value.stockQuantity,
        "price": this.addForm.value.price,
        "taxValue": this.addForm.value.tax,
        "deliveryCharges": this.addForm.value.deliveryCharges,
        "minimumStockQuantity": this.addForm.value.minimumStockQuantity,
        "maximumStockQuantity": this.addForm.value.maximumStockQuantity,
        "description":this.addForm.value.description
    }
    if(this.addForm.valid){
      this.service.putApi(url,obj).subscribe((res:any)=>{
        console.log('Added item',res);
        if(res.statusCode==200){
          this.getFoodItem()
          this.spinner.hide()
          this.modalService.dismissAll()
          Swal.fire('Success',res.message,'success')
          this.submitted = false
        }else {
          this.spinner.hide()
          Swal.fire('Oops',res.message,'error')
        }
      },error=>{
        this.spinner.hide()
        Swal.fire('oops',error.error.message)
      })
    }else if(this.addForm.invalid){
      this.spinner.hide()
      Swal.fire("Invalid form",'Fill all field correctly','warning')
    }}
  
}
