import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { SubcategoryService } from '../../Services/subcategory.service';

import { SwalAlert } from 'src/app/Shared/swalAlerts';

@Component({
  selector: 'app-sub-category-listing',
  templateUrl: './sub-category-listing.component.html',
  styleUrls: ['./sub-category-listing.component.css']
})
export class SubCategoryListingComponent implements OnInit {
  constructor(private SubcategoryService: SubcategoryService, private router: Router, private currentActivatedRoute: ActivatedRoute) { }


  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  initialSelection = [];
  allowMultiSelect = true;
  selection = new SelectionModel<any>(this.allowMultiSelect, this.initialSelection);

  table_headers: any = [];
  data: any = [];
  storeData={};

  staff: any;
  loaded: boolean = false;

  staff_ids: any = [];

  ngOnInit() {
    this.table_headers = [ 'Name', 'actions'];
    this.getStaffList();
  }

  getStaffList() {
    const staff = this.SubcategoryService.getStores();
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

  getJobId(store_id, action) {
    this.storeData['model']='SubCategory';
    this.storeData['_id']=store_id
    console.log('job id', store_id);
    // if (action == 'edit')
    
    //   this.router.navigate(['/jeptag/stores/edit', store_id]);
    // else {
      this.deleteStoreById(this.storeData);
   // }
  }

  async deleteStoreById(data) {
    const response = await SwalAlert.getDeleteSwal();
    if (response == true) {
      this.loaded = false;
      this.SubcategoryService.deleteById(data).subscribe(
        result => {
          if (!result['error']) {
            SwalAlert.sucessAlert('', 'SubCategory Deleted Successfully!');
            this.getStaffList();
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


  navigateToStoreAdd() {
    this.router.navigate(['add'], { relativeTo: this.currentActivatedRoute });
  }

  navigateToStaffListing() {
    this.router.navigate(['jeptag/stores'])
  }

  getIdsFromSelectionArrayObject(array_of_objects) {
    let ids = array_of_objects.map(a => a.id);
    return ids;
  }

}


