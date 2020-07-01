
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {
  MatTableModule, MatPaginatorModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCheckboxModule,
  MatDatepickerModule,
  MatProgressBarModule, MatProgressSpinnerModule
} from '@angular/material';
import { NgApexchartsModule } from "ng-apexcharts";

import { SharedModule } from './Shared/shared.module';
import { SalesComponent } from './Jeptag-admin/Reports/sales/sales.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Services
import { HttpService } from './Services/http.service';
import { InterceptorService } from './Services/interceptor.service';
import { SalesReportResolver } from './Services/sales-report.resolver';
import { AuthGuardService } from './Services/auth-guard';
import { DataSharingService } from './Services/data-sharing.service';
import { NgSelectModule } from '@ng-select/ng-select';

import { HeaderComponent } from './Core/header/header.component';
import { SidebarComponent } from './Core/sidebar/sidebar.component';
import { FooterComponent } from './Core/footer/footer.component';

import { AuthService } from './Services/auth.service';

//import { AddProductComponent } from './instamunch/product/add-product/add-product.component';

import { LoginComponent } from './Core/login/login.component';
import { DashboardComponent } from './Core/dashboard/dashboard.component';
import { PageNotFoundComponent } from './Core/page-not-found/page-not-found.component';

import { UsersComponent } from './Jeptag-admin/UserManagment/users/users.component';
// import { EventsComponent } from './Jeptag-admin/Events/events/events.component';
// import { JoblistComponent } from './Jeptag-admin/Jobs/joblist/joblist.component';
// import { AddJobComponent } from './Jeptag-admin/Jobs/add-job/add-job.component';

// import { AddEventComponent } from './Jeptag-admin/Events/add-event/add-event.component';
import { AddUserComponent } from './Jeptag-admin/UserManagment/add-user/add-user.component';
import { EditUserComponent } from './Jeptag-admin/UserManagment/edit-user/edit-user.component';
import { ProductListingComponent } from './Jeptag-admin/Products/product-listing/product-listing.component';
import { StoreListingComponent } from './Jeptag-admin/Stores/store-listing/store-listing.component';
import { AddStoreComponent } from './Jeptag-admin/Stores/add-store/add-store.component';
import { AddProductComponent } from './Jeptag-admin/Products/add-product/add-product.component';
import { CategoriesComponent } from './Jeptag-admin/category/categories/categories.component';
import { AddCategoryComponent } from './Jeptag-admin/category/add-category/add-category.component';
import { BrandListingComponent } from './Jeptag-admin/brand/brand-listing/brand-listing.component';
import { AddBrandsComponent } from './Jeptag-admin/brand/add-brands/add-brands.component';
import { SubCategoryListingComponent } from './Jeptag-admin/sub-category/sub-category-listing/sub-category-listing.component';
import { AddSubcatComponent } from './Jeptag-admin/sub-category/add-subcat/add-subcat.component';
import { EditStoreComponent } from './Jeptag-admin/Stores/edit-store/edit-store.component';
import { EditProductsComponent } from './Jeptag-admin/Products/edit-products/edit-products.component';
//import{dateValidator} from './Shared/Custom Validators/dateValidator';
import {  ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material';
import { TaglistComponent } from './Jeptag-admin/Tags/taglist/taglist.component';
import { AddTagComponent } from './Jeptag-admin/Tags/add-tag/add-tag.component';

@NgModule({
  declarations: [

    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
   
    AddProductComponent,
    
    LoginComponent,
    DashboardComponent,
    PageNotFoundComponent,
    SalesComponent,
    UsersComponent,
    // EventsComponent,
   
    // JoblistComponent,
    // AddJobComponent,
 
    // AddEventComponent,
    AddUserComponent,
    EditUserComponent,
    ProductListingComponent,
    StoreListingComponent,
    AddStoreComponent,
    CategoriesComponent,
    AddCategoryComponent,
    BrandListingComponent,
    AddBrandsComponent,
    SubCategoryListingComponent,
    AddSubcatComponent,
    EditStoreComponent,
    EditProductsComponent,
    TaglistComponent,
    AddTagComponent,
  //  dateValidator
  ],

  imports: [
   
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatProgressBarModule,
    SharedModule,
    NgApexchartsModule,
    FormsModule,
    NgSelectModule,
    MatDatepickerModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    ReactiveFormsModule
    
  ],

  providers: [HttpService,
    AuthService,
    SalesReportResolver,
    AuthGuardService,
    DataSharingService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
