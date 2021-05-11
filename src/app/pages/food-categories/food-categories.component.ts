import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,} from '@angular/cdk/drag-drop';
import { SharedService } from 'src/app/authentication/shared.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-food-categories',
  templateUrl: './food-categories.component.html',
  styleUrls: ['./food-categories.component.scss']
})
export class FoodCategoriesComponent implements OnInit {
  panelOpenState = false;
  closeResult: string;
  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
 
  ];
  horizontalOrientation = [
    {'name':'Thali', 'tax':'6%', 'description':'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente explicabo, ut sint pariatur modi dicta magni tenetur a nihil eum odio non aliquam impedit ratione ab cum. Voluptatem, laudantium ab?'},
    {'name':'Fast Food','tax':'6%', 'description':'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente explicabo, ut sint pariatur modi dicta magni tenetur a nihil eum odio non aliquam impedit ratione ab cum. Voluptatem, laudantium ab?'},
    // {'name':'kaali', 'description':'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente explicabo, ut sint pariatur modi dicta magni tenetur a nihil eum odio non aliquam impedit ratione ab cum. Voluptatem, laudantium ab?'},
    // {'name':'manali', 'description':'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente explicabo, ut sint pariatur modi dicta magni tenetur a nihil eum odio non aliquam impedit ratione ab cum. Voluptatem, laudantium ab?'},
  ];
  
  listfooditems = [
    {'name':'Soya Chap'},
    {'name':'Burger'},
   
  ];
  submitted:boolean = false
  toppings = new FormControl();
  toppingList: string[] = ['Main', 'Desserts', 'Side', 'Drink', 'Appetiser',];
  dishType: string[] = ['Veg', 'Non-Veg'];
  cusinine: string[] = ['Indian', 'Italian ', 'Chiness',];
  active = 1;
  categories: any;
  startTime:number;
  endTime:number;
  subCategory: any;
  image: any;
  addSubCategoryForm:FormGroup
  addCategoryForm:FormGroup
  deleteId: any;
  file: any;
  SubCategoryForm:FormGroup
  UserObject:object;
  text: any = 'Choose File';
  fileAttached: boolean;
  imageSizeError: boolean;
  imageFile: any;
  count: number;
  constructor(private toaster:ToastrService,private formBuilder:FormBuilder,private modalService: NgbModal,public service:SharedService,private router:Router) {}
  ngOnInit(): void {
    this.addCategoryForm = this.formBuilder.group({
      name: [
        "",
        [Validators.required],
      ],
      description: [
        "",
        [Validators.required],
      ],
      image: ["", Validators.required],
      taxPercentage: [
        "",
        Validators.required],
      openTime: ["", Validators.required],
      closeTime: ["", Validators.required],
    });
  
    this.SubCategoryForm = this.formBuilder.group({
      name: [
        "",
        [Validators.required],
      ],
      image: ["", [Validators.required]],
      // openTime: ["", Validators.required],
      // closeTime: ["", Validators.required],
    });
    this.getCategories()
  }
  
  deleteBoxModal(userDelete,id) {
    this.deleteId = id
    this.modalService.open(userDelete, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
  }
  deleteSubModal(userDelete,id) {
    this.deleteId = id
    this.modalService.open(userDelete, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
  }
  addUserModal(addUser) {
    this.addCategoryForm.reset()
    this.text= 'Choose File';
    this.startTime = undefined
    this.endTime = undefined
    this.submitted = false
    this.modalService.open(addUser, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  editUserModal(EditCategory,obj) {
    this.UserObject = obj
    this.deleteId = obj._id
    this.submitted = false
    this.imageFile = obj.image
    this.text = obj.image.split('/').pop()
    console.log('This is user obj',obj);
    this.addCategoryForm.get('name').setValue(obj.name)
   // this.addCategoryForm.controls['image'].setValue(obj.image)
    this.addCategoryForm.get('description').setValue(obj.description)
    this.addCategoryForm.get('taxPercentage').setValue(obj.taxPercentage)
    this.addCategoryForm.get('openTime').setValue(obj.openTime)
    this.addCategoryForm.get('closeTime').setValue(obj.closeTime)
    this.startTime = parseInt(obj.openTime.split(':')[0]*60 +  obj.openTime.split(':')[1])
    this.endTime = parseInt(obj.closeTime.split(':')[0]*60 +  obj.closeTime.split(':')[1])
    console.log('Update Time Zone',this.startTime, this.endTime)
    this.modalService.open(EditCategory, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  UpdateSub()
  {
    this.submitted = true
    let url = `admin/subCategories/${this.deleteId}`
     if(this.SubCategoryForm.valid) {
      const body = {
        
        name: this.SubCategoryForm.controls["name"].value,
        image: this.imageFile,
      };
      this.service.putApi(url,body).subscribe((data: any) => {
        if (data.statusCode == 200) {
          this.modalService.dismissAll();
          Swal.fire("Success", data.message, "success");
          this.SubCategoryForm.reset();
          this.submitted = false
          this.getCategories();
        } else {
          Swal.fire("Failed", data.message, "error");
          
        }
      },error=>{
        Swal.fire('Failed',error.error.message,'error')
      });
    }else if(this.addCategoryForm.invalid){
      Swal.fire('Invalid Form','Please fill all field correctly','error')
    }
  }
  editBoxModal(editModel,obj) {
    console.log('Edit sub obj',obj)
    this.deleteId = obj._id
    this.submitted = false
    this.imageFile = obj.image
    this.text = obj.image.split('/').pop()
    this.SubCategoryForm.get('name').setValue(obj.name)
   
  //  this.SubCategoryForm.get('image').setValue(this.text)
    this.modalService.open(editModel, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  addsubCategoryModel(addsubCategory,id) {
    this.deleteId = id
    this.submitted = false
    this.text= 'Choose File';
   
    this.modalService.open(addsubCategory, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
    this.SubCategoryForm.reset()
  }
  addCategoryModel(addCategory) {
    this.addCategoryForm.reset()
    this.text= 'Choose File';
    this.startTime = undefined
    this.endTime = undefined
    this.submitted = false
    this.modalService.open(addCategory, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }

  orientationDrop(event: CdkDragDrop<string[]>) {
    let url = `admin/categoriesIndexing`
    console.log('Drag',event);
    
    const selectedCategory = this.categories[event?.previousIndex];
    const categoryId = selectedCategory?._id;

    moveItemInArray(this.categories, event.previousIndex, event.currentIndex);
   
    const body = {
      id: categoryId,
      index: event.currentIndex + 1,
    };
this.service.putApi(url,body).subscribe((data: any) => {
  console.log('Dragged',data)
      if (data.statusCode == 200) {
        this.toaster.success("Category position updated");
        this.getCategories();
      } else {
        this.toaster.error("Failed to update Position");
      }
    });
  }

  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
  Update(){
    if(this.imageFile.length>0){
this.addCategoryForm.get('image').clearValidators();
this.addCategoryForm.get('image').updateValueAndValidity()
    }
    this.submitted = true
    let url = `admin/categories/${this.deleteId}`

     if(this.addCategoryForm.valid && (this.startTime < this.endTime) ) {
      const body = {
        name: this.addCategoryForm.controls["name"].value,
        description: this.addCategoryForm.controls["description"].value,
        taxPercentage: this.addCategoryForm.controls["taxPercentage"].value.toString(),
        openTime: this.addCategoryForm.controls["openTime"].value,
        closeTime: this.addCategoryForm.controls["closeTime"].value,
        image: this.imageFile,
      };
      this.service.putApi(url,body).subscribe((data: any) =>{
        if (data.statusCode == 200) {
          this.modalService.dismissAll();
          Swal.fire("Success", data.message, "success");
          this.addCategoryForm.reset();
          this.submitted = false
          this.getCategories();
        } else {
          Swal.fire("Failed", data.message, "error");
          
        }
      },error=>{
        Swal.fire('Failed',error.error.message,'error')
      });
    }else if(this.addCategoryForm.invalid || (this.startTime > this.endTime || this.startTime == this.endTime)){
      Swal.fire('Invalid Form','Please fill all field correctly','error')
    }
  }
  IsSelectedTime(e,ref){
    if(ref=='start'){
      this.startTime = e.target.value.split(":")[0]*60 + e.target.value.split(":")[1]
    }else if(ref=='end'){
      this.endTime = e.target.value.split(":")[0]*60 + e.target.value.split(":")[1]
    }
    
  }
  Add(){
    console.log("Add Called");
    
    this.submitted = true
    let url = `admin/categories`
     if( (this.addCategoryForm.valid) && (this.startTime < this.endTime )) {
      const body = {
        name: this.addCategoryForm.controls["name"].value,
        description: this.addCategoryForm.controls["description"].value,
        taxPercentage: this.addCategoryForm.controls["taxPercentage"].value.toString(),
        openTime: this.addCategoryForm.controls["openTime"].value,
        closeTime: this.addCategoryForm.controls["closeTime"].value,
        image: this.imageFile,
      };
      this.service.postApi(url,body).subscribe((data: any) => {
        if (data.statusCode == 200) {
          this.modalService.dismissAll();
          Swal.fire("Success", "Category successfully added", "success");
          this.addCategoryForm.reset();
          this.submitted = false
          this.getCategories();
        } else {
          Swal.fire("Failed", "Failed to add category", "error");
          
        }
      },error=>{
        Swal.fire('Failed',error.error.message,'error')
      });
    }else if(this.addCategoryForm.invalid || (this.startTime >= this.endTime)){
      Swal.fire('Invalid Form','Please fill all field correctly','error')
    }
  }
  AddSub(){
    this.submitted = true
    let url = `admin/subCategories`
     if(this.SubCategoryForm.valid) {
      const body = {
        "parent": this.deleteId,
        name: this.SubCategoryForm.controls["name"].value,
        // openTime: this.SubCategoryForm.controls["openTime"].value,
        // closeTime: this.SubCategoryForm.controls["closeTime"].value,
        image: this.imageFile,
      };
      this.service.postApi(url,body).subscribe((data: any) => {
        if (data.statusCode == 200) {
          this.modalService.dismissAll();
          Swal.fire("Success", data.message, "success");
          this.SubCategoryForm.reset();
          this.submitted = false
          this.getCategories();
        } else {
          Swal.fire("Failed", data.message, "error");
          
        }
      },error=>{
        Swal.fire('Failed',error.error.message,'error')
      });
    }else if(this.addCategoryForm.invalid){
      Swal.fire('Invalid Form','Please fill all field correctly','error')
    }
  }
  doSomething(e, ref) {
    if (!ref.length) {
      e.preventDefault();
    }
  }
  orientationDrop1(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.listfooditems,
      event.previousIndex,
      event.currentIndex
    );
  }

  onDrop1(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
  getCategories() {
    let url = `admin/categories`
    this.service.getApi(url).subscribe((res: any) => {
      console.log('This is cat items',res);
      if (res.statusCode == 200) {
        this.categories = res.data.results;
        this.subCategory = res.data.results.subCategories;
        this.image = res.data.results.image;
        this.count = res.data.itemCount;
      }else {
        Swal.fire('Error',res.message,'error')
      }
    },error=>{
      Swal.fire('Error',error.error.message,'error')
    });
  }
  deleteCategory() {
    let url = `admin/categories/${this.deleteId}`
    this.service.deleteApi(url).subscribe((data: any) => {
      
      if (data.statusCode == 200) {
        this.getCategories();
        this.modalService.dismissAll();
        Swal.fire("Deleted", "Category successfully deleted", "success");
      } else {
        Swal.fire('Error',data.message,'error')
      }
    },error=>{
      Swal.fire('Error',error.error.message,'error')
    });
  }
  deleteSubCategory() {
    let url = `admin/subCategories/${this.deleteId}`
    this.service.deleteApi(url).subscribe((data: any) => {
      
      if (data.statusCode == 200) {
        this.getCategories();

        this.modalService.dismissAll();
        Swal.fire("Deleted", "SubCategory successfully deleted", "success");
      } else {
        Swal.fire('Error',data.message,'error')
      }
    },error=>{
      Swal.fire('Error',error.error.message,'error')
    });
  } 
  onImageSelect(e) {
    let url = `admin/uploadFile`
    var files = e.target.files;
    if (files[0].size <= 1000000) {
      this.file = files[0];
      this.text = e.target.files[0].name;
      this.SubCategoryForm.get('image').setValue(this.file)
      this.fileAttached = true;
      this.imageSizeError = false;
      if (this.fileAttached) {
        let formData = new FormData();
        formData.append("file", this.file);
        this.service.postApi(url,formData).subscribe((res: any) => {
          if (res.statusCode == 200) {
            this.imageFile = res.data.filePath;
            Swal.fire('Success',res.message,'success')
          }
        });
      }
    } else {
      this.toaster.error("Size Exceeded, Image size should be below 1 MB ");
      this.file = null;
      this.text = "Choose File";
      this.fileAttached = false;
      this.imageSizeError = true;
    }
  }
}

