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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12\">\n    <img src=\"../assets/img/logo.jpg\" class=\"img-responsive\" style=\"width: 150px;\">\n</div>\n<div class=\"col-sm-12\">\n    <form #addForm = \"ngForm\" (ngSubmit) =\"submit(addForm.value)\" novalidate>\n    <div class=\"col-sm-8\">\n        <div class=\"col-sm-4\">\n            <h4>Hostname</h4>\n            <input type=\"url\" class=\"form-control\" pattern=\"^(http:\\/\\/www\\.|https:\\/\\/www\\.|http:\\/\\/|https:\\/\\/)?[a-z0-9]+([\\-\\.]{1}[a-z0-9]+)*\\.[a-z]{2,5}(:[0-9]{1,5})?(\\/.*)?$\" name=\"hostname\" ngModel #hostvalid=\"ngModel\" required>\n            <div *ngIf=\"hostvalid.errors?.pattern\" class=\"alert-danger\" style=\"height: 28px; padding: 3px; margin-bottom: 2%;margin-top: 1%;\"> \n                Please enter valid hostname.\n            </div>\n        </div>\n        <div class=\"col-sm-4\">\n            <h4>Loopback</h4>\n            <input type=\"text\" class=\"form-control\" pattern=\"^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$\" name=\"loopback\" ngModel #loopvalid=\"ngModel\" required>\n            <div *ngIf=\"loopvalid.errors?.pattern\" class=\"alert-danger\" style=\"height: 28px; padding: 3px; margin-bottom: 2%;margin-top: 1%;\"> \n                Please enter valid loopback.\n            </div>\n        </div>\n        <div class=\"col-sm-4\" style=\"margin-top: 4.6%;\">\n            <button type=\"submit\" [disabled]=\"addForm.invalid\" class=\"btn btn-primary\">Add</button>\n        </div>\n    </div>\n    </form>\n</div>\n<div class=\"col-sm-10\">\n    <section class=\"panel\" id=\"empForm\" *ngIf=\"main_form\">\n            <!-- <header class=\"panel-heading\">\n                View Details                          \n            </header> -->\n            \n            <div class=\"table-responsive\">                \n                <table class=\"table\" style=\"margin-top: 5%;\">\n                <thead>\n                    <tr>                              \n                    <th>SR NO</th>\n                    <th>Hostname</th>\n                    <th>Loppback</th>                                                                                                                                \n                    <th>Action</th>\n                    </tr>\n                </thead>                              \n                <tbody >                   \n                    \n                    <tr *ngFor=\"let member of memberData | paginate: { itemsPerPage: 2, currentPage: p } let i = index;\">                                \n                        <td>{{i+1}}</td>\n                        <td>{{member.hostname}}</td>\n                        <td>{{member.loopback}}</td>                                                                    \n                        <td>\n                        <a (click)=\"edit(member.ID)\"><span class=\"glyphicon glyphicon-pencil\"></span></a>\n                        &nbsp;&nbsp;&nbsp;<a (click)=\"delete(member.ID)\"><span class=\"glyphicon glyphicon-trash\"></span></a>\n                        &nbsp;&nbsp;&nbsp;<a data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"open(member.ID)\"><span class=\"glyphicon glyphicon-eye-open\"></span></a>\n                        \n\n                        <!-- Modal -->\n                            <div class=\"modal fade\" id=\"myModal\" data-backdrop=\"static\" data-keyboard=\"false\" role=\"dialog\">\n                                <div class=\"modal-dialog\">\n                                \n                                <!-- Modal content-->\n                                <div class=\"modal-content\">\n                                    <div class=\"modal-header\">\n                                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                                    <h4 class=\"modal-title\">Edit Interfaces</h4>\n                                    </div>\n                                    <div class=\"modal-body\">\n                                        <div class=\"col-lg-12\">\n                                                <form #addsubForm = \"ngForm\" (ngSubmit) =\"add_sub(addsubForm.value)\" novalidate>\n\n\n                                        <div class=\"col-sm-4\">\n                                            <h4>Interface</h4>\n                                            <input type=\"url\" class=\"form-control\" name=\"interface\" ngModel #interfacevalid=\"ngModel\" required>\n                                            <!-- <div *ngIf=\"interfacevalid.errors?.pattern\" class=\"alert-danger\" style=\"height: 28px; padding: 3px; margin-bottom: 2%;margin-top: 1%;\"> \n                                                Please enter valid interface.\n                                            </div> -->\n                                        </div>\n                                        <div class=\"col-sm-4\">\n                                            <h4>Ip</h4>\n                                            <input type=\"text\" class=\"form-control\" pattern=\"^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$\" name=\"ip\" ngModel #ipvalid=\"ngModel\" required>\n                                            <div *ngIf=\"ipvalid.errors?.pattern\" class=\"alert-danger\" style=\"height: 28px; padding: 3px; margin-bottom: 2%;margin-top: 1%;\"> \n                                                Please enter valid ip.\n                                            </div>\n                                        </div>\n                                        <input type=\"hidden\" name=\"mainIDD\" [(ngModel)]=\"mainIDD\">\n                                        <div class=\"col-sm-4\" style=\"margin-top: 4.6%;\">\n                                            <button type=\"submit\" [disabled]=\"addsubForm.invalid\" class=\"btn btn-primary\">Add</button>\n                                        </div>\n                                        </form>\n                                    </div>\n\n                                       \n                                            <div class=\"col-sm-12\">\n                                            \n                                            <div class=\"table-responsive\" *ngIf=\"main_form2\">                \n                                                <table class=\"table\" style=\"margin-top: 5%;\">\n                                                <thead>\n                                                    <tr>                              \n                                                    <th>SR NO</th>\n                                                    <th>Interface</th>\n                                                    <th>IP</th>                                                                                                                                \n                                                    <th>Action</th>\n                                                    </tr>\n                                                </thead>                              \n                                                <tbody >                   \n                                                    \n                                                    <tr *ngFor=\"let mem of submemberData let j=index;\">                                \n                                                        <td>{{j+1}}</td>\n                                                        <td>{{mem.interface}}</td>\n                                                        <td>{{mem.ip}}</td>                                                                    \n                                                        <td>\n                                                        <a (click)=\"edit_sub(mem.ID)\"><span class=\"glyphicon glyphicon-pencil\"></span></a>\n                                                        &nbsp;&nbsp;&nbsp;<a (click)=\"delete_sub(mem.ID)\"><span class=\"glyphicon glyphicon-trash\"></span></a>\n                                                    </td>\n                                                    </tr>\n                                                    </tbody>\n                                                    </table>\n                                                    <!-- <pagination-controls (pageChange)=\"p = $event\"></pagination-controls> -->\n                                                    </div>\n\n                                                    <form #updatesubForm = \"ngForm\" *ngIf=\"update_form2\" class=\"form-horizontal alert alert-warning\" name=\"form1\" (ngSubmit) =\"update_sub(updatesubForm.value)\"  style=\"margin-left: 2%; padding-right: 4%;margin-top: 4%;\">\n                                                            <h3 class=\"text-center\" style=\"margin-bottom: 3%;\">Update Details</h3>  \n                                                            <div class=\"form-group \">\n                                                              <label for=\"fname\" class=\"control-label col-lg-2\">Interface<span class=\"required\">*</span></label>\n                                                              <div class=\"col-lg-10\">\n                                                                <input type=\"url\" class=\"form-control\" name=\"interface\" [(ngModel)]=\"interface\" #interfacevalid=\"ngModel\" required>\n                                                                <!-- <div *ngIf=\"interfacevalid.errors?.pattern\" class=\"alert-danger\" style=\"height: 28px; padding: 3px; margin-bottom: 2%;margin-top: 1%;\"> \n                                                                    Please enter valid interface.\n                                                                </div> -->\n                                                              </div>\n                                                            </div>\n                                                            <div class=\"form-group \">\n                                                              <label for=\"fname\" class=\"control-label col-lg-2\">IP<span class=\"required\">*</span></label>\n                                                              <div class=\"col-lg-10\">\n                                                                <input type=\"text\" class=\"form-control\" pattern=\"^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$\" name=\"ip\" [(ngModel)]=\"ip\" #ipvalid=\"ngModel\" required>\n                                                                <div *ngIf=\"ipvalid.errors?.pattern\" class=\"alert-danger\" style=\"height: 28px; padding: 3px; margin-bottom: 2%;margin-top: 1%;\"> \n                                                                    Please enter valid ip.\n                                                                </div>\n                                                              </div>\n                                                            </div>\n                                                            <input type=\"hidden\" name=\"ID\" [(ngModel)]=\"ID\">\n                                                            <div class=\"form-group\">\n                                                                <div class=\"col-lg-offset-2 col-lg-10\">\n                                                                    <button class=\"btn btn-primary\" style=\"background-color: #040252;border-color: #040252;\" type=\"submit\" [disabled]=\"updatesubForm.invalid\" id=\"save\">Update</button>&nbsp;&nbsp;&nbsp;\n                                                                    <button class=\"btn btn-primary\" (click)=\"cancel2()\" style=\"background-color: #040252;border-color: #040252;\" type=\"button\">Cancel</button>                        \n                                                                </div>\n                                                              </div>\n                                                              </form>\n\n\n\n\n\n\n                                                    </div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n                                    </div> \n                                    <div class=\"modal-footer\">\n                                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                                    </div>\n                                </div>\n                                \n                                </div>\n                            </div>\n                    </td>                                  \n                    </tr>                              \n                </tbody>\n                </table>                            \n            </div>   \n            <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>                                           \n        </section> \n        <section *ngIf=\"update_form\">\n            <form #updateForm = \"ngForm\" class=\"form-horizontal alert alert-warning\" name=\"form1\" (ngSubmit) =\"update(updateForm.value)\"  style=\"margin-left: 2%; padding-right: 4%;margin-top: 4%;\">\n                <h3 class=\"text-center\" style=\"margin-bottom: 3%;\">Update Details</h3>  \n                <div class=\"form-group \">\n                  <label for=\"fname\" class=\"control-label col-lg-2\">Hostname<span class=\"required\">*</span></label>\n                  <div class=\"col-lg-10\">\n                    <input type=\"url\" class=\"form-control\" pattern=\"^(http:\\/\\/www\\.|https:\\/\\/www\\.|http:\\/\\/|https:\\/\\/)?[a-z0-9]+([\\-\\.]{1}[a-z0-9]+)*\\.[a-z]{2,5}(:[0-9]{1,5})?(\\/.*)?$\" name=\"hostname\" [(ngModel)]=\"hostname\" #hostvalid=\"ngModel\" required>\n                    <div *ngIf=\"hostvalid.errors?.pattern\" class=\"alert-danger\" style=\"height: 28px; padding: 3px; margin-bottom: 2%;margin-top: 1%;\"> \n                        Please enter valid hostname.\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group \">\n                  <label for=\"fname\" class=\"control-label col-lg-2\">Loopback<span class=\"required\">*</span></label>\n                  <div class=\"col-lg-10\">\n                    <input type=\"text\" class=\"form-control\" pattern=\"^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$\" name=\"loopback\" [(ngModel)]=\"loopback\" #loopvalid=\"ngModel\" required>\n                    <div *ngIf=\"loopvalid.errors?.pattern\" class=\"alert-danger\" style=\"height: 28px; padding: 3px; margin-bottom: 2%;margin-top: 1%;\"> \n                        Please enter valid loopback.\n                    </div>\n                  </div>\n                </div>\n                <input type=\"hidden\" name=\"ID\" [(ngModel)]=\"ID\">\n                <div class=\"form-group\">\n                    <div class=\"col-lg-offset-2 col-lg-10\">\n                        <button class=\"btn btn-primary\" style=\"background-color: #040252;border-color: #040252;\" type=\"submit\" [disabled]=\"updateForm.invalid\" id=\"save\">Update</button>&nbsp;&nbsp;&nbsp;\n                        <button class=\"btn btn-primary\" (click)=\"cancel()\" style=\"background-color: #040252;border-color: #040252;\" type=\"button\">Cancel</button>                        \n                    </div>\n                  </div>\n                  </form>\n        </section> \n            \n</div>\n\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./globals */ "./src/app/globals.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { ModalDialogModule } from 'ngx-modal-dialog';
// import { IModalDialog, IModalDialogOptions,IModalDialogButton, ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
// import { ModalAboutComponent } from './modal-about/modal-about.component';
var AppComponent = /** @class */ (function () {
    function AppComponent(http, spinnerService, globals, viewRef) {
        this.http = http;
        this.spinnerService = spinnerService;
        this.globals = globals;
        this.viewRef = viewRef;
        this.title = 'myApp';
        this.p = 1;
        this.serverurl = globals.serverUrl;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinnerService.show();
        this.update_form = false;
        this.main_form = true;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        this.http.get(this.serverurl + "view.php", { headers: this.headers })
            .subscribe(function (res) {
            var response = res.json();
            _this.memberData = response;
        });
    };
    AppComponent.prototype.getallrecord = function () {
        var _this = this;
        this.http.get(this.serverurl + "view.php", { headers: this.headers })
            .subscribe(function (res) {
            var response = res.json();
            _this.memberData = response;
        });
    };
    AppComponent.prototype.submit = function (data) {
        var _this = this;
        // let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
        // let options = new RequestOptions({ headers: headers });
        this.spinnerService.show();
        var body = JSON.stringify(data);
        //this.isClick= false;         
        this.http.post(this.serverurl + "add.php", body, { headers: this.headers })
            .subscribe(function (res) {
            var response = res.json();
            if (response.STATUS == "Success") {
                _this.spinnerService.hide();
                _this.getallrecord();
                //this.isClick= true;
                alert("Data added successfully");
            }
            else {
            }
        });
    };
    AppComponent.prototype.edit = function (ID) {
        var _this = this;
        console.log("kk");
        this.update_form = true;
        this.main_form = false;
        var data = { ID: ID };
        this.spinnerService.show();
        this.http.post(this.serverurl + "view_by_id.php", JSON.stringify(data), { headers: this.headers })
            .subscribe(function (res) {
            _this.spinnerService.hide();
            var response = res.json();
            _this.hostname = response[0].hostname;
            _this.loopback = response[0].loopback;
            _this.ID = response[0].ID;
        });
    };
    AppComponent.prototype.delete = function (ID) {
        var _this = this;
        var data = { ID: ID };
        //this.isClick = false;
        this.spinnerService.show();
        this.http.post(this.serverurl + "delete.php", JSON.stringify(data), { headers: this.headers })
            .subscribe(function (res) {
            _this.spinnerService.hide();
            //this.isClick = true;
            var response = res.json();
            if (response.STATUS == "Success") {
                alert("Data deleted successfully");
                _this.getallrecord();
            }
            else {
                alert("Error in deleting data");
            }
        });
    };
    AppComponent.prototype.update = function (userdata) {
        var _this = this;
        var body = JSON.stringify(userdata);
        //this.isClick = false;
        this.spinnerService.show();
        this.http.post(this.serverurl + "update.php", body, { headers: this.headers })
            .subscribe(function (res) {
            _this.spinnerService.hide();
            //this.isClick = true;
            var response = res.json();
            if (response.STATUS == "Success") {
                alert("Data updated successfully");
                window.location.reload();
                //this.update_form = false;
                //this.main_form = true;
            }
            else {
                alert("Error in updating data");
            }
        });
    };
    AppComponent.prototype.open = function (ID) {
        var _this = this;
        this.mainIDD = ID;
        this.spinnerService.show();
        this.update_form2 = false;
        this.main_form2 = true;
        var mainID = ID;
        var body = { mainID: mainID };
        this.http.post(this.serverurl + "view_sub_by_id.php", JSON.stringify(body), { headers: this.headers })
            .subscribe(function (res) {
            _this.spinnerService.hide();
            var response = res.json();
            _this.submemberData = response;
        });
    };
    AppComponent.prototype.add_sub = function (data) {
        var _this = this;
        event.preventDefault();
        window.stop();
        // let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
        // let options = new RequestOptions({ headers: headers });
        this.spinnerService.show();
        var body = JSON.stringify(data);
        //this.isClick= false;         
        this.http.post(this.serverurl + "add_sub.php", body, { headers: this.headers })
            .subscribe(function (res) {
            var response = res.json();
            if (response.STATUS == "Success") {
                _this.spinnerService.hide();
                _this.getsuballrecord();
                //this.isClick= true;
                alert("Data added successfully");
            }
            else {
                _this.spinnerService.hide();
                alert("Error in adding details");
            }
        });
    };
    AppComponent.prototype.getsuballrecord = function () {
        var _this = this;
        this.spinnerService.show();
        var mainID = this.mainIDD;
        var body = { mainID: mainID };
        this.http.post(this.serverurl + "view_sub_by_id.php", JSON.stringify(body), { headers: this.headers })
            .subscribe(function (res) {
            var response = res.json();
            _this.submemberData = response;
        });
    };
    AppComponent.prototype.edit_sub = function (ID) {
        var _this = this;
        console.log("kk");
        this.update_form2 = true;
        this.main_form2 = false;
        var data = { ID: ID };
        this.spinnerService.show();
        this.http.post(this.serverurl + "view_sub_by_id_edit.php", JSON.stringify(data), { headers: this.headers })
            .subscribe(function (res) {
            _this.spinnerService.hide();
            var response = res.json();
            _this.interface = response[0].interface;
            _this.ip = response[0].ip;
            _this.ID = response[0].ID;
        });
    };
    AppComponent.prototype.delete_sub = function (ID) {
        var _this = this;
        event.preventDefault();
        window.stop();
        var data = { ID: ID };
        //this.isClick = false;
        this.spinnerService.show();
        this.http.post(this.serverurl + "delete_sub.php", JSON.stringify(data), { headers: this.headers })
            .subscribe(function (res) {
            _this.spinnerService.hide();
            //this.isClick = true;
            var response = res.json();
            if (response.STATUS == "Success") {
                alert("Data deleted successfully");
                _this.getsuballrecord();
            }
            else {
                alert("Error in deleting data");
            }
        });
    };
    AppComponent.prototype.update_sub = function (userdata) {
        var _this = this;
        event.preventDefault();
        window.stop();
        var body = JSON.stringify(userdata);
        //this.isClick = false;
        this.spinnerService.show();
        this.http.post(this.serverurl + "update_sub.php", body, { headers: this.headers })
            .subscribe(function (res) {
            _this.spinnerService.hide();
            //this.isClick = true;
            var response = res.json();
            if (response.STATUS == "Success") {
                alert("Data updated successfully");
                _this.update_form2 = false;
                _this.main_form2 = true;
                _this.getsuballrecord();
            }
            else {
                alert("Error in updating data");
            }
        });
    };
    AppComponent.prototype.cancel = function () {
        this.update_form = false;
        this.main_form = true;
    };
    AppComponent.prototype.cancel2 = function () {
        this.update_form2 = false;
        this.main_form2 = true;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2__["Ng4LoadingSpinnerService"], _globals__WEBPACK_IMPORTED_MODULE_3__["Globals"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./globals */ "./src/app/globals.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__["Ng4LoadingSpinnerModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"]
            ],
            providers: [_globals__WEBPACK_IMPORTED_MODULE_6__["Globals"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/globals.ts":
/*!****************************!*\
  !*** ./src/app/globals.ts ***!
  \****************************/
/*! exports provided: Globals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Globals", function() { return Globals; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])();
var Globals = /** @class */ (function () {
    function Globals() {
        this.serverUrl = 'http://3squareit.com/gorides_webservices/';
    }
    return Globals;
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
    production: false
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

module.exports = __webpack_require__(/*! D:\Angular 4 Websites\TaskApp\myApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map