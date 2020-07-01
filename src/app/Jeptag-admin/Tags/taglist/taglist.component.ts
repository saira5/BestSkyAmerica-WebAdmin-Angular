import { Component, OnInit, ViewChild } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { MatPaginator, MatTableDataSource, MatSort } from "@angular/material";
import { SelectionModel } from "@angular/cdk/collections";
import { TagsService } from "../../Services/tags.service";
import { SwalAlert } from "src/app/Shared/swalAlerts";
import { PageEvent } from "@angular/material";

@Component({
  selector: "app-taglist",
  templateUrl: "./taglist.component.html",
  styleUrls: ["./taglist.component.css"],
})
export class TaglistComponent implements OnInit {
  constructor(
    private TagsService: TagsService,
    private router: Router,
    private currentActivatedRoute: ActivatedRoute
  ) { }

  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  initialSelection = [];
  allowMultiSelect = true;
  selection = new SelectionModel<any>(
    this.allowMultiSelect,
    this.initialSelection
  );
  length: any;
  table_headers: any = [];
  data: any = [];
  tagsData = {};
  add: boolean = false;
  staff: any;
  loaded: boolean = false;
  pageEvent: PageEvent;
  datasource: null;
  pageIndex: number;
  pageSize: number;
  file: File;
  staff_ids: any = [];
  @ViewChild('attachments') attachment: any;
  ngOnInit() {
    // this.table_headers = [ 'TagID',  'JeptagID', 'TagType','SellerID','ProductID' ,'actions'];
    this.table_headers = [
      "TagID",
      "TagType",
      "SellerID",
      "ProductID",
      "actions",
    ];

    const store_id = this.currentActivatedRoute.snapshot.paramMap.get("id");
    if (store_id != null) {
      this.add = false;
      this.getStaffListbyID(
        this.currentActivatedRoute.snapshot.paramMap.get("id")
      );
    } else {
      this.add = true;
      this.getStaffList();
    }
  }

  getStaffList() {
    // const staff = this.TagsService.gettags();
    // staff.subscribe(
    //   result => {
    //     console.log('Tag list:', result);
    //     if (result!=null) {
    //       this.staff = result;
    //       this.dataSource.data = this.staff;
    //       this.dataSource.connect().next(this.staff);
    //       this.dataSource.paginator = this.paginator;
    //     }
    //     else {
    //      // SwalAlert.errorAlert('', result['message'].charAt(0).toUpperCase() + result['message'].substring(1));
    //      SwalAlert.errorAlert('', "Error");
    //     }
    //     this.loaded = true;
    //     this.selection.clear();
    //   },
    //   err => {
    //     this.loaded = true;
    //     console.error(err);
    //   }
    // );

    const staff = this.TagsService.getPaginationtags(0);
    staff.subscribe(
      (result) => {
        console.log("Tag list:", result);
        if (result != null) {
          console.log("result['posts']", result["posts"]);
          this.length = result["total"];
          this.staff = result["posts"];
          this.dataSource.data = this.staff;
          this.dataSource.connect().next(this.staff);
          this.dataSource.paginator = this.paginator;
        } else {
          // SwalAlert.errorAlert('', result['message'].charAt(0).toUpperCase() + result['message'].substring(1));
          SwalAlert.errorAlert("", "Error");
        }
        this.loaded = true;
        this.selection.clear();
      },
      (err) => {
        this.loaded = true;
        console.error(err);
      }
    );
  }

  ngAfterViewInit() {
    this.dataSource.connect().next(this.staff);
    this.dataSource.paginator = this.paginator;
  }
  getNext(event: PageEvent) {
    this.loaded = false;
    this.staff = null;
    var offset = event.pageSize * event.pageIndex;

    console.log(
      "pagination called " +
      "Page size" +
      event.pageSize +
      "Page Index" +
      event.pageIndex +
      "Ofset" +
      offset
    );

    const staff = this.TagsService.getPaginationtags(offset);
    staff.subscribe(
      (result) => {
        console.log("Tag list:", result);
        if (result != null) {
          console.log("result['posts']", result["posts"]);
          this.length = result["total"];
          console.log("this.length", result["total"]);
          this.staff = result["posts"];
          console.log("this.staff", this.staff);
          this.dataSource = new MatTableDataSource(result["posts"]);
          //   this.dataSource.data = result['posts'];
          //  this.dataSource.connect().next(this.staff);
          // this.dataSource.paginator = this.paginator;
        } else {
          // SwalAlert.errorAlert('', result['message'].charAt(0).toUpperCase() + result['message'].substring(1));
          SwalAlert.errorAlert("", "Error");
        }
        this.loaded = true;
        this.selection.clear();
      },
      (err) => {
        this.loaded = true;
        console.error(err);
      }
    );

    // call your api function here with the offset
  }

  getStaffListbyID(id) {
    console.log("In store list by ID");
    const staff = this.TagsService.getTagsByID(id);
    staff.subscribe(
      (result) => {
        console.log("stores list:", result);
        if (result != null) {
          this.staff = result;
          this.dataSource.data = this.staff;
          this.dataSource.connect().next(this.staff);
          this.dataSource.paginator = this.paginator;
        } else {
          // SwalAlert.errorAlert('', result['message'].charAt(0).toUpperCase() + result['message'].substring(1));
          SwalAlert.errorAlert("", "Error");
        }
        this.loaded = true;
        this.selection.clear();
      },
      (err) => {
        this.loaded = true;
        console.error(err);
      }
    );
  }

  getJobId(id, action) {
    this.tagsData["model"] = "Tags";
    this.tagsData["_id"] = id;
    console.log("tag id", id);
    if (action == "edit") this.router.navigate(["/jeptag/tags/edit", id]);
    // else if (action == 'products')
    // this.router.navigate(['/jeptag/stores/products',store_id,this.currentActivatedRoute.snapshot.paramMap.get('id') ]);
    else {
      this.deleteTagsById(this.tagsData);
    }
  }

  async deleteTagsById(data) {
    const response = await SwalAlert.getDeleteSwal();
    if (response == true) {
      this.loaded = false;
      this.TagsService.deleteById(data).subscribe(
        (result) => {
          if (!result["error"]) {
            SwalAlert.sucessAlert("", "Tag Deleted Successfully!");
            this.getStaffList();
          } else {
            this.loaded = true;
            SwalAlert.errorAlert(
              "",
              result["message"].charAt(0).toUpperCase() +
              result["message"].substring(1)
            );
          }
        },
        (err) => {
          this.loaded = true;
          console.error(err);
        }
      );
    }
  }

  // applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }

  applyFilter(filterValue: string) {
    const staff = this.TagsService.searchTagsById(filterValue.trim());
    staff.subscribe(
      (result) => {
        console.log("tags list:", result);
        if (result != null) {
          this.staff = result["data"];
          this.dataSource.data = this.staff;
          this.dataSource.connect().next(this.staff);
          this.dataSource.paginator = this.paginator;
        } else {
          // SwalAlert.errorAlert('', result['message'].charAt(0).toUpperCase() + result['message'].substring(1));
          SwalAlert.errorAlert("", "Error");
        }
        this.loaded = true;
        this.selection.clear();
      },
      (err) => {
        this.loaded = true;
        console.error(err);
      }
    );
    // this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected == numRows;
  }

  navigateToTagListAdd() {
    //   this.router.navigate(['add'], { relativeTo: this.currentActivatedRoute });
    this.router.navigate(["jeptag/tags/add"]);
  }

  navigateToStaffListing() {
    this.router.navigate([
      "/jeptag/user/stores",
      this.currentActivatedRoute.snapshot.paramMap.get("id"),
    ]);
  }

  getIdsFromSelectionArrayObject(array_of_objects) {
    let ids = array_of_objects.map((a) => a.id);
    return ids;
  }

  public changeListener(files: FileList) {
    console.log("Inside files");
    console.log(files);
    //const fileList: FileList = event.target.files;

    if (files && files.length > 0) {
      this.file = files[0];
      //let file : File = files.item(0);
      console.log("name" + this.file.name);
      console.log("size" + this.file.size);
      console.log("type" + this.file.type);
      let reader: FileReader = new FileReader();
      reader.readAsText(this.file);
      reader.onload = (e) => {
        let csv: string = reader.result as string;
        console.log(csv);
      };
    }
  }

  submitFile() {
    console.log("file name in after submit" + this.file.name)
    const staff = this.TagsService.addCsvTags(this.file);
    staff.subscribe(
      (result) => {
        console.log("tags list:", result);
        if (result['status']) {
          SwalAlert.sucessAlert('', 'File Uploaded Sucessfully!');
          this.attachment.nativeElement.value = '';
          this.file = null;
        } else {
          this.loaded = true;
          SwalAlert.errorAlert('', "Something went wrong!");


        }
        this.loaded = true;

      },
      (err) => {
        this.loaded = true;
        console.error(err);
      }
    );
  }
}
