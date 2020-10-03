(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Core/confirm-password/confirm-password/confirm-password.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/Core/confirm-password/confirm-password/confirm-password.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvcmUvY29uZmlybS1wYXNzd29yZC9jb25maXJtLXBhc3N3b3JkL2NvbmZpcm0tcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/Core/confirm-password/confirm-password/confirm-password.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/Core/confirm-password/confirm-password/confirm-password.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <form novalidate #f=\"ngForm\" (ngSubmit)=\"f.form.valid && onSubmit()\">\n  <input [(ngModel)]=\"model.username\" name=\"email\" placeholder=\"email\" />\n  <input [(ngModel)]=\"model.password\" name=\"password\" placeholder=\"passoword\" />\n  <button type=\"submit\">Login</button>\n</form> -->\n\n<body class=\"dashboard \" style=\"background-size:100%; \">\n\n\n  <div class=\"app-main\">\n    <div class=\"app-main__outer\">\n      <div class=\"\">\n\n        <div class=\"h-100 bg-plum-plate1 bg-animation\">\n          <div class=\"d-flex h-100 justify-content-center align-items-center\">\n            <div class=\"mx-auto app-login-box col-md-3\">\n              <div class=\"modal-dialog w-100 mx-auto\">\n                <div class=\"modal-content\">\n                  <form novalidate #f=\"ngForm\" (ngSubmit)=\"f.form.valid && onSubmit()\">\n                    <div class=\"modal-body\">\n                      <mat-progress-bar *ngIf=\"loginPressed\"  mode=\"indeterminate\"></mat-progress-bar>\n                      <div class=\" modal-title text-center mb-3\">\n                        <div class=\"app-logo-inverse mx-auto mb-3 mt-2 text-center\"> <img\n                            src=\"assets/images/ic_logo.PNG\" height=\"150\" /> </div>\n\n                        <h4 class=\"mt-2\">\n                          <div>Change Password </div>\n                        </h4>\n\n\n\n                      </div>\n                      <br />\n                      <!-- <?php include(\"_form.php\") ?> -->\n                     \n                      <div class=\"form-row\">\n                        <div class=\"col-md-12\">\n                          <div class=\"position-relative form-group\"><input [(ngModel)]=\"model.username\" name=\"email\"\n                              placeholder=\"email\" id=\"exampleEmail\" type=\"email\" placeholder=\"Email here...\"\n                              class=\"form-control\"></div>\n                        </div>\n\n                        <div class=\"col-md-12\">\n                          <div class=\"position-relative form-group\"><input [(ngModel)]=\"model.password\" name=\"email\"\n                              placeholder=\"email\" id=\"exampleEmail\" type=\"password\" placeholder=\"Password here...\"\n                              class=\"form-control\"></div>\n                        </div>\n                       \n                        <div class=\"col-md-12\">\n                          <div class=\"position-relative form-group\"><input [(ngModel)]=\"model.mpassword\" name=\"password\"\n                              id=\"examplePassword\" placeholder=\"Confirm Password here...\" type=\"password\" class=\"form-control\">\n                          </div>\n                        </div>\n                      </div>\n                      <!-- <h6 class=\"mt-2\">                \n                          <a routerLink='/forgetPassword' class=\"mm-active\">Forget Password?</a>                 \n                      </h6> -->\n                      <p style=\"color: red;\" *ngIf=\"loginError\">{{error_message}}</p>\n\n                      \n                    </div>\n                  \n                    <div class=\"modal-footer1 clearfix\">\n                  \n                      <button class=\"btn btn-primary btn-lg btn-block\" type=\"submit\">Change Password</button>\n    \n\n                    </div>\n                  </form>\n                </div>\n              </div>\n              <div class=\"text-center text-white opacity-8 mt-3\">Copyright © 2020 </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n</body>"

/***/ }),

/***/ "./src/app/Core/confirm-password/confirm-password/confirm-password.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/Core/confirm-password/confirm-password/confirm-password.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ConfirmPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPasswordComponent", function() { return ConfirmPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Jeptag_admin_Services_forget_password_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../Jeptag-admin/Services/forget-password.service */ "./src/app/Jeptag-admin/Services/forget-password.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Shared/swalAlerts */ "./src/app/Shared/swalAlerts.ts");





var ConfirmPasswordComponent = /** @class */ (function () {
    function ConfirmPasswordComponent(ForgetPasswordService, router) {
        this.ForgetPasswordService = ForgetPasswordService;
        this.router = router;
        this.model = {};
        this.loaded = false;
    }
    ConfirmPasswordComponent.prototype.ngOnInit = function () {
    };
    ConfirmPasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        //   let categories = this.productService.getCategories();
        console.log("USERNAME" + this.model['username']);
        if (this.model['password'] == this.model['mpassword']) {
            var verify = this.ForgetPasswordService.changePassword(this.model['username'], this.model['password']);
            verify.subscribe(function (result) {
                console.log("VERIFY RESULT :", result);
                _this.compareResult = result;
                console.log("VERIFY RESULT :", _this.compareResult);
                if (_this.compareResult == "Password Reset Successfully") {
                    _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_4__["SwalAlert"].sucessAlert('', 'Password Reset Succesfully!');
                    _this.router.navigate(['']);
                }
                else {
                    _this.loaded = true;
                    _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_4__["SwalAlert"].errorAlert('', "Server Error");
                }
                // if (result!=null) {
                // //  this.generateForm(this.product);
                // }
            }, function (err) {
                console.log(err);
                _this.loaded = true;
            });
        }
        else {
            _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_4__["SwalAlert"].errorAlert('', "Password does not match");
        }
    };
    ConfirmPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-confirm-password',
            template: __webpack_require__(/*! ./confirm-password.component.html */ "./src/app/Core/confirm-password/confirm-password/confirm-password.component.html"),
            styles: [__webpack_require__(/*! ./confirm-password.component.css */ "./src/app/Core/confirm-password/confirm-password/confirm-password.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Jeptag_admin_Services_forget_password_service__WEBPACK_IMPORTED_MODULE_1__["ForgetPasswordService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ConfirmPasswordComponent);
    return ConfirmPasswordComponent;
}());



/***/ }),

/***/ "./src/app/Core/dashboard/dashboard.component.html":
/*!*********************************************************!*\
  !*** ./src/app/Core/dashboard/dashboard.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div *ngIf=\"!reload;else other_content\" class=\"app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header\">\r\n  <app-header></app-header>\r\n  <div class=\"app-main\">\r\n    <app-sidebar></app-sidebar>\r\n    <div style=\"width: 100%;\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #other_content>\r\n  <div class=\"container\">\r\n    <div class=\"item-1\"></div>\r\n    <div class=\"item-2\"></div>\r\n    <div class=\"item-3\"></div>\r\n    <div class=\"item-4\"></div>\r\n    <div class=\"item-5\"></div>\r\n  </div>\r\n  \r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/Core/dashboard/dashboard.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/Core/dashboard/dashboard.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  overflow: hidden; }\n\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  overflow: hidden;\n  -webkit-animation-delay: 1s;\n          animation-delay: 1s; }\n\n.item-1 {\n  width: 20px;\n  height: 20px;\n  background: #f583a1;\n  border-radius: 50%;\n  background-color: #eed968;\n  margin: 7px;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n@-webkit-keyframes scale {\n  0% {\n    transform: scale(1); }\n  50%,\n  75% {\n    transform: scale(2.5); }\n  78%, 100% {\n    opacity: 0; } }\n\n@keyframes scale {\n  0% {\n    transform: scale(1); }\n  50%,\n  75% {\n    transform: scale(2.5); }\n  78%, 100% {\n    opacity: 0; } }\n\n.item-1:before {\n    content: '';\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    background-color: #eed968;\n    opacity: 0.7;\n    -webkit-animation: scale 2s infinite cubic-bezier(0, 0, 0.49, 1.02);\n            animation: scale 2s infinite cubic-bezier(0, 0, 0.49, 1.02);\n    -webkit-animation-delay: 200ms;\n            animation-delay: 200ms;\n    transition: 0.5s all ease;\n    transform: scale(1); }\n\n.item-2 {\n  width: 20px;\n  height: 20px;\n  background: #f583a1;\n  border-radius: 50%;\n  background-color: #eece68;\n  margin: 7px;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n@keyframes scale {\n  0% {\n    transform: scale(1); }\n  50%,\n  75% {\n    transform: scale(2.5); }\n  78%, 100% {\n    opacity: 0; } }\n\n.item-2:before {\n    content: '';\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    background-color: #eece68;\n    opacity: 0.7;\n    -webkit-animation: scale 2s infinite cubic-bezier(0, 0, 0.49, 1.02);\n            animation: scale 2s infinite cubic-bezier(0, 0, 0.49, 1.02);\n    -webkit-animation-delay: 400ms;\n            animation-delay: 400ms;\n    transition: 0.5s all ease;\n    transform: scale(1); }\n\n.item-3 {\n  width: 20px;\n  height: 20px;\n  background: #f583a1;\n  border-radius: 50%;\n  background-color: #eec368;\n  margin: 7px;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n@keyframes scale {\n  0% {\n    transform: scale(1); }\n  50%,\n  75% {\n    transform: scale(2.5); }\n  78%, 100% {\n    opacity: 0; } }\n\n.item-3:before {\n    content: '';\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    background-color: #eec368;\n    opacity: 0.7;\n    -webkit-animation: scale 2s infinite cubic-bezier(0, 0, 0.49, 1.02);\n            animation: scale 2s infinite cubic-bezier(0, 0, 0.49, 1.02);\n    -webkit-animation-delay: 600ms;\n            animation-delay: 600ms;\n    transition: 0.5s all ease;\n    transform: scale(1); }\n\n.item-4 {\n  width: 20px;\n  height: 20px;\n  background: #f583a1;\n  border-radius: 50%;\n  background-color: #eead68;\n  margin: 7px;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n@keyframes scale {\n  0% {\n    transform: scale(1); }\n  50%,\n  75% {\n    transform: scale(2.5); }\n  78%, 100% {\n    opacity: 0; } }\n\n.item-4:before {\n    content: '';\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    background-color: #eead68;\n    opacity: 0.7;\n    -webkit-animation: scale 2s infinite cubic-bezier(0, 0, 0.49, 1.02);\n            animation: scale 2s infinite cubic-bezier(0, 0, 0.49, 1.02);\n    -webkit-animation-delay: 800ms;\n            animation-delay: 800ms;\n    transition: 0.5s all ease;\n    transform: scale(1); }\n\n.item-5 {\n  width: 20px;\n  height: 20px;\n  background: #f583a1;\n  border-radius: 50%;\n  background-color: #ee8c68;\n  margin: 7px;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n@keyframes scale {\n  0% {\n    transform: scale(1); }\n  50%,\n  75% {\n    transform: scale(2.5); }\n  78%, 100% {\n    opacity: 0; } }\n\n.item-5:before {\n    content: '';\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    background-color: #ee8c68;\n    opacity: 0.7;\n    -webkit-animation: scale 2s infinite cubic-bezier(0, 0, 0.49, 1.02);\n            animation: scale 2s infinite cubic-bezier(0, 0, 0.49, 1.02);\n    -webkit-animation-delay: 1000ms;\n            animation-delay: 1000ms;\n    transition: 0.5s all ease;\n    transform: scale(1); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29yZS9kYXNoYm9hcmQvRDpcXHVzdHJhbiBhbmd1bGFyIDcgbGF0ZXN0XFxVc3RyYW4gQW5ndWxhciBQcm9qZWN0IHRvIGJlIGRvbmVcXGplcHRhZy1BZG1pbi1mcm9udGVuZC9zcmNcXGFwcFxcQ29yZVxcZGFzaGJvYXJkXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJBO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQiwyQkFBbUI7VUFBbkIsbUJBQW1CLEVBQUE7O0FBSW5CO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBRWxCLHlCQXhDYTtFQXlDYixXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTs7QUF0Q3JCO0VBQ0U7SUFDSSxtQkFBbUIsRUFBQTtFQUV2Qjs7SUFFRSxxQkFBcUIsRUFBQTtFQUV2QjtJQUNFLFVBQVUsRUFBQSxFQUFBOztBQVRkO0VBQ0U7SUFDSSxtQkFBbUIsRUFBQTtFQUV2Qjs7SUFFRSxxQkFBcUIsRUFBQTtFQUV2QjtJQUNFLFVBQVUsRUFBQSxFQUFBOztBQW1CZDtJQWFJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix5QkFuRFc7SUFvRFgsWUFBWTtJQUNaLG1FQUEyRDtZQUEzRCwyREFBMkQ7SUFDM0QsOEJBQTJCO1lBQTNCLHNCQUEyQjtJQUMzQix5QkFBeUI7SUFDekIsbUJBQW1CLEVBQUE7O0FBdEJ2QjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUVsQix5QkF6Q2E7RUEwQ2IsV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7O0FBdENyQjtFQUNFO0lBQ0ksbUJBQW1CLEVBQUE7RUFFdkI7O0lBRUUscUJBQXFCLEVBQUE7RUFFdkI7SUFDRSxVQUFVLEVBQUEsRUFBQTs7QUFtQmQ7SUFhSSxXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIseUJBcERXO0lBcURYLFlBQVk7SUFDWixtRUFBMkQ7WUFBM0QsMkRBQTJEO0lBQzNELDhCQUEyQjtZQUEzQixzQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLG1CQUFtQixFQUFBOztBQXRCdkI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFFbEIseUJBMUNhO0VBMkNiLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQixFQUFBOztBQXRDckI7RUFDRTtJQUNJLG1CQUFtQixFQUFBO0VBRXZCOztJQUVFLHFCQUFxQixFQUFBO0VBRXZCO0lBQ0UsVUFBVSxFQUFBLEVBQUE7O0FBbUJkO0lBYUksV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHlCQXJEVztJQXNEWCxZQUFZO0lBQ1osbUVBQTJEO1lBQTNELDJEQUEyRDtJQUMzRCw4QkFBMkI7WUFBM0Isc0JBQTJCO0lBQzNCLHlCQUF5QjtJQUN6QixtQkFBbUIsRUFBQTs7QUF0QnZCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBRWxCLHlCQTNDYTtFQTRDYixXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTs7QUF0Q3JCO0VBQ0U7SUFDSSxtQkFBbUIsRUFBQTtFQUV2Qjs7SUFFRSxxQkFBcUIsRUFBQTtFQUV2QjtJQUNFLFVBQVUsRUFBQSxFQUFBOztBQW1CZDtJQWFJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix5QkF0RFc7SUF1RFgsWUFBWTtJQUNaLG1FQUEyRDtZQUEzRCwyREFBMkQ7SUFDM0QsOEJBQTJCO1lBQTNCLHNCQUEyQjtJQUMzQix5QkFBeUI7SUFDekIsbUJBQW1CLEVBQUE7O0FBdEJ2QjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUVsQix5QkF2Q2E7RUF3Q2IsV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7O0FBdENyQjtFQUNFO0lBQ0ksbUJBQW1CLEVBQUE7RUFFdkI7O0lBRUUscUJBQXFCLEVBQUE7RUFFdkI7SUFDRSxVQUFVLEVBQUEsRUFBQTs7QUFtQmQ7SUFhSSxXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIseUJBbERXO0lBbURYLFlBQVk7SUFDWixtRUFBMkQ7WUFBM0QsMkRBQTJEO0lBQzNELCtCQUEyQjtZQUEzQix1QkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvQ29yZS9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yLTQ6ICNlZWFkNjg7XHJcbiRjb2xvci0zOiAjZWVjMzY4O1xyXG4kY29sb3ItMjogI2VlY2U2ODtcclxuJGNvbG9yLTE6ICNlZWQ5Njg7XHJcbiRjb2xvci01OiAjZWU4YzY4O1xyXG5cclxuJGNvbG9yOiAkY29sb3ItMSwgJGNvbG9yLTIsICRjb2xvci0zLCAkY29sb3ItNCwgJGNvbG9yLTU7XHJcblxyXG5AbWl4aW4gYW5pbSgpIHtcclxuICBAa2V5ZnJhbWVzIHNjYWxlIHtcclxuICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgfVxyXG4gICAgNTAlLFxyXG4gICAgNzUlIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgyLjUpO1xyXG4gICAgfVxyXG4gICAgNzglLCAxMDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAxcztcclxufVxyXG5cclxuQGZvciAkaSBmcm9tIDEgdGhyb3VnaCA1IHtcclxuICAuaXRlbS0jeyRpfSB7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmNTgzYTE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBAaW5jbHVkZSBhbmltKCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBudGgoJGNvbG9yLCAkaSk7XHJcbiAgICBtYXJnaW46IDdweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBudGgoJGNvbG9yLCAkaSk7XHJcbiAgICAgIG9wYWNpdHk6IDAuNztcclxuICAgICAgYW5pbWF0aW9uOiBzY2FsZSAycyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMCwgMCwgMC40OSwgMS4wMik7XHJcbiAgICAgIGFuaW1hdGlvbi1kZWxheTogMjAwbXMgKiAkaTtcclxuICAgICAgdHJhbnNpdGlvbjogMC41cyBhbGwgZWFzZTtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/Core/dashboard/dashboard.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/Core/dashboard/dashboard.component.ts ***!
  \*******************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/auth.service */ "./src/app/Services/auth.service.ts");
/* harmony import */ var _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/data-sharing.service */ "./src/app/Services/data-sharing.service.ts");





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(authService, router, dataSharingService) {
        this.authService = authService;
        this.router = router;
        this.dataSharingService = dataSharingService;
        this.reload = this.dataSharingService.getOption()['reload'];
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
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/Core/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/Core/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_4__["DataSharingService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/Core/footer/footer.component.css":
/*!**************************************************!*\
  !*** ./src/app/Core/footer/footer.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvcmUvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Core/footer/footer.component.html":
/*!***************************************************!*\
  !*** ./src/app/Core/footer/footer.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-wrapper-footer\">\r\n  <div class=\"app-footer\">\r\n      <div class=\"app-footer__inner\">\r\n          <div class=\"app-footer-left\">\r\n              <ul class=\"nav\">\r\n                  <li class=\"nav-item\">\r\n                      <a href=\"javascript:void(0);\" class=\"nav-link\">\r\n                          Footer Link 1\r\n                      </a>\r\n                  </li>\r\n                  <li class=\"nav-item\">\r\n                      <a href=\"javascript:void(0);\" class=\"nav-link\">\r\n                          Footer Link 2\r\n                      </a>\r\n                  </li>\r\n              </ul>\r\n          </div>\r\n          <div class=\"app-footer-right\">\r\n              <ul class=\"nav\">\r\n                  <!-- <li class=\"nav-item\">\r\n                      <a href=\"javascript:void(0);\" class=\"nav-link\">\r\n                          HyperNym\r\n                      </a>\r\n                  </li> -->\r\n                  <li class=\"nav-item\">\r\n                      <a href=\"javascript:void(0);\" class=\"nav-link\">\r\n                          <div class=\"badge badge-default mr-1 ml-0\">\r\n                              <small>V 1.0 </small>\r\n                          </div>\r\n\r\n                      </a>\r\n                  </li>\r\n              </ul>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/Core/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/Core/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/Core/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/Core/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/Core/forget-password/forget-password/forget-password.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/Core/forget-password/forget-password/forget-password.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvcmUvZm9yZ2V0LXBhc3N3b3JkL2ZvcmdldC1wYXNzd29yZC9mb3JnZXQtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/Core/forget-password/forget-password/forget-password.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/Core/forget-password/forget-password/forget-password.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <form novalidate #f=\"ngForm\" (ngSubmit)=\"f.form.valid && onSubmit()\">\n  <input [(ngModel)]=\"model.username\" name=\"email\" placeholder=\"email\" />\n  <input [(ngModel)]=\"model.password\" name=\"password\" placeholder=\"passoword\" />\n  <button type=\"submit\">Login</button>\n</form> -->\n\n<body class=\"dashboard \" style=\"background-size:100%; \">\n\n\n  <div class=\"app-main\">\n    <div class=\"app-main__outer\">\n      <div class=\"\">\n\n        <div class=\"h-100 bg-plum-plate1 bg-animation\">\n          <div class=\"d-flex h-100 justify-content-center align-items-center\">\n            <div class=\"mx-auto app-login-box col-md-3\">\n              <div class=\"modal-dialog w-100 mx-auto\">\n                <div class=\"modal-content\">\n                  <form novalidate #f=\"ngForm\" (ngSubmit)=\"f.form.valid && onSubmit()\">\n                    <div class=\"modal-body\">\n                      <mat-progress-bar *ngIf=\"loginPressed\"  mode=\"indeterminate\"></mat-progress-bar>\n                      <div class=\" modal-title text-center mb-3\">\n                        <div class=\"app-logo-inverse mx-auto mb-3 mt-2 text-center\"> <img\n                            src=\"assets/images/ic_logo.PNG\" height=\"150\" /> </div>\n\n                        <h4 class=\"mt-2\">\n                          <div>Forget Password </div>\n                        </h4>\n\n\n\n                      </div>\n                      <br />\n                      <!-- <?php include(\"_form.php\") ?> -->\n                     \n                      <div class=\"form-row\">\n                        <div class=\"col-md-12\">\n                          <div class=\"position-relative form-group\"><input [(ngModel)]=\"model.username\" name=\"email\"\n                              placeholder=\"email\" id=\"exampleEmail\" type=\"email\" placeholder=\"Email here...\"\n                              class=\"form-control\"></div>\n                        </div>\n                       \n                        <div class=\"col-md-12\">\n                          <div *ngIf=codeStatus class=\"position-relative form-group\"><input [(ngModel)]=\"model.code\" name=\"password\"\n                              id=\"examplePassword\" placeholder=\"Verification code here...\"  class=\"form-control\">\n                          </div>\n                        </div>                     \n                      </div>\n                      <!-- <h6 class=\"mt-2\">                \n                          <a routerLink='/forgetPassword' class=\"mm-active\">Forget Password?</a>                 \n                      </h6> -->\n                      <p style=\"color: red;\" *ngIf=\"loginError\">{{error_message}}</p>\n\n                      \n                    </div>\n                  \n                    <div class=\"modal-footer1 clearfix\">\n                  \n                      <button class=\"btn btn-primary btn-lg btn-block\" type=\"submit\"> Verify Email</button>\n    \n\n                    </div>\n                  </form>\n                </div>\n              </div>\n              <div class=\"text-center text-white opacity-8 mt-3\">Copyright © 2020 </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n</body>"

/***/ }),

/***/ "./src/app/Core/forget-password/forget-password/forget-password.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/Core/forget-password/forget-password/forget-password.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ForgetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPasswordComponent", function() { return ForgetPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Jeptag_admin_Services_forget_password_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../Jeptag-admin/Services/forget-password.service */ "./src/app/Jeptag-admin/Services/forget-password.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Shared/swalAlerts */ "./src/app/Shared/swalAlerts.ts");





var ForgetPasswordComponent = /** @class */ (function () {
    function ForgetPasswordComponent(ForgetPasswordService, router) {
        this.ForgetPasswordService = ForgetPasswordService;
        this.router = router;
        this.model = {};
        this.loaded = false;
        this.codeStatus = false;
        this.flag = false;
    }
    ForgetPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgetPasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        //   let categories = this.productService.getCategories();
        if (this.flag == false) {
            console.log("FLAG IS false");
            console.log("USERNAME" + this.model['username']);
            var verify = this.ForgetPasswordService.verifyEmail(this.model['username']);
            verify.subscribe(function (result) {
                var compareString = "Please Check your email for reset code.";
                console.log("VERIFY RESULT :", result);
                _this.resultString = result['result'];
                if (result != null) {
                    console.log("Inside result", _this.resultString + "COMPAREE TO" + compareString);
                    if (_this.resultString === compareString) {
                        _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_4__["SwalAlert"].sucessAlert('', 'Verification Code sent to email!');
                        // if(this.resultString==="Please Check your email for reset code."){
                        _this.ForgetPasswordService.code = result['code'];
                        _this.code = result['code'];
                        _this.codeStatus = true;
                        _this.flag = true;
                        console.log("INSIDE IF CHECK", _this.ForgetPasswordService.code);
                        //this.router.navigate(['Verification']);
                    }
                    else {
                        _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_4__["SwalAlert"].errorAlert('', "Email does not exist");
                    }
                }
                else {
                    _this.loaded = true;
                    _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_4__["SwalAlert"].errorAlert('', "Server Error");
                }
            }, function (err) {
                console.log(err);
                _this.loaded = true;
            });
        }
        else {
            console.log("FLAG IS TRUE");
            console.log("CODE MATCHED", this.model['code']);
            if (this.model['code'] == this.code) {
                _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_4__["SwalAlert"].sucessAlert('', 'Code Matched!');
                this.router.navigate(['confirmPassword']);
            }
            else {
                _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_4__["SwalAlert"].errorAlert('', "Code doesnot matched");
            }
        }
        //  }else{
        // if(this.model['code']== this.ForgetPasswordService.code){
        //   console.log("CODE MATCHED",this.model['code']);
        //     this.router.navigate(['Verification']);
        // }else{
        //   SwalAlert.errorAlert('', "Code doesnot matched");
        // }
        //  }
    };
    ForgetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-forget-password',
            template: __webpack_require__(/*! ./forget-password.component.html */ "./src/app/Core/forget-password/forget-password/forget-password.component.html"),
            styles: [__webpack_require__(/*! ./forget-password.component.css */ "./src/app/Core/forget-password/forget-password/forget-password.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Jeptag_admin_Services_forget_password_service__WEBPACK_IMPORTED_MODULE_1__["ForgetPasswordService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ForgetPasswordComponent);
    return ForgetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/Core/header/header.component.css":
/*!**************************************************!*\
  !*** ./src/app/Core/header/header.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvcmUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Core/header/header.component.html":
/*!***************************************************!*\
  !*** ./src/app/Core/header/header.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-header header-shadow bg-premium-dark header-text-light\" >\r\n  <div class=\"app-header__logo\">\r\n\r\n      <i>BestskyAmerica Admin</i>\r\n      <div class=\"header__pane ml-auto\">\r\n          <div>\r\n              <button type=\"button\" class=\"hamburger close-sidebar-btn hamburger--elastic\" data-class=\"closed-sidebar\">\r\n                  <span class=\"hamburger-box\">\r\n                      <span class=\"hamburger-inner\"></span>\r\n                  </span>\r\n              </button>\r\n          </div>\r\n      </div>\r\n  </div>\r\n  <div class=\"app-header__mobile-menu\">\r\n      <div>\r\n          <button type=\"button\" class=\"hamburger hamburger--elastic mobile-toggle-nav\">\r\n              <span class=\"hamburger-box\">\r\n                  <span class=\"hamburger-inner\"></span>\r\n              </span>\r\n          </button>\r\n      </div>\r\n  </div>\r\n  <div class=\"app-header__menu\">\r\n      <span>\r\n          <button type=\"button\" class=\"btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav\">\r\n              <span class=\"btn-icon-wrapper\">\r\n                  <i class=\"fa fa-ellipsis-v fa-w-6\"></i>\r\n              </span>\r\n          </button>\r\n      </span>\r\n  </div>\r\n  <div class=\"app-header__content\">\r\n      <div class=\"app-header-left\">\r\n          <!-- <div class=\"search-wrapper\">\r\n              <div class=\"input-holder\">\r\n                  <input type=\"text\" class=\"search-input\" placeholder=\"Type to search\">\r\n                  <button class=\"search-icon\"><span></span></button>\r\n              </div>\r\n              <button class=\"close\"></button>\r\n          </div> -->\r\n          <ul class=\"header-menu nav\">\r\n              <!-- <li class=\"nav-item\">\r\n                  <a href=\"javascript:void(0);\" class=\"nav-link\">\r\n                      <i class=\"nav-link-icon fa fa-database\"> </i>\r\n                      Statistics\r\n                  </a>\r\n              </li>\r\n              <li class=\"btn-group nav-item\">\r\n                  <a href=\"javascript:void(0);\" class=\"nav-link\">\r\n                      <i class=\"nav-link-icon fa fa-edit\"></i>\r\n                      Menu\r\n                  </a>\r\n              </li>\r\n              <li class=\"dropdown nav-item\">\r\n                  <a href=\"javascript:void(0);\" class=\"nav-link\">\r\n                      <i class=\"nav-link-icon fa fa-cog\"></i>\r\n                      Settings\r\n                  </a>\r\n              </li> -->\r\n          </ul>\r\n      </div>\r\n      <div class=\"app-header-right\">\r\n          <div class=\"header-btn-lg pr-0\">\r\n              <div class=\"widget-content p-0\">\r\n                  <div class=\"widget-content-wrapper\">\r\n                      <div class=\"widget-content-left\">\r\n                          <div class=\"btn-group\">\r\n                              <a data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" class=\"p-0 btn\">\r\n                                  <img width=\"42\" class=\"rounded-circle\" [src]=\"user?.user_image!=null ? user.user_image : '../../../assets/images/no_image.png'\" alt=\"\">\r\n                                  <i class=\"fa fa-angle-down ml-2 opacity-8\"></i>\r\n                              </a>\r\n                              <div tabindex=\"-1\" role=\"menu\" aria-hidden=\"true\" class=\"dropdown-menu dropdown-menu-right\">\r\n                                  <!-- <button type=\"button\" tabindex=\"0\" class=\"dropdown-item\">User Account</button>\r\n                                  <button type=\"button\" tabindex=\"0\" class=\"dropdown-item\">Settings</button> -->\r\n\r\n                                  <!-- <div tabindex=\"-1\" class=\"dropdown-divider\"></div> -->\r\n                                  <button (click)=\"logout()\" type=\"button\" tabindex=\"0\" class=\"dropdown-item\">Logout</button>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"widget-content-left  ml-3 header-user-info\">\r\n                          <div class=\"widget-heading\">\r\n                             {{user?.first_name}}  {{user?.last_name}}\r\n                          </div>\r\n                          <div class=\"widget-subheading\">\r\n                             {{user?.type | titlecase}} \r\n                          </div>\r\n                      </div>\r\n                      <div class=\"widget-content-right header-user-info ml-3\">\r\n                          <button type=\"button\" class=\"btn-shadow p-1 btn btn-primary btn-sm show-toastr-example\">\r\n                              <i class=\"fa text-white fa-calendar pr-1 pl-1\"></i>\r\n                          </button>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/Core/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/Core/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/auth.service */ "./src/app/Services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.user = this.authService.getUser();
        // console.log(this.user);
    };
    HeaderComponent.prototype.logout = function () {
        this.authService.unsetUser();
        this.router.navigate(['']);
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/Core/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/Core/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _Services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/Core/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/Core/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvcmUvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/Core/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/Core/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <form novalidate #f=\"ngForm\" (ngSubmit)=\"f.form.valid && onSubmit()\">\r\n  <input [(ngModel)]=\"model.username\" name=\"email\" placeholder=\"email\" />\r\n  <input [(ngModel)]=\"model.password\" name=\"password\" placeholder=\"passoword\" />\r\n  <button type=\"submit\">Login</button>\r\n</form> -->\r\n\r\n<body class=\"dashboard \" style=\"background-size:100%; \">\r\n\r\n\r\n  <div class=\"app-main\">\r\n    <div class=\"app-main__outer\">\r\n      <div class=\"\">\r\n\r\n        <div class=\"h-100 bg-plum-plate1 bg-animation\">\r\n          <div class=\"d-flex h-100 justify-content-center align-items-center\">\r\n            <div class=\"mx-auto app-login-box col-md-3\">\r\n              <div class=\"modal-dialog w-100 mx-auto\">\r\n                <div class=\"modal-content\">\r\n                  <form novalidate #f=\"ngForm\" (ngSubmit)=\"f.form.valid && onSubmit()\">\r\n                    <div class=\"modal-body\">\r\n                      <mat-progress-bar *ngIf=\"loginPressed\"  mode=\"indeterminate\"></mat-progress-bar>\r\n                      <div class=\" modal-title text-center mb-3\">\r\n                        <div class=\"app-logo-inverse mx-auto mb-3 mt-2 text-center\"> <img\r\n                            src=\"assets/images/ic_logo.PNG\" height=\"150\" /> </div>\r\n\r\n                        <h4 class=\"mt-2\">\r\n                          <div>Welcome! <br /> Sign in to your account </div>\r\n                        </h4>\r\n\r\n\r\n\r\n                      </div>\r\n                      <br />\r\n                      <!-- <?php include(\"_form.php\") ?> -->\r\n                     \r\n                      <div class=\"form-row\">\r\n                        <div class=\"col-md-12\">\r\n                          <div class=\"position-relative form-group\"><input [(ngModel)]=\"model.username\" name=\"email\"\r\n                              placeholder=\"email\" id=\"exampleEmail\" type=\"email\" placeholder=\"Email here...\"\r\n                              class=\"form-control\"></div>\r\n                        </div>\r\n                       \r\n                        <div class=\"col-md-12\">\r\n                          <div class=\"position-relative form-group\"><input [(ngModel)]=\"model.password\" name=\"password\"\r\n                              id=\"examplePassword\" placeholder=\"Password here...\" type=\"password\" class=\"form-control\">\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <h6 class=\"mt-2\">                \r\n                          <a routerLink='/forgetPassword' class=\"mm-active\">Forget Password?</a>                 \r\n                      </h6>\r\n                      <p style=\"color: red;\" *ngIf=\"loginError\">{{error_message}}</p>\r\n\r\n                      \r\n                    </div>\r\n                  \r\n                    <div class=\"modal-footer1 clearfix\">\r\n                  \r\n                      <button class=\"btn btn-primary btn-lg btn-block\" type=\"submit\"> Login to Dashboard</button>\r\n                        \r\n\r\n                    </div>\r\n                  </form>\r\n                </div>\r\n              </div>\r\n              <div class=\"text-center text-white opacity-8 mt-3\">Copyright © 2020 </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</body>"

/***/ }),

/***/ "./src/app/Core/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/Core/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/auth.service */ "./src/app/Services/auth.service.ts");
/* harmony import */ var _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/data-sharing.service */ "./src/app/Services/data-sharing.service.ts");
/* harmony import */ var _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Shared/swalAlerts */ "./src/app/Shared/swalAlerts.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, activated_route, dataSharingSrvice) {
        this.authService = authService;
        this.router = router;
        this.activated_route = activated_route;
        this.dataSharingSrvice = dataSharingSrvice;
        this.loginError = false;
        this.error_message = '';
        this.loginPressed = false;
        this.model = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
        //console.log(this.activated_route.snapshot.queryParams['key']);
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loginPressed = true;
        this.loginError = false;
        this.authService.unsetUser();
        this.authService.login(this.model['username'], this.model['password']).subscribe(function (data) {
            _this.loginPressed = false;
            var response = data;
            if (response.status) {
                _this.dataSharingSrvice.setOption('reload', true);
                _this.router.navigate(['jeptag']);
            }
            else {
                _this.loginError = true;
                _this.error_message = response['message'];
                _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_5__["SwalAlert"].errorAlert('', "Sign in Unsuccessful");
            }
            //  console.log(data);
        }, function (err) {
            _this.loginPressed = false;
            _this.error_message = 'Server Error.';
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('closeForgotPasswordForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LoginComponent.prototype, "closeForgotPasswordForm", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/Core/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/Core/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_4__["DataSharingService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/Core/page-not-found/page-not-found.component.css":
/*!******************************************************************!*\
  !*** ./src/app/Core/page-not-found/page-not-found.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvcmUvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/Core/page-not-found/page-not-found.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/Core/page-not-found/page-not-found.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\r\n  page-not-found works!\r\n</p> -->\r\n\r\n<body class=\"dashboard \">\r\n\r\n\r\n    <div class=\"app-main\">\r\n        <div class=\"app-main__outer\">\r\n            <div class=\"\">\r\n\r\n                <div class=\"h-100 bg-plum-plate1 bg-animation\">\r\n                    <div class=\"d-flex h-100 justify-content-center align-items-center\">\r\n                        <div class=\"mx-auto notfound-box col-md-3\">\r\n\r\n                            <svg width=\"380px\" height=\"500px\" class=\"notfoundsvg\" viewBox=\"0 0 837 1045\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\r\n                                <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"\r\n                                    sketch:type=\"MSPage\">\r\n                                    <path\r\n                                        d=\"M353,9 L626.664028,170 L626.664028,487 L353,642 L79.3359724,487 L79.3359724,170 L353,9 Z\"\r\n                                        id=\"Polygon-1\" stroke=\"#007FB2\" stroke-width=\"6\" sketch:type=\"MSShapeGroup\">\r\n                                    </path>\r\n                                    <path\r\n                                        d=\"M78.5,529 L147,569.186414 L147,648.311216 L78.5,687 L10,648.311216 L10,569.186414 L78.5,529 Z\"\r\n                                        id=\"Polygon-2\" stroke=\"#EF4A5B\" stroke-width=\"6\" sketch:type=\"MSShapeGroup\">\r\n                                    </path>\r\n                                    <path\r\n                                        d=\"M773,186 L827,217.538705 L827,279.636651 L773,310 L719,279.636651 L719,217.538705 L773,186 Z\"\r\n                                        id=\"Polygon-3\" stroke=\"#795D9C\" stroke-width=\"6\" sketch:type=\"MSShapeGroup\">\r\n                                    </path>\r\n                                    <path\r\n                                        d=\"M639,529 L773,607.846761 L773,763.091627 L639,839 L505,763.091627 L505,607.846761 L639,529 Z\"\r\n                                        id=\"Polygon-4\" stroke=\"#F2773F\" stroke-width=\"6\" sketch:type=\"MSShapeGroup\">\r\n                                    </path>\r\n                                    <path\r\n                                        d=\"M281,801 L383,861.025276 L383,979.21169 L281,1037 L179,979.21169 L179,861.025276 L281,801 Z\"\r\n                                        id=\"Polygon-5\" stroke=\"#36B455\" stroke-width=\"6\" sketch:type=\"MSShapeGroup\">\r\n                                    </path>\r\n                                </g>\r\n                            </svg>\r\n                            <div class=\"message-box\">\r\n                                <h1>404</h1>\r\n                                <p>Page not found</p>\r\n                                <div class=\"buttons-con\">\r\n                                    <div class=\"action-link-wrap\">\r\n                                        <a onclick=\"history.back(-1)\" class=\"btn btn-info\">Go Back</a>\r\n                                        <a style=\"margin-left: 10px;\" routerLink=\"/instamunch\" class=\"btn btn-primary\">Go to Home Page</a>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n</div>\r\n\r\n\r\n</body>\r\n\r\n"

/***/ }),

/***/ "./src/app/Core/page-not-found/page-not-found.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Core/page-not-found/page-not-found.component.ts ***!
  \*****************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/Core/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/Core/page-not-found/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/Core/sidebar/sidebar.component.css":
/*!****************************************************!*\
  !*** ./src/app/Core/sidebar/sidebar.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvcmUvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Core/sidebar/sidebar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/Core/sidebar/sidebar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-sidebar sidebar-shadow bg-royal sidebar-text-light\">\r\n  <div class=\"app-header__logo\">\r\n      <div class=\"logo-src\"></div>\r\n      <div class=\"header__pane ml-auto\">\r\n          <div>\r\n              <button type=\"button\" class=\"hamburger close-sidebar-btn hamburger--elastic\" data-class=\"closed-sidebar\">\r\n                  <span class=\"hamburger-box\">\r\n                      <span class=\"hamburger-inner\"></span>\r\n                  </span>\r\n              </button>\r\n          </div>\r\n      </div>\r\n  </div>\r\n  <div class=\"app-header__mobile-menu\">\r\n      <div>\r\n          <button type=\"button\" class=\"hamburger hamburger--elastic mobile-toggle-nav\">\r\n              <span class=\"hamburger-box\">\r\n                  <span class=\"hamburger-inner\"></span>\r\n              </span>\r\n          </button>\r\n      </div>\r\n  </div>\r\n  <div class=\"app-header__menu\">\r\n      <span>\r\n          <button type=\"button\" class=\"btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav\">\r\n              <span class=\"btn-icon-wrapper\">\r\n                  <i class=\"fa fa-ellipsis-v fa-w-6\"></i>\r\n              </span>\r\n          </button>\r\n      </span>\r\n  </div>\r\n  <div class=\"scrollbar-sidebar ps ps--active-y\">\r\n      <div class=\"app-sidebar__inner\">\r\n          <ul class=\"vertical-nav-menu\">\r\n              <li class=\"app-sidebar__heading\">Navigation</li>\r\n              <li>\r\n                  <a routerLink='/jeptag' class=\"mm-active\">\r\n                      <i class=\"metismenu-icon icofont-dart\"></i>\r\n                      Dashboard\r\n                  </a>\r\n              </li>\r\n\r\n              <li class=\"app-sidebar__heading\">Inventory Management</li>\r\n              <li>\r\n                  <a>\r\n                  \r\n                      <i class=\"metismenu-icon icofont-briefcase\"></i> Inventories\r\n                      <i class=\"metismenu-state-icon icofont-plus\"></i>\r\n                  </a>\r\n                  <ul>\r\n                      <li> <a routerLink='products'> <i class=\"metismenu-icon\"></i> Products </a></li>\r\n                      <li> <a routerLink='stores'> <i class=\"metismenu-icon\"></i> Stores </a></li>\r\n                      <li> <a routerLink='categories'> <i class=\"metismenu-icon\"></i> Categories </a></li>\r\n                      <li> <a routerLink='subcategories'> <i class=\"metismenu-icon\"></i> Subcategories </a></li>\r\n                      <li> <a routerLink='tags'> <i class=\"metismenu-icon\"></i> Tags </a></li>\r\n\r\n                      <li> <a routerLink='brands'> <i class=\"metismenu-icon\"></i> Brands </a></li>\r\n\r\n                      <!-- <li> <a routerLink='event'> <i class=\"metismenu-icon\"></i> Events </a></li> -->\r\n\r\n                      <!-- <li> <a href=\"\"> <i class=\"metismenu-icon\"></i> Deals & Promotions </a></li> -->\r\n                  </ul>\r\n              </li>\r\n\r\n<!-- \r\n              <li>\r\n                  <a routerLink='order'>\r\n                      <i class=\"metismenu-icon icofont-cart\"></i> Orders -->\r\n\r\n\r\n                      <!-- <i class=\"metismenu-state-icon icofont-plus\"></i> -->\r\n                  <!-- </a> -->\r\n                  <!-- <ul>\r\n                      <li> <a href=\"\"> <i class=\"metismenu-icon\"></i> Value1 </a></li>\r\n                      <li> <a href=\"\"> <i class=\"metismenu-icon\"></i> Value2 </a></li>\r\n\r\n                  </ul> -->\r\n              <!-- </li> -->\r\n\r\n             \r\n\r\n\r\n              <!-- <li class=\"app-sidebar__heading\">Menu Management</li>\r\n              <li>\r\n                  <a href=\"#\">\r\n                      <i class=\"metismenu-icon icofont-bulb-alt\"></i>\r\n                      Main Menu\r\n                      <i class=\"metismenu-state-icon icofont-plus\"></i>\r\n                  </a>\r\n                  <ul>\r\n                      <li>\r\n                          <a href=\"\">\r\n                              <i class=\"metismenu-icon\"></i>\r\n                              Menu Items\r\n                          </a>\r\n                      </li>\r\n                      <li>\r\n                          <a href=\"\">\r\n                              <i class=\"metismenu-icon\">\r\n                              </i>Menu Deals\r\n                          </a>\r\n                      </li>\r\n\r\n                  </ul>\r\n              </li> -->\r\n\r\n              <!-- <li class=\"app-sidebar__heading\">Finance</li>\r\n              <li>\r\n                  <a routerLink='expense'>\r\n                      <i class=\"metismenu-icon icofont-money\"></i>\r\n                      Expense\r\n                  </a>\r\n              </li> -->\r\n\r\n              <li class=\"app-sidebar__heading\">User Management</li>\r\n              <li>\r\n                  <a routerLink='user'>\r\n                      <i class=\"metismenu-icon icofont-users-alt-3\"></i>\r\n                      All Users\r\n                  </a>\r\n              </li>\r\n              <!-- <li>\r\n                  <a href=\"#\">\r\n                      <i class=\"metismenu-icon icofont-bulb-alt\"></i>\r\n                      Staff Record\r\n                  </a>\r\n              </li> -->\r\n\r\n              <!-- <li class=\"app-sidebar__heading\">Analytics</li>\r\n              <li>\r\n                  <a>\r\n                      <i class=\"metismenu-icon icofont-bulb-alt\"></i>\r\n                      Report\r\n                      <i class=\"metismenu-state-icon icofont-plus\"></i>\r\n                  </a>\r\n                  <ul>\r\n                      <li>\r\n                          <a routerLink=\"sales-report\">\r\n                              <i class=\"metismenu-icon\"></i>\r\n                              Sale Report\r\n                          </a>\r\n                      </li>\r\n                      <li>\r\n                          <a href=\"\">\r\n                              <i class=\"metismenu-icon\">\r\n                              </i>Staff Report\r\n                          </a>\r\n                      </li>\r\n\r\n                  </ul>\r\n              </li> -->\r\n              <!-- <li>\r\n                  <a href=\"#\">\r\n                      <i class=\"metismenu-icon icofont-attachment\"></i>\r\n                      Customers Log\r\n                  </a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"\">\r\n                      <i class=\"metismenu-icon icofont-drag3\"></i>\r\n                      Monthly Report\r\n                  </a>\r\n              </li> -->\r\n\r\n\r\n          </ul>\r\n      </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/Core/sidebar/sidebar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/Core/sidebar/sidebar.component.ts ***!
  \***************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/Core/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/Core/sidebar/sidebar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/Core/verification/verification.component.css":
/*!**************************************************************!*\
  !*** ./src/app/Core/verification/verification.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvcmUvdmVyaWZpY2F0aW9uL3ZlcmlmaWNhdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Core/verification/verification.component.html":
/*!***************************************************************!*\
  !*** ./src/app/Core/verification/verification.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <form novalidate #f=\"ngForm\" (ngSubmit)=\"f.form.valid && onSubmit()\">\n  <input [(ngModel)]=\"model.username\" name=\"email\" placeholder=\"email\" />\n  <input [(ngModel)]=\"model.password\" name=\"password\" placeholder=\"passoword\" />\n  <button type=\"submit\">Login</button>\n</form> -->\n\n<body class=\"dashboard \" style=\"background-size:100%; \">\n\n\n  <div class=\"app-main\">\n    <div class=\"app-main__outer\">\n      <div class=\"\">\n\n        <div class=\"h-100 bg-plum-plate1 bg-animation\">\n          <div class=\"d-flex h-100 justify-content-center align-items-center\">\n            <div class=\"mx-auto app-login-box col-md-3\">\n              <div class=\"modal-dialog w-100 mx-auto\">\n                <div class=\"modal-content\">\n                  <form novalidate #f=\"ngForm\" (ngSubmit)=\"f.form.valid && onSubmit()\">\n                    <div class=\"modal-body\">\n                      <mat-progress-bar *ngIf=\"loginPressed\"  mode=\"indeterminate\"></mat-progress-bar>\n                      <div class=\" modal-title text-center mb-3\">\n                        <div class=\"app-logo-inverse mx-auto mb-3 mt-2 text-center\"> <img\n                            src=\"assets/images/ic_logo.PNG\" height=\"150\" /> </div>\n\n                        <h4 class=\"mt-2\">\n                          <div> Email Verification </div>\n                        </h4>\n\n\n\n                      </div>\n                      <br />\n                      <!-- <?php include(\"_form.php\") ?> -->\n                     \n                      <div class=\"form-row\">\n                        <div class=\"col-md-12\">\n                          <div class=\"position-relative form-group\"><input [(ngModel)]=\"model.username\" name=\"email\"\n                              placeholder=\"email\" id=\"exampleEmail\" type=\"email\" placeholder=\"Email here...\"\n                              class=\"form-control\"></div>\n                        </div>\n                       \n                        <!-- <div class=\"col-md-12\">\n                          <div class=\"position-relative form-group\"><input [(ngModel)]=\"model.password\" name=\"password\"\n                              id=\"examplePassword\" placeholder=\"Password here...\" type=\"password\" class=\"form-control\">\n                          </div>\n                        </div> -->\n                      </div>\n                      <!-- <h6 class=\"mt-2\">                \n                          <a routerLink='/forgetPassword' class=\"mm-active\">Forget Password?</a>                 \n                      </h6> -->\n                      <p style=\"color: red;\" *ngIf=\"loginError\">{{error_message}}</p>\n\n                      \n                    </div>\n                  \n                    <div class=\"modal-footer1 clearfix\">\n                  \n                      <button class=\"btn btn-primary btn-lg btn-block\" type=\"submit\"> Verify code</button>\n    \n\n                    </div>\n                  </form>\n                </div>\n              </div>\n              <div class=\"text-center text-white opacity-8 mt-3\">Copyright © 2020 </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n</body>"

/***/ }),

/***/ "./src/app/Core/verification/verification.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/Core/verification/verification.component.ts ***!
  \*************************************************************/
/*! exports provided: VerificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationComponent", function() { return VerificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Jeptag_admin_Services_forget_password_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../Jeptag-admin/Services/forget-password.service */ "./src/app/Jeptag-admin/Services/forget-password.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Shared/swalAlerts */ "./src/app/Shared/swalAlerts.ts");





var VerificationComponent = /** @class */ (function () {
    function VerificationComponent(ForgetPasswordService, router) {
        this.ForgetPasswordService = ForgetPasswordService;
        this.router = router;
        this.model = {};
        this.loaded = false;
    }
    VerificationComponent.prototype.ngOnInit = function () {
        this.code = this.ForgetPasswordService.getCode();
        console.log("CODE", this.code);
    };
    VerificationComponent.prototype.onSubmit = function () {
        var _this = this;
        //   let categories = this.productService.getCategories();
        console.log("USERNAME" + this.model['username']);
        var verify = this.ForgetPasswordService.verifyEmail(this.model['username']);
        verify.subscribe(function (result) {
            console.log("VERIFY RESULT :" + result);
            _this.result = result['result'];
            console.log('product by id:', result);
            if (result != null) {
                //  this.generateForm(this.product);
            }
            else {
                _this.loaded = true;
                _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_4__["SwalAlert"].errorAlert('', "Can not get the product");
            }
        }, function (err) {
            console.log(err);
            _this.loaded = true;
        });
    };
    VerificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-verification',
            template: __webpack_require__(/*! ./verification.component.html */ "./src/app/Core/verification/verification.component.html"),
            styles: [__webpack_require__(/*! ./verification.component.css */ "./src/app/Core/verification/verification.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Jeptag_admin_Services_forget_password_service__WEBPACK_IMPORTED_MODULE_1__["ForgetPasswordService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], VerificationComponent);
    return VerificationComponent;
}());



/***/ }),

/***/ "./src/app/Jeptag-admin/Options/product.ts":
/*!*************************************************!*\
  !*** ./src/app/Jeptag-admin/Options/product.ts ***!
  \*************************************************/
/*! exports provided: status, Approved, Status, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "status", function() { return status; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Approved", function() { return Approved; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return Status; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "language", function() { return language; });
var status = [
    { id: 'online', name: 'Online' },
    { id: 'offline', name: 'Offline' }
];
var Approved = [
    { id: 'true', name: 'True' },
    { id: 'false', name: 'False' }
];
var Status = [
    { id: 'true', name: 'True' },
    { id: 'false', name: 'False' }
];
var language = [
    { id: 'EN', name: 'EN' },
    { id: 'VI', name: 'VI' }
];
// export const status = [
//     { id: 'admin', name: 'Admin' },
//     { id: 'user', name: 'User' }
// ]


/***/ }),

/***/ "./src/app/Jeptag-admin/Options/staff.ts":
/*!***********************************************!*\
  !*** ./src/app/Jeptag-admin/Options/staff.ts ***!
  \***********************************************/
/*! exports provided: StaffType, SalaryDisbursement, experience, JobShift, countries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffType", function() { return StaffType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaryDisbursement", function() { return SalaryDisbursement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "experience", function() { return experience; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobShift", function() { return JobShift; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countries", function() { return countries; });
var StaffType = [
    { id: 'admin', name: 'Admin' },
    { id: 'user', name: 'User' }
    // { id: 'manager', name: 'Manager' },
    // { id: 'waiter', name: 'Waiter' },
    // { id: 'staff', name: 'Staff' },
    // { id: 'kitchen_manager', name: 'Kitchen Manager' },
];
// user_type_dict = {'admin': 1, 'user': 2, 'guest': 3, 'manager': 4, 'waiter': 5, 'staff': 6, 'kitchen_manager':7}
var SalaryDisbursement = [
    { id: 'Hourly', name: 'Hourly' },
    { id: 'Daily', name: 'Daily' },
    { id: 'Weekly', name: 'Weekly' },
    { id: 'Monthly', name: 'Monthly' }
];
//salary_disbursement = ChoiceField(choices=['Hourly', 'Daily', 'Weekly', 'Monthly'], required=True, allow_null=False)
var experience = [
    { id: 'No Experience', name: 'No Experience' },
    { id: 'Entry Level', name: 'Entry Level' },
    { id: 'Intermediate', name: 'Intermediate' },
    { id: 'Professional', name: 'Professional' }
];
//experience = ChoiceField(choices=['No Experience', 'Entry Level', 'Intermediate', 'Professional']
var JobShift = [
    { id: "AF", name: "Afghanistan" },
    { id: "AX", name: "Åland Islands" }
];
var countries = [
    { id: "AF", name: "Afghanistan" },
    { id: "AX", name: "Åland Islands" },
    { id: "AL", name: "Albania" },
    { id: "DZ", name: "Algeria" },
    { id: "AD", name: "Andorra" },
    { id: "AO", name: "Angola" },
    { id: "AI", name: "Anguilla" },
    { id: "AQ", name: "Antarctica" },
    { id: "AG", name: "Antigua and Barbuda" },
    { id: "AR", name: "Argentina" },
    { id: "AM", name: "Armenia" },
    { id: "AW", name: "Aruba" },
    { id: "AU", name: "Australia" },
    { id: "AT", name: "Austria" },
    { id: "AZ", name: "Azerbaijan" },
    { id: "BS", name: "Bahamas" },
    { id: "BH", name: "Bahrain" },
    { id: "BD", name: "Bangladesh" },
    { id: "BB", name: "Barbados" },
    { id: "BY", name: "Belarus" },
    { id: "BE", name: "Belgium" },
    { id: "PW", name: "Belau" },
    { id: "BZ", name: "Belize" },
    { id: "BJ", name: "Benin" },
    { id: "BM", name: "Bermuda" },
    { id: "BT", name: "Bhutan" },
    { id: "BO", name: "Bolivia" },
    { id: "BQ", name: "Bonaire" },
    { id: "BA", name: "Bosnia and Herzegovina" },
    { id: "BW", name: "Botswana" },
    { id: "BV", name: "Bouvet Island" },
    { id: "BR", name: "Brazil" },
    { id: "IO", name: "British Indian Ocean Territory" },
    { id: "VG", name: "British Virgin Islands" },
    { id: "BN", name: "Brunei" },
    { id: "BG", name: "Bulgaria" },
    { id: "BF", name: "Burkina Faso" },
    { id: "BI", name: "Burundi" },
    { id: "KH", name: "Cambodia" },
    { id: "CM", name: "Cameroon" },
    { id: "CA", name: "Canada" },
    { id: "CV", name: "Cape Verde" },
    { id: "KY", name: "Cayman Islands" },
    { id: "CF", name: "Central African Republic" },
    { id: "TD", name: "Chad" },
    { id: "CL", name: "Chile" },
    { id: "CN", name: "China" },
    { id: "CX", name: "Christmas Island" },
    { id: "CC", name: "Cocos (Keeling) Islands" },
    { id: "CO", name: "Colombia" },
    { id: "KM", name: "Comoros" },
    { id: "CG", name: "Congo (Brazzaville)" },
    { id: "CD", name: "Congo (Kinshasa)" },
    { id: "CK", name: "Cook Islands" },
    { id: "CR", name: "Costa Rica" },
    { id: "HR", name: "Croatia" },
    { id: "CU", name: "Cuba" },
    { id: "CW", name: "CuraÇao" },
    { id: "CY", name: "Cyprus" },
    { id: "CZ", name: "Czech Republic" },
    { id: "DK", name: "Denmark" },
    { id: "DJ", name: "Djibouti" },
    { id: "DM", name: "Dominica" },
    { id: "DO", name: "Dominican Republic" },
    { id: "EC", name: "Ecuador" },
    { id: "EG", name: "Egypt" },
    { id: "SV", name: "El Salvador" },
    { id: "GQ", name: "Equatorial Guinea" },
    { id: "ER", name: "Eritrea" },
    { id: "EE", name: "Estonia" },
    { id: "ET", name: "Ethiopia" },
    { id: "FK", name: "Falkland Islands" },
    { id: "FO", name: "Faroe Islands" },
    { id: "FJ", name: "Fiji" },
    { id: "FI", name: "Finland" },
    { id: "FR", name: "France" },
    { id: "GF", name: "French Guiana" },
    { id: "PF", name: "French Polynesia" },
    { id: "TF", name: "French Southern Territories" },
    { id: "GA", name: "Gabon" },
    { id: "GM", name: "Gambia" },
    { id: "GE", name: "Georgia" },
    { id: "DE", name: "Germany" },
    { id: "GH", name: "Ghana" },
    { id: "GI", name: "Gibraltar" },
    { id: "GR", name: "Greece" },
    { id: "GL", name: "Greenland" },
    { id: "GD", name: "Grenada" },
    { id: "GP", name: "Guadeloupe" },
    { id: "GT", name: "Guatemala" },
    { id: "GG", name: "Guernsey" },
    { id: "GN", name: "Guinea" },
    { id: "GW", name: "Guinea-Bissau" },
    { id: "GY", name: "Guyana" },
    { id: "HT", name: "Haiti" },
    { id: "HM", name: "Heard Island and McDonald Islands" },
    { id: "HN", name: "Honduras" },
    { id: "HK", name: "Hong Kong" },
    { id: "HU", name: "Hungary" },
    { id: "IS", name: "Iceland" },
    { id: "IN", name: "India" },
    { id: "ID", name: "Indonesia" },
    { id: "IR", name: "Iran" },
    { id: "IQ", name: "Iraq" },
    { id: "IE", name: "Republic of Ireland" },
    { id: "IM", name: "Isle of Man" },
    { id: "IL", name: "Israel" },
    { id: "IT", name: "Italy" },
    { id: "CI", name: "Ivory Coast" },
    { id: "JM", name: "Jamaica" },
    { id: "JP", name: "Japan" },
    { id: "JE", name: "Jersey" },
    { id: "JO", name: "Jordan" },
    { id: "KZ", name: "Kazakhstan" },
    { id: "KE", name: "Kenya" },
    { id: "KI", name: "Kiribati" },
    { id: "KW", name: "Kuwait" },
    { id: "KG", name: "Kyrgyzstan" },
    { id: "LA", name: "Laos" },
    { id: "LV", name: "Latvia" },
    { id: "LB", name: "Lebanon" },
    { id: "LS", name: "Lesotho" },
    { id: "LR", name: "Liberia" },
    { id: "LY", name: "Libya" },
    { id: "LI", name: "Liechtenstein" },
    { id: "LT", name: "Lithuania" },
    { id: "LU", name: "Luxembourg" },
    { id: "MO", name: "Macao S.A.R." },
    { id: "MK", name: "Macedonia" },
    { id: "MG", name: "Madagascar" },
    { id: "MW", name: "Malawi" },
    { id: "MY", name: "Malaysia" },
    { id: "MV", name: "Maldives" },
    { id: "ML", name: "Mali" },
    { id: "MT", name: "Malta" },
    { id: "MH", name: "Marshall Islands" },
    { id: "MQ", name: "Martinique" },
    { id: "MR", name: "Mauritania" },
    { id: "MU", name: "Mauritius" },
    { id: "YT", name: "Mayotte" },
    { id: "MX", name: "Mexico" },
    { id: "FM", name: "Micronesia" },
    { id: "MD", name: "Moldova" },
    { id: "MC", name: "Monaco" },
    { id: "MN", name: "Mongolia" },
    { id: "ME", name: "Montenegro" },
    { id: "MS", name: "Montserrat" },
    { id: "MA", name: "Morocco" },
    { id: "MZ", name: "Mozambique" },
    { id: "MM", name: "Myanmar" },
    { id: "NA", name: "Namibia" },
    { id: "NR", name: "Nauru" },
    { id: "NP", name: "Nepal" },
    { id: "NL", name: "Netherlands" },
    { id: "AN", name: "Netherlands Antilles" },
    { id: "NC", name: "New Caledonia" },
    { id: "NZ", name: "New Zealand" },
    { id: "NI", name: "Nicaragua" },
    { id: "NE", name: "Niger" },
    { id: "NG", name: "Nigeria" },
    { id: "NU", name: "Niue" },
    { id: "NF", name: "Norfolk Island" },
    { id: "KP", name: "North Korea" },
    { id: "NO", name: "Norway" },
    { id: "OM", name: "Oman" },
    { id: "PK", name: "Pakistan" },
    { id: "PS", name: "Palestinian Territory" },
    { id: "PA", name: "Panama" },
    { id: "PG", name: "Papua New Guinea" },
    { id: "PY", name: "Paraguay" },
    { id: "PE", name: "Peru" },
    { id: "PH", name: "Philippines" },
    { id: "PN", name: "Pitcairn" },
    { id: "PL", name: "Poland" },
    { id: "PT", name: "Portugal" },
    { id: "QA", name: "Qatar" },
    { id: "RE", name: "Reunion" },
    { id: "RO", name: "Romania" },
    { id: "RU", name: "Russia" },
    { id: "RW", name: "Rwanda" },
    { id: "BL", name: "Saint Barthélemy" },
    { id: "SH", name: "Saint Helena" },
    { id: "KN", name: "Saint Kitts and Nevis" },
    { id: "LC", name: "Saint Lucia" },
    { id: "MF", name: "Saint Martin (French part)" },
    { id: "SX", name: "Saint Martin (Dutch part)" },
    { id: "PM", name: "Saint Pierre and Miquelon" },
    { id: "VC", name: "Saint Vincent and the Grenadines" },
    { id: "SM", name: "San Marino" },
    { id: "ST", name: "São Tomé and Príncipe" },
    { id: "SA", name: "Saudi Arabia" },
    { id: "SN", name: "Senegal" },
    { id: "RS", name: "Serbia" },
    { id: "SC", name: "Seychelles" },
    { id: "SL", name: "Sierra Leone" },
    { id: "SG", name: "Singapore" },
    { id: "SK", name: "Slovakia" },
    { id: "SI", name: "Slovenia" },
    { id: "SB", name: "Solomon Islands" },
    { id: "SO", name: "Somalia" },
    { id: "ZA", name: "South Africa" },
    { id: "GS", name: "South Georgia/Sandwich Islands" },
    { id: "KR", name: "South Korea" },
    { id: "SS", name: "South Sudan" },
    { id: "ES", name: "Spain" },
    { id: "LK", name: "Sri Lanka" },
    { id: "SD", name: "Sudan" },
    { id: "SR", name: "Suriname" },
    { id: "SJ", name: "Svalbard and Jan Mayen" },
    { id: "SZ", name: "Swaziland" },
    { id: "SE", name: "Sweden" },
    { id: "CH", name: "Switzerland" },
    { id: "SY", name: "Syria" },
    { id: "TW", name: "Taiwan" },
    { id: "TJ", name: "Tajikistan" },
    { id: "TZ", name: "Tanzania" },
    { id: "TH", name: "Thailand" },
    { id: "TL", name: "Timor-Leste" },
    { id: "TG", name: "Togo" },
    { id: "TK", name: "Tokelau" },
    { id: "TO", name: "Tonga" },
    { id: "TT", name: "Trinidad and Tobago" },
    { id: "TN", name: "Tunisia" },
    { id: "TR", name: "Turkey" },
    { id: "TM", name: "Turkmenistan" },
    { id: "TC", name: "Turks and Caicos Islands" },
    { id: "TV", name: "Tuvalu" },
    { id: "UG", name: "Uganda" },
    { id: "UA", name: "Ukraine" },
    { id: "AE", name: "United Arab Emirates" },
    { id: "GB", name: "United Kingdom (UK)" },
    { id: "US", name: "United States (US)" },
    { id: "UY", name: "Uruguay" },
    { id: "UZ", name: "Uzbekistan" },
    { id: "VU", name: "Vanuatu" },
    { id: "VA", name: "Vatican" },
    { id: "VE", name: "Venezuela" },
    { id: "VN", name: "Vietnam" },
    { id: "WF", name: "Wallis and Futuna" },
    { id: "EH", name: "Western Sahara" },
    { id: "WS", name: "Western Samoa" },
    { id: "YE", name: "Yemen" },
    { id: "ZM", name: "Zambia" },
    { id: "ZW", name: "Zimbabwe" }
];


/***/ }),

/***/ "./src/app/Jeptag-admin/Products/add-product/add-product.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/Jeptag-admin/Products/add-product/add-product.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0plcHRhZy1hZG1pbi9Qcm9kdWN0cy9hZGQtcHJvZHVjdC9hZGQtcHJvZHVjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Jeptag-admin/Products/add-product/add-product.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/Jeptag-admin/Products/add-product/add-product.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-main__outer\">\n  <div class=\"app-main__inner\">\n    <div class=\"app-page-title\">\n      <div class=\"page-title-wrapper\">\n        <div class=\"page-title-heading\">\n          <div class=\"page-title-icon bg-warning text-white\">\n            <i class=\"icofont-dashboard-web  \">\n            </i>\n          </div>\n          <div> Product Managment\n            <div class=\"page-title-subheading\">Product listing\n            </div>\n          </div>\n        </div>\n        <div class=\"page-title-actions\">\n\n          <div class=\"d-inline-block dropdown\">\n            <a (click)=\"navigateToProductListing()\" class=\"border-0 btn-transition btn btn-outline-focus\">\n              <i class=\"icofont-arrow-left\"></i> back to list\n            </a>\n            <!-- <a href=\"product-all.php\" class=\"btn-shadow  btn btn-info\">\n              <i class=\"icofont-save\"></i> Save Product\n            </a>\n            <button type=\"button\" class=\"btn-shadow  btn btn-primary\">\n\n              <i class=\"icofont-save\"></i> Save and Continue Edit\n            </button>\n            <button type=\"button\" class=\"btn-shadow  btn btn-success\">\n\n              <i class=\"icofont-ui-copy\"></i> Copy Product\n            </button> -->\n            \n            <button *ngIf=\"edit\" disabled style=\"margin-left: 5px;\" type=\"button\" class=\"btn-shadow  btn btn-danger\">\n              <i class=\"icofont-trash\"></i> Delete\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-12 col-lg-12\">\n        <ul class=\"body-tabs body-tabs-layout tabs-animated body-tabs-animated nav\">\n          <li class=\"nav-item\">\n            <a role=\"tab\" class=\"nav-link active\" id=\"tab-0\" data-toggle=\"tab\" href=\"#tab-content-0\">\n              <span>Product Information</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a role=\"tab\" class=\"nav-link\" id=\"tab-1\" data-toggle=\"tab\" href=\"#tab-content-1\">\n              <span>Product Pictures</span>\n            </a>\n          </li>\n          <!-- <li class=\"nav-item\">\n            <a role=\"tab\" class=\"nav-link\" id=\"tab-1\" data-toggle=\"tab\" href=\"#tab-content-2\">\n              <span>Product Pricing</span>\n            </a>\n          </li> -->\n        </ul>\n        <div class=\"card mb-3\">\n\n          <div class=\"tab-content\">\n            <div class=\"tab-pane show active\" id=\"tab-content-0\" role=\"tabpanel\">\n              <div class=\"card\">\n                <mat-progress-bar *ngIf=\"!loaded\" mode=\"indeterminate\"></mat-progress-bar>\n                <app-form [clear_form]=\"clear_form\" [submit_clicked]=\"submit_clicked\" (formValues)=\"getproduct($event)\"\n                  [form]=form>\n                </app-form>\n                <!-- <div class=\"card-body\">\n\n\n                  <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                      <div class=\"position-relative form-group\">\n                        <label class=\"\">Category name</label>\n                        <input type=\"text\" placeholder=\"...\" class=\"form-control\" value=\"Beef Burger\">\n                      </div>\n                    </div>\n                    <div class=\"col-lg-4\">\n\n                      <div class=\"position-relative form-group\">\n                        <label for=\"exampleCustomSelect\" class=\"\">Parent Category</label>\n                        <select type=\"select\" class=\"custom-select\">\n                          <option value=\"\">Select</option>\n                          <option>Burger</option>\n                          <option>Value 2</option>\n                          <option>Value 3</option>\n                          <option>Value 4</option>\n                          <option>Value 5</option>\n                        </select>\n                      </div>\n                    </div>\n                    <div class=\"col-lg-4\">\n                      <div class=\"position-relative form-group\">\n                        <label for=\"exampleCustomSelect\" class=\"\">Category Type</label>\n                        <select type=\"select\" class=\"custom-select\">\n                          <option value=\"\">Select</option>\n                          <option>Food</option>\n                          <option>Value 2</option>\n                          <option>Value 3</option>\n                          <option>Value 4</option>\n                          <option>Value 5</option>\n                        </select>\n                      </div>\n                    </div>\n\n\n                  </div>\n\n\n                  <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                      <div class=\"position-relative form-group\">\n                        <label class=\"bold\">Spice Level</label>\n                        <div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" checked id=\"check1\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check1\">Normal</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" checked id=\"check2\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check2\">Spicy</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" checkedid=\"check3\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check3\">Extra Spicy</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" id=\"check4\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check4\">Medium</label>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"position-relative form-group\">\n                        <label class=\"bold\">Allergens</label>\n                        <div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" checked id=\"check11\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check11\">Soy</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" id=\"check21\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check21\">Egg</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" id=\"check31\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check31\">Peanut</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" id=\"check41\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check41\">Chicken</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" id=\"check41\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check41\">Chicken</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" id=\"check41\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check41\">Chicken</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" id=\"check41\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check41\">Chicken</label>\n                          </div>\n                        </div>\n                      </div>\n\n\n                      <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                          <div class=\"position-relative form-group\">\n                            <label class=\"\">Kcal Count</label>\n                            <input type=\"text\" placeholder=\"...\" class=\"form-control\">\n                          </div>\n                        </div>\n\n                      </div>\n\n\n                      <div class=\"position-relative form-group\">\n\n                        <div>\n                          <label class=\"bold\">Hot Item</label> <br>\n                          <div class=\"custom-switch custom-control custom-control-inline\">\n                            <input type=\"checkbox\" checked id=\"check4111\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check4111\"> Yes</label>\n                          </div>\n\n                        </div>\n                      </div>\n\n                      <div class=\"position-relative form-group\">\n\n                        <div>\n\n                          <label class=\"bold\">Publish</label><br>\n                          <div class=\"custom-switch custom-control custom-control-inline\">\n                            <input type=\"checkbox\" id=\"check41111\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check41111\"> No</label>\n                          </div>\n                          <span class=\"small text-muted\"> Check to publish this product (visible in store). Uncheck to\n                            unpublish (product not available in store).</span>\n                        </div>\n                      </div>\n                    </div>\n\n                  </div>\n\n\n\n                  <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                      <div class=\"position-relative form-group\">\n                        <label class=\"\">Description</label>\n                        <textarea rows=\"3\" placeholder=\"...\" class=\"form-control\"> A tikki delight: Potato and peas patty topped with veg sauce, ketchup, tomatoes and onions\n\n                                                            </textarea>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"alert alert-info alert-dismissible fade show\" role=\"alert\">\n                    <button type=\"button\" class=\"close\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\n                    Product information successfully added\n                  </div>\n\n\n\n\n\n                </div> -->\n                <!-- <div class=\"d-block text-right card-footer\">\n                  <a href=\"javascript:void(0);\" class=\"btn-wide btn btn-success\">Save</a>\n                </div> -->\n              </div>\n\n            </div>\n            <div class=\"tab-pane show\" id=\"tab-content-1\" role=\"tabpanel\">\n              <div class=\"card\">\n                <!-- <div class=\"card-header\">Product Information</div> -->\n                <div class=\"card-body\">\n\n\n                  <div class=\"position-relative form-group\">\n                    <label for=\"exampleFile\" class=\"\">Upload Photo</label>\n                    <input name=\"img\"  id=\"img\" #attachments type=\"file\"  (change)=\"onImageChanged($event)\"  class=\"form-control-file\">\n\n                    <small class=\"form-text text-muted\">Up to 5 images, max 5 MB each.</small>\n                  </div>\n\n\n                      \n\n\n<!-- \n                  <div class=\"table-responsive\">\n                    <table class=\"align-middle  table table-sm1 table-bordered table-striped1 table-hover1\" id=\"example\">\n\n                        <tbody *ngFor='let url of images'> \n                            <tr>\n                                <td class=\"text-left\">\n\n                                    <img id=\"img\" name=\"img\" [src]=\"url\" style=\"max-height: 200px;\" accept=\"image/*\" multiple=\"multiple\" class=\"img-fluid img-thumbnail\"\n                                    type=\"file\">\n\n                                  </td>\n                                <td class=\"text-center\">\n                                    <div class=\"buttons\">\n                                        <a href=\"\" class=\"mb-2 mr-2 btn-transition btn btn-outline-light btn-sm\">Edit</a>\n                                        <button  class=\"mb-2 mr-2 btn-transition btn btn-outline-light btn-sm\">Delete</button>\n                                    </div>\n                                </td>\n                            </tr>\n                          \n                        </tbody>\n                    </table>\n\n                </div> -->\n\n\n                  <div class=\"row\">\n                    <div class=\"col-lg-3\" *ngFor='let url of images;let index = index'>\n                      ​<picture>\n                        <img id=\"img\" name=\"img\" [src]=\"url\" style=\"max-height: 200px;\" accept=\"image/*\" multiple=\"multiple\" class=\"img-fluid img-thumbnail\"\n                                    type=\"file\">\n                        <div class=\"buttons mt-2\">\n                          <button class=\"mb-2 mr-2 btn-transition btn btn-outline-light btn-sm\" (click)=\"removeSelectedFile(index)\">Delete</button>\n                        </div>\n                      </picture>\n\n                    </div>\n                    <!-- <div class=\"col-lg-3\">\n                      ​<picture>\n                        <img src=\"assets/images/product-photo1.png\" class=\"img-fluid img-thumbnail\">\n                        <div class=\"buttons mt-2\">\n                          <button class=\"mb-2 mr-2 btn-transition btn btn-outline-light btn-sm\">Edit</button>\n                          <button class=\"mb-2 mr-2 btn-transition btn btn-outline-light btn-sm\">Delete</button>\n                        </div>\n                      </picture>\n\n                    </div> -->\n                  </div>\n\n\n                </div>\n                <!-- <div class=\"d-block text-right card-footer\">\n                  <a href=\"javascript:void(0);\" class=\"btn-wide btn btn-success\">Save</a>\n                </div> -->\n              </div>\n            </div>\n            <div class=\"tab-pane show\" id=\"tab-content-2\" role=\"tabpanel\">\n              <div class=\"card\">\n                <!-- <div class=\"card-header\">Product Information</div> -->\n                <div class=\"card-body\">\n\n                  <div class=\"row\">\n                    <div class=\"col-lg-3\">\n                      <div class=\"position-relative form-group\">\n                        <label class=\"\">Price</label>\n                        <div class=\"input-group\">\n                          <input placeholder=\"...\" type=\"number\" class=\"form-control\">\n                          <div class=\"input-group-append\">\n                            <span class=\"input-group-text\">£</span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-lg-3\">\n                      <div class=\"position-relative form-group\">\n                        <label class=\"\">Old Price</label>\n                        <div class=\"input-group\">\n                          <input placeholder=\"...\" type=\"number\" class=\"form-control\">\n                          <div class=\"input-group-append\">\n                            <span class=\"input-group-text\">£</span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-lg-3\">\n                      <div class=\"position-relative form-group\">\n                        <label class=\"\">Product Cost</label>\n                        <div class=\"input-group\">\n                          <input placeholder=\"...\" type=\"number\" class=\"form-control\">\n                          <div class=\"input-group-append\">\n                            <span class=\"input-group-text\">£</span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-lg-3\">\n                      <div class=\"position-relative form-group\">\n                        <label class=\"\">Discount </label>\n                        <div class=\"input-group\">\n                          <input placeholder=\"...\" type=\"number\" class=\"form-control\">\n                          <div class=\"input-group-append\">\n                            <span class=\"input-group-text\">%</span>\n                            <span class=\"input-group-text\">£</span>\n\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-lg-3\">\n                      <div class=\"position-relative form-group\">\n                        <label class=\"\">Tax Amount</label>\n                        <div class=\"input-group\">\n                          <input placeholder=\"...\" type=\"number\" class=\"form-control\">\n                          <div class=\"input-group-append\">\n                            <span class=\"input-group-text\">£</span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n\n                  </div>\n\n\n                </div>\n                <div class=\"d-block text-right card-footer\">\n                  <a href=\"javascript:void(0);\" class=\"btn-wide btn btn-success\">Save</a>\n                </div>\n\n              </div>\n\n            </div>\n          </div>\n        </div>\n\n\n      </div>\n\n\n\n\n\n    </div>\n\n\n\n\n  </div>\n\n\n\n\n\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/Jeptag-admin/Products/add-product/add-product.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/Jeptag-admin/Products/add-product/add-product.component.ts ***!
  \****************************************************************************/
/*! exports provided: AddProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductComponent", function() { return AddProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _Services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Services/product.service */ "./src/app/Jeptag-admin/Services/product.service.ts");
/* harmony import */ var _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Shared/swalAlerts */ "./src/app/Shared/swalAlerts.ts");
/* harmony import */ var _Options_product__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Options/product */ "./src/app/Jeptag-admin/Options/product.ts");
/* harmony import */ var src_app_Shared_validation_patterns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/Shared/validation_patterns */ "./src/app/Shared/validation_patterns.ts");






//import { CategoryService } from '../../Services/category.service';



var AddProductComponent = /** @class */ (function () {
    function AddProductComponent(productService, active_route, router) {
        this.productService = productService;
        this.active_route = active_route;
        this.router = router;
        this.images = [];
        this.imagesArray = [];
        this.form = {};
        this.fields = [];
        this.loaded = false;
        this.edit = false;
        this.p = {};
    }
    AddProductComponent.prototype.ngOnInit = function () {
        this.form['form_fields'] = this.fields;
        var product_id = this.active_route.snapshot.paramMap.get('storeid');
        this.email == this.active_route.snapshot.paramMap.get('email');
        // if (product_id != null) {
        //   this.edit = true;
        //   this.loaded = true;
        //   this.getProductDataById(product_id);
        // }
        // else {
        this.edit = false;
        this.loaded = true;
        console.log("add generate form");
        this.generateForm();
        // }
    };
    AddProductComponent.prototype.generateForm = function (product) {
        var _this = this;
        var categories = this.productService.getCategories();
        var brands = this.productService.getBrands();
        var subCategory = this.productService.getSubCategory();
        var result = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(categories, brands, subCategory);
        result.subscribe(function (result) {
            console.log(result);
            _this.fields = [
                { label: 'Product Name', type: 'text', bootstrapGridClass: "col-lg-6", name: "name", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)], required: true, value: product ? product.name : '' },
                {
                    label: 'Status', type: 'select', bootstrapGridClass: "col-lg-6", name: "status", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required], required: true,
                    value: product ? product.status : 'online', options: _Options_product__WEBPACK_IMPORTED_MODULE_7__["status"]
                },
                {
                    label: 'Approved', type: 'select', bootstrapGridClass: "col-lg-6", name: "approved", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required], required: true,
                    value: product ? product.approved : 'true', options: _Options_product__WEBPACK_IMPORTED_MODULE_7__["Approved"]
                },
                { label: 'Website', type: 'text', bootstrapGridClass: "col-lg-6", name: "product_url", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required], required: true, value: product ? product.product_url : '' },
                { label: 'longitude', type: 'number', bootstrapGridClass: "col-lg-6", name: "longitude", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required], required: true, value: product ? product.longitude : '' },
                { label: 'latitude', type: 'number', bootstrapGridClass: "col-lg-6", name: "latitude", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required], required: true, value: product ? product.latitude : '' },
                {
                    label: 'weight', type: 'number', bootstrapGridClass: "col-lg-6", name: "weight", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(src_app_Shared_validation_patterns__WEBPACK_IMPORTED_MODULE_8__["validation_patterns"].postive_numbers)], required: true, value: product ? product.weight : ''
                },
                {
                    label: 'price', type: 'number', bootstrapGridClass: "col-lg-6", name: "price", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(src_app_Shared_validation_patterns__WEBPACK_IMPORTED_MODULE_8__["validation_patterns"].postive_numbers)], required: true, value: product ? product.price : ''
                },
                {
                    label: 'Condition', type: 'text', bootstrapGridClass: "col-lg-6", name: "condition", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required], required: true, value: product ? product.condition : ''
                },
                {
                    label: 'Barcode', type: 'text', bootstrapGridClass: "col-lg-6", name: "barcode_type", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required], required: true, value: product ? product.barcode_type : ''
                },
                {
                    label: 'Address', type: 'text', bootstrapGridClass: "col-lg-6", name: "adress", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required], required: true, value: product ? product.adress : ''
                },
                {
                    label: 'Quantity', type: 'number', bootstrapGridClass: "col-lg-6", name: "alert_quantity", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(src_app_Shared_validation_patterns__WEBPACK_IMPORTED_MODULE_8__["validation_patterns"].postive_numbers)], required: true, value: product ? product.alert_quantity : ''
                },
                {
                    label: 'Category', type: 'ngselectcat', bootstrapGridClass: "col-lg-6", name: "category_id", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required], required: true, value: product ? product.category_id : '', options: result[0]
                },
                {
                    label: 'SubCategory', type: 'ngselectSub', bootstrapGridClass: "col-lg-6", name: "category", value: product ? product.category : '', options: result[2]
                },
                {
                    label: 'Brands', type: 'ngselect2', bootstrapGridClass: "col-lg-12", name: "brand_id", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required], required: true, value: product ? product.brand_id : '', options: result[1]
                },
                {
                    label: 'Description', type: 'textarea', bootstrapGridClass: "col-lg-12", name: "description", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required], required: true, value: product ? product.description : ''
                }
            ];
            _this.form['form_fields'] = _this.fields;
            _this.form['FormbootstrapGridClass'] = 'col-lg-12';
            _this.form['map'] = false;
            _this.form['MapbootstrapGridClass'] = 'col-lg-4';
            _this.form['image'] = false;
            _this.form['ImagebootstrapGridClass'] = 'col-lg-3';
            _this.form['img_height'] = "200px";
            _this.form['img_width'] = "200px";
            _this.form['submit'] = 'Save';
        });
        console.log("save clicked");
    };
    AddProductComponent.prototype.getProductDataById = function (id) {
        var _this = this;
        var product = this.productService.getProuctById(id);
        product.subscribe(function (result) {
            _this.product = result['result'];
            console.log('product by id:', result);
            if (result != null) {
                _this.generateForm(_this.product);
            }
            else {
                _this.loaded = true;
                _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert('', "Can not get the product");
            }
        }, function (err) {
            console.log(err);
            _this.loaded = true;
        });
    };
    AddProductComponent.prototype.getproduct = function (data) {
        data['image'] = this.images;
        data['model'] = "products";
        console.log("clickedddddd");
        data['store_id'] = this.active_route.snapshot.paramMap.get('storeid');
        data['seller_id'] = this.active_route.snapshot.paramMap.get('userid');
        data['email'] = this.active_route.snapshot.paramMap.get('email');
        this.clear_form = false;
        this.submit_clicked = true;
        console.log("dataaaaaaaa" + data);
        console.log("edit value" + this.edit);
        // if (this.edit) {
        //   console.log("In edit method");
        //   const product_id = this.active_route.snapshot.paramMap.get('id');
        //   this.editProduct(data, product_id);
        // }
        // else {
        console.log("In aaded method");
        this.addProduct(data);
        //   }
    };
    AddProductComponent.prototype.editProduct = function (data, id) {
        var _this = this;
        this.productService.editProduct(data, id).subscribe(function (result) {
            _this.submit_clicked = false;
            if (!result['error']) {
                _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].sucessAlert('', 'Product Updated Sucesssfully!');
            }
            else {
                _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert('', result['message'].charAt(0).toUpperCase() + result['message'].substring(1));
            }
            console.log(result);
        }, function (err) {
            _this.submit_clicked = false;
            console.log(err);
            _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert('', 'Server Error');
        });
    };
    AddProductComponent.prototype.addProduct = function (data) {
        var _this = this;
        console.log("clickedddddd add");
        this.productService.addProduct(data).subscribe(function (result) {
            _this.submit_clicked = false;
            if (result['status']) {
                _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].sucessAlert('', 'Product Added Sucesssfully!');
                _this.clear_form = true;
                _this.images = [];
                _this.attachment.nativeElement.value = '';
            }
            else {
                _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert('', "Product not Added");
            }
            console.log(result);
        }, function (err) {
            _this.submit_clicked = false;
            console.log(err);
            _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert('', 'Server Error');
        });
    };
    AddProductComponent.prototype.FormatAttributesList = function (data) {
        var _this = this;
        var attributes_list = {};
        console.log(data);
        data.forEach(function (element) {
            console.log(element, element.value);
            element.value = element.value.split(',');
            element['is_selected'] = _this.formatSelected(element.value.length);
        });
        attributes_list = data;
        return attributes_list;
    };
    AddProductComponent.prototype.formatSelected = function (length) {
        var is_selected = [];
        for (var i = 0; i < length; i++) {
            is_selected.push(false);
        }
        return is_selected;
    };
    AddProductComponent.prototype.navigateToProductListing = function () {
        this.router.navigate(['/jeptag/stores/products', this.active_route.snapshot.paramMap.get('storeid'), this.active_route.snapshot.paramMap.get('userid'), this.active_route.snapshot.paramMap.get('email')]);
    };
    AddProductComponent.prototype.onImageChanged = function (event) {
        var _this = this;
        console.log("inside the image method");
        if (event.target.files && event.target.files[0]) {
            var filesAmount = event.target.files.length;
            console.log("length" + event.target.files);
            // for (let i = 0; i < event.target.files[0].length; i++) {
            //   console.log("Image file indexes :"+event.target.files[0].get(i));
            // }
            for (var i = 0; i < filesAmount; i++) {
                var reader = new FileReader();
                if (event.target.files[0].type.indexOf('image') > -1) {
                    reader.onload = function (event) {
                        _this.images.push(event.target.result);
                    };
                    this.selectedFile = event.target.files[i];
                    //        for (let i = 0; i <  this.selectedFile.size; i++) {
                    //   console.log("Image file indexes :"+this.selectedFile.);
                    // }
                    console.log("this.selectedFile" + this.selectedFile);
                    //var strImage = event.target.result.replace(/^data:image\/[a-z]+;base64,/, "");
                    //  this.imagesArray.push(event.target.files[0]); 
                    // this.convertImage =event.target.result.toString();
                    // var solution = this.convertImage.split("base64,")[1];
                    // console.log("image base",solution);
                    for (var i_1 = 0; i_1 < this.imagesArray.length; i_1++) {
                        console.log("ccc", this.imagesArray[i_1]);
                    }
                    reader.readAsDataURL(event.target.files[i]);
                }
                else {
                    _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert('', "Please select Image only");
                }
            }
        }
    };
    AddProductComponent.prototype.removeSelectedFile = function (index) {
        // Delete the item from images url list
        this.images.splice(index, 1);
        // delete file from FileList
        this.imagesArray.splice(index, 1);
        this.attachment.nativeElement.value = '';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('attachments'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddProductComponent.prototype, "attachment", void 0);
    AddProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-product',
            template: __webpack_require__(/*! ./add-product.component.html */ "./src/app/Jeptag-admin/Products/add-product/add-product.component.html"),
            styles: [__webpack_require__(/*! ./add-product.component.css */ "./src/app/Jeptag-admin/Products/add-product/add-product.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AddProductComponent);
    return AddProductComponent;
}());



/***/ }),

/***/ "./src/app/Jeptag-admin/Products/edit-products/edit-products.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/Jeptag-admin/Products/edit-products/edit-products.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0plcHRhZy1hZG1pbi9Qcm9kdWN0cy9lZGl0LXByb2R1Y3RzL2VkaXQtcHJvZHVjdHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/Jeptag-admin/Products/edit-products/edit-products.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/Jeptag-admin/Products/edit-products/edit-products.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-main__outer\">\n  <div class=\"app-main__inner\">\n    <div class=\"app-page-title\">\n      <div class=\"page-title-wrapper\">\n        <div class=\"page-title-heading\">\n          <div class=\"page-title-icon bg-warning text-white\">\n            <i class=\"icofont-dashboard-web  \">\n            </i>\n          </div>\n          <div> Product Managment\n            <div class=\"page-title-subheading\">Product listing\n            </div>\n          </div>\n        </div>\n        <div class=\"page-title-actions\">\n\n          <div class=\"d-inline-block dropdown\">\n            <!-- <a (click)=\"navigateToProductListing()\" class=\"border-0 btn-transition btn btn-outline-focus\">\n              <i class=\"icofont-arrow-left\"></i> back to list\n            </a> -->\n            <!-- <a href=\"product-all.php\" class=\"btn-shadow  btn btn-info\">\n              <i class=\"icofont-save\"></i> Save Product\n            </a>\n            <button type=\"button\" class=\"btn-shadow  btn btn-primary\">\n\n              <i class=\"icofont-save\"></i> Save and Continue Edit\n            </button>\n            <button type=\"button\" class=\"btn-shadow  btn btn-success\">\n\n              <i class=\"icofont-ui-copy\"></i> Copy Product\n            </button> -->\n            \n            <!-- <button *ngIf=\"edit\" disabled style=\"margin-left: 5px;\" type=\"button\" class=\"btn-shadow  btn btn-danger\">\n              <i class=\"icofont-trash\"></i> Delete\n            </button> -->\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-12 col-lg-12\">\n        <ul class=\"body-tabs body-tabs-layout tabs-animated body-tabs-animated nav\">\n          <li class=\"nav-item\">\n            <a role=\"tab\" class=\"nav-link active\" id=\"tab-0\" data-toggle=\"tab\" href=\"#tab-content-0\">\n              <span>Product Information</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a role=\"tab\" class=\"nav-link\" id=\"tab-1\" data-toggle=\"tab\" href=\"#tab-content-1\">\n              <span>Product Pictures</span>\n            </a>\n          </li>\n          <!-- <li class=\"nav-item\">\n            <a role=\"tab\" class=\"nav-link\" id=\"tab-1\" data-toggle=\"tab\" href=\"#tab-content-2\">\n              <span>Product Pricing</span>\n            </a>\n          </li> -->\n        </ul>\n        <div class=\"card mb-3\">\n\n          <div class=\"tab-content\">\n            <div class=\"tab-pane show active\" id=\"tab-content-0\" role=\"tabpanel\">\n              <div class=\"card\">\n                <mat-progress-bar *ngIf=\"!loaded\" mode=\"indeterminate\"></mat-progress-bar>\n                <app-form [clear_form]=\"clear_form\" [submit_clicked]=\"submit_clicked\" (formValues)=\"getproduct($event)\"\n                  [form]=form>\n                </app-form>\n                <!-- <div class=\"card-body\">\n\n\n                  <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                      <div class=\"position-relative form-group\">\n                        <label class=\"\">Category name</label>\n                        <input type=\"text\" placeholder=\"...\" class=\"form-control\" value=\"Beef Burger\">\n                      </div>\n                    </div>\n                    <div class=\"col-lg-4\">\n\n                      <div class=\"position-relative form-group\">\n                        <label for=\"exampleCustomSelect\" class=\"\">Parent Category</label>\n                        <select type=\"select\" class=\"custom-select\">\n                          <option value=\"\">Select</option>\n                          <option>Burger</option>\n                          <option>Value 2</option>\n                          <option>Value 3</option>\n                          <option>Value 4</option>\n                          <option>Value 5</option>\n                        </select>\n                      </div>\n                    </div>\n                    <div class=\"col-lg-4\">\n                      <div class=\"position-relative form-group\">\n                        <label for=\"exampleCustomSelect\" class=\"\">Category Type</label>\n                        <select type=\"select\" class=\"custom-select\">\n                          <option value=\"\">Select</option>\n                          <option>Food</option>\n                          <option>Value 2</option>\n                          <option>Value 3</option>\n                          <option>Value 4</option>\n                          <option>Value 5</option>\n                        </select>\n                      </div>\n                    </div>\n\n\n                  </div>\n\n\n                  <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                      <div class=\"position-relative form-group\">\n                        <label class=\"bold\">Spice Level</label>\n                        <div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" checked id=\"check1\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check1\">Normal</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" checked id=\"check2\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check2\">Spicy</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" checkedid=\"check3\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check3\">Extra Spicy</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" id=\"check4\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check4\">Medium</label>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"position-relative form-group\">\n                        <label class=\"bold\">Allergens</label>\n                        <div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" checked id=\"check11\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check11\">Soy</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" id=\"check21\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check21\">Egg</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" id=\"check31\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check31\">Peanut</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" id=\"check41\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check41\">Chicken</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" id=\"check41\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check41\">Chicken</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" id=\"check41\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check41\">Chicken</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" id=\"check41\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check41\">Chicken</label>\n                          </div>\n                        </div>\n                      </div>\n\n\n                      <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                          <div class=\"position-relative form-group\">\n                            <label class=\"\">Kcal Count</label>\n                            <input type=\"text\" placeholder=\"...\" class=\"form-control\">\n                          </div>\n                        </div>\n\n                      </div>\n\n\n                      <div class=\"position-relative form-group\">\n\n                        <div>\n                          <label class=\"bold\">Hot Item</label> <br>\n                          <div class=\"custom-switch custom-control custom-control-inline\">\n                            <input type=\"checkbox\" checked id=\"check4111\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check4111\"> Yes</label>\n                          </div>\n\n                        </div>\n                      </div>\n\n                      <div class=\"position-relative form-group\">\n\n                        <div>\n\n                          <label class=\"bold\">Publish</label><br>\n                          <div class=\"custom-switch custom-control custom-control-inline\">\n                            <input type=\"checkbox\" id=\"check41111\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check41111\"> No</label>\n                          </div>\n                          <span class=\"small text-muted\"> Check to publish this product (visible in store). Uncheck to\n                            unpublish (product not available in store).</span>\n                        </div>\n                      </div>\n                    </div>\n\n                  </div>\n\n\n\n                  <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                      <div class=\"position-relative form-group\">\n                        <label class=\"\">Description</label>\n                        <textarea rows=\"3\" placeholder=\"...\" class=\"form-control\"> A tikki delight: Potato and peas patty topped with veg sauce, ketchup, tomatoes and onions\n\n                                                            </textarea>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"alert alert-info alert-dismissible fade show\" role=\"alert\">\n                    <button type=\"button\" class=\"close\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\n                    Product information successfully added\n                  </div>\n\n\n\n\n\n                </div> -->\n                <!-- <div class=\"d-block text-right card-footer\">\n                  <a href=\"javascript:void(0);\" class=\"btn-wide btn btn-success\">Save</a>\n                </div> -->\n              </div>\n\n            </div>\n            <div class=\"tab-pane show\" id=\"tab-content-1\" role=\"tabpanel\">\n              <div class=\"card\">\n                <!-- <div class=\"card-header\">Product Information</div> -->\n                <div class=\"card-body\">\n\n\n                  <div class=\"position-relative form-group\">\n                    <label for=\"exampleFile\" class=\"\">Upload Photo</label>\n                    <input name=\"img\"  id=\"img\" #attachments type=\"file\"  (change)=\"onImageChanged($event)\"  class=\"form-control-file\">\n\n                    <small class=\"form-text text-muted\">Up to 5 images, max 5 MB each.</small>\n                  </div>\n\n\n                      \n\n\n<!-- \n                  <div class=\"table-responsive\">\n                    <table class=\"align-middle  table table-sm1 table-bordered table-striped1 table-hover1\" id=\"example\">\n\n                        <tbody *ngFor='let url of images'> \n                            <tr>\n                                <td class=\"text-left\">\n\n                                    <img id=\"img\" name=\"img\" [src]=\"url\" style=\"max-height: 200px;\" accept=\"image/*\" multiple=\"multiple\" class=\"img-fluid img-thumbnail\"\n                                    type=\"file\">\n\n                                  </td>\n                                <td class=\"text-center\">\n                                    <div class=\"buttons\">\n                                        <a href=\"\" class=\"mb-2 mr-2 btn-transition btn btn-outline-light btn-sm\">Edit</a>\n                                        <button  class=\"mb-2 mr-2 btn-transition btn btn-outline-light btn-sm\">Delete</button>\n                                    </div>\n                                </td>\n                            </tr>\n                          \n                        </tbody>\n                    </table>\n\n                </div> -->\n\n\n                  <div class=\"row\">\n                    <div class=\"col-lg-3\" *ngFor='let url of images;let index = index'>\n                      ​<picture>\n                        <img id=\"img\" name=\"img\" [src]=\"url\" style=\"max-height: 200px;\" accept=\"image/*\" multiple=\"multiple\" class=\"img-fluid img-thumbnail\"\n                                    type=\"file\">\n                        <div class=\"buttons mt-2\">\n                          <button class=\"mb-2 mr-2 btn-transition btn btn-outline-light btn-sm\" (click)=\"removeSelectedFile(index)\">Delete</button>\n                        </div>\n                      </picture>\n\n                    </div>\n                    <!-- <div class=\"col-lg-3\">\n                      ​<picture>\n                        <img src=\"assets/images/product-photo1.png\" class=\"img-fluid img-thumbnail\">\n                        <div class=\"buttons mt-2\">\n                          <button class=\"mb-2 mr-2 btn-transition btn btn-outline-light btn-sm\">Edit</button>\n                          <button class=\"mb-2 mr-2 btn-transition btn btn-outline-light btn-sm\">Delete</button>\n                        </div>\n                      </picture>\n\n                    </div> -->\n                  </div>\n\n\n                </div>\n                <!-- <div class=\"d-block text-right card-footer\">\n                  <a href=\"javascript:void(0);\" class=\"btn-wide btn btn-success\">Save</a>\n                </div> -->\n              </div>\n            </div>\n            <div class=\"tab-pane show\" id=\"tab-content-2\" role=\"tabpanel\">\n              <div class=\"card\">\n                <!-- <div class=\"card-header\">Product Information</div> -->\n                <div class=\"card-body\">\n\n                  <div class=\"row\">\n                    <div class=\"col-lg-3\">\n                      <div class=\"position-relative form-group\">\n                        <label class=\"\">Price</label>\n                        <div class=\"input-group\">\n                          <input placeholder=\"...\" type=\"number\" class=\"form-control\">\n                          <div class=\"input-group-append\">\n                            <span class=\"input-group-text\">£</span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-lg-3\">\n                      <div class=\"position-relative form-group\">\n                        <label class=\"\">Old Price</label>\n                        <div class=\"input-group\">\n                          <input placeholder=\"...\" type=\"number\" class=\"form-control\">\n                          <div class=\"input-group-append\">\n                            <span class=\"input-group-text\">£</span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-lg-3\">\n                      <div class=\"position-relative form-group\">\n                        <label class=\"\">Product Cost</label>\n                        <div class=\"input-group\">\n                          <input placeholder=\"...\" type=\"number\" class=\"form-control\">\n                          <div class=\"input-group-append\">\n                            <span class=\"input-group-text\">£</span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-lg-3\">\n                      <div class=\"position-relative form-group\">\n                        <label class=\"\">Discount </label>\n                        <div class=\"input-group\">\n                          <input placeholder=\"...\" type=\"number\" class=\"form-control\">\n                          <div class=\"input-group-append\">\n                            <span class=\"input-group-text\">%</span>\n                            <span class=\"input-group-text\">£</span>\n\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-lg-3\">\n                      <div class=\"position-relative form-group\">\n                        <label class=\"\">Tax Amount</label>\n                        <div class=\"input-group\">\n                          <input placeholder=\"...\" type=\"number\" class=\"form-control\">\n                          <div class=\"input-group-append\">\n                            <span class=\"input-group-text\">£</span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n\n                  </div>\n\n\n                </div>\n                <div class=\"d-block text-right card-footer\">\n                  <a href=\"javascript:void(0);\" class=\"btn-wide btn btn-success\">Save</a>\n                </div>\n\n              </div>\n\n            </div>\n          </div>\n        </div>\n\n\n      </div>\n\n\n\n\n\n    </div>\n\n\n\n\n  </div>\n\n\n\n\n\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/Jeptag-admin/Products/edit-products/edit-products.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/Jeptag-admin/Products/edit-products/edit-products.component.ts ***!
  \********************************************************************************/
/*! exports provided: EditProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProductsComponent", function() { return EditProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _Services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Services/product.service */ "./src/app/Jeptag-admin/Services/product.service.ts");
/* harmony import */ var _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Shared/swalAlerts */ "./src/app/Shared/swalAlerts.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _Options_product__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Options/product */ "./src/app/Jeptag-admin/Options/product.ts");
/* harmony import */ var src_app_Shared_validation_patterns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/Shared/validation_patterns */ "./src/app/Shared/validation_patterns.ts");






//import { CategoryService } from '../../Services/category.service';




var EditProductsComponent = /** @class */ (function () {
    function EditProductsComponent(productService, sanitizer, active_route, router) {
        this.productService = productService;
        this.sanitizer = sanitizer;
        this.active_route = active_route;
        this.router = router;
        this.images = [];
        this.imagesDisplay = [];
        this.imagesArray = [];
        //sanitizer:DomSanitizer;
        this.form = {};
        this.fields = [];
        this.loaded = false;
        this.edit = false;
        this.p = {};
    }
    EditProductsComponent.prototype.ngOnInit = function () {
        this.form['form_fields'] = this.fields;
        var product_id = this.active_route.snapshot.paramMap.get('id');
        if (product_id != null) {
            this.edit = true;
            this.loaded = true;
            this.getProductDataById(product_id);
        }
        else {
            this.edit = false;
            this.loaded = true;
            console.log("add generate form");
            this.generateForm();
        }
    };
    EditProductsComponent.prototype.generateForm = function (product) {
        var _this = this;
        console.log("category id :" + product.category_id + "  " + product.category);
        var categories = this.productService.getCategories();
        var brands = this.productService.getBrands();
        var subCategory = this.productService.getSubCategory();
        var result = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(categories, brands, subCategory);
        result.subscribe(function (result) {
            console.log(result);
            _this.fields = [
                { label: 'Product Name', type: 'text', bootstrapGridClass: "col-lg-6", name: "name", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)], required: true, value: product ? product.name : '' },
                {
                    label: 'Status', type: 'select', bootstrapGridClass: "col-lg-6", name: "status", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required], required: true,
                    value: product ? product.status : 'online', options: _Options_product__WEBPACK_IMPORTED_MODULE_8__["status"]
                },
                {
                    label: 'Approved', type: 'select', bootstrapGridClass: "col-lg-6", name: "approved", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required], required: true,
                    value: product ? product.approved : 'active', options: _Options_product__WEBPACK_IMPORTED_MODULE_8__["Approved"]
                },
                { label: 'Website', type: 'text', bootstrapGridClass: "col-lg-6", name: "product_url", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required], required: true, value: product ? product.product_url : '' },
                { label: 'longitude', type: 'number', bootstrapGridClass: "col-lg-6", name: "longitude", required: true, value: product ? product.longitude : '' },
                { label: 'latitude', type: 'number', bootstrapGridClass: "col-lg-6", name: "latitude", required: true, value: product ? product.latitude : '' },
                {
                    label: 'weight', type: 'number', bootstrapGridClass: "col-lg-6", name: "weight", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(src_app_Shared_validation_patterns__WEBPACK_IMPORTED_MODULE_9__["validation_patterns"].postive_numbers)], required: true, value: product ? product.weight : ''
                },
                {
                    label: 'price', type: 'number', bootstrapGridClass: "col-lg-6", name: "price", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(src_app_Shared_validation_patterns__WEBPACK_IMPORTED_MODULE_9__["validation_patterns"].postive_numbers)], required: true, value: product ? product.price : ''
                },
                {
                    label: 'Condition', type: 'text', bootstrapGridClass: "col-lg-6", name: "condition", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required], required: true, value: product ? product.condition : ''
                },
                {
                    label: 'Barcode', type: 'text', bootstrapGridClass: "col-lg-6", name: "barcode_type", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required], required: true, value: product ? product.barcode_type : ''
                },
                {
                    label: 'Address', type: 'text', bootstrapGridClass: "col-lg-6", name: "adress", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required], required: true, value: product ? product.adress : ''
                },
                {
                    label: 'Quantity', type: 'number', bootstrapGridClass: "col-lg-6", name: "alert_quantity", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(src_app_Shared_validation_patterns__WEBPACK_IMPORTED_MODULE_9__["validation_patterns"].postive_numbers)], required: true, value: product ? product.alert_quantity : ''
                },
                {
                    label: 'Category', type: 'ngselectcat', bootstrapGridClass: "col-lg-6", name: "category_id", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required], required: true, value: product ? product.category_id : '', options: result[0]
                },
                {
                    label: 'SubCategory', type: 'ngselectSub2', bootstrapGridClass: "col-lg-6", name: "category", required: true, value: product ? product.category : '', options: product.category_id
                },
                {
                    label: 'Brands', type: 'ngselect2', bootstrapGridClass: "col-lg-12", name: "brand_id", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required], required: true, value: product ? product.brand_id : '', options: result[1]
                },
                {
                    label: 'Description', type: 'textarea', bootstrapGridClass: "col-lg-12", name: "description", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required], required: true, value: product ? product.description : ''
                }
            ];
            _this.form['form_fields'] = _this.fields;
            _this.form['FormbootstrapGridClass'] = 'col-lg-12';
            _this.form['map'] = false;
            _this.form['MapbootstrapGridClass'] = 'col-lg-4';
            _this.form['image'] = false;
            _this.form['ImagebootstrapGridClass'] = 'col-lg-3';
            _this.form['img_height'] = "200px";
            _this.form['img_width'] = "200px";
            _this.form['submit'] = 'Save';
        });
        this.images = product.image;
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
        console.log("save clicked");
    };
    EditProductsComponent.prototype.getProductDataById = function (id) {
        var _this = this;
        var product = this.productService.getProuctById(id);
        product.subscribe(function (result) {
            _this.product = result['result'];
            console.log('product by id:', result);
            if (result != null) {
                _this.generateForm(_this.product);
            }
            else {
                _this.loaded = true;
                _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert('', "Can not get the product");
            }
        }, function (err) {
            console.log(err);
            _this.loaded = true;
        });
    };
    EditProductsComponent.prototype.getproduct = function (data) {
        data['image'] = this.images;
        data['model'] = "products";
        console.log("clickedddddd");
        this.clear_form = false;
        this.submit_clicked = true;
        console.log("dataaaaaaaa" + data);
        console.log("edit value" + this.edit);
        if (this.edit) {
            console.log("In edit method");
            var product_id = this.active_route.snapshot.paramMap.get('id');
            this.editProduct(data, product_id);
        }
        else {
            console.log("In aaded method");
            this.addProduct(data);
        }
    };
    EditProductsComponent.prototype.editProduct = function (data, id) {
        var _this = this;
        // data['image']=this.images;
        data['model'] = "products";
        data['email'] = this.active_route.snapshot.paramMap.get('email');
        this.productService.editProduct(data, id).subscribe(function (result) {
            _this.submit_clicked = false;
            if (result['status']) {
                _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].sucessAlert('', 'Product Updated Sucesssfully!');
            }
            else {
                _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert('', "Unsucessful");
            }
            console.log(result);
        }, function (err) {
            _this.submit_clicked = false;
            console.log(err);
            _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert('', 'Server Error');
        });
    };
    EditProductsComponent.prototype.addProduct = function (data) {
        var _this = this;
        console.log("clickedddddd add");
        this.productService.addProduct(data).subscribe(function (result) {
            _this.submit_clicked = false;
            if (result['status']) {
                _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].sucessAlert('', 'Product Added Sucesssfully!');
                _this.clear_form = true;
                _this.images = [];
                _this.attachment.nativeElement.value = '';
            }
            else {
                _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert('', "Product not Added");
            }
            console.log(result);
        }, function (err) {
            _this.submit_clicked = false;
            console.log(err);
            _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert('', 'Server Error');
        });
    };
    EditProductsComponent.prototype.FormatAttributesList = function (data) {
        var _this = this;
        var attributes_list = {};
        console.log(data);
        data.forEach(function (element) {
            console.log(element, element.value);
            element.value = element.value.split(',');
            element['is_selected'] = _this.formatSelected(element.value.length);
        });
        attributes_list = data;
        return attributes_list;
    };
    EditProductsComponent.prototype.formatSelected = function (length) {
        var is_selected = [];
        for (var i = 0; i < length; i++) {
            is_selected.push(false);
        }
        return is_selected;
    };
    EditProductsComponent.prototype.navigateToProductListing = function () {
        this.router.navigate(['jeptag/products']);
    };
    EditProductsComponent.prototype.onImageChanged = function (event) {
        var _this = this;
        console.log("inside the image method");
        if (event.target.files && event.target.files[0]) {
            var filesAmount = event.target.files.length;
            console.log("length" + event.target.files);
            // for (let i = 0; i < event.target.files[0].length; i++) {
            //   console.log("Image file indexes :"+event.target.files[0].get(i));
            // }
            for (var i = 0; i < filesAmount; i++) {
                var reader = new FileReader();
                if (event.target.files[0].type.indexOf('image') > -1) {
                    reader.onload = function (event) {
                        // this.imagesDisplay.push(event.target.result);
                        _this.images.push(event.target.result);
                    };
                    this.selectedFile = event.target.files[i];
                    //        for (let i = 0; i <  this.selectedFile.size; i++) {
                    //   console.log("Image file indexes :"+this.selectedFile.);
                    // }
                    console.log("this.selectedFile" + this.selectedFile);
                    //var strImage = event.target.result.replace(/^data:image\/[a-z]+;base64,/, "");
                    //  this.imagesArray.push(event.target.files[0]); 
                    // this.convertImage =event.target.result.toString();
                    // var solution = this.convertImage.split("base64,")[1];
                    // console.log("image base",solution);
                    for (var i_1 = 0; i_1 < this.imagesArray.length; i_1++) {
                        console.log("ccc", this.imagesArray[i_1]);
                    }
                    reader.readAsDataURL(event.target.files[i]);
                }
                else {
                    _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert('', "Please select Image only");
                }
            }
        }
    };
    EditProductsComponent.prototype.removeSelectedFile = function (index) {
        // Delete the item from images url list
        this.images.splice(index, 1);
        // delete file from FileList
        this.imagesArray.splice(index, 1);
        this.attachment.nativeElement.value = '';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('attachments'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditProductsComponent.prototype, "attachment", void 0);
    EditProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-products',
            template: __webpack_require__(/*! ./edit-products.component.html */ "./src/app/Jeptag-admin/Products/edit-products/edit-products.component.html"),
            styles: [__webpack_require__(/*! ./edit-products.component.css */ "./src/app/Jeptag-admin/Products/edit-products/edit-products.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EditProductsComponent);
    return EditProductsComponent;
}());



/***/ }),

/***/ "./src/app/Jeptag-admin/Products/product-listing/product-listing.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/Jeptag-admin/Products/product-listing/product-listing.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0plcHRhZy1hZG1pbi9Qcm9kdWN0cy9wcm9kdWN0LWxpc3RpbmcvcHJvZHVjdC1saXN0aW5nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Jeptag-admin/Products/product-listing/product-listing.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/Jeptag-admin/Products/product-listing/product-listing.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-main__outer\">\n  <div class=\"app-main__inner\">\n    <div class=\"app-page-title\">\n      <div class=\"page-title-wrapper\">\n        <div class=\"page-title-heading\">\n          <div class=\"page-title-icon bg-warning text-white\">\n            <i class=\"icofont-dashboard-web  \">\n            </i>\n          </div>\n          <div> Products Managment\n            <div class=\"page-title-subheading\">Products listing\n            </div>\n          </div>\n        </div>\n        <div class=\"page-title-actions\">\n\n          <div class=\"d-inline-block dropdown\">\n            <a *ngIf=!add style=\"margin-left: 4px;color: white;\" class=\"btn-shadow  btn btn-info\" (click)=\"navigateToStaffAdd()\">\n              <i class=\"icofont-ui-add\"></i> Add New\n            </a>\n            <!-- <div class=\"btn-group \">\n              <button style=\"margin-left: 4px;\" type=\"button\" class=\"btn  btn-secondary\"><i class=\"icofont-upload-alt\"></i> Export</button>\n              <button type=\"button\" class=\"btn m btn-secondary dropdown-toggle dropdown-toggle-split\"\n                data-toggle=\"dropdown\"></button>\n              <div class=\"dropdown-menu\">\n                <a class=\"dropdown-item\" href=\"#\">Download PDF</a>\n                <a class=\"dropdown-item\" href=\"#\">Export to Excel</a>\n\n              </div>\n            </div>\n            <button style=\"margin-left: 4px;\" type=\"button\" class=\"btn  btn-secondary\"> <i class=\"icofont-download-alt\"></i> Import </button> -->\n\n            <!-- <button (click)=\"deleteMultipleStaff()\" style=\"margin-left: 4px;\" type=\"button\"\n              class=\"btn-shadow  btn btn-danger\">\n              <i class=\"icofont-trash\"></i> Delete Selected\n            </button> -->\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n\n        <h4 class=\"d-flex flex-wrap justify-content-between align-items-center mb-3\">\n          <div>Products</div>\n          <!-- <div class=\"col-12 col-md-3 p-0 mb-3\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n          </div> -->\n        </h4>\n        <div class=\"main-card mb-3 card\">\n          <!-- <div class=\"card-header\">Products\n                                        <div class=\"btn-actions-pane-right\">\n                                            <div role=\"group\" class=\"btn-group-sm btn-group\">\n                                                <button class=\"active btn btn-focus\">Received </button>\n                                                <button class=\"btn btn-focus\">Pending</button>\n                                            </div>\n                                        </div>\n                                    </div> -->\n          <mat-progress-bar *ngIf=\"!loaded\" mode=\"indeterminate\"></mat-progress-bar>\n          <div class=\"card-body\">\n\n            <div class=\"table-responsive\">\n              <mat-form-field style=\"width: 100%;\">\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search...\">\n                <!-- (keyup)=\"applyFilter($event.target.value)\" -->\n              </mat-form-field>\n\n              <div class=\"mat-elevation-z8\">\n                <div class=\"example-container\">\n                  <table mat-table [dataSource]=\"dataSource\" style=\"width: 100%;\">\n                    <div>\n                      <!-- <ng-container matColumnDef=\"select\">\n                        <th mat-header-cell *matHeaderCellDef>\n                          <mat-checkbox color=\"primary\" (change)=\"$event ? masterToggle() : null\"\n                            [checked]=\"selection.hasValue() && isAllSelected()\"\n                            [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n                          </mat-checkbox>\n                        </th>\n                        <td mat-cell *matCellDef=\"let row\">\n                          <mat-checkbox color=\"primary\" (click)=\"$event.stopPropagation()\"\n                            (change)=\"checkboxClicked($event,row)\" [checked]=\"selection.isSelected(row)\">\n                          </mat-checkbox>\n                        </td>\n                      </ng-container> -->\n\n                      <!-- <ng-container matColumnDef=\"job_title\">\n                        <th mat-header-cell *matHeaderCellDef>Job Title </th>\n                        <td mat-cell *matCellDef=\"let element\"> <img style=\"width: 30px; height: 30px;\"\n                            [src]=\"element.user_image!=null ? element.user_image : '../../../assets/images/no_image.png'\" />\n                        </td>\n                      </ng-container> -->\n\n                      <ng-container matColumnDef=\"name\" sticky>\n                        <th mat-header-cell *matHeaderCellDef> Name  </th>\n                        <td mat-cell *matCellDef=\"let element\">\n                          <span> {{element.name }} </span>\n                         \n                        </td>\n                      </ng-container>\n\n                      <!-- <ng-container matColumnDef=\"description\" sticky>\n                        <th mat-header-cell *matHeaderCellDef> description </th>\n                        <td mat-cell *matCellDef=\"let element\">\n                          <span> {{element.description }} </span>\n                         \n                        </td>\n                      </ng-container> -->\n\n                     <ng-container style=\"margin-right: 10px;\" matColumnDef=\"status\">\n                        <th mat-header-cell *matHeaderCellDef> Type </th>\n                        <td mat-cell *matCellDef=\"let element\">\n                          <span class=\"badge\" [ngClass]=\"{\n                            'badge-info':element.status === 'online',\n                            'badge-warning':element.status === 'offline'\n                           \n                          }\"> {{element.status | removeUnderScore | titlecase}}</span>\n\n                        </td>\n                      </ng-container>\n\n                      <ng-container style=\"margin-right: 10px;\" matColumnDef=\"approved\">\n                        <th mat-header-cell *matHeaderCellDef> status </th>\n                        <td mat-cell *matCellDef=\"let element\">\n                          <span class=\"badge\" [ngClass]=\"{\n                            'badge-info':element.approved === 'false',\n                            'badge-warning':element.approved === 'true'\n                           \n                          }\"> {{element.approved | removeUnderScore | titlecase}}</span>\n\n                        </td>\n                      </ng-container>\n\n                      <ng-container matColumnDef=\"alert_quantity\">\n                        <th mat-header-cell *matHeaderCellDef> Quantity </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.alert_quantity}} </td>\n                      </ng-container>\n\n                      <!-- <ng-container matColumnDef=\"position\">\n                        <th mat-header-cell *matHeaderCellDef> Position </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n                      </ng-container>\n\n                      <ng-container matColumnDef=\"Salary\">\n                        <th mat-header-cell *matHeaderCellDef> Salary </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.salary}} </td>\n                      </ng-container>\n                      <ng-container matColumnDef=\"weekly_hours\">\n                        <th mat-header-cell *matHeaderCellDef> Weekly hours </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.weekly_hours}} </td>\n                      </ng-container>\n\n                      <ng-container matColumnDef=\"location\">\n                        <th mat-header-cell *matHeaderCellDef> Location </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.location}} </td>\n                      </ng-container> -->\n\n                      <ng-container matColumnDef=\"actions\">\n                        <th mat-header-cell *matHeaderCellDef> Actions </th>\n                        <td mat-cell *matCellDef=\"let element\">\n                          <div class=\"buttons\">\n                            <a  *ngIf=!add style=\"color: #8f8f8f;\" (click)=\"getProductId(element._id,'edit')\"\n                              class=\"mb-2 mr-2 btn-transition btn btn-outline-light btn-sm\">Edit</a>\n                            <button  (click)=\"getProductId(element._id,'delete')\"\n                              class=\"mb-2 mr-2 btn-transition btn btn-outline-light btn-sm\">Delete</button>\n                          </div>\n                        </td>\n                      </ng-container>\n\n\n                    </div>\n                    <tr mat-header-row *matHeaderRowDef=\"table_headers\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: table_headers;\"></tr>\n                  </table>\n                </div>\n                <mat-paginator #paginator [pageSize]=\"10\" showFirstLastButtons [pageSizeOptions]=\"[10,50,100,500]\">\n                </mat-paginator>\n\n              </div>\n            </div>\n          </div>\n\n\n        </div>\n      </div>\n\n    </div>\n\n\n  </div>\n\n\n\n\n\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/Jeptag-admin/Products/product-listing/product-listing.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/Jeptag-admin/Products/product-listing/product-listing.component.ts ***!
  \************************************************************************************/
/*! exports provided: ProductListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListingComponent", function() { return ProductListingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _Services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Services/product.service */ "./src/app/Jeptag-admin/Services/product.service.ts");
/* harmony import */ var src_app_Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Shared/swalAlerts */ "./src/app/Shared/swalAlerts.ts");







var ProductListingComponent = /** @class */ (function () {
    function ProductListingComponent(ProductService, router, currentActivatedRoute) {
        this.ProductService = ProductService;
        this.router = router;
        this.currentActivatedRoute = currentActivatedRoute;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]([]);
        this.initialSelection = [];
        this.allowMultiSelect = true;
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["SelectionModel"](this.allowMultiSelect, this.initialSelection);
        this.table_headers = [];
        this.data = [];
        this.loaded = false;
        this.productData = {};
        this.staff_ids = [];
        this.add = false;
    }
    ProductListingComponent.prototype.ngOnInit = function () {
        this.table_headers = ['name', 'status', 'alert_quantity', 'approved', 'actions'];
        var storeid = this.currentActivatedRoute.snapshot.paramMap.get('storeid');
        if (storeid != null) {
            this.add = false;
            this.getProductsListbyID(this.currentActivatedRoute.snapshot.paramMap.get('storeid'));
        }
        else {
            this.add = true;
            this.getProductList();
        }
    };
    ProductListingComponent.prototype.getProductList = function () {
        var _this = this;
        var staff = this.ProductService.getJobs();
        staff.subscribe(function (result) {
            console.log('product list:', result);
            if (result != null) {
                _this.staff = result;
                _this.dataSource.data = _this.staff;
                _this.dataSource.connect().next(_this.staff);
                _this.dataSource.paginator = _this.paginator;
            }
            else {
                // SwalAlert.errorAlert('', result['message'].charAt(0).toUpperCase() + result['message'].substring(1));
                src_app_Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert('', "Error");
            }
            _this.loaded = true;
            _this.selection.clear();
        }, function (err) {
            _this.loaded = true;
            console.error(err);
        });
    };
    ProductListingComponent.prototype.getProductsListbyID = function (id) {
        var _this = this;
        var staff = this.ProductService.getProductsByID(id);
        staff.subscribe(function (result) {
            console.log('product list:', result);
            if (result != null) {
                _this.staff = result;
                _this.dataSource.data = _this.staff;
                _this.dataSource.connect().next(_this.staff);
                _this.dataSource.paginator = _this.paginator;
            }
            else {
                // SwalAlert.errorAlert('', result['message'].charAt(0).toUpperCase() + result['message'].substring(1));
                src_app_Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert('', "Error");
            }
            _this.loaded = true;
            _this.selection.clear();
        }, function (err) {
            _this.loaded = true;
            console.error(err);
        });
    };
    ProductListingComponent.prototype.getProductId = function (product_id, action) {
        this.productData['model'] = 'products';
        this.productData['_id'] = product_id;
        console.log('job id', product_id);
        if (action == 'edit')
            this.router.navigate(['/jeptag/products/edit', product_id, this.currentActivatedRoute.snapshot.paramMap.get('email')]);
        else {
            this.deleteStaffById(this.productData);
        }
    };
    ProductListingComponent.prototype.deleteStaffById = function (productData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var response;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, src_app_Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].getDeleteSwal()];
                    case 1:
                        response = _a.sent();
                        if (response == true) {
                            this.loaded = false;
                            this.ProductService.deleteById(productData).subscribe(function (result) {
                                if (!result['error']) {
                                    src_app_Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].sucessAlert('', 'Product Deleted Successfully!');
                                    if (_this.add) {
                                        _this.getProductList();
                                    }
                                    else {
                                        _this.getProductsListbyID(_this.currentActivatedRoute.snapshot.paramMap.get('storeid'));
                                    }
                                }
                                else {
                                    _this.loaded = true;
                                    src_app_Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert('', result['message'].charAt(0).toUpperCase() + result['message'].substring(1));
                                }
                            }, function (err) {
                                _this.loaded = true;
                                console.error(err);
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductListingComponent.prototype.deleteMultipleStaff = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var response;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.staff_ids.length > 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, src_app_Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].getDeleteSwal()];
                    case 1:
                        response = _a.sent();
                        if (response == true) {
                            this.loaded = false;
                            this.ProductService.deleteMultipeStaff(this.staff_ids).subscribe(function (result) {
                                if (!result['error']) {
                                    src_app_Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].sucessAlert('', 'Staff Deleted Successfully!');
                                    _this.getProductList();
                                }
                                else {
                                    _this.loaded = true;
                                    src_app_Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert('', result['message'].charAt(0).toUpperCase() + result['message'].substring(1));
                                }
                            }, function (err) {
                                _this.loaded = true;
                                console.error(err);
                            });
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        src_app_Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert('', 'Please Select Staff to Delete!');
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProductListingComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    ProductListingComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected == numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    ProductListingComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
        this.staff_ids = this.getIdsFromSelectionArrayObject(this.selection.selected);
        // console.log(this.selection);
    };
    // $event ? selection.toggle(row) : null
    ProductListingComponent.prototype.checkboxClicked = function (event, row) {
        if (event) {
            this.selection.toggle(row);
        }
        else
            null;
        this.staff_ids = this.getIdsFromSelectionArrayObject(this.selection.selected);
        // console.log(this.selection);
    };
    ProductListingComponent.prototype.navigateToStaffAdd = function () {
        //this.router.navigate(['add'], { relativeTo: this.currentActivatedRoute });
        this.router.navigate(['jeptag/stores/products/add', this.currentActivatedRoute.snapshot.paramMap.get('storeid'), this.currentActivatedRoute.snapshot.paramMap.get('userid'), this.currentActivatedRoute.snapshot.paramMap.get('email')]);
    };
    ProductListingComponent.prototype.navigateToStaffListing = function () {
        this.router.navigate(['instamunch/staff']);
    };
    ProductListingComponent.prototype.getIdsFromSelectionArrayObject = function (array_of_objects) {
        var ids = array_of_objects.map(function (a) { return a.id; });
        return ids;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], ProductListingComponent.prototype, "paginator", void 0);
    ProductListingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-listing',
            template: __webpack_require__(/*! ./product-listing.component.html */ "./src/app/Jeptag-admin/Products/product-listing/product-listing.component.html"),
            styles: [__webpack_require__(/*! ./product-listing.component.css */ "./src/app/Jeptag-admin/Products/product-listing/product-listing.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ProductListingComponent);
    return ProductListingComponent;
}());



/***/ }),

/***/ "./src/app/Jeptag-admin/Reports/sales/sales.component.css":
/*!****************************************************************!*\
  !*** ./src/app/Jeptag-admin/Reports/sales/sales.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0plcHRhZy1hZG1pbi9SZXBvcnRzL3NhbGVzL3NhbGVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Jeptag-admin/Reports/sales/sales.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/Jeptag-admin/Reports/sales/sales.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"app-main__outer\">\r\n  <div class=\"app-main__inner\">\r\n    <div class=\"app-page-title\">\r\n      <div class=\"page-title-wrapper\">\r\n        <div class=\"page-title-heading\">\r\n          <div class=\"page-title-icon\">\r\n            <i class=\"icofont-dashboard-web \">\r\n            </i>\r\n          </div>\r\n          <div> Dashboard\r\n            <div class=\"page-title-subheading\">Welcome to Jeptags Admin Panel\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"page-title-actions\">\r\n\r\n          <!-- <div class=\"d-inline-block dropdown\">\r\n            <button type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"\r\n              class=\"btn-shadow dropdown-toggle btn btn-info\">\r\n              <span class=\"btn-icon-wrapper pr-2 opacity-7\">\r\n                <i class=\"fa fa-star fa-w-20\"></i>\r\n              </span>\r\n              Today\r\n            </button>\r\n            <div tabindex=\"-1\" role=\"menu\" aria-hidden=\"true\" class=\"dropdown-menu dropdown-menu-right\">\r\n              <ul class=\"nav flex-column\">\r\n                <li class=\"nav-item\">\r\n                  <a href=\"javascript:void(0);\" class=\"nav-link\">\r\n                    <i class=\"nav-link-icon lnr-inbox\"></i>\r\n                    <span>\r\n                      Today\r\n                    </span>\r\n\r\n                  </a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                  <a href=\"javascript:void(0);\" class=\"nav-link\">\r\n                    <i class=\"nav-link-icon lnr-book\"></i>\r\n                    <span>\r\n                      This Week\r\n                    </span>\r\n\r\n                  </a>\r\n                </li>\r\n\r\n              </ul>\r\n            </div>\r\n          </div> -->\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 col-xl-4\">\r\n        <a routerLink='user'>\r\n\r\n        <div class=\"card mb-3 widget-content bg-midnight-bloom\">\r\n          <div class=\"widget-content-wrapper text-white\">\r\n            <div class=\"widget-content-left\">\r\n              <div class=\"widget-heading\">Users</div>\r\n              <div class=\"widget-subheading\">Show Users List</div>\r\n            </div>\r\n            <div class=\"widget-content-right\">\r\n              <!-- <div *ngIf=\"sales_report.overall_summary?.total_orders!='-'; else total_orders\" class=\"widget-numbers text-white\"><span>{{sales_report.overall_summary?.total_orders| number:'1.0-2'}}</span></div> -->\r\n              <!-- <ng-template #total_orders>\r\n                <div class=\"widget-numbers text-white\"><span>{{sales_report.overall_summary?.total_orders}}</span></div>\r\n              </ng-template> -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n        </a>\r\n      </div>\r\n      <div class=\"col-md-6 col-xl-4\">\r\n        <a routerLink='stores'>\r\n        <div class=\"card mb-3 widget-content bg-arielle-smile\">\r\n          <div class=\"widget-content-wrapper text-white\">\r\n            <div class=\"widget-content-left\">\r\n              <div class=\"widget-heading\">Stores</div>\r\n              <div class=\"widget-subheading\">Show Stores List</div>\r\n            </div>\r\n            <div class=\"widget-content-right\">\r\n              <!-- <div *ngIf=\"sales_report.overall_summary?.total_revenue!='-'; else total_revenue\" class=\"widget-numbers text-white\"><span>£ {{sales_report.overall_summary?.total_revenue | number:'1.0-2'}}</span> -->\r\n              <!-- </div> -->\r\n              <!-- <ng-template #total_revenue>\r\n                <div class=\"widget-numbers text-white\"><span>{{sales_report.overall_summary?.total_revenue}}</span></div>\r\n              </ng-template> -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </a>\r\n      </div>\r\n      \r\n      <div class=\"col-md-6 col-xl-4\">\r\n        <a routerLink='products'>\r\n        <div class=\"card mb-3 widget-content bg-grow-early\">\r\n          <div class=\"widget-content-wrapper text-white\">\r\n            <div class=\"widget-content-left\">\r\n              <div class=\"widget-heading\">Products</div>\r\n              <div class=\"widget-subheading\">Show Products List</div>\r\n            </div>\r\n            <div class=\"widget-content-right\">\r\n              <!-- <div *ngIf=\"sales_report.overall_summary?.total_tips!='-'; else total_tips\" class=\"widget-numbers text-white\"><span> £ {{sales_report.overall_summary?.total_tips| number:'1.0-2'}}</span></div> -->\r\n              <!-- <ng-template #total_tips>\r\n                <div class=\"widget-numbers text-white\"><span>{{sales_report.overall_summary?.total_tips}}</span></div>\r\n              </ng-template> -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </a>\r\n      </div>\r\n      <div class=\"d-xl-none d-lg-block col-md-6 col-xl-4\">\r\n        <div class=\"card mb-3 widget-content bg-premium-dark\">\r\n          <div class=\"widget-content-wrapper text-white\">\r\n            <div class=\"widget-content-left\">\r\n              <div class=\"widget-heading\">Stores</div>\r\n              <div class=\"widget-subheading\">All the stores</div>\r\n            </div>\r\n            <div class=\"widget-content-right\">\r\n              <div class=\"widget-numbers text-warning\"><span>$14M</span></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n    <div class=\"row\">\r\n      \r\n    </div>\r\n\r\n\r\n\r\n    \r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-md-6 col-xl-4\">\r\n        <a routerLink='user/add'>\r\n        <div class=\"card mb-3 widget-content bg-mixed-hopes\">\r\n          <div class=\"widget-content-wrapper text-white\">\r\n            <div class=\"widget-content-left\">\r\n              <div class=\"widget-heading\">Add User</div>\r\n              <div class=\"widget-subheading\">Add New User</div>\r\n            </div>\r\n            <div class=\"widget-content-right\">\r\n              <!-- <div *ngIf=\"sales_report.overall_summary?.total_tips!='-'; else total_tips\" class=\"widget-numbers text-white\"><span> £ {{sales_report.overall_summary?.total_tips| number:'1.0-2'}}</span></div> -->\r\n              <!-- <ng-template #total_tips>\r\n                <div class=\"widget-numbers text-white\"><span>{{sales_report.overall_summary?.total_tips}}</span></div>\r\n              </ng-template> -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </a>\r\n      </div>\r\n\r\n\r\n      <div class=\"col-md-6 col-xl-4\">\r\n        <a routerLink='stores/add'>\r\n        <div class=\"card mb-3 widget-content bg-strong-bliss\">\r\n          <div class=\"widget-content-wrapper text-white\">\r\n            <div class=\"widget-content-left\">\r\n              <div class=\"widget-heading\">Add Store</div>\r\n              <div class=\"widget-subheading\">Add New Store</div>\r\n            </div>\r\n            <div class=\"widget-content-right\">\r\n              <!-- <div *ngIf=\"sales_report.overall_summary?.total_tips!='-'; else total_tips\" class=\"widget-numbers text-white\"><span> £ {{sales_report.overall_summary?.total_tips| number:'1.0-2'}}</span></div> -->\r\n              <!-- <ng-template #total_tips>\r\n                <div class=\"widget-numbers text-white\"><span>{{sales_report.overall_summary?.total_tips}}</span></div>\r\n              </ng-template> -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </a>\r\n      </div>\r\n\r\n\r\n       <!-- <div class=\"col-md-12 col-lg-8\">\r\n        <div class=\"mb-3 card\">\r\n          \r\n          <div style=\"min-height: 405px;\" class=\"card-body\">\r\n\r\n            <div class=\"apexbox mb-0\" style=\"position: relative;\">\r\n              <div id=\"chart\">\r\n                <app-charts *ngIf=\"chartReady; else barChartLoader;\" [data]=\"salesChartData\" yaxisLabel=\"Orders\" [labels]=\"salesChartLabels\">\r\n                </app-charts>\r\n                <ng-template #barChartLoader>\r\n                  <mat-spinner style=\"margin:auto; margin-top:140px;\" color=\"warn\"></mat-spinner>\r\n                </ng-template>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>  -->\r\n      \r\n      <!-- <div class=\"col-md-12 col-lg-4\">\r\n        <div class=\"main-card mb-3 card\">\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title\">Top Sales Categories</h5>\r\n            <div class=\"scroll-area\" style=\"height: 335px;\">\r\n              <div class=\"scrollbar-container ps ps--active-y\">\r\n                <ul class=\"rm-list-borders rm-list-borders-scroll list-group list-group-flush\">\r\n                  <li *ngFor=\"let item of sales_report.category_sales_breakdown\" class=\"list-group-item\">\r\n                    <div class=\"widget-content p-0\">\r\n                      <div class=\"widget-content-wrapper\">\r\n                        <div class=\"widget-content-left mr-3\">\r\n                          <img width=\"42\" class=\"rounded-circle\"\r\n                            [src]=\"item.category_image!=null ? item.category_image : '../../../assets/images/no_image.png'\"\r\n                            alt=\"\">\r\n                        </div>\r\n                        <div class=\"widget-content-left\">\r\n                          <div class=\"widget-heading\">{{item.product__category__name}}</div>\r\n                          <div class=\"widget-subheading\">Menu</div>\r\n                        </div>\r\n                        <div class=\"widget-content-right\">\r\n                          <div class=\"font-size-xlg text-muted\">\r\n                            <small class=\"opacity-5 pr-1\">£</small>\r\n                            <span> {{item.overall}}</span>\r\n                           \r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </li>\r\n                </ul>\r\n                <div class=\"ps__rail-x\" style=\"left: 0px; bottom: 0px;\">\r\n                  <div class=\"ps__thumb-x\" tabindex=\"0\" style=\"left: 0px; width: 0px;\"></div>\r\n                </div>\r\n                <div class=\"ps__rail-y\" style=\"top: 0px; height: 335px; right: 0px;\">\r\n                  <div class=\"ps__thumb-y\" tabindex=\"0\" style=\"top: 0px; height: 245px;\"></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n      </div> -->\r\n\r\n\r\n\r\n\r\n\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n\r\n\r\n<!-- \r\n      <div class=\"col-md-8\">\r\n        <div class=\"main-card mb-3 card\">\r\n          <div class=\"card-header\">Payment Summary\r\n            \r\n          </div>\r\n          <div style=\"height: 320px;\" class=\"card-body\">\r\n           \r\n\r\n            <div class=\"table-responsive\">\r\n              \r\n              <table class=\"align-middle mb-0 table table-sm table-borderless table-striped table-hover\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>Name</th>\r\n                    <th class=\"text-center\">Type</th>\r\n                    <th class=\"text-center\">Amount (£) </th>\r\n                    <th class=\"text-center\">Tip Amount (£)</th>\r\n                 </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let element of sales_report?.waiter_sales_breakdown\">\r\n                    <td>\r\n                      <div class=\"widget-content p-0\">\r\n                        <div class=\"widget-content-wrapper\">\r\n                          <div class=\"widget-content-left mr-3\">\r\n                            <div class=\"widget-content-left\">\r\n                              <img width=\"40\" class=\"rounded-circle\" [src]=\"element.waiter__user_image!=null ? element.waiter__user_image : '../../../assets/images/no_image.png'\"alt=\"\">\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"widget-content-left flex2\">\r\n                            <div class=\"widget-heading\">{{element.waiter__first_name}} {{element.waiter__last_name}}</div>\r\n                            <div class=\"widget-subheading opacity-7\">Waiter</div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </td>\r\n                    <td class=\"text-center\">\r\n                      <div class=\"badge badge-warning\">Cash</div>\r\n                    </td>\r\n                    <td class=\"text-center\">{{element.sales | number:'1.0-2'}}</td>\r\n                    <td class=\"text-center\">{{element.tip | number:'1.0-2'}}</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n\r\n      </div> -->\r\n\r\n\r\n      <!-- <div class=\"col-md-12 col-lg-4\">\r\n        <div class=\"mb-3 card\">\r\n          <div class=\"card-header-tab card-header-tab-animation card-header\">\r\n            <div class=\"card-header-title\">\r\n              <i class=\"header-icon lnr-apartment icon-gradient bg-love-kiss\"> </i>\r\n              Most Running Items\r\n            </div>\r\n\r\n          </div>\r\n          <div style=\"height: 320px;\" class=\"card-body\">\r\n            <div class=\"apexbox mb-0\" style=\"position: relative;\">\r\n              <app-doughnut-chart *ngIf=\"chartReadyD\" [labels]=\"doughnutChartLabels\" [data]=\"doughnutChartData\"></app-doughnut-chart>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div> -->\r\n\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/Jeptag-admin/Reports/sales/sales.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/Jeptag-admin/Reports/sales/sales.component.ts ***!
  \***************************************************************/
/*! exports provided: SalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesComponent", function() { return SalesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_sales_report_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/sales-report.service */ "./src/app/Jeptag-admin/Services/sales-report.service.ts");
/* harmony import */ var src_app_Shared_DateUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Shared/DateUtils */ "./src/app/Shared/DateUtils.ts");






var SalesComponent = /** @class */ (function () {
    function SalesComponent(salesReportService, activated_route) {
        this.salesReportService = salesReportService;
        this.activated_route = activated_route;
        this.table_headers = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]([]);
        this.sales_report = {
            overall_summary: { total_orders: '-', total_revenue: '-', total_tips: '-' }, category_sales_breakdown: [], waiter_sales_breakdown: [],
            product_sales_breakdown: [], monthly_sales_breakdown: []
        };
        this.salesChartData = [{ name: 'Orders', data: [] }];
        this.salesChartLabels = [];
        this.doughnutChartLabels = [];
        this.doughnutChartData = [];
        this.chartReady = false;
        this.chartReadyD = false;
    }
    SalesComponent.prototype.ngOnInit = function () {
        // this.activated_route.data.pipe(map(data => data.cres)).subscribe(result => {
        //   // console.log(result);
        //   let response = result;
        //   response.subscribe(
        //     result => {
        //       if (!result['error']) {
        //         console.log('sales report', result);
        //         this.sales_report = result['data'];
        //         this.table_headers = ['image', 'name', 'amount', 'tip'];
        //         this.dataSource.data = result['data']['waiter_sales_breakdown'];
        //         this.getSalesReport(result['data']['monthly_sales_breakdown']);
        //         this.getMostRunningProductsReport(result['data']['product_sales_breakdown']);
        //         this.dataSource.connect().next(result['data']);
        //         this.dataSource.paginator = this.paginator;
        //       }
        //       else {
        //         console.log('delete');
        //         if (result['httpError']['status'] != 401)
        //           SwalAlert.errorAlert('', result['message'].charAt(0).toUpperCase() + result['message'].substring(1));
        //       }
        //     },
        //     err => {
        //       console.log('delete here');
        //       this.salesChartData = [{ name: 'Orders', data: [] }];
        //     },
        //     () => {
        var _this = this;
        //     }
        //   )
        // });
        this.salesReportService.getSalesReport().subscribe(function (result) {
            if (!result['error']) {
                console.log('sales report', result);
                _this.sales_report = result['data'];
                _this.table_headers = ['image', 'name', 'amount', 'tip'];
                _this.dataSource.data = result['data']['waiter_sales_breakdown'];
                _this.getSalesReport(result['data']['monthly_sales_breakdown']);
                _this.getMostRunningProductsReport(result['data']['product_sales_breakdown']);
                _this.dataSource.connect().next(result['data']);
                _this.dataSource.paginator = _this.paginator;
            }
            else {
                _this.chartReady = true;
            }
        }, function (err) {
            console.log(err);
        });
    };
    SalesComponent.prototype.getSalesReport = function (sales_data) {
        var _this = this;
        sales_data.forEach(function (record) {
            _this.salesChartData[0].data.push(record.orders);
            _this.salesChartLabels.push(src_app_Shared_DateUtils__WEBPACK_IMPORTED_MODULE_5__["DateUtils"].getMMM(record.month));
        });
        this.chartReady = true;
    };
    SalesComponent.prototype.getMostRunningProductsReport = function (most_running_product) {
        var _this = this;
        most_running_product.forEach(function (record) {
            _this.doughnutChartData.push(record.overall);
            _this.doughnutChartLabels.push(record.product__name);
        });
        this.chartReadyD = true;
    };
    SalesComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], SalesComponent.prototype, "paginator", void 0);
    SalesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sales',
            template: __webpack_require__(/*! ./sales.component.html */ "./src/app/Jeptag-admin/Reports/sales/sales.component.html"),
            styles: [__webpack_require__(/*! ./sales.component.css */ "./src/app/Jeptag-admin/Reports/sales/sales.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_sales_report_service__WEBPACK_IMPORTED_MODULE_4__["SalesReportService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], SalesComponent);
    return SalesComponent;
}());



/***/ }),

/***/ "./src/app/Jeptag-admin/Services/brand.service.ts":
/*!********************************************************!*\
  !*** ./src/app/Jeptag-admin/Services/brand.service.ts ***!
  \********************************************************/
/*! exports provided: BrandService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandService", function() { return BrandService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/http.service */ "./src/app/Services/http.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var BrandService = /** @class */ (function () {
    function BrandService(httpServices) {
        this.httpServices = httpServices;
    }
    BrandService.prototype.getStores = function () {
        return this.httpServices.post({ 'model': "brands" }, '/api/common/get-data').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ error: true, message: 'Server error', data: [] }); }));
    };
    BrandService.prototype.addStore = function (data) {
        return this.httpServices.post(data, '/api/common/add-data').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ error: true, message: 'Server error', data: [] }); }));
    };
    BrandService.prototype.editStore = function (data, id) {
        data['_id'] = id;
        return this.httpServices.post(data, "/api/common/edit-data").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ error: true, message: 'Server error', data: [] }); }));
    };
    BrandService.prototype.getStoreById = function (id) {
        return this.httpServices.post({ "_id": id, "model": "brands" }, '/api/common/single').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ error: true, message: 'Server error', data: [] }); }));
    };
    BrandService.prototype.uploadStaffById = function (data, id) {
        return this.httpServices.patchFormData(data, 'user/details/' + id + "/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ error: true, message: 'Server error', data: [] }); }));
    };
    BrandService.prototype.deleteById = function (data) {
        return this.httpServices.post(data, '/api/common/delete').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ error: true, message: 'Server error', data: [] }); }));
    };
    BrandService.prototype.deleteMultipeStaff = function (ids) {
        return this.httpServices.postWithoutStatus({ user_ids: ids }, 'user/delete/').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ error: true, message: 'Server error', data: [], httpError: err }); }));
    };
    BrandService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], BrandService);
    return BrandService;
}());



/***/ }),

/***/ "./src/app/Jeptag-admin/Services/category.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/Jeptag-admin/Services/category.service.ts ***!
  \***********************************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/http.service */ "./src/app/Services/http.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var CategoryService = /** @class */ (function () {
    function CategoryService(httpServices) {
        this.httpServices = httpServices;
    }
    CategoryService.prototype.getStores = function () {
        return this.httpServices.post({ 'model': "categories" }, '/api/common/get-data').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ error: true, message: 'Server error', data: [] }); }));
    };
    CategoryService.prototype.addStore = function (data) {
        return this.httpServices.post(data, '/api/common/add-data').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ error: true, message: 'Server error', data: [] }); }));
    };
    CategoryService.prototype.editStore = function (data, id) {
        data['_id'] = id;
        return this.httpServices.post(data, "/api/common/edit-data").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ error: true, message: 'Server error', data: [] }); }));
    };
    CategoryService.prototype.getStoreById = function (id) {
        return this.httpServices.post({ "_id": id, "model": "categories" }, '/api/common/single').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ error: true, message: 'Server error', data: [] }); }));
    };
    CategoryService.prototype.uploadStaffById = function (data, id) {
        return this.httpServices.patchFormData(data, 'user/details/' + id + "/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ error: true, message: 'Server error', data: [] }); }));
    };
    CategoryService.prototype.deleteById = function (data) {
        return this.httpServices.post(data, '/api/common/delete').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ error: true, message: 'Server error', data: [] }); }));
    };
    CategoryService.prototype.deleteMultipeStaff = function (ids) {
        return this.httpServices.postWithoutStatus({ user_ids: ids }, 'user/delete/').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ error: true, message: 'Server error', data: [], httpError: err }); }));
    };
    CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/Jeptag-admin/Services/forget-password.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/Jeptag-admin/Services/forget-password.service.ts ***!
  \******************************************************************/
/*! exports provided: ForgetPasswordService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPasswordService", function() { return ForgetPasswordService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/http.service */ "./src/app/Services/http.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var ForgetPasswordService = /** @class */ (function () {
    function ForgetPasswordService(httpServices) {
        this.httpServices = httpServices;
    }
    ForgetPasswordService.prototype.getCode = function () {
        return this.code;
    };
    ForgetPasswordService.prototype.verifyEmail = function (username) {
        return this.httpServices.post({ 'username': username }, '/api/user/forgetpassAdmin').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ error: true, message: 'Server error', data: [] }); }));
    };
    ForgetPasswordService.prototype.changePassword = function (username, newPassword) {
        return this.httpServices.post({ 'username': username, 'newPassword': newPassword }, '/api/user/resetforgetpass').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ error: true, message: 'Server error', data: [] }); }));
    };
    ForgetPasswordService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], ForgetPasswordService);
    return ForgetPasswordService;
}());



/***/ }),

/***/ "./src/app/Jeptag-admin/Services/product.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/Jeptag-admin/Services/product.service.ts ***!
  \**********************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/http.service */ "./src/app/Services/http.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var ProductService = /** @class */ (function () {
    function ProductService(httpServices) {
        this.httpServices = httpServices;
    }
    ProductService.prototype.getBrands = function () {
        return this.httpServices.post({ 'model': "brands" }, '/api/common/get-data').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ error: true, message: 'Server error', data: [] }); }));
    };
    ProductService.prototype.getSubCategory = function () {
        return this.httpServices.post({ 'model': "SubCategory" }, '/api/common/get-data').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ error: true, message: 'Server error', data: [] }); }));
    };
    ProductService.prototype.getProductsByID = function (id) {
        return this.httpServices.post({ "condition": id, 'model': "products" }, '/api/common/getProductslistByIDWeb').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ error: true, message: 'Server error', data: [] }); }));
    };
    ProductService.prototype.getCategories = function () {
        return this.httpServices.post({ 'model': "categories" }, '/api/common/get-data').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ error: true, message: 'Server error', data: [] }); }));
    };
    ProductService.prototype.getJobs = function () {
        return this.httpServices.post({ 'model': "products" }, '/api/common/get-data').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ error: true, message: 'Server error', data: [] }); }));
    };
    ProductService.prototype.addProduct = function (data) {
        return this.httpServices.post(data, '/api/common/add-data').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ error: true, message: 'Server error', data: [] }); }));
    };
    ProductService.prototype.editProduct = function (data, id) {
        data['model'] = "products";
        data['_id'] = id;
        return this.httpServices.post(data, "/api/common/edit-data").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ error: true, message: 'Server error', data: [] }); }));
    };
    ProductService.prototype.getProuctById = function (id) {
        return this.httpServices.post({ "_id": id, "model": "products" }, '/api/common/single').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ error: true, message: 'Server error', data: [] }); }));
    };
    ProductService.prototype.uploadStaffById = function (data, id) {
        return this.httpServices.patchFormData(data, 'user/details/' + id + "/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ error: true, message: 'Server error', data: [] }); }));
    };
    ProductService.prototype.deleteById = function (data) {
        return this.httpServices.post(data, '/api/common/delete').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ error: true, message: 'Server error', data: [] }); }));
    };
    ProductService.prototype.deleteMultipeStaff = function (ids) {
        return this.httpServices.postWithoutStatus({ user_ids: ids }, 'user/delete/').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ error: true, message: 'Server error', data: [], httpError: err }); }));
    };
    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/Jeptag-admin/Services/sales-report.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/Jeptag-admin/Services/sales-report.service.ts ***!
  \***************************************************************/
/*! exports provided: SalesReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesReportService", function() { return SalesReportService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/http.service */ "./src/app/Services/http.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var SalesReportService = /** @class */ (function () {
    function SalesReportService(httpServices) {
        this.httpServices = httpServices;
    }
    SalesReportService.prototype.getSalesReport = function () {
        return this.httpServices.filter({}, 'order/reporting/').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({
            error: true, message: 'Server error', data: {
                overall_summary: { total_orders: '-', total_revenue: '-', total_tips: '-' }, category_sales_breakdown: [], waiter_sales_breakdown: [],
                product_sales_breakdown: [], monthly_sales_breakdown: []
            }, httpError: err
        }); }));
    };
    SalesReportService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], SalesReportService);
    return SalesReportService;
}());



/***/ }),

/***/ "./src/app/Jeptag-admin/Services/store.service.ts":
/*!********************************************************!*\
  !*** ./src/app/Jeptag-admin/Services/store.service.ts ***!
  \********************************************************/
/*! exports provided: StoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreService", function() { return StoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/http.service */ "./src/app/Services/http.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var StoreService = /** @class */ (function () {
    function StoreService(httpServices) {
        this.httpServices = httpServices;
    }
    StoreService.prototype.getStores = function () {
        return this.httpServices.post({ 'model': "StoresDetail" }, '/api/common/get-data').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ error: true, message: 'Server error', data: [] }); }));
    };
    StoreService.prototype.getStoresByID = function (id) {
        return this.httpServices.post({ "condition": id, 'model': "StoresDetail" }, '/api/common/getstorelistByID').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ error: true, message: 'Server error', data: [] }); }));
    };
    StoreService.prototype.addStore = function (data) {
        return this.httpServices.post(data, '/api/common/add-data').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ error: true, message: 'Server error', data: [] }); }));
    };
    StoreService.prototype.editStore = function (data, id) {
        data['_id'] = id;
        return this.httpServices.post(data, "/api/common/edit-data").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ error: true, message: 'Server error', data: [] }); }));
    };
    StoreService.prototype.getStoreById = function (id) {
        return this.httpServices.post({ "_id": id, "model": "StoresDetail" }, '/api/common/single').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ error: true, message: 'Server error', data: [] }); }));
    };
    StoreService.prototype.uploadStaffById = function (data, id) {
        return this.httpServices.patchFormData(data, 'user/details/' + id + "/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ error: true, message: 'Server error', data: [] }); }));
    };
    StoreService.prototype.deleteById = function (data) {
        return this.httpServices.post(data, '/api/common/delete').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ error: true, message: 'Server error', data: [] }); }));
    };
    StoreService.prototype.deleteMultipeStaff = function (ids) {
        return this.httpServices.postWithoutStatus({ user_ids: ids }, 'user/delete/').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ error: true, message: 'Server error', data: [], httpError: err }); }));
    };
    StoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], StoreService);
    return StoreService;
}());



/***/ }),

/***/ "./src/app/Jeptag-admin/Services/subcategory.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/Jeptag-admin/Services/subcategory.service.ts ***!
  \**************************************************************/
/*! exports provided: SubcategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubcategoryService", function() { return SubcategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/http.service */ "./src/app/Services/http.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var SubcategoryService = /** @class */ (function () {
    function SubcategoryService(httpServices) {
        this.httpServices = httpServices;
    }
    SubcategoryService.prototype.getStores = function () {
        return this.httpServices.post({ 'model': "SubCategory" }, '/api/common/get-data').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ error: true, message: 'Server error', data: [] }); }));
    };
    SubcategoryService.prototype.getCategories = function () {
        return this.httpServices.post({ 'model': "categories" }, '/api/common/get-data').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ error: true, message: 'Server error', data: [] }); }));
    };
    SubcategoryService.prototype.addSubcategory = function (data) {
        return this.httpServices.post(data, '/api/common/add-data').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ error: true, message: 'Server error', data: [] }); }));
    };
    SubcategoryService.prototype.editStore = function (data, id) {
        data['_id'] = id;
        return this.httpServices.post(data, "/api/common/edit-data").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ error: true, message: 'Server error', data: [] }); }));
    };
    SubcategoryService.prototype.getStoreById = function (id) {
        return this.httpServices.post({ "_id": id, "model": "SubCategory" }, '/api/common/single').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ error: true, message: 'Server error', data: [] }); }));
    };
    SubcategoryService.prototype.uploadStaffById = function (data, id) {
        return this.httpServices.patchFormData(data, 'user/details/' + id + "/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ error: true, message: 'Server error', data: [] }); }));
    };
    SubcategoryService.prototype.deleteById = function (data) {
        return this.httpServices.post(data, '/api/common/delete').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ error: true, message: 'Server error', data: [] }); }));
    };
    SubcategoryService.prototype.deleteMultipeStaff = function (ids) {
        return this.httpServices.postWithoutStatus({ user_ids: ids }, 'user/delete/').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ error: true, message: 'Server error', data: [], httpError: err }); }));
    };
    SubcategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], SubcategoryService);
    return SubcategoryService;
}());



/***/ }),

/***/ "./src/app/Jeptag-admin/Services/tags.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/Jeptag-admin/Services/tags.service.ts ***!
  \*******************************************************/
/*! exports provided: TagsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsService", function() { return TagsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/http.service */ "./src/app/Services/http.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var TagsService = /** @class */ (function () {
    function TagsService(httpServices) {
        this.httpServices = httpServices;
    }
    TagsService.prototype.gettags = function () {
        return this.httpServices.post({ 'model': "Tags" }, '/api/common/get-data').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ error: true, message: 'Server error', data: [] }); }));
    };
    TagsService.prototype.getPaginationtags = function (offset) {
        return this.httpServices.post({ 'offset': offset }, '/api/common/pagination-tag-call').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ error: true, message: 'Server error', data: [] }); }));
    };
    TagsService.prototype.getTagsByID = function (id) {
        return this.httpServices.post({ "condition": id, 'model': "Tags" }, '/api/common/getstorelistByID').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ error: true, message: 'Server error', data: [] }); }));
    };
    TagsService.prototype.addCsvTags = function (file) {
        return this.httpServices.postFormData({ "tagFile": file }, '/api/common/csvTags').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ error: true, message: 'Server error', data: [] }); }));
    };
    TagsService.prototype.addStore = function (data) {
        return this.httpServices.post(data, '/api/common/add-data').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ error: true, message: 'Server error', data: [] }); }));
    };
    TagsService.prototype.editTag = function (data, id) {
        data['_id'] = id;
        return this.httpServices.post(data, "/api/common/edit-data").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ error: true, message: 'Server error', data: [] }); }));
    };
    TagsService.prototype.getTagById = function (id) {
        return this.httpServices.post({ "_id": id, "model": "Tags" }, '/api/common/single').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ error: true, message: 'Server error', data: [] }); }));
    };
    TagsService.prototype.searchTagsById = function (id) {
        return this.httpServices.post({ "TagID": id, "model": "Tags" }, '/api/common/getSearchTags').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ error: true, message: 'Server error', data: [] }); }));
    };
    TagsService.prototype.uploadStaffById = function (data, id) {
        return this.httpServices.patchFormData(data, 'user/details/' + id + "/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ error: true, message: 'Server error', data: [] }); }));
    };
    TagsService.prototype.deleteById = function (data) {
        return this.httpServices.post(data, '/api/common/delete').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ error: true, message: 'Server error', data: [] }); }));
    };
    TagsService.prototype.deleteMultipeStaff = function (ids) {
        return this.httpServices.postWithoutStatus({ user_ids: ids }, 'user/delete/').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ error: true, message: 'Server error', data: [], httpError: err }); }));
    };
    TagsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], TagsService);
    return TagsService;
}());



/***/ }),

/***/ "./src/app/Jeptag-admin/Services/user.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/Jeptag-admin/Services/user.service.ts ***!
  \*******************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/http.service */ "./src/app/Services/http.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var UserService = /** @class */ (function () {
    function UserService(httpServices) {
        this.httpServices = httpServices;
    }
    UserService.prototype.getStaff = function () {
        return this.httpServices.post({ 'model': "users" }, '/api/common/get-data').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ error: true, message: 'Server error', data: [] }); }));
    };
    UserService.prototype.addStaff = function (data) {
        return this.httpServices.post(data, '/api/user/registerUser').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ error: true, message: 'Server error', data: [] }); }));
    };
    UserService.prototype.getStaffById = function (id) {
        return this.httpServices.post({ "_id": id, "model": "users" }, '/api/common/single').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ error: true, message: 'Server error', data: [] }); }));
    };
    UserService.prototype.uploadStaffById = function (data, id) {
        data['_id'] = id;
        data['model'] = "users";
        return this.httpServices.post(data, "/api/common/edit-data").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ error: true, message: 'Server error', data: [] }); }));
    };
    UserService.prototype.deleteById = function (data) {
        return this.httpServices.post(data, '/api/common/delete').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ error: true, message: 'Server error', data: [] }); }));
    };
    UserService.prototype.deleteMultipeStaff = function (ids) {
        return this.httpServices.postWithoutStatus({ user_ids: ids }, 'user/delete/').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ error: true, message: 'Server error', data: [], httpError: err }); }));
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/Jeptag-admin/Stores/add-store/add-store.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/Jeptag-admin/Stores/add-store/add-store.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0plcHRhZy1hZG1pbi9TdG9yZXMvYWRkLXN0b3JlL2FkZC1zdG9yZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Jeptag-admin/Stores/add-store/add-store.component.html":
/*!************************************************************************!*\
  !*** ./src/app/Jeptag-admin/Stores/add-store/add-store.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-main__outer\">\n  <div class=\"app-main__inner\">\n    <div class=\"app-page-title\">\n      <div class=\"page-title-wrapper\">\n        <div class=\"page-title-heading\">\n          <div class=\"page-title-icon bg-warning text-white\">\n            <i class=\"icofont-dashboard-web  \">\n            </i>\n          </div>\n          <div> Store Managment\n            <div class=\"page-title-subheading\">Add Store\n            </div>\n          </div>\n        </div>\n        <div class=\"page-title-actions\">\n\n          <div class=\"d-inline-block dropdown\">\n            <a (click)=\"navigateToJobListing()\" class=\"border-0 btn-transition btn btn-outline-focus\">\n              <i class=\"icofont-arrow-left\"></i> back to list\n            </a>\n            <!-- <a href=\"product-all.php\" class=\"btn-shadow  btn btn-info\">\n              <i class=\"icofont-save\"></i> Save Product\n            </a>\n            <button type=\"button\" class=\"btn-shadow  btn btn-primary\">\n\n              <i class=\"icofont-save\"></i> Save and Continue Edit\n            </button>\n            <button type=\"button\" class=\"btn-shadow  btn btn-success\">\n\n              <i class=\"icofont-ui-copy\"></i> Copy Product\n            </button> -->\n            <!-- <button style=\"margin-left: 5px;\" type=\"button\" class=\"btn-shadow  btn btn-danger\">\n              <i class=\"icofont-trash\"></i> Delete\n            </button> -->\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-12 col-lg-12\">\n        <ul class=\"body-tabs body-tabs-layout tabs-animated body-tabs-animated nav\">\n          <li class=\"nav-item\">\n            <a role=\"tab\" class=\"nav-link active\" id=\"tab-0\" data-toggle=\"tab\" href=\"#tab-content-0\">\n              <span>Store Information</span>\n            </a>\n          </li>\n          <!-- <li class=\"nav-item\">\n            <a role=\"tab\" class=\"nav-link\" id=\"tab-1\" data-toggle=\"tab\" href=\"#tab-content-1\">\n              <span>Product Pictures</span>\n            </a>\n          </li> -->\n          <!-- <li class=\"nav-item\">\n            <a role=\"tab\" class=\"nav-link\" id=\"tab-1\" data-toggle=\"tab\" href=\"#tab-content-2\">\n              <span>Product Pricing</span>\n            </a>\n          </li> -->\n        </ul>\n        <div class=\"card mb-3\">\n\n          <div class=\"tab-content\">\n            <div class=\"tab-pane show active\" id=\"tab-content-0\" role=\"tabpanel\">\n              <div class=\"card\">\n                <mat-progress-bar *ngIf=\"!loaded\" mode=\"indeterminate\"></mat-progress-bar>\n                <app-form [clear_form]=\"clear_form\" [submit_clicked]=\"submit_clicked\" (formValues)=\"getJobData($event)\"\n                  [form]=form>\n                </app-form>\n                \n                <!-- <div class=\"card-body\">\n\n\n                  <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                      <div class=\"position-relative form-group\">\n                        <label class=\"\">Category name</label>\n                        <input type=\"text\" placeholder=\"...\" class=\"form-control\" value=\"Beef Burger\">\n                      </div>\n                    </div>\n                    <div class=\"col-lg-4\">\n\n                      <div class=\"position-relative form-group\">\n                        <label for=\"exampleCustomSelect\" class=\"\">Parent Category</label>\n                        <select type=\"select\" class=\"custom-select\">\n                          <option value=\"\">Select</option>\n                          <option>Burger</option>\n                          <option>Value 2</option>\n                          <option>Value 3</option>\n                          <option>Value 4</option>\n                          <option>Value 5</option>\n                        </select>\n                      </div>\n                    </div>\n                    <div class=\"col-lg-4\">\n                      <div class=\"position-relative form-group\">\n                        <label for=\"exampleCustomSelect\" class=\"\">Category Type</label>\n                        <select type=\"select\" class=\"custom-select\">\n                          <option value=\"\">Select</option>\n                          <option>Food</option>\n                          <option>Value 2</option>\n                          <option>Value 3</option>\n                          <option>Value 4</option>\n                          <option>Value 5</option>\n                        </select>\n                      </div>\n                    </div>\n\n\n                  </div>\n\n\n                  <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                      <div class=\"position-relative form-group\">\n                        <label class=\"bold\">Spice Level</label>\n                        <div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" checked id=\"check1\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check1\">Normal</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" checked id=\"check2\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check2\">Spicy</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" checkedid=\"check3\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check3\">Extra Spicy</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" id=\"check4\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check4\">Medium</label>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"position-relative form-group\">\n                        <label class=\"bold\">Allergens</label>\n                        <div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" checked id=\"check11\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check11\">Soy</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" id=\"check21\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check21\">Egg</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" id=\"check31\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check31\">Peanut</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" id=\"check41\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check41\">Chicken</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" id=\"check41\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check41\">Chicken</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" id=\"check41\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check41\">Chicken</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" id=\"check41\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check41\">Chicken</label>\n                          </div>\n                        </div>\n                      </div>\n\n\n                      <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                          <div class=\"position-relative form-group\">\n                            <label class=\"\">Kcal Count</label>\n                            <input type=\"text\" placeholder=\"...\" class=\"form-control\">\n                          </div>\n                        </div>\n\n                      </div>\n\n\n                      <div class=\"position-relative form-group\">\n\n                        <div>\n                          <label class=\"bold\">Hot Item</label> <br>\n                          <div class=\"custom-switch custom-control custom-control-inline\">\n                            <input type=\"checkbox\" checked id=\"check4111\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check4111\"> Yes</label>\n                          </div>\n\n                        </div>\n                      </div>\n\n                      <div class=\"position-relative form-group\">\n\n                        <div>\n\n                          <label class=\"bold\">Publish</label><br>\n                          <div class=\"custom-switch custom-control custom-control-inline\">\n                            <input type=\"checkbox\" id=\"check41111\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check41111\"> No</label>\n                          </div>\n                          <span class=\"small text-muted\"> Check to publish this product (visible in store). Uncheck to\n                            unpublish (product not available in store).</span>\n                        </div>\n                      </div>\n                    </div>\n\n                  </div>\n\n\n\n                  <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                      <div class=\"position-relative form-group\">\n                        <label class=\"\">Description</label>\n                        <textarea rows=\"3\" placeholder=\"...\" class=\"form-control\"> A tikki delight: Potato and peas patty topped with veg sauce, ketchup, tomatoes and onions\n\n                                                            </textarea>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"alert alert-info alert-dismissible fade show\" role=\"alert\">\n                    <button type=\"button\" class=\"close\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\n                    Product information successfully added\n                  </div>\n\n\n\n\n\n                </div> -->\n                <!-- <div class=\"d-block text-right card-footer\">\n                  <a href=\"javascript:void(0);\" class=\"btn-wide btn btn-success\">Save</a>\n                </div> -->\n              </div>\n\n            </div>\n            <div class=\"tab-pane show\" id=\"tab-content-1\" role=\"tabpanel\">\n              <div class=\"card\">\n                <!-- <div class=\"card-header\">Product Information</div> -->\n                <div class=\"card-body\">\n\n\n                  <div class=\"position-relative form-group\">\n                    <label for=\"exampleFile\" class=\"\">Upload Photo</label>\n                    <input name=\"file\" id=\"exampleFile\" type=\"file\" class=\"form-control-file\">\n\n                    <small class=\"form-text text-muted\">Up to 5 images, max 5 MB each.</small>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-lg-3\">\n                      ​<picture>\n                        <img src=\"assets/images/product-photo1.png\" class=\"img-fluid img-thumbnail\">\n                        <div class=\"buttons mt-2\">\n                          <button class=\"mb-2 mr-2 btn-transition btn btn-outline-light btn-sm\">Edit</button>\n                          <button class=\"mb-2 mr-2 btn-transition btn btn-outline-light btn-sm\">Delete</button>\n                        </div>\n                      </picture>\n\n                    </div>\n                    <div class=\"col-lg-3\">\n                      ​<picture>\n                        <img src=\"assets/images/product-photo1.png\" class=\"img-fluid img-thumbnail\">\n                        <div class=\"buttons mt-2\">\n                          <button class=\"mb-2 mr-2 btn-transition btn btn-outline-light btn-sm\">Edit</button>\n                          <button class=\"mb-2 mr-2 btn-transition btn btn-outline-light btn-sm\">Delete</button>\n                        </div>\n                      </picture>\n\n                    </div>\n                  </div>\n\n\n                </div>\n                <div class=\"d-block text-right card-footer\">\n                  <a href=\"javascript:void(0);\" class=\"btn-wide btn btn-success\">Save</a>\n                </div>\n              </div>\n            </div>\n            <div class=\"tab-pane show\" id=\"tab-content-2\" role=\"tabpanel\">\n              <div class=\"card\">\n                <!-- <div class=\"card-header\">Product Information</div> -->\n                <div class=\"card-body\">\n\n                  <div class=\"row\">\n                    <div class=\"col-lg-3\">\n                      <div class=\"position-relative form-group\">\n                        <label class=\"\">Price</label>\n                        <div class=\"input-group\">\n                          <input placeholder=\"...\" type=\"number\" class=\"form-control\">\n                          <div class=\"input-group-append\">\n                            <span class=\"input-group-text\">£</span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-lg-3\">\n                      <div class=\"position-relative form-group\">\n                        <label class=\"\">Old Price</label>\n                        <div class=\"input-group\">\n                          <input placeholder=\"...\" type=\"number\" class=\"form-control\">\n                          <div class=\"input-group-append\">\n                            <span class=\"input-group-text\">£</span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-lg-3\">\n                      <div class=\"position-relative form-group\">\n                        <label class=\"\">Product Cost</label>\n                        <div class=\"input-group\">\n                          <input placeholder=\"...\" type=\"number\" class=\"form-control\">\n                          <div class=\"input-group-append\">\n                            <span class=\"input-group-text\">£</span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-lg-3\">\n                      <div class=\"position-relative form-group\">\n                        <label class=\"\">Discount </label>\n                        <div class=\"input-group\">\n                          <input placeholder=\"...\" type=\"number\" class=\"form-control\">\n                          <div class=\"input-group-append\">\n                            <span class=\"input-group-text\">%</span>\n                            <span class=\"input-group-text\">£</span>\n\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-lg-3\">\n                      <div class=\"position-relative form-group\">\n                        <label class=\"\">Tax Amount</label>\n                        <div class=\"input-group\">\n                          <input placeholder=\"...\" type=\"number\" class=\"form-control\">\n                          <div class=\"input-group-append\">\n                            <span class=\"input-group-text\">£</span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n\n                  </div>\n\n\n                </div>\n                <div class=\"d-block text-right card-footer\">\n                  <a href=\"javascript:void(0);\" class=\"btn-wide btn btn-success\">Save</a>\n                </div>\n\n              </div>\n\n            </div>\n          </div>\n        </div>\n\n\n      </div>\n\n\n\n\n\n    </div>\n\n\n\n\n  </div>\n\n\n\n\n\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/Jeptag-admin/Stores/add-store/add-store.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/Jeptag-admin/Stores/add-store/add-store.component.ts ***!
  \**********************************************************************/
/*! exports provided: AddStoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddStoreComponent", function() { return AddStoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _options_staff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../options/staff */ "./src/app/Jeptag-admin/options/staff.ts");
/* harmony import */ var _Services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../Services/auth.service */ "./src/app/Services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Options_product__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Options/product */ "./src/app/Jeptag-admin/Options/product.ts");
/* harmony import */ var _Services_store_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Services/store.service */ "./src/app/Jeptag-admin/Services/store.service.ts");
/* harmony import */ var _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../Shared/swalAlerts */ "./src/app/Shared/swalAlerts.ts");









var AddStoreComponent = /** @class */ (function () {
    function AddStoreComponent(StoreService, active_route, router, AuthService) {
        this.StoreService = StoreService;
        this.active_route = active_route;
        this.router = router;
        this.AuthService = AuthService;
        this.form = {};
        this.fields = [];
        this.userData = {};
        this.loaded = false;
        this.edit = false;
    }
    AddStoreComponent.prototype.ngOnInit = function () {
        this.form['form_fields'] = this.fields;
        var store_id = this.active_route.snapshot.paramMap.get('id');
        this.company_name = this.active_route.snapshot.paramMap.get('cname');
        this.email = this.active_route.snapshot.paramMap.get('email');
        console.log("idddd " + this.active_route.snapshot.paramMap.get('id'));
        //console.log("word "+this.active_route.contains("ss"))
        // if (store_id != null) {
        //   this.edit = true;
        //       this.loaded = true;
        //       this.getStoreById(store_id);
        //     }
        //     else {
        this.edit = false;
        this.loaded = true;
        this.generateForm();
        // }
        // this.form['form_fields'] = this.fields;
        // this.loaded = true;
        // this.generateForm();
    };
    AddStoreComponent.prototype.getStoreById = function (id) {
        var _this = this;
        console.log("store id" + id);
        var store = this.StoreService.getStoreById(id);
        store.subscribe(function (result) {
            console.log("INSIDE store EDIT ");
            console.log('store by id:', result);
            _this.store = result['result'];
            console.log('RESULT:', result);
            if (result != null) {
                _this.loaded = true;
                console.log("job data above generate form" + _this.store);
                _this.generateForm(_this.store);
            }
            else {
                _this.loaded = true;
                _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_8__["SwalAlert"].errorAlert('', "Something went wrong! Please wait until we'll fix this issue");
            }
        }, function (err) {
            console.log('Error while getting Job by id.', err);
            _this.loaded = true;
            _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_8__["SwalAlert"].errorAlert('', 'Server Error!');
        });
    };
    AddStoreComponent.prototype.generateForm = function (store) {
        //  console.log("store"+store)
        this.fields = [
            { label: 'Name', type: 'text', bootstrapGridClass: "col-lg-6", name: "Name", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required], required: true, value: store ? store.Name : '' },
            {
                label: 'Company Name', type: 'text', bootstrapGridClass: "col-lg-6", name: "CompanyId", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required], required: true, value: this.company_name
            },
            {
                label: 'Store ID', type: 'text', bootstrapGridClass: "col-lg-6", name: "storeID", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required], required: true, value: store ? store.storeID : ''
            },
            {
                label: 'Address', type: 'text', bootstrapGridClass: "col-lg-6", name: "Address", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required], required: true, value: store ? store.Address : ''
            },
            {
                label: 'City', type: 'text', bootstrapGridClass: "col-lg-6", name: "City", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required], required: true, value: store ? store.City : ''
            },
            {
                label: 'Region', type: 'text', bootstrapGridClass: "col-lg-6", name: "Region", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required], required: true, value: store ? store.Region : ''
            },
            {
                label: 'Country', type: 'select', bootstrapGridClass: "col-lg-6", name: "Country", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required], required: true, value: store ? store.Country : '', options: _options_staff__WEBPACK_IMPORTED_MODULE_1__["countries"]
            },
            {
                label: 'Postscode', type: 'number', bootstrapGridClass: "col-lg-6", name: "Postscode", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required], required: true, value: store ? store.Postscode : ''
            },
            {
                label: 'Phone', type: 'number', bootstrapGridClass: "col-lg-6", name: "Phone", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required], required: true, value: store ? store.Phone : ''
            },
            {
                label: 'Fax', type: 'number', bootstrapGridClass: "col-lg-6", name: "Fax", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required], required: true, value: store ? store.Fax : ''
            },
            {
                label: 'GEOLat', type: 'number', bootstrapGridClass: "col-lg-6", name: "GEOLat", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required], required: true, value: store ? store.GEOLat : ''
            },
            {
                label: 'GEOLong', type: 'number', bootstrapGridClass: "col-lg-6", name: "GEOLong", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required], required: true, value: store ? store.GEOLong : ''
            },
            {
                label: 'Status', type: 'select', bootstrapGridClass: "col-lg-12", name: "status", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required], required: true,
                value: store ? store.status : 'true', options: _Options_product__WEBPACK_IMPORTED_MODULE_6__["Status"]
            }
        ];
        this.form['form_fields'] = this.fields;
        this.form['FormbootstrapGridClass'] = 'col-lg-12';
        this.form['map'] = false;
        this.form['MapbootstrapGridClass'] = 'col-lg-4';
        this.form['image'] = false;
        this.form['ImagebootstrapGridClass'] = 'col-lg-3';
        this.form['img_height'] = "200px";
        this.form['img_width'] = "200px";
        //  this.form['image_url'] = job ? job.job_image : null;
        this.form['submit'] = 'Save';
    };
    AddStoreComponent.prototype.getJobData = function (data) {
        console.log(data);
        //this.loggen_in_user = JSON.parse(localStorage.getItem('user'));
        //   this.userData=  this.AuthService.getUser();
        // console.log("user id :"+this.userData['id'])
        data['model'] = 'StoresDetail';
        // if (data['image'] != undefined) {
        //   data['job_image'] = data['image'];
        //   delete data['image'];
        // }
        this.clear_form = false;
        this.submit_clicked = true;
        // if (this.edit) {
        //   const id = this.active_route.snapshot.paramMap.get('id');
        //   this.editStore(data, id);
        // }
        // else {
        data['seller_id'] = this.active_route.snapshot.paramMap.get('id');
        this.addStore(data);
        //  }
    };
    // editStore(data, id) {
    //   data['model']='StoresDetail'
    //   this.StoreService.editStore(data, id).subscribe(
    //     result => {
    //       this.submit_clicked = false;
    //       if (!result['error']) {
    //         SwalAlert.sucessAlert('', 'Store Updated Sucessfully!');
    //       }
    //       else {
    //         SwalAlert.errorAlert('', result['message'].charAt(0).toUpperCase() + result['message'].substring(1));
    //       }
    //     },
    //     err => {
    //       this.submit_clicked = false;
    //       console.log(err);
    //       SwalAlert.errorAlert('', 'Server Error');
    //     }
    //   );
    // }
    AddStoreComponent.prototype.addStore = function (data) {
        var _this = this;
        this.StoreService.addStore(data).subscribe(function (result) {
            _this.submit_clicked = false;
            if (result['status']) {
                _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_8__["SwalAlert"].sucessAlert('', 'Store Added Sucessfully!');
                _this.clear_form = true;
            }
            else {
                _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_8__["SwalAlert"].errorAlert('', result['message'].charAt(0).toUpperCase() + result['message'].substring(1));
            }
        }, function (err) {
            _this.submit_clicked = false;
            console.error(err);
            _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_8__["SwalAlert"].errorAlert('', 'Server Error');
        });
    };
    AddStoreComponent.prototype.navigateToJobListing = function () {
        this.router.navigate(['/jeptag/user/stores', this.active_route.snapshot.paramMap.get('id'), this.company_name, this.email]);
    };
    AddStoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-add-store',
            template: __webpack_require__(/*! ./add-store.component.html */ "./src/app/Jeptag-admin/Stores/add-store/add-store.component.html"),
            styles: [__webpack_require__(/*! ./add-store.component.css */ "./src/app/Jeptag-admin/Stores/add-store/add-store.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_store_service__WEBPACK_IMPORTED_MODULE_7__["StoreService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _Services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AddStoreComponent);
    return AddStoreComponent;
}());



/***/ }),

/***/ "./src/app/Jeptag-admin/Stores/edit-store/edit-store.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/Jeptag-admin/Stores/edit-store/edit-store.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0plcHRhZy1hZG1pbi9TdG9yZXMvZWRpdC1zdG9yZS9lZGl0LXN0b3JlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Jeptag-admin/Stores/edit-store/edit-store.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/Jeptag-admin/Stores/edit-store/edit-store.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-main__outer\">\n  <div class=\"app-main__inner\">\n    <div class=\"app-page-title\">\n      <div class=\"page-title-wrapper\">\n        <div class=\"page-title-heading\">\n          <div class=\"page-title-icon bg-warning text-white\">\n            <i class=\"icofont-dashboard-web  \">\n            </i>\n          </div>\n          <div> Store Managment\n            <div class=\"page-title-subheading\">Add Store\n            </div>\n          </div>\n        </div>\n        <div class=\"page-title-actions\">\n\n          <div class=\"d-inline-block dropdown\">\n            <a (click)=\"navigateToJobListing()\" class=\"border-0 btn-transition btn btn-outline-focus\">\n              <i class=\"icofont-arrow-left\"></i> back to list\n            </a>\n            <!-- <a href=\"product-all.php\" class=\"btn-shadow  btn btn-info\">\n              <i class=\"icofont-save\"></i> Save Product\n            </a>\n            <button type=\"button\" class=\"btn-shadow  btn btn-primary\">\n\n              <i class=\"icofont-save\"></i> Save and Continue Edit\n            </button>\n            <button type=\"button\" class=\"btn-shadow  btn btn-success\">\n\n              <i class=\"icofont-ui-copy\"></i> Copy Product\n            </button> -->\n            <!-- <button style=\"margin-left: 5px;\" type=\"button\" class=\"btn-shadow  btn btn-danger\">\n              <i class=\"icofont-trash\"></i> Delete\n            </button> -->\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-12 col-lg-12\">\n        <ul class=\"body-tabs body-tabs-layout tabs-animated body-tabs-animated nav\">\n          <li class=\"nav-item\">\n            <a role=\"tab\" class=\"nav-link active\" id=\"tab-0\" data-toggle=\"tab\" href=\"#tab-content-0\">\n              <span>Store Information</span>\n            </a>\n          </li>\n          <!-- <li class=\"nav-item\">\n            <a role=\"tab\" class=\"nav-link\" id=\"tab-1\" data-toggle=\"tab\" href=\"#tab-content-1\">\n              <span>Product Pictures</span>\n            </a>\n          </li> -->\n          <!-- <li class=\"nav-item\">\n            <a role=\"tab\" class=\"nav-link\" id=\"tab-1\" data-toggle=\"tab\" href=\"#tab-content-2\">\n              <span>Product Pricing</span>\n            </a>\n          </li> -->\n        </ul>\n        <div class=\"card mb-3\">\n\n          <div class=\"tab-content\">\n            <div class=\"tab-pane show active\" id=\"tab-content-0\" role=\"tabpanel\">\n              <div class=\"card\">\n                <mat-progress-bar *ngIf=\"!loaded\" mode=\"indeterminate\"></mat-progress-bar>\n                <app-form [clear_form]=\"clear_form\" [submit_clicked]=\"submit_clicked\" (formValues)=\"getJobData($event)\"\n                  [form]=form>\n                </app-form>\n                \n                <!-- <div class=\"card-body\">\n\n\n                  <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                      <div class=\"position-relative form-group\">\n                        <label class=\"\">Category name</label>\n                        <input type=\"text\" placeholder=\"...\" class=\"form-control\" value=\"Beef Burger\">\n                      </div>\n                    </div>\n                    <div class=\"col-lg-4\">\n\n                      <div class=\"position-relative form-group\">\n                        <label for=\"exampleCustomSelect\" class=\"\">Parent Category</label>\n                        <select type=\"select\" class=\"custom-select\">\n                          <option value=\"\">Select</option>\n                          <option>Burger</option>\n                          <option>Value 2</option>\n                          <option>Value 3</option>\n                          <option>Value 4</option>\n                          <option>Value 5</option>\n                        </select>\n                      </div>\n                    </div>\n                    <div class=\"col-lg-4\">\n                      <div class=\"position-relative form-group\">\n                        <label for=\"exampleCustomSelect\" class=\"\">Category Type</label>\n                        <select type=\"select\" class=\"custom-select\">\n                          <option value=\"\">Select</option>\n                          <option>Food</option>\n                          <option>Value 2</option>\n                          <option>Value 3</option>\n                          <option>Value 4</option>\n                          <option>Value 5</option>\n                        </select>\n                      </div>\n                    </div>\n\n\n                  </div>\n\n\n                  <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                      <div class=\"position-relative form-group\">\n                        <label class=\"bold\">Spice Level</label>\n                        <div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" checked id=\"check1\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check1\">Normal</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" checked id=\"check2\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check2\">Spicy</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" checkedid=\"check3\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check3\">Extra Spicy</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" id=\"check4\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check4\">Medium</label>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"position-relative form-group\">\n                        <label class=\"bold\">Allergens</label>\n                        <div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" checked id=\"check11\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check11\">Soy</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" id=\"check21\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check21\">Egg</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" id=\"check31\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check31\">Peanut</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" id=\"check41\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check41\">Chicken</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" id=\"check41\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check41\">Chicken</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" id=\"check41\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check41\">Chicken</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" id=\"check41\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check41\">Chicken</label>\n                          </div>\n                        </div>\n                      </div>\n\n\n                      <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                          <div class=\"position-relative form-group\">\n                            <label class=\"\">Kcal Count</label>\n                            <input type=\"text\" placeholder=\"...\" class=\"form-control\">\n                          </div>\n                        </div>\n\n                      </div>\n\n\n                      <div class=\"position-relative form-group\">\n\n                        <div>\n                          <label class=\"bold\">Hot Item</label> <br>\n                          <div class=\"custom-switch custom-control custom-control-inline\">\n                            <input type=\"checkbox\" checked id=\"check4111\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check4111\"> Yes</label>\n                          </div>\n\n                        </div>\n                      </div>\n\n                      <div class=\"position-relative form-group\">\n\n                        <div>\n\n                          <label class=\"bold\">Publish</label><br>\n                          <div class=\"custom-switch custom-control custom-control-inline\">\n                            <input type=\"checkbox\" id=\"check41111\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check41111\"> No</label>\n                          </div>\n                          <span class=\"small text-muted\"> Check to publish this product (visible in store). Uncheck to\n                            unpublish (product not available in store).</span>\n                        </div>\n                      </div>\n                    </div>\n\n                  </div>\n\n\n\n                  <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                      <div class=\"position-relative form-group\">\n                        <label class=\"\">Description</label>\n                        <textarea rows=\"3\" placeholder=\"...\" class=\"form-control\"> A tikki delight: Potato and peas patty topped with veg sauce, ketchup, tomatoes and onions\n\n                                                            </textarea>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"alert alert-info alert-dismissible fade show\" role=\"alert\">\n                    <button type=\"button\" class=\"close\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\n                    Product information successfully added\n                  </div>\n\n\n\n\n\n                </div> -->\n                <!-- <div class=\"d-block text-right card-footer\">\n                  <a href=\"javascript:void(0);\" class=\"btn-wide btn btn-success\">Save</a>\n                </div> -->\n              </div>\n\n            </div>\n            <div class=\"tab-pane show\" id=\"tab-content-1\" role=\"tabpanel\">\n              <div class=\"card\">\n                <!-- <div class=\"card-header\">Product Information</div> -->\n                <div class=\"card-body\">\n\n\n                  <div class=\"position-relative form-group\">\n                    <label for=\"exampleFile\" class=\"\">Upload Photo</label>\n                    <input name=\"file\" id=\"exampleFile\" type=\"file\" class=\"form-control-file\">\n\n                    <small class=\"form-text text-muted\">Up to 5 images, max 5 MB each.</small>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-lg-3\">\n                      ​<picture>\n                        <img src=\"assets/images/product-photo1.png\" class=\"img-fluid img-thumbnail\">\n                        <div class=\"buttons mt-2\">\n                          <button class=\"mb-2 mr-2 btn-transition btn btn-outline-light btn-sm\">Edit</button>\n                          <button class=\"mb-2 mr-2 btn-transition btn btn-outline-light btn-sm\">Delete</button>\n                        </div>\n                      </picture>\n\n                    </div>\n                    <div class=\"col-lg-3\">\n                      ​<picture>\n                        <img src=\"assets/images/product-photo1.png\" class=\"img-fluid img-thumbnail\">\n                        <div class=\"buttons mt-2\">\n                          <button class=\"mb-2 mr-2 btn-transition btn btn-outline-light btn-sm\">Edit</button>\n                          <button class=\"mb-2 mr-2 btn-transition btn btn-outline-light btn-sm\">Delete</button>\n                        </div>\n                      </picture>\n\n                    </div>\n                  </div>\n\n\n                </div>\n                <div class=\"d-block text-right card-footer\">\n                  <a href=\"javascript:void(0);\" class=\"btn-wide btn btn-success\">Save</a>\n                </div>\n              </div>\n            </div>\n            <div class=\"tab-pane show\" id=\"tab-content-2\" role=\"tabpanel\">\n              <div class=\"card\">\n                <!-- <div class=\"card-header\">Product Information</div> -->\n                <div class=\"card-body\">\n\n                  <div class=\"row\">\n                    <div class=\"col-lg-3\">\n                      <div class=\"position-relative form-group\">\n                        <label class=\"\">Price</label>\n                        <div class=\"input-group\">\n                          <input placeholder=\"...\" type=\"number\" class=\"form-control\">\n                          <div class=\"input-group-append\">\n                            <span class=\"input-group-text\">£</span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-lg-3\">\n                      <div class=\"position-relative form-group\">\n                        <label class=\"\">Old Price</label>\n                        <div class=\"input-group\">\n                          <input placeholder=\"...\" type=\"number\" class=\"form-control\">\n                          <div class=\"input-group-append\">\n                            <span class=\"input-group-text\">£</span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-lg-3\">\n                      <div class=\"position-relative form-group\">\n                        <label class=\"\">Product Cost</label>\n                        <div class=\"input-group\">\n                          <input placeholder=\"...\" type=\"number\" class=\"form-control\">\n                          <div class=\"input-group-append\">\n                            <span class=\"input-group-text\">£</span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-lg-3\">\n                      <div class=\"position-relative form-group\">\n                        <label class=\"\">Discount </label>\n                        <div class=\"input-group\">\n                          <input placeholder=\"...\" type=\"number\" class=\"form-control\">\n                          <div class=\"input-group-append\">\n                            <span class=\"input-group-text\">%</span>\n                            <span class=\"input-group-text\">£</span>\n\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-lg-3\">\n                      <div class=\"position-relative form-group\">\n                        <label class=\"\">Tax Amount</label>\n                        <div class=\"input-group\">\n                          <input placeholder=\"...\" type=\"number\" class=\"form-control\">\n                          <div class=\"input-group-append\">\n                            <span class=\"input-group-text\">£</span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n\n                  </div>\n\n\n                </div>\n                <div class=\"d-block text-right card-footer\">\n                  <a href=\"javascript:void(0);\" class=\"btn-wide btn btn-success\">Save</a>\n                </div>\n\n              </div>\n\n            </div>\n          </div>\n        </div>\n\n\n      </div>\n\n\n\n\n\n    </div>\n\n\n\n\n  </div>\n\n\n\n\n\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/Jeptag-admin/Stores/edit-store/edit-store.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/Jeptag-admin/Stores/edit-store/edit-store.component.ts ***!
  \************************************************************************/
/*! exports provided: EditStoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditStoreComponent", function() { return EditStoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../Services/auth.service */ "./src/app/Services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Options_product__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Options/product */ "./src/app/Jeptag-admin/Options/product.ts");
/* harmony import */ var _Services_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Services/store.service */ "./src/app/Jeptag-admin/Services/store.service.ts");
/* harmony import */ var _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Shared/swalAlerts */ "./src/app/Shared/swalAlerts.ts");








var EditStoreComponent = /** @class */ (function () {
    function EditStoreComponent(StoreService, active_route, router, AuthService) {
        this.StoreService = StoreService;
        this.active_route = active_route;
        this.router = router;
        this.AuthService = AuthService;
        this.form = {};
        this.fields = [];
        this.userData = {};
        this.loaded = false;
        this.edit = false;
    }
    EditStoreComponent.prototype.ngOnInit = function () {
        this.form['form_fields'] = this.fields;
        var store_id = this.active_route.snapshot.paramMap.get('id');
        console.log("idddd " + this.active_route.snapshot.paramMap.get('id'));
        this.company_name = this.active_route.snapshot.paramMap.get('cname');
        this.email = this.active_route.snapshot.paramMap.get('email');
        //console.log("word "+this.active_route.contains("ss"))
        if (store_id != null) {
            this.edit = true;
            this.loaded = true;
            this.getStoreById(store_id);
        }
        // else {
        //   this.edit = false;
        //    this.loaded = true;
        //   this.generateForm();
        // }
        // this.form['form_fields'] = this.fields;
        // this.loaded = true;
        // this.generateForm();
    };
    EditStoreComponent.prototype.getStoreById = function (id) {
        var _this = this;
        console.log("store id" + id);
        var store = this.StoreService.getStoreById(id);
        store.subscribe(function (result) {
            console.log("INSIDE store EDIT ");
            console.log('store by id:', result);
            _this.store = result['result'];
            console.log('RESULT:', result);
            if (result != null) {
                _this.loaded = true;
                console.log("job data above generate form" + _this.store);
                _this.generateForm(_this.store);
            }
            else {
                _this.loaded = true;
                _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_7__["SwalAlert"].errorAlert('', "Something went wrong! Please wait until we'll fix this issue");
            }
        }, function (err) {
            console.log('Error while getting Job by id.', err);
            _this.loaded = true;
            _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_7__["SwalAlert"].errorAlert('', 'Server Error!');
        });
    };
    EditStoreComponent.prototype.generateForm = function (store) {
        //  console.log("store"+store)
        this.fields = [
            { label: 'Name', type: 'text', bootstrapGridClass: "col-lg-6", name: "Name", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required], required: true, value: store ? store.Name : '' },
            {
                label: 'Address', type: 'text', bootstrapGridClass: "col-lg-6", name: "Address", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required], required: true, value: store ? store.Address : ''
            },
            {
                label: 'Company Name', type: 'text', bootstrapGridClass: "col-lg-6", name: "CompanyId", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required], required: true, value: this.company_name
            },
            {
                label: 'Store ID', type: 'text', bootstrapGridClass: "col-lg-6", name: "storeID", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required], required: true, value: store ? store.storeID : ''
            },
            {
                label: 'City', type: 'text', bootstrapGridClass: "col-lg-6", name: "City", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required], required: true, value: store ? store.City : ''
            },
            {
                label: 'Region', type: 'text', bootstrapGridClass: "col-lg-6", name: "Region", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required], required: true, value: store ? store.Region : ''
            },
            {
                label: 'Country', type: 'text', bootstrapGridClass: "col-lg-6", name: "Country", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required], required: true, value: store ? store.Country : ''
            },
            {
                label: 'Postscode', type: 'number', bootstrapGridClass: "col-lg-6", name: "Postscode", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required], required: true, value: store ? store.Postscode : ''
            },
            {
                label: 'Phone', type: 'number', bootstrapGridClass: "col-lg-6", name: "Phone", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required], required: true, value: store ? store.Phone : ''
            },
            {
                label: 'Fax', type: 'number', bootstrapGridClass: "col-lg-6", name: "Fax", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required], required: true, value: store ? store.Fax : ''
            },
            {
                label: 'GEOLat', type: 'number', bootstrapGridClass: "col-lg-6", name: "GEOLat", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required], required: true, value: store ? store.GEOLat : ''
            },
            {
                label: 'GEOLong', type: 'number', bootstrapGridClass: "col-lg-6", name: "GEOLong", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required], required: true, value: store ? store.GEOLong : ''
            },
            {
                label: 'Status', type: 'select', bootstrapGridClass: "col-lg-12", name: "status", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required], required: true,
                value: store ? store.status : 'online', options: _Options_product__WEBPACK_IMPORTED_MODULE_5__["Status"]
            }
        ];
        this.form['form_fields'] = this.fields;
        this.form['FormbootstrapGridClass'] = 'col-lg-12';
        this.form['map'] = false;
        this.form['MapbootstrapGridClass'] = 'col-lg-4';
        this.form['image'] = false;
        this.form['ImagebootstrapGridClass'] = 'col-lg-3';
        this.form['img_height'] = "200px";
        this.form['img_width'] = "200px";
        //  this.form['image_url'] = job ? job.job_image : null;
        this.form['submit'] = 'Save';
    };
    EditStoreComponent.prototype.getJobData = function (data) {
        console.log(data);
        //this.loggen_in_user = JSON.parse(localStorage.getItem('user'));
        this.userData = this.AuthService.getUser();
        console.log("user id :" + this.userData['id']);
        data['model'] = 'StoresDetail';
        // if (data['image'] != undefined) {
        //   data['job_image'] = data['image'];
        //   delete data['image'];
        // }
        this.clear_form = false;
        this.submit_clicked = true;
        if (this.edit) {
            var id = this.active_route.snapshot.paramMap.get('id');
            this.editStore(data, id);
        }
        else {
            data['seller_id'] = this.active_route.snapshot.paramMap.get('id');
            this.addStore(data);
        }
    };
    EditStoreComponent.prototype.editStore = function (data, id) {
        var _this = this;
        data['model'] = 'StoresDetail';
        this.StoreService.editStore(data, id).subscribe(function (result) {
            _this.submit_clicked = false;
            if (!result['error']) {
                _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_7__["SwalAlert"].sucessAlert('', 'Store Updated Sucessfully!');
            }
            else {
                _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_7__["SwalAlert"].errorAlert('', result['message'].charAt(0).toUpperCase() + result['message'].substring(1));
            }
        }, function (err) {
            _this.submit_clicked = false;
            console.log(err);
            _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_7__["SwalAlert"].errorAlert('', 'Server Error');
        });
    };
    EditStoreComponent.prototype.addStore = function (data) {
        var _this = this;
        this.StoreService.addStore(data).subscribe(function (result) {
            _this.submit_clicked = false;
            if (result['status']) {
                _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_7__["SwalAlert"].sucessAlert('', 'Store Added Sucessfully!');
                _this.clear_form = true;
            }
            else {
                _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_7__["SwalAlert"].errorAlert('', result['message'].charAt(0).toUpperCase() + result['message'].substring(1));
            }
        }, function (err) {
            _this.submit_clicked = false;
            console.error(err);
            _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_7__["SwalAlert"].errorAlert('', 'Server Error');
        });
    };
    EditStoreComponent.prototype.navigateToJobListing = function () {
        this.router.navigate(['jeptag/user/stores', this.active_route.snapshot.paramMap.get('storeid'), this.company_name, this.email]);
    };
    EditStoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-edit-store',
            template: __webpack_require__(/*! ./edit-store.component.html */ "./src/app/Jeptag-admin/Stores/edit-store/edit-store.component.html"),
            styles: [__webpack_require__(/*! ./edit-store.component.css */ "./src/app/Jeptag-admin/Stores/edit-store/edit-store.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_store_service__WEBPACK_IMPORTED_MODULE_6__["StoreService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _Services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], EditStoreComponent);
    return EditStoreComponent;
}());



/***/ }),

/***/ "./src/app/Jeptag-admin/Stores/store-listing/store-listing.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/Jeptag-admin/Stores/store-listing/store-listing.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0plcHRhZy1hZG1pbi9TdG9yZXMvc3RvcmUtbGlzdGluZy9zdG9yZS1saXN0aW5nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Jeptag-admin/Stores/store-listing/store-listing.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/Jeptag-admin/Stores/store-listing/store-listing.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-main__outer\">\n  <div class=\"app-main__inner\">\n    <div class=\"app-page-title\">\n      <div class=\"page-title-wrapper\">\n        <div class=\"page-title-heading\">\n          <div class=\"page-title-icon bg-warning text-white\">\n            <i class=\"icofont-dashboard-web  \">\n            </i>\n          </div>\n          <div> Stores Managment\n            <div class=\"page-title-subheading\">Stores listing\n            </div>\n          </div>\n        </div>\n        <div class=\"page-title-actions\">\n\n          <div class=\"d-inline-block dropdown\">\n            <a *ngIf=!add style=\"margin-left: 4px;color: white;\" class=\"btn-shadow  btn btn-info\" (click)=\"navigateToStoreAdd()\">\n              <i class=\"icofont-ui-add\"></i> Add New\n            </a>\n            <!-- <div class=\"btn-group \">\n              <button style=\"margin-left: 4px;\" type=\"button\" class=\"btn  btn-secondary\"><i class=\"icofont-upload-alt\"></i> Export</button>\n              <button type=\"button\" class=\"btn m btn-secondary dropdown-toggle dropdown-toggle-split\"\n                data-toggle=\"dropdown\"></button>\n              <div class=\"dropdown-menu\">\n                <a class=\"dropdown-item\" href=\"#\">Download PDF</a>\n                <a class=\"dropdown-item\" href=\"#\">Export to Excel</a>\n\n              </div>\n            </div>\n            <button style=\"margin-left: 4px;\" type=\"button\" class=\"btn  btn-secondary\"> <i class=\"icofont-download-alt\"></i> Import </button> -->\n\n            <!-- <button (click)=\"deleteMultipleStaff()\" style=\"margin-left: 4px;\" type=\"button\"\n              class=\"btn-shadow  btn btn-danger\">\n              <i class=\"icofont-trash\"></i> Delete Selected\n            </button> -->\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n\n        <h4 class=\"d-flex flex-wrap justify-content-between align-items-center mb-3\">\n          <div>Stores</div>\n          <!-- <div class=\"col-12 col-md-3 p-0 mb-3\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n          </div> -->\n        </h4>\n        <div class=\"main-card mb-3 card\">\n          <!-- <div class=\"card-header\">Products\n                                        <div class=\"btn-actions-pane-right\">\n                                            <div role=\"group\" class=\"btn-group-sm btn-group\">\n                                                <button class=\"active btn btn-focus\">Received </button>\n                                                <button class=\"btn btn-focus\">Pending</button>\n                                            </div>\n                                        </div>\n                                    </div> -->\n          <mat-progress-bar *ngIf=\"!loaded\" mode=\"indeterminate\"></mat-progress-bar>\n          <div class=\"card-body\">\n\n            <div class=\"table-responsive\">\n              <mat-form-field style=\"width: 100%;\">\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search...\">\n                <!-- (keyup)=\"applyFilter($event.target.value)\" -->\n              </mat-form-field>\n\n              <div class=\"mat-elevation-z8\">\n                <div class=\"example-container\">\n                  <table mat-table [dataSource]=\"dataSource\" style=\"width: 100%;\">\n                    <div>\n                      <!-- <ng-container matColumnDef=\"select\">\n                        <th mat-header-cell *matHeaderCellDef>\n                          <mat-checkbox color=\"primary\" (change)=\"$event ? masterToggle() : null\"\n                            [checked]=\"selection.hasValue() && isAllSelected()\"\n                            [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n                          </mat-checkbox>\n                        </th>\n                        <td mat-cell *matCellDef=\"let row\">\n                          <mat-checkbox color=\"primary\" (click)=\"$event.stopPropagation()\"\n                            (change)=\"checkboxClicked($event,row)\" [checked]=\"selection.isSelected(row)\">\n                          </mat-checkbox>\n                        </td>\n                      </ng-container> -->\n\n                      <!-- <ng-container matColumnDef=\"job_title\">\n                        <th mat-header-cell *matHeaderCellDef>Job Title </th>\n                        <td mat-cell *matCellDef=\"let element\"> <img style=\"width: 30px; height: 30px;\"\n                            [src]=\"element.user_image!=null ? element.user_image : '../../../assets/images/no_image.png'\" />\n                        </td>\n                      </ng-container> -->\n\n                      <ng-container matColumnDef=\"Name\" sticky>\n                        <th mat-header-cell *matHeaderCellDef> Name  </th>\n                        <td mat-cell *matCellDef=\"let element\">\n                          <span> {{element.Name }} </span>\n                         \n                        </td>\n                      </ng-container>\n\n                      <!-- <ng-container matColumnDef=\"description\" sticky>\n                        <th mat-header-cell *matHeaderCellDef> description </th>\n                        <td mat-cell *matCellDef=\"let element\">\n                          <span> {{element.description }} </span>\n                         \n                        </td>\n                      </ng-container> -->\n\n                     <!-- <ng-container style=\"margin-right: 10px;\" matColumnDef=\"status\">\n                        <th mat-header-cell *matHeaderCellDef> Type </th>\n                        <td mat-cell *matCellDef=\"let element\">\n                          <span class=\"badge\" [ngClass]=\"{\n                            'badge-info':element.status === 'online',\n                            'badge-warning':element.status === 'offline'\n                           \n                          }\"> {{element.status | removeUnderScore | titlecase}}</span>\n\n                        </td>\n                      </ng-container> -->\n\n                      <!-- <ng-container style=\"margin-right: 10px;\" matColumnDef=\"approved\">\n                        <th mat-header-cell *matHeaderCellDef> status </th>\n                        <td mat-cell *matCellDef=\"let element\">\n                          <span class=\"badge\" [ngClass]=\"{\n                            'badge-info':element.approved === '1',\n                            'badge-warning':element.approved === '0'\n                           \n                          }\"> {{element.approved | removeUnderScore | titlecase}}</span>\n\n                        </td>\n                      </ng-container> -->\n\n                      <ng-container style=\"margin-right: 10px;\" matColumnDef=\"status\">\n                        <th mat-header-cell *matHeaderCellDef> status </th>\n                        <td mat-cell *matCellDef=\"let element\">\n                          <span class=\"badge\" [ngClass]=\"{\n                            'badge-info':element.status === 'true',\n                            'badge-warning':element.status === 'false'\n                           \n                          }\"> {{element.status | removeUnderScore | titlecase}}</span>\n\n                        </td>\n                      </ng-container>\n                      <ng-container matColumnDef=\"City\">\n                        <th mat-header-cell *matHeaderCellDef> City </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.City}} </td>\n                      </ng-container>\n                      <ng-container matColumnDef=\"Region\">\n                        <th mat-header-cell *matHeaderCellDef> Region </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.Region}} </td>\n                      </ng-container>\n                      <ng-container matColumnDef=\"Country\">\n                        <th mat-header-cell *matHeaderCellDef> Country </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.Country}} </td>\n                      </ng-container>\n                      <ng-container matColumnDef=\"Phone\">\n                        <th mat-header-cell *matHeaderCellDef> Phone </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.Phone}} </td>\n                      </ng-container>\n\n                      <!-- <ng-container matColumnDef=\"position\">\n                        <th mat-header-cell *matHeaderCellDef> Position </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n                      </ng-container>\n\n                      <ng-container matColumnDef=\"Salary\">\n                        <th mat-header-cell *matHeaderCellDef> Salary </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.salary}} </td>\n                      </ng-container>\n                      <ng-container matColumnDef=\"weekly_hours\">\n                        <th mat-header-cell *matHeaderCellDef> Weekly hours </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.weekly_hours}} </td>\n                      </ng-container>\n\n                      <ng-container matColumnDef=\"location\">\n                        <th mat-header-cell *matHeaderCellDef> Location </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.location}} </td>\n                      </ng-container> -->\n\n                      <ng-container matColumnDef=\"actions\">\n                        <th mat-header-cell *matHeaderCellDef> Actions </th>\n                        <td mat-cell *matCellDef=\"let element\">\n                          <div class=\"buttons\">\n                            <a *ngIf=!add style=\"color: #8f8f8f;\" (click)=\"getJobId(element._id,'edit')\"\n                              class=\"mb-2 mr-2 btn-transition btn btn-outline-light btn-sm\">Edit</a>\n                            <button (click)=\"getJobId(element._id,'delete')\"\n                              class=\"mb-2 mr-2 btn-transition btn btn-outline-light btn-sm\">Delete</button>\n                              <button *ngIf=!add (click)=\"getJobId(element._id,'products')\"\n                              class=\"mb-2 mr-2 btn-transition btn btn-outline-light btn-sm\">View Products</button>\n                          </div>\n                        </td>\n                      </ng-container>\n\n\n                    </div>\n                    <tr mat-header-row *matHeaderRowDef=\"table_headers\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: table_headers;\"></tr>\n                  </table>\n                </div>\n                <mat-paginator #paginator [pageSize]=\"10\" showFirstLastButtons [pageSizeOptions]=\"[10,50,100,500]\">\n                </mat-paginator>\n\n              </div>\n            </div>\n          </div>\n\n\n        </div>\n      </div>\n\n    </div>\n\n\n  </div>\n\n\n\n\n\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/Jeptag-admin/Stores/store-listing/store-listing.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/Jeptag-admin/Stores/store-listing/store-listing.component.ts ***!
  \******************************************************************************/
/*! exports provided: StoreListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreListingComponent", function() { return StoreListingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _Services_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Services/store.service */ "./src/app/Jeptag-admin/Services/store.service.ts");
/* harmony import */ var src_app_Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Shared/swalAlerts */ "./src/app/Shared/swalAlerts.ts");







var StoreListingComponent = /** @class */ (function () {
    function StoreListingComponent(StoreService, router, currentActivatedRoute) {
        this.StoreService = StoreService;
        this.router = router;
        this.currentActivatedRoute = currentActivatedRoute;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]([]);
        this.initialSelection = [];
        this.allowMultiSelect = true;
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["SelectionModel"](this.allowMultiSelect, this.initialSelection);
        this.table_headers = [];
        this.data = [];
        this.storeData = {};
        this.add = false;
        this.loaded = false;
        this.staff_ids = [];
    }
    StoreListingComponent.prototype.ngOnInit = function () {
        this.table_headers = ['Name', 'status', 'City', 'Region', 'Country', 'Phone', 'actions'];
        var store_id = this.currentActivatedRoute.snapshot.paramMap.get('id');
        if (store_id != null) {
            this.add = false;
            this.getStaffListbyID(this.currentActivatedRoute.snapshot.paramMap.get('id'));
            this.cname = this.currentActivatedRoute.snapshot.paramMap.get('cname');
            this.email = this.currentActivatedRoute.snapshot.paramMap.get('email');
        }
        else {
            this.add = true;
            this.getStaffList();
        }
    };
    StoreListingComponent.prototype.getStaffList = function () {
        var _this = this;
        var staff = this.StoreService.getStores();
        staff.subscribe(function (result) {
            console.log('product list:', result);
            if (result != null) {
                _this.staff = result;
                _this.dataSource.data = _this.staff;
                _this.dataSource.connect().next(_this.staff);
                _this.dataSource.paginator = _this.paginator;
            }
            else {
                // SwalAlert.errorAlert('', result['message'].charAt(0).toUpperCase() + result['message'].substring(1));
                src_app_Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert('', "Error");
            }
            _this.loaded = true;
            _this.selection.clear();
        }, function (err) {
            _this.loaded = true;
            console.error(err);
        });
    };
    StoreListingComponent.prototype.getStaffListbyID = function (id) {
        var _this = this;
        console.log("In store list by ID");
        var staff = this.StoreService.getStoresByID(id);
        staff.subscribe(function (result) {
            console.log('stores list:', result);
            if (result != null) {
                _this.staff = result;
                _this.dataSource.data = _this.staff;
                _this.dataSource.connect().next(_this.staff);
                _this.dataSource.paginator = _this.paginator;
            }
            else {
                // SwalAlert.errorAlert('', result['message'].charAt(0).toUpperCase() + result['message'].substring(1));
                src_app_Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert('', "Error");
            }
            _this.loaded = true;
            _this.selection.clear();
        }, function (err) {
            _this.loaded = true;
            console.error(err);
        });
    };
    StoreListingComponent.prototype.getJobId = function (store_id, action) {
        this.storeData['model'] = 'StoresDetail';
        this.storeData['_id'] = store_id;
        console.log('job id', store_id);
        if (action == 'edit')
            this.router.navigate(['/jeptag/stores/edit', store_id, this.currentActivatedRoute.snapshot.paramMap.get('id'), this.cname, this.email]);
        else if (action == 'products')
            this.router.navigate(['/jeptag/stores/products', store_id, this.currentActivatedRoute.snapshot.paramMap.get('id'), this.email]);
        else {
            this.deleteStoreById(this.storeData);
        }
    };
    StoreListingComponent.prototype.deleteStoreById = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var response;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, src_app_Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].getDeleteSwal()];
                    case 1:
                        response = _a.sent();
                        if (response == true) {
                            this.loaded = false;
                            this.StoreService.deleteById(data).subscribe(function (result) {
                                if (!result['error']) {
                                    src_app_Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].sucessAlert('', 'Store Deleted Successfully!');
                                    if (_this.add) {
                                        _this.getStaffList();
                                    }
                                    else {
                                        _this.getStaffListbyID(_this.currentActivatedRoute.snapshot.paramMap.get('id'));
                                    }
                                }
                                else {
                                    _this.loaded = true;
                                    src_app_Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert('', result['message'].charAt(0).toUpperCase() + result['message'].substring(1));
                                }
                            }, function (err) {
                                _this.loaded = true;
                                console.error(err);
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    StoreListingComponent.prototype.deleteMultipleStaff = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var response;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.staff_ids.length > 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, src_app_Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].getDeleteSwal()];
                    case 1:
                        response = _a.sent();
                        if (response == true) {
                            this.loaded = false;
                            this.StoreService.deleteMultipeStaff(this.staff_ids).subscribe(function (result) {
                                if (!result['error']) {
                                    src_app_Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].sucessAlert('', 'Staff Deleted Successfully!');
                                    if (_this.add = true) {
                                        _this.getStaffList();
                                    }
                                    else {
                                        _this.getStaffListbyID(_this.currentActivatedRoute.snapshot.paramMap.get('id'));
                                    }
                                }
                                else {
                                    _this.loaded = true;
                                    src_app_Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert('', result['message'].charAt(0).toUpperCase() + result['message'].substring(1));
                                }
                            }, function (err) {
                                _this.loaded = true;
                                console.error(err);
                            });
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        src_app_Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert('', 'Please Select Staff to Delete!');
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    StoreListingComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    StoreListingComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected == numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    StoreListingComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
        this.staff_ids = this.getIdsFromSelectionArrayObject(this.selection.selected);
        // console.log(this.selection);
    };
    // $event ? selection.toggle(row) : null
    StoreListingComponent.prototype.checkboxClicked = function (event, row) {
        if (event) {
            this.selection.toggle(row);
        }
        else
            null;
        this.staff_ids = this.getIdsFromSelectionArrayObject(this.selection.selected);
        // console.log(this.selection);
    };
    StoreListingComponent.prototype.navigateToStoreAdd = function () {
        //   this.router.navigate(['add'], { relativeTo: this.currentActivatedRoute });
        this.router.navigate(['jeptag/user/stores/add', this.currentActivatedRoute.snapshot.paramMap.get('id'), this.cname, this.email]);
    };
    StoreListingComponent.prototype.navigateToStaffListing = function () {
        this.router.navigate(['/jeptag/user/stores', this.currentActivatedRoute.snapshot.paramMap.get('id')]);
    };
    StoreListingComponent.prototype.getIdsFromSelectionArrayObject = function (array_of_objects) {
        var ids = array_of_objects.map(function (a) { return a.id; });
        return ids;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], StoreListingComponent.prototype, "paginator", void 0);
    StoreListingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-store-listing',
            template: __webpack_require__(/*! ./store-listing.component.html */ "./src/app/Jeptag-admin/Stores/store-listing/store-listing.component.html"),
            styles: [__webpack_require__(/*! ./store-listing.component.css */ "./src/app/Jeptag-admin/Stores/store-listing/store-listing.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_store_service__WEBPACK_IMPORTED_MODULE_5__["StoreService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], StoreListingComponent);
    return StoreListingComponent;
}());



/***/ }),

/***/ "./src/app/Jeptag-admin/Tags/add-tag/add-tag.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/Jeptag-admin/Tags/add-tag/add-tag.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0plcHRhZy1hZG1pbi9UYWdzL2FkZC10YWcvYWRkLXRhZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Jeptag-admin/Tags/add-tag/add-tag.component.html":
/*!******************************************************************!*\
  !*** ./src/app/Jeptag-admin/Tags/add-tag/add-tag.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-main__outer\">\n  <div class=\"app-main__inner\">\n    <div class=\"app-page-title\">\n      <div class=\"page-title-wrapper\">\n        <div class=\"page-title-heading\">\n          <div class=\"page-title-icon bg-warning text-white\">\n            <i class=\"icofont-dashboard-web  \">\n            </i>\n          </div>\n          <div> Tags Managment\n            <div class=\"page-title-subheading\">Edit Tags\n            </div>\n          </div>\n        </div>\n        <div class=\"page-title-actions\">\n\n          <div class=\"d-inline-block dropdown\">\n            <a (click)=\"navigateToJobListing()\" class=\"border-0 btn-transition btn btn-outline-focus\">\n              <i class=\"icofont-arrow-left\"></i> back to list\n            </a>\n            <!-- <a href=\"product-all.php\" class=\"btn-shadow  btn btn-info\">\n              <i class=\"icofont-save\"></i> Save Product\n            </a>\n            <button type=\"button\" class=\"btn-shadow  btn btn-primary\">\n\n              <i class=\"icofont-save\"></i> Save and Continue Edit\n            </button>\n            <button type=\"button\" class=\"btn-shadow  btn btn-success\">\n\n              <i class=\"icofont-ui-copy\"></i> Copy Product\n            </button> -->\n            <!-- <button style=\"margin-left: 5px;\" type=\"button\" class=\"btn-shadow  btn btn-danger\">\n              <i class=\"icofont-trash\"></i> Delete\n            </button> -->\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-12 col-lg-12\">\n        <ul class=\"body-tabs body-tabs-layout tabs-animated body-tabs-animated nav\">\n          <li class=\"nav-item\">\n            <a role=\"tab\" class=\"nav-link active\" id=\"tab-0\" data-toggle=\"tab\" href=\"#tab-content-0\">\n              <span>Tags Information</span>\n            </a>\n          </li>\n          <!-- <li class=\"nav-item\">\n            <a role=\"tab\" class=\"nav-link\" id=\"tab-1\" data-toggle=\"tab\" href=\"#tab-content-1\">\n              <span>Product Pictures</span>\n            </a>\n          </li> -->\n          <!-- <li class=\"nav-item\">\n            <a role=\"tab\" class=\"nav-link\" id=\"tab-1\" data-toggle=\"tab\" href=\"#tab-content-2\">\n              <span>Product Pricing</span>\n            </a>\n          </li> -->\n        </ul>\n        <div class=\"card mb-3\">\n\n          <div class=\"tab-content\">\n            <div class=\"tab-pane show active\" id=\"tab-content-0\" role=\"tabpanel\">\n              <div class=\"card\">\n                <mat-progress-bar *ngIf=\"!loaded\" mode=\"indeterminate\"></mat-progress-bar>\n                <app-form [clear_form]=\"clear_form\" [submit_clicked]=\"submit_clicked\" (formValues)=\"getJobData($event)\"\n                  [form]=form>\n                </app-form>\n                \n                <!-- <div class=\"card-body\">\n\n\n                  <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                      <div class=\"position-relative form-group\">\n                        <label class=\"\">Category name</label>\n                        <input type=\"text\" placeholder=\"...\" class=\"form-control\" value=\"Beef Burger\">\n                      </div>\n                    </div>\n                    <div class=\"col-lg-4\">\n\n                      <div class=\"position-relative form-group\">\n                        <label for=\"exampleCustomSelect\" class=\"\">Parent Category</label>\n                        <select type=\"select\" class=\"custom-select\">\n                          <option value=\"\">Select</option>\n                          <option>Burger</option>\n                          <option>Value 2</option>\n                          <option>Value 3</option>\n                          <option>Value 4</option>\n                          <option>Value 5</option>\n                        </select>\n                      </div>\n                    </div>\n                    <div class=\"col-lg-4\">\n                      <div class=\"position-relative form-group\">\n                        <label for=\"exampleCustomSelect\" class=\"\">Category Type</label>\n                        <select type=\"select\" class=\"custom-select\">\n                          <option value=\"\">Select</option>\n                          <option>Food</option>\n                          <option>Value 2</option>\n                          <option>Value 3</option>\n                          <option>Value 4</option>\n                          <option>Value 5</option>\n                        </select>\n                      </div>\n                    </div>\n\n\n                  </div>\n\n\n                  <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                      <div class=\"position-relative form-group\">\n                        <label class=\"bold\">Spice Level</label>\n                        <div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" checked id=\"check1\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check1\">Normal</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" checked id=\"check2\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check2\">Spicy</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" checkedid=\"check3\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check3\">Extra Spicy</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" id=\"check4\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check4\">Medium</label>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"position-relative form-group\">\n                        <label class=\"bold\">Allergens</label>\n                        <div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" checked id=\"check11\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check11\">Soy</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" id=\"check21\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check21\">Egg</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" id=\"check31\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check31\">Peanut</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" id=\"check41\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check41\">Chicken</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" id=\"check41\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check41\">Chicken</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" id=\"check41\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check41\">Chicken</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" id=\"check41\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check41\">Chicken</label>\n                          </div>\n                        </div>\n                      </div>\n\n\n                      <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                          <div class=\"position-relative form-group\">\n                            <label class=\"\">Kcal Count</label>\n                            <input type=\"text\" placeholder=\"...\" class=\"form-control\">\n                          </div>\n                        </div>\n\n                      </div>\n\n\n                      <div class=\"position-relative form-group\">\n\n                        <div>\n                          <label class=\"bold\">Hot Item</label> <br>\n                          <div class=\"custom-switch custom-control custom-control-inline\">\n                            <input type=\"checkbox\" checked id=\"check4111\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check4111\"> Yes</label>\n                          </div>\n\n                        </div>\n                      </div>\n\n                      <div class=\"position-relative form-group\">\n\n                        <div>\n\n                          <label class=\"bold\">Publish</label><br>\n                          <div class=\"custom-switch custom-control custom-control-inline\">\n                            <input type=\"checkbox\" id=\"check41111\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check41111\"> No</label>\n                          </div>\n                          <span class=\"small text-muted\"> Check to publish this product (visible in store). Uncheck to\n                            unpublish (product not available in store).</span>\n                        </div>\n                      </div>\n                    </div>\n\n                  </div>\n\n\n\n                  <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                      <div class=\"position-relative form-group\">\n                        <label class=\"\">Description</label>\n                        <textarea rows=\"3\" placeholder=\"...\" class=\"form-control\"> A tikki delight: Potato and peas patty topped with veg sauce, ketchup, tomatoes and onions\n\n                                                            </textarea>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"alert alert-info alert-dismissible fade show\" role=\"alert\">\n                    <button type=\"button\" class=\"close\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\n                    Product information successfully added\n                  </div>\n\n\n\n\n\n                </div> -->\n                <!-- <div class=\"d-block text-right card-footer\">\n                  <a href=\"javascript:void(0);\" class=\"btn-wide btn btn-success\">Save</a>\n                </div> -->\n              </div>\n\n            </div>\n            <div class=\"tab-pane show\" id=\"tab-content-1\" role=\"tabpanel\">\n              <div class=\"card\">\n                <!-- <div class=\"card-header\">Product Information</div> -->\n                <div class=\"card-body\">\n\n\n                  <div class=\"position-relative form-group\">\n                    <label for=\"exampleFile\" class=\"\">Upload Photo</label>\n                    <input name=\"file\" id=\"exampleFile\" type=\"file\" class=\"form-control-file\">\n\n                    <small class=\"form-text text-muted\">Up to 5 images, max 5 MB each.</small>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-lg-3\">\n                      ​<picture>\n                        <img src=\"assets/images/product-photo1.png\" class=\"img-fluid img-thumbnail\">\n                        <div class=\"buttons mt-2\">\n                          <button class=\"mb-2 mr-2 btn-transition btn btn-outline-light btn-sm\">Edit</button>\n                          <button class=\"mb-2 mr-2 btn-transition btn btn-outline-light btn-sm\">Delete</button>\n                        </div>\n                      </picture>\n\n                    </div>\n                    <div class=\"col-lg-3\">\n                      ​<picture>\n                        <img src=\"assets/images/product-photo1.png\" class=\"img-fluid img-thumbnail\">\n                        <div class=\"buttons mt-2\">\n                          <button class=\"mb-2 mr-2 btn-transition btn btn-outline-light btn-sm\">Edit</button>\n                          <button class=\"mb-2 mr-2 btn-transition btn btn-outline-light btn-sm\">Delete</button>\n                        </div>\n                      </picture>\n\n                    </div>\n                  </div>\n\n\n                </div>\n                <div class=\"d-block text-right card-footer\">\n                  <a href=\"javascript:void(0);\" class=\"btn-wide btn btn-success\">Save</a>\n                </div>\n              </div>\n            </div>\n            <div class=\"tab-pane show\" id=\"tab-content-2\" role=\"tabpanel\">\n              <div class=\"card\">\n                <!-- <div class=\"card-header\">Product Information</div> -->\n                <div class=\"card-body\">\n\n                  <div class=\"row\">\n                    <div class=\"col-lg-3\">\n                      <div class=\"position-relative form-group\">\n                        <label class=\"\">Price</label>\n                        <div class=\"input-group\">\n                          <input placeholder=\"...\" type=\"number\" class=\"form-control\">\n                          <div class=\"input-group-append\">\n                            <span class=\"input-group-text\">£</span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-lg-3\">\n                      <div class=\"position-relative form-group\">\n                        <label class=\"\">Old Price</label>\n                        <div class=\"input-group\">\n                          <input placeholder=\"...\" type=\"number\" class=\"form-control\">\n                          <div class=\"input-group-append\">\n                            <span class=\"input-group-text\">£</span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-lg-3\">\n                      <div class=\"position-relative form-group\">\n                        <label class=\"\">Product Cost</label>\n                        <div class=\"input-group\">\n                          <input placeholder=\"...\" type=\"number\" class=\"form-control\">\n                          <div class=\"input-group-append\">\n                            <span class=\"input-group-text\">£</span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-lg-3\">\n                      <div class=\"position-relative form-group\">\n                        <label class=\"\">Discount </label>\n                        <div class=\"input-group\">\n                          <input placeholder=\"...\" type=\"number\" class=\"form-control\">\n                          <div class=\"input-group-append\">\n                            <span class=\"input-group-text\">%</span>\n                            <span class=\"input-group-text\">£</span>\n\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-lg-3\">\n                      <div class=\"position-relative form-group\">\n                        <label class=\"\">Tax Amount</label>\n                        <div class=\"input-group\">\n                          <input placeholder=\"...\" type=\"number\" class=\"form-control\">\n                          <div class=\"input-group-append\">\n                            <span class=\"input-group-text\">£</span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n\n                  </div>\n\n\n                </div>\n                <div class=\"d-block text-right card-footer\">\n                  <a href=\"javascript:void(0);\" class=\"btn-wide btn btn-success\">Save</a>\n                </div>\n\n              </div>\n\n            </div>\n          </div>\n        </div>\n\n\n      </div>\n\n\n\n\n\n    </div>\n\n\n\n\n  </div>\n\n\n\n\n\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/Jeptag-admin/Tags/add-tag/add-tag.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/Jeptag-admin/Tags/add-tag/add-tag.component.ts ***!
  \****************************************************************/
/*! exports provided: AddTagComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTagComponent", function() { return AddTagComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../Services/auth.service */ "./src/app/Services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Services_tags_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Services/tags.service */ "./src/app/Jeptag-admin/Services/tags.service.ts");
/* harmony import */ var _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Shared/swalAlerts */ "./src/app/Shared/swalAlerts.ts");







var AddTagComponent = /** @class */ (function () {
    function AddTagComponent(TagsService, active_route, router, AuthService) {
        this.TagsService = TagsService;
        this.active_route = active_route;
        this.router = router;
        this.AuthService = AuthService;
        this.form = {};
        this.fields = [];
        this.userData = {};
        this.loaded = false;
        this.edit = false;
    }
    AddTagComponent.prototype.ngOnInit = function () {
        this.form['form_fields'] = this.fields;
        var store_id = this.active_route.snapshot.paramMap.get('id');
        console.log("idddd " + this.active_route.snapshot.paramMap.get('id'));
        //if (store_id != null) {
        this.edit = true;
        this.loaded = true;
        this.getTagById(store_id);
        // }
        // else {
        //   this.edit = false;
        //    this.loaded = true;
        //   this.generateForm();
        // }
        // this.form['form_fields'] = this.fields;
        // this.loaded = true;
        // this.generateForm();
    };
    AddTagComponent.prototype.getTagById = function (id) {
        var _this = this;
        console.log("tag id" + id);
        var tag = this.TagsService.getTagById(id);
        tag.subscribe(function (result) {
            console.log("INSIDE tag EDIT ");
            console.log('tag by id:', result);
            _this.tags = result['result'];
            console.log('RESULT:', result);
            if (result != null) {
                _this.loaded = true;
                console.log("job data above generate form" + _this.tags);
                _this.generateForm(_this.tags);
            }
            else {
                _this.loaded = true;
                _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert('', "Something went wrong! Please wait until we'll fix this issue");
            }
        }, function (err) {
            console.log('Error while getting Job by id.', err);
            _this.loaded = true;
            _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert('', 'Server Error!');
        });
    };
    AddTagComponent.prototype.generateForm = function (tags) {
        //  console.log("store"+store)
        this.fields = [
            { label: 'TagID', type: 'text', bootstrapGridClass: "col-lg-12", name: "TagID", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required], required: true, value: tags ? tags.TagID : '' },
            // { label: 'JeptagID', type: 'text', bootstrapGridClass: "col-lg-12", name: "JeptagID", validations: [Validators.required], required: true, value: tags ? tags.JeptagID : '' },
            { label: 'TagType', type: 'text', bootstrapGridClass: "col-lg-12", name: "TagType", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required], required: true, value: tags ? tags.TagType : '' },
            { label: 'SellerID', type: 'text', bootstrapGridClass: "col-lg-12", name: "SellerID", required: true, value: tags ? tags.SellerID : '' },
            { label: 'BusinessID', type: 'text', bootstrapGridClass: "col-lg-12", name: "BusinessID", required: true, value: tags ? tags.BusinessID : '' },
            { label: 'ProductID', type: 'text', bootstrapGridClass: "col-lg-12", name: "ProductID", required: true, value: tags ? tags.ProductID : '' },
            { label: 'TagLat', type: 'text', bootstrapGridClass: "col-lg-12", name: "TagLat", required: true, value: tags ? tags.TagLat : '' },
            { label: 'TagLong', type: 'text', bootstrapGridClass: "col-lg-12", name: "TagLong", required: true, value: tags ? tags.TagLong : '' },
            { label: 'Counter', type: 'text', bootstrapGridClass: "col-lg-12", name: "counter", required: true, value: tags ? tags.counter : '' }
        ];
        this.form['form_fields'] = this.fields;
        this.form['FormbootstrapGridClass'] = 'col-lg-12';
        this.form['map'] = false;
        this.form['MapbootstrapGridClass'] = 'col-lg-4';
        this.form['image'] = false;
        this.form['ImagebootstrapGridClass'] = 'col-lg-3';
        this.form['img_height'] = "200px";
        this.form['img_width'] = "200px";
        //  this.form['image_url'] = job ? job.job_image : null;
        this.form['submit'] = 'Save';
    };
    AddTagComponent.prototype.getJobData = function (data) {
        console.log(data);
        //this.loggen_in_user = JSON.parse(localStorage.getItem('user'));
        // this.userData=  this.AuthService.getUser();
        // console.log("user id :"+this.userData['id'])
        //data['seller_id']=this.userData['id'];
        data['model'] = 'Tags';
        // if (data['image'] != undefined) {
        //   data['job_image'] = data['image'];
        //   delete data['image'];
        // }
        this.clear_form = false;
        this.submit_clicked = true;
        if (this.edit) {
            var id = this.active_route.snapshot.paramMap.get('id');
            this.editStore(data, id);
        }
        else {
            this.addStore(data);
        }
    };
    AddTagComponent.prototype.editStore = function (data, id) {
        var _this = this;
        data['model'] = 'Tags';
        this.TagsService.editTag(data, id).subscribe(function (result) {
            _this.submit_clicked = false;
            if (!result['error']) {
                _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].sucessAlert('', 'tags Updated Sucessfully!');
            }
            else {
                _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert('', result['message'].charAt(0).toUpperCase() + result['message'].substring(1));
            }
        }, function (err) {
            _this.submit_clicked = false;
            console.log(err);
            _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert('', 'Server Error');
        });
    };
    AddTagComponent.prototype.addStore = function (data) {
        var _this = this;
        this.TagsService.addStore(data).subscribe(function (result) {
            _this.submit_clicked = false;
            if (result['status']) {
                _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].sucessAlert('', 'tags Added Sucessfully!');
                _this.clear_form = true;
            }
            else {
                _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert('', result['message'].charAt(0).toUpperCase() + result['message'].substring(1));
            }
        }, function (err) {
            _this.submit_clicked = false;
            console.error(err);
            _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert('', 'Server Error');
        });
    };
    AddTagComponent.prototype.navigateToJobListing = function () {
        this.router.navigate(['jeptag/tags']);
    };
    AddTagComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-add-tag',
            template: __webpack_require__(/*! ./add-tag.component.html */ "./src/app/Jeptag-admin/Tags/add-tag/add-tag.component.html"),
            styles: [__webpack_require__(/*! ./add-tag.component.css */ "./src/app/Jeptag-admin/Tags/add-tag/add-tag.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_tags_service__WEBPACK_IMPORTED_MODULE_5__["TagsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _Services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AddTagComponent);
    return AddTagComponent;
}());



/***/ }),

/***/ "./src/app/Jeptag-admin/Tags/taglist/taglist.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/Jeptag-admin/Tags/taglist/taglist.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0plcHRhZy1hZG1pbi9UYWdzL3RhZ2xpc3QvdGFnbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Jeptag-admin/Tags/taglist/taglist.component.html":
/*!******************************************************************!*\
  !*** ./src/app/Jeptag-admin/Tags/taglist/taglist.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-main__outer\">\n  <div class=\"app-main__inner\">\n    <div class=\"app-page-title\">\n      <div class=\"page-title-wrapper\">\n        <div class=\"page-title-heading\">\n          <div class=\"page-title-icon bg-warning text-white\">\n            <i class=\"icofont-dashboard-web  \">\n            </i>\n          </div>\n          <div> Tags Managment\n            <div class=\"page-title-subheading\">Tags listing\n            </div>\n          </div>\n        </div>\n        <div class=\"page-title-actions\">\n\n          <div class=\"d-inline-block dropdown\">\n            <!-- <a  style=\"margin-left: 4px;color: white;\" class=\"btn-shadow  btn btn-info\" (click)=\"navigateToTagListAdd()\"> -->\n              <!-- <label for=\"exampleFile\" class=\"\">Upload file</label> -->\n              <input  type=\"file\"  accept=\".csv\" class=\"upload\"  #attachments (change)=\"changeListener($event.target.files)\"  class=\"form-control-file\">\n              <div class=\"buttons mt-2\">\n                <button style=\"margin-left: 4px;color: white;\" class=\"btn-shadow  btn btn-info\" (click)=\"submitFile()\">Submit</button>\n              </div>\n              <!-- <i class=\"icofont-ui-add\"></i> Add New\n            </a> -->\n            <!-- <div class=\"btn-group \">\n              <button style=\"margin-left: 4px;\" type=\"button\" class=\"btn  btn-secondary\"><i class=\"icofont-upload-alt\"></i> Export</button>\n              <button type=\"button\" class=\"btn m btn-secondary dropdown-toggle dropdown-toggle-split\"\n                data-toggle=\"dropdown\"></button>\n              <div class=\"dropdown-menu\">\n                <a class=\"dropdown-item\" href=\"#\">Download PDF</a>\n                <a class=\"dropdown-item\" href=\"#\">Export to Excel</a>\n\n              </div>\n            </div>\n            <button style=\"margin-left: 4px;\" type=\"button\" class=\"btn  btn-secondary\"> <i class=\"icofont-download-alt\"></i> Import </button> -->\n\n            <!-- <button (click)=\"deleteMultipleStaff()\" style=\"margin-left: 4px;\" type=\"button\"\n              class=\"btn-shadow  btn btn-danger\">\n              <i class=\"icofont-trash\"></i> Delete Selected\n            </button> -->\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n\n        <h4 class=\"d-flex flex-wrap justify-content-between align-items-center mb-3\">\n          <div>Tags</div>\n          <!-- <div class=\"col-12 col-md-3 p-0 mb-3\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n          </div> -->\n        </h4>\n        <div class=\"main-card mb-3 card\">\n          <!-- <div class=\"card-header\">Products\n                                        <div class=\"btn-actions-pane-right\">\n                                            <div role=\"group\" class=\"btn-group-sm btn-group\">\n                                                <button class=\"active btn btn-focus\">Received </button>\n                                                <button class=\"btn btn-focus\">Pending</button>\n                                            </div>\n                                        </div>\n                                    </div> -->\n          <mat-progress-bar *ngIf=\"!loaded\" mode=\"indeterminate\"></mat-progress-bar>\n          <div class=\"card-body\">\n\n            <div class=\"table-responsive\">\n              <mat-form-field style=\"width: 100%;\">\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search Tag Id...\">\n                <!-- (keyup)=\"applyFilter($event.target.value)\" -->\n              </mat-form-field>\n\n              <div class=\"mat-elevation-z8\">\n                <div class=\"example-container\">\n                  <table mat-table [dataSource]=\"dataSource\" style=\"width: 100%;\">\n                    <div>\n                      <!-- <ng-container matColumnDef=\"select\">\n                        <th mat-header-cell *matHeaderCellDef>\n                          <mat-checkbox color=\"primary\" (change)=\"$event ? masterToggle() : null\"\n                            [checked]=\"selection.hasValue() && isAllSelected()\"\n                            [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n                          </mat-checkbox>\n                        </th>\n                        <td mat-cell *matCellDef=\"let row\">\n                          <mat-checkbox color=\"primary\" (click)=\"$event.stopPropagation()\"\n                            (change)=\"checkboxClicked($event,row)\" [checked]=\"selection.isSelected(row)\">\n                          </mat-checkbox>\n                        </td>\n                      </ng-container> -->\n\n                      <!-- <ng-container matColumnDef=\"job_title\">\n                        <th mat-header-cell *matHeaderCellDef>Job Title </th>\n                        <td mat-cell *matCellDef=\"let element\"> <img style=\"width: 30px; height: 30px;\"\n                            [src]=\"element.user_image!=null ? element.user_image : '../../../assets/images/no_image.png'\" />\n                        </td>\n                      </ng-container> -->\n\n                      <ng-container matColumnDef=\"TagID\" sticky>\n                        <th mat-header-cell *matHeaderCellDef> TagID  </th>\n                        <td mat-cell *matCellDef=\"let element\">\n                          <span> {{element.TagID }} </span>\n                         \n                        </td>\n                      </ng-container>\n\n                      <!-- <ng-container matColumnDef=\"description\" sticky>\n                        <th mat-header-cell *matHeaderCellDef> description </th>\n                        <td mat-cell *matCellDef=\"let element\">\n                          <span> {{element.description }} </span>\n                         \n                        </td>\n                      </ng-container> -->\n\n                     <!-- <ng-container style=\"margin-right: 10px;\" matColumnDef=\"status\">\n                        <th mat-header-cell *matHeaderCellDef> Type </th>\n                        <td mat-cell *matCellDef=\"let element\">\n                          <span class=\"badge\" [ngClass]=\"{\n                            'badge-info':element.status === 'online',\n                            'badge-warning':element.status === 'offline'\n                           \n                          }\"> {{element.status | removeUnderScore | titlecase}}</span>\n\n                        </td>\n                      </ng-container> -->\n\n                      <!-- <ng-container style=\"margin-right: 10px;\" matColumnDef=\"approved\">\n                        <th mat-header-cell *matHeaderCellDef> status </th>\n                        <td mat-cell *matCellDef=\"let element\">\n                          <span class=\"badge\" [ngClass]=\"{\n                            'badge-info':element.approved === '1',\n                            'badge-warning':element.approved === '0'\n                           \n                          }\"> {{element.approved | removeUnderScore | titlecase}}</span>\n\n                        </td>\n                      </ng-container> -->\n<!-- \n                      <ng-container style=\"margin-right: 10px;\" matColumnDef=\"status\">\n                        <th mat-header-cell *matHeaderCellDef>  </th>\n                        <td mat-cell *matCellDef=\"let element\">\n                          <span class=\"badge\" [ngClass]=\"{\n                            'badge-info':element.status === 'true',\n                            'badge-warning':element.status === 'false'\n                           \n                          }\"> {{element.status | removeUnderScore | titlecase}}</span>\n\n                        </td>\n                      </ng-container> -->\n                      <!-- <ng-container matColumnDef=\"JeptagID\">\n                        <th mat-header-cell *matHeaderCellDef> JeptagID </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.JeptagID}} </td>\n                      </ng-container> -->\n                      <ng-container matColumnDef=\"TagType\">\n                        <th mat-header-cell *matHeaderCellDef> TagType </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.TagType}} </td>\n                      </ng-container>\n                      <ng-container matColumnDef=\"SellerID\">\n                        <th mat-header-cell *matHeaderCellDef> SellerID </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.SellerID}} </td>\n                      </ng-container>\n                      <ng-container matColumnDef=\"ProductID\">\n                        <th mat-header-cell *matHeaderCellDef> ProductID </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.ProductID}} </td>\n                      </ng-container>\n\n                      <!-- <ng-container matColumnDef=\"position\">\n                        <th mat-header-cell *matHeaderCellDef> Position </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n                      </ng-container>\n\n                      <ng-container matColumnDef=\"Salary\">\n                        <th mat-header-cell *matHeaderCellDef> Salary </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.salary}} </td>\n                      </ng-container>\n                      <ng-container matColumnDef=\"weekly_hours\">\n                        <th mat-header-cell *matHeaderCellDef> Weekly hours </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.weekly_hours}} </td>\n                      </ng-container>\n\n                      <ng-container matColumnDef=\"location\">\n                        <th mat-header-cell *matHeaderCellDef> Location </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.location}} </td>\n                      </ng-container> -->\n\n                      <ng-container matColumnDef=\"actions\">\n                        <th mat-header-cell *matHeaderCellDef> Actions </th>\n                        <td mat-cell *matCellDef=\"let element\">\n                          <div class=\"buttons\">\n                            <a  style=\"color: #8f8f8f;\" (click)=\"getJobId(element._id,'edit')\"\n                              class=\"mb-2 mr-2 btn-transition btn btn-outline-light btn-sm\">Edit</a>\n                            <button (click)=\"getJobId(element._id,'delete')\"\n                              class=\"mb-2 mr-2 btn-transition btn btn-outline-light btn-sm\">Delete</button>\n                              <!-- <button *ngIf=!add (click)=\"getJobId(element._id,'products')\"\n                              class=\"mb-2 mr-2 btn-transition btn btn-outline-light btn-sm\">View Products</button> -->\n                          </div>\n                        </td>\n                      </ng-container>\n\n\n                    </div>\n                    <tr mat-header-row *matHeaderRowDef=\"table_headers\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: table_headers;\"></tr>\n                  </table>\n                </div>\n                <mat-paginator #paginator  [length]=\"length\" [pageSize]=\"10\" showFirstLastButtons [pageSizeOptions]=\"[10,50,100,500]\" (page)=\"pageEvent=getNext($event)\">\n                </mat-paginator>\n\n              </div>\n            </div>\n          </div>\n\n\n        </div>\n      </div>\n\n    </div>\n\n\n  </div>\n\n\n\n\n\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/Jeptag-admin/Tags/taglist/taglist.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/Jeptag-admin/Tags/taglist/taglist.component.ts ***!
  \****************************************************************/
/*! exports provided: TaglistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaglistComponent", function() { return TaglistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _Services_tags_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Services/tags.service */ "./src/app/Jeptag-admin/Services/tags.service.ts");
/* harmony import */ var src_app_Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Shared/swalAlerts */ "./src/app/Shared/swalAlerts.ts");







var TaglistComponent = /** @class */ (function () {
    function TaglistComponent(TagsService, router, currentActivatedRoute) {
        this.TagsService = TagsService;
        this.router = router;
        this.currentActivatedRoute = currentActivatedRoute;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]([]);
        this.initialSelection = [];
        this.allowMultiSelect = true;
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["SelectionModel"](this.allowMultiSelect, this.initialSelection);
        this.table_headers = [];
        this.data = [];
        this.tagsData = {};
        this.add = false;
        this.loaded = false;
        this.staff_ids = [];
    }
    TaglistComponent.prototype.ngOnInit = function () {
        // this.table_headers = [ 'TagID',  'JeptagID', 'TagType','SellerID','ProductID' ,'actions'];
        this.table_headers = [
            "TagID",
            "TagType",
            "SellerID",
            "ProductID",
            "actions",
        ];
        var store_id = this.currentActivatedRoute.snapshot.paramMap.get("id");
        if (store_id != null) {
            this.add = false;
            this.getStaffListbyID(this.currentActivatedRoute.snapshot.paramMap.get("id"));
        }
        else {
            this.add = true;
            this.getStaffList();
        }
    };
    TaglistComponent.prototype.getStaffList = function () {
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
        var _this = this;
        var staff = this.TagsService.getPaginationtags(0);
        staff.subscribe(function (result) {
            console.log("Tag list:", result);
            if (result != null) {
                console.log("result['posts']", result["posts"]);
                _this.length = result["total"];
                _this.staff = result["posts"];
                _this.dataSource.data = _this.staff;
                _this.dataSource.connect().next(_this.staff);
                _this.dataSource.paginator = _this.paginator;
            }
            else {
                // SwalAlert.errorAlert('', result['message'].charAt(0).toUpperCase() + result['message'].substring(1));
                src_app_Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert("", "Error");
            }
            _this.loaded = true;
            _this.selection.clear();
        }, function (err) {
            _this.loaded = true;
            console.error(err);
        });
    };
    TaglistComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.connect().next(this.staff);
        this.dataSource.paginator = this.paginator;
    };
    TaglistComponent.prototype.getNext = function (event) {
        var _this = this;
        this.loaded = false;
        this.staff = null;
        var offset = event.pageSize * event.pageIndex;
        console.log("pagination called " +
            "Page size" +
            event.pageSize +
            "Page Index" +
            event.pageIndex +
            "Ofset" +
            offset);
        var staff = this.TagsService.getPaginationtags(offset);
        staff.subscribe(function (result) {
            console.log("Tag list:", result);
            if (result != null) {
                console.log("result['posts']", result["posts"]);
                _this.length = result["total"];
                console.log("this.length", result["total"]);
                _this.staff = result["posts"];
                console.log("this.staff", _this.staff);
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](result["posts"]);
                //   this.dataSource.data = result['posts'];
                //  this.dataSource.connect().next(this.staff);
                // this.dataSource.paginator = this.paginator;
            }
            else {
                // SwalAlert.errorAlert('', result['message'].charAt(0).toUpperCase() + result['message'].substring(1));
                src_app_Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert("", "Error");
            }
            _this.loaded = true;
            _this.selection.clear();
        }, function (err) {
            _this.loaded = true;
            console.error(err);
        });
        // call your api function here with the offset
    };
    TaglistComponent.prototype.getStaffListbyID = function (id) {
        var _this = this;
        console.log("In store list by ID");
        var staff = this.TagsService.getTagsByID(id);
        staff.subscribe(function (result) {
            console.log("stores list:", result);
            if (result != null) {
                _this.staff = result;
                _this.dataSource.data = _this.staff;
                _this.dataSource.connect().next(_this.staff);
                _this.dataSource.paginator = _this.paginator;
            }
            else {
                // SwalAlert.errorAlert('', result['message'].charAt(0).toUpperCase() + result['message'].substring(1));
                src_app_Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert("", "Error");
            }
            _this.loaded = true;
            _this.selection.clear();
        }, function (err) {
            _this.loaded = true;
            console.error(err);
        });
    };
    TaglistComponent.prototype.getJobId = function (id, action) {
        this.tagsData["model"] = "Tags";
        this.tagsData["_id"] = id;
        console.log("tag id", id);
        if (action == "edit")
            this.router.navigate(["/jeptag/tags/edit", id]);
        // else if (action == 'products')
        // this.router.navigate(['/jeptag/stores/products',store_id,this.currentActivatedRoute.snapshot.paramMap.get('id') ]);
        else {
            this.deleteTagsById(this.tagsData);
        }
    };
    TaglistComponent.prototype.deleteTagsById = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var response;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, src_app_Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].getDeleteSwal()];
                    case 1:
                        response = _a.sent();
                        if (response == true) {
                            this.loaded = false;
                            this.TagsService.deleteById(data).subscribe(function (result) {
                                if (!result["error"]) {
                                    src_app_Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].sucessAlert("", "Tag Deleted Successfully!");
                                    _this.getStaffList();
                                }
                                else {
                                    _this.loaded = true;
                                    src_app_Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert("", result["message"].charAt(0).toUpperCase() +
                                        result["message"].substring(1));
                                }
                            }, function (err) {
                                _this.loaded = true;
                                console.error(err);
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // applyFilter(filterValue: string) {
    //   this.dataSource.filter = filterValue.trim().toLowerCase();
    // }
    TaglistComponent.prototype.applyFilter = function (filterValue) {
        var _this = this;
        var staff = this.TagsService.searchTagsById(filterValue.trim());
        staff.subscribe(function (result) {
            console.log("tags list:", result);
            if (result != null) {
                _this.staff = result["data"];
                _this.dataSource.data = _this.staff;
                _this.dataSource.connect().next(_this.staff);
                _this.dataSource.paginator = _this.paginator;
            }
            else {
                // SwalAlert.errorAlert('', result['message'].charAt(0).toUpperCase() + result['message'].substring(1));
                src_app_Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert("", "Error");
            }
            _this.loaded = true;
            _this.selection.clear();
        }, function (err) {
            _this.loaded = true;
            console.error(err);
        });
        // this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    TaglistComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected == numRows;
    };
    TaglistComponent.prototype.navigateToTagListAdd = function () {
        //   this.router.navigate(['add'], { relativeTo: this.currentActivatedRoute });
        this.router.navigate(["jeptag/tags/add"]);
    };
    TaglistComponent.prototype.navigateToStaffListing = function () {
        this.router.navigate([
            "/jeptag/user/stores",
            this.currentActivatedRoute.snapshot.paramMap.get("id"),
        ]);
    };
    TaglistComponent.prototype.getIdsFromSelectionArrayObject = function (array_of_objects) {
        var ids = array_of_objects.map(function (a) { return a.id; });
        return ids;
    };
    TaglistComponent.prototype.changeListener = function (files) {
        console.log("Inside files");
        console.log(files);
        //const fileList: FileList = event.target.files;
        if (files && files.length > 0) {
            this.file = files[0];
            //let file : File = files.item(0);
            console.log("name" + this.file.name);
            console.log("size" + this.file.size);
            console.log("type" + this.file.type);
            var reader_1 = new FileReader();
            reader_1.readAsText(this.file);
            reader_1.onload = function (e) {
                var csv = reader_1.result;
                console.log(csv);
            };
        }
    };
    TaglistComponent.prototype.submitFile = function () {
        var _this = this;
        console.log("file name in after submit" + this.file.name);
        var staff = this.TagsService.addCsvTags(this.file);
        staff.subscribe(function (result) {
            console.log("tags list:", result);
            if (result['status']) {
                src_app_Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].sucessAlert('', 'File Uploaded Sucessfully!');
                _this.attachment.nativeElement.value = '';
                _this.file = null;
            }
            else {
                _this.loaded = true;
                src_app_Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert('', "Something went wrong!");
            }
            _this.loaded = true;
        }, function (err) {
            _this.loaded = true;
            console.error(err);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], TaglistComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('attachments'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TaglistComponent.prototype, "attachment", void 0);
    TaglistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-taglist",
            template: __webpack_require__(/*! ./taglist.component.html */ "./src/app/Jeptag-admin/Tags/taglist/taglist.component.html"),
            styles: [__webpack_require__(/*! ./taglist.component.css */ "./src/app/Jeptag-admin/Tags/taglist/taglist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_tags_service__WEBPACK_IMPORTED_MODULE_5__["TagsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], TaglistComponent);
    return TaglistComponent;
}());



/***/ }),

/***/ "./src/app/Jeptag-admin/UserManagment/add-user/add-user.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/Jeptag-admin/UserManagment/add-user/add-user.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0plcHRhZy1hZG1pbi9Vc2VyTWFuYWdtZW50L2FkZC11c2VyL2FkZC11c2VyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Jeptag-admin/UserManagment/add-user/add-user.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/Jeptag-admin/UserManagment/add-user/add-user.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-main__outer\">\r\n  <div class=\"app-main__inner\">\r\n    <div class=\"app-page-title\">\r\n      <div class=\"page-title-wrapper\">\r\n        <div class=\"page-title-heading\">\r\n          <div class=\"page-title-icon bg-warning text-white\">\r\n            <i class=\"icofont-dashboard-web  \">\r\n            </i>\r\n          </div>\r\n          <div> User Managment\r\n            <div class=\"page-title-subheading\">Add User\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"page-title-actions\">\r\n\r\n          <div class=\"d-inline-block dropdown\">\r\n            <a (click)=\"navigateToProductListing()\" class=\"border-0 btn-transition btn btn-outline-focus\">\r\n              <i class=\"icofont-arrow-left\"></i> back to list\r\n            </a>\r\n            <!-- <a href=\"product-all.php\" class=\"btn-shadow  btn btn-info\">\r\n              <i class=\"icofont-save\"></i> Save Product\r\n            </a>\r\n            <button type=\"button\" class=\"btn-shadow  btn btn-primary\">\r\n\r\n              <i class=\"icofont-save\"></i> Save and Continue Edit\r\n            </button>\r\n            <button type=\"button\" class=\"btn-shadow  btn btn-success\">\r\n\r\n              <i class=\"icofont-ui-copy\"></i> Copy Product\r\n            </button> -->\r\n            <!-- <button style=\"margin-left: 5px;\" type=\"button\" class=\"btn-shadow  btn btn-danger\">\r\n              <i class=\"icofont-trash\"></i> Delete\r\n            </button> -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 col-lg-12\">\r\n        <ul class=\"body-tabs body-tabs-layout tabs-animated body-tabs-animated nav\">\r\n          <li class=\"nav-item\">\r\n            <a role=\"tab\" class=\"nav-link active\" id=\"tab-0\" data-toggle=\"tab\" href=\"#tab-content-0\">\r\n              <span>User Information</span>\r\n            </a>\r\n          </li>\r\n          <!-- <li class=\"nav-item\">\r\n            <a role=\"tab\" class=\"nav-link\" id=\"tab-1\" data-toggle=\"tab\" href=\"#tab-content-1\">\r\n              <span>Product Pictures</span>\r\n            </a>\r\n          </li> -->\r\n          <!-- <li class=\"nav-item\">\r\n            <a role=\"tab\" class=\"nav-link\" id=\"tab-1\" data-toggle=\"tab\" href=\"#tab-content-2\">\r\n              <span>Product Pricing</span>\r\n            </a>\r\n          </li> -->\r\n        </ul>\r\n        <div class=\"card mb-3\">\r\n\r\n          <div class=\"tab-content\">\r\n            <div class=\"tab-pane show active\" id=\"tab-content-0\" role=\"tabpanel\">\r\n              <div class=\"card\">\r\n                <mat-progress-bar *ngIf=\"!loaded\" mode=\"indeterminate\"></mat-progress-bar>\r\n                <app-form [clear_form]=\"clear_form\" [submit_clicked]=\"submit_clicked\" (formValues)=\"getStaffData($event)\"\r\n                  [form]=form>\r\n                </app-form>\r\n                \r\n                <!-- <div class=\"card-body\">\r\n\r\n\r\n                  <div class=\"row\">\r\n                    <div class=\"col-lg-12\">\r\n                      <div class=\"position-relative form-group\">\r\n                        <label class=\"\">Category name</label>\r\n                        <input type=\"text\" placeholder=\"...\" class=\"form-control\" value=\"Beef Burger\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-lg-4\">\r\n\r\n                      <div class=\"position-relative form-group\">\r\n                        <label for=\"exampleCustomSelect\" class=\"\">Parent Category</label>\r\n                        <select type=\"select\" class=\"custom-select\">\r\n                          <option value=\"\">Select</option>\r\n                          <option>Burger</option>\r\n                          <option>Value 2</option>\r\n                          <option>Value 3</option>\r\n                          <option>Value 4</option>\r\n                          <option>Value 5</option>\r\n                        </select>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-lg-4\">\r\n                      <div class=\"position-relative form-group\">\r\n                        <label for=\"exampleCustomSelect\" class=\"\">Category Type</label>\r\n                        <select type=\"select\" class=\"custom-select\">\r\n                          <option value=\"\">Select</option>\r\n                          <option>Food</option>\r\n                          <option>Value 2</option>\r\n                          <option>Value 3</option>\r\n                          <option>Value 4</option>\r\n                          <option>Value 5</option>\r\n                        </select>\r\n                      </div>\r\n                    </div>\r\n\r\n\r\n                  </div>\r\n\r\n\r\n                  <div class=\"row\">\r\n                    <div class=\"col-lg-12\">\r\n                      <div class=\"position-relative form-group\">\r\n                        <label class=\"bold\">Spice Level</label>\r\n                        <div>\r\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\r\n                            <input type=\"checkbox\" checked id=\"check1\" class=\"custom-control-input\">\r\n                            <label class=\"custom-control-label\" for=\"check1\">Normal</label>\r\n                          </div>\r\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\r\n                            <input type=\"checkbox\" checked id=\"check2\" class=\"custom-control-input\">\r\n                            <label class=\"custom-control-label\" for=\"check2\">Spicy</label>\r\n                          </div>\r\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\r\n                            <input type=\"checkbox\" checkedid=\"check3\" class=\"custom-control-input\">\r\n                            <label class=\"custom-control-label\" for=\"check3\">Extra Spicy</label>\r\n                          </div>\r\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\r\n                            <input type=\"checkbox\" id=\"check4\" class=\"custom-control-input\">\r\n                            <label class=\"custom-control-label\" for=\"check4\">Medium</label>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"position-relative form-group\">\r\n                        <label class=\"bold\">Allergens</label>\r\n                        <div>\r\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\r\n                            <input type=\"checkbox\" checked id=\"check11\" class=\"custom-control-input\">\r\n                            <label class=\"custom-control-label\" for=\"check11\">Soy</label>\r\n                          </div>\r\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\r\n                            <input type=\"checkbox\" id=\"check21\" class=\"custom-control-input\">\r\n                            <label class=\"custom-control-label\" for=\"check21\">Egg</label>\r\n                          </div>\r\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\r\n                            <input type=\"checkbox\" id=\"check31\" class=\"custom-control-input\">\r\n                            <label class=\"custom-control-label\" for=\"check31\">Peanut</label>\r\n                          </div>\r\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\r\n                            <input type=\"checkbox\" id=\"check41\" class=\"custom-control-input\">\r\n                            <label class=\"custom-control-label\" for=\"check41\">Chicken</label>\r\n                          </div>\r\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\r\n                            <input type=\"checkbox\" id=\"check41\" class=\"custom-control-input\">\r\n                            <label class=\"custom-control-label\" for=\"check41\">Chicken</label>\r\n                          </div>\r\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\r\n                            <input type=\"checkbox\" id=\"check41\" class=\"custom-control-input\">\r\n                            <label class=\"custom-control-label\" for=\"check41\">Chicken</label>\r\n                          </div>\r\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\r\n                            <input type=\"checkbox\" id=\"check41\" class=\"custom-control-input\">\r\n                            <label class=\"custom-control-label\" for=\"check41\">Chicken</label>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n\r\n                      <div class=\"row\">\r\n                        <div class=\"col-lg-12\">\r\n                          <div class=\"position-relative form-group\">\r\n                            <label class=\"\">Kcal Count</label>\r\n                            <input type=\"text\" placeholder=\"...\" class=\"form-control\">\r\n                          </div>\r\n                        </div>\r\n\r\n                      </div>\r\n\r\n\r\n                      <div class=\"position-relative form-group\">\r\n\r\n                        <div>\r\n                          <label class=\"bold\">Hot Item</label> <br>\r\n                          <div class=\"custom-switch custom-control custom-control-inline\">\r\n                            <input type=\"checkbox\" checked id=\"check4111\" class=\"custom-control-input\">\r\n                            <label class=\"custom-control-label\" for=\"check4111\"> Yes</label>\r\n                          </div>\r\n\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"position-relative form-group\">\r\n\r\n                        <div>\r\n\r\n                          <label class=\"bold\">Publish</label><br>\r\n                          <div class=\"custom-switch custom-control custom-control-inline\">\r\n                            <input type=\"checkbox\" id=\"check41111\" class=\"custom-control-input\">\r\n                            <label class=\"custom-control-label\" for=\"check41111\"> No</label>\r\n                          </div>\r\n                          <span class=\"small text-muted\"> Check to publish this product (visible in store). Uncheck to\r\n                            unpublish (product not available in store).</span>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                  </div>\r\n\r\n\r\n\r\n                  <div class=\"row\">\r\n                    <div class=\"col-lg-12\">\r\n                      <div class=\"position-relative form-group\">\r\n                        <label class=\"\">Description</label>\r\n                        <textarea rows=\"3\" placeholder=\"...\" class=\"form-control\"> A tikki delight: Potato and peas patty topped with veg sauce, ketchup, tomatoes and onions\r\n\r\n                                                            </textarea>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"alert alert-info alert-dismissible fade show\" role=\"alert\">\r\n                    <button type=\"button\" class=\"close\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\r\n                    Product information successfully added\r\n                  </div>\r\n\r\n\r\n\r\n\r\n\r\n                </div> -->\r\n                <!-- <div class=\"d-block text-right card-footer\">\r\n                  <a href=\"javascript:void(0);\" class=\"btn-wide btn btn-success\">Save</a>\r\n                </div> -->\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"tab-pane show\" id=\"tab-content-1\" role=\"tabpanel\">\r\n              <div class=\"card\">\r\n                <!-- <div class=\"card-header\">Product Information</div> -->\r\n                <div class=\"card-body\">\r\n\r\n\r\n                  <div class=\"position-relative form-group\">\r\n                    <label for=\"exampleFile\" class=\"\">Upload Photo</label>\r\n                    <input name=\"file\" id=\"exampleFile\" type=\"file\" class=\"form-control-file\">\r\n\r\n                    <small class=\"form-text text-muted\">Up to 5 images, max 5 MB each.</small>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-lg-3\">\r\n                      ​<picture>\r\n                        <img src=\"assets/images/product-photo1.png\" class=\"img-fluid img-thumbnail\">\r\n                        <div class=\"buttons mt-2\">\r\n                          <button class=\"mb-2 mr-2 btn-transition btn btn-outline-light btn-sm\">Edit</button>\r\n                          <button class=\"mb-2 mr-2 btn-transition btn btn-outline-light btn-sm\">Delete</button>\r\n                        </div>\r\n                      </picture>\r\n\r\n                    </div>\r\n                    <div class=\"col-lg-3\">\r\n                      ​<picture>\r\n                        <img src=\"assets/images/product-photo1.png\" class=\"img-fluid img-thumbnail\">\r\n                        <div class=\"buttons mt-2\">\r\n                          <button class=\"mb-2 mr-2 btn-transition btn btn-outline-light btn-sm\">Edit</button>\r\n                          <button class=\"mb-2 mr-2 btn-transition btn btn-outline-light btn-sm\">Delete</button>\r\n                        </div>\r\n                      </picture>\r\n\r\n                    </div>\r\n                  </div>\r\n\r\n\r\n                </div>\r\n                <div class=\"d-block text-right card-footer\">\r\n                  <a href=\"javascript:void(0);\" class=\"btn-wide btn btn-success\">Save</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"tab-pane show\" id=\"tab-content-2\" role=\"tabpanel\">\r\n              <div class=\"card\">\r\n                <!-- <div class=\"card-header\">Product Information</div> -->\r\n                <div class=\"card-body\">\r\n\r\n                  <div class=\"row\">\r\n                    <div class=\"col-lg-3\">\r\n                      <div class=\"position-relative form-group\">\r\n                        <label class=\"\">Price</label>\r\n                        <div class=\"input-group\">\r\n                          <input placeholder=\"...\" type=\"number\" class=\"form-control\">\r\n                          <div class=\"input-group-append\">\r\n                            <span class=\"input-group-text\">£</span>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3\">\r\n                      <div class=\"position-relative form-group\">\r\n                        <label class=\"\">Old Price</label>\r\n                        <div class=\"input-group\">\r\n                          <input placeholder=\"...\" type=\"number\" class=\"form-control\">\r\n                          <div class=\"input-group-append\">\r\n                            <span class=\"input-group-text\">£</span>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3\">\r\n                      <div class=\"position-relative form-group\">\r\n                        <label class=\"\">Product Cost</label>\r\n                        <div class=\"input-group\">\r\n                          <input placeholder=\"...\" type=\"number\" class=\"form-control\">\r\n                          <div class=\"input-group-append\">\r\n                            <span class=\"input-group-text\">£</span>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3\">\r\n                      <div class=\"position-relative form-group\">\r\n                        <label class=\"\">Discount </label>\r\n                        <div class=\"input-group\">\r\n                          <input placeholder=\"...\" type=\"number\" class=\"form-control\">\r\n                          <div class=\"input-group-append\">\r\n                            <span class=\"input-group-text\">%</span>\r\n                            <span class=\"input-group-text\">£</span>\r\n\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3\">\r\n                      <div class=\"position-relative form-group\">\r\n                        <label class=\"\">Tax Amount</label>\r\n                        <div class=\"input-group\">\r\n                          <input placeholder=\"...\" type=\"number\" class=\"form-control\">\r\n                          <div class=\"input-group-append\">\r\n                            <span class=\"input-group-text\">£</span>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                  </div>\r\n\r\n\r\n                </div>\r\n                <div class=\"d-block text-right card-footer\">\r\n                  <a href=\"javascript:void(0);\" class=\"btn-wide btn btn-success\">Save</a>\r\n                </div>\r\n\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n      </div>\r\n\r\n\r\n\r\n\r\n\r\n    </div>\r\n\r\n\r\n\r\n\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/Jeptag-admin/UserManagment/add-user/add-user.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/Jeptag-admin/UserManagment/add-user/add-user.component.ts ***!
  \***************************************************************************/
/*! exports provided: AddUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserComponent", function() { return AddUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _options_staff__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../options/staff */ "./src/app/Jeptag-admin/options/staff.ts");
/* harmony import */ var _Services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Services/user.service */ "./src/app/Jeptag-admin/Services/user.service.ts");
/* harmony import */ var _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Shared/swalAlerts */ "./src/app/Shared/swalAlerts.ts");
/* harmony import */ var _Options_staff__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Options/staff */ "./src/app/Jeptag-admin/Options/staff.ts");
/* harmony import */ var _Shared_validation_patterns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../Shared/validation_patterns */ "./src/app/Shared/validation_patterns.ts");









var AddUserComponent = /** @class */ (function () {
    function AddUserComponent(StaffService, active_route, router) {
        this.StaffService = StaffService;
        this.active_route = active_route;
        this.router = router;
        this.form = {};
        this.fields = [];
        this.loaded = false;
    }
    AddUserComponent.prototype.ngOnInit = function () {
        this.form['form_fields'] = this.fields;
        this.loaded = true;
        this.generateForm();
    };
    AddUserComponent.prototype.generateForm = function (staff) {
        this.fields = [
            { label: 'First Name', type: 'text', bootstrapGridClass: "col-lg-6", name: "first_name", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(25)], required: true, value: staff ? staff.first_name : '' },
            {
                label: 'Last Name', type: 'text', bootstrapGridClass: "col-lg-6", name: "last_name", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(25)], required: true, value: staff ? staff.last_name : ''
            },
            {
                label: 'Email', type: 'text', bootstrapGridClass: "col-lg-6", name: "email", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_Shared_validation_patterns__WEBPACK_IMPORTED_MODULE_8__["validation_patterns"].email_regex)], required: true, value: staff ? staff.email : ''
            },
            {
                label: 'Password', type: 'text', bootstrapGridClass: "col-lg-6", name: "password", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_Shared_validation_patterns__WEBPACK_IMPORTED_MODULE_8__["validation_patterns"].password_regex)], required: true, value: staff ? staff.password : ''
            },
            {
                label: 'Company Name', type: 'text', bootstrapGridClass: "col-lg-6", name: "company_name", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required], required: true, value: staff ? staff.company_name : ''
            },
            {
                label: 'Address', type: 'text', bootstrapGridClass: "col-lg-6", name: "Address", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required], required: true, value: staff ? staff.Address : ''
            },
            {
                label: 'City', type: 'text', bootstrapGridClass: "col-lg-6", name: "City", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required], required: true, value: staff ? staff.City : ''
            },
            {
                label: 'Region', type: 'text', bootstrapGridClass: "col-lg-6", name: "Region", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required], required: true, value: staff ? staff.Region : ''
            },
            {
                label: 'Country', type: 'select', bootstrapGridClass: "col-lg-6", name: "Country", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required], required: true, value: staff ? staff.Country : '', options: _options_staff__WEBPACK_IMPORTED_MODULE_4__["countries"]
            },
            {
                label: 'Postscode', type: 'number', bootstrapGridClass: "col-lg-6", name: "Postscode", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required], required: true, value: staff ? staff.Postscode : ''
            },
            {
                label: 'Phone', type: 'number', bootstrapGridClass: "col-lg-6", name: "Phone", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required], required: true, value: staff ? staff.Phone : ''
            },
            {
                label: 'Fax', type: 'number', bootstrapGridClass: "col-lg-6", name: "Fax", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required], required: true, value: staff ? staff.Fax : ''
            },
            {
                label: 'GEOLat', type: 'number', bootstrapGridClass: "col-lg-6", name: "GEOLat", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required], required: true, value: staff ? staff.GEOLat : ''
            },
            {
                label: 'GEOLong', type: 'number', bootstrapGridClass: "col-lg-6", name: "GEOLong", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required], required: true, value: staff ? staff.GEOLong : ''
            },
            {
                label: 'Type', type: 'ngselect', bootstrapGridClass: "col-lg-12", name: "type", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required], required: true,
                value: staff ? staff.roles : '', options: _Options_staff__WEBPACK_IMPORTED_MODULE_7__["StaffType"]
            }
        ];
        this.form['form_fields'] = this.fields;
        this.form['FormbootstrapGridClass'] = 'col-lg-12';
        this.form['map'] = false;
        this.form['MapbootstrapGridClass'] = 'col-lg-4';
        this.form['image'] = false;
        this.form['ImagebootstrapGridClass'] = 'col-lg-3';
        this.form['img_height'] = "200px";
        this.form['img_width'] = "200px";
        this.form['submit'] = 'Save';
    };
    AddUserComponent.prototype.getStaffData = function (data) {
        console.log(data);
        data['is_epos'] = true;
        // data['branch_id'] = 1;
        // data['email'] = data.email;
        // if (data['image'] != undefined) {
        //   data['user_image'] = data['image'];
        //   delete data['image'];
        // }
        this.clear_form = false;
        this.submit_clicked = true;
        this.addStaff(data);
    };
    AddUserComponent.prototype.addStaff = function (data) {
        var _this = this;
        this.StaffService.addStaff(data).subscribe(function (result) {
            _this.submit_clicked = false;
            if (result['status']) {
                _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].sucessAlert('', 'User Added Sucessfully!');
                _this.clear_form = true;
            }
            else {
                _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert('', result['message'].charAt(0).toUpperCase() + result['message'].substring(1));
            }
        }, function (err) {
            _this.submit_clicked = false;
            console.error(err);
            _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert('', 'Server Error');
        });
    };
    AddUserComponent.prototype.navigateToProductListing = function () {
        this.router.navigate(['jeptag/user']);
    };
    AddUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-user',
            template: __webpack_require__(/*! ./add-user.component.html */ "./src/app/Jeptag-admin/UserManagment/add-user/add-user.component.html"),
            styles: [__webpack_require__(/*! ./add-user.component.css */ "./src/app/Jeptag-admin/UserManagment/add-user/add-user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AddUserComponent);
    return AddUserComponent;
}());



/***/ }),

/***/ "./src/app/Jeptag-admin/UserManagment/edit-user/edit-user.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/Jeptag-admin/UserManagment/edit-user/edit-user.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0plcHRhZy1hZG1pbi9Vc2VyTWFuYWdtZW50L2VkaXQtdXNlci9lZGl0LXVzZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/Jeptag-admin/UserManagment/edit-user/edit-user.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/Jeptag-admin/UserManagment/edit-user/edit-user.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-main__outer\">\r\n  <div class=\"app-main__inner\">\r\n    <div class=\"app-page-title\">\r\n      <div class=\"page-title-wrapper\">\r\n        <div class=\"page-title-heading\">\r\n          <div class=\"page-title-icon bg-warning text-white\">\r\n            <i class=\"icofont-dashboard-web  \">\r\n            </i>\r\n          </div>\r\n          <div> User Managment\r\n            <div class=\"page-title-subheading\">Edit User\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"page-title-actions\">\r\n\r\n          <div class=\"d-inline-block dropdown\">\r\n            <a (click)=\"navigateToProductListing()\" class=\"border-0 btn-transition btn btn-outline-focus\">\r\n              <i class=\"icofont-arrow-left\"></i> back to list\r\n            </a>\r\n            <!-- <a href=\"product-all.php\" class=\"btn-shadow  btn btn-info\">\r\n              <i class=\"icofont-save\"></i> Save Product\r\n            </a>\r\n            <button type=\"button\" class=\"btn-shadow  btn btn-primary\">\r\n\r\n              <i class=\"icofont-save\"></i> Save and Continue Edit\r\n            </button>\r\n            <button type=\"button\" class=\"btn-shadow  btn btn-success\">\r\n\r\n              <i class=\"icofont-ui-copy\"></i> Copy Product\r\n            </button> -->\r\n            <!-- <button style=\"margin-left: 5px;\" type=\"button\" class=\"btn-shadow  btn btn-danger\">\r\n              <i class=\"icofont-trash\"></i> Delete\r\n            </button> -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 col-lg-12\">\r\n        <ul class=\"body-tabs body-tabs-layout tabs-animated body-tabs-animated nav\">\r\n          <li class=\"nav-item\">\r\n            <a role=\"tab\" class=\"nav-link active\" id=\"tab-0\" data-toggle=\"tab\" href=\"#tab-content-0\">\r\n              <span>User Information</span>\r\n            </a>\r\n          </li>\r\n          <!-- <li class=\"nav-item\">\r\n            <a role=\"tab\" class=\"nav-link\" id=\"tab-1\" data-toggle=\"tab\" href=\"#tab-content-1\">\r\n              <span>Product Pictures</span>\r\n            </a>\r\n          </li> -->\r\n          <!-- <li class=\"nav-item\">\r\n            <a role=\"tab\" class=\"nav-link\" id=\"tab-1\" data-toggle=\"tab\" href=\"#tab-content-2\">\r\n              <span>Product Pricing</span>\r\n            </a>\r\n          </li> -->\r\n        </ul>\r\n        <div class=\"card mb-3\">\r\n\r\n          <div class=\"tab-content\">\r\n            <div class=\"tab-pane show active\" id=\"tab-content-0\" role=\"tabpanel\">\r\n              <div class=\"card\">\r\n                <mat-progress-bar *ngIf=\"!loaded\" mode=\"indeterminate\"></mat-progress-bar>\r\n                <app-form [clear_form]=\"clear_form\" [submit_clicked]=\"submit_clicked\" (formValues)=\"getStaffData($event)\"\r\n                  [form]=form>\r\n                </app-form>\r\n                \r\n                <!-- <div class=\"card-body\">\r\n\r\n\r\n                  <div class=\"row\">\r\n                    <div class=\"col-lg-12\">\r\n                      <div class=\"position-relative form-group\">\r\n                        <label class=\"\">Category name</label>\r\n                        <input type=\"text\" placeholder=\"...\" class=\"form-control\" value=\"Beef Burger\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-lg-4\">\r\n\r\n                      <div class=\"position-relative form-group\">\r\n                        <label for=\"exampleCustomSelect\" class=\"\">Parent Category</label>\r\n                        <select type=\"select\" class=\"custom-select\">\r\n                          <option value=\"\">Select</option>\r\n                          <option>Burger</option>\r\n                          <option>Value 2</option>\r\n                          <option>Value 3</option>\r\n                          <option>Value 4</option>\r\n                          <option>Value 5</option>\r\n                        </select>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-lg-4\">\r\n                      <div class=\"position-relative form-group\">\r\n                        <label for=\"exampleCustomSelect\" class=\"\">Category Type</label>\r\n                        <select type=\"select\" class=\"custom-select\">\r\n                          <option value=\"\">Select</option>\r\n                          <option>Food</option>\r\n                          <option>Value 2</option>\r\n                          <option>Value 3</option>\r\n                          <option>Value 4</option>\r\n                          <option>Value 5</option>\r\n                        </select>\r\n                      </div>\r\n                    </div>\r\n\r\n\r\n                  </div>\r\n\r\n\r\n                  <div class=\"row\">\r\n                    <div class=\"col-lg-12\">\r\n                      <div class=\"position-relative form-group\">\r\n                        <label class=\"bold\">Spice Level</label>\r\n                        <div>\r\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\r\n                            <input type=\"checkbox\" checked id=\"check1\" class=\"custom-control-input\">\r\n                            <label class=\"custom-control-label\" for=\"check1\">Normal</label>\r\n                          </div>\r\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\r\n                            <input type=\"checkbox\" checked id=\"check2\" class=\"custom-control-input\">\r\n                            <label class=\"custom-control-label\" for=\"check2\">Spicy</label>\r\n                          </div>\r\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\r\n                            <input type=\"checkbox\" checkedid=\"check3\" class=\"custom-control-input\">\r\n                            <label class=\"custom-control-label\" for=\"check3\">Extra Spicy</label>\r\n                          </div>\r\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\r\n                            <input type=\"checkbox\" id=\"check4\" class=\"custom-control-input\">\r\n                            <label class=\"custom-control-label\" for=\"check4\">Medium</label>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"position-relative form-group\">\r\n                        <label class=\"bold\">Allergens</label>\r\n                        <div>\r\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\r\n                            <input type=\"checkbox\" checked id=\"check11\" class=\"custom-control-input\">\r\n                            <label class=\"custom-control-label\" for=\"check11\">Soy</label>\r\n                          </div>\r\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\r\n                            <input type=\"checkbox\" id=\"check21\" class=\"custom-control-input\">\r\n                            <label class=\"custom-control-label\" for=\"check21\">Egg</label>\r\n                          </div>\r\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\r\n                            <input type=\"checkbox\" id=\"check31\" class=\"custom-control-input\">\r\n                            <label class=\"custom-control-label\" for=\"check31\">Peanut</label>\r\n                          </div>\r\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\r\n                            <input type=\"checkbox\" id=\"check41\" class=\"custom-control-input\">\r\n                            <label class=\"custom-control-label\" for=\"check41\">Chicken</label>\r\n                          </div>\r\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\r\n                            <input type=\"checkbox\" id=\"check41\" class=\"custom-control-input\">\r\n                            <label class=\"custom-control-label\" for=\"check41\">Chicken</label>\r\n                          </div>\r\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\r\n                            <input type=\"checkbox\" id=\"check41\" class=\"custom-control-input\">\r\n                            <label class=\"custom-control-label\" for=\"check41\">Chicken</label>\r\n                          </div>\r\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\r\n                            <input type=\"checkbox\" id=\"check41\" class=\"custom-control-input\">\r\n                            <label class=\"custom-control-label\" for=\"check41\">Chicken</label>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n\r\n                      <div class=\"row\">\r\n                        <div class=\"col-lg-12\">\r\n                          <div class=\"position-relative form-group\">\r\n                            <label class=\"\">Kcal Count</label>\r\n                            <input type=\"text\" placeholder=\"...\" class=\"form-control\">\r\n                          </div>\r\n                        </div>\r\n\r\n                      </div>\r\n\r\n\r\n                      <div class=\"position-relative form-group\">\r\n\r\n                        <div>\r\n                          <label class=\"bold\">Hot Item</label> <br>\r\n                          <div class=\"custom-switch custom-control custom-control-inline\">\r\n                            <input type=\"checkbox\" checked id=\"check4111\" class=\"custom-control-input\">\r\n                            <label class=\"custom-control-label\" for=\"check4111\"> Yes</label>\r\n                          </div>\r\n\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"position-relative form-group\">\r\n\r\n                        <div>\r\n\r\n                          <label class=\"bold\">Publish</label><br>\r\n                          <div class=\"custom-switch custom-control custom-control-inline\">\r\n                            <input type=\"checkbox\" id=\"check41111\" class=\"custom-control-input\">\r\n                            <label class=\"custom-control-label\" for=\"check41111\"> No</label>\r\n                          </div>\r\n                          <span class=\"small text-muted\"> Check to publish this product (visible in store). Uncheck to\r\n                            unpublish (product not available in store).</span>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                  </div>\r\n\r\n\r\n\r\n                  <div class=\"row\">\r\n                    <div class=\"col-lg-12\">\r\n                      <div class=\"position-relative form-group\">\r\n                        <label class=\"\">Description</label>\r\n                        <textarea rows=\"3\" placeholder=\"...\" class=\"form-control\"> A tikki delight: Potato and peas patty topped with veg sauce, ketchup, tomatoes and onions\r\n\r\n                                                            </textarea>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"alert alert-info alert-dismissible fade show\" role=\"alert\">\r\n                    <button type=\"button\" class=\"close\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\r\n                    Product information successfully added\r\n                  </div>\r\n\r\n\r\n\r\n\r\n\r\n                </div> -->\r\n                <!-- <div class=\"d-block text-right card-footer\">\r\n                  <a href=\"javascript:void(0);\" class=\"btn-wide btn btn-success\">Save</a>\r\n                </div> -->\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"tab-pane show\" id=\"tab-content-1\" role=\"tabpanel\">\r\n              <div class=\"card\">\r\n                <!-- <div class=\"card-header\">Product Information</div> -->\r\n                <div class=\"card-body\">\r\n\r\n\r\n                  <div class=\"position-relative form-group\">\r\n                    <label for=\"exampleFile\" class=\"\">Upload Photo</label>\r\n                    <input name=\"file\" id=\"exampleFile\" type=\"file\" class=\"form-control-file\">\r\n\r\n                    <small class=\"form-text text-muted\">Up to 5 images, max 5 MB each.</small>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-lg-3\">\r\n                      ​<picture>\r\n                        <img src=\"assets/images/product-photo1.png\" class=\"img-fluid img-thumbnail\">\r\n                        <div class=\"buttons mt-2\">\r\n                          <button class=\"mb-2 mr-2 btn-transition btn btn-outline-light btn-sm\">Edit</button>\r\n                          <button class=\"mb-2 mr-2 btn-transition btn btn-outline-light btn-sm\">Delete</button>\r\n                        </div>\r\n                      </picture>\r\n\r\n                    </div>\r\n                    <div class=\"col-lg-3\">\r\n                      ​<picture>\r\n                        <img src=\"assets/images/product-photo1.png\" class=\"img-fluid img-thumbnail\">\r\n                        <div class=\"buttons mt-2\">\r\n                          <button class=\"mb-2 mr-2 btn-transition btn btn-outline-light btn-sm\">Edit</button>\r\n                          <button class=\"mb-2 mr-2 btn-transition btn btn-outline-light btn-sm\">Delete</button>\r\n                        </div>\r\n                      </picture>\r\n\r\n                    </div>\r\n                  </div>\r\n\r\n\r\n                </div>\r\n                <div class=\"d-block text-right card-footer\">\r\n                  <a href=\"javascript:void(0);\" class=\"btn-wide btn btn-success\">Save</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"tab-pane show\" id=\"tab-content-2\" role=\"tabpanel\">\r\n              <div class=\"card\">\r\n                <!-- <div class=\"card-header\">Product Information</div> -->\r\n                <div class=\"card-body\">\r\n\r\n                  <div class=\"row\">\r\n                    <div class=\"col-lg-3\">\r\n                      <div class=\"position-relative form-group\">\r\n                        <label class=\"\">Price</label>\r\n                        <div class=\"input-group\">\r\n                          <input placeholder=\"...\" type=\"number\" class=\"form-control\">\r\n                          <div class=\"input-group-append\">\r\n                            <span class=\"input-group-text\">£</span>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3\">\r\n                      <div class=\"position-relative form-group\">\r\n                        <label class=\"\">Old Price</label>\r\n                        <div class=\"input-group\">\r\n                          <input placeholder=\"...\" type=\"number\" class=\"form-control\">\r\n                          <div class=\"input-group-append\">\r\n                            <span class=\"input-group-text\">£</span>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3\">\r\n                      <div class=\"position-relative form-group\">\r\n                        <label class=\"\">Product Cost</label>\r\n                        <div class=\"input-group\">\r\n                          <input placeholder=\"...\" type=\"number\" class=\"form-control\">\r\n                          <div class=\"input-group-append\">\r\n                            <span class=\"input-group-text\">£</span>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3\">\r\n                      <div class=\"position-relative form-group\">\r\n                        <label class=\"\">Discount </label>\r\n                        <div class=\"input-group\">\r\n                          <input placeholder=\"...\" type=\"number\" class=\"form-control\">\r\n                          <div class=\"input-group-append\">\r\n                            <span class=\"input-group-text\">%</span>\r\n                            <span class=\"input-group-text\">£</span>\r\n\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3\">\r\n                      <div class=\"position-relative form-group\">\r\n                        <label class=\"\">Tax Amount</label>\r\n                        <div class=\"input-group\">\r\n                          <input placeholder=\"...\" type=\"number\" class=\"form-control\">\r\n                          <div class=\"input-group-append\">\r\n                            <span class=\"input-group-text\">£</span>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                  </div>\r\n\r\n\r\n                </div>\r\n                <div class=\"d-block text-right card-footer\">\r\n                  <a href=\"javascript:void(0);\" class=\"btn-wide btn btn-success\">Save</a>\r\n                </div>\r\n\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n      </div>\r\n\r\n\r\n\r\n\r\n\r\n    </div>\r\n\r\n\r\n\r\n\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/Jeptag-admin/UserManagment/edit-user/edit-user.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/Jeptag-admin/UserManagment/edit-user/edit-user.component.ts ***!
  \*****************************************************************************/
/*! exports provided: EditUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserComponent", function() { return EditUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/user.service */ "./src/app/Jeptag-admin/Services/user.service.ts");
/* harmony import */ var _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Shared/swalAlerts */ "./src/app/Shared/swalAlerts.ts");
/* harmony import */ var _Options_staff__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Options/staff */ "./src/app/Jeptag-admin/Options/staff.ts");







var EditUserComponent = /** @class */ (function () {
    function EditUserComponent(StaffService, active_route, router) {
        this.StaffService = StaffService;
        this.active_route = active_route;
        this.router = router;
        this.form = {};
        this.fields = [];
        this.loaded = false;
    }
    EditUserComponent.prototype.ngOnInit = function () {
        this.form['form_fields'] = this.fields;
        this.getStaffById(this.active_route.snapshot.paramMap.get('id'));
    };
    EditUserComponent.prototype.getStaffById = function (id) {
        var _this = this;
        var staff = this.StaffService.getStaffById(id);
        staff.subscribe(function (result) {
            console.log('Staff by id:', result);
            if (result != null) {
                _this.generateForm(result['result']);
            }
            else {
                _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_5__["SwalAlert"].errorAlert('', "Server error");
            }
            _this.loaded = true;
        }, function (err) {
            _this.loaded = true;
            console.log(err);
            _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_5__["SwalAlert"].errorAlert('', 'Server Error');
        });
    };
    EditUserComponent.prototype.generateForm = function (staff) {
        this.fields = [
            { label: 'First Name', type: 'text', bootstrapGridClass: "col-lg-6", name: "first_name", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required], required: true, value: staff ? staff.first_name : '' },
            {
                label: 'Last Name', type: 'text', bootstrapGridClass: "col-lg-6", name: "last_name", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required], required: true, value: staff ? staff.last_name : ''
            },
            {
                label: 'Company Name', type: 'text', bootstrapGridClass: "col-lg-6", name: "company_name", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required], required: true, value: staff ? staff.company_name : ''
            },
            {
                label: 'Address', type: 'text', bootstrapGridClass: "col-lg-6", name: "Address", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required], required: true, value: staff ? staff.Address : ''
            },
            {
                label: 'City', type: 'text', bootstrapGridClass: "col-lg-6", name: "City", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required], required: true, value: staff ? staff.City : ''
            },
            {
                label: 'Region', type: 'text', bootstrapGridClass: "col-lg-6", name: "Region", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required], required: true, value: staff ? staff.Region : ''
            },
            {
                label: 'Country', type: 'select', bootstrapGridClass: "col-lg-6", name: "Country", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required], required: true, value: staff ? staff.Country : '', options: _Options_staff__WEBPACK_IMPORTED_MODULE_6__["countries"]
            },
            {
                label: 'Postscode', type: 'number', bootstrapGridClass: "col-lg-6", name: "Postscode", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required], required: true, value: staff ? staff.Postscode : ''
            },
            {
                label: 'Phone', type: 'number', bootstrapGridClass: "col-lg-6", name: "Phone", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required], required: true, value: staff ? staff.Phone : ''
            },
            {
                label: 'Fax', type: 'number', bootstrapGridClass: "col-lg-6", name: "Fax", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required], required: true, value: staff ? staff.Fax : ''
            },
            {
                label: 'GEOLat', type: 'number', bootstrapGridClass: "col-lg-6", name: "GEOLat", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required], required: true, value: staff ? staff.GEOLat : ''
            },
            {
                label: 'GEOLong', type: 'number', bootstrapGridClass: "col-lg-6", name: "GEOLong", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required], required: true, value: staff ? staff.GEOLong : ''
            },
            { label: 'Type', type: 'ngselect', bootstrapGridClass: "col-lg-12", name: "type", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required], required: true,
                value: staff ? staff.roles : '', options: _Options_staff__WEBPACK_IMPORTED_MODULE_6__["StaffType"]
            }
        ];
        this.form['form_fields'] = this.fields;
        this.form['FormbootstrapGridClass'] = 'col-lg-12';
        this.form['map'] = false;
        this.form['MapbootstrapGridClass'] = 'col-lg-4';
        this.form['image'] = false;
        this.form['ImagebootstrapGridClass'] = 'col-lg-3';
        this.form['img_height'] = "200px";
        this.form['img_width'] = "200px";
        this.form['submit'] = 'Save';
    };
    EditUserComponent.prototype.getStaffData = function (data) {
        this.submit_clicked = true;
        data['is_epos'] = true;
        // data['branch_id'] = 1;
        //data['username']=data.email;
        // data['modified_by_id'] = 2;
        // data['created_by_id'] = 2;
        var staff_id = this.active_route.snapshot.paramMap.get('id');
        this.editStaff(data, staff_id);
    };
    EditUserComponent.prototype.editStaff = function (data, id) {
        var _this = this;
        console.log("id in staff to edit" + id);
        this.StaffService.uploadStaffById(data, id).subscribe(function (result) {
            _this.submit_clicked = false;
            if (!result['error']) {
                _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_5__["SwalAlert"].sucessAlert('', 'Staff Updated Sucessfully!');
            }
            else {
                _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_5__["SwalAlert"].errorAlert('', result['message'].charAt(0).toUpperCase() + result['message'].substring(1));
            }
            console.log(result);
        }, function (err) {
            _this.submit_clicked = false;
            console.log(err);
            _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_5__["SwalAlert"].errorAlert('', 'Server Error');
        });
    };
    EditUserComponent.prototype.navigateToProductListing = function () {
        this.router.navigate(['/jeptag/user']);
    };
    EditUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-user',
            template: __webpack_require__(/*! ./edit-user.component.html */ "./src/app/Jeptag-admin/UserManagment/edit-user/edit-user.component.html"),
            styles: [__webpack_require__(/*! ./edit-user.component.css */ "./src/app/Jeptag-admin/UserManagment/edit-user/edit-user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EditUserComponent);
    return EditUserComponent;
}());



/***/ }),

/***/ "./src/app/Jeptag-admin/UserManagment/users/users.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/Jeptag-admin/UserManagment/users/users.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0plcHRhZy1hZG1pbi9Vc2VyTWFuYWdtZW50L3VzZXJzL3VzZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Jeptag-admin/UserManagment/users/users.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/Jeptag-admin/UserManagment/users/users.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-main__outer\">\r\n  <div class=\"app-main__inner\">\r\n    <div class=\"app-page-title\">\r\n      <div class=\"page-title-wrapper\">\r\n        <div class=\"page-title-heading\">\r\n          <div class=\"page-title-icon bg-warning text-white\">\r\n            <i class=\"icofont-dashboard-web  \">\r\n            </i>\r\n          </div>\r\n          <div> Users Managment\r\n            <div class=\"page-title-subheading\">Users listing\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"page-title-actions\">\r\n\r\n          <div class=\"d-inline-block dropdown\">\r\n            <a style=\"margin-left: 4px;color: white;\" class=\"btn-shadow  btn btn-info\" (click)=\"navigateToStaffAdd()\">\r\n              <i class=\"icofont-ui-add\"></i> Add New\r\n            </a>\r\n          \r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n\r\n        <h4 class=\"d-flex flex-wrap justify-content-between align-items-center mb-3\">\r\n          <div>Users</div>\r\n          <!-- <div class=\"col-12 col-md-3 p-0 mb-3\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\r\n          </div> -->\r\n        </h4>\r\n        <div class=\"main-card mb-3 card\">\r\n          <!-- <div class=\"card-header\">Products\r\n                                        <div class=\"btn-actions-pane-right\">\r\n                                            <div role=\"group\" class=\"btn-group-sm btn-group\">\r\n                                                <button class=\"active btn btn-focus\">Received </button>\r\n                                                <button class=\"btn btn-focus\">Pending</button>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div> -->\r\n          <mat-progress-bar *ngIf=\"!loaded\" mode=\"indeterminate\"></mat-progress-bar>\r\n          <div class=\"card-body\">\r\n\r\n            <div class=\"table-responsive\">\r\n              <mat-form-field style=\"width: 100%;\">\r\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search...\">\r\n                <!-- (keyup)=\"applyFilter($event.target.value)\" -->\r\n              </mat-form-field>\r\n\r\n              <div class=\"mat-elevation-z8\">\r\n                <div class=\"example-container\">\r\n                  <table mat-table [dataSource]=\"dataSource\" style=\"width: 100%;\">\r\n                    <div>\r\n                      <!-- <ng-container matColumnDef=\"select\">\r\n                        <th mat-header-cell *matHeaderCellDef>\r\n                          <mat-checkbox color=\"primary\" (change)=\"$event ? masterToggle() : null\"\r\n                            [checked]=\"selection.hasValue() && isAllSelected()\"\r\n                            [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\r\n                          </mat-checkbox>\r\n                        </th>\r\n                        <td mat-cell *matCellDef=\"let row\">\r\n                          <mat-checkbox color=\"primary\" (click)=\"$event.stopPropagation()\"\r\n                            (change)=\"checkboxClicked($event,row)\" [checked]=\"selection.isSelected(row)\">\r\n                          </mat-checkbox>\r\n                        </td>\r\n                      </ng-container> -->\r\n\r\n                      <!-- <ng-container matColumnDef=\"user image\">\r\n                        <th mat-header-cell *matHeaderCellDef> </th>\r\n                        <td mat-cell *matCellDef=\"let element\"> <img style=\"width: 30px; height: 30px;\"\r\n                            [src]=\"element.user_image!=null ? element.user_image : '../../../assets/images/no_image.png'\" />\r\n                        </td>\r\n                      </ng-container> -->\r\n\r\n                      <ng-container matColumnDef=\"name\" sticky>\r\n                        <th mat-header-cell *matHeaderCellDef> Name </th>\r\n                        <td mat-cell *matCellDef=\"let element\">\r\n                          <span> {{element.first_name}} </span>\r\n                          <span> {{element.last_name}} </span>\r\n                        </td>\r\n                      </ng-container>\r\n\r\n                      <ng-container style=\"margin-right: 10px;\" matColumnDef=\"roles\">\r\n                        <th mat-header-cell *matHeaderCellDef> Type </th>\r\n                        <td mat-cell *matCellDef=\"let element\">\r\n                          <span class=\"badge\" [ngClass]=\"{\r\n                            'badge-info':element.roles === 'user',\r\n                            'badge-danger':element.roles === 'admin'\r\n                            \r\n                          }\"> {{element.roles | removeUnderScore | titlecase}}</span>\r\n                          <!-- {'admin': 1, 'user': 2, 'guest': 3, 'manager': 4, 'waiter': 5, 'staff': 6, 'kitchen_manager':7} -->\r\n\r\n                        </td>\r\n                      </ng-container>\r\n\r\n                      <ng-container matColumnDef=\"Email\">\r\n                        <th mat-header-cell *matHeaderCellDef> Email </th>\r\n                        <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\r\n                      </ng-container>\r\n\r\n                      <!-- <ng-container matColumnDef=\"Salary\">\r\n                        <th mat-header-cell *matHeaderCellDef> Salary </th>\r\n                        <td mat-cell *matCellDef=\"let element\"> {{element.salary}} </td>\r\n                      </ng-container>\r\n\r\n                      <ng-container matColumnDef=\"Salary Disbursement\">\r\n                        <th mat-header-cell *matHeaderCellDef> Salary Disbursement </th>\r\n                        <td mat-cell *matCellDef=\"let element\"> {{element.salary_disbursement}} </td>\r\n                      </ng-container>\r\n\r\n                      <ng-container matColumnDef=\"Job Shift\">\r\n                        <th mat-header-cell *matHeaderCellDef> Job Shift </th>\r\n                        <td mat-cell *matCellDef=\"let element\"> {{element.job_shift}} </td>\r\n                      </ng-container> -->\r\n\r\n                      <ng-container matColumnDef=\"actions\">\r\n                        <th mat-header-cell *matHeaderCellDef> Actions </th>\r\n                        <td mat-cell *matCellDef=\"let element\">\r\n                          <div class=\"buttons\">\r\n                            <a style=\"color: #8f8f8f;\" (click)=\"getUserId(element._id,'edit')\"\r\n                              class=\"mb-2 mr-2 btn-transition btn btn-outline-light btn-sm\">Edit</a>\r\n                            <button (click)=\"getUserId(element._id,'delete')\"\r\n                              class=\"mb-2 mr-2 btn-transition btn btn-outline-light btn-sm\">Delete</button>\r\n                              <button (click)=\"getUserStoreId(element._id,element.company_name,element.email)\"\r\n                              class=\"mb-2 mr-2 btn-transition btn btn-outline-light btn-sm\">View Stores</button>\r\n                          </div>\r\n                        </td>\r\n                      </ng-container>\r\n\r\n\r\n                    </div>\r\n                    <tr mat-header-row *matHeaderRowDef=\"table_headers\"></tr>\r\n                    <tr mat-row *matRowDef=\"let row; columns: table_headers;\"></tr>\r\n                  </table>\r\n                </div>\r\n                <mat-paginator #paginator [pageSize]=\"10\" showFirstLastButtons [pageSizeOptions]=\"[10,50,100,500]\">\r\n                </mat-paginator>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/Jeptag-admin/UserManagment/users/users.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/Jeptag-admin/UserManagment/users/users.component.ts ***!
  \*********************************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _Services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Services/user.service */ "./src/app/Jeptag-admin/Services/user.service.ts");
/* harmony import */ var src_app_Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Shared/swalAlerts */ "./src/app/Shared/swalAlerts.ts");







var UsersComponent = /** @class */ (function () {
    function UsersComponent(staffService, router, currentActivatedRoute) {
        this.staffService = staffService;
        this.router = router;
        this.currentActivatedRoute = currentActivatedRoute;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]([]);
        this.initialSelection = [];
        this.allowMultiSelect = true;
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["SelectionModel"](this.allowMultiSelect, this.initialSelection);
        this.table_headers = [];
        this.data = [];
        this.Userdata = {};
        this.loaded = false;
        this.staff_ids = [];
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.table_headers = ['name', 'roles', 'Email', 'actions'];
        this.getStaffList();
    };
    UsersComponent.prototype.getStaffList = function () {
        var _this = this;
        var staff = this.staffService.getStaff();
        staff.subscribe(function (result) {
            console.log('user list:', result);
            if (result != null) {
                _this.staff = result;
                _this.dataSource.data = _this.staff;
                _this.dataSource.connect().next(_this.staff);
                _this.dataSource.paginator = _this.paginator;
            }
            else {
                src_app_Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert('', "error");
            }
            _this.loaded = true;
            _this.selection.clear();
        }, function (err) {
            _this.loaded = true;
            console.error(err);
        });
    };
    UsersComponent.prototype.getUserId = function (user_id, action) {
        this.Userdata['model'] = 'users';
        this.Userdata['_id'] = user_id;
        console.log('staff id', user_id);
        if (action == 'edit')
            this.router.navigate(['/jeptag/user/edit', user_id]);
        else if (action == 'stores')
            this.router.navigate(['/jeptag/user/stores', user_id]);
        else {
            this.deleteUserById(this.Userdata);
        }
    };
    UsersComponent.prototype.getUserStoreId = function (user_id, company_Name, email) {
        this.Userdata['model'] = 'users';
        this.Userdata['_id'] = user_id;
        console.log('staff id', user_id);
        this.router.navigate(['/jeptag/user/stores', user_id, company_Name, email]);
    };
    UsersComponent.prototype.deleteUserById = function (Userdata) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var response;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, src_app_Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].getDeleteSwal()];
                    case 1:
                        response = _a.sent();
                        if (response == true) {
                            this.loaded = false;
                            this.staffService.deleteById(Userdata).subscribe(function (result) {
                                if (!result['error']) {
                                    src_app_Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].sucessAlert('', 'Deleted Successfully!');
                                    _this.getStaffList();
                                }
                                else {
                                    _this.loaded = true;
                                    src_app_Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert('', result['message'].charAt(0).toUpperCase() + result['message'].substring(1));
                                }
                            }, function (err) {
                                _this.loaded = true;
                                console.error(err);
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    UsersComponent.prototype.deleteMultipleStaff = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var response;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.staff_ids.length > 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, src_app_Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].getDeleteSwal()];
                    case 1:
                        response = _a.sent();
                        if (response == true) {
                            this.loaded = false;
                            this.staffService.deleteMultipeStaff(this.staff_ids).subscribe(function (result) {
                                if (!result['error']) {
                                    src_app_Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].sucessAlert('', 'Staff Deleted Successfully!');
                                    _this.getStaffList();
                                }
                                else {
                                    _this.loaded = true;
                                    src_app_Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert('', result['message'].charAt(0).toUpperCase() + result['message'].substring(1));
                                }
                            }, function (err) {
                                _this.loaded = true;
                                console.error(err);
                            });
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        src_app_Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert('', 'Please Select Staff to Delete!');
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UsersComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    UsersComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected == numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    UsersComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
        this.staff_ids = this.getIdsFromSelectionArrayObject(this.selection.selected);
        // console.log(this.selection);
    };
    // $event ? selection.toggle(row) : null
    UsersComponent.prototype.checkboxClicked = function (event, row) {
        if (event) {
            this.selection.toggle(row);
        }
        else
            null;
        this.staff_ids = this.getIdsFromSelectionArrayObject(this.selection.selected);
        // console.log(this.selection);
    };
    UsersComponent.prototype.navigateToStaffAdd = function () {
        this.router.navigate(['add'], { relativeTo: this.currentActivatedRoute });
    };
    UsersComponent.prototype.navigateToStaffListing = function () {
        this.router.navigate(['instamunch/staff']);
    };
    UsersComponent.prototype.getIdsFromSelectionArrayObject = function (array_of_objects) {
        var ids = array_of_objects.map(function (a) { return a.id; });
        return ids;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], UsersComponent.prototype, "paginator", void 0);
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/Jeptag-admin/UserManagment/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/Jeptag-admin/UserManagment/users/users.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/Jeptag-admin/brand/add-brands/add-brands.component.css":
/*!************************************************************************!*\
  !*** ./src/app/Jeptag-admin/brand/add-brands/add-brands.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0plcHRhZy1hZG1pbi9icmFuZC9hZGQtYnJhbmRzL2FkZC1icmFuZHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/Jeptag-admin/brand/add-brands/add-brands.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/Jeptag-admin/brand/add-brands/add-brands.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-main__outer\">\n  <div class=\"app-main__inner\">\n    <div class=\"app-page-title\">\n      <div class=\"page-title-wrapper\">\n        <div class=\"page-title-heading\">\n          <div class=\"page-title-icon bg-warning text-white\">\n            <i class=\"icofont-dashboard-web  \">\n            </i>\n          </div>\n          <div> Brand Managment\n            <div class=\"page-title-subheading\">Add Brand\n            </div>\n          </div>\n        </div>\n        <div class=\"page-title-actions\">\n\n          <div class=\"d-inline-block dropdown\">\n            <a (click)=\"navigateToJobListing()\" class=\"border-0 btn-transition btn btn-outline-focus\">\n              <i class=\"icofont-arrow-left\"></i> back to list\n            </a>\n            <!-- <a href=\"product-all.php\" class=\"btn-shadow  btn btn-info\">\n              <i class=\"icofont-save\"></i> Save Product\n            </a>\n            <button type=\"button\" class=\"btn-shadow  btn btn-primary\">\n\n              <i class=\"icofont-save\"></i> Save and Continue Edit\n            </button>\n            <button type=\"button\" class=\"btn-shadow  btn btn-success\">\n\n              <i class=\"icofont-ui-copy\"></i> Copy Product\n            </button> -->\n            <!-- <button style=\"margin-left: 5px;\" type=\"button\" class=\"btn-shadow  btn btn-danger\">\n              <i class=\"icofont-trash\"></i> Delete\n            </button> -->\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-12 col-lg-12\">\n        <ul class=\"body-tabs body-tabs-layout tabs-animated body-tabs-animated nav\">\n          <li class=\"nav-item\">\n            <a role=\"tab\" class=\"nav-link active\" id=\"tab-0\" data-toggle=\"tab\" href=\"#tab-content-0\">\n              <span>Brand Information</span>\n            </a>\n          </li>\n          <!-- <li class=\"nav-item\">\n            <a role=\"tab\" class=\"nav-link\" id=\"tab-1\" data-toggle=\"tab\" href=\"#tab-content-1\">\n              <span>Product Pictures</span>\n            </a>\n          </li> -->\n          <!-- <li class=\"nav-item\">\n            <a role=\"tab\" class=\"nav-link\" id=\"tab-1\" data-toggle=\"tab\" href=\"#tab-content-2\">\n              <span>Product Pricing</span>\n            </a>\n          </li> -->\n        </ul>\n        <div class=\"card mb-3\">\n\n          <div class=\"tab-content\">\n            <div class=\"tab-pane show active\" id=\"tab-content-0\" role=\"tabpanel\">\n              <div class=\"card\">\n                <mat-progress-bar *ngIf=\"!loaded\" mode=\"indeterminate\"></mat-progress-bar>\n                <app-form [clear_form]=\"clear_form\" [submit_clicked]=\"submit_clicked\" (formValues)=\"getJobData($event)\"\n                  [form]=form>\n                </app-form>\n                \n                <!-- <div class=\"card-body\">\n\n\n                  <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                      <div class=\"position-relative form-group\">\n                        <label class=\"\">Category name</label>\n                        <input type=\"text\" placeholder=\"...\" class=\"form-control\" value=\"Beef Burger\">\n                      </div>\n                    </div>\n                    <div class=\"col-lg-4\">\n\n                      <div class=\"position-relative form-group\">\n                        <label for=\"exampleCustomSelect\" class=\"\">Parent Category</label>\n                        <select type=\"select\" class=\"custom-select\">\n                          <option value=\"\">Select</option>\n                          <option>Burger</option>\n                          <option>Value 2</option>\n                          <option>Value 3</option>\n                          <option>Value 4</option>\n                          <option>Value 5</option>\n                        </select>\n                      </div>\n                    </div>\n                    <div class=\"col-lg-4\">\n                      <div class=\"position-relative form-group\">\n                        <label for=\"exampleCustomSelect\" class=\"\">Category Type</label>\n                        <select type=\"select\" class=\"custom-select\">\n                          <option value=\"\">Select</option>\n                          <option>Food</option>\n                          <option>Value 2</option>\n                          <option>Value 3</option>\n                          <option>Value 4</option>\n                          <option>Value 5</option>\n                        </select>\n                      </div>\n                    </div>\n\n\n                  </div>\n\n\n                  <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                      <div class=\"position-relative form-group\">\n                        <label class=\"bold\">Spice Level</label>\n                        <div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" checked id=\"check1\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check1\">Normal</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" checked id=\"check2\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check2\">Spicy</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" checkedid=\"check3\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check3\">Extra Spicy</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" id=\"check4\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check4\">Medium</label>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"position-relative form-group\">\n                        <label class=\"bold\">Allergens</label>\n                        <div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" checked id=\"check11\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check11\">Soy</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" id=\"check21\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check21\">Egg</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" id=\"check31\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check31\">Peanut</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" id=\"check41\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check41\">Chicken</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" id=\"check41\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check41\">Chicken</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" id=\"check41\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check41\">Chicken</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" id=\"check41\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check41\">Chicken</label>\n                          </div>\n                        </div>\n                      </div>\n\n\n                      <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                          <div class=\"position-relative form-group\">\n                            <label class=\"\">Kcal Count</label>\n                            <input type=\"text\" placeholder=\"...\" class=\"form-control\">\n                          </div>\n                        </div>\n\n                      </div>\n\n\n                      <div class=\"position-relative form-group\">\n\n                        <div>\n                          <label class=\"bold\">Hot Item</label> <br>\n                          <div class=\"custom-switch custom-control custom-control-inline\">\n                            <input type=\"checkbox\" checked id=\"check4111\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check4111\"> Yes</label>\n                          </div>\n\n                        </div>\n                      </div>\n\n                      <div class=\"position-relative form-group\">\n\n                        <div>\n\n                          <label class=\"bold\">Publish</label><br>\n                          <div class=\"custom-switch custom-control custom-control-inline\">\n                            <input type=\"checkbox\" id=\"check41111\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check41111\"> No</label>\n                          </div>\n                          <span class=\"small text-muted\"> Check to publish this product (visible in store). Uncheck to\n                            unpublish (product not available in store).</span>\n                        </div>\n                      </div>\n                    </div>\n\n                  </div>\n\n\n\n                  <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                      <div class=\"position-relative form-group\">\n                        <label class=\"\">Description</label>\n                        <textarea rows=\"3\" placeholder=\"...\" class=\"form-control\"> A tikki delight: Potato and peas patty topped with veg sauce, ketchup, tomatoes and onions\n\n                                                            </textarea>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"alert alert-info alert-dismissible fade show\" role=\"alert\">\n                    <button type=\"button\" class=\"close\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\n                    Product information successfully added\n                  </div>\n\n\n\n\n\n                </div> -->\n                <!-- <div class=\"d-block text-right card-footer\">\n                  <a href=\"javascript:void(0);\" class=\"btn-wide btn btn-success\">Save</a>\n                </div> -->\n              </div>\n\n            </div>\n            <div class=\"tab-pane show\" id=\"tab-content-1\" role=\"tabpanel\">\n              <div class=\"card\">\n                <!-- <div class=\"card-header\">Product Information</div> -->\n                <div class=\"card-body\">\n\n\n                  <div class=\"position-relative form-group\">\n                    <label for=\"exampleFile\" class=\"\">Upload Photo</label>\n                    <input name=\"file\" id=\"exampleFile\" type=\"file\" class=\"form-control-file\">\n\n                    <small class=\"form-text text-muted\">Up to 5 images, max 5 MB each.</small>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-lg-3\">\n                      ​<picture>\n                        <img src=\"assets/images/product-photo1.png\" class=\"img-fluid img-thumbnail\">\n                        <div class=\"buttons mt-2\">\n                          <button class=\"mb-2 mr-2 btn-transition btn btn-outline-light btn-sm\">Edit</button>\n                          <button class=\"mb-2 mr-2 btn-transition btn btn-outline-light btn-sm\">Delete</button>\n                        </div>\n                      </picture>\n\n                    </div>\n                    <div class=\"col-lg-3\">\n                      ​<picture>\n                        <img src=\"assets/images/product-photo1.png\" class=\"img-fluid img-thumbnail\">\n                        <div class=\"buttons mt-2\">\n                          <button class=\"mb-2 mr-2 btn-transition btn btn-outline-light btn-sm\">Edit</button>\n                          <button class=\"mb-2 mr-2 btn-transition btn btn-outline-light btn-sm\">Delete</button>\n                        </div>\n                      </picture>\n\n                    </div>\n                  </div>\n\n\n                </div>\n                <div class=\"d-block text-right card-footer\">\n                  <a href=\"javascript:void(0);\" class=\"btn-wide btn btn-success\">Save</a>\n                </div>\n              </div>\n            </div>\n            <div class=\"tab-pane show\" id=\"tab-content-2\" role=\"tabpanel\">\n              <div class=\"card\">\n                <!-- <div class=\"card-header\">Product Information</div> -->\n                <div class=\"card-body\">\n\n                  <div class=\"row\">\n                    <div class=\"col-lg-3\">\n                      <div class=\"position-relative form-group\">\n                        <label class=\"\">Price</label>\n                        <div class=\"input-group\">\n                          <input placeholder=\"...\" type=\"number\" class=\"form-control\">\n                          <div class=\"input-group-append\">\n                            <span class=\"input-group-text\">£</span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-lg-3\">\n                      <div class=\"position-relative form-group\">\n                        <label class=\"\">Old Price</label>\n                        <div class=\"input-group\">\n                          <input placeholder=\"...\" type=\"number\" class=\"form-control\">\n                          <div class=\"input-group-append\">\n                            <span class=\"input-group-text\">£</span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-lg-3\">\n                      <div class=\"position-relative form-group\">\n                        <label class=\"\">Product Cost</label>\n                        <div class=\"input-group\">\n                          <input placeholder=\"...\" type=\"number\" class=\"form-control\">\n                          <div class=\"input-group-append\">\n                            <span class=\"input-group-text\">£</span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-lg-3\">\n                      <div class=\"position-relative form-group\">\n                        <label class=\"\">Discount </label>\n                        <div class=\"input-group\">\n                          <input placeholder=\"...\" type=\"number\" class=\"form-control\">\n                          <div class=\"input-group-append\">\n                            <span class=\"input-group-text\">%</span>\n                            <span class=\"input-group-text\">£</span>\n\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-lg-3\">\n                      <div class=\"position-relative form-group\">\n                        <label class=\"\">Tax Amount</label>\n                        <div class=\"input-group\">\n                          <input placeholder=\"...\" type=\"number\" class=\"form-control\">\n                          <div class=\"input-group-append\">\n                            <span class=\"input-group-text\">£</span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n\n                  </div>\n\n\n                </div>\n                <div class=\"d-block text-right card-footer\">\n                  <a href=\"javascript:void(0);\" class=\"btn-wide btn btn-success\">Save</a>\n                </div>\n\n              </div>\n\n            </div>\n          </div>\n        </div>\n\n\n      </div>\n\n\n\n\n\n    </div>\n\n\n\n\n  </div>\n\n\n\n\n\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/Jeptag-admin/brand/add-brands/add-brands.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/Jeptag-admin/brand/add-brands/add-brands.component.ts ***!
  \***********************************************************************/
/*! exports provided: AddBrandsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBrandsComponent", function() { return AddBrandsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../Services/auth.service */ "./src/app/Services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Services_brand_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Services/brand.service */ "./src/app/Jeptag-admin/Services/brand.service.ts");
/* harmony import */ var _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Shared/swalAlerts */ "./src/app/Shared/swalAlerts.ts");







var AddBrandsComponent = /** @class */ (function () {
    function AddBrandsComponent(BrandService, active_route, router, AuthService) {
        this.BrandService = BrandService;
        this.active_route = active_route;
        this.router = router;
        this.AuthService = AuthService;
        this.form = {};
        this.fields = [];
        this.userData = {};
        this.loaded = false;
        this.edit = false;
    }
    AddBrandsComponent.prototype.ngOnInit = function () {
        this.form['form_fields'] = this.fields;
        var store_id = this.active_route.snapshot.paramMap.get('id');
        console.log("idddd " + this.active_route.snapshot.paramMap.get('id'));
        if (store_id != null) {
            this.edit = true;
            this.loaded = true;
            this.getStoreById(store_id);
        }
        else {
            this.edit = false;
            this.loaded = true;
            this.generateForm();
        }
        // this.form['form_fields'] = this.fields;
        // this.loaded = true;
        // this.generateForm();
    };
    AddBrandsComponent.prototype.getStoreById = function (id) {
        var _this = this;
        console.log("store id" + id);
        var store = this.BrandService.getStoreById(id);
        store.subscribe(function (result) {
            console.log("INSIDE store EDIT ");
            console.log('store by id:', result);
            _this.brand = result['result'];
            console.log('RESULT:', result);
            if (result != null) {
                _this.loaded = true;
                console.log("job data above generate form" + _this.brand);
                _this.generateForm(_this.brand);
            }
            else {
                _this.loaded = true;
                _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert('', "Something went wrong! Please wait until we'll fix this issue");
            }
        }, function (err) {
            console.log('Error while getting Job by id.', err);
            _this.loaded = true;
            _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert('', 'Server Error!');
        });
    };
    AddBrandsComponent.prototype.generateForm = function (brand) {
        //  console.log("store"+store)
        this.fields = [
            { label: 'Brand Name', type: 'text', bootstrapGridClass: "col-lg-12", name: "name", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required], required: true, value: brand ? brand.name : '' },
        ];
        this.form['form_fields'] = this.fields;
        this.form['FormbootstrapGridClass'] = 'col-lg-12';
        this.form['map'] = false;
        this.form['MapbootstrapGridClass'] = 'col-lg-4';
        this.form['image'] = false;
        this.form['ImagebootstrapGridClass'] = 'col-lg-3';
        this.form['img_height'] = "200px";
        this.form['img_width'] = "200px";
        //  this.form['image_url'] = job ? job.job_image : null;
        this.form['submit'] = 'Save';
    };
    AddBrandsComponent.prototype.getJobData = function (data) {
        console.log(data);
        //this.loggen_in_user = JSON.parse(localStorage.getItem('user'));
        this.userData = this.AuthService.getUser();
        console.log("user id :" + this.userData['id']);
        data['seller_id'] = this.userData['id'];
        data['model'] = 'brands';
        // if (data['image'] != undefined) {
        //   data['job_image'] = data['image'];
        //   delete data['image'];
        // }
        this.clear_form = false;
        this.submit_clicked = true;
        if (this.edit) {
            var id = this.active_route.snapshot.paramMap.get('id');
            this.editStore(data, id);
        }
        else {
            this.addStore(data);
        }
    };
    AddBrandsComponent.prototype.editStore = function (data, id) {
        var _this = this;
        data['model'] = 'brands';
        this.BrandService.editStore(data, id).subscribe(function (result) {
            _this.submit_clicked = false;
            if (!result['error']) {
                _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].sucessAlert('', 'Brand Updated Sucessfully!');
            }
            else {
                _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert('', result['message'].charAt(0).toUpperCase() + result['message'].substring(1));
            }
        }, function (err) {
            _this.submit_clicked = false;
            console.log(err);
            _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert('', 'Server Error');
        });
    };
    AddBrandsComponent.prototype.addStore = function (data) {
        var _this = this;
        this.BrandService.addStore(data).subscribe(function (result) {
            _this.submit_clicked = false;
            if (result['status']) {
                _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].sucessAlert('', 'Brand Added Sucessfully!');
                _this.clear_form = true;
            }
            else {
                _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert('', result['message'].charAt(0).toUpperCase() + result['message'].substring(1));
            }
        }, function (err) {
            _this.submit_clicked = false;
            console.error(err);
            _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert('', 'Server Error');
        });
    };
    AddBrandsComponent.prototype.navigateToJobListing = function () {
        this.router.navigate(['jeptag/brands']);
    };
    AddBrandsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-add-brands',
            template: __webpack_require__(/*! ./add-brands.component.html */ "./src/app/Jeptag-admin/brand/add-brands/add-brands.component.html"),
            styles: [__webpack_require__(/*! ./add-brands.component.css */ "./src/app/Jeptag-admin/brand/add-brands/add-brands.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_brand_service__WEBPACK_IMPORTED_MODULE_5__["BrandService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _Services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AddBrandsComponent);
    return AddBrandsComponent;
}());



/***/ }),

/***/ "./src/app/Jeptag-admin/brand/brand-listing/brand-listing.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/Jeptag-admin/brand/brand-listing/brand-listing.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0plcHRhZy1hZG1pbi9icmFuZC9icmFuZC1saXN0aW5nL2JyYW5kLWxpc3RpbmcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/Jeptag-admin/brand/brand-listing/brand-listing.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/Jeptag-admin/brand/brand-listing/brand-listing.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-main__outer\">\n  <div class=\"app-main__inner\">\n    <div class=\"app-page-title\">\n      <div class=\"page-title-wrapper\">\n        <div class=\"page-title-heading\">\n          <div class=\"page-title-icon bg-warning text-white\">\n            <i class=\"icofont-dashboard-web  \">\n            </i>\n          </div>\n          <div> Brands Managment\n            <div class=\"page-title-subheading\">Brands listing\n            </div>\n          </div>\n        </div>\n        <div class=\"page-title-actions\">\n\n          <div class=\"d-inline-block dropdown\">\n            <a style=\"margin-left: 4px;color: white;\" class=\"btn-shadow  btn btn-info\" (click)=\"navigateToStoreAdd()\">\n              <i class=\"icofont-ui-add\"></i> Add New\n            </a>\n            <!-- <div class=\"btn-group \">\n              <button style=\"margin-left: 4px;\" type=\"button\" class=\"btn  btn-secondary\"><i class=\"icofont-upload-alt\"></i> Export</button>\n              <button type=\"button\" class=\"btn m btn-secondary dropdown-toggle dropdown-toggle-split\"\n                data-toggle=\"dropdown\"></button>\n              <div class=\"dropdown-menu\">\n                <a class=\"dropdown-item\" href=\"#\">Download PDF</a>\n                <a class=\"dropdown-item\" href=\"#\">Export to Excel</a>\n\n              </div>\n            </div>\n            <button style=\"margin-left: 4px;\" type=\"button\" class=\"btn  btn-secondary\"> <i class=\"icofont-download-alt\"></i> Import </button> -->\n\n            <!-- <button (click)=\"deleteMultipleStaff()\" style=\"margin-left: 4px;\" type=\"button\"\n              class=\"btn-shadow  btn btn-danger\">\n              <i class=\"icofont-trash\"></i> Delete Selected\n            </button> -->\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n\n        <h4 class=\"d-flex flex-wrap justify-content-between align-items-center mb-3\">\n          <div>Brands</div>\n          <!-- <div class=\"col-12 col-md-3 p-0 mb-3\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n          </div> -->\n        </h4>\n        <div class=\"main-card mb-3 card\">\n          <!-- <div class=\"card-header\">Products\n                                        <div class=\"btn-actions-pane-right\">\n                                            <div role=\"group\" class=\"btn-group-sm btn-group\">\n                                                <button class=\"active btn btn-focus\">Received </button>\n                                                <button class=\"btn btn-focus\">Pending</button>\n                                            </div>\n                                        </div>\n                                    </div> -->\n          <mat-progress-bar *ngIf=\"!loaded\" mode=\"indeterminate\"></mat-progress-bar>\n          <div class=\"card-body\">\n\n            <div class=\"table-responsive\">\n              <mat-form-field style=\"width: 100%;\">\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search...\">\n                <!-- (keyup)=\"applyFilter($event.target.value)\" -->\n              </mat-form-field>\n\n              <div class=\"mat-elevation-z8\">\n                <div class=\"example-container\">\n                  <table mat-table [dataSource]=\"dataSource\" style=\"width: 100%;\">\n                    <div>\n                      <!-- <ng-container matColumnDef=\"select\">\n                        <th mat-header-cell *matHeaderCellDef>\n                          <mat-checkbox color=\"primary\" (change)=\"$event ? masterToggle() : null\"\n                            [checked]=\"selection.hasValue() && isAllSelected()\"\n                            [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n                          </mat-checkbox>\n                        </th>\n                        <td mat-cell *matCellDef=\"let row\">\n                          <mat-checkbox color=\"primary\" (click)=\"$event.stopPropagation()\"\n                            (change)=\"checkboxClicked($event,row)\" [checked]=\"selection.isSelected(row)\">\n                          </mat-checkbox>\n                        </td>\n                      </ng-container> -->\n\n                      <!-- <ng-container matColumnDef=\"job_title\">\n                        <th mat-header-cell *matHeaderCellDef>Job Title </th>\n                        <td mat-cell *matCellDef=\"let element\"> <img style=\"width: 30px; height: 30px;\"\n                            [src]=\"element.user_image!=null ? element.user_image : '../../../assets/images/no_image.png'\" />\n                        </td>\n                      </ng-container> -->\n\n                      <ng-container matColumnDef=\"Name\" sticky>\n                        <th mat-header-cell *matHeaderCellDef> Name  </th>\n                        <td mat-cell *matCellDef=\"let element\">\n                          <span> {{element.name }} </span>\n                         \n                        </td>\n                      </ng-container>\n\n                      <!-- <ng-container matColumnDef=\"description\" sticky>\n                        <th mat-header-cell *matHeaderCellDef> description </th>\n                        <td mat-cell *matCellDef=\"let element\">\n                          <span> {{element.description }} </span>\n                         \n                        </td>\n                      </ng-container> -->\n\n                     <!-- <ng-container style=\"margin-right: 10px;\" matColumnDef=\"status\">\n                        <th mat-header-cell *matHeaderCellDef> Type </th>\n                        <td mat-cell *matCellDef=\"let element\">\n                          <span class=\"badge\" [ngClass]=\"{\n                            'badge-info':element.status === 'online',\n                            'badge-warning':element.status === 'offline'\n                           \n                          }\"> {{element.status | removeUnderScore | titlecase}}</span>\n\n                        </td>\n                      </ng-container> -->\n\n                      <!-- <ng-container style=\"margin-right: 10px;\" matColumnDef=\"approved\">\n                        <th mat-header-cell *matHeaderCellDef> status </th>\n                        <td mat-cell *matCellDef=\"let element\">\n                          <span class=\"badge\" [ngClass]=\"{\n                            'badge-info':element.approved === '1',\n                            'badge-warning':element.approved === '0'\n                           \n                          }\"> {{element.approved | removeUnderScore | titlecase}}</span>\n\n                        </td>\n                      </ng-container> -->\n\n                      <!-- <ng-container matColumnDef=\"Address\">\n                        <th mat-header-cell *matHeaderCellDef> Address </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.Address}} </td>\n                      </ng-container>\n                      <ng-container matColumnDef=\"City\">\n                        <th mat-header-cell *matHeaderCellDef> City </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.City}} </td>\n                      </ng-container>\n                      <ng-container matColumnDef=\"Region\">\n                        <th mat-header-cell *matHeaderCellDef> Region </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.Region}} </td>\n                      </ng-container>\n                      <ng-container matColumnDef=\"Country\">\n                        <th mat-header-cell *matHeaderCellDef> Country </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.Country}} </td>\n                      </ng-container>\n                      <ng-container matColumnDef=\"Phone\">\n                        <th mat-header-cell *matHeaderCellDef> Phone </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.Phone}} </td>\n                      </ng-container> -->\n\n                      <!-- <ng-container matColumnDef=\"position\">\n                        <th mat-header-cell *matHeaderCellDef> Position </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n                      </ng-container>\n\n                      <ng-container matColumnDef=\"Salary\">\n                        <th mat-header-cell *matHeaderCellDef> Salary </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.salary}} </td>\n                      </ng-container>\n                      <ng-container matColumnDef=\"weekly_hours\">\n                        <th mat-header-cell *matHeaderCellDef> Weekly hours </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.weekly_hours}} </td>\n                      </ng-container>\n\n                      <ng-container matColumnDef=\"location\">\n                        <th mat-header-cell *matHeaderCellDef> Location </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.location}} </td>\n                      </ng-container> -->\n\n                      <ng-container matColumnDef=\"actions\">\n                        <th mat-header-cell *matHeaderCellDef> Actions </th>\n                        <td mat-cell *matCellDef=\"let element\">\n                          <div class=\"buttons\">\n                            \n                            <button (click)=\"getJobId(element._id,'delete')\"\n                              class=\"mb-2 mr-2 btn-transition btn btn-outline-light btn-sm\">Delete</button>\n                          </div>\n                        </td>\n                      </ng-container>\n\n\n                    </div>\n                    <tr mat-header-row *matHeaderRowDef=\"table_headers\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: table_headers;\"></tr>\n                  </table>\n                </div>\n                <mat-paginator #paginator [pageSize]=\"10\" showFirstLastButtons [pageSizeOptions]=\"[10,50,100,500]\">\n                </mat-paginator>\n\n              </div>\n            </div>\n          </div>\n\n\n        </div>\n      </div>\n\n    </div>\n\n\n  </div>\n\n\n\n\n\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/Jeptag-admin/brand/brand-listing/brand-listing.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/Jeptag-admin/brand/brand-listing/brand-listing.component.ts ***!
  \*****************************************************************************/
/*! exports provided: BrandListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandListingComponent", function() { return BrandListingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _Services_brand_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Services/brand.service */ "./src/app/Jeptag-admin/Services/brand.service.ts");
/* harmony import */ var src_app_Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Shared/swalAlerts */ "./src/app/Shared/swalAlerts.ts");







var BrandListingComponent = /** @class */ (function () {
    function BrandListingComponent(BrandService, router, currentActivatedRoute) {
        this.BrandService = BrandService;
        this.router = router;
        this.currentActivatedRoute = currentActivatedRoute;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]([]);
        this.initialSelection = [];
        this.allowMultiSelect = true;
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["SelectionModel"](this.allowMultiSelect, this.initialSelection);
        this.table_headers = [];
        this.data = [];
        this.storeData = {};
        this.loaded = false;
        this.staff_ids = [];
    }
    BrandListingComponent.prototype.ngOnInit = function () {
        this.table_headers = ['Name', 'actions'];
        this.getStaffList();
    };
    BrandListingComponent.prototype.getStaffList = function () {
        var _this = this;
        var staff = this.BrandService.getStores();
        staff.subscribe(function (result) {
            console.log('product list:', result);
            if (result != null) {
                _this.staff = result;
                _this.dataSource.data = _this.staff;
                _this.dataSource.connect().next(_this.staff);
                _this.dataSource.paginator = _this.paginator;
            }
            else {
                // SwalAlert.errorAlert('', result['message'].charAt(0).toUpperCase() + result['message'].substring(1));
                src_app_Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert('', "Error");
            }
            _this.loaded = true;
            _this.selection.clear();
        }, function (err) {
            _this.loaded = true;
            console.error(err);
        });
    };
    BrandListingComponent.prototype.getJobId = function (store_id, action) {
        this.storeData['model'] = 'brands';
        this.storeData['_id'] = store_id;
        console.log('job id', store_id);
        if (action == 'edit')
            this.router.navigate(['/jeptag/stores/edit', store_id]);
        else {
            this.deleteStoreById(this.storeData);
        }
    };
    BrandListingComponent.prototype.deleteStoreById = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var response;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, src_app_Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].getDeleteSwal()];
                    case 1:
                        response = _a.sent();
                        if (response == true) {
                            this.loaded = false;
                            this.BrandService.deleteById(data).subscribe(function (result) {
                                if (!result['error']) {
                                    src_app_Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].sucessAlert('', 'Store Deleted Successfully!');
                                    _this.getStaffList();
                                }
                                else {
                                    _this.loaded = true;
                                    src_app_Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert('', result['message'].charAt(0).toUpperCase() + result['message'].substring(1));
                                }
                            }, function (err) {
                                _this.loaded = true;
                                console.error(err);
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    BrandListingComponent.prototype.deleteMultipleStaff = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var response;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.staff_ids.length > 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, src_app_Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].getDeleteSwal()];
                    case 1:
                        response = _a.sent();
                        if (response == true) {
                            this.loaded = false;
                            this.BrandService.deleteMultipeStaff(this.staff_ids).subscribe(function (result) {
                                if (!result['error']) {
                                    src_app_Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].sucessAlert('', 'Staff Deleted Successfully!');
                                    _this.getStaffList();
                                }
                                else {
                                    _this.loaded = true;
                                    src_app_Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert('', result['message'].charAt(0).toUpperCase() + result['message'].substring(1));
                                }
                            }, function (err) {
                                _this.loaded = true;
                                console.error(err);
                            });
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        src_app_Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert('', 'Please Select Staff to Delete!');
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    BrandListingComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    BrandListingComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected == numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    BrandListingComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
        this.staff_ids = this.getIdsFromSelectionArrayObject(this.selection.selected);
        // console.log(this.selection);
    };
    // $event ? selection.toggle(row) : null
    BrandListingComponent.prototype.checkboxClicked = function (event, row) {
        if (event) {
            this.selection.toggle(row);
        }
        else
            null;
        this.staff_ids = this.getIdsFromSelectionArrayObject(this.selection.selected);
        // console.log(this.selection);
    };
    BrandListingComponent.prototype.navigateToStoreAdd = function () {
        this.router.navigate(['add'], { relativeTo: this.currentActivatedRoute });
    };
    BrandListingComponent.prototype.navigateToStaffListing = function () {
        this.router.navigate(['jeptag/stores']);
    };
    BrandListingComponent.prototype.getIdsFromSelectionArrayObject = function (array_of_objects) {
        var ids = array_of_objects.map(function (a) { return a.id; });
        return ids;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], BrandListingComponent.prototype, "paginator", void 0);
    BrandListingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-brand-listing',
            template: __webpack_require__(/*! ./brand-listing.component.html */ "./src/app/Jeptag-admin/brand/brand-listing/brand-listing.component.html"),
            styles: [__webpack_require__(/*! ./brand-listing.component.css */ "./src/app/Jeptag-admin/brand/brand-listing/brand-listing.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_brand_service__WEBPACK_IMPORTED_MODULE_5__["BrandService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], BrandListingComponent);
    return BrandListingComponent;
}());



/***/ }),

/***/ "./src/app/Jeptag-admin/category/add-category/add-category.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/Jeptag-admin/category/add-category/add-category.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0plcHRhZy1hZG1pbi9jYXRlZ29yeS9hZGQtY2F0ZWdvcnkvYWRkLWNhdGVnb3J5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Jeptag-admin/category/add-category/add-category.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/Jeptag-admin/category/add-category/add-category.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-main__outer\">\n  <div class=\"app-main__inner\">\n    <div class=\"app-page-title\">\n      <div class=\"page-title-wrapper\">\n        <div class=\"page-title-heading\">\n          <div class=\"page-title-icon bg-warning text-white\">\n            <i class=\"icofont-dashboard-web  \">\n            </i>\n          </div>\n          <div> Category Managment\n            <div class=\"page-title-subheading\">Add Category\n            </div>\n          </div>\n        </div>\n        <div class=\"page-title-actions\">\n\n          <div class=\"d-inline-block dropdown\">\n            <a (click)=\"navigateToJobListing()\" class=\"border-0 btn-transition btn btn-outline-focus\">\n              <i class=\"icofont-arrow-left\"></i> back to list\n            </a>\n            <!-- <a href=\"product-all.php\" class=\"btn-shadow  btn btn-info\">\n              <i class=\"icofont-save\"></i> Save Product\n            </a>\n            <button type=\"button\" class=\"btn-shadow  btn btn-primary\">\n\n              <i class=\"icofont-save\"></i> Save and Continue Edit\n            </button>\n            <button type=\"button\" class=\"btn-shadow  btn btn-success\">\n\n              <i class=\"icofont-ui-copy\"></i> Copy Product\n            </button> -->\n            <!-- <button style=\"margin-left: 5px;\" type=\"button\" class=\"btn-shadow  btn btn-danger\">\n              <i class=\"icofont-trash\"></i> Delete\n            </button> -->\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-12 col-lg-12\">\n        <ul class=\"body-tabs body-tabs-layout tabs-animated body-tabs-animated nav\">\n          <li class=\"nav-item\">\n            <a role=\"tab\" class=\"nav-link active\" id=\"tab-0\" data-toggle=\"tab\" href=\"#tab-content-0\">\n              <span>Category Information</span>\n            </a>\n          </li>\n          <!-- <li class=\"nav-item\">\n            <a role=\"tab\" class=\"nav-link\" id=\"tab-1\" data-toggle=\"tab\" href=\"#tab-content-1\">\n              <span>Product Pictures</span>\n            </a>\n          </li> -->\n          <!-- <li class=\"nav-item\">\n            <a role=\"tab\" class=\"nav-link\" id=\"tab-1\" data-toggle=\"tab\" href=\"#tab-content-2\">\n              <span>Product Pricing</span>\n            </a>\n          </li> -->\n        </ul>\n        <div class=\"card mb-3\">\n\n          <div class=\"tab-content\">\n            <div class=\"tab-pane show active\" id=\"tab-content-0\" role=\"tabpanel\">\n              <div class=\"card\">\n                <mat-progress-bar *ngIf=\"!loaded\" mode=\"indeterminate\"></mat-progress-bar>\n                <app-form [clear_form]=\"clear_form\" [submit_clicked]=\"submit_clicked\" (formValues)=\"getJobData($event)\"\n                  [form]=form>\n                </app-form>\n                \n                <!-- <div class=\"card-body\">\n\n\n                  <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                      <div class=\"position-relative form-group\">\n                        <label class=\"\">Category name</label>\n                        <input type=\"text\" placeholder=\"...\" class=\"form-control\" value=\"Beef Burger\">\n                      </div>\n                    </div>\n                    <div class=\"col-lg-4\">\n\n                      <div class=\"position-relative form-group\">\n                        <label for=\"exampleCustomSelect\" class=\"\">Parent Category</label>\n                        <select type=\"select\" class=\"custom-select\">\n                          <option value=\"\">Select</option>\n                          <option>Burger</option>\n                          <option>Value 2</option>\n                          <option>Value 3</option>\n                          <option>Value 4</option>\n                          <option>Value 5</option>\n                        </select>\n                      </div>\n                    </div>\n                    <div class=\"col-lg-4\">\n                      <div class=\"position-relative form-group\">\n                        <label for=\"exampleCustomSelect\" class=\"\">Category Type</label>\n                        <select type=\"select\" class=\"custom-select\">\n                          <option value=\"\">Select</option>\n                          <option>Food</option>\n                          <option>Value 2</option>\n                          <option>Value 3</option>\n                          <option>Value 4</option>\n                          <option>Value 5</option>\n                        </select>\n                      </div>\n                    </div>\n\n\n                  </div>\n\n\n                  <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                      <div class=\"position-relative form-group\">\n                        <label class=\"bold\">Spice Level</label>\n                        <div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" checked id=\"check1\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check1\">Normal</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" checked id=\"check2\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check2\">Spicy</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" checkedid=\"check3\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check3\">Extra Spicy</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" id=\"check4\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check4\">Medium</label>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"position-relative form-group\">\n                        <label class=\"bold\">Allergens</label>\n                        <div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" checked id=\"check11\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check11\">Soy</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" id=\"check21\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check21\">Egg</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" id=\"check31\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check31\">Peanut</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" id=\"check41\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check41\">Chicken</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" id=\"check41\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check41\">Chicken</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" id=\"check41\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check41\">Chicken</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" id=\"check41\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check41\">Chicken</label>\n                          </div>\n                        </div>\n                      </div>\n\n\n                      <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                          <div class=\"position-relative form-group\">\n                            <label class=\"\">Kcal Count</label>\n                            <input type=\"text\" placeholder=\"...\" class=\"form-control\">\n                          </div>\n                        </div>\n\n                      </div>\n\n\n                      <div class=\"position-relative form-group\">\n\n                        <div>\n                          <label class=\"bold\">Hot Item</label> <br>\n                          <div class=\"custom-switch custom-control custom-control-inline\">\n                            <input type=\"checkbox\" checked id=\"check4111\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check4111\"> Yes</label>\n                          </div>\n\n                        </div>\n                      </div>\n\n                      <div class=\"position-relative form-group\">\n\n                        <div>\n\n                          <label class=\"bold\">Publish</label><br>\n                          <div class=\"custom-switch custom-control custom-control-inline\">\n                            <input type=\"checkbox\" id=\"check41111\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check41111\"> No</label>\n                          </div>\n                          <span class=\"small text-muted\"> Check to publish this product (visible in store). Uncheck to\n                            unpublish (product not available in store).</span>\n                        </div>\n                      </div>\n                    </div>\n\n                  </div>\n\n\n\n                  <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                      <div class=\"position-relative form-group\">\n                        <label class=\"\">Description</label>\n                        <textarea rows=\"3\" placeholder=\"...\" class=\"form-control\"> A tikki delight: Potato and peas patty topped with veg sauce, ketchup, tomatoes and onions\n\n                                                            </textarea>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"alert alert-info alert-dismissible fade show\" role=\"alert\">\n                    <button type=\"button\" class=\"close\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\n                    Product information successfully added\n                  </div>\n\n\n\n\n\n                </div> -->\n                <!-- <div class=\"d-block text-right card-footer\">\n                  <a href=\"javascript:void(0);\" class=\"btn-wide btn btn-success\">Save</a>\n                </div> -->\n              </div>\n\n            </div>\n            <div class=\"tab-pane show\" id=\"tab-content-1\" role=\"tabpanel\">\n              <div class=\"card\">\n                <!-- <div class=\"card-header\">Product Information</div> -->\n                <div class=\"card-body\">\n\n\n                  <div class=\"position-relative form-group\">\n                    <label for=\"exampleFile\" class=\"\">Upload Photo</label>\n                    <input name=\"file\" id=\"exampleFile\" type=\"file\" class=\"form-control-file\">\n\n                    <small class=\"form-text text-muted\">Up to 5 images, max 5 MB each.</small>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-lg-3\">\n                      ​<picture>\n                        <img src=\"assets/images/product-photo1.png\" class=\"img-fluid img-thumbnail\">\n                        <div class=\"buttons mt-2\">\n                          <button class=\"mb-2 mr-2 btn-transition btn btn-outline-light btn-sm\">Edit</button>\n                          <button class=\"mb-2 mr-2 btn-transition btn btn-outline-light btn-sm\">Delete</button>\n                        </div>\n                      </picture>\n\n                    </div>\n                    <div class=\"col-lg-3\">\n                      ​<picture>\n                        <img src=\"assets/images/product-photo1.png\" class=\"img-fluid img-thumbnail\">\n                        <div class=\"buttons mt-2\">\n                          <button class=\"mb-2 mr-2 btn-transition btn btn-outline-light btn-sm\">Edit</button>\n                          <button class=\"mb-2 mr-2 btn-transition btn btn-outline-light btn-sm\">Delete</button>\n                        </div>\n                      </picture>\n\n                    </div>\n                  </div>\n\n\n                </div>\n                <div class=\"d-block text-right card-footer\">\n                  <a href=\"javascript:void(0);\" class=\"btn-wide btn btn-success\">Save</a>\n                </div>\n              </div>\n            </div>\n            <div class=\"tab-pane show\" id=\"tab-content-2\" role=\"tabpanel\">\n              <div class=\"card\">\n                <!-- <div class=\"card-header\">Product Information</div> -->\n                <div class=\"card-body\">\n\n                  <div class=\"row\">\n                    <div class=\"col-lg-3\">\n                      <div class=\"position-relative form-group\">\n                        <label class=\"\">Price</label>\n                        <div class=\"input-group\">\n                          <input placeholder=\"...\" type=\"number\" class=\"form-control\">\n                          <div class=\"input-group-append\">\n                            <span class=\"input-group-text\">£</span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-lg-3\">\n                      <div class=\"position-relative form-group\">\n                        <label class=\"\">Old Price</label>\n                        <div class=\"input-group\">\n                          <input placeholder=\"...\" type=\"number\" class=\"form-control\">\n                          <div class=\"input-group-append\">\n                            <span class=\"input-group-text\">£</span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-lg-3\">\n                      <div class=\"position-relative form-group\">\n                        <label class=\"\">Product Cost</label>\n                        <div class=\"input-group\">\n                          <input placeholder=\"...\" type=\"number\" class=\"form-control\">\n                          <div class=\"input-group-append\">\n                            <span class=\"input-group-text\">£</span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-lg-3\">\n                      <div class=\"position-relative form-group\">\n                        <label class=\"\">Discount </label>\n                        <div class=\"input-group\">\n                          <input placeholder=\"...\" type=\"number\" class=\"form-control\">\n                          <div class=\"input-group-append\">\n                            <span class=\"input-group-text\">%</span>\n                            <span class=\"input-group-text\">£</span>\n\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-lg-3\">\n                      <div class=\"position-relative form-group\">\n                        <label class=\"\">Tax Amount</label>\n                        <div class=\"input-group\">\n                          <input placeholder=\"...\" type=\"number\" class=\"form-control\">\n                          <div class=\"input-group-append\">\n                            <span class=\"input-group-text\">£</span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n\n                  </div>\n\n\n                </div>\n                <div class=\"d-block text-right card-footer\">\n                  <a href=\"javascript:void(0);\" class=\"btn-wide btn btn-success\">Save</a>\n                </div>\n\n              </div>\n\n            </div>\n          </div>\n        </div>\n\n\n      </div>\n\n\n\n\n\n    </div>\n\n\n\n\n  </div>\n\n\n\n\n\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/Jeptag-admin/category/add-category/add-category.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/Jeptag-admin/category/add-category/add-category.component.ts ***!
  \******************************************************************************/
/*! exports provided: AddCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCategoryComponent", function() { return AddCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../Services/auth.service */ "./src/app/Services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Services_category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Services/category.service */ "./src/app/Jeptag-admin/Services/category.service.ts");
/* harmony import */ var _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Shared/swalAlerts */ "./src/app/Shared/swalAlerts.ts");
/* harmony import */ var _options_product__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../options/product */ "./src/app/Jeptag-admin/options/product.ts");








var AddCategoryComponent = /** @class */ (function () {
    function AddCategoryComponent(CategoryService, active_route, router, AuthService) {
        this.CategoryService = CategoryService;
        this.active_route = active_route;
        this.router = router;
        this.AuthService = AuthService;
        this.form = {};
        this.fields = [];
        this.userData = {};
        this.loaded = false;
        this.edit = false;
    }
    AddCategoryComponent.prototype.ngOnInit = function () {
        this.form['form_fields'] = this.fields;
        var store_id = this.active_route.snapshot.paramMap.get('id');
        console.log("idddd " + this.active_route.snapshot.paramMap.get('id'));
        if (store_id != null) {
            this.edit = true;
            this.loaded = true;
            this.getStoreById(store_id);
        }
        else {
            this.edit = false;
            this.loaded = true;
            this.generateForm();
        }
        // this.form['form_fields'] = this.fields;
        // this.loaded = true;
        // this.generateForm();
    };
    AddCategoryComponent.prototype.getStoreById = function (id) {
        var _this = this;
        console.log("store id" + id);
        var store = this.CategoryService.getStoreById(id);
        store.subscribe(function (result) {
            console.log("INSIDE store EDIT ");
            console.log('store by id:', result);
            _this.category = result['result'];
            console.log('RESULT:', result);
            if (result != null) {
                _this.loaded = true;
                console.log("job data above generate form" + _this.category);
                _this.generateForm(_this.category);
            }
            else {
                _this.loaded = true;
                _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert('', "Something went wrong! Please wait until we'll fix this issue");
            }
        }, function (err) {
            console.log('Error while getting Job by id.', err);
            _this.loaded = true;
            _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert('', 'Server Error!');
        });
    };
    AddCategoryComponent.prototype.generateForm = function (category) {
        //  console.log("store"+store)
        this.fields = [
            { label: 'Category Name', type: 'text', bootstrapGridClass: "col-lg-12", name: "name", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required], required: true, value: category ? category.name : '' },
            { label: 'Language', type: 'select', bootstrapGridClass: "col-lg-12", name: "lang", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required], required: true, value: category ? category.lang : 'EN', options: _options_product__WEBPACK_IMPORTED_MODULE_7__["language"] }
        ];
        this.form['form_fields'] = this.fields;
        this.form['FormbootstrapGridClass'] = 'col-lg-12';
        this.form['map'] = false;
        this.form['MapbootstrapGridClass'] = 'col-lg-4';
        this.form['image'] = false;
        this.form['ImagebootstrapGridClass'] = 'col-lg-3';
        this.form['img_height'] = "200px";
        this.form['img_width'] = "200px";
        //  this.form['image_url'] = job ? job.job_image : null;
        this.form['submit'] = 'Save';
    };
    AddCategoryComponent.prototype.getJobData = function (data) {
        console.log(data);
        //this.loggen_in_user = JSON.parse(localStorage.getItem('user'));
        this.userData = this.AuthService.getUser();
        console.log("user id :" + this.userData['id']);
        data['seller_id'] = this.userData['id'];
        data['model'] = 'categories';
        // if (data['image'] != undefined) {
        //   data['job_image'] = data['image'];
        //   delete data['image'];
        // }
        this.clear_form = false;
        this.submit_clicked = true;
        if (this.edit) {
            var id = this.active_route.snapshot.paramMap.get('id');
            this.editStore(data, id);
        }
        else {
            this.addStore(data);
        }
    };
    AddCategoryComponent.prototype.editStore = function (data, id) {
        var _this = this;
        data['model'] = 'categories';
        this.CategoryService.editStore(data, id).subscribe(function (result) {
            _this.submit_clicked = false;
            if (!result['error']) {
                _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].sucessAlert('', 'Category Updated Sucessfully!');
            }
            else {
                _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert('', result['message'].charAt(0).toUpperCase() + result['message'].substring(1));
            }
        }, function (err) {
            _this.submit_clicked = false;
            console.log(err);
            _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert('', 'Server Error');
        });
    };
    AddCategoryComponent.prototype.addStore = function (data) {
        var _this = this;
        this.CategoryService.addStore(data).subscribe(function (result) {
            _this.submit_clicked = false;
            if (result['status']) {
                _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].sucessAlert('', 'Category Added Sucessfully!');
                _this.clear_form = true;
            }
            else {
                _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert('', result['message'].charAt(0).toUpperCase() + result['message'].substring(1));
            }
        }, function (err) {
            _this.submit_clicked = false;
            console.error(err);
            _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert('', 'Server Error');
        });
    };
    AddCategoryComponent.prototype.navigateToJobListing = function () {
        this.router.navigate(['jeptag/categories']);
    };
    AddCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-add-category',
            template: __webpack_require__(/*! ./add-category.component.html */ "./src/app/Jeptag-admin/category/add-category/add-category.component.html"),
            styles: [__webpack_require__(/*! ./add-category.component.css */ "./src/app/Jeptag-admin/category/add-category/add-category.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_category_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _Services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AddCategoryComponent);
    return AddCategoryComponent;
}());



/***/ }),

/***/ "./src/app/Jeptag-admin/category/categories/categories.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/Jeptag-admin/category/categories/categories.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0plcHRhZy1hZG1pbi9jYXRlZ29yeS9jYXRlZ29yaWVzL2NhdGVnb3JpZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/Jeptag-admin/category/categories/categories.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/Jeptag-admin/category/categories/categories.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-main__outer\">\n  <div class=\"app-main__inner\">\n    <div class=\"app-page-title\">\n      <div class=\"page-title-wrapper\">\n        <div class=\"page-title-heading\">\n          <div class=\"page-title-icon bg-warning text-white\">\n            <i class=\"icofont-dashboard-web  \">\n            </i>\n          </div>\n          <div> Categories Managment\n            <div class=\"page-title-subheading\">Categories listing\n            </div>\n          </div>\n        </div>\n        <div class=\"page-title-actions\">\n\n          <div class=\"d-inline-block dropdown\">\n            <a style=\"margin-left: 4px;color: white;\" class=\"btn-shadow  btn btn-info\" (click)=\"navigateToStoreAdd()\">\n              <i class=\"icofont-ui-add\"></i> Add New\n            </a>\n            <!-- <div class=\"btn-group \">\n              <button style=\"margin-left: 4px;\" type=\"button\" class=\"btn  btn-secondary\"><i class=\"icofont-upload-alt\"></i> Export</button>\n              <button type=\"button\" class=\"btn m btn-secondary dropdown-toggle dropdown-toggle-split\"\n                data-toggle=\"dropdown\"></button>\n              <div class=\"dropdown-menu\">\n                <a class=\"dropdown-item\" href=\"#\">Download PDF</a>\n                <a class=\"dropdown-item\" href=\"#\">Export to Excel</a>\n\n              </div>\n            </div>\n            <button style=\"margin-left: 4px;\" type=\"button\" class=\"btn  btn-secondary\"> <i class=\"icofont-download-alt\"></i> Import </button> -->\n\n            <!-- <button (click)=\"deleteMultipleStaff()\" style=\"margin-left: 4px;\" type=\"button\"\n              class=\"btn-shadow  btn btn-danger\">\n              <i class=\"icofont-trash\"></i> Delete Selected\n            </button> -->\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n\n        <h4 class=\"d-flex flex-wrap justify-content-between align-items-center mb-3\">\n          <div>Categories</div>\n          <!-- <div class=\"col-12 col-md-3 p-0 mb-3\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n          </div> -->\n        </h4>\n        <div class=\"main-card mb-3 card\">\n          <!-- <div class=\"card-header\">Products\n                                        <div class=\"btn-actions-pane-right\">\n                                            <div role=\"group\" class=\"btn-group-sm btn-group\">\n                                                <button class=\"active btn btn-focus\">Received </button>\n                                                <button class=\"btn btn-focus\">Pending</button>\n                                            </div>\n                                        </div>\n                                    </div> -->\n          <mat-progress-bar *ngIf=\"!loaded\" mode=\"indeterminate\"></mat-progress-bar>\n          <div class=\"card-body\">\n\n            <div class=\"table-responsive\">\n              <mat-form-field style=\"width: 100%;\">\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search...\">\n                <!-- (keyup)=\"applyFilter($event.target.value)\" -->\n              </mat-form-field>\n\n              <div class=\"mat-elevation-z8\">\n                <div class=\"example-container\">\n                  <table mat-table [dataSource]=\"dataSource\" style=\"width: 100%;\">\n                    <div>\n                      <!-- <ng-container matColumnDef=\"select\">\n                        <th mat-header-cell *matHeaderCellDef>\n                          <mat-checkbox color=\"primary\" (change)=\"$event ? masterToggle() : null\"\n                            [checked]=\"selection.hasValue() && isAllSelected()\"\n                            [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n                          </mat-checkbox>\n                        </th>\n                        <td mat-cell *matCellDef=\"let row\">\n                          <mat-checkbox color=\"primary\" (click)=\"$event.stopPropagation()\"\n                            (change)=\"checkboxClicked($event,row)\" [checked]=\"selection.isSelected(row)\">\n                          </mat-checkbox>\n                        </td>\n                      </ng-container> -->\n\n                      <!-- <ng-container matColumnDef=\"job_title\">\n                        <th mat-header-cell *matHeaderCellDef>Job Title </th>\n                        <td mat-cell *matCellDef=\"let element\"> <img style=\"width: 30px; height: 30px;\"\n                            [src]=\"element.user_image!=null ? element.user_image : '../../../assets/images/no_image.png'\" />\n                        </td>\n                      </ng-container> -->\n\n                      <ng-container matColumnDef=\"Name\" sticky>\n                        <th mat-header-cell *matHeaderCellDef> Name  </th>\n                        <td mat-cell *matCellDef=\"let element\">\n                          <span> {{element.name }} </span>\n                         \n                        </td>\n                      </ng-container>\n\n                      <!-- <ng-container matColumnDef=\"description\" sticky>\n                        <th mat-header-cell *matHeaderCellDef> description </th>\n                        <td mat-cell *matCellDef=\"let element\">\n                          <span> {{element.description }} </span>\n                         \n                        </td>\n                      </ng-container> -->\n\n                     <!-- <ng-container style=\"margin-right: 10px;\" matColumnDef=\"status\">\n                        <th mat-header-cell *matHeaderCellDef> Type </th>\n                        <td mat-cell *matCellDef=\"let element\">\n                          <span class=\"badge\" [ngClass]=\"{\n                            'badge-info':element.status === 'online',\n                            'badge-warning':element.status === 'offline'\n                           \n                          }\"> {{element.status | removeUnderScore | titlecase}}</span>\n\n                        </td>\n                      </ng-container> -->\n\n                      <!-- <ng-container style=\"margin-right: 10px;\" matColumnDef=\"approved\">\n                        <th mat-header-cell *matHeaderCellDef> status </th>\n                        <td mat-cell *matCellDef=\"let element\">\n                          <span class=\"badge\" [ngClass]=\"{\n                            'badge-info':element.approved === '1',\n                            'badge-warning':element.approved === '0'\n                           \n                          }\"> {{element.approved | removeUnderScore | titlecase}}</span>\n\n                        </td>\n                      </ng-container> -->\n\n                      <!-- <ng-container matColumnDef=\"Address\">\n                        <th mat-header-cell *matHeaderCellDef> Address </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.Address}} </td>\n                      </ng-container>\n                      <ng-container matColumnDef=\"City\">\n                        <th mat-header-cell *matHeaderCellDef> City </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.City}} </td>\n                      </ng-container>\n                      <ng-container matColumnDef=\"Region\">\n                        <th mat-header-cell *matHeaderCellDef> Region </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.Region}} </td>\n                      </ng-container>\n                      <ng-container matColumnDef=\"Country\">\n                        <th mat-header-cell *matHeaderCellDef> Country </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.Country}} </td>\n                      </ng-container>\n                      <ng-container matColumnDef=\"Phone\">\n                        <th mat-header-cell *matHeaderCellDef> Phone </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.Phone}} </td>\n                      </ng-container> -->\n\n                      <!-- <ng-container matColumnDef=\"position\">\n                        <th mat-header-cell *matHeaderCellDef> Position </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n                      </ng-container>\n\n                      <ng-container matColumnDef=\"Salary\">\n                        <th mat-header-cell *matHeaderCellDef> Salary </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.salary}} </td>\n                      </ng-container>\n                      <ng-container matColumnDef=\"weekly_hours\">\n                        <th mat-header-cell *matHeaderCellDef> Weekly hours </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.weekly_hours}} </td>\n                      </ng-container>\n\n                      <ng-container matColumnDef=\"location\">\n                        <th mat-header-cell *matHeaderCellDef> Location </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.location}} </td>\n                      </ng-container> -->\n\n                      <ng-container matColumnDef=\"actions\">\n                        <th mat-header-cell *matHeaderCellDef> Actions </th>\n                        <td mat-cell *matCellDef=\"let element\">\n                          <div class=\"buttons\">\n                          \n                            <button (click)=\"getJobId(element._id,'delete')\"\n                              class=\"mb-2 mr-2 btn-transition btn btn-outline-light btn-sm\">Delete</button>\n                          </div>\n                        </td>\n                      </ng-container>\n\n\n                    </div>\n                    <tr mat-header-row *matHeaderRowDef=\"table_headers\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: table_headers;\"></tr>\n                  </table>\n                </div>\n                <mat-paginator #paginator [pageSize]=\"10\" showFirstLastButtons [pageSizeOptions]=\"[10,50,100,500]\">\n                </mat-paginator>\n\n              </div>\n            </div>\n          </div>\n\n\n        </div>\n      </div>\n\n    </div>\n\n\n  </div>\n\n\n\n\n\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/Jeptag-admin/category/categories/categories.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/Jeptag-admin/category/categories/categories.component.ts ***!
  \**************************************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _Services_category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Services/category.service */ "./src/app/Jeptag-admin/Services/category.service.ts");
/* harmony import */ var src_app_Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Shared/swalAlerts */ "./src/app/Shared/swalAlerts.ts");







var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(CategoryService, router, currentActivatedRoute) {
        this.CategoryService = CategoryService;
        this.router = router;
        this.currentActivatedRoute = currentActivatedRoute;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]([]);
        this.initialSelection = [];
        this.allowMultiSelect = true;
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["SelectionModel"](this.allowMultiSelect, this.initialSelection);
        this.table_headers = [];
        this.data = [];
        this.storeData = {};
        this.loaded = false;
        this.staff_ids = [];
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        this.table_headers = ['Name', 'actions'];
        this.getStaffList();
    };
    CategoriesComponent.prototype.getStaffList = function () {
        var _this = this;
        var staff = this.CategoryService.getStores();
        staff.subscribe(function (result) {
            console.log('product list:', result);
            if (result != null) {
                _this.staff = result;
                _this.dataSource.data = _this.staff;
                _this.dataSource.connect().next(_this.staff);
                _this.dataSource.paginator = _this.paginator;
            }
            else {
                // SwalAlert.errorAlert('', result['message'].charAt(0).toUpperCase() + result['message'].substring(1));
                src_app_Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert('', "Error");
            }
            _this.loaded = true;
            _this.selection.clear();
        }, function (err) {
            _this.loaded = true;
            console.error(err);
        });
    };
    CategoriesComponent.prototype.getJobId = function (store_id, action) {
        this.storeData['model'] = 'categories';
        this.storeData['_id'] = store_id;
        console.log('job id', store_id);
        // if (action == 'edit')
        //   this.router.navigate(['/jeptag/stores/edit', store_id]);
        // else {
        this.deleteStoreById(this.storeData);
        // }
    };
    CategoriesComponent.prototype.deleteStoreById = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var response;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, src_app_Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].getDeleteSwal()];
                    case 1:
                        response = _a.sent();
                        if (response == true) {
                            this.loaded = false;
                            this.CategoryService.deleteById(data).subscribe(function (result) {
                                if (!result['error']) {
                                    src_app_Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].sucessAlert('', 'Category Deleted Successfully!');
                                    _this.getStaffList();
                                }
                                else {
                                    _this.loaded = true;
                                    src_app_Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert('', result['message'].charAt(0).toUpperCase() + result['message'].substring(1));
                                }
                            }, function (err) {
                                _this.loaded = true;
                                console.error(err);
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    CategoriesComponent.prototype.deleteMultipleStaff = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var response;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.staff_ids.length > 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, src_app_Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].getDeleteSwal()];
                    case 1:
                        response = _a.sent();
                        if (response == true) {
                            this.loaded = false;
                            this.CategoryService.deleteMultipeStaff(this.staff_ids).subscribe(function (result) {
                                if (!result['error']) {
                                    src_app_Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].sucessAlert('', 'Staff Deleted Successfully!');
                                    _this.getStaffList();
                                }
                                else {
                                    _this.loaded = true;
                                    src_app_Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert('', result['message'].charAt(0).toUpperCase() + result['message'].substring(1));
                                }
                            }, function (err) {
                                _this.loaded = true;
                                console.error(err);
                            });
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        src_app_Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert('', 'Please Select Staff to Delete!');
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CategoriesComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    CategoriesComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected == numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    CategoriesComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
        this.staff_ids = this.getIdsFromSelectionArrayObject(this.selection.selected);
        // console.log(this.selection);
    };
    // $event ? selection.toggle(row) : null
    CategoriesComponent.prototype.checkboxClicked = function (event, row) {
        if (event) {
            this.selection.toggle(row);
        }
        else
            null;
        this.staff_ids = this.getIdsFromSelectionArrayObject(this.selection.selected);
        // console.log(this.selection);
    };
    CategoriesComponent.prototype.navigateToStoreAdd = function () {
        this.router.navigate(['add'], { relativeTo: this.currentActivatedRoute });
    };
    CategoriesComponent.prototype.navigateToStaffListing = function () {
        this.router.navigate(['jeptag/stores']);
    };
    CategoriesComponent.prototype.getIdsFromSelectionArrayObject = function (array_of_objects) {
        var ids = array_of_objects.map(function (a) { return a.id; });
        return ids;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], CategoriesComponent.prototype, "paginator", void 0);
    CategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-categories',
            template: __webpack_require__(/*! ./categories.component.html */ "./src/app/Jeptag-admin/category/categories/categories.component.html"),
            styles: [__webpack_require__(/*! ./categories.component.css */ "./src/app/Jeptag-admin/category/categories/categories.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_category_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/Jeptag-admin/options/product.ts":
/*!*************************************************!*\
  !*** ./src/app/Jeptag-admin/options/product.ts ***!
  \*************************************************/
/*! exports provided: status, Approved, Status, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "status", function() { return status; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Approved", function() { return Approved; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return Status; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "language", function() { return language; });
var status = [
    { id: 'online', name: 'Online' },
    { id: 'offline', name: 'Offline' }
];
var Approved = [
    { id: 'true', name: 'True' },
    { id: 'false', name: 'False' }
];
var Status = [
    { id: 'true', name: 'True' },
    { id: 'false', name: 'False' }
];
var language = [
    { id: 'EN', name: 'EN' },
    { id: 'VI', name: 'VI' }
];
// export const status = [
//     { id: 'admin', name: 'Admin' },
//     { id: 'user', name: 'User' }
// ]


/***/ }),

/***/ "./src/app/Jeptag-admin/options/staff.ts":
/*!***********************************************!*\
  !*** ./src/app/Jeptag-admin/options/staff.ts ***!
  \***********************************************/
/*! exports provided: StaffType, SalaryDisbursement, experience, JobShift, countries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffType", function() { return StaffType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaryDisbursement", function() { return SalaryDisbursement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "experience", function() { return experience; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobShift", function() { return JobShift; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countries", function() { return countries; });
var StaffType = [
    { id: 'admin', name: 'Admin' },
    { id: 'user', name: 'User' }
    // { id: 'manager', name: 'Manager' },
    // { id: 'waiter', name: 'Waiter' },
    // { id: 'staff', name: 'Staff' },
    // { id: 'kitchen_manager', name: 'Kitchen Manager' },
];
// user_type_dict = {'admin': 1, 'user': 2, 'guest': 3, 'manager': 4, 'waiter': 5, 'staff': 6, 'kitchen_manager':7}
var SalaryDisbursement = [
    { id: 'Hourly', name: 'Hourly' },
    { id: 'Daily', name: 'Daily' },
    { id: 'Weekly', name: 'Weekly' },
    { id: 'Monthly', name: 'Monthly' }
];
//salary_disbursement = ChoiceField(choices=['Hourly', 'Daily', 'Weekly', 'Monthly'], required=True, allow_null=False)
var experience = [
    { id: 'No Experience', name: 'No Experience' },
    { id: 'Entry Level', name: 'Entry Level' },
    { id: 'Intermediate', name: 'Intermediate' },
    { id: 'Professional', name: 'Professional' }
];
//experience = ChoiceField(choices=['No Experience', 'Entry Level', 'Intermediate', 'Professional']
var JobShift = [
    { id: "AF", name: "Afghanistan" },
    { id: "AX", name: "Åland Islands" }
];
var countries = [
    { id: "AF", name: "Afghanistan" },
    { id: "AX", name: "Åland Islands" },
    { id: "AL", name: "Albania" },
    { id: "DZ", name: "Algeria" },
    { id: "AD", name: "Andorra" },
    { id: "AO", name: "Angola" },
    { id: "AI", name: "Anguilla" },
    { id: "AQ", name: "Antarctica" },
    { id: "AG", name: "Antigua and Barbuda" },
    { id: "AR", name: "Argentina" },
    { id: "AM", name: "Armenia" },
    { id: "AW", name: "Aruba" },
    { id: "AU", name: "Australia" },
    { id: "AT", name: "Austria" },
    { id: "AZ", name: "Azerbaijan" },
    { id: "BS", name: "Bahamas" },
    { id: "BH", name: "Bahrain" },
    { id: "BD", name: "Bangladesh" },
    { id: "BB", name: "Barbados" },
    { id: "BY", name: "Belarus" },
    { id: "BE", name: "Belgium" },
    { id: "PW", name: "Belau" },
    { id: "BZ", name: "Belize" },
    { id: "BJ", name: "Benin" },
    { id: "BM", name: "Bermuda" },
    { id: "BT", name: "Bhutan" },
    { id: "BO", name: "Bolivia" },
    { id: "BQ", name: "Bonaire" },
    { id: "BA", name: "Bosnia and Herzegovina" },
    { id: "BW", name: "Botswana" },
    { id: "BV", name: "Bouvet Island" },
    { id: "BR", name: "Brazil" },
    { id: "IO", name: "British Indian Ocean Territory" },
    { id: "VG", name: "British Virgin Islands" },
    { id: "BN", name: "Brunei" },
    { id: "BG", name: "Bulgaria" },
    { id: "BF", name: "Burkina Faso" },
    { id: "BI", name: "Burundi" },
    { id: "KH", name: "Cambodia" },
    { id: "CM", name: "Cameroon" },
    { id: "CA", name: "Canada" },
    { id: "CV", name: "Cape Verde" },
    { id: "KY", name: "Cayman Islands" },
    { id: "CF", name: "Central African Republic" },
    { id: "TD", name: "Chad" },
    { id: "CL", name: "Chile" },
    { id: "CN", name: "China" },
    { id: "CX", name: "Christmas Island" },
    { id: "CC", name: "Cocos (Keeling) Islands" },
    { id: "CO", name: "Colombia" },
    { id: "KM", name: "Comoros" },
    { id: "CG", name: "Congo (Brazzaville)" },
    { id: "CD", name: "Congo (Kinshasa)" },
    { id: "CK", name: "Cook Islands" },
    { id: "CR", name: "Costa Rica" },
    { id: "HR", name: "Croatia" },
    { id: "CU", name: "Cuba" },
    { id: "CW", name: "CuraÇao" },
    { id: "CY", name: "Cyprus" },
    { id: "CZ", name: "Czech Republic" },
    { id: "DK", name: "Denmark" },
    { id: "DJ", name: "Djibouti" },
    { id: "DM", name: "Dominica" },
    { id: "DO", name: "Dominican Republic" },
    { id: "EC", name: "Ecuador" },
    { id: "EG", name: "Egypt" },
    { id: "SV", name: "El Salvador" },
    { id: "GQ", name: "Equatorial Guinea" },
    { id: "ER", name: "Eritrea" },
    { id: "EE", name: "Estonia" },
    { id: "ET", name: "Ethiopia" },
    { id: "FK", name: "Falkland Islands" },
    { id: "FO", name: "Faroe Islands" },
    { id: "FJ", name: "Fiji" },
    { id: "FI", name: "Finland" },
    { id: "FR", name: "France" },
    { id: "GF", name: "French Guiana" },
    { id: "PF", name: "French Polynesia" },
    { id: "TF", name: "French Southern Territories" },
    { id: "GA", name: "Gabon" },
    { id: "GM", name: "Gambia" },
    { id: "GE", name: "Georgia" },
    { id: "DE", name: "Germany" },
    { id: "GH", name: "Ghana" },
    { id: "GI", name: "Gibraltar" },
    { id: "GR", name: "Greece" },
    { id: "GL", name: "Greenland" },
    { id: "GD", name: "Grenada" },
    { id: "GP", name: "Guadeloupe" },
    { id: "GT", name: "Guatemala" },
    { id: "GG", name: "Guernsey" },
    { id: "GN", name: "Guinea" },
    { id: "GW", name: "Guinea-Bissau" },
    { id: "GY", name: "Guyana" },
    { id: "HT", name: "Haiti" },
    { id: "HM", name: "Heard Island and McDonald Islands" },
    { id: "HN", name: "Honduras" },
    { id: "HK", name: "Hong Kong" },
    { id: "HU", name: "Hungary" },
    { id: "IS", name: "Iceland" },
    { id: "IN", name: "India" },
    { id: "ID", name: "Indonesia" },
    { id: "IR", name: "Iran" },
    { id: "IQ", name: "Iraq" },
    { id: "IE", name: "Republic of Ireland" },
    { id: "IM", name: "Isle of Man" },
    { id: "IL", name: "Israel" },
    { id: "IT", name: "Italy" },
    { id: "CI", name: "Ivory Coast" },
    { id: "JM", name: "Jamaica" },
    { id: "JP", name: "Japan" },
    { id: "JE", name: "Jersey" },
    { id: "JO", name: "Jordan" },
    { id: "KZ", name: "Kazakhstan" },
    { id: "KE", name: "Kenya" },
    { id: "KI", name: "Kiribati" },
    { id: "KW", name: "Kuwait" },
    { id: "KG", name: "Kyrgyzstan" },
    { id: "LA", name: "Laos" },
    { id: "LV", name: "Latvia" },
    { id: "LB", name: "Lebanon" },
    { id: "LS", name: "Lesotho" },
    { id: "LR", name: "Liberia" },
    { id: "LY", name: "Libya" },
    { id: "LI", name: "Liechtenstein" },
    { id: "LT", name: "Lithuania" },
    { id: "LU", name: "Luxembourg" },
    { id: "MO", name: "Macao S.A.R." },
    { id: "MK", name: "Macedonia" },
    { id: "MG", name: "Madagascar" },
    { id: "MW", name: "Malawi" },
    { id: "MY", name: "Malaysia" },
    { id: "MV", name: "Maldives" },
    { id: "ML", name: "Mali" },
    { id: "MT", name: "Malta" },
    { id: "MH", name: "Marshall Islands" },
    { id: "MQ", name: "Martinique" },
    { id: "MR", name: "Mauritania" },
    { id: "MU", name: "Mauritius" },
    { id: "YT", name: "Mayotte" },
    { id: "MX", name: "Mexico" },
    { id: "FM", name: "Micronesia" },
    { id: "MD", name: "Moldova" },
    { id: "MC", name: "Monaco" },
    { id: "MN", name: "Mongolia" },
    { id: "ME", name: "Montenegro" },
    { id: "MS", name: "Montserrat" },
    { id: "MA", name: "Morocco" },
    { id: "MZ", name: "Mozambique" },
    { id: "MM", name: "Myanmar" },
    { id: "NA", name: "Namibia" },
    { id: "NR", name: "Nauru" },
    { id: "NP", name: "Nepal" },
    { id: "NL", name: "Netherlands" },
    { id: "AN", name: "Netherlands Antilles" },
    { id: "NC", name: "New Caledonia" },
    { id: "NZ", name: "New Zealand" },
    { id: "NI", name: "Nicaragua" },
    { id: "NE", name: "Niger" },
    { id: "NG", name: "Nigeria" },
    { id: "NU", name: "Niue" },
    { id: "NF", name: "Norfolk Island" },
    { id: "KP", name: "North Korea" },
    { id: "NO", name: "Norway" },
    { id: "OM", name: "Oman" },
    { id: "PK", name: "Pakistan" },
    { id: "PS", name: "Palestinian Territory" },
    { id: "PA", name: "Panama" },
    { id: "PG", name: "Papua New Guinea" },
    { id: "PY", name: "Paraguay" },
    { id: "PE", name: "Peru" },
    { id: "PH", name: "Philippines" },
    { id: "PN", name: "Pitcairn" },
    { id: "PL", name: "Poland" },
    { id: "PT", name: "Portugal" },
    { id: "QA", name: "Qatar" },
    { id: "RE", name: "Reunion" },
    { id: "RO", name: "Romania" },
    { id: "RU", name: "Russia" },
    { id: "RW", name: "Rwanda" },
    { id: "BL", name: "Saint Barthélemy" },
    { id: "SH", name: "Saint Helena" },
    { id: "KN", name: "Saint Kitts and Nevis" },
    { id: "LC", name: "Saint Lucia" },
    { id: "MF", name: "Saint Martin (French part)" },
    { id: "SX", name: "Saint Martin (Dutch part)" },
    { id: "PM", name: "Saint Pierre and Miquelon" },
    { id: "VC", name: "Saint Vincent and the Grenadines" },
    { id: "SM", name: "San Marino" },
    { id: "ST", name: "São Tomé and Príncipe" },
    { id: "SA", name: "Saudi Arabia" },
    { id: "SN", name: "Senegal" },
    { id: "RS", name: "Serbia" },
    { id: "SC", name: "Seychelles" },
    { id: "SL", name: "Sierra Leone" },
    { id: "SG", name: "Singapore" },
    { id: "SK", name: "Slovakia" },
    { id: "SI", name: "Slovenia" },
    { id: "SB", name: "Solomon Islands" },
    { id: "SO", name: "Somalia" },
    { id: "ZA", name: "South Africa" },
    { id: "GS", name: "South Georgia/Sandwich Islands" },
    { id: "KR", name: "South Korea" },
    { id: "SS", name: "South Sudan" },
    { id: "ES", name: "Spain" },
    { id: "LK", name: "Sri Lanka" },
    { id: "SD", name: "Sudan" },
    { id: "SR", name: "Suriname" },
    { id: "SJ", name: "Svalbard and Jan Mayen" },
    { id: "SZ", name: "Swaziland" },
    { id: "SE", name: "Sweden" },
    { id: "CH", name: "Switzerland" },
    { id: "SY", name: "Syria" },
    { id: "TW", name: "Taiwan" },
    { id: "TJ", name: "Tajikistan" },
    { id: "TZ", name: "Tanzania" },
    { id: "TH", name: "Thailand" },
    { id: "TL", name: "Timor-Leste" },
    { id: "TG", name: "Togo" },
    { id: "TK", name: "Tokelau" },
    { id: "TO", name: "Tonga" },
    { id: "TT", name: "Trinidad and Tobago" },
    { id: "TN", name: "Tunisia" },
    { id: "TR", name: "Turkey" },
    { id: "TM", name: "Turkmenistan" },
    { id: "TC", name: "Turks and Caicos Islands" },
    { id: "TV", name: "Tuvalu" },
    { id: "UG", name: "Uganda" },
    { id: "UA", name: "Ukraine" },
    { id: "AE", name: "United Arab Emirates" },
    { id: "GB", name: "United Kingdom (UK)" },
    { id: "US", name: "United States (US)" },
    { id: "UY", name: "Uruguay" },
    { id: "UZ", name: "Uzbekistan" },
    { id: "VU", name: "Vanuatu" },
    { id: "VA", name: "Vatican" },
    { id: "VE", name: "Venezuela" },
    { id: "VN", name: "Vietnam" },
    { id: "WF", name: "Wallis and Futuna" },
    { id: "EH", name: "Western Sahara" },
    { id: "WS", name: "Western Samoa" },
    { id: "YE", name: "Yemen" },
    { id: "ZM", name: "Zambia" },
    { id: "ZW", name: "Zimbabwe" }
];


/***/ }),

/***/ "./src/app/Jeptag-admin/sub-category/add-subcat/add-subcat.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/Jeptag-admin/sub-category/add-subcat/add-subcat.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0plcHRhZy1hZG1pbi9zdWItY2F0ZWdvcnkvYWRkLXN1YmNhdC9hZGQtc3ViY2F0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Jeptag-admin/sub-category/add-subcat/add-subcat.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/Jeptag-admin/sub-category/add-subcat/add-subcat.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-main__outer\">\n  <div class=\"app-main__inner\">\n    <div class=\"app-page-title\">\n      <div class=\"page-title-wrapper\">\n        <div class=\"page-title-heading\">\n          <div class=\"page-title-icon bg-warning text-white\">\n            <i class=\"icofont-dashboard-web  \">\n            </i>\n          </div>\n          <div> Subategories Managment\n            <div class=\"page-title-subheading\">Add Subategories\n            </div>\n          </div>\n        </div>\n        <div class=\"page-title-actions\">\n\n          <div class=\"d-inline-block dropdown\">\n            <a (click)=\"navigateToJobListing()\" class=\"border-0 btn-transition btn btn-outline-focus\">\n              <i class=\"icofont-arrow-left\"></i> back to list\n            </a>\n            <!-- <a href=\"product-all.php\" class=\"btn-shadow  btn btn-info\">\n              <i class=\"icofont-save\"></i> Save Product\n            </a>\n            <button type=\"button\" class=\"btn-shadow  btn btn-primary\">\n\n              <i class=\"icofont-save\"></i> Save and Continue Edit\n            </button>\n            <button type=\"button\" class=\"btn-shadow  btn btn-success\">\n\n              <i class=\"icofont-ui-copy\"></i> Copy Product\n            </button> -->\n            <!-- <button style=\"margin-left: 5px;\" type=\"button\" class=\"btn-shadow  btn btn-danger\">\n              <i class=\"icofont-trash\"></i> Delete\n            </button> -->\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-12 col-lg-12\">\n        <ul class=\"body-tabs body-tabs-layout tabs-animated body-tabs-animated nav\">\n          <li class=\"nav-item\">\n            <a role=\"tab\" class=\"nav-link active\" id=\"tab-0\" data-toggle=\"tab\" href=\"#tab-content-0\">\n              <span>Subategories Information</span>\n            </a>\n          </li>\n          <!-- <li class=\"nav-item\">\n            <a role=\"tab\" class=\"nav-link\" id=\"tab-1\" data-toggle=\"tab\" href=\"#tab-content-1\">\n              <span>Product Pictures</span>\n            </a>\n          </li> -->\n          <!-- <li class=\"nav-item\">\n            <a role=\"tab\" class=\"nav-link\" id=\"tab-1\" data-toggle=\"tab\" href=\"#tab-content-2\">\n              <span>Product Pricing</span>\n            </a>\n          </li> -->\n        </ul>\n        <div class=\"card mb-3\">\n\n          <div class=\"tab-content\">\n            <div class=\"tab-pane show active\" id=\"tab-content-0\" role=\"tabpanel\">\n              <div class=\"card\">\n                <mat-progress-bar *ngIf=\"!loaded\" mode=\"indeterminate\"></mat-progress-bar>\n                <app-form [clear_form]=\"clear_form\" [submit_clicked]=\"submit_clicked\" (formValues)=\"getJobData($event)\"\n                  [form]=form>\n                </app-form>\n                \n                <!-- <div class=\"card-body\">\n\n\n                  <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                      <div class=\"position-relative form-group\">\n                        <label class=\"\">Category name</label>\n                        <input type=\"text\" placeholder=\"...\" class=\"form-control\" value=\"Beef Burger\">\n                      </div>\n                    </div>\n                    <div class=\"col-lg-4\">\n\n                      <div class=\"position-relative form-group\">\n                        <label for=\"exampleCustomSelect\" class=\"\">Parent Category</label>\n                        <select type=\"select\" class=\"custom-select\">\n                          <option value=\"\">Select</option>\n                          <option>Burger</option>\n                          <option>Value 2</option>\n                          <option>Value 3</option>\n                          <option>Value 4</option>\n                          <option>Value 5</option>\n                        </select>\n                      </div>\n                    </div>\n                    <div class=\"col-lg-4\">\n                      <div class=\"position-relative form-group\">\n                        <label for=\"exampleCustomSelect\" class=\"\">Category Type</label>\n                        <select type=\"select\" class=\"custom-select\">\n                          <option value=\"\">Select</option>\n                          <option>Food</option>\n                          <option>Value 2</option>\n                          <option>Value 3</option>\n                          <option>Value 4</option>\n                          <option>Value 5</option>\n                        </select>\n                      </div>\n                    </div>\n\n\n                  </div>\n\n\n                  <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                      <div class=\"position-relative form-group\">\n                        <label class=\"bold\">Spice Level</label>\n                        <div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" checked id=\"check1\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check1\">Normal</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" checked id=\"check2\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check2\">Spicy</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" checkedid=\"check3\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check3\">Extra Spicy</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" id=\"check4\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check4\">Medium</label>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"position-relative form-group\">\n                        <label class=\"bold\">Allergens</label>\n                        <div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" checked id=\"check11\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check11\">Soy</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" id=\"check21\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check21\">Egg</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" id=\"check31\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check31\">Peanut</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" id=\"check41\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check41\">Chicken</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" id=\"check41\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check41\">Chicken</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" id=\"check41\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check41\">Chicken</label>\n                          </div>\n                          <div class=\"custom-checkbox custom-control custom-control-inline\">\n                            <input type=\"checkbox\" id=\"check41\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check41\">Chicken</label>\n                          </div>\n                        </div>\n                      </div>\n\n\n                      <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                          <div class=\"position-relative form-group\">\n                            <label class=\"\">Kcal Count</label>\n                            <input type=\"text\" placeholder=\"...\" class=\"form-control\">\n                          </div>\n                        </div>\n\n                      </div>\n\n\n                      <div class=\"position-relative form-group\">\n\n                        <div>\n                          <label class=\"bold\">Hot Item</label> <br>\n                          <div class=\"custom-switch custom-control custom-control-inline\">\n                            <input type=\"checkbox\" checked id=\"check4111\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check4111\"> Yes</label>\n                          </div>\n\n                        </div>\n                      </div>\n\n                      <div class=\"position-relative form-group\">\n\n                        <div>\n\n                          <label class=\"bold\">Publish</label><br>\n                          <div class=\"custom-switch custom-control custom-control-inline\">\n                            <input type=\"checkbox\" id=\"check41111\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"check41111\"> No</label>\n                          </div>\n                          <span class=\"small text-muted\"> Check to publish this product (visible in store). Uncheck to\n                            unpublish (product not available in store).</span>\n                        </div>\n                      </div>\n                    </div>\n\n                  </div>\n\n\n\n                  <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                      <div class=\"position-relative form-group\">\n                        <label class=\"\">Description</label>\n                        <textarea rows=\"3\" placeholder=\"...\" class=\"form-control\"> A tikki delight: Potato and peas patty topped with veg sauce, ketchup, tomatoes and onions\n\n                                                            </textarea>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"alert alert-info alert-dismissible fade show\" role=\"alert\">\n                    <button type=\"button\" class=\"close\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\n                    Product information successfully added\n                  </div>\n\n\n\n\n\n                </div> -->\n                <!-- <div class=\"d-block text-right card-footer\">\n                  <a href=\"javascript:void(0);\" class=\"btn-wide btn btn-success\">Save</a>\n                </div> -->\n              </div>\n\n            </div>\n            <div class=\"tab-pane show\" id=\"tab-content-1\" role=\"tabpanel\">\n              <div class=\"card\">\n                <!-- <div class=\"card-header\">Product Information</div> -->\n                <div class=\"card-body\">\n\n\n                  <div class=\"position-relative form-group\">\n                    <label for=\"exampleFile\" class=\"\">Upload Photo</label>\n                    <input name=\"file\" id=\"exampleFile\" type=\"file\" class=\"form-control-file\">\n\n                    <small class=\"form-text text-muted\">Up to 5 images, max 5 MB each.</small>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-lg-3\">\n                      ​<picture>\n                        <img src=\"assets/images/product-photo1.png\" class=\"img-fluid img-thumbnail\">\n                        <div class=\"buttons mt-2\">\n                          <button class=\"mb-2 mr-2 btn-transition btn btn-outline-light btn-sm\">Edit</button>\n                          <button class=\"mb-2 mr-2 btn-transition btn btn-outline-light btn-sm\">Delete</button>\n                        </div>\n                      </picture>\n\n                    </div>\n                    <div class=\"col-lg-3\">\n                      ​<picture>\n                        <img src=\"assets/images/product-photo1.png\" class=\"img-fluid img-thumbnail\">\n                        <div class=\"buttons mt-2\">\n                          <button class=\"mb-2 mr-2 btn-transition btn btn-outline-light btn-sm\">Edit</button>\n                          <button class=\"mb-2 mr-2 btn-transition btn btn-outline-light btn-sm\">Delete</button>\n                        </div>\n                      </picture>\n\n                    </div>\n                  </div>\n\n\n                </div>\n                <div class=\"d-block text-right card-footer\">\n                  <a href=\"javascript:void(0);\" class=\"btn-wide btn btn-success\">Save</a>\n                </div>\n              </div>\n            </div>\n            <div class=\"tab-pane show\" id=\"tab-content-2\" role=\"tabpanel\">\n              <div class=\"card\">\n                <!-- <div class=\"card-header\">Product Information</div> -->\n                <div class=\"card-body\">\n\n                  <div class=\"row\">\n                    <div class=\"col-lg-3\">\n                      <div class=\"position-relative form-group\">\n                        <label class=\"\">Price</label>\n                        <div class=\"input-group\">\n                          <input placeholder=\"...\" type=\"number\" class=\"form-control\">\n                          <div class=\"input-group-append\">\n                            <span class=\"input-group-text\">£</span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-lg-3\">\n                      <div class=\"position-relative form-group\">\n                        <label class=\"\">Old Price</label>\n                        <div class=\"input-group\">\n                          <input placeholder=\"...\" type=\"number\" class=\"form-control\">\n                          <div class=\"input-group-append\">\n                            <span class=\"input-group-text\">£</span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-lg-3\">\n                      <div class=\"position-relative form-group\">\n                        <label class=\"\">Product Cost</label>\n                        <div class=\"input-group\">\n                          <input placeholder=\"...\" type=\"number\" class=\"form-control\">\n                          <div class=\"input-group-append\">\n                            <span class=\"input-group-text\">£</span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-lg-3\">\n                      <div class=\"position-relative form-group\">\n                        <label class=\"\">Discount </label>\n                        <div class=\"input-group\">\n                          <input placeholder=\"...\" type=\"number\" class=\"form-control\">\n                          <div class=\"input-group-append\">\n                            <span class=\"input-group-text\">%</span>\n                            <span class=\"input-group-text\">£</span>\n\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-lg-3\">\n                      <div class=\"position-relative form-group\">\n                        <label class=\"\">Tax Amount</label>\n                        <div class=\"input-group\">\n                          <input placeholder=\"...\" type=\"number\" class=\"form-control\">\n                          <div class=\"input-group-append\">\n                            <span class=\"input-group-text\">£</span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n\n                  </div>\n\n\n                </div>\n                <div class=\"d-block text-right card-footer\">\n                  <a href=\"javascript:void(0);\" class=\"btn-wide btn btn-success\">Save</a>\n                </div>\n\n              </div>\n\n            </div>\n          </div>\n        </div>\n\n\n      </div>\n\n\n\n\n\n    </div>\n\n\n\n\n  </div>\n\n\n\n\n\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/Jeptag-admin/sub-category/add-subcat/add-subcat.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/Jeptag-admin/sub-category/add-subcat/add-subcat.component.ts ***!
  \******************************************************************************/
/*! exports provided: AddSubcatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSubcatComponent", function() { return AddSubcatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../Services/auth.service */ "./src/app/Services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Services_subcategory_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Services/subcategory.service */ "./src/app/Jeptag-admin/Services/subcategory.service.ts");
/* harmony import */ var _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Shared/swalAlerts */ "./src/app/Shared/swalAlerts.ts");







var AddSubcatComponent = /** @class */ (function () {
    function AddSubcatComponent(SubcategoryService, active_route, router, AuthService) {
        this.SubcategoryService = SubcategoryService;
        this.active_route = active_route;
        this.router = router;
        this.AuthService = AuthService;
        this.form = {};
        this.fields = [];
        this.userData = {};
        this.loaded = false;
        this.edit = false;
    }
    AddSubcatComponent.prototype.ngOnInit = function () {
        this.form['form_fields'] = this.fields;
        var store_id = this.active_route.snapshot.paramMap.get('id');
        console.log("idddd " + this.active_route.snapshot.paramMap.get('id'));
        if (store_id != null) {
            this.edit = true;
            this.loaded = true;
            this.getStoreById(store_id);
        }
        else {
            this.edit = false;
            this.loaded = true;
            this.generateForm();
        }
        // this.form['form_fields'] = this.fields;
        // this.loaded = true;
        // this.generateForm();
    };
    AddSubcatComponent.prototype.getStoreById = function (id) {
        var _this = this;
        console.log("store id" + id);
        var store = this.SubcategoryService.getStoreById(id);
        store.subscribe(function (result) {
            console.log("INSIDE store EDIT ");
            console.log('store by id:', result);
            _this.category = result['result'];
            console.log('RESULT:', result);
            if (result != null) {
                _this.loaded = true;
                console.log("job data above generate form" + _this.category);
                _this.generateForm(_this.category);
            }
            else {
                _this.loaded = true;
                _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert('', "Something went wrong! Please wait until we'll fix this issue");
            }
        }, function (err) {
            console.log('Error while getting Job by id.', err);
            _this.loaded = true;
            _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert('', 'Server Error!');
        });
    };
    AddSubcatComponent.prototype.generateForm = function (category) {
        var _this = this;
        //  console.log("store"+store)
        var result = this.SubcategoryService.getCategories();
        result.subscribe(function (result) {
            _this.fields = [
                { label: 'Subategories Name', type: 'text', bootstrapGridClass: "col-lg-12", name: "Name", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required], required: true, value: category ? category.Name : '' },
                {
                    label: 'Category Name', type: 'selectCAT', bootstrapGridClass: "col-lg-12", name: "CategoryId", validations: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required], required: true, value: category ? category.CategoryId : '', options: result
                }
            ];
            _this.form['form_fields'] = _this.fields;
            _this.form['FormbootstrapGridClass'] = 'col-lg-12';
            _this.form['map'] = false;
            _this.form['MapbootstrapGridClass'] = 'col-lg-4';
            _this.form['image'] = false;
            _this.form['ImagebootstrapGridClass'] = 'col-lg-3';
            _this.form['img_height'] = "200px";
            _this.form['img_width'] = "200px";
            //  this.form['image_url'] = job ? job.job_image : null;
            _this.form['submit'] = 'Save';
        });
    };
    AddSubcatComponent.prototype.getJobData = function (data) {
        console.log(data);
        //this.loggen_in_user = JSON.parse(localStorage.getItem('user'));
        this.userData = this.AuthService.getUser();
        console.log("user id :" + this.userData['id']);
        data['seller_id'] = this.userData['id'];
        data['model'] = 'SubCategory';
        // if (data['image'] != undefined) {
        //   data['job_image'] = data['image'];
        //   delete data['image'];
        // }
        this.clear_form = false;
        this.submit_clicked = true;
        if (this.edit) {
            var id = this.active_route.snapshot.paramMap.get('id');
            this.editStore(data, id);
        }
        else {
            this.addSubcategory(data);
        }
    };
    AddSubcatComponent.prototype.editStore = function (data, id) {
        var _this = this;
        data['model'] = 'SubCategory';
        this.SubcategoryService.editStore(data, id).subscribe(function (result) {
            _this.submit_clicked = false;
            if (!result['error']) {
                _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].sucessAlert('', 'Category Updated Sucessfully!');
            }
            else {
                _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert('', result['message'].charAt(0).toUpperCase() + result['message'].substring(1));
            }
        }, function (err) {
            _this.submit_clicked = false;
            console.log(err);
            _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert('', 'Server Error');
        });
    };
    AddSubcatComponent.prototype.addSubcategory = function (data) {
        var _this = this;
        this.SubcategoryService.addSubcategory(data).subscribe(function (result) {
            _this.submit_clicked = false;
            if (result['status']) {
                _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].sucessAlert('', 'Category Added Sucessfully!');
                _this.clear_form = true;
            }
            else {
                _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert('', result['message'].charAt(0).toUpperCase() + result['message'].substring(1));
            }
        }, function (err) {
            _this.submit_clicked = false;
            console.error(err);
            _Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert('', 'Server Error');
        });
    };
    AddSubcatComponent.prototype.navigateToJobListing = function () {
        this.router.navigate(['jeptag/subcategories']);
    };
    AddSubcatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-add-subcat',
            template: __webpack_require__(/*! ./add-subcat.component.html */ "./src/app/Jeptag-admin/sub-category/add-subcat/add-subcat.component.html"),
            styles: [__webpack_require__(/*! ./add-subcat.component.css */ "./src/app/Jeptag-admin/sub-category/add-subcat/add-subcat.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_subcategory_service__WEBPACK_IMPORTED_MODULE_5__["SubcategoryService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _Services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AddSubcatComponent);
    return AddSubcatComponent;
}());



/***/ }),

/***/ "./src/app/Jeptag-admin/sub-category/sub-category-listing/sub-category-listing.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/Jeptag-admin/sub-category/sub-category-listing/sub-category-listing.component.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0plcHRhZy1hZG1pbi9zdWItY2F0ZWdvcnkvc3ViLWNhdGVnb3J5LWxpc3Rpbmcvc3ViLWNhdGVnb3J5LWxpc3RpbmcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/Jeptag-admin/sub-category/sub-category-listing/sub-category-listing.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/Jeptag-admin/sub-category/sub-category-listing/sub-category-listing.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-main__outer\">\n  <div class=\"app-main__inner\">\n    <div class=\"app-page-title\">\n      <div class=\"page-title-wrapper\">\n        <div class=\"page-title-heading\">\n          <div class=\"page-title-icon bg-warning text-white\">\n            <i class=\"icofont-dashboard-web  \">\n            </i>\n          </div>\n          <div> Subategories Managment\n            <div class=\"page-title-subheading\">Subategories listing\n            </div>\n          </div>\n        </div>\n        <div class=\"page-title-actions\">\n\n          <div class=\"d-inline-block dropdown\">\n            <a style=\"margin-left: 4px;color: white;\" class=\"btn-shadow  btn btn-info\" (click)=\"navigateToStoreAdd()\">\n              <i class=\"icofont-ui-add\"></i> Add New\n            </a>\n            <!-- <div class=\"btn-group \">\n              <button style=\"margin-left: 4px;\" type=\"button\" class=\"btn  btn-secondary\"><i class=\"icofont-upload-alt\"></i> Export</button>\n              <button type=\"button\" class=\"btn m btn-secondary dropdown-toggle dropdown-toggle-split\"\n                data-toggle=\"dropdown\"></button>\n              <div class=\"dropdown-menu\">\n                <a class=\"dropdown-item\" href=\"#\">Download PDF</a>\n                <a class=\"dropdown-item\" href=\"#\">Export to Excel</a>\n\n              </div>\n            </div>\n            <button style=\"margin-left: 4px;\" type=\"button\" class=\"btn  btn-secondary\"> <i class=\"icofont-download-alt\"></i> Import </button> -->\n\n            <!-- <button (click)=\"deleteMultipleStaff()\" style=\"margin-left: 4px;\" type=\"button\"\n              class=\"btn-shadow  btn btn-danger\">\n              <i class=\"icofont-trash\"></i> Delete Selected\n            </button> -->\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n\n        <h4 class=\"d-flex flex-wrap justify-content-between align-items-center mb-3\">\n          <div>Subategories</div>\n          <!-- <div class=\"col-12 col-md-3 p-0 mb-3\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n          </div> -->\n        </h4>\n        <div class=\"main-card mb-3 card\">\n          <!-- <div class=\"card-header\">Products\n                                        <div class=\"btn-actions-pane-right\">\n                                            <div role=\"group\" class=\"btn-group-sm btn-group\">\n                                                <button class=\"active btn btn-focus\">Received </button>\n                                                <button class=\"btn btn-focus\">Pending</button>\n                                            </div>\n                                        </div>\n                                    </div> -->\n          <mat-progress-bar *ngIf=\"!loaded\" mode=\"indeterminate\"></mat-progress-bar>\n          <div class=\"card-body\">\n\n            <div class=\"table-responsive\">\n              <mat-form-field style=\"width: 100%;\">\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search...\">\n                <!-- (keyup)=\"applyFilter($event.target.value)\" -->\n              </mat-form-field>\n\n              <div class=\"mat-elevation-z8\">\n                <div class=\"example-container\">\n                  <table mat-table [dataSource]=\"dataSource\" style=\"width: 100%;\">\n                    <div>\n                      <!-- <ng-container matColumnDef=\"select\">\n                        <th mat-header-cell *matHeaderCellDef>\n                          <mat-checkbox color=\"primary\" (change)=\"$event ? masterToggle() : null\"\n                            [checked]=\"selection.hasValue() && isAllSelected()\"\n                            [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n                          </mat-checkbox>\n                        </th>\n                        <td mat-cell *matCellDef=\"let row\">\n                          <mat-checkbox color=\"primary\" (click)=\"$event.stopPropagation()\"\n                            (change)=\"checkboxClicked($event,row)\" [checked]=\"selection.isSelected(row)\">\n                          </mat-checkbox>\n                        </td>\n                      </ng-container> -->\n\n                      <!-- <ng-container matColumnDef=\"job_title\">\n                        <th mat-header-cell *matHeaderCellDef>Job Title </th>\n                        <td mat-cell *matCellDef=\"let element\"> <img style=\"width: 30px; height: 30px;\"\n                            [src]=\"element.user_image!=null ? element.user_image : '../../../assets/images/no_image.png'\" />\n                        </td>\n                      </ng-container> -->\n\n                      <ng-container matColumnDef=\"Name\" sticky>\n                        <th mat-header-cell *matHeaderCellDef> Name  </th>\n                        <td mat-cell *matCellDef=\"let element\">\n                          <span> {{element.Name }} </span>\n                         \n                        </td>\n                      </ng-container>\n\n                      <!-- <ng-container matColumnDef=\"description\" sticky>\n                        <th mat-header-cell *matHeaderCellDef> description </th>\n                        <td mat-cell *matCellDef=\"let element\">\n                          <span> {{element.description }} </span>\n                         \n                        </td>\n                      </ng-container> -->\n\n                     <!-- <ng-container style=\"margin-right: 10px;\" matColumnDef=\"status\">\n                        <th mat-header-cell *matHeaderCellDef> Type </th>\n                        <td mat-cell *matCellDef=\"let element\">\n                          <span class=\"badge\" [ngClass]=\"{\n                            'badge-info':element.status === 'online',\n                            'badge-warning':element.status === 'offline'\n                           \n                          }\"> {{element.status | removeUnderScore | titlecase}}</span>\n\n                        </td>\n                      </ng-container> -->\n\n                      <!-- <ng-container style=\"margin-right: 10px;\" matColumnDef=\"approved\">\n                        <th mat-header-cell *matHeaderCellDef> status </th>\n                        <td mat-cell *matCellDef=\"let element\">\n                          <span class=\"badge\" [ngClass]=\"{\n                            'badge-info':element.approved === '1',\n                            'badge-warning':element.approved === '0'\n                           \n                          }\"> {{element.approved | removeUnderScore | titlecase}}</span>\n\n                        </td>\n                      </ng-container> -->\n\n                      <!-- <ng-container matColumnDef=\"Address\">\n                        <th mat-header-cell *matHeaderCellDef> Address </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.Address}} </td>\n                      </ng-container>\n                      <ng-container matColumnDef=\"City\">\n                        <th mat-header-cell *matHeaderCellDef> City </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.City}} </td>\n                      </ng-container>\n                      <ng-container matColumnDef=\"Region\">\n                        <th mat-header-cell *matHeaderCellDef> Region </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.Region}} </td>\n                      </ng-container>\n                      <ng-container matColumnDef=\"Country\">\n                        <th mat-header-cell *matHeaderCellDef> Country </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.Country}} </td>\n                      </ng-container>\n                      <ng-container matColumnDef=\"Phone\">\n                        <th mat-header-cell *matHeaderCellDef> Phone </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.Phone}} </td>\n                      </ng-container> -->\n\n                      <!-- <ng-container matColumnDef=\"position\">\n                        <th mat-header-cell *matHeaderCellDef> Position </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n                      </ng-container>\n\n                      <ng-container matColumnDef=\"Salary\">\n                        <th mat-header-cell *matHeaderCellDef> Salary </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.salary}} </td>\n                      </ng-container>\n                      <ng-container matColumnDef=\"weekly_hours\">\n                        <th mat-header-cell *matHeaderCellDef> Weekly hours </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.weekly_hours}} </td>\n                      </ng-container>\n\n                      <ng-container matColumnDef=\"location\">\n                        <th mat-header-cell *matHeaderCellDef> Location </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.location}} </td>\n                      </ng-container> -->\n\n                      <ng-container matColumnDef=\"actions\">\n                        <th mat-header-cell *matHeaderCellDef> Actions </th>\n                        <td mat-cell *matCellDef=\"let element\">\n                          <div class=\"buttons\">\n                          \n                            <button (click)=\"getJobId(element._id,'delete')\"\n                              class=\"mb-2 mr-2 btn-transition btn btn-outline-light btn-sm\">Delete</button>\n                          </div>\n                        </td>\n                      </ng-container>\n\n\n                    </div>\n                    <tr mat-header-row *matHeaderRowDef=\"table_headers\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: table_headers;\"></tr>\n                  </table>\n                </div>\n                <mat-paginator #paginator [pageSize]=\"10\" showFirstLastButtons [pageSizeOptions]=\"[10,50,100,500]\">\n                </mat-paginator>\n\n              </div>\n            </div>\n          </div>\n\n\n        </div>\n      </div>\n\n    </div>\n\n\n  </div>\n\n\n\n\n\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/Jeptag-admin/sub-category/sub-category-listing/sub-category-listing.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/Jeptag-admin/sub-category/sub-category-listing/sub-category-listing.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: SubCategoryListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubCategoryListingComponent", function() { return SubCategoryListingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _Services_subcategory_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Services/subcategory.service */ "./src/app/Jeptag-admin/Services/subcategory.service.ts");
/* harmony import */ var src_app_Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Shared/swalAlerts */ "./src/app/Shared/swalAlerts.ts");







var SubCategoryListingComponent = /** @class */ (function () {
    function SubCategoryListingComponent(SubcategoryService, router, currentActivatedRoute) {
        this.SubcategoryService = SubcategoryService;
        this.router = router;
        this.currentActivatedRoute = currentActivatedRoute;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]([]);
        this.initialSelection = [];
        this.allowMultiSelect = true;
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["SelectionModel"](this.allowMultiSelect, this.initialSelection);
        this.table_headers = [];
        this.data = [];
        this.storeData = {};
        this.loaded = false;
        this.staff_ids = [];
    }
    SubCategoryListingComponent.prototype.ngOnInit = function () {
        this.table_headers = ['Name', 'actions'];
        this.getStaffList();
    };
    SubCategoryListingComponent.prototype.getStaffList = function () {
        var _this = this;
        var staff = this.SubcategoryService.getStores();
        staff.subscribe(function (result) {
            console.log('product list:', result);
            if (result != null) {
                _this.staff = result;
                _this.dataSource.data = _this.staff;
                _this.dataSource.connect().next(_this.staff);
                _this.dataSource.paginator = _this.paginator;
            }
            else {
                // SwalAlert.errorAlert('', result['message'].charAt(0).toUpperCase() + result['message'].substring(1));
                src_app_Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert('', "Error");
            }
            _this.loaded = true;
            _this.selection.clear();
        }, function (err) {
            _this.loaded = true;
            console.error(err);
        });
    };
    SubCategoryListingComponent.prototype.getJobId = function (store_id, action) {
        this.storeData['model'] = 'SubCategory';
        this.storeData['_id'] = store_id;
        console.log('job id', store_id);
        // if (action == 'edit')
        //   this.router.navigate(['/jeptag/stores/edit', store_id]);
        // else {
        this.deleteStoreById(this.storeData);
        // }
    };
    SubCategoryListingComponent.prototype.deleteStoreById = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var response;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, src_app_Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].getDeleteSwal()];
                    case 1:
                        response = _a.sent();
                        if (response == true) {
                            this.loaded = false;
                            this.SubcategoryService.deleteById(data).subscribe(function (result) {
                                if (!result['error']) {
                                    src_app_Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].sucessAlert('', 'SubCategory Deleted Successfully!');
                                    _this.getStaffList();
                                }
                                else {
                                    _this.loaded = true;
                                    src_app_Shared_swalAlerts__WEBPACK_IMPORTED_MODULE_6__["SwalAlert"].errorAlert('', result['message'].charAt(0).toUpperCase() + result['message'].substring(1));
                                }
                            }, function (err) {
                                _this.loaded = true;
                                console.error(err);
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SubCategoryListingComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    SubCategoryListingComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected == numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    SubCategoryListingComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
        this.staff_ids = this.getIdsFromSelectionArrayObject(this.selection.selected);
        // console.log(this.selection);
    };
    // $event ? selection.toggle(row) : null
    SubCategoryListingComponent.prototype.checkboxClicked = function (event, row) {
        if (event) {
            this.selection.toggle(row);
        }
        else
            null;
        this.staff_ids = this.getIdsFromSelectionArrayObject(this.selection.selected);
        // console.log(this.selection);
    };
    SubCategoryListingComponent.prototype.navigateToStoreAdd = function () {
        this.router.navigate(['add'], { relativeTo: this.currentActivatedRoute });
    };
    SubCategoryListingComponent.prototype.navigateToStaffListing = function () {
        this.router.navigate(['jeptag/stores']);
    };
    SubCategoryListingComponent.prototype.getIdsFromSelectionArrayObject = function (array_of_objects) {
        var ids = array_of_objects.map(function (a) { return a.id; });
        return ids;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], SubCategoryListingComponent.prototype, "paginator", void 0);
    SubCategoryListingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sub-category-listing',
            template: __webpack_require__(/*! ./sub-category-listing.component.html */ "./src/app/Jeptag-admin/sub-category/sub-category-listing/sub-category-listing.component.html"),
            styles: [__webpack_require__(/*! ./sub-category-listing.component.css */ "./src/app/Jeptag-admin/sub-category/sub-category-listing/sub-category-listing.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_subcategory_service__WEBPACK_IMPORTED_MODULE_5__["SubcategoryService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], SubCategoryListingComponent);
    return SubCategoryListingComponent;
}());



/***/ }),

/***/ "./src/app/Services/auth-guard.ts":
/*!****************************************!*\
  !*** ./src/app/Services/auth-guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/Services/auth.service.ts");




var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        var is_authenticated;
        var key = route.queryParams.key;
        // if (key != undefined && key == 12) {
        //     is_authenticated = true
        // }
        // else {
        if (this.auth.isAuthenticated())
            is_authenticated = true;
        else {
            this.router.navigate(['/']);
            is_authenticated = false;
        }
        //        }
        // console.log(is_authenticated);
        return is_authenticated;
    };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/Services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/Services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.dataSource = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]({});
        this.data = this.dataSource.asObservable();
    }
    AuthService.prototype.login = function (contact_number, password) {
        var _this = this;
        return this.http.post('/api/user/loginAdmin', {
            "email": contact_number,
            "password": password
            //"type":"user"
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            console.log("User data" + user);
            if (user['status']) {
                localStorage.setItem('user', JSON.stringify(user['data']));
                _this.dataSource.next(JSON.stringify(user['data']));
            }
            return user;
        }, function (err) {
        }));
    };
    AuthService.prototype.getToken = function () {
        var token = null;
        var user = JSON.parse(localStorage.getItem('user'));
        if (user != null)
            token = user['token'];
        //  console.log(localStorage.getItem('user'));
        // if (localStorage.getItem('user') != 'undefined' && localStorage.getItem('user') != null) {
        //   token = JSON.parse(localStorage.getItem('user'))['token'];
        // }
        return token;
    };
    AuthService.prototype.getBranchKey = function () {
        var branch_key = null;
        var user = JSON.parse(localStorage.getItem('user'));
        if (user != null)
            branch_key = user['branch_key'];
        // console.log();
        // if (branch_key != 'undefined' && branch_key != null) {
        //   branch_key = JSON.parse(localStorage.getItem('user'))['branch_key'];
        // }
        return branch_key;
    };
    AuthService.prototype.unsetUser = function () {
        localStorage.removeItem('user');
        this.router.navigate(['/']);
    };
    AuthService.prototype.getUser = function () {
        return JSON.parse(localStorage.getItem('user'));
    };
    AuthService.prototype.isAuthenticated = function () {
        if (localStorage.getItem('user') != 'undefined' && localStorage.getItem('user') != null) {
            return true;
        }
    };
    AuthService.prototype.updatedDataSelection = function (data) {
        this.dataSource.next(data);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/Services/data-sharing.service.ts":
/*!**************************************************!*\
  !*** ./src/app/Services/data-sharing.service.ts ***!
  \**************************************************/
/*! exports provided: DataSharingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSharingService", function() { return DataSharingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DataSharingService = /** @class */ (function () {
    function DataSharingService() {
        this.data = {};
    }
    DataSharingService.prototype.setOption = function (option, value) {
        this.data[option] = value;
    };
    DataSharingService.prototype.getOption = function () {
        return this.data;
    };
    DataSharingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], DataSharingService);
    return DataSharingService;
}());



/***/ }),

/***/ "./src/app/Services/http.service.ts":
/*!******************************************!*\
  !*** ./src/app/Services/http.service.ts ***!
  \******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _Shared_DateUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Shared/DateUtils */ "./src/app/Shared/DateUtils.ts");




var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
        this.loggen_in_user = JSON.parse(localStorage.getItem('user'));
        // this.loggen_in_user = {id:13};
    }
    HttpService.prototype.get = function (url) {
        return this.http.get(url);
    };
    HttpService.prototype.post = function (data, url) {
        console.log(data);
        return this.http.post(url, data);
    };
    HttpService.prototype.postWithoutStatus = function (data, url) {
        return this.http.post(url, data);
    };
    HttpService.prototype.postFormData = function (data, url) {
        data['created_by_id'] = this.loggen_in_user['id'];
        var form_data = this.converToFormdata(data);
        // console.log(form_data);
        return this.http.post(url, form_data);
    };
    HttpService.prototype.postFormDataWithoutActiveStatus = function (data, url) {
        data['created_by_id'] = this.loggen_in_user['id'];
        data['os'] = "web";
        // console.log(data);
        var form_data = this.converToFormdata(data);
        return this.http.post(url, form_data);
    };
    HttpService.prototype.filter = function (data, url) {
        // console.log(data);
        return this.http.post(url, data);
    };
    HttpService.prototype.patch = function (data, url) {
        data['modified_by_id'] = this.loggen_in_user['id'];
        data['modified_datetime'] = _Shared_DateUtils__WEBPACK_IMPORTED_MODULE_3__["DateUtils"].getUtcDateTimeStart(new Date().toISOString());
        data['created_by_id'] = this.loggen_in_user['id'];
        data['os'] = "web";
        data['status'] = "active";
        // console.log(data);
        return this.http.patch(url, data);
    };
    HttpService.prototype.deletepatch = function (data, url) {
        data['modified_by_id'] = this.loggen_in_user['id'];
        data['modified_datetime'] = _Shared_DateUtils__WEBPACK_IMPORTED_MODULE_3__["DateUtils"].getUtcDateTimeStart(new Date().toISOString());
        data['created_by_id'] = this.loggen_in_user['id'];
        data['os'] = "web";
        // console.log(data);
        return this.http.patch(url, data);
    };
    HttpService.prototype.patchFormData = function (data, url) {
        data['modified_by_id'] = this.loggen_in_user['id'];
        data['modified_datetime'] = _Shared_DateUtils__WEBPACK_IMPORTED_MODULE_3__["DateUtils"].getUtcDateTimeStart(new Date().toISOString());
        data['created_by_id'] = this.loggen_in_user['id'];
        data['os'] = "web";
        data['status'] = "active";
        var form_data = this.converToFormdata(data);
        // console.log(form_data);
        return this.http.patch(url, form_data);
    };
    HttpService.prototype.patchFormDataWithoutActiveStatus = function (data, url) {
        data['modified_by_id'] = this.loggen_in_user['id'];
        data['modified_datetime'] = _Shared_DateUtils__WEBPACK_IMPORTED_MODULE_3__["DateUtils"].getUtcDateTimeStart(new Date().toISOString());
        ;
        data['os'] = "web";
        // console.log(data);
        var form_data = this.converToFormdata(data);
        return this.http.patch(url, form_data);
    };
    HttpService.prototype.delete = function (url) {
        return this.http.delete(url);
    };
    HttpService.prototype.converToFormdata = function (data) {
        var form_data = new FormData();
        for (var key in data) {
            // console.log(key,data[key]);
            form_data.append(key, data[key]);
        }
        return form_data;
    };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/Services/interceptor.service.ts":
/*!*************************************************!*\
  !*** ./src/app/Services/interceptor.service.ts ***!
  \*************************************************/
/*! exports provided: InterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterceptorService", function() { return InterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/Services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");







var InterceptorService = /** @class */ (function () {
    function InterceptorService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    InterceptorService.prototype.intercept = function (req, next) {
        // Get the auth header from the service.
        var _this = this;
        var authHeader = this.auth.getToken();
        var branch_Key = this.auth.getBranchKey();
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].baseUrl;
        // const url = 'http://168.63.140.202:8001/instamunch/';
        // Clone the request to add the new header.
        var cloneReq;
        //   console.log("auth header:"+authHeader);
        if (authHeader != null) {
            var headers = req.headers;
            // .set("Authorization", "Token " + authHeader);
            // .set("Content-Type", "application/json");
            cloneReq = req.clone({ url: url + req.url });
        }
        else {
            cloneReq = req.clone({ url: url + req.url });
        }
        // Pass on the cloned request instead of the original request.
        return next.handle(cloneReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"]) {
            }
        }), function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpErrorResponse"] && err.status === 401) {
                _this.auth.unsetUser();
                _this.router.navigateByUrl('');
            }
        }));
    };
    InterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], InterceptorService);
    return InterceptorService;
}());



/***/ }),

/***/ "./src/app/Services/sales-report.resolver.ts":
/*!***************************************************!*\
  !*** ./src/app/Services/sales-report.resolver.ts ***!
  \***************************************************/
/*! exports provided: SalesReportResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesReportResolver", function() { return SalesReportResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _Jeptag_admin_Services_sales_report_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Jeptag-admin/Services/sales-report.service */ "./src/app/Jeptag-admin/Services/sales-report.service.ts");




var SalesReportResolver = /** @class */ (function () {
    function SalesReportResolver(salesReportService) {
        this.salesReportService = salesReportService;
    }
    SalesReportResolver.prototype.resolve = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.salesReportService.getSalesReport());
        //   return of({remainingPercentage:40});
    };
    SalesReportResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Jeptag_admin_Services_sales_report_service__WEBPACK_IMPORTED_MODULE_3__["SalesReportService"]])
    ], SalesReportResolver);
    return SalesReportResolver;
}());



/***/ }),

/***/ "./src/app/Shared/DateUtils.ts":
/*!*************************************!*\
  !*** ./src/app/Shared/DateUtils.ts ***!
  \*************************************/
/*! exports provided: DateUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateUtils", function() { return DateUtils; });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Utility that performs various dates operation.
 * Uses most of date-fns methods
 */
var DateUtils = /** @class */ (function () {
    function DateUtils() {
    }
    DateUtils.now = function () {
        return new Date();
    };
    DateUtils.isValid = function (date) {
        return Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["isValid"])(new Date(date));
    };
    DateUtils.getMMMMDY = function (date) {
        return Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["format"])(date, 'MMM DD, YYYY');
    };
    /**
     * Transform UTC date to Local date in the format (YYYYMMDDHHmmss)
     * @param date: date to format
     */
    DateUtils.getLocalYYYYMMDDHHmmss = function (date) {
        if (date) {
            date = date.replace('+00:00', '');
            try {
                var utcDate = Date.parse(date);
                var localDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["addMinutes"])(utcDate, -(new Date().getTimezoneOffset()));
                return Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["format"])(localDate, 'YYYY-MM-DD HH:mm:ss');
            }
            catch (e) {
                console.log(e);
            }
        }
        return '';
    };
    /**
     * Transform UTC date to Local date in the format (hhmmA)
     * @param date: date to format
     */
    DateUtils.getLocalhhmmA = function (date) {
        if (date) {
            if (!date.includes('Z')) {
                date = date + 'Z';
            }
            date = date.replace('+00:00', '');
            try {
                var localDate = new Date(date);
                // const utcDate = Date.parse(date);
                // const localDate = addMinutes(utcDate, -(new Date().getTimezoneOffset()));
                // console.log(date , localDate);
                return Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["format"])(localDate, 'hh:mm A');
            }
            catch (e) {
                console.log(e);
            }
        }
        return '';
    };
    DateUtils.hrs12 = function (date) {
        return Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["format"])(date, 'hh:mm A');
    };
    DateUtils.subtractDay = function (date, days) {
        // tslint:disable-next-line:prefer-const
        date = Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["subDays"])(date, days);
        return Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["format"])(date, 'YYYY-MM-DD');
        // '2020-02-19'
    };
    DateUtils.utcToLocalTime = function (date) {
        var localDate = new Date(date);
        console.log(date, ': ', localDate);
        return Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["format"])(localDate, 'hh:mm A');
    };
    /**
     * Transform UTC date to Local date in the format (MMDDYYYYhhmmssA)
     * @param date: date to format
     */
    // input utc as '2017-12-04 07:23:56+00:00' or any valid parseable date as string
    // out local as '2017-12-04 02:23:56'
    DateUtils.getLocalMMDDYYYYhhmmssA = function (date) {
        if (date) {
            date = date.replace('+00:00', '');
            try {
                var utcDate = Date.parse(date);
                var localDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["addMinutes"])(utcDate, -(new Date().getTimezoneOffset()));
                return Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["format"])(localDate, 'MMM, DD, YYYY, hh:mm:ss A');
            }
            catch (e) {
                console.log(e);
            }
        }
        return '';
    };
    /**
     * Transform UTC date to Local date in the format (MMDDYYYYhhmmssA)
     * @param date: date to format
     */
    // input utc as '2017-12-04 07:23:56+00:00' or any valid parseable date as string
    // out local as '2017-12-04 02:23:56'
    DateUtils.getLocalMMDDYYYYhhmmssAwithDay = function (date) {
        if (date) {
            date = date.replace('+00:00', '');
            var options = { weekday: 'long', year: 'numeric', month: 'long',
                day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
            try {
                var utcDate = Date.parse(date);
                var localDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["addMinutes"])(utcDate, -(new Date().getTimezoneOffset()));
                // return format(localDate, 'MMM, DD, YYYY, hh:mm:ss A');
                return localDate.toLocaleDateString('en-EN', options);
            }
            catch (e) {
                console.log(e);
            }
        }
        return '';
    };
    /**
     * Transform Local date to UTC date in the format (YYYYMMDDHHmmsstemp)
     * @param date: date to format
     */
    // input local as '2017-12-04 02:23:56' or any valid parseable date as string
    // out utc as '2017-12-04 07:23:56'  2018-01-01T01:00
    DateUtils.getUTCYYYYMMDDHHmmsstemp = function (date) {
        if (date) {
            try {
                var utcDate = Date.parse(date);
                var localDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["addMinutes"])(utcDate, new Date().getTimezoneOffset());
                return Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["format"])(localDate, 'YYYY-MM-DDTHH:mm');
            }
            catch (e) {
                console.log(e);
            }
        }
        return '';
    };
    /**
     * Transform Local date to UTC date in the format (YYYYMMDDHHmmsstemp)
     * @param date: date to format
     */
    DateUtils.getUTCYYYYMMDDHHmmss = function (date) {
        if (date) {
            try {
                var utcDate = Date.parse(date);
                var localDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["addMinutes"])(utcDate, new Date().getTimezoneOffset());
                return Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["format"])(localDate, 'YYYY-MM-DD HH:mm:ss');
            }
            catch (e) {
                console.log(e);
            }
        }
        return '';
    };
    /**
     * Transform Local date to UTC date in the format (YYYYMMDDHHmmsstemp)
     * @param date: date to format
     */
    DateUtils.getLocalYYYYMMDDHHmmssA = function (date) {
        if (date) {
            try {
                var utcDate = Date.parse(date);
                var localDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["addMinutes"])(utcDate, -(new Date().getTimezoneOffset()));
                return Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["format"])(localDate, 'YYYY:MM:DD : HH:mm:ss A');
            }
            catch (e) {
                console.log(e);
            }
        }
        return '';
    };
    /**
     * Returns date in specified format (MMDDYYYYhhmmssA)
     * @param date: date to format
     */
    DateUtils.getMMDDYYYYhhmmssA = function (date) {
        if (date) {
            try {
                var localDate = Date.parse(date);
                return Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["format"])(localDate, 'MMM DD, YYYY, hh:mm:ss A');
            }
            catch (e) {
                console.log(e);
            }
        }
        return '';
    };
    /**
     * Returns date in specified format (YYYY)
     * @param date: date to format
     */
    DateUtils.getYYYY = function (date) {
        if (date) {
            try {
                var localDate = Date.parse(date);
                return Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["format"])(localDate, 'YYYY');
            }
            catch (e) {
                console.log(e);
            }
        }
        return '';
    };
    /**
     * Returns date in specified format (MMM)
     * @param date: date to format
     */
    DateUtils.getMMM = function (date) {
        if (date) {
            try {
                var localDate = Date.parse(date);
                return Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["format"])(localDate, 'MMM');
            }
            catch (e) {
                console.log(e);
            }
        }
        return '';
    };
    /**
     * Returns date in specified format (DD)
     * @param date: date to format
     */
    DateUtils.getDD = function (date) {
        if (date) {
            try {
                var localDate = Date.parse(date);
                return Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["format"])(localDate, 'DD');
            }
            catch (e) {
                console.log(e);
            }
        }
        return '';
    };
    /**
     * Returns date in specified format (DDMMM)
     * @param date: date to format
     */
    DateUtils.getDDMMM = function (date) {
        if (date) {
            try {
                var localDate = Date.parse(date);
                return Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["format"])(localDate, 'DD-MMM');
            }
            catch (e) {
                console.log(e);
            }
        }
        return '';
    };
    /**
     * Returns date in specified format (hhmmssA)
     * @param date: date to format
     */
    DateUtils.gethhmmssA = function (date) {
        if (date) {
            try {
                var localDate = Date.parse(date);
                var utcDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["addMinutes"])(localDate, new Date().getTimezoneOffset());
                return Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["format"])(utcDate, 'HH:mm:ss');
            }
            catch (e) {
                console.log(e);
            }
        }
        return '';
    };
    /**
     * Returns date in specified format (hhmmA)
     * @param date: date to format
     */
    DateUtils.gethhmmA = function (date) {
        if (date) {
            try {
                var localDate = Date.parse(date);
                return Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["format"])(localDate, 'hh:mm:a');
            }
            catch (e) {
                console.log(e);
            }
        }
        return '';
    };
    /**
     * Returns curretn timezone
     */
    DateUtils.getTimezone = function () {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
    };
    /**
     * Converts utc timestamp to local timestamp
     * @param utcTimestamp
     */
    DateUtils.getUTCtoLocalTimestamp = function (utcTimestamp) {
        if (utcTimestamp) {
            try {
                var localDateTime = Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["addMinutes"])(utcTimestamp, -(new Date().getTimezoneOffset()));
                return localDateTime.getTime();
            }
            catch (e) {
                console.log(e);
            }
        }
        return 0;
    };
    /**
     * Returns date in specified format (YYYYMMDD)
     * @param date: date to format
     */
    DateUtils.getYYYYMMDD = function (date) {
        if (date) {
            try {
                var localDate = Date.parse(date);
                return Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["format"])(localDate, 'YYYY-MM-DD');
            }
            catch (e) {
                console.log(e);
            }
        }
        return '';
    };
    /**
     * Returns Date & time for any given format
     * @param date: date to parse
     * @param formatType: format to parse in
     */
    DateUtils.getDateAndTime = function (date, formatType) {
        if (date) {
            try {
                var localDate = Date.parse(date);
                if (formatType) {
                    return Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["format"])(localDate, formatType);
                }
                else {
                    return Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["format"])(localDate, 'DD-MMM-YYYY hh:mm:a');
                }
            }
            catch (e) {
                console.log(e);
            }
        }
        return '';
    };
    /**
     * Returns today - 7 days
     */
    DateUtils.getLastWeek = function () {
        // return subWeeks(this.getStartofToday(), 1);
        return Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["subDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["startOfToday"])(), 7);
    };
    /**
     * Gets last month from today
     */
    DateUtils.getLastMonth = function () {
        return Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["subMonths"])(new Date(), 1);
    };
    /**
     * Gets last day from today
     */
    DateUtils.getLastDay = function () {
        return Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["subDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["startOfToday"])(), 1);
    };
    /**
     * Return the end of yesterday.
     */
    DateUtils.getEndOfYesterday = function () {
        return Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["endOfYesterday"])();
    };
    /**
     * Return the start of today.
     */
    DateUtils.getStartofToday = function () {
        return Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["startOfToday"])();
    };
    /**
     * Gets End of today
     */
    DateUtils.getEndofToday = function () {
        return Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["endOfToday"])();
    };
    /**
     * convert local date to utc in the given format
     * @param date: date to format
     * @param dateFormat: format to convert date in
     */
    DateUtils.getUtcDateTimeStart = function (date, dateFormat) {
        if (dateFormat === void 0) { dateFormat = 'yyyy-MM-dd HH:mm:ss'; }
        if (date) {
            try {
                var utcDate = Date.parse(date);
                var localDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["addMinutes"])(utcDate, (new Date().getTimezoneOffset()));
                return Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["format"])(localDate, dateFormat);
            }
            catch (e) {
                console.log(e);
            }
        }
        return '';
    };
    /**
     * convert local date to utc in the given format (YYYY-MM-DD HH:mm:ss)
     * @param date: date to format
     */
    DateUtils.getUtcDateTimeEnd = function (date) {
        if (date) {
            try {
                var utcDate = Date.parse(date);
                // const localDate = addMinutes(utcDate, 1440);
                var resultDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["addMinutes"])(utcDate, new Date().getTimezoneOffset());
                return Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["format"])(resultDate, 'YYYY-MM-DD HH:mm:ss');
            }
            catch (e) {
                console.log(e);
            }
        }
        return '';
    };
    /**
     * Convert minutes in represenatble String
     * 90 will be converted to 1H 30M
     * @param time: value in minutes to convert
     */
    DateUtils.getDuration = function (time) {
        if (time >= 60) {
            var hours = Math.trunc(time / 60);
            var mins = Math.trunc(time % 60);
            return hours + 'H ' + ' ' + mins + 'M';
        }
        else if (time < 60) {
            return Math.round(time) + 'M';
        }
        else {
            return 0 + 'H ' + 0 + 'M';
        }
    };
    /**
     * get Hours from  minutes
     * 90 will return 2
     * @param time: value in minutes
     */
    DateUtils.getHoursFromMinutes = function (time) {
        if (time) {
            var hours = (time / 60).toFixed(1);
            return hours;
        }
    };
    /**
     * Sorts an array of dates
     * @param dates array of dates to sort
     */
    DateUtils.sortDates = function (dates) {
        dates.sort(function (a, b) {
            var number;
            var dateA = +new Date(a);
            var dateB = +new Date(b);
            number = (dateA - dateB);
            return number;
        });
    };
    /**
     * Calculates difference of two dates in years
     * @param date1: first date
     * @param date2: second date
     */
    DateUtils.DifferenceInYears = function (date1, date2) {
        var _MS_PER_YEAR = 1000 * 60 * 60 * 24 * 365;
        if (!Object(util__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(date1) && Object(util__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(date2)) {
            var a = new Date(date1);
            var b = new Date(date2);
            var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
            var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
            var timeDiff = Math.floor((utc1 - utc2) / _MS_PER_YEAR);
            return timeDiff;
        }
    };
    /**
     * returns date in the format specified,
     * @param value: date to format
     * @param dateFormat: format bu default ('M/D/YYYY, h:mm:ss A')
     */
    DateUtils.formatDate = function (value, dateFormat) {
        if (dateFormat === void 0) { dateFormat = 'M/D/YYYY, h:mm:ss A'; }
        if (value) {
            var dateValue = new Date(value);
            // converts a date into NO Time Zone format
            var dateWithNoTimezone = new Date(dateValue.getUTCFullYear(), dateValue.getUTCMonth(), dateValue.getUTCDate(), dateValue.getUTCHours(), dateValue.getUTCMinutes(), dateValue.getUTCSeconds());
            return Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["format"])((dateWithNoTimezone), dateFormat);
        }
        else {
            return '-';
        }
    };
    DateUtils.formatToUtc = function (date) {
        var time = date.split(' ')[1];
        var formatted_time = this.pad(time.split(':')[0]) + ':' + this.pad(time.split(':')[1]) + ':' + this.pad(time.split(':')[2]);
        var utc = Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["format"])(date, 'YYYY-MM-DDT') + formatted_time + 'Z';
        return utc;
    };
    DateUtils.pad = function (d) {
        return (d < 10) ? '0' + d.toString() : d.toString();
    };
    return DateUtils;
}());



/***/ }),

/***/ "./src/app/Shared/Pipes/removeUnderScore.ts":
/*!**************************************************!*\
  !*** ./src/app/Shared/Pipes/removeUnderScore.ts ***!
  \**************************************************/
/*! exports provided: removeUnderScore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeUnderScore", function() { return removeUnderScore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var removeUnderScore = /** @class */ (function () {
    function removeUnderScore() {
    }
    removeUnderScore.prototype.transform = function (value) {
        if (value != undefined)
            return value.replace(/_/g, ' ');
        else
            return value;
    };
    removeUnderScore = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'removeUnderScore'
        })
    ], removeUnderScore);
    return removeUnderScore;
}());



/***/ }),

/***/ "./src/app/Shared/charts/charts.component.css":
/*!****************************************************!*\
  !*** ./src/app/Shared/charts/charts.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1NoYXJlZC9jaGFydHMvY2hhcnRzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Shared/charts/charts.component.html":
/*!*****************************************************!*\
  !*** ./src/app/Shared/charts/charts.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<apx-chart #chartt [series]=\"data\" [chart]=\"chartOptions.chart\"\r\n  [dataLabels]=\"chartOptions.dataLabels\" [plotOptions]=\"chartOptions.plotOptions\" [yaxis]=\"chartOptions.yaxis\"\r\n  [xaxis]=\"chartOptions.xaxis\" [legend]=\"chartOptions.legend\" [colors]=\"chartOptions.colors\"></apx-chart>"

/***/ }),

/***/ "./src/app/Shared/charts/charts.component.ts":
/*!***************************************************!*\
  !*** ./src/app/Shared/charts/charts.component.ts ***!
  \***************************************************/
/*! exports provided: ChartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsComponent", function() { return ChartsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-apexcharts */ "./node_modules/ng-apexcharts/fesm5/ng-apexcharts.js");



var ChartsComponent = /** @class */ (function () {
    function ChartsComponent() {
        this.data = [];
        this.labels = [];
        this.chartOptions = {};
    }
    ChartsComponent.prototype.ngOnInit = function () {
        // console.log(this.data);
        this.chartOptions = {
            chart: {
                height: 350,
                type: "bar",
                events: {
                    click: function (chart, w, e) {
                        // console.log(chart, w, e)
                    }
                }
            },
            colors: [
                "#008FFB",
                "#00E396",
                "#FEB019",
                "#FF4560",
                "#775DD0",
                "#546E7A",
                "#26a69a",
                "#D10CE8"
            ],
            plotOptions: {
                bar: {
                    columnWidth: "10%",
                    distributed: true
                }
            },
            dataLabels: {
                enabled: true
            },
            legend: {
                show: false
            },
            yaxis: {
                title: {
                    text: this.yaxisLabel
                }
            },
            xaxis: {
                categories: this.labels,
                labels: {
                    style: {
                        colors: [
                            "#008FFB",
                            "#00E396",
                            "#FEB019",
                            "#FF4560",
                            "#775DD0",
                            "#546E7A",
                            "#26a69a",
                            "#D10CE8"
                        ],
                        fontSize: "12px"
                    }
                }
            }
        };
    };
    ChartsComponent.prototype.ngOnChanges = function (changes) {
        // if (changes['data']) {
        //   //console.log(this.chart);
        //   // this.chart.updateSeries(this.data);
        // }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ChartsComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ChartsComponent.prototype, "yaxisLabel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChartsComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChartsComponent.prototype, "labels", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("chartt"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__["ChartComponent"])
    ], ChartsComponent.prototype, "chart", void 0);
    ChartsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-charts',
            template: __webpack_require__(/*! ./charts.component.html */ "./src/app/Shared/charts/charts.component.html"),
            styles: [__webpack_require__(/*! ./charts.component.css */ "./src/app/Shared/charts/charts.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChartsComponent);
    return ChartsComponent;
}());



/***/ }),

/***/ "./src/app/Shared/doughnut-chart/doughnut-chart.component.css":
/*!********************************************************************!*\
  !*** ./src/app/Shared/doughnut-chart/doughnut-chart.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1NoYXJlZC9kb3VnaG51dC1jaGFydC9kb3VnaG51dC1jaGFydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Shared/doughnut-chart/doughnut-chart.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/Shared/doughnut-chart/doughnut-chart.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<apx-chart\r\n      [series]=\"chartOptions.series\"\r\n      [chart]=\"chartOptions.chart\"\r\n      [plotOptions]=\"chartOptions.plotOptions\"\r\n      [labels]=\"chartOptions.labels\"\r\n      [legend]=\"chartOptions.legend\"\r\n      [colors]=\"chartOptions.colors\"\r\n      [responsive]=\"chartOptions.responsive\"\r\n></apx-chart>\r\n\r\n<!-- <button (click)=\"test()\">test change</button> -->"

/***/ }),

/***/ "./src/app/Shared/doughnut-chart/doughnut-chart.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/Shared/doughnut-chart/doughnut-chart.component.ts ***!
  \*******************************************************************/
/*! exports provided: DoughnutChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoughnutChartComponent", function() { return DoughnutChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-apexcharts */ "./node_modules/ng-apexcharts/fesm5/ng-apexcharts.js");



var DoughnutChartComponent = /** @class */ (function () {
    function DoughnutChartComponent() {
        this.data = [];
        this.chartOptions = {
            series: [76, 67, 61, 90],
            chart: {
                // height: 500,
                height: '325',
                width: '100%',
                type: "radialBar"
            },
            plotOptions: {
                radialBar: {
                    offsetY: 0,
                    startAngle: 0,
                    endAngle: 270,
                    hollow: {
                        margin: 5,
                        size: "30%",
                        background: "transparent",
                        image: undefined
                    },
                    dataLabels: {
                        name: {
                            show: false
                        },
                        value: {
                            show: false
                        }
                    }
                }
            },
            // colors: ["#1ab7ea", "#0084ff", "#39539E", "#0077B5"],
            labels: ["Vimeo", "Messenger", "Facebook", "LinkedIn"],
            legend: {
                show: true,
                floating: false,
                fontSize: "11px",
                position: "bottom",
                offsetX: 0,
                offsetY: 0,
                labels: {
                    useSeriesColors: true
                },
                formatter: function (seriesName, opts) {
                    return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
                },
                itemMargin: {
                    horizontal: 3
                }
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        legend: {
                            show: false
                        }
                    }
                }
            ]
        };
    }
    DoughnutChartComponent.prototype.ngOnInit = function () {
    };
    // test(){
    //   this.chartOptions.labels=['er','ee','e','e']
    // }
    DoughnutChartComponent.prototype.ngOnChanges = function (changes) {
        // console.log(changes['data']);
        if (changes['data']) {
            // console.log('data change');
            this.chartOptions.series = changes['data'].currentValue;
        }
        if (changes['labels']) {
            // console.log('labels change');
            // console.log(changes['labels'].currentValue);
            this.chartOptions.labels = changes['labels'].currentValue;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DoughnutChartComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], DoughnutChartComponent.prototype, "labels", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("chart"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__["ChartComponent"])
    ], DoughnutChartComponent.prototype, "chart", void 0);
    DoughnutChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-doughnut-chart',
            template: __webpack_require__(/*! ./doughnut-chart.component.html */ "./src/app/Shared/doughnut-chart/doughnut-chart.component.html"),
            styles: [__webpack_require__(/*! ./doughnut-chart.component.css */ "./src/app/Shared/doughnut-chart/doughnut-chart.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DoughnutChartComponent);
    return DoughnutChartComponent;
}());



/***/ }),

/***/ "./src/app/Shared/form/errors/errors.component.css":
/*!*********************************************************!*\
  !*** ./src/app/Shared/form/errors/errors.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error{\r\n    color: red;\r\n    font-size: 12px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvU2hhcmVkL2Zvcm0vZXJyb3JzL2Vycm9ycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9TaGFyZWQvZm9ybS9lcnJvcnMvZXJyb3JzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3J7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/Shared/form/errors/errors.component.html":
/*!**********************************************************!*\
  !*** ./src/app/Shared/form/errors/errors.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let i of errors_array\">\r\n    <span class=\"error\" *ngIf=\"date_error\">{{field_name}} should be valid .</span>\r\n    <span class=\"error\" *ngIf=\"i == 'required'\">{{field_name}} is required.</span>\r\n    <span class=\"error\" *ngIf=\"i == 'email'\">Email must be valid.</span>\r\n    <span class=\"error\" *ngIf=\"i == 'max'\">{{field_name}} is exceeding the limit.</span>\r\n    <span class=\"error\" *ngIf=\"i == 'maxlength'\">{{field_name}} is exceeding the limit {{errors['maxlength']['requiredLength']}}.</span>\r\n  \r\n    <span class=\"error\" *ngIf=\"i == 'pattern'\">\r\n        <span class=\"error\" *ngIf=\"alphabets_only_error\">{{field_name}} should contain alphabets only.</span>\r\n        <span class=\"error\" *ngIf=\"email_error\">{{field_name}} should be valid.</span>\r\n        <span class=\"error\" *ngIf=\"contact_number_error\">{{field_name}} should be valid.</span>\r\n        <span class=\"error\" *ngIf=\"postive_number_error\">{{field_name}} should be valid.</span>\r\n        <span class=\"error\" *ngIf=\"branch_contact_number_error\">{{field_name}} should be valid.</span>\r\n        <span class=\"error\" *ngIf=\"decimal_numbers_error\">{{field_name}} should be valid.</span>\r\n        <span class=\"error\" *ngIf=\"name_error\">{{field_name}} should not contain numbers.</span>\r\n        <span class=\"error\" *ngIf=\"password_error\">{{field_name}} should be at least 8 characters long and should contain one number,one character and one special character.</span>\r\n\r\n    </span>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/Shared/form/errors/errors.component.ts":
/*!********************************************************!*\
  !*** ./src/app/Shared/form/errors/errors.component.ts ***!
  \********************************************************/
/*! exports provided: ErrorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorsComponent", function() { return ErrorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _validation_patterns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../validation_patterns */ "./src/app/Shared/validation_patterns.ts");



var ErrorsComponent = /** @class */ (function () {
    function ErrorsComponent() {
        this.alphabets_only_error = false;
        this.email_error = false;
        this.contact_number_error = false;
        this.postive_number_error = false;
        this.branch_contact_number_error = false;
        this.decimal_numbers_error = false;
        this.date_error = false;
        this.name_error = false;
        this.password_error = false;
        this.maxlength = false;
    }
    ErrorsComponent.prototype.ngOnInit = function () {
        this.errors_array = Object.keys(this.errors);
    };
    ErrorsComponent.prototype.ngOnChanges = function (changes) {
        this.errors_array = Object.keys(this.errors);
        console.log(this.errors_array);
        if (this.errors_array[0] == 'pattern') {
            if (this.errors[this.errors_array[0]]['requiredPattern'] == _validation_patterns__WEBPACK_IMPORTED_MODULE_2__["validation_patterns"].alphabets)
                this.alphabets_only_error = true;
            else if (this.errors[this.errors_array[0]]['requiredPattern'] == _validation_patterns__WEBPACK_IMPORTED_MODULE_2__["validation_patterns"].email_regex)
                this.email_error = true;
            else if (this.errors[this.errors_array[0]]['requiredPattern'] == _validation_patterns__WEBPACK_IMPORTED_MODULE_2__["validation_patterns"].contact_number)
                this.contact_number_error = true;
            else if (this.errors[this.errors_array[0]]['requiredPattern'] == _validation_patterns__WEBPACK_IMPORTED_MODULE_2__["validation_patterns"].postive_numbers)
                this.postive_number_error = true;
            else if (this.errors[this.errors_array[0]]['requiredPattern'] == _validation_patterns__WEBPACK_IMPORTED_MODULE_2__["validation_patterns"].branch_contact_number)
                this.branch_contact_number_error = true;
            else if (this.errors[this.errors_array[0]]['requiredPattern'] == _validation_patterns__WEBPACK_IMPORTED_MODULE_2__["validation_patterns"].decimal_numbers)
                this.decimal_numbers_error = true;
            else if (this.errors[this.errors_array[0]]['requiredPattern'] == _validation_patterns__WEBPACK_IMPORTED_MODULE_2__["validation_patterns"].nameRegex)
                this.name_error = true;
            else if (this.errors[this.errors_array[0]]['requiredPattern'] == _validation_patterns__WEBPACK_IMPORTED_MODULE_2__["validation_patterns"].password_regex)
                this.password_error = true;
        }
        else if (this.errors_array[0] == "invalid_date") {
            this.date_error = true;
        }
        else if (this.errors_array[0] == "maxlength") {
            this.maxlength = true;
        }
        // console.log(this.errors[this.errors_array[0]]['requiredPattern'])
        // console.log(this.errors[this.errors_array[0]])
        // console.log(this.decimal_numbers_error);
        console.log(this.errors);
        //  console.log(this.errors_array)
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ErrorsComponent.prototype, "errors", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ErrorsComponent.prototype, "field_name", void 0);
    ErrorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-errors',
            template: __webpack_require__(/*! ./errors.component.html */ "./src/app/Shared/form/errors/errors.component.html"),
            styles: [__webpack_require__(/*! ./errors.component.css */ "./src/app/Shared/form/errors/errors.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ErrorsComponent);
    return ErrorsComponent;
}());



/***/ }),

/***/ "./src/app/Shared/form/form/form.component.css":
/*!*****************************************************!*\
  !*** ./src/app/Shared/form/form/form.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\r\n    margin-left: 17px;\r\n}\r\n\r\n.required{\r\n    color: red;\r\n    font-size: 15px;\r\n}\r\n\r\n/* input.ng-invalid{\r\n    border-color: red;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvU2hhcmVkL2Zvcm0vZm9ybS9mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZUFBZTtBQUNuQjs7QUFFQTs7R0FFRyIsImZpbGUiOiJzcmMvYXBwL1NoYXJlZC9mb3JtL2Zvcm0vZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE3cHg7XHJcbn1cclxuXHJcbi5yZXF1aXJlZHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi8qIGlucHV0Lm5nLWludmFsaWR7XHJcbiAgICBib3JkZXItY29sb3I6IHJlZDtcclxufSAqLyJdfQ== */"

/***/ }),

/***/ "./src/app/Shared/form/form/form.component.html":
/*!******************************************************!*\
  !*** ./src/app/Shared/form/form/form.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"Form\" #f=\"ngForm\" (ngSubmit)=\"f.valid && submit()\" novalidate>\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n      <div class=\"{{form.FormbootstrapGridClass}}\">\r\n        <div *ngFor='let rows of row ;let i = index' class=\"row\">\r\n          <div *ngFor='let index of rows ;let i = index' class=\"{{fields[index].bootstrapGridClass}}\">\r\n\r\n            <div class=\"form-group\" *ngIf=\"fields[index].type == 'checkbox'\">\r\n              <input *ngIf=\"fields[index].name\" value=\"{{fields[index].value}}\" [checked]=\"fields[index].value\"\r\n                formControlName=\"{{fields[index].name}}\" type=\"checkbox\">\r\n              <input *ngIf=\"!fields[index].name\" type=\"checkbox\">\r\n              <label style=\"margin-left: 10px;\">{{fields[index].label}} <span *ngIf=\"fields[index].required\"\r\n                  class=\"required\">*</span></label>\r\n            </div>\r\n\r\n            <div class=\"form-group\" *ngIf=\"fields[index].type == 'radio'\">\r\n              <input *ngIf=\"fields[index].name\" type=\"radio\" formControlName=\"gender\" value=\"{{fields[index].value}}\">\r\n              <input *ngIf=\"!fields[index].name\" type=\"radio\" value=\"{{fields[index].value}}\" checked=\"checked\">\r\n              <label>{{fields[index].label}}<span *ngIf=\"fields[index].required\" class=\"required\">*</span></label>\r\n            </div>\r\n\r\n            <div class=\"form-group\" *ngIf=\"fields[index].type == 'select'\">\r\n              <label>{{fields[index].label}}<span *ngIf=\"fields[index].required\" class=\"required\">*</span></label>\r\n              <select class=\"form-control\" formControlName=\"{{fields[index].name}}\" placeholder=\"Select item\">\r\n                <option *ngFor=\"let option of fields[index].options\" [value]=\"option.id\">{{option.name}}</option>\r\n              </select>\r\n              <div *ngIf=\"displayValidationsErrors && Form.controls[fields[index].name].invalid\">\r\n                <app-errors [field_name]=\"fields[index].label\" [errors]='Form.controls[fields[index].name].errors'>\r\n                </app-errors>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\" *ngIf=\"fields[index].type == 'select_name'\">\r\n              <label>{{fields[index].label}}<span *ngIf=\"fields[index].required\" class=\"required\">*</span></label>\r\n              <select *ngIf=\"fields[index].name\" class=\"form-control\" data-live-search=\"true\" data-style=\"btn-select\"\r\n                data-size=\"5\" formControlName=\"{{fields[index].name}}\">\r\n                <option selected disabled value=\"\">Select {{fields[index].label}}</option>\r\n                <option *ngFor=\"let option of fields[index].options\" value=\"{{option.id}}\">{{option.first_name}}\r\n                  {{option.last_name}}</option>\r\n              </select>\r\n              <div *ngIf=\"displayValidationsErrors && Form.controls[fields[index].name].invalid\">\r\n                <app-errors [field_name]=\"fields[index].label\" [errors]='Form.controls[fields[index].name].errors'>\r\n                </app-errors>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- <div class=\"form-group\" *ngIf=\"fields[index].type == 'data'\">\r\n              <label>{{fields[index].label}}<span *ngIf=\"fields[index].required\" class=\"required\">*</span></label>\r\n              <select *ngIf=\"fields[index].name\" class=\"form-control\" data-style=\"btn-select\" data-live-search=\"true\"\r\n                data-size=\"5\" data-live-search=\"fields[index].searchable\" formControlName=\"{{fields[index].name}}\">\r\n                <option selected disabled value=\"\">Select {{fields[index].label}}</option>\r\n                <option *ngFor=\"let option of fields[index].options\" value=\"{{option.id}}\">{{option.name}}</option>\r\n              </select>\r\n              <div *ngIf=\"displayValidationsErrors && Form.controls[fields[index].name].invalid\">\r\n                <app-errors [field_name]=\"fields[index].label\" [errors]='Form.controls[fields[index].name].errors'>\r\n                </app-errors>\r\n              </div>\r\n            </div> -->\r\n\r\n            <!-- <div class=\"form-group\" *ngIf=\"fields[index].type == 'multiple'\">\r\n              <label>{{fields[index].label}}<span *ngIf=\"fields[index].required\" class=\"required\">*</span></label>\r\n              <select *ngIf=\"fields[index].name\" multiple class=\"form-control\" data-style=\"btn-select\" data-size=\"3\"\r\n                formControlName=\"{{fields[index].name}}\">\r\n                <option selected disabled value=\"\">Select {{fields[index].label}}</option>\r\n                <option *ngFor=\"let option of fields[index].options\" value=\"{{option.value}}\">{{option.label}}</option>\r\n              </select>\r\n              <div *ngIf=\"displayValidationsErrors && Form.controls[fields[index].name].invalid\">\r\n                <app-errors [field_name]=\"fields[index].label\" [errors]='Form.controls[fields[index].name].errors'>\r\n                </app-errors>\r\n              </div>\r\n            </div> -->\r\n\r\n            <div class=\"form-group\" *ngIf=\"fields[index].type == 'ngselect'\">\r\n              <label>{{fields[index].label}}<span *ngIf=\"fields[index].required\" class=\"required\">*</span></label>\r\n              <ng-select formControlName=\"{{fields[index].name}}\" placeholder=\"Select item\">\r\n                <ng-option *ngFor=\"let option of fields[index].options\" [value]=\"option.id\">{{option.name}}</ng-option>\r\n              </ng-select>\r\n              <div *ngIf=\"displayValidationsErrors && Form.controls[fields[index].name].invalid\">\r\n                <app-errors [field_name]=\"fields[index].label\" [errors]='Form.controls[fields[index].name].errors'>\r\n                </app-errors>\r\n              </div>\r\n            </div>\r\n\r\n            \r\n\r\n\r\n\r\n            <div class=\"form-group\" *ngIf=\"fields[index].type == 'ngselect2'\">\r\n              <label>{{fields[index].label}}<span *ngIf=\"fields[index].required\" class=\"required\">*</span></label>\r\n              <ng-select  formControlName=\"{{fields[index].name}}\" placeholder=\"Select item\">\r\n                <ng-option *ngFor=\"let option of fields[index].options\" [value]=\"option.name\">{{option.name}}</ng-option>\r\n              </ng-select>\r\n              <div *ngIf=\"displayValidationsErrors && Form.controls[fields[index].name].invalid\">\r\n                <app-errors [field_name]=\"fields[index].label\" [errors]='Form.controls[fields[index].name].errors'>\r\n                </app-errors>\r\n              </div>\r\n            </div>\r\n           \r\n\r\n           \r\n\r\n\r\n           \r\n\r\n            <div class=\"form-group\" *ngIf=\"fields[index].type == 'selectCAT'\">\r\n              <label>{{fields[index].label}}<span *ngIf=\"fields[index].required\" class=\"required\">*</span></label>\r\n              <select  class=\"form-control\" change=\"Categorymethod($event.target.value)\" formControlName=\"{{fields[index].name}}\" placeholder=\"Select item\" >\r\n                <option *ngFor=\"let option of fields[index].options\" [value]=\"option.name\">{{option.name}}</option>\r\n              </select>\r\n              <div *ngIf=\"displayValidationsErrors && Form.controls[fields[index].name].invalid\">\r\n                <app-errors [field_name]=\"fields[index].label\" [errors]='Form.controls[fields[index].name].errors'>\r\n                </app-errors>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- <div id=\"cat\" class=\"form-group\" *ngIf=\"fields[index].type == 'ngselectcat'\">\r\n              <label>{{fields[index].label}}<span *ngIf=\"fields[index].required\" class=\"required\">*</span></label>\r\n            \r\n              <ng-select  formControlName=\"{{fields[index].name}}\"  placeholder=\"Select Category\" [(ngModel)]=\"data\"  >\r\n                <ng-option *ngFor=\"let option of fields[index].options\" [value]=\"option.name\" >{{option.name}}</ng-option>\r\n              </ng-select>\r\n              <div *ngIf=\"displayValidationsErrors && Form.controls[fields[index].name].invalid\">\r\n                <app-errors [field_name]=\"fields[index].label\" [errors]='Form.controls[fields[index].name].errors'>\r\n                </app-errors>\r\n              </div>\r\n            </div> -->\r\n\r\n            <!-- <div  class=\"form-group\" *ngIf=\"fields[index].type == 'ngselectcat'\">\r\n              <label>{{fields[index].label}}<span *ngIf=\"fields[index].required\" class=\"required\">*</span></label>\r\n            \r\n              <select  class=\"form-control\" (change)=\"Categorymethod($event)\"  formControlName=\"{{fields[index].name}}\" placeholder=\"Select Category\" [(ngModel)]=\"data\" name=\"data\"  >\r\n                <option *ngFor=\"let option of fields[index].options\" [value]=\"option.name\" >{{option.name}}</option>\r\n              </select>\r\n              <div *ngIf=\"displayValidationsErrors && Form.controls[fields[index].name].invalid\">\r\n                <app-errors [field_name]=\"fields[index].label\" [errors]='Form.controls[fields[index].name].errors'>\r\n                </app-errors>\r\n              </div>\r\n            </div>\r\n -->\r\n\r\n            <div  class=\"form-group\" *ngIf=\"fields[index].type == 'ngselectcat'\">\r\n              <label>{{fields[index].label}}<span *ngIf=\"fields[index].required\" class=\"required\">*</span></label>\r\n            \r\n              <select  class=\"form-control\" (change)=\"Categorymethod($event)\"  formControlName=\"{{fields[index].name}}\" placeholder=\"Select Category\"  >\r\n                <option *ngFor=\"let option of fields[index].options\" [value]=\"option.name\" >{{option.name}}</option>\r\n              </select>\r\n              <div *ngIf=\"displayValidationsErrors && Form.controls[fields[index].name].invalid\">\r\n                <app-errors [field_name]=\"fields[index].label\" [errors]='Form.controls[fields[index].name].errors'>\r\n                </app-errors>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\" *ngIf=\"fields[index].type == 'ngselectSub'\">\r\n              <label>{{fields[index].label}}<span *ngIf=\"fields[index].required\" class=\"required\">*</span></label>\r\n              <select class=\"form-control\" formControlName=\"{{fields[index].name}}\" placeholder=\"Select item\">\r\n                <option *ngFor=\"let option of filterSubById()\" [value]=\"option.Name\">{{option.Name}}</option>\r\n              </select>\r\n              <div *ngIf=\"displayValidationsErrors && Form.controls[fields[index].name].invalid\">\r\n                <app-errors [field_name]=\"fields[index].label\" [errors]='Form.controls[fields[index].name].errors'>\r\n                </app-errors>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\" *ngIf=\"fields[index].type == 'ngselectSub2'\">\r\n              <label>{{fields[index].label}}<span *ngIf=\"fields[index].required\" class=\"required\">*</span></label>\r\n              <select class=\"form-control\" formControlName=\"{{fields[index].name}}\" placeholder=\"Select item\">\r\n                <option *ngFor=\"let option of getSub(fields[index].options)\" [value]=\"option.Name\">{{option.Name}}</option>\r\n              </select>\r\n              <div *ngIf=\"displayValidationsErrors && Form.controls[fields[index].name].invalid\">\r\n                <app-errors [field_name]=\"fields[index].label\" [errors]='Form.controls[fields[index].name].errors'>\r\n                </app-errors>\r\n              </div>\r\n            </div>\r\n<!-- \r\n            <div class=\"form-group\" *ngIf=\"fields[index].type == 'ngselectSub'\">\r\n              <label>{{fields[index].label}}<span *ngIf=\"fields[index].required\" class=\"required\">*</span></label>\r\n              <ng-select  formControlName=\"{{fields[index].name}}\" placeholder=\"Select item\">\r\n                <ng-option *ngFor=\"let option of filterSubById(data)\" [value]=\"option.Name\">{{option.Name}}</ng-option>\r\n              </ng-select>\r\n              <div *ngIf=\"displayValidationsErrors && Form.controls[fields[index].name].invalid\">\r\n                <app-errors [field_name]=\"fields[index].label\" [errors]='Form.controls[fields[index].name].errors'>\r\n                </app-errors>\r\n              </div>\r\n            </div> -->\r\n\r\n\r\n\r\n            <div class=\"form-group\" *ngIf=\"fields[index].type == 'ngselectname'\">\r\n              <label>{{fields[index].label}}<span *ngIf=\"fields[index].required\" class=\"required\">*</span></label>\r\n              <ng-select formControlName=\"{{fields[index].name}}\" placeholder=\"Select item\">\r\n                <ng-option *ngFor=\"let option of fields[index].options\" [value]=\"option.id\">{{option.first_name}}\r\n                  {{option.last_name}} </ng-option>\r\n              </ng-select>\r\n              <app-errors [field_name]=\"fields[index].label\" [errors]='Form.controls[fields[index].name].errors'>\r\n              </app-errors>\r\n            </div>\r\n\r\n\r\n\r\n\r\n\r\n            <!-- \r\n            <div class=\"form-group\" *ngIf=\"fields[index].type == 'franchise_multiple'\">\r\n              <label>{{fields[index].label}}<span *ngIf=\"fields[index].required\" class=\"required\">*</span></label>\r\n              <select *ngIf=\"fields[index].name\" multiple class=\"form-control selectpicker\" data-style=\"btn-select\"\r\n                data-size=\"3\" data-live-search=\"true\" formControlName=\"{{fields[index].name}}\">\r\n                <option selected disabled value=\"\">Select {{fields[index].label}}</option>\r\n                <option *ngFor=\"let option of fields[index].options\" value=\"{{option.franchise.id}}\">\r\n                  {{option.franchise.franchise_name}}</option>\r\n              </select>\r\n              <div *ngIf=\"displayValidationsErrors && Form.controls[fields[index].name].invalid\">\r\n                <app-errors [field_name]=\"fields[index].label\" [errors]='Form.controls[fields[index].name].errors'>\r\n                </app-errors>\r\n              </div>\r\n            </div> -->\r\n\r\n            <div class=\"form-group\" *ngIf=\"fields[index].type == 'text'\">\r\n              <label>{{fields[index].label}}<span *ngIf=\"fields[index].required\" class=\"required\">*</span></label>\r\n              <input *ngIf=\"fields[index].name\" class=\"form-control\" formControlName=\"{{fields[index].name}}\"\r\n                type=\"text\" nullValue>\r\n              <div\r\n                *ngIf=\"(Form.controls[fields[index].name].dirty || displayValidationsErrors) && Form.controls[fields[index].name].invalid\">\r\n                <app-errors [field_name]=\"fields[index].label\" [errors]='Form.controls[fields[index].name].errors'>\r\n                </app-errors>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\" *ngIf=\"fields[index].type == 'phone_number'\">\r\n              <label>{{fields[index].label}}<span *ngIf=\"fields[index].required\" class=\"required\">*</span></label>\r\n              <input style=\"width: 22%;float: left;\" disabled class=\"form-control\" placeholder=\"+92\" type=\"text\">\r\n              <input style=\"float: right; width: 78%;\" *ngIf=\"fields[index].name\" class=\"form-control\"\r\n                formControlName=\"{{fields[index].name}}\" type=\"text\">\r\n              <br>\r\n              <br>\r\n              <div\r\n                *ngIf=\"(Form.controls[fields[index].name].dirty || displayValidationsErrors) && Form.controls[fields[index].name].invalid\">\r\n                <app-errors [field_name]=\"fields[index].label\" [errors]='Form.controls[fields[index].name].errors'>\r\n                </app-errors>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\" *ngIf=\"fields[index].type == 'number'\">\r\n              <label>{{fields[index].label}}<span *ngIf=\"fields[index].required\" class=\"required\">*</span></label>\r\n              <input *ngIf=\"fields[index].name\" class=\"form-control\" formControlName=\"{{fields[index].name}}\"\r\n                type=\"number\">\r\n              <div\r\n                *ngIf=\"(Form.controls[fields[index].name].dirty || displayValidationsErrors) && Form.controls[fields[index].name].invalid\">\r\n                <app-errors [field_name]=\"fields[index].label\" [errors]='Form.controls[fields[index].name].errors'>\r\n                </app-errors>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\" *ngIf=\"fields[index].type == 'date'\">\r\n              <label>{{fields[index].label}}<span *ngIf=\"fields[index].required\" class=\"required\">*</span></label>\r\n              <input *ngIf=\"fields[index].name\" class=\"form-control\" formControlName=\"{{fields[index].name}}\"\r\n                type=\"date\">\r\n              <div\r\n                *ngIf=\"(Form.controls[fields[index].name].dirty || displayValidationsErrors) && Form.controls[fields[index].name].invalid\">\r\n                <app-errors [field_name]=\"fields[index].label\" [errors]='Form.controls[fields[index].name].errors'>\r\n                </app-errors>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\" *ngIf=\"fields[index].type == 'time'\">\r\n              <label>{{fields[index].label}}<span *ngIf=\"fields[index].required\" class=\"required\">*</span></label>\r\n              <input *ngIf=\"fields[index].name\"  class=\"form-control\" formControlName=\"{{fields[index].name}}\"\r\n                type=\"time\">\r\n              <div\r\n                *ngIf=\"(Form.controls[fields[index].name].dirty || displayValidationsErrors) && Form.controls[fields[index].name].invalid\">\r\n                <app-errors [field_name]=\"fields[index].label\" [errors]='Form.controls[fields[index].name].errors'>\r\n                </app-errors>\r\n              </div>\r\n            </div>\r\n\r\n            <div style=\"visibility: hidden\" class=\"form-group\" *ngIf=\"fields[index].type == 'space'\">\r\n              <label>{{fields[index].label}}<span *ngIf=\"fields[index].required\" class=\"required\">*</span></label>\r\n              <input type=\"text\" class=\"form-control\">\r\n            </div>\r\n\r\n            <div class=\"form-group\" *ngIf=\"fields[index].type == 'attribute'\">\r\n              <label>{{fields[index].label}}\r\n\r\n                <button type=\"button\" style=\"color: white;margin-left: 6px;\" class=\"btn btn-sm btn-success\"\r\n                  (click)=\"addAttribute()\"><i class=\"icofont-ui-add\"></i></button>\r\n                  <button type=\"button\" style=\"color: white;margin-left: 6px;\" class=\"btn btn-sm btn-danger\"\r\n                  (click)=\"minusAttribute()\"><i style=\"margin-top: -2px;\" class=\"fa fa-minus\"></i></button>\r\n\r\n              </label>\r\n              <div formArrayName=\"product_attributes\">\r\n                <div *ngFor=\"let attribute of Form.controls.product_attributes.controls; let i = index\"\r\n                  [formGroupName]=\"i\">\r\n                  <div style=\"margin-bottom: 5px;\" class=\"row\">\r\n                    <div class=\"col-lg-6\">\r\n                      <input placeholder=\"Name\" formControlName=\"name\" class=\"form-control\" />\r\n                    </div>\r\n                    <div class=\"col-lg-6\">\r\n                      <input placeholder=\"Value\" formControlName=\"value\" class=\"form-control\" />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\" *ngIf=\"fields[index].type == 'textarea'\">\r\n              <label>{{fields[index].label}}<span *ngIf=\"fields[index].required\" class=\"required\">*</span></label>\r\n              <textarea *ngIf=\"fields[index].name\" class=\"form-control\" formControlName=\"{{fields[index].name}}\"\r\n                rows=\"4\" cols=\"50\" nullValue> </textarea>\r\n              <div\r\n                *ngIf=\"(Form.controls[fields[index].name].dirty || displayValidationsErrors) && Form.controls[fields[index].name].invalid\">\r\n                <app-errors [field_name]=\"fields[index].label\" [errors]='Form.controls[fields[index].name].errors'>\r\n                </app-errors>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- <button [disabled]=\"submit_clicked\" *ngIf=\"fields[index].type == 'submit'\" class=\"btn btn-primary  btn-lg\"\r\n              type=\"submit\" (click)=\"displayValidations()\">{{fields[index].label}}</button> -->\r\n\r\n            <!-- <button style=\"margin-left: -50px;\" *ngIf=\"fields[index].type == 'edit'\" class=\"btn btn-primary pull-right\" type=\"submit\" (click)=\"displayValidations()\">{{fields[index].label}}</button> -->\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"{{form.ImagebootstrapGridClass}}\" *ngIf=\"form.image\">\r\n        <label style=\"color:transparent\">img</label>\r\n        <img id=\"img\" [src]=\"form.image_url ? form.image_url : '../../../../assets/images/no_image.png'\"\r\n          class=\" img-bordered  \"\r\n          [ngStyle]=\"{'width': form.img_width ? form.img_width : '200px','height': form.img_height ? form.img_height : '200px'  }\" />\r\n        <input (change)=\"onImageChanged($event)\" accept=\"image/*\" id=\"fileInput\" style=\"display: none;overflow:hidden\"\r\n          type=\"file\">\r\n        <button class=\"btn btn-primary\" style=\"margin-left: 70px; margin-top: 5px;\" type=\"button\"\r\n          (click)=\"chooseImage();\">Upload Image</button>\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"form.submit\" class=\"d-block text-right card-footer\">\r\n    <button [disabled]=\"submit_clicked\" class=\"btn btn-success pull-right \" style=\"margin-bottom: 15px;\" type=\"submit\"\r\n      (click)=\"displayValidations()\">{{form.submit}}</button>\r\n  </div>\r\n  <!-- <div *ngIf=\"form.edit_submit\" class=\"row\">\r\n    <button class=\"btn btn-primary pull-right\" type=\"submit\"\r\n      (click)=\"displayValidations()\">{{form.edit_submit}}</button>\r\n  </div> -->\r\n</form>"

/***/ }),

/***/ "./src/app/Shared/form/form/form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/Shared/form/form/form.component.ts ***!
  \****************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Jeptag_admin_Services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../Jeptag-admin/Services/product.service */ "./src/app/Jeptag-admin/Services/product.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var FormComponent = /** @class */ (function () {
    function FormComponent(productService, fb) {
        this.productService = productService;
        this.fb = fb;
        this.formValues = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.fields = [];
        this.displayValidationsErrors = false;
        this.map_values = {};
        this.form_values = {};
        this.image_value = {};
        this.subCategories = [];
        this.categories = [];
        this.row = [];
    }
    FormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subCategories = this.option;
        this.fields = this.form['form_fields'];
        this.Form = this.fb.group({});
        this.addControls();
        console.log("mainnnnnn:", this.option);
        var subCategory = this.productService.getSubCategory();
        //let categories = this.productService.getCategories();
        subCategory.subscribe(function (result) {
            _this.subCategories = result;
        });
        //this.mainCategory=
    };
    FormComponent.prototype.ngOnDestroy = function () {
        clearTimeout(this.timeout);
    };
    FormComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes['form']) {
            this.timeout = setInterval(function () {
                if (_this.form['form_fields'].length > 0) {
                    var form = _this.form;
                    _this.form = form;
                    _this.fields = _this.form['form_fields'];
                    _this.addControls();
                    clearTimeout(_this.timeout);
                }
            }, 100);
        }
        if (changes['clear_form']) {
            if (changes['clear_form'].currentValue == true) {
                this.FormGroupDirective.resetForm();
                this.displayValidationsErrors = false;
                if (document.getElementById("img") != null) {
                    document.getElementById("img").src = '../../../../assets/images/no_image.png';
                    delete this.form_values['image'];
                    this.image_value = {};
                }
            }
            // setTimeout(function () {
            //   $('.selectpicker').selectpicker('refresh');
            // }, 200);
        }
    };
    FormComponent.prototype.addControls = function () {
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
                    console.log("this.fields[i].name" + this.fields[i].name);
                    // if (this.fields[i].name=="category_id") {
                    //   console.log("this.fields[i].name"+this.fields[i].name)
                    //   this.Form.addControl(this.fields[i].name, new FormControl(this.fields[i].value['name'], this.fields[i].validations));
                    // }
                    // else{
                    this.Form.addControl(this.fields[i].name, new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.fields[i].value, this.fields[i].validations));
                    // }
                }
                else
                    this.Form.addControl(this.fields[i].name, new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', this.fields[i].validations));
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
    };
    FormComponent.prototype.addAttribute = function () {
        var arr = this.Form.get('product_attributes');
        var attribute = this.fb.group({
            name: '',
            value: ''
        });
        arr.push(attribute);
    };
    FormComponent.prototype.minusAttribute = function () {
        var arr = this.Form.get('product_attributes');
        arr.removeAt(0);
    };
    FormComponent.prototype.submit = function () {
        this.form_values = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.Form.value, this.map_values, this.image_value);
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
    };
    FormComponent.prototype.onImageChanged = function (event) {
        var selectedFile;
        selectedFile = event.target.files[0];
        this.image_value['image'] = selectedFile;
        this.readImageURL(event.target);
    };
    FormComponent.prototype.readImageURL = function (input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#img').attr('src', e.target['result']);
            };
            reader.readAsDataURL(input.files[0]);
        }
    };
    FormComponent.prototype.displayValidations = function () {
        if (this.Form.valid == false) {
            this.displayValidationsErrors = true;
        }
    };
    FormComponent.prototype.chooseImage = function () {
        document.getElementById("fileInput").click();
    };
    FormComponent.prototype.filterSubById = function () {
        //  console.log(" subcats",this.subCategories);
        var _this = this;
        return this.subCategories.filter(function (item) { return item.CategoryId === _this.Catid; });
        //  console.log("id of subcat"+id);
        //  return this.subCategories.filter(item => item.CategoryId === id);
        //  return this.Catid;
    };
    FormComponent.prototype.getSub = function (id) {
        //  console.log(" subcats",this.subCategories);
        if (this.Catid != null) {
            id = this.Catid;
        }
        return this.subCategories.filter(function (item) { return item.CategoryId === id; });
        //  console.log("id of subcat"+id);
        //  return this.subCategories.filter(item => item.CategoryId === id);
        //  return this.Catid;
    };
    FormComponent.prototype.selected = function (id) {
        console.log(" pressss cat id " + id);
    };
    FormComponent.prototype.Categorymethod = function (e) {
        this.Catid = e.target.value;
        console.log("hello " + e.target.value);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('attachments'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormComponent.prototype, "attachment", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormComponent.prototype, "form", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormComponent.prototype, "formValues", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"])
    ], FormComponent.prototype, "sendform", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], FormComponent.prototype, "submit_clicked", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], FormComponent.prototype, "edit_clicked", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], FormComponent.prototype, "clear_form", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], FormComponent.prototype, "option", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], FormComponent.prototype, "category", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], FormComponent.prototype, "subcategory", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"])
    ], FormComponent.prototype, "FormGroupDirective", void 0);
    FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/Shared/form/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.css */ "./src/app/Shared/form/form/form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Jeptag_admin_Services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/Shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/Shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-apexcharts */ "./node_modules/ng-apexcharts/fesm5/ng-apexcharts.js");
/* harmony import */ var _form_form_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form/form/form.component */ "./src/app/Shared/form/form/form.component.ts");
/* harmony import */ var _form_errors_errors_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form/errors/errors.component */ "./src/app/Shared/form/errors/errors.component.ts");
/* harmony import */ var _charts_charts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./charts/charts.component */ "./src/app/Shared/charts/charts.component.ts");
/* harmony import */ var _doughnut_chart_doughnut_chart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./doughnut-chart/doughnut-chart.component */ "./src/app/Shared/doughnut-chart/doughnut-chart.component.ts");
/* harmony import */ var _Pipes_removeUnderScore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Pipes/removeUnderScore */ "./src/app/Shared/Pipes/removeUnderScore.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/esm5/ng-select.js");





//Components




//Pipes


var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            entryComponents: [
            // ModalComponent,
            // OrderModalComponent
            ],
            declarations: [
                _form_form_form_component__WEBPACK_IMPORTED_MODULE_5__["FormComponent"],
                _form_errors_errors_component__WEBPACK_IMPORTED_MODULE_6__["ErrorsComponent"],
                _charts_charts_component__WEBPACK_IMPORTED_MODULE_7__["ChartsComponent"],
                _doughnut_chart_doughnut_chart_component__WEBPACK_IMPORTED_MODULE_8__["DoughnutChartComponent"],
                _Pipes_removeUnderScore__WEBPACK_IMPORTED_MODULE_9__["removeUnderScore"]
            ],
            exports: [
                _form_errors_errors_component__WEBPACK_IMPORTED_MODULE_6__["ErrorsComponent"],
                _form_form_form_component__WEBPACK_IMPORTED_MODULE_5__["FormComponent"],
                _charts_charts_component__WEBPACK_IMPORTED_MODULE_7__["ChartsComponent"],
                _doughnut_chart_doughnut_chart_component__WEBPACK_IMPORTED_MODULE_8__["DoughnutChartComponent"],
                _Pipes_removeUnderScore__WEBPACK_IMPORTED_MODULE_9__["removeUnderScore"]
            ],
            imports: [
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                ng_apexcharts__WEBPACK_IMPORTED_MODULE_4__["NgApexchartsModule"]
            ],
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/Shared/swalAlerts.ts":
/*!**************************************!*\
  !*** ./src/app/Shared/swalAlerts.ts ***!
  \**************************************/
/*! exports provided: SwalAlert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwalAlert", function() { return SwalAlert; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);


var SwalAlert = /** @class */ (function () {
    function SwalAlert() {
    }
    SwalAlert.testSwal = function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Hello world!');
    };
    SwalAlert.errorAlert = function (title, text) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            icon: 'error',
            title: title,
            text: text,
            width: '30%',
        });
    };
    SwalAlert.sucessAlert = function (title, text) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            icon: 'success',
            title: title,
            text: text,
            width: '30%',
        });
    };
    SwalAlert.getDeleteSwal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                            title: 'Are you sure?',
                            text: "You won't be able to revert this!",
                            icon: 'warning',
                            width: '30%',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Yes, delete it!'
                        }).then(function (result) {
                            if (result.value) {
                                resolve(true);
                            }
                            else
                                resolve(false);
                        });
                    })];
            });
        });
    };
    return SwalAlert;
}());



/***/ }),

/***/ "./src/app/Shared/validation_patterns.ts":
/*!***********************************************!*\
  !*** ./src/app/Shared/validation_patterns.ts ***!
  \***********************************************/
/*! exports provided: validation_patterns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validation_patterns", function() { return validation_patterns; });
var validation_patterns = {
    contact_number: /^3[0-9]{9}$/,
    email_regex: /^[a-zA-Z0-9._]+@[a-zA-Z0-9]+(\.[a-zA-Z]{2,4}){1,2}$/,
    cnic_regex: /^[0-9]{13}$/,
    greaterthan0: /^[1-9][0-9]*$/,
    postive_numbers: /^[0-9]*$/,
    alphabets: /^[a-zA-Z]*$/,
    password_regex: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*`'#?&./-])[A-Za-z\d$@$!%`'*#?&./-]{8,}$/,
    branch_contact_number: /^[0-9]{10,11}$/,
    decimal_numbers: /^\d*\.?\d*$/,
    nameRegex: /^[a-zA-Z`'/-]*$/
};


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Core_forget_password_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Core/forget-password/forget-password/forget-password.component */ "./src/app/Core/forget-password/forget-password/forget-password.component.ts");
/* harmony import */ var _Jeptag_admin_Stores_edit_store_edit_store_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Jeptag-admin/Stores/edit-store/edit-store.component */ "./src/app/Jeptag-admin/Stores/edit-store/edit-store.component.ts");
/* harmony import */ var _Jeptag_admin_UserManagment_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Jeptag-admin/UserManagment/edit-user/edit-user.component */ "./src/app/Jeptag-admin/UserManagment/edit-user/edit-user.component.ts");
/* harmony import */ var _Jeptag_admin_UserManagment_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Jeptag-admin/UserManagment/add-user/add-user.component */ "./src/app/Jeptag-admin/UserManagment/add-user/add-user.component.ts");
/* harmony import */ var _Jeptag_admin_UserManagment_users_users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Jeptag-admin/UserManagment/users/users.component */ "./src/app/Jeptag-admin/UserManagment/users/users.component.ts");
/* harmony import */ var _Core_confirm_password_confirm_password_confirm_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Core/confirm-password/confirm-password/confirm-password.component */ "./src/app/Core/confirm-password/confirm-password/confirm-password.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_sales_report_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Services/sales-report.resolver */ "./src/app/Services/sales-report.resolver.ts");
/* harmony import */ var _Jeptag_admin_Reports_sales_sales_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Jeptag-admin/Reports/sales/sales.component */ "./src/app/Jeptag-admin/Reports/sales/sales.component.ts");
/* harmony import */ var _Services_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Services/auth-guard */ "./src/app/Services/auth-guard.ts");
/* harmony import */ var _Core_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Core/dashboard/dashboard.component */ "./src/app/Core/dashboard/dashboard.component.ts");
/* harmony import */ var _Core_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Core/login/login.component */ "./src/app/Core/login/login.component.ts");
/* harmony import */ var _Core_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Core/page-not-found/page-not-found.component */ "./src/app/Core/page-not-found/page-not-found.component.ts");
/* harmony import */ var _Jeptag_admin_Products_product_listing_product_listing_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Jeptag-admin/Products/product-listing/product-listing.component */ "./src/app/Jeptag-admin/Products/product-listing/product-listing.component.ts");
/* harmony import */ var _Jeptag_admin_Stores_store_listing_store_listing_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Jeptag-admin/Stores/store-listing/store-listing.component */ "./src/app/Jeptag-admin/Stores/store-listing/store-listing.component.ts");
/* harmony import */ var _Jeptag_admin_Stores_add_store_add_store_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Jeptag-admin/Stores/add-store/add-store.component */ "./src/app/Jeptag-admin/Stores/add-store/add-store.component.ts");
/* harmony import */ var _Jeptag_admin_Products_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Jeptag-admin/Products/add-product/add-product.component */ "./src/app/Jeptag-admin/Products/add-product/add-product.component.ts");
/* harmony import */ var _Jeptag_admin_category_categories_categories_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Jeptag-admin/category/categories/categories.component */ "./src/app/Jeptag-admin/category/categories/categories.component.ts");
/* harmony import */ var _Jeptag_admin_category_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Jeptag-admin/category/add-category/add-category.component */ "./src/app/Jeptag-admin/category/add-category/add-category.component.ts");
/* harmony import */ var _Jeptag_admin_brand_brand_listing_brand_listing_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Jeptag-admin/brand/brand-listing/brand-listing.component */ "./src/app/Jeptag-admin/brand/brand-listing/brand-listing.component.ts");
/* harmony import */ var _Jeptag_admin_brand_add_brands_add_brands_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Jeptag-admin/brand/add-brands/add-brands.component */ "./src/app/Jeptag-admin/brand/add-brands/add-brands.component.ts");
/* harmony import */ var _Jeptag_admin_sub_category_sub_category_listing_sub_category_listing_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Jeptag-admin/sub-category/sub-category-listing/sub-category-listing.component */ "./src/app/Jeptag-admin/sub-category/sub-category-listing/sub-category-listing.component.ts");
/* harmony import */ var _Jeptag_admin_sub_category_add_subcat_add_subcat_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Jeptag-admin/sub-category/add-subcat/add-subcat.component */ "./src/app/Jeptag-admin/sub-category/add-subcat/add-subcat.component.ts");
/* harmony import */ var _Jeptag_admin_Products_edit_products_edit_products_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Jeptag-admin/Products/edit-products/edit-products.component */ "./src/app/Jeptag-admin/Products/edit-products/edit-products.component.ts");
/* harmony import */ var _Jeptag_admin_Tags_taglist_taglist_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Jeptag-admin/Tags/taglist/taglist.component */ "./src/app/Jeptag-admin/Tags/taglist/taglist.component.ts");
/* harmony import */ var _Jeptag_admin_Tags_add_tag_add_tag_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Jeptag-admin/Tags/add-tag/add-tag.component */ "./src/app/Jeptag-admin/Tags/add-tag/add-tag.component.ts");



// import { AddEventComponent } from './Jeptag-admin/Events/add-event/add-event.component';










// import { AddProductComponent } from './instamunch/product/add-product/add-product.component';


// import { AddJobComponent } from './Jeptag-admin/Jobs/add-job/add-job.component';













var routes = [
    { path: '', component: _Core_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"], pathMatch: 'full' },
    { path: 'forgetPassword', component: _Core_forget_password_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_1__["ForgetPasswordComponent"]
        // children: [
        //   { path: 'forgetPassword/Verification', component: VerificationComponent},
        //   {path: 'forgetPassword/Verification/confirmPassword', component: ConfirmPasswordComponent},
        // ]
    },
    // { path: 'Verification', component: VerificationComponent},
    { path: 'confirmPassword', component: _Core_confirm_password_confirm_password_confirm_password_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmPasswordComponent"] },
    {
        path: 'jeptag', component: _Core_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"], canActivate: [_Services_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuardService"]],
        children: [
            {
                path: '', component: _Jeptag_admin_Reports_sales_sales_component__WEBPACK_IMPORTED_MODULE_10__["SalesComponent"],
            },
            {
                path: 'user', component: _Jeptag_admin_UserManagment_users_users_component__WEBPACK_IMPORTED_MODULE_5__["UsersComponent"]
            },
            {
                path: 'user/add', component: _Jeptag_admin_UserManagment_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_4__["AddUserComponent"]
            },
            {
                path: 'user/edit/:id', component: _Jeptag_admin_UserManagment_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_3__["EditUserComponent"]
            },
            {
                path: 'user/stores/:id/:cname/:email', component: _Jeptag_admin_Stores_store_listing_store_listing_component__WEBPACK_IMPORTED_MODULE_16__["StoreListingComponent"]
            },
            {
                path: 'user/stores/add/:id/:cname/:email', component: _Jeptag_admin_Stores_add_store_add_store_component__WEBPACK_IMPORTED_MODULE_17__["AddStoreComponent"]
            },
            {
                path: 'products/edit/:id/:email', component: _Jeptag_admin_Products_edit_products_edit_products_component__WEBPACK_IMPORTED_MODULE_25__["EditProductsComponent"]
            },
            // {
            //   path: 'user/stores/products/:id', component: ProductListingComponent
            // },
            // {
            //   path: 'user/stores/products/add/:id', component: AddProductComponent
            // },
            //ustran routes
            {
                path: 'products', component: _Jeptag_admin_Products_product_listing_product_listing_component__WEBPACK_IMPORTED_MODULE_15__["ProductListingComponent"]
            },
            {
                path: 'products/add', component: _Jeptag_admin_Products_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_18__["AddProductComponent"]
            },
            {
                path: 'stores', component: _Jeptag_admin_Stores_store_listing_store_listing_component__WEBPACK_IMPORTED_MODULE_16__["StoreListingComponent"]
            },
            {
                path: 'stores/add', component: _Jeptag_admin_Stores_add_store_add_store_component__WEBPACK_IMPORTED_MODULE_17__["AddStoreComponent"]
            },
            {
                path: 'stores/edit/:id/:storeid/:cname/:email', component: _Jeptag_admin_Stores_edit_store_edit_store_component__WEBPACK_IMPORTED_MODULE_2__["EditStoreComponent"]
            },
            {
                path: 'stores/products/:storeid/:userid/:email', component: _Jeptag_admin_Products_product_listing_product_listing_component__WEBPACK_IMPORTED_MODULE_15__["ProductListingComponent"]
            },
            {
                path: 'stores/products/add/:storeid/:userid/:email', component: _Jeptag_admin_Products_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_18__["AddProductComponent"]
            },
            {
                path: 'categories', component: _Jeptag_admin_category_categories_categories_component__WEBPACK_IMPORTED_MODULE_19__["CategoriesComponent"]
            },
            {
                path: 'categories/add', component: _Jeptag_admin_category_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_20__["AddCategoryComponent"]
            },
            {
                path: 'subcategories', component: _Jeptag_admin_sub_category_sub_category_listing_sub_category_listing_component__WEBPACK_IMPORTED_MODULE_23__["SubCategoryListingComponent"]
            },
            {
                path: 'subcategories/add', component: _Jeptag_admin_sub_category_add_subcat_add_subcat_component__WEBPACK_IMPORTED_MODULE_24__["AddSubcatComponent"]
            },
            {
                path: 'brands', component: _Jeptag_admin_brand_brand_listing_brand_listing_component__WEBPACK_IMPORTED_MODULE_21__["BrandListingComponent"]
            },
            {
                path: 'brands/add', component: _Jeptag_admin_brand_add_brands_add_brands_component__WEBPACK_IMPORTED_MODULE_22__["AddBrandsComponent"]
            },
            {
                path: 'tags', component: _Jeptag_admin_Tags_taglist_taglist_component__WEBPACK_IMPORTED_MODULE_26__["TaglistComponent"]
            },
            {
                path: 'tags/edit/:id', component: _Jeptag_admin_Tags_add_tag_add_tag_component__WEBPACK_IMPORTED_MODULE_27__["AddTagComponent"]
            },
            {
                path: 'sales-report', component: _Jeptag_admin_Reports_sales_sales_component__WEBPACK_IMPORTED_MODULE_10__["SalesComponent"], resolve: {
                    cres: _Services_sales_report_resolver__WEBPACK_IMPORTED_MODULE_9__["SalesReportResolver"]
                },
            }
        ]
    },
    {
        path: '**',
        component: _Core_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__["PageNotFoundComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-login></app-login> -->\r\n<!-- <app-dashboard></app-dashboard> -->\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'instamunch';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-apexcharts */ "./node_modules/ng-apexcharts/fesm5/ng-apexcharts.js");
/* harmony import */ var _Shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Shared/shared.module */ "./src/app/Shared/shared.module.ts");
/* harmony import */ var _Jeptag_admin_Reports_sales_sales_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Jeptag-admin/Reports/sales/sales.component */ "./src/app/Jeptag-admin/Reports/sales/sales.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _Services_http_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Services/http.service */ "./src/app/Services/http.service.ts");
/* harmony import */ var _Services_interceptor_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Services/interceptor.service */ "./src/app/Services/interceptor.service.ts");
/* harmony import */ var _Services_sales_report_resolver__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Services/sales-report.resolver */ "./src/app/Services/sales-report.resolver.ts");
/* harmony import */ var _Services_auth_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Services/auth-guard */ "./src/app/Services/auth-guard.ts");
/* harmony import */ var _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Services/data-sharing.service */ "./src/app/Services/data-sharing.service.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var _Core_header_header_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Core/header/header.component */ "./src/app/Core/header/header.component.ts");
/* harmony import */ var _Core_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Core/sidebar/sidebar.component */ "./src/app/Core/sidebar/sidebar.component.ts");
/* harmony import */ var _Core_footer_footer_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Core/footer/footer.component */ "./src/app/Core/footer/footer.component.ts");
/* harmony import */ var _Services_auth_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Services/auth.service */ "./src/app/Services/auth.service.ts");
/* harmony import */ var _Core_login_login_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Core/login/login.component */ "./src/app/Core/login/login.component.ts");
/* harmony import */ var _Core_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Core/dashboard/dashboard.component */ "./src/app/Core/dashboard/dashboard.component.ts");
/* harmony import */ var _Core_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Core/page-not-found/page-not-found.component */ "./src/app/Core/page-not-found/page-not-found.component.ts");
/* harmony import */ var _Jeptag_admin_UserManagment_users_users_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Jeptag-admin/UserManagment/users/users.component */ "./src/app/Jeptag-admin/UserManagment/users/users.component.ts");
/* harmony import */ var _Jeptag_admin_UserManagment_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Jeptag-admin/UserManagment/add-user/add-user.component */ "./src/app/Jeptag-admin/UserManagment/add-user/add-user.component.ts");
/* harmony import */ var _Jeptag_admin_UserManagment_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./Jeptag-admin/UserManagment/edit-user/edit-user.component */ "./src/app/Jeptag-admin/UserManagment/edit-user/edit-user.component.ts");
/* harmony import */ var _Jeptag_admin_Products_product_listing_product_listing_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./Jeptag-admin/Products/product-listing/product-listing.component */ "./src/app/Jeptag-admin/Products/product-listing/product-listing.component.ts");
/* harmony import */ var _Jeptag_admin_Stores_store_listing_store_listing_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./Jeptag-admin/Stores/store-listing/store-listing.component */ "./src/app/Jeptag-admin/Stores/store-listing/store-listing.component.ts");
/* harmony import */ var _Jeptag_admin_Stores_add_store_add_store_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./Jeptag-admin/Stores/add-store/add-store.component */ "./src/app/Jeptag-admin/Stores/add-store/add-store.component.ts");
/* harmony import */ var _Jeptag_admin_Products_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./Jeptag-admin/Products/add-product/add-product.component */ "./src/app/Jeptag-admin/Products/add-product/add-product.component.ts");
/* harmony import */ var _Jeptag_admin_category_categories_categories_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./Jeptag-admin/category/categories/categories.component */ "./src/app/Jeptag-admin/category/categories/categories.component.ts");
/* harmony import */ var _Jeptag_admin_category_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./Jeptag-admin/category/add-category/add-category.component */ "./src/app/Jeptag-admin/category/add-category/add-category.component.ts");
/* harmony import */ var _Jeptag_admin_brand_brand_listing_brand_listing_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./Jeptag-admin/brand/brand-listing/brand-listing.component */ "./src/app/Jeptag-admin/brand/brand-listing/brand-listing.component.ts");
/* harmony import */ var _Jeptag_admin_brand_add_brands_add_brands_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./Jeptag-admin/brand/add-brands/add-brands.component */ "./src/app/Jeptag-admin/brand/add-brands/add-brands.component.ts");
/* harmony import */ var _Jeptag_admin_sub_category_sub_category_listing_sub_category_listing_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./Jeptag-admin/sub-category/sub-category-listing/sub-category-listing.component */ "./src/app/Jeptag-admin/sub-category/sub-category-listing/sub-category-listing.component.ts");
/* harmony import */ var _Jeptag_admin_sub_category_add_subcat_add_subcat_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./Jeptag-admin/sub-category/add-subcat/add-subcat.component */ "./src/app/Jeptag-admin/sub-category/add-subcat/add-subcat.component.ts");
/* harmony import */ var _Jeptag_admin_Stores_edit_store_edit_store_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./Jeptag-admin/Stores/edit-store/edit-store.component */ "./src/app/Jeptag-admin/Stores/edit-store/edit-store.component.ts");
/* harmony import */ var _Jeptag_admin_Products_edit_products_edit_products_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./Jeptag-admin/Products/edit-products/edit-products.component */ "./src/app/Jeptag-admin/Products/edit-products/edit-products.component.ts");
/* harmony import */ var _Jeptag_admin_Tags_taglist_taglist_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./Jeptag-admin/Tags/taglist/taglist.component */ "./src/app/Jeptag-admin/Tags/taglist/taglist.component.ts");
/* harmony import */ var _Jeptag_admin_Tags_add_tag_add_tag_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./Jeptag-admin/Tags/add-tag/add-tag.component */ "./src/app/Jeptag-admin/Tags/add-tag/add-tag.component.ts");
/* harmony import */ var _Core_forget_password_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./Core/forget-password/forget-password/forget-password.component */ "./src/app/Core/forget-password/forget-password/forget-password.component.ts");
/* harmony import */ var _Core_confirm_password_confirm_password_confirm_password_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./Core/confirm-password/confirm-password/confirm-password.component */ "./src/app/Core/confirm-password/confirm-password/confirm-password.component.ts");
/* harmony import */ var _Core_verification_verification_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./Core/verification/verification.component */ "./src/app/Core/verification/verification.component.ts");













//Services










//import { AddProductComponent } from './instamunch/product/add-product/add-product.component';




// import { EventsComponent } from './Jeptag-admin/Events/events/events.component';
// import { JoblistComponent } from './Jeptag-admin/Jobs/joblist/joblist.component';
// import { AddJobComponent } from './Jeptag-admin/Jobs/add-job/add-job.component';
// import { AddEventComponent } from './Jeptag-admin/Events/add-event/add-event.component';














//import{dateValidator} from './Shared/Custom Validators/dateValidator';







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _Core_header_header_component__WEBPACK_IMPORTED_MODULE_19__["HeaderComponent"],
                _Core_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_20__["SidebarComponent"],
                _Core_footer_footer_component__WEBPACK_IMPORTED_MODULE_21__["FooterComponent"],
                _Jeptag_admin_Products_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_32__["AddProductComponent"],
                _Core_login_login_component__WEBPACK_IMPORTED_MODULE_23__["LoginComponent"],
                _Core_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_24__["DashboardComponent"],
                _Core_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_25__["PageNotFoundComponent"],
                _Jeptag_admin_Reports_sales_sales_component__WEBPACK_IMPORTED_MODULE_10__["SalesComponent"],
                _Jeptag_admin_UserManagment_users_users_component__WEBPACK_IMPORTED_MODULE_26__["UsersComponent"],
                // EventsComponent,
                // JoblistComponent,
                // AddJobComponent,
                // AddEventComponent,
                _Jeptag_admin_UserManagment_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_27__["AddUserComponent"],
                _Jeptag_admin_UserManagment_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_28__["EditUserComponent"],
                _Jeptag_admin_Products_product_listing_product_listing_component__WEBPACK_IMPORTED_MODULE_29__["ProductListingComponent"],
                _Jeptag_admin_Stores_store_listing_store_listing_component__WEBPACK_IMPORTED_MODULE_30__["StoreListingComponent"],
                _Jeptag_admin_Stores_add_store_add_store_component__WEBPACK_IMPORTED_MODULE_31__["AddStoreComponent"],
                _Jeptag_admin_category_categories_categories_component__WEBPACK_IMPORTED_MODULE_33__["CategoriesComponent"],
                _Jeptag_admin_category_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_34__["AddCategoryComponent"],
                _Jeptag_admin_brand_brand_listing_brand_listing_component__WEBPACK_IMPORTED_MODULE_35__["BrandListingComponent"],
                _Jeptag_admin_brand_add_brands_add_brands_component__WEBPACK_IMPORTED_MODULE_36__["AddBrandsComponent"],
                _Jeptag_admin_sub_category_sub_category_listing_sub_category_listing_component__WEBPACK_IMPORTED_MODULE_37__["SubCategoryListingComponent"],
                _Jeptag_admin_sub_category_add_subcat_add_subcat_component__WEBPACK_IMPORTED_MODULE_38__["AddSubcatComponent"],
                _Jeptag_admin_Stores_edit_store_edit_store_component__WEBPACK_IMPORTED_MODULE_39__["EditStoreComponent"],
                _Jeptag_admin_Products_edit_products_edit_products_component__WEBPACK_IMPORTED_MODULE_40__["EditProductsComponent"],
                _Jeptag_admin_Tags_taglist_taglist_component__WEBPACK_IMPORTED_MODULE_41__["TaglistComponent"],
                _Jeptag_admin_Tags_add_tag_add_tag_component__WEBPACK_IMPORTED_MODULE_42__["AddTagComponent"],
                _Core_forget_password_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_43__["ForgetPasswordComponent"],
                _Core_confirm_password_confirm_password_confirm_password_component__WEBPACK_IMPORTED_MODULE_44__["ConfirmPasswordComponent"],
                _Core_verification_verification_component__WEBPACK_IMPORTED_MODULE_45__["VerificationComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"],
                _Shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                ng_apexcharts__WEBPACK_IMPORTED_MODULE_8__["NgApexchartsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__["NgSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
            ],
            providers: [_Services_http_service__WEBPACK_IMPORTED_MODULE_13__["HttpService"],
                _Services_auth_service__WEBPACK_IMPORTED_MODULE_22__["AuthService"],
                _Services_sales_report_resolver__WEBPACK_IMPORTED_MODULE_15__["SalesReportResolver"],
                _Services_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuardService"],
                _Services_data_sharing_service__WEBPACK_IMPORTED_MODULE_17__["DataSharingService"],
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_6__["HashLocationStrategy"] },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _Services_interceptor_service__WEBPACK_IMPORTED_MODULE_14__["InterceptorService"], multi: true }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    // baseUrl: 'http://192.168.10.11:3000' // staging
    //baseUrl: 'http://192.168.10.4:3000' // staging
    //baseUrl: 'http://192.168.10.11:3000' // staging
    //USE THIS
    baseUrl: 'http://206.81.6.168' // staging
    //baseUrl:'http://192.168.10.3:3000'
    //baseUrl: 'http://168.63.140.202:8001/instamunch/' // staging
    //baseUrl: 'http://51.11.55.5:8000/instamunch/' // production
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\ustran angular 7 latest\Ustran Angular Project to be done\jeptag-Admin-frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map