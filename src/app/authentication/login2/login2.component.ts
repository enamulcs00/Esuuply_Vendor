import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-login',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.scss']

})
export class Login2Component {
  constructor(private modalService: NgbModal){}

  loginform = true;
  loginform1 = false;
  recoverform = false;
  phonecode = false;
  otp= false;

  showRecoverForm() {
    this.loginform = !this.loginform;
    this.recoverform = !this.recoverform;
  }
  otpFrom() {
    this.loginform1 = !this.loginform1;
    this.loginform = !this.loginform;
    this.otp = !this.otp;
  }

  openWindowCustomClass(content3) {
    this.modalService.open(content3, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
  }
  clicked(){
    console.log("hele");
    this.loginform = true;
    this.phonecode = true;
  }
}
