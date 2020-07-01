import { AuthService } from './../../../Services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators } from '@angular/forms';
import { tags } from '../tag';
import { FieldConfig } from '../../../Interfaces/feildConfig';
import { TagsService } from '../../Services/tags.service';
import { SwalAlert } from '../../../Shared/swalAlerts';
import { validation_patterns } from '../../../Shared/validation_patterns';


@Component({
  selector: 'app-add-tag',
  templateUrl: './add-tag.component.html',
  styleUrls: ['./add-tag.component.css']
})
export class AddTagComponent implements OnInit {

  form = {};
  fields: FieldConfig[] = [] as FieldConfig[];
  submit_clicked: boolean;
  clear_form: boolean;
  userData={};
  loaded = false;
  edit: boolean = false;
  tags:tags;
  constructor(private TagsService: TagsService,
    private active_route: ActivatedRoute, private router: Router,private AuthService:AuthService) { }

  ngOnInit() {


    this.form['form_fields'] = this.fields;
    const store_id = this.active_route.snapshot.paramMap.get('id');

console.log("idddd "+this.active_route.snapshot.paramMap.get('id'))


//if (store_id != null) {
  this.edit = true;
  this.loaded = true;
  this.getTagById(store_id);
    // }
    // else {
    //   this.edit = false;
    //    this.loaded = true;
    //   this.generateForm();
    // }


    // this.form['form_fields'] = this.fields;
    // this.loaded = true;
    // this.generateForm();
  }



  getTagById(id) {
    console.log("tag id"+id)
    let tag = this.TagsService.getTagById(id);
    tag.subscribe(
      result => {
        console.log("INSIDE tag EDIT ")
        console.log('tag by id:', result);
        this.tags = result['result'];
        console.log('RESULT:', result);
        if (result!=null) {
          this.loaded = true;
          console.log("job data above generate form"+this.tags)
          this.generateForm(this.tags);
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

  generateForm(tags?: tags) {
  //  console.log("store"+store)
    this.fields = [
      { label: 'TagID', type: 'text', bootstrapGridClass: "col-lg-12", name: "TagID", validations: [Validators.required], required: true, value: tags ? tags.TagID : '' },
      // { label: 'JeptagID', type: 'text', bootstrapGridClass: "col-lg-12", name: "JeptagID", validations: [Validators.required], required: true, value: tags ? tags.JeptagID : '' },
      { label: 'TagType', type: 'text', bootstrapGridClass: "col-lg-12", name: "TagType", validations: [Validators.required], required: true, value: tags ? tags.TagType : '' },
      { label: 'SellerID', type: 'text', bootstrapGridClass: "col-lg-12", name: "SellerID", required: true, value: tags ? tags.SellerID : '' },
      { label: 'BusinessID', type: 'text', bootstrapGridClass: "col-lg-12", name: "BusinessID",  required: true, value: tags ? tags.BusinessID : '' },
      { label: 'ProductID', type: 'text', bootstrapGridClass: "col-lg-12", name: "ProductID",  required: true, value: tags ? tags.ProductID : '' }
     , { label: 'TagLat', type: 'text', bootstrapGridClass: "col-lg-12", name: "TagLat",  required: true, value: tags ? tags.TagLat : '' },
      { label: 'TagLong', type: 'text', bootstrapGridClass: "col-lg-12", name: "TagLong",  required: true, value: tags ? tags.TagLong : '' },
      { label: 'Counter', type: 'text', bootstrapGridClass: "col-lg-12", name: "counter",  required: true, value: tags ? tags.counter : '' }

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

   // this.userData=  this.AuthService.getUser();
   // console.log("user id :"+this.userData['id'])
     //data['seller_id']=this.userData['id'];
     data['model']='Tags';

   
    // if (data['image'] != undefined) {
    //   data['job_image'] = data['image'];
    //   delete data['image'];
    // }

    this.clear_form = false;
    this.submit_clicked = true;
    if (this.edit) {
      const id = this.active_route.snapshot.paramMap.get('id');
      this.editStore(data, id);
    }
    else {
      this.addStore(data);
    }
  

  }


  editStore(data, id) {
    data['model']='Tags'
    this.TagsService.editTag(data, id).subscribe(
      result => {
        this.submit_clicked = false;
        if (!result['error']) {
          SwalAlert.sucessAlert('', 'tags Updated Sucessfully!');
        }
        else {
          SwalAlert.errorAlert('', result['message'].charAt(0).toUpperCase() + result['message'].substring(1));
        }
      },
      err => {
        this.submit_clicked = false;
        console.log(err);
        SwalAlert.errorAlert('', 'Server Error');
      }
    );
  }

  addStore(data) {
    
    this.TagsService.addStore(data).subscribe(
      result => {
        this.submit_clicked = false;
        if (result['status']) {
          SwalAlert.sucessAlert('', 'tags Added Sucessfully!');
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
    this.router.navigate(['jeptag/tags'])
  }

}
