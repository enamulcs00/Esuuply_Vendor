import { Component } from '@angular/core';
//import {SharedService} from ''
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup2.component.html'
})
export class Signup2Component {
  countrycode: any;
  phonecode: any;
  constructor(private service:SharedService) {
    this.service.getJson().subscribe((res:any)=>
      {
        this.countrycode = res.countryArray
        this.phonecode = res.countryArray[0].dial_code
      })
  }
}
