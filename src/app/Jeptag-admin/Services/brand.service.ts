import { Injectable } from '@angular/core';
import { HttpService } from '../../Services/http.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  constructor(private httpServices: HttpService) { }

  getStores() {
    return this.httpServices.post({'model':"brands"},'/api/common/get-data').pipe(
      catchError(err => of({ error: true, message: 'Server error', data: [] })));
  }

  addStore(data) {
    return this.httpServices.post(data, '/api/common/add-data').pipe(
      catchError(err => of({ error: true, message: 'Server error', data: [] })));

  }
  editStore(data,id){
    data['_id']=id;
    return this.httpServices.post(data,"/api/common/edit-data").pipe(
      catchError(err => of({error:true,message:'Server error',data:[]})));
  }
  getStoreById(id) {
    return this.httpServices.post({"_id":id,"model":"brands"},'/api/common/single').pipe(
      catchError(err => of({ error: true, message: 'Server error', data: [] })));
  }


  uploadStaffById(data, id) {
    return this.httpServices.patchFormData(data, 'user/details/' + id + "/").pipe(
      catchError(err => of({ error: true, message: 'Server error', data: [] })));
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


