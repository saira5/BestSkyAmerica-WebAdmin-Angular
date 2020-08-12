import { Injectable } from '@angular/core';
import { HttpService } from '../../Services/http.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgetPasswordService {

   code : any;
  constructor(private httpServices: HttpService) { }

  getCode(){
    return this.code;
  }
  verifyEmail(username) {
    
    return this.httpServices.post({'username':username},'/api/user/forgetpassAdmin').pipe(
      catchError(err => of({ error: true, message: 'Server error', data: [] })));
  }

  changePassword(username,newPassword) {
    return this.httpServices.post({'username':username,'newPassword':newPassword},'/api/user/resetforgetpass').pipe(
      catchError(err => of({ error: true, message: 'Server error', data: [] })));
  }
}
