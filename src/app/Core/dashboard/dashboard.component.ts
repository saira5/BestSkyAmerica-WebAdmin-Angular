import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { DataSharingService } from '../../Services/data-sharing.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  reload: boolean = this.dataSharingService.getOption()['reload'];

  constructor(private authService: AuthService, private router: Router,
    private dataSharingService: DataSharingService) {
    // console.log(this.dataSharingService.getOption());
    // console.log(this.reload);
    if (this.reload == true) {
      this.dataSharingService.setOption('reload', false);
      location.reload();
    }
    else {
      // console.log('in else block');
      //   location.reload();
    }
  }

  ngOnInit() {


  }

}
