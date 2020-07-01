import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators } from '@angular/forms';

import { Users } from '../user';
import { FieldConfig } from '../../../Interfaces/feildConfig';
import { UserService } from '../../Services/user.service';
import { SwalAlert } from '../../../Shared/swalAlerts';
import { experience, SalaryDisbursement, StaffType, JobShift } from '../../Options/staff';
import { validation_patterns } from '../../../Shared/validation_patterns';
import{validateDate}from '../../../Shared/Custom Validators/dateValidator'

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  form = {};
  fields: FieldConfig[] = [] as FieldConfig[];
  submit_clicked: boolean;
  clear_form: boolean;

  loaded = false;

  constructor(private StaffService: UserService,
    private active_route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.form['form_fields'] = this.fields;
    this.loaded = true;
    this.generateForm();
  }

  generateForm(staff?: Users) {
    this.fields = [
      { label: 'First Name', type: 'text', bootstrapGridClass: "col-lg-6", name: "first_name", validations: [Validators.required,Validators.pattern(validation_patterns.nameRegex),Validators.maxLength(25)], required: true, value: staff ? staff.first_name : '' },
      {
        label: 'Last Name', type: 'text', bootstrapGridClass: "col-lg-6", name: "last_name", validations: [Validators.required,Validators.pattern(validation_patterns.nameRegex),Validators.maxLength(25)], required: true, value: staff ? staff.last_name : ''
      },

      {
        label: 'Email', type: 'text', bootstrapGridClass: "col-lg-6", name: "email", validations: [Validators.required, Validators.pattern(validation_patterns.email_regex)], required: true, value: staff ? staff.email : ''
      },
      {
        label: 'Password', type: 'text', bootstrapGridClass: "col-lg-6", name: "password", validations: [Validators.required, Validators.pattern(validation_patterns.password_regex)], required: true, value: staff ? staff.password : ''
      },
       {
        label: 'Type', type: 'ngselect', bootstrapGridClass: "col-lg-12", name: "type", validations: [Validators.required], required: true,
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
    console.log(data);
    data['is_epos'] = true;
    // data['branch_id'] = 1;
   // data['email'] = data.email;

    // if (data['image'] != undefined) {
    //   data['user_image'] = data['image'];
    //   delete data['image'];
    // }

    this.clear_form = false;
    this.submit_clicked = true;
    this.addStaff(data);

  }

  addStaff(data) {
    this.StaffService.addStaff(data).subscribe(
      result => {
        this.submit_clicked = false;
        if (result['status']) {
          SwalAlert.sucessAlert('', 'User Added Sucessfully!');
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



  navigateToProductListing() {
    this.router.navigate(['jeptag/user'])
  }

}
