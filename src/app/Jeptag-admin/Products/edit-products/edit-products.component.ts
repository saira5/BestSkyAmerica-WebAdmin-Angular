import { product } from './../product';
import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators } from '@angular/forms';
import { of, forkJoin } from 'rxjs';
import { FieldConfig } from '../../../Interfaces/feildConfig';
import { ProductService } from '../../Services/product.service';
//import { CategoryService } from '../../Services/category.service';
import { SwalAlert } from '../../../Shared/swalAlerts';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

import { status,Approved } from '../../Options/product';
import { validation_patterns } from 'src/app/Shared/validation_patterns';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule  } from '@angular/core';
import { MatSelectModule } from '@angular/material';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.css']
})
export class EditProductsComponent implements OnInit {
  images= [];
  imagesDisplay= [];

  imagesArray : File[]= [];
  selectedFile: File[]
  @ViewChild('attachments') attachment: any;
//sanitizer:DomSanitizer;
  form = {};
  fields: FieldConfig[] = [] as FieldConfig[];
  submit_clicked: boolean;
  clear_form: boolean;
  product:product
  loaded = false;
  edit: boolean = false;
  p: any={}
  convertImage:string;
  constructor(private productService: ProductService,private sanitizer:DomSanitizer,
    private active_route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.form['form_fields'] = this.fields;
    const product_id = this.active_route.snapshot.paramMap.get('id');

    if (product_id != null) {
      this.edit = true;
      this.loaded = true;
      this.getProductDataById(product_id);
    }
    else {
      this.edit = false;
      this.loaded = true;
      console.log("add generate form")
      this.generateForm();
    }
  }

  generateForm(product?: product) {
    console.log("category id :"+product.category_id + "  "+product.category)
    let categories = this.productService.getCategories();
    let brands = this.productService.getBrands();
    let subCategory = this.productService.getSubCategory();

    const result = forkJoin(categories, brands,subCategory);

    result.subscribe((result) => {
      console.log(result);
      this.fields = [
        { label: 'Product Name', type: 'text', bootstrapGridClass: "col-lg-6", name: "name", validations: [Validators.required,Validators.maxLength(50)], required: true, value: product ? product.name : '' }       
        , {
          label: 'Status', type: 'select', bootstrapGridClass: "col-lg-6", name: "status", validations: [Validators.required], required: true,
          value: product ? product.status : 'online', options: status
         },
         {
          label: 'Approved', type: 'select', bootstrapGridClass: "col-lg-6", name: "approved", validations: [Validators.required], required: true,
          value: product ? product.approved : 'active', options: Approved
         },
        { label: 'Website', type: 'text', bootstrapGridClass: "col-lg-6", name: "product_url", validations: [Validators.required], required: true, value: product ? product.product_url : '' },
        { label: 'longitude', type: 'number', bootstrapGridClass: "col-lg-6", name: "longitude", required: true, value: product ? product.longitude : '' },
        { label: 'latitude', type: 'number', bootstrapGridClass: "col-lg-6", name: "latitude", required: true, value: product ? product.latitude : '' },

        {
          label: 'weight', type: 'number', bootstrapGridClass: "col-lg-6", name: "weight", validations: [Validators.required,Validators.pattern(validation_patterns.postive_numbers)], required: true, value: product ? product.weight : ''
        },
        {
          label: 'price', type: 'number', bootstrapGridClass: "col-lg-6", name: "price", validations: [Validators.required,Validators.pattern(validation_patterns.postive_numbers)], required: true, value: product ? product.price : ''
        },
        {
          label: 'Quantity', type: 'number', bootstrapGridClass: "col-lg-6", name: "alert_quantity", validations: [Validators.required,Validators.pattern(validation_patterns.postive_numbers)], required: true, value: product ? product.alert_quantity : ''
        },
        {
          label: 'Category', type: 'ngselectcat', bootstrapGridClass: "col-lg-6", name: "category_id",validations: [Validators.required],required: true, value: product ? product.category_id : '', options: result[0]
        }
        ,{
          label: 'SubCategory', type: 'ngselectSub2', bootstrapGridClass: "col-lg-6", name: "category", required: true,value: product ? product.category : '', options: product.category_id
        }
       , {
          label: 'Brands', type: 'ngselect2', bootstrapGridClass: "col-lg-6", name: "brand_id", validations: [Validators.required], required: true, value: product ? product.brand_id : '', options: result[1]
        }
        , {
          label: 'Description', type: 'textarea', bootstrapGridClass: "col-lg-12", name: "description", validations: [Validators.required], required: true, value: product ? product.description : ''
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
            });
         
            this.images=product.image;
            // this.imagesDisplay=product.image;
            // for (var i =0 ;i<this.imagesDisplay.length;i++){
            //   if(!this.imagesDisplay[i].includes("data:image/png;base64,")){
            //     this.imagesDisplay[i]= 'data:image/jpeg;base64,' + this.imagesDisplay[i];

            //   }
            // }
            
            // for (var i =0 ;i<this.imagesDisplay.length;i++){
             
            //   if(!this.imagesDisplay[i].includes("data:image/png;base64,"))

            //   this.imagesDisplay[i]=this.sanitizer.bypassSecurityTrustResourceUrl("data:image/png;base64,"+this.imagesDisplay[i]);
            // }

            // for (var i =0 ;i<this.images.length;i++){
             
            //    if(!this.images[i].includes("data:image/png;base64,"))
 
            //    this.images[i]=this.sanitizer.bypassSecurityTrustResourceUrl("data:image/png;base64,"+this.images[i]);
            //  }

            console.log("save clicked")
  }




  getProductDataById(id) {

    let product = this.productService.getProuctById(id);
    product.subscribe(
      result => {
        this.product=result['result'];
        console.log('product by id:', result);
        if (result!=null) {
          this.generateForm(this.product);
        }
        else {
          this.loaded = true;
          SwalAlert.errorAlert('', "Can not get the product");
        }

      },
      err => {
        console.log(err);
        this.loaded = true;
      }
    );
  }

  getproduct(data) {

    data['image']=this.images;
    data['model']="products"
    console.log("clickedddddd")
    this.clear_form = false;
    this.submit_clicked = true;
    console.log("dataaaaaaaa"+data);

    console.log("edit value"+this.edit);

    if (this.edit) {
      console.log("In edit method");

      const product_id = this.active_route.snapshot.paramMap.get('id');
      this.editProduct(data, product_id);
    }
    else {
      console.log("In aaded method");
      this.addProduct(data);
    }

  }

  editProduct(data, id) {

    // data['image']=this.images;
    data['model']="products"
    this.productService.editProduct(data, id).subscribe(
      result => {
        this.submit_clicked = false;
        if (result['status']) {
          SwalAlert.sucessAlert('', 'Product Updated Sucesssfully!')
        }
        else {
          SwalAlert.errorAlert('',"Unsucessful");
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

  addProduct(data) {
    console.log("clickedddddd add")
    this.productService.addProduct(data).subscribe(
      result => {
        this.submit_clicked = false;
        if (result['status']) {
        SwalAlert.sucessAlert('', 'Product Added Sucesssfully!')

          this.clear_form = true;
           this.images=[];
         this.attachment.nativeElement.value = '';

        }
        else {
          SwalAlert.errorAlert('', "Product not Added");
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

  FormatAttributesList(data) {
    let attributes_list = {};
    console.log(data);
    data.forEach(element => {
      console.log(element, element.value);
      element.value = element.value.split(',');
      element['is_selected'] = this.formatSelected(element.value.length);
    });
    attributes_list = data;
    return attributes_list;
    
  }

  formatSelected(length) {
    let is_selected = [];
    for (var i = 0; i < length; i++) {
      is_selected.push(false);
    }
    return is_selected;
  }

  navigateToProductListing() {
    this.router.navigate(['jeptag/products'])
  }
  onImageChanged(event) {
    console.log("inside the image method")
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      console.log("length"+event.target.files)

      // for (let i = 0; i < event.target.files[0].length; i++) {
      //   console.log("Image file indexes :"+event.target.files[0].get(i));
      // }
      for (let i = 0; i < filesAmount; i++) {
              var reader = new FileReader();
              if(event.target.files[0].type.indexOf('image')> -1){

              reader.onload = (event:any) => {
              // this.imagesDisplay.push(event.target.result);
              this.images.push(event.target.result); 
              }
              this.selectedFile=event.target.files[i]
      //        for (let i = 0; i <  this.selectedFile.size; i++) {
      //   console.log("Image file indexes :"+this.selectedFile.);
      // }
              console.log("this.selectedFile"+this.selectedFile)
//var strImage = event.target.result.replace(/^data:image\/[a-z]+;base64,/, "");
            //  this.imagesArray.push(event.target.files[0]); 
  // this.convertImage =event.target.result.toString();
  // var solution = this.convertImage.split("base64,")[1];
  // console.log("image base",solution);

              for (let i = 0; i < this.imagesArray.length; i++) {
                console.log("ccc",this.imagesArray[i]);
        
              }
              reader.readAsDataURL(event.target.files[i]);
            }
            else {
             SwalAlert.errorAlert('', "Please select Image only");

           }
      }
  }
  }
  removeSelectedFile(index) {

    // Delete the item from images url list
    this.images.splice(index, 1);
    // delete file from FileList
    this.imagesArray.splice(index, 1);
    this.attachment.nativeElement.value = '';
   }
}
