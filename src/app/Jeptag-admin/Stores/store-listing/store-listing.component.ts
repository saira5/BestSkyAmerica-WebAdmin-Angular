import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { StoreService } from '../../Services/store.service'
import { SwalAlert } from 'src/app/Shared/swalAlerts';


@Component({
  selector: 'app-store-listing',
  templateUrl: './store-listing.component.html',
  styleUrls: ['./store-listing.component.css']
})
export class StoreListingComponent implements OnInit {

  constructor(private StoreService: StoreService, private router: Router, private currentActivatedRoute: ActivatedRoute) { }


  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  initialSelection = [];
  allowMultiSelect = true;
  selection = new SelectionModel<any>(this.allowMultiSelect, this.initialSelection);

  table_headers: any = [];
  data: any = [];
  storeData={};
  add:boolean=false;
  staff: any;
  loaded: boolean = false;
  company_name:any;
  staff_ids: any = [];
  cname:any;
  email:any;


  ngOnInit() {
    this.table_headers = [ 'Name', 'status', 'City', 'Region','Country', 'Phone', 'actions'];
    const store_id = this.currentActivatedRoute.snapshot.paramMap.get('id');
    if (store_id != null) {
      this.add=false;
      this.getStaffListbyID(this.currentActivatedRoute.snapshot.paramMap.get('id'));
       this.cname=this.currentActivatedRoute.snapshot.paramMap.get('cname');
       this.email=this.currentActivatedRoute.snapshot.paramMap.get('email');
 
    }
    else{
      this.add=true;
      this.getStaffList();
    }
    
  }

  getStaffList() {
    const staff = this.StoreService.getStores();
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

  getStaffListbyID(id) {
    console.log("In store list by ID")
    const staff = this.StoreService.getStoresByID(id);
    staff.subscribe(
      result => {
        console.log('stores list:', result);
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
    this.storeData['model']='StoresDetail';
    this.storeData['_id']=store_id
    console.log('job id', store_id);
    if (action == 'edit')
    
      this.router.navigate(['/jeptag/stores/edit', store_id,this.currentActivatedRoute.snapshot.paramMap.get('id'),this.cname,this.email]);
      else if (action == 'products')
    
      this.router.navigate(['/jeptag/stores/products',store_id,this.currentActivatedRoute.snapshot.paramMap.get('id') ,this.email]);
    else {
      this.deleteStoreById(this.storeData);
    }
  }

  async deleteStoreById(data) {
    const response = await SwalAlert.getDeleteSwal();
    if (response == true) {
      this.loaded = false;
      this.StoreService.deleteById(data).subscribe(
        result => {
          if (!result['error']) {
            SwalAlert.sucessAlert('', 'Store Deleted Successfully!');
            if(this.add){
              this.getStaffList();
            }
            else{
              this.getStaffListbyID(this.currentActivatedRoute.snapshot.paramMap.get('id'));

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
        this.StoreService.deleteMultipeStaff(this.staff_ids).subscribe(
          result => {
            if (!result['error']) {
              SwalAlert.sucessAlert('', 'Staff Deleted Successfully!');
             if(this.add=true){
              this.getStaffList();
             }
             
              else{
                this.getStaffListbyID(this.currentActivatedRoute.snapshot.paramMap.get('id'));

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


  navigateToStoreAdd() {
 //   this.router.navigate(['add'], { relativeTo: this.currentActivatedRoute });
     this.router.navigate(['jeptag/user/stores/add',this.currentActivatedRoute.snapshot.paramMap.get('id'),this.cname, this.email]);

  }

  navigateToStaffListing() {
    this.router.navigate(['/jeptag/user/stores',this.currentActivatedRoute.snapshot.paramMap.get('id')])
  }

  getIdsFromSelectionArrayObject(array_of_objects) {
    let ids = array_of_objects.map(a => a.id);
    return ids;
  }

}


