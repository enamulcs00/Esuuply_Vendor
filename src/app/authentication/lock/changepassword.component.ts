import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html'
})
export class changepasswordComponent implements OnInit{
  form: FormGroup;
  history = window.history;
  isSubmitted: Boolean = false
  constructor(
    private fb: FormBuilder,
    private toaster: ToastrService,
    private router: Router,
    private authService: SharedService,
    private spinner: NgxSpinnerService
  ) { }


  ngOnInit() {
    this.form = this.fb.group({
      oldPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmNewPassword: ['', Validators.required]
     })
  }
  public errorHandlingSignup = (control: string, error: string) => {
    return this.form.controls[control].hasError(error);
  }
  save() {
    this.isSubmitted = true
    if (this.form.valid){
      this.spinner.show()
    let data = {
      oldPassword: this.form.value.oldPassword,
      newPassword: this.form.value.newPassword,
     // confirmPassword: this.form.value.newPassword,
    }
    this.isSubmitted = false
    this.authService.changePassword(data).subscribe((response:any) => {
      this.spinner.hide()
      if (response.statusCode==200) {
        Swal.fire('Success',response.message,'success')
        this.router.navigate(['dashboard'])
      } else {
        Swal.fire('Oops',response.message,'error')
      }
    }, error => {
      
      this.spinner.hide()
      console.log(error)
      Swal.fire('Oops',error.message,'error')
    })
    } else if(this.form.invalid){
     // Swal.fire('Oops','Please fill all field','error')
    }
    
  }
  
}
