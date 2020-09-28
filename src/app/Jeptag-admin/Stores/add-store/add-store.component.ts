import { countries } from './../../options/staff';
import { AuthService } from './../../../Services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators } from '@angular/forms';
import { Status } from '../../Options/product';

import { store } from '../store';
import { FieldConfig } from '../../../Interfaces/feildConfig';
import { StoreService } from '../../Services/store.service';
import { SwalAlert } from '../../../Shared/swalAlerts';
import { validation_patterns } from '../../../Shared/validation_patterns';
@Component({
  selector: 'app-add-store',
  templateUrl: './add-store.component.html',
  styleUrls: ['./add-store.component.css']
})
export class AddStoreComponent implements OnInit {
  form = {};
  fields: FieldConfig[] = [] as FieldConfig[];
  submit_clicked: boolean;
  clear_form: boolean;
  userData = {};
  loaded = false;
  edit: boolean = false;
  store: store;
  company_name: any;
  email:any;
  constructor(private StoreService: StoreService,
    private active_route: ActivatedRoute, private router: Router, private AuthService: AuthService) {

  }

  ngOnInit() {


    this.form['form_fields'] = this.fields;
    const store_id = this.active_route.snapshot.paramMap.get('id');
    this.company_name = this.active_route.snapshot.paramMap.get('cname');
    this.email = this.active_route.snapshot.paramMap.get('email');
    console.log("idddd " + this.active_route.snapshot.paramMap.get('id'))

    //console.log("word "+this.active_route.contains("ss"))


    // if (store_id != null) {
    //   this.edit = true;
    //       this.loaded = true;



    //       this.getStoreById(store_id);
    //     }
    //     else {
    this.edit = false;
    this.loaded = true;
    this.generateForm();
    // }


    // this.form['form_fields'] = this.fields;
    // this.loaded = true;
    // this.generateForm();
  }



  getStoreById(id) {
    console.log("store id" + id)
    let store = this.StoreService.getStoreById(id);
    store.subscribe(
      result => {
        console.log("INSIDE store EDIT ")
        console.log('store by id:', result);
        this.store = result['result'];
        console.log('RESULT:', result);
        if (result != null) {
          this.loaded = true;
          console.log("job data above generate form" + this.store)
          this.generateForm(this.store);
        }
        else {
          this.loaded = true;
          SwalAlert.errorAlert('', "Something went wrong! Please wait until we'll fix this issue");
        }

      },
      err => {
        console.log('Error while getting Job by id.', err);
        this.loaded = true;
        SwalAlert.errorAlert('', 'Server Error!');
      }
    );

  }

  generateForm(store?: store) {
    //  console.log("store"+store)
    this.fields = [
      { label: 'Name', type: 'text', bootstrapGridClass: "col-lg-6", name: "Name", validations: [Validators.required], required: true, value: store ? store.Name : '' },
      {
        label: 'Company Name', type: 'text', bootstrapGridClass: "col-lg-6", name: "CompanyId", validations: [Validators.required], required: true, value: this.company_name
      },
      {
        label: 'Store ID', type: 'text', bootstrapGridClass: "col-lg-6", name: "storeID", validations: [Validators.required], required: true, value:store ? store.storeID : ''
      },
      {
        label: 'Address', type: 'text', bootstrapGridClass: "col-lg-6", name: "Address", validations: [Validators.required], required: true, value: store ? store.Address : ''
      },
      {
        label: 'City', type: 'text', bootstrapGridClass: "col-lg-6", name: "City", validations: [Validators.required], required: true, value: store ? store.City : ''
      },

      {
        label: 'Region', type: 'text', bootstrapGridClass: "col-lg-6", name: "Region", validations: [Validators.required], required: true, value: store ? store.Region : ''
      },
      {
        label: 'Country', type: 'select', bootstrapGridClass: "col-lg-6", name: "Country", validations: [Validators.required], required: true, value: store ? store.Country : '', options: countries
      },
      {
        label: 'Postscode', type: 'number', bootstrapGridClass: "col-lg-6", name: "Postscode", validations: [Validators.required], required: true, value: store ? store.Postscode : ''
      },
      {
        label: 'Phone', type: 'number', bootstrapGridClass: "col-lg-6", name: "Phone", validations: [Validators.required], required: true, value: store ? store.Phone : ''
      },
      {
        label: 'Fax', type: 'number', bootstrapGridClass: "col-lg-6", name: "Fax", validations: [Validators.required], required: true, value: store ? store.Fax : ''
      },
      {
        label: 'GEOLat', type: 'number', bootstrapGridClass: "col-lg-6", name: "GEOLat", validations: [Validators.required], required: true, value: store ? store.GEOLat : ''
      },
      {
        label: 'GEOLong', type: 'number', bootstrapGridClass: "col-lg-6", name: "GEOLong", validations: [Validators.required], required: true, value: store ? store.GEOLong : ''
      },
      {
        label: 'Status', type: 'select', bootstrapGridClass: "col-lg-12", name: "status", validations: [Validators.required], required: true,
        value: store ? store.status : 'true', options: Status
      }

    ]
    this.form['form_fields'] = this.fields;
    this.form['FormbootstrapGridClass'] = 'col-lg-12';
    this.form['map'] = false;
    this.form['MapbootstrapGridClass'] = 'col-lg-4';
    this.form['image'] = false;
    this.form['ImagebootstrapGridClass'] = 'col-lg-3';
    this.form['img_height'] = "200px";
    this.form['img_width'] = "200px";
    //  this.form['image_url'] = job ? job.job_image : null;
    this.form['submit'] = 'Save';
  }


  getJobData(data) {
    console.log(data);
    //this.loggen_in_user = JSON.parse(localStorage.getItem('user'));

    //   this.userData=  this.AuthService.getUser();
    // console.log("user id :"+this.userData['id'])
    data['model'] = 'StoresDetail';


    // if (data['image'] != undefined) {
    //   data['job_image'] = data['image'];
    //   delete data['image'];
    // }

    this.clear_form = false;
    this.submit_clicked = true;
    // if (this.edit) {
    //   const id = this.active_route.snapshot.paramMap.get('id');
    //   this.editStore(data, id);
    // }
    // else {
    data['seller_id'] = this.active_route.snapshot.paramMap.get('id');

    this.addStore(data);
    //  }


  }


  // editStore(data, id) {
  //   data['model']='StoresDetail'
  //   this.StoreService.editStore(data, id).subscribe(
  //     result => {
  //       this.submit_clicked = false;
  //       if (!result['error']) {
  //         SwalAlert.sucessAlert('', 'Store Updated Sucessfully!');
  //       }
  //       else {
  //         SwalAlert.errorAlert('', result['message'].charAt(0).toUpperCase() + result['message'].substring(1));
  //       }
  //     },
  //     err => {
  //       this.submit_clicked = false;
  //       console.log(err);
  //       SwalAlert.errorAlert('', 'Server Error');
  //     }
  //   );
  // }

  addStore(data) {

    this.StoreService.addStore(data).subscribe(
      result => {
        this.submit_clicked = false;
        if (result['status']) {
          SwalAlert.sucessAlert('', 'Store Added Sucessfully!');
          this.clear_form = true;
        }
        else {
          SwalAlert.errorAlert('', result['message'].charAt(0).toUpperCase() + result['message'].substring(1));

        }
      },
      err => {
        this.submit_clicked = false;
        console.error(err);
        SwalAlert.errorAlert('', 'Server Error');
      }
    );
  }



  navigateToJobListing() {
    this.router.navigate(['/jeptag/user/stores', this.active_route.snapshot.paramMap.get('id'), this.company_name,this.email])
  }

}
