import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators } from '@angular/forms';
import { Users } from '../user';
import { FieldConfig } from '../../../Interfaces/feildConfig';
import { UserService } from '../../Services/user.service';
import { SwalAlert } from '../../../Shared/swalAlerts';
import { experience, SalaryDisbursement, StaffType, countries } from '../../Options/staff';
import{validateDate}from '../../../Shared/Custom Validators/dateValidator'

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})

export class EditUserComponent implements OnInit {
  form = {};
  fields: FieldConfig[] = [] as FieldConfig[];
  submit_clicked: boolean;
  clear_form: boolean;
  loaded = false;
  constructor(private StaffService: UserService,
    private active_route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.form['form_fields'] = this.fields;
    this.getStaffById(this.active_route.snapshot.paramMap.get('id'));
  }

  getStaffById(id) {
    let staff = this.StaffService.getStaffById(id);
    staff.subscribe(
      result => {
       
        console.log('Staff by id:', result);
        if (result!=null) {
          this.generateForm( result['result']);
        }
        else {
          SwalAlert.errorAlert('', "Server error");
        }
        this.loaded = true;
      },
      err => {
        this.loaded = true;
        console.log(err);
        SwalAlert.errorAlert('', 'Server Error');
      }
    );
  }

  generateForm(staff?: Users) {
    
    this.fields = [
      { label: 'First Name', type: 'text', bootstrapGridClass: "col-lg-6", name: "first_name", validations: [Validators.required], required: true, value: staff ? staff.first_name : '' },
      {
        label: 'Last Name', type: 'text', bootstrapGridClass: "col-lg-6", name: "last_name", validations: [Validators.required], required: true, value: staff ? staff.last_name : ''
      },
      {
        label: 'Company Name', type: 'text', bootstrapGridClass: "col-lg-6", name: "company_name", validations: [Validators.required], required: true, value: staff ? staff.company_name : ''
      },
      {
        label: 'Address', type: 'text', bootstrapGridClass: "col-lg-6", name: "Address", validations: [Validators.required], required: true, value: staff ? staff.Address : ''
      },
      {
        label: 'City', type: 'text', bootstrapGridClass: "col-lg-6", name: "City", validations: [Validators.required], required: true, value: staff ? staff.City : ''
      },
      {
        label: 'Region', type: 'text', bootstrapGridClass: "col-lg-6", name: "Region", validations: [Validators.required], required: true, value: staff ? staff.Region : ''
      },
      {
        label: 'Country', type: 'select', bootstrapGridClass: "col-lg-6", name: "Country", validations: [Validators.required], required: true, value: staff ? staff.Country : '', options: countries
      },
      {
        label: 'Postscode', type: 'number', bootstrapGridClass: "col-lg-6", name: "Postscode", validations: [Validators.required], required: true, value: staff ? staff.Postscode : ''
      },
      {
        label: 'Phone', type: 'number', bootstrapGridClass: "col-lg-6", name: "Phone", validations: [Validators.required], required: true, value: staff ? staff.Phone : ''
      },
      {
        label: 'Fax', type: 'number', bootstrapGridClass: "col-lg-6", name: "Fax", validations: [Validators.required], required: true, value: staff ? staff.Fax : ''
      },
      {
        label: 'GEOLat', type: 'number', bootstrapGridClass: "col-lg-6", name: "GEOLat", validations: [Validators.required], required: true, value: staff ? staff.GEOLat : ''
      },
      {
        label: 'GEOLong', type: 'number', bootstrapGridClass: "col-lg-6", name: "GEOLong", validations: [Validators.required], required: true, value: staff ? staff.GEOLong : ''
      },
     {label: 'Type', type: 'ngselect', bootstrapGridClass: "col-lg-12", name: "type", validations: [Validators.required], required: true,
        value: staff ? staff.roles : '', options: StaffType
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
    this.form['submit'] = 'Save';
  }

  getStaffData(data) {

    this.submit_clicked = true;

    data['is_epos'] = true;
   // data['branch_id'] = 1;

   
    //data['username']=data.email;
    // data['modified_by_id'] = 2;
    // data['created_by_id'] = 2;
    const staff_id = this.active_route.snapshot.paramMap.get('id');
    this.editStaff(data, staff_id);



  }

  editStaff(data, id) {
    console.log("id in staff to edit"+ id);
    this.StaffService.uploadStaffById(data, id).subscribe(
      result => {
        this.submit_clicked = false;
        if (!result['error']) {
          SwalAlert.sucessAlert('', 'Staff Updated Sucessfully!');
        }
        else {
          SwalAlert.errorAlert('', result['message'].charAt(0).toUpperCase() + result['message'].substring(1));

        }
        console.log(result);

      },
      err => {
        this.submit_clicked = false;
        console.log(err);
        SwalAlert.errorAlert('', 'Server Error');
      }
    );

  }


  navigateToProductListing() {
    this.router.navigate(['/jeptag/user'])
  }

}
