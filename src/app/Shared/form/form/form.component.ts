import { ProductService } from './../../../Jeptag-admin/Services/product.service';
import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { FieldConfig } from "../../../Interfaces/feildConfig";
import { FormBuilder, FormGroup, FormArray, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { NgSelectModule, NgOption } from '@ng-select/ng-select';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {  ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material';


declare var $: any;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  Catid :string ;
  @ViewChild('attachments') attachment: any;

  @Input() form: any;
  @Output() formValues = new EventEmitter();
  @Output() sendform: FormGroup;
  fields: FieldConfig[] = [] as FieldConfig[];

  @Input() submit_clicked: boolean;
  @Input() edit_clicked: boolean;
  @Input() clear_form: boolean;
  @Input() option: []
  @Input() category: []
  @Input() subcategory: []
  Form: FormGroup;
  displayValidationsErrors = false;
  map_values: any = {};
  form_values: any = {};
  image_value: any = {};
  timeout;
  subCategories: any = [];
  categories: any = [];
 
  row: any = [];

  @ViewChild('f') FormGroupDirective: FormGroupDirective;

  constructor(private productService: ProductService,private fb: FormBuilder) { }

  ngOnInit() {
  this.subCategories=this.option;
    this.fields = this.form['form_fields'];
    this.Form = this.fb.group({});
    this.addControls();
    console.log("mainnnnnn:",this.option)
    let subCategory = this.productService.getSubCategory();

    //let categories = this.productService.getCategories();
    subCategory.subscribe((result) => {
    this.subCategories=result;
    });
    //this.mainCategory=
  }

  ngOnDestroy() {
    clearTimeout(this.timeout);
  }

  ngOnChanges(changes: SimpleChanges) {
   
    if (changes['form']) {
      this.timeout = setInterval(() => {
        if (this.form['form_fields'].length > 0) {
          var form = this.form;
          this.form = form;
          this.fields = this.form['form_fields'];
         
          this.addControls();
          clearTimeout(this.timeout);
        }
      }, 100);
    }

    if (changes['clear_form']) {
      if (changes['clear_form'].currentValue == true) {
        this.FormGroupDirective.resetForm();
        this.displayValidationsErrors = false;
        if ((<HTMLImageElement>document.getElementById("img")) != null) {
          (<HTMLImageElement>document.getElementById("img")).src = '../../../../assets/images/no_image.png';
          delete this.form_values['image'];
          this.image_value = {};
        }
      }

      // setTimeout(function () {
      //   $('.selectpicker').selectpicker('refresh');
      // }, 200);
    }

  }



  addControls() {
    this.row = [];
    var count = 0;
    var array = [];
    for (var i = 0; i < this.fields.length; i++) {
      if (this.fields[i].name != undefined) {
        var bootstrapGridClass = parseInt(this.fields[i].bootstrapGridClass.split('-')[2]);
        count = count + bootstrapGridClass;
        if (count % 12 == 0) {
          array.push(i);
          this.row.push(array);
          array = [];
        }
        else {
          array.push(i);
        }
        if (this.fields[i].value != undefined) {
            console.log("this.fields[i].name"+this.fields[i].name)

          // if (this.fields[i].name=="category_id") {
          //   console.log("this.fields[i].name"+this.fields[i].name)
          //   this.Form.addControl(this.fields[i].name, new FormControl(this.fields[i].value['name'], this.fields[i].validations));
  
          // }
          // else{
            this.Form.addControl(this.fields[i].name, new FormControl(this.fields[i].value, this.fields[i].validations));

         // }
        }
       
        else
          this.Form.addControl(this.fields[i].name, new FormControl('', this.fields[i].validations));
      }
      if (this.fields[i].type == 'submit') {
        array.push(i);
        this.row.push(array);
      }
    }

    if (this.form['attribute']) {
      this.Form.addControl('product_attributes', this.fb.array([
        this.fb.group({
          name: '',
          value: ''
        }),

      ]));
    }

    // console.log(this.Form);
    // setTimeout(function () {
    //   $('ng-select > div:first-child').addClass('form-control');
    // }, 10);
  }

  addAttribute() {
    var arr = this.Form.get('product_attributes');
    const attribute = this.fb.group({
      name: '',
      value: ''
    });
    (arr as FormArray).push(attribute);
  }

  minusAttribute() {
    var arr = this.Form.get('product_attributes');
    (arr as FormArray).removeAt(0);
  }

  submit() {

    this.form_values = { ...this.Form.value, ...this.map_values, ...this.image_value };
    console.log(this.form_values);
    if (this.Form.valid) {
      Object.keys(this.form_values).forEach(function (key) {
        if (this.form_values[key] == null)
          this.form_values[key] = "";
        if (key == "space") {
          delete this.form_values[key];
        }
      }.bind(this));
      this.formValues.emit(this.form_values);
    }
    else {
      console.log('form is not valid');
    }
  }

  onImageChanged(event) {
    var selectedFile: File;
    selectedFile = event.target.files[0];
    this.image_value['image'] = selectedFile;
    this.readImageURL(event.target);
  }

  readImageURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $('#img').attr('src', e.target['result']);
      }
      reader.readAsDataURL(input.files[0]);
    }
  }


  displayValidations() {
    if (this.Form.valid == false) {
      this.displayValidationsErrors = true;
    }
  }

  chooseImage() {
    document.getElementById("fileInput").click();
  }
  filterSubById() {
  //  console.log(" subcats",this.subCategories);
 
     
    return this.subCategories.filter(item => item.CategoryId === this.Catid);

   //  console.log("id of subcat"+id);
   //  return this.subCategories.filter(item => item.CategoryId === id);



  //  return this.Catid;
}

getSub(id) {
  //  console.log(" subcats",this.subCategories);
 if (this.Catid!=null){
   id=this.Catid
 }
     
    return this.subCategories.filter(item => item.CategoryId === id);

   //  console.log("id of subcat"+id);
   //  return this.subCategories.filter(item => item.CategoryId === id);



  //  return this.Catid;
}
selected(id){
  console.log(" pressss cat id "+id)
 
}

Categorymethod(e){
  this.Catid=e.target.value;
console.log("hello "+e.target.value)
}
}
