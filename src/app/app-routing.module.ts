import { ForgetPasswordComponent } from './Core/forget-password/forget-password/forget-password.component';
import { EditStoreComponent } from './Jeptag-admin/Stores/edit-store/edit-store.component';
// import { AddEventComponent } from './Jeptag-admin/Events/add-event/add-event.component';
import { EditUserComponent } from './Jeptag-admin/UserManagment/edit-user/edit-user.component';
import { AddUserComponent } from './Jeptag-admin/UserManagment/add-user/add-user.component';
import { UsersComponent } from './Jeptag-admin/UserManagment/users/users.component';
import { ConfirmPasswordComponent } from './Core/confirm-password/confirm-password/confirm-password.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesReportResolver } from './Services/sales-report.resolver';
import { SalesComponent } from './Jeptag-admin/Reports/sales/sales.component';
import { AuthGuardService as AuthGuard } from './Services/auth-guard';
import { DashboardComponent } from './Core/dashboard/dashboard.component';
// import { AddProductComponent } from './instamunch/product/add-product/add-product.component';
import { LoginComponent } from './Core/login/login.component';
import { PageNotFoundComponent } from './Core/page-not-found/page-not-found.component';
// import { JoblistComponent } from './Jeptag-admin/Jobs/joblist/joblist.component';
// import { EventsComponent } from './Jeptag-admin/Events/events/events.component';
import { from } from 'rxjs';
// import { AddJobComponent } from './Jeptag-admin/Jobs/add-job/add-job.component';
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
import { EditProductsComponent } from './Jeptag-admin/Products/edit-products/edit-products.component';
import { TaglistComponent } from './Jeptag-admin/Tags/taglist/taglist.component';
import { AddTagComponent } from './Jeptag-admin/Tags/add-tag/add-tag.component';
import { VerificationComponent } from './Core/verification/verification.component';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'forgetPassword', component: ForgetPasswordComponent
  // children: [
  //   { path: 'forgetPassword/Verification', component: VerificationComponent},

  //   {path: 'forgetPassword/Verification/confirmPassword', component: ConfirmPasswordComponent},
  // ]
},
// { path: 'Verification', component: VerificationComponent},

{path: 'confirmPassword', component: ConfirmPasswordComponent},
  {
    path: 'jeptag', component: DashboardComponent, canActivate: [AuthGuard],

    children: [
     
      {
        path: '', component: SalesComponent, 
        // resolve: {
        //   cres: SalesReportResolver
        // }
      },   
      {
        path: 'user', component: UsersComponent
      },
      {
        path: 'user/add', component: AddUserComponent
      },
      {
        path: 'user/edit/:id', component: EditUserComponent
      },
      {
        path: 'user/stores/:id/:cname/:email', component: StoreListingComponent
      },
      {
        path: 'user/stores/add/:id/:cname/:email', component: AddStoreComponent
      },
      {
        path: 'products/edit/:id/:email', component: EditProductsComponent
      },
     
      // {
      //   path: 'user/stores/products/:id', component: ProductListingComponent
      // },
      // {
      //   path: 'user/stores/products/add/:id', component: AddProductComponent
      // },
//ustran routes

{
  path: 'products', component: ProductListingComponent
},

{
  path: 'products/add', component: AddProductComponent
},

{
  path: 'stores', component: StoreListingComponent
},
{
  path: 'stores/add', component: AddStoreComponent
},

{
  path: 'stores/edit/:id/:storeid/:cname/:email', component: EditStoreComponent
},
{
  path: 'stores/products/:storeid/:userid/:email', component: ProductListingComponent
},
{
  path: 'stores/products/add/:storeid/:userid/:email', component: AddProductComponent
},
{
  path: 'categories', component: CategoriesComponent
},
{
  path: 'categories/add', component: AddCategoryComponent
},
{
  path: 'subcategories', component: SubCategoryListingComponent
},
{
  path: 'subcategories/add', component: AddSubcatComponent
},
{
  path: 'brands', component: BrandListingComponent
},
{
  path: 'brands/add', component: AddBrandsComponent
},
{
  path: 'tags', component: TaglistComponent
},
{
  path: 'tags/edit/:id', component: AddTagComponent
},
{
  path: 'sales-report', component: SalesComponent, resolve: {
    cres: SalesReportResolver
  },
  
}
    ]

  },
  {
    path: '**',
    component: PageNotFoundComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
