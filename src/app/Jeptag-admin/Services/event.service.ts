import { Injectable } from '@angular/core';
import { HttpService } from '../../Services/http.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private httpServices: HttpService) { }

  getEvents() {
    return this.httpServices.get('event/').pipe(
      catchError(err => of({ error: true, message: 'Server error', data: [] })));
  }

  addEvent(data) {
    return this.httpServices.postFormData(data, 'event/').pipe(
      catchError(err => of({ error: true, message: 'Server error', data: [] })));

  }
  editEvent(data,id){
    return this.httpServices.patchFormDataWithoutActiveStatus(data,'event/details/'+ id + "/").pipe(
      catchError(err => of({error:true,message:'Server error',data:[]})));
  }
  getEventById(id) {
    return this.httpServices.get('event/details/' + id + "/").pipe(
      catchError(err => of({ error: true, message: 'Server error', data: [] })));
  }


  uploadStaffById(data, id) {
    return this.httpServices.patchFormData(data, 'user/details/' + id + "/").pipe(
      catchError(err => of({ error: true, message: 'Server error', data: [] })));
  }

  deleteById(id) {
    return this.httpServices.deletepatch({"status":"deleted"},'event/details/' + id + "/").pipe(
      catchError(err => of({ error: true, message: 'Server error', data: [] })));
  }

  deleteMultipleEvent(ids: []){
    return this.httpServices.postWithoutStatus({user_ids:ids},'user/delete/').pipe(
      catchError(err => of({ error: true, message: 'Server error', data: [],httpError: err })));
  }
}


