import { ForgetPasswordService } from './../../Jeptag-admin/Services/forget-password.service';

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SwalAlert } from '../../Shared/swalAlerts';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {

  model: any = {};
  loaded = false;
  result:any;
  code:any;
  constructor(private ForgetPasswordService:ForgetPasswordService,private router: Router) { }

  ngOnInit() {
 this.code =this.ForgetPasswordService.getCode();
  console.log("CODE",this.code)
  }

  onSubmit() {
 //   let categories = this.productService.getCategories();
   console.log("USERNAME"+this.model['username'])
 let verify = this.ForgetPasswordService.verifyEmail(this.model['username']);
 verify.subscribe(
   result => {
     console.log("VERIFY RESULT :"+ result)
     this.result=result['result'];
     console.log('product by id:', result);
     if (result!=null) {
     //  this.generateForm(this.product);
     }
     else {
       this.loaded = true;
       SwalAlert.errorAlert('', "Can not get the product");
     }

   },
   err => {
     console.log(err);
     this.loaded = true;
   }
 );

  
            
  }
}
