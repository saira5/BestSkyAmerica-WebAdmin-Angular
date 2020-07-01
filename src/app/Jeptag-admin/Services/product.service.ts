import { Injectable } from '@angular/core';
import { HttpService } from '../../Services/http.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpServices: HttpService) { }

  getBrands() {
    return this.httpServices.post({'model':"brands"},'/api/common/get-data').pipe(
      catchError(err => of({ error: true, message: 'Server error', data: [] })));
  }
  getSubCategory() {
    return this.httpServices.post({'model':"SubCategory"},'/api/common/get-data').pipe(
      catchError(err => of({ error: true, message: 'Server error', data: [] })));
  }
  getProductsByID(id) {
    return this.httpServices.post({"condition":id,'model':"products"},'/api/common/getProductslistByIDWeb').pipe(
      catchError(err => of({ error: true, message: 'Server error', data: [] })));
  }
  getCategories() {
    return this.httpServices.post({'model':"categories"},'/api/common/get-data').pipe(
      catchError(err => of({ error: true, message: 'Server error', data: [] })));
  }

  getJobs() {
    return this.httpServices.post({'model':"products"},'/api/common/get-data').pipe(
      catchError(err => of({ error: true, message: 'Server error', data: [] })));
  }

  addProduct(data) {
    return this.httpServices.post(data, '/api/common/add-data').pipe(
      catchError(err => of({ error: true, message: 'Server error', data: [] })));

  }
  editProduct(data,id){
    data['model']="products"

    data['_id']=id;
    return this.httpServices.post(data,"/api/common/edit-data").pipe(
      catchError(err => of({error:true,message:'Server error',data:[]})));
  }
  getProuctById(id) {
    return this.httpServices.post({"_id":id,"model":"products"},'/api/common/single').pipe(
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


