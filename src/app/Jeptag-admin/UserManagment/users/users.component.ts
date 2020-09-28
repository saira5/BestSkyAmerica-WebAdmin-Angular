import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

import { UserService } from '../../Services/user.service'
import { SwalAlert } from 'src/app/Shared/swalAlerts';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private staffService: UserService, private router: Router, private currentActivatedRoute: ActivatedRoute) { }


  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  initialSelection = [];
  allowMultiSelect = true;
  selection = new SelectionModel<any>(this.allowMultiSelect, this.initialSelection);

  table_headers: any = [];
  data: any = [];
  Userdata={}
  staff: any;
  loaded: boolean = false;

  staff_ids: any = [];

  ngOnInit() {
    this.table_headers = [ 'name', 'roles', 'Email',  'actions'];
    this.getStaffList();
  }

  getStaffList() {
    const staff = this.staffService.getStaff();
    staff.subscribe(
      result => {
        console.log('user list:', result);
        if (result!=null) {
          this.staff = result;
          this.dataSource.data = this.staff;
          this.dataSource.connect().next(this.staff);
          this.dataSource.paginator = this.paginator;
        }
        else {
          SwalAlert.errorAlert('', "error");
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

  getUserId(user_id, action) {
    this.Userdata['model']='users';
    this.Userdata['_id']=user_id
    console.log('staff id', user_id);
    if (action == 'edit')
      this.router.navigate(['/jeptag/user/edit', user_id]);
     else if (action == 'stores')
      this.router.navigate(['/jeptag/user/stores', user_id]);
    else {
      this.deleteUserById(this.Userdata);
    }
  }
  getUserStoreId(user_id,company_Name,email) {
    this.Userdata['model']='users';
    this.Userdata['_id']=user_id
    console.log('staff id', user_id);
   
      this.router.navigate(['/jeptag/user/stores', user_id,company_Name,email]);
   
  }
  async deleteUserById(Userdata) {
    const response = await SwalAlert.getDeleteSwal();
    if (response == true) {
      this.loaded = false;
      this.staffService.deleteById(Userdata).subscribe(
        result => {
          if (!result['error']) {
            SwalAlert.sucessAlert('', 'Deleted Successfully!');
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

  async deleteMultipleStaff() {
    if (this.staff_ids.length > 0) {
      const response = await SwalAlert.getDeleteSwal();
      if (response == true) {
        this.loaded = false;
        this.staffService.deleteMultipeStaff(this.staff_ids).subscribe(
          result => {
            if (!result['error']) {
              SwalAlert.sucessAlert('', 'Staff Deleted Successfully!');
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
  }

  navigateToStaffListing() {
    this.router.navigate(['instamunch/staff'])
  }

  getIdsFromSelectionArrayObject(array_of_objects) {
    let ids = array_of_objects.map(a => a.id);
    return ids;
  }

}
