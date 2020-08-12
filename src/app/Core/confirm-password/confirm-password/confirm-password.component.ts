import { ForgetPasswordService } from './../../../Jeptag-admin/Services/forget-password.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SwalAlert } from '../../../Shared/swalAlerts';

@Component({
  selector: 'app-confirm-password',
  templateUrl: './confirm-password.component.html',
  styleUrls: ['./confirm-password.component.css']
})
export class ConfirmPasswordComponent implements OnInit {
  model: any = {};
  loaded = false;
  result:any;
  compareResult:any
  constructor(private ForgetPasswordService:ForgetPasswordService,private router: Router) { }

  ngOnInit() {
  }
  onSubmit() {
    //   let categories = this.productService.getCategories();
      console.log("USERNAME"+this.model['username'])
      if(this.model['password']==this.model['mpassword']){

        let verify = this.ForgetPasswordService.changePassword(this.model['username'],this.model['password']);
        verify.subscribe(
          result => {
            console.log("VERIFY RESULT :", result)
            this.compareResult=result;
            console.log("VERIFY RESULT :", this.compareResult)

            if(this.compareResult=="Password Reset Successfully"){

              SwalAlert.sucessAlert('','Password Reset Succesfully!');
              this.router.navigate(['']);


            }else{
              this.loaded = true;
              SwalAlert.errorAlert('', "Server Error");
            }
            // if (result!=null) {
            // //  this.generateForm(this.product);
            // }
           
       
          },
          err => {
            console.log(err);
            this.loaded = true;
          }
        );
      }
      else{
        SwalAlert.errorAlert('', "Password does not match");

      }
    
   
     
               
     }
}
