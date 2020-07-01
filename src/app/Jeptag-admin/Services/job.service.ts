import { Injectable } from '@angular/core';
import { HttpService } from '../../Services/http.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private httpServices: HttpService) { }

  getJobs() {
    return this.httpServices.post({'model':"products"},'/api/common/get-data').pipe(
      catchError(err => of({ error: true, message: 'Server error', data: [] })));
  }

  addJob(data) {
    return this.httpServices.post(data, 'job/').pipe(
      catchError(err => of({ error: true, message: 'Server error', data: [] })));

  }
  editJob(data,id){
    return this.httpServices.patchFormDataWithoutActiveStatus(data,'job/details/'+ id + "/").pipe(
      catchError(err => of({error:true,message:'Server error',data:[]})));
  }
  getJobById(id) {
    return this.httpServices.get('job/details/' + id + "/").pipe(
      catchError(err => of({ error: true, message: 'Server error', data: [] })));
  }


  uploadStaffById(data, id) {
    return this.httpServices.patchFormData(data, 'user/details/' + id + "/").pipe(
      catchError(err => of({ error: true, message: 'Server error', data: [] })));
  }

  deleteById(id) {
    return this.httpServices.deletepatch({"status":"deleted"},'job/details/' + id + "/").pipe(
      catchError(err => of({ error: true, message: 'Server error', data: [] })));
  }

  deleteMultipeStaff(ids: []){
    return this.httpServices.postWithoutStatus({user_ids:ids},'user/delete/').pipe(
      catchError(err => of({ error: true, message: 'Server error', data: [],httpError: err })));
  }
}

