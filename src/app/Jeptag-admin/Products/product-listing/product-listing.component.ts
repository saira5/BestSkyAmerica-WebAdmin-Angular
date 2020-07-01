import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { ProductService } from '../../Services/product.service'
import { SwalAlert } from 'src/app/Shared/swalAlerts';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {

  constructor(private ProductService: ProductService, private router: Router, private currentActivatedRoute: ActivatedRoute) { }


  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  initialSelection = [];
  allowMultiSelect = true;
  selection = new SelectionModel<any>(this.allowMultiSelect, this.initialSelection);

  table_headers: any = [];
  data: any = [];
  staff: any;
  loaded: boolean = false;
productData={}
  staff_ids: any = [];
  add:boolean=false;
  ngOnInit() {
    this.table_headers = [ 'name', 'status', 'alert_quantity', 'approved',  'actions'];
    const storeid = this.currentActivatedRoute.snapshot.paramMap.get('storeid');
    if (storeid != null) {
      this.add=false;
      this.getProductsListbyID(this.currentActivatedRoute.snapshot.paramMap.get('storeid'));
    }
    else{
      this.add=true;
      this.getProductList();
    }
    
  }

  getProductList() {
    const staff = this.ProductService.getJobs();
    staff.subscribe(
      result => {
        console.log('product list:', result);
        if (result!=null) {
          this.staff = result;
          this.dataSource.data = this.staff;
          this.dataSource.connect().next(this.staff);
          this.dataSource.paginator = this.paginator;
        }
        else {
         // SwalAlert.errorAlert('', result['message'].charAt(0).toUpperCase() + result['message'].substring(1));
         SwalAlert.errorAlert('', "Error");
        }
        this.loaded = true;
        this.selection.clear();
      },
      err => {
        this.loaded = true;
        console.error(err);
      }
    );
  }

  getProductsListbyID(id) {
    const staff = this.ProductService.getProductsByID(id);
    staff.subscribe(
      result => {
        console.log('product list:', result);
        if (result!=null) {
          this.staff = result;
          this.dataSource.data = this.staff;
          this.dataSource.connect().next(this.staff);
          this.dataSource.paginator = this.paginator;
        }
        else {
         // SwalAlert.errorAlert('', result['message'].charAt(0).toUpperCase() + result['message'].substring(1));
         SwalAlert.errorAlert('', "Error");
        }
        this.loaded = true;
        this.selection.clear();
      },
      err => {
        this.loaded = true;
        console.error(err);
      }
    );
  }

  getProductId(product_id, action) {
    
    this.productData['model']='products';
    this.productData['_id']=product_id
    console.log('job id', product_id);
    if (action == 'edit')
      this.router.navigate(['/jeptag/products/edit', product_id]);
    else {
      this.deleteStaffById(this.productData);
    }
  }

  async deleteStaffById(productData) {
    const response = await SwalAlert.getDeleteSwal();
    if (response == true) {
      this.loaded = false;
      this.ProductService.deleteById(productData).subscribe(
        result => {
          if (!result['error']) {
            SwalAlert.sucessAlert('', 'Product Deleted Successfully!');
            if (this.add) {
              this.getProductList();
            }
            else{
              this.getProductsListbyID(this.currentActivatedRoute.snapshot.paramMap.get('storeid'));

              
            }
          }
          else {
            this.loaded = true;
            SwalAlert.errorAlert('', result['message'].charAt(0).toUpperCase() + result['message'].substring(1));
          }
        },
        err => {
          this.loaded = true;
          console.error(err);
        }
      );
    }
  }

  async deleteMultipleStaff() {
    if (this.staff_ids.length > 0) {
      const response = await SwalAlert.getDeleteSwal();
      if (response == true) {
        this.loaded = false;
        this.ProductService.deleteMultipeStaff(this.staff_ids).subscribe(
          result => {
            if (!result['error']) {
              SwalAlert.sucessAlert('', 'Staff Deleted Successfully!');
              this.getProductList();
            }
            else {
              this.loaded = true;
              SwalAlert.errorAlert('', result['message'].charAt(0).toUpperCase() + result['message'].substring(1));
            }
          },
          err => {
            this.loaded = true;
            console.error(err);
          }
        )
      }
    }
    else {
      SwalAlert.errorAlert('', 'Please Select Staff to Delete!');
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected == numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
    this.staff_ids = this.getIdsFromSelectionArrayObject(this.selection.selected);
    // console.log(this.selection);
  }

  // $event ? selection.toggle(row) : null
  checkboxClicked(event, row) {
    if (event) {
      this.selection.toggle(row);
    }
    else
      null;

    this.staff_ids = this.getIdsFromSelectionArrayObject(this.selection.selected);
    // console.log(this.selection);
  }


  navigateToStaffAdd() {
    this.router.navigate(['add'], { relativeTo: this.currentActivatedRoute });

    this.router.navigate(['jeptag/stores/products/add', this.currentActivatedRoute.snapshot.paramMap.get('storeid'),this.currentActivatedRoute.snapshot.paramMap.get('userid')]);

  }

  navigateToStaffListing() {
    this.router.navigate(['instamunch/staff'])
  }

  getIdsFromSelectionArrayObject(array_of_objects) {
    let ids = array_of_objects.map(a => a.id);
    return ids;
  }

}

