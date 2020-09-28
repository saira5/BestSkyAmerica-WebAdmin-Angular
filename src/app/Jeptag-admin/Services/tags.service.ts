import { Injectable } from '@angular/core';
import { HttpService } from '../../Services/http.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  constructor(private httpServices: HttpService) { }

  gettags() {
    return this.httpServices.post({'model':"Tags"},'/api/common/get-data').pipe(
      catchError(err => of({ error: true, message: 'Server error', data: [] })));
  }

  getPaginationtags(offset) {
    return this.httpServices.post({'offset':offset},'/api/common/pagination-tag-call').pipe(
      catchError(err => of({ error: true, message: 'Server error', data: [] })));
  }

  getTagsByID(id) {
    return this.httpServices.post({"condition":id,'model':"Tags"},'/api/common/getstorelistByID').pipe(
      catchError(err => of({ error: true, message: 'Server error', data: [] })));
  }

  addCsvTags(file) {
    return this.httpServices.postFormData({"tagFile":file},'/api/common/csvTags').pipe(
      catchError(err => of({ error: true, message: 'Server error', data: [] })));
  }

  addStore(data) {
    return this.httpServices.post(data, '/api/common/add-data').pipe(
      catchError(err => of({ error: true, message: 'Server error', data: [] })));
  }
  editTag(data,id){
    data['_id']=id;
    return this.httpServices.post(data,"/api/common/edit-data").pipe(
      catchError(err => of({error:true,message:'Server error',data:[]})));
  }
  getTagById(id) {
    return this.httpServices.post({"_id":id,"model":"Tags"},'/api/common/single').pipe(
      catchError(err => of({ error: true, message: 'Server error', data: [] })));
  }
  searchTagsById(id) {
    return this.httpServices.post({"TagID":id,"model":"Tags"},'/api/common/getSearchTags').pipe(
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


