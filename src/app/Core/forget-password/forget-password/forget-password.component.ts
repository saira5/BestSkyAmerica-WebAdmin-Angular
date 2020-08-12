import { ForgetPasswordService } from './../../../Jeptag-admin/Services/forget-password.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SwalAlert } from '../../../Shared/swalAlerts';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  model: any = {};
  loaded = false;
  codeStatus=false;
  code:any
  array1:[]
  
  flag=false;
  resultString:any;
  constructor(private ForgetPasswordService:ForgetPasswordService,private router: Router) { }

  ngOnInit() {

  }

  onSubmit() {
 //   let categories = this.productService.getCategories();
 if(this.flag==false){
   console.log("FLAG IS false")
  console.log("USERNAME"+this.model['username'])
  let verify = this.ForgetPasswordService.verifyEmail(this.model['username']);
  verify.subscribe(
    result => {
     let compareString ="Please Check your email for reset code.";
 
      console.log("VERIFY RESULT :", result)
 
      this.resultString=result['result'];
      if (result!=null) {
       console.log("Inside result",this.resultString +"COMPAREE TO" +compareString)
        if(this.resultString===compareString){
          SwalAlert.sucessAlert('', 'Verification Code sent to email!');

        // if(this.resultString==="Please Check your email for reset code."){
         this.ForgetPasswordService.code=result['code']
         this.code=result['code']
         this.codeStatus=true;
         this.flag=true;
         console.log("INSIDE IF CHECK",    this.ForgetPasswordService.code)
 
         //this.router.navigate(['Verification']);
 
        }else{
          SwalAlert.errorAlert('', "Email does not exist");

        }
     }
      else {
        this.loaded = true;
        SwalAlert.errorAlert('', "Server Error");
      }
 
    },
    err => {
      console.log(err);
      this.loaded = true;
    }
  );
 }
 else{
  console.log("FLAG IS TRUE")
  console.log("CODE MATCHED",this.model['code']);
  if(this.model['code']== this.code){
    SwalAlert.sucessAlert('', 'Code Matched!');

    this.router.navigate(['confirmPassword']);
  }else{
    SwalAlert.errorAlert('', "Code doesnot matched");
  }
 }
 
//  }else{
// if(this.model['code']== this.ForgetPasswordService.code){

//   console.log("CODE MATCHED",this.model['code']);
//     this.router.navigate(['Verification']);
// }else{
//   SwalAlert.errorAlert('', "Code doesnot matched");
// }

//  }


  
            
  }
}
