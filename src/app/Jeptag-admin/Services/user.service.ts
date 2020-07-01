import { Injectable } from '@angular/core';
import { HttpService } from '../../Services/http.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpServices: HttpService) { }

  getStaff() {
    return this.httpServices.post({'model':"users"},'/api/common/get-data').pipe(
      catchError(err => of({ error: true, message: 'Server error', data: [] })));
  }

  addStaff(data) {
    return this.httpServices.post(data, '/api/user/registerUser').pipe(
      catchError(err => of({ error: true, message: 'Server error', data: [] })));

  }

  getStaffById(id) {
    return this.httpServices.post({"_id":id,"model":"users"},'/api/common/single').pipe(
      catchError(err => of({ error: true, message: 'Server error', data: [] })));
 
  }


  uploadStaffById(data, id) {
    data['_id']=id;
    data['model']="users";
    return this.httpServices.post(data,"/api/common/edit-data").pipe(
      catchError(err => of({error:true,message:'Server error',data:[]})));
  }

  deleteById(data) {
    return this.httpServices.post(data,'/api/common/delete').pipe(
      catchError(err => of({ error: true, message: 'Server error', data: [] })));
  }

  deleteMultipeStaff(ids: []){
    return this.httpServices.postWithoutStatus({user_ids:ids},'user/delete/').pipe(
      catchError(err => of({ error: true, message: 'Server error', data: [],httpError: err })));
  }
}

