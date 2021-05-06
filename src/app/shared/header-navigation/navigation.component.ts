import { Component, AfterViewInit, EventEmitter, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  NgbModal,
  ModalDismissReasons,
  NgbPanelChangeEvent,
  NgbCarouselConfig
} from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { SharedService } from 'src/app/authentication/shared.service';
import Swal from 'sweetalert2';
declare var $: any;

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements AfterViewInit ,OnInit{
  @Output() toggleSidebar = new EventEmitter<void>();

  public config: PerfectScrollbarConfigInterface = {};

  public showSearch = false;
  public element1: any;
  profileData: any;
  constructor(private modalService: NgbModal,private router:Router,private service:SharedService) {}

  // This is for Notifications
  notifications: Object[] = [
    {
      btn: 'btn-danger',
      icon: 'ti-link',
      title: 'Luanch Admin',
      subject: 'Just see the my new admin!',
      time: '9:30 AM'
    },
    {
      btn: 'btn-success',
      icon: 'ti-calendar',
      title: 'Event today',
      subject: 'Just a reminder that you have event',
      time: '9:10 AM'
    },
    {
      btn: 'btn-info',
      icon: 'ti-settings',
      title: 'Settings',
      subject: 'You can customize this template as you want',
      time: '9:08 AM'
    },
    {
      btn: 'btn-primary',
      icon: 'ti-user',
      title: 'Pavan kumar',
      subject: 'Just see the my admin!',
      time: '9:00 AM'
    }
  ];

  // This is for Mymessages
  mymessages: Object[] = [
    {
      useravatar: 'assets/images/users/1.jpg',
      status: 'online',
      from: 'Pavan kumar',
      subject: 'Just see the my admin!',
      time: '9:30 AM'
    },
    {
      useravatar: 'assets/images/users/2.jpg',
      status: 'busy',
      from: 'Sonu Nigam',
      subject: 'I have sung a song! See you at',
      time: '9:10 AM'
    },
    {
      useravatar: 'assets/images/users/2.jpg',
      status: 'away',
      from: 'Arijit Sinh',
      subject: 'I am a singer!',
      time: '9:08 AM'
    },
    {
      useravatar: 'assets/images/users/4.jpg',
      status: 'offline',
      from: 'Pavan kumar',
      subject: 'Just see the my admin!',
      time: '9:00 AM'
    }
  ];
  addBikeModal(addBike) {
    this.modalService.open(addBike, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg',backdrop:"static"});
  }

  ngAfterViewInit() {}
   openBox() {
    let element = document.getElementById("notification");    
    element.classList.toggle("sidebar_slide");
    
  }
  closeBox(){
    let element1 = document.getElementById("arrow-close").parentElement;
    element1.classList.remove("sidebar_slide");
  }
  logout()
  {
    localStorage.removeItem('token')
    this.router.navigate(['login'])
   //  this.router.navigate([''])
    //  this.openDialog(1)
  }
  ngOnInit(){
    this.getProfile()
    this.service.subject.subscribe(res=>{
      if(res==true){
        this.getProfile();
      }
    })
  }
  getProfile(){
    let url =`admin/getProfile`
    this.service.getApi(url).subscribe((res:any)=>{
      console.log('Res of get profile',res)
      
      if(res.statusCode==200){
        this.profileData = res.data
             }
          else if(res.statusCode==401){
            localStorage.removeItem('token')
            this.router.navigate(['/login'])
            Swal.fire('Oops',res.message,'error')
            } 
      else {
        Swal.fire('Oops',res.message,'error')
      }
    },error=>{
      Swal.fire('Oops',error.message,'error')
    })
  }
}
