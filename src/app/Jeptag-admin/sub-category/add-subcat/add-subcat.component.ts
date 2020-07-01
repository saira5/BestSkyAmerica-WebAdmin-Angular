import { AuthService } from './../../../Services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators } from '@angular/forms';
import { subCat } from '../subCat';
import { FieldConfig } from '../../../Interfaces/feildConfig';
import { SubcategoryService } from '../../Services/subcategory.service';
import { SwalAlert } from '../../../Shared/swalAlerts';
import { validation_patterns } from '../../../Shared/validation_patterns';
@Component({
  selector: 'app-add-subcat',
  templateUrl: './add-subcat.component.html',
  styleUrls: ['./add-subcat.component.css']
})
export class AddSubcatComponent implements OnInit {

  form = {};
  fields: FieldConfig[] = [] as FieldConfig[];
  submit_clicked: boolean;
  clear_form: boolean;
  userData={};
  loaded = false;
  edit: boolean = false;
  category:subCat;
  constructor(private SubcategoryService: SubcategoryService,
    private active_route: ActivatedRoute, private router: Router,private AuthService:AuthService) { }

  ngOnInit() {


    this.form['form_fields'] = this.fields;
    const store_id = this.active_route.snapshot.paramMap.get('id');

console.log("idddd "+this.active_route.snapshot.paramMap.get('id'))


if (store_id != null) {
  this.edit = true;
      this.loaded = true;

     

      this.getStoreById(store_id);
    }
    else {
      this.edit = false;
       this.loaded = true;
      this.generateForm();
    }


    // this.form['form_fields'] = this.fields;
    // this.loaded = true;
    // this.generateForm();
  }



  getStoreById(id) {
    console.log("store id"+id)
    let store = this.SubcategoryService.getStoreById(id);
    store.subscribe(
      result => {
        console.log("INSIDE store EDIT ")
        console.log('store by id:', result);
        this.category = result['result'];
        console.log('RESULT:', result);
        if (result!=null) {
          this.loaded = true;
          console.log("job data above generate form"+this.category)
          this.generateForm(this.category);
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

  generateForm(category?: subCat) {
  //  console.log("store"+store)
  let result = this.SubcategoryService.getCategories();
  result.subscribe((result) => {
    this.fields = [
      { label: 'Subategories Name', type: 'text', bootstrapGridClass: "col-lg-12", name: "Name", validations: [Validators.required], required: true, value: category ? category.Name : '' }
     , {
        label: 'Category Name', type: 'selectCAT', bootstrapGridClass: "col-lg-12", name: "CategoryId", validations: [Validators.required], required: true, value: category ? category.CategoryId : '', options: result
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
  });
  }


  getJobData(data) {
    console.log(data);
    //this.loggen_in_user = JSON.parse(localStorage.getItem('user'));

    this.userData=  this.AuthService.getUser();
    console.log("user id :"+this.userData['id'])
     data['seller_id']=this.userData['id'];
     data['model']='SubCategory';

   
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
      this.addSubcategory(data);
    }
  

  }


  editStore(data, id) {
    data['model']='SubCategory'
    this.SubcategoryService.editStore(data, id).subscribe(
      result => {
        this.submit_clicked = false;
        if (!result['error']) {
          SwalAlert.sucessAlert('', 'Category Updated Sucessfully!');
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

  addSubcategory(data) {
    
    this.SubcategoryService.addSubcategory(data).subscribe(
      result => {
        this.submit_clicked = false;
        if (result['status']) {
          SwalAlert.sucessAlert('', 'Category Added Sucessfully!');
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
    this.router.navigate(['jeptag/subcategories'])
  }

}

