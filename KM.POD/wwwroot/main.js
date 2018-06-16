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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _core_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/components/spinner/spinner.component */ "./src/app/core/components/spinner/spinner.component.ts");
/* harmony import */ var _core_components_spinner_global_spinner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/components/spinner/global-spinner.component */ "./src/app/core/components/spinner/global-spinner.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routing.module */ "./src/app/app.routing.module.ts");
/* harmony import */ var _core_directives_directives_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/directives/directives.module */ "./src/app/core/directives/directives.module.ts");
/* harmony import */ var _core_components_input_input_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/components/input/input.component */ "./src/app/core/components/input/input.component.ts");
/* harmony import */ var _core_components_models_checkbox_item_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/components/models/checkbox-item.model */ "./src/app/core/components/models/checkbox-item.model.ts");
/* harmony import */ var _client_pages_about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./client/pages/about/about.component */ "./src/app/client/pages/about/about.component.ts");
/* harmony import */ var _client_pages_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./client/pages/sidebar/sidebar.component */ "./src/app/client/pages/sidebar/sidebar.component.ts");
/* harmony import */ var _client_pages_account_signIn_signIn_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./client/pages/account/signIn/signIn.component */ "./src/app/client/pages/account/signIn/signIn.component.ts");
/* harmony import */ var _core_services_authentification_authentication_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/services/authentification/authentication.module */ "./src/app/core/services/authentification/authentication.module.ts");
/* harmony import */ var _core_services_api_user_api_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./core/services/api/user.api.service */ "./src/app/core/services/api/user.api.service.ts");
/* harmony import */ var _core_services_api_account_api_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./core/services/api/account.api.service */ "./src/app/core/services/api/account.api.service.ts");
/* harmony import */ var _core_services_api_http_service_ts_http_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./core/services/api/http-service.ts/http.service */ "./src/app/core/services/api/http-service.ts/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _core_services_shared_global_spinner_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./core/services/shared/global-spinner.service */ "./src/app/core/services/shared/global-spinner.service.ts");
/* harmony import */ var _client_pages_account_registration_registration_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./client/pages/account/registration/registration.component */ "./src/app/client/pages/account/registration/registration.component.ts");
/* harmony import */ var _client_pages_account_registration_password_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./client/pages/account/registration/password.component */ "./src/app/client/pages/account/registration/password.component.ts");
/* harmony import */ var _client_pages_account_registration_verification_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./client/pages/account/registration/verification.component */ "./src/app/client/pages/account/registration/verification.component.ts");
/* harmony import */ var _client_pages_account_registration_container_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./client/pages/account/registration/container.component */ "./src/app/client/pages/account/registration/container.component.ts");
/* harmony import */ var _client_pages_account_registration_page_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./client/pages/account/registration/page.service */ "./src/app/client/pages/account/registration/page.service.ts");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! angular2-text-mask */ "./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _client_pages_account_registration_registrationState_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./client/pages/account/registration/registrationState.service */ "./src/app/client/pages/account/registration/registrationState.service.ts");
/* harmony import */ var _core_components_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./core/components/dialog/dialog.module */ "./src/app/core/components/dialog/dialog.module.ts");
/* harmony import */ var _client_pages_account_changePassword_resetPassword_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./client/pages/account/changePassword/resetPassword.component */ "./src/app/client/pages/account/changePassword/resetPassword.component.ts");
/* harmony import */ var _client_pages_account_changePassword_provideEmail_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./client/pages/account/changePassword/provideEmail.component */ "./src/app/client/pages/account/changePassword/provideEmail.component.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var _client_pages_home_home_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./client/pages/home/home.component */ "./src/app/client/pages/home/home.component.ts");
/* harmony import */ var _client_pages_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./client/pages/welcome/welcome.component */ "./src/app/client/pages/welcome/welcome.component.ts");
/* harmony import */ var _core_components_models_error_dialog_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./core/components/models/error-dialog.component */ "./src/app/core/components/models/error-dialog.component.ts");
/* harmony import */ var _core_services_shared_page_directive__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./core/services/shared/page.directive */ "./src/app/core/services/shared/page.directive.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _client_pages_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_12__["SidebarComponent"],
                _client_pages_about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"],
                _core_components_input_input_component__WEBPACK_IMPORTED_MODULE_9__["InputComponent"],
                _core_components_models_checkbox_item_model__WEBPACK_IMPORTED_MODULE_10__["CheckboxComponent"],
                _client_pages_account_signIn_signIn_component__WEBPACK_IMPORTED_MODULE_13__["SignInComponent"],
                _client_pages_account_registration_registration_component__WEBPACK_IMPORTED_MODULE_20__["RegistrationComponent"],
                _client_pages_account_registration_verification_component__WEBPACK_IMPORTED_MODULE_22__["VerificationComponent"],
                _client_pages_account_registration_password_component__WEBPACK_IMPORTED_MODULE_21__["RegistrationPasswordComponent"],
                _client_pages_account_registration_container_component__WEBPACK_IMPORTED_MODULE_23__["PageResolverComponent"],
                _client_pages_account_changePassword_provideEmail_component__WEBPACK_IMPORTED_MODULE_30__["ProvideEmailComponent"],
                _client_pages_account_changePassword_resetPassword_component__WEBPACK_IMPORTED_MODULE_29__["ResetPasswordComponent"],
                _client_pages_home_home_component__WEBPACK_IMPORTED_MODULE_32__["HomeComponent"],
                _client_pages_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_33__["WelcomeComponent"],
                _core_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_5__["SpinnerComponent"],
                _core_components_spinner_global_spinner_component__WEBPACK_IMPORTED_MODULE_6__["GlobalSpinnerComponent"],
                _core_components_models_error_dialog_component__WEBPACK_IMPORTED_MODULE_34__["ErrorDialogComponent"],
                _core_services_shared_page_directive__WEBPACK_IMPORTED_MODULE_35__["PageDirective"]
            ],
            exports: [],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
                _core_directives_directives_module__WEBPACK_IMPORTED_MODULE_8__["DirectivesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _core_services_authentification_authentication_module__WEBPACK_IMPORTED_MODULE_14__["AuthenticationModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__["BrowserAnimationsModule"],
                angular2_text_mask__WEBPACK_IMPORTED_MODULE_25__["TextMaskModule"],
                _core_components_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_28__["DialogModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_31__["NgSelectModule"]
            ],
            providers: [
                _core_services_api_http_service_ts_http_service__WEBPACK_IMPORTED_MODULE_17__["HttpService"],
                _core_services_api_user_api_service__WEBPACK_IMPORTED_MODULE_15__["UserApiService"],
                _core_services_api_account_api_service__WEBPACK_IMPORTED_MODULE_16__["AccountApiService"],
                _core_services_shared_global_spinner_service__WEBPACK_IMPORTED_MODULE_19__["GlobalSpinnerService"],
                _client_pages_account_registration_page_service__WEBPACK_IMPORTED_MODULE_24__["PageService"],
                _client_pages_account_registration_registrationState_service__WEBPACK_IMPORTED_MODULE_27__["RegistrationStateService"]
            ],
            entryComponents: [_client_pages_account_registration_registration_component__WEBPACK_IMPORTED_MODULE_20__["RegistrationComponent"], _client_pages_account_registration_verification_component__WEBPACK_IMPORTED_MODULE_22__["VerificationComponent"], _client_pages_account_registration_password_component__WEBPACK_IMPORTED_MODULE_21__["RegistrationPasswordComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app.routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRouterModule", function() { return AppRouterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _client_pages_account_signIn_signIn_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client/pages/account/signIn/signIn.component */ "./src/app/client/pages/account/signIn/signIn.component.ts");
/* harmony import */ var _client_pages_account_registration_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client/pages/account/registration/container.component */ "./src/app/client/pages/account/registration/container.component.ts");
/* harmony import */ var _client_pages_account_changePassword_resetPassword_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client/pages/account/changePassword/resetPassword.component */ "./src/app/client/pages/account/changePassword/resetPassword.component.ts");
/* harmony import */ var _client_pages_account_changePassword_provideEmail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client/pages/account/changePassword/provideEmail.component */ "./src/app/client/pages/account/changePassword/provideEmail.component.ts");
/* harmony import */ var _client_pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./client/pages/home/home.component */ "./src/app/client/pages/home/home.component.ts");
/* harmony import */ var _client_pages_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./client/pages/welcome/welcome.component */ "./src/app/client/pages/welcome/welcome.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'
    },
    {
        path: 'home',
        component: _client_pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        children: [
            {
                path: '',
                component: _client_pages_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_7__["WelcomeComponent"]
            },
            {
                path: 'signIn',
                component: _client_pages_account_signIn_signIn_component__WEBPACK_IMPORTED_MODULE_2__["SignInComponent"]
            },
            {
                path: 'register',
                component: _client_pages_account_registration_container_component__WEBPACK_IMPORTED_MODULE_3__["PageResolverComponent"]
            }
        ]
    },
    {
        path: 'provideEmail',
        component: _client_pages_account_changePassword_provideEmail_component__WEBPACK_IMPORTED_MODULE_5__["ProvideEmailComponent"]
    },
    {
        path: 'resetPassword',
        component: _client_pages_account_changePassword_resetPassword_component__WEBPACK_IMPORTED_MODULE_4__["ResetPasswordComponent"]
    }
];
var AppRouterModule = /** @class */ (function () {
    function AppRouterModule() {
    }
    AppRouterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRouterModule);
    return AppRouterModule;
}());



/***/ }),

/***/ "./src/app/client/pages/about/about.component.html":
/*!*********************************************************!*\
  !*** ./src/app/client/pages/about/about.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>About</div>"

/***/ }),

/***/ "./src/app/client/pages/about/about.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/client/pages/about/about.component.ts ***!
  \*******************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
        //
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-component',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/client/pages/about/about.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/client/pages/account/changePassword/provideEmail.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/client/pages/account/changePassword/provideEmail.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"authorization\">\r\n    <aside class=\"authorization-aside\">\r\n        <div class=\"authorization-aside__form\">\r\n            <h2 class=\"authorization-aside__title h2\"><strong>Reset password</strong></h2>\r\n            <div class=\"authorization-form\">\r\n                <div class=\"authorization-form__group\">\r\n                    <label class=\"authorization-form__label\" for=\"email\">Email</label>\r\n                    <input class=\"authorization-form__input\" id=\"email\" [formControl]=\"email\" placeholder=\"Email\" type=\"email\"/>\r\n                    <div *ngIf=\"isControlInvalid()\">email validation result</div>\r\n                </div>\r\n                <div class=\"authorization-form__button-group\">\r\n                    <button class=\"button button_medium button_light-blue authorization-form__button\" (click)=\"cancel()\">Cancel</button>\r\n                    <button class=\"button button_medium reset_password button_white-filled authorization-form__button\" (click)=\"resetPassword()\">Reset password</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </aside>\r\n</section>"

/***/ }),

/***/ "./src/app/client/pages/account/changePassword/provideEmail.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/client/pages/account/changePassword/provideEmail.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ProvideEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvideEmailComponent", function() { return ProvideEmailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_api_account_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/services/api/account.api.service */ "./src/app/core/services/api/account.api.service.ts");
/* harmony import */ var _core_services_shared_global_spinner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/services/shared/global-spinner.service */ "./src/app/core/services/shared/global-spinner.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProvideEmailComponent = /** @class */ (function () {
    function ProvideEmailComponent(accountApiService, router, spinnerService) {
        this.accountApiService = accountApiService;
        this.router = router;
        this.spinnerService = spinnerService;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]);
    }
    ProvideEmailComponent.prototype.resetPassword = function () {
        var _this = this;
        var model = {
            email: this.email.value,
        };
        this.accountApiService.forgotPassword(model)
            .subscribe(function (changePasswordToken) {
            // TODO: This is temporary code. User will get an email with link to resetPassword page
            _this.router.navigate(['resetPassword'], { queryParams: { email: _this.email.value, changePasswordToken: changePasswordToken.token } });
        }, function () {
            // this.notificationService.error('Error', 'Error logging in');
        });
    };
    ProvideEmailComponent.prototype.isControlInvalid = function () {
        return this.email.invalid && this.email.touched;
    };
    ProvideEmailComponent.prototype.cancel = function () {
        this.router.navigate(['home/signIn']);
    };
    ProvideEmailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-emailprovider',
            template: __webpack_require__(/*! ./provideEmail.component.html */ "./src/app/client/pages/account/changePassword/provideEmail.component.html"),
            styles: [__webpack_require__(/*! ../signIn/signIn.component.scss */ "./src/app/client/pages/account/signIn/signIn.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services_api_account_api_service__WEBPACK_IMPORTED_MODULE_1__["AccountApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _core_services_shared_global_spinner_service__WEBPACK_IMPORTED_MODULE_2__["GlobalSpinnerService"]])
    ], ProvideEmailComponent);
    return ProvideEmailComponent;
}());



/***/ }),

/***/ "./src/app/client/pages/account/changePassword/resetPassword.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/client/pages/account/changePassword/resetPassword.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <div class=\"container\">\r\n        <form [formGroup]=\"passwordForm\">\r\n            <h3>Create new password</h3>\r\n            <div>\r\n                Use next safety rules to create password minimum complexity should be 8 characters,\r\n                and at least one lowercase, uppercase,\r\n                number and special character.\r\n            </div>\r\n            <label>Password\r\n                <input type=\"password\" placeholder=\"Password\" formControlName=\"password\" />\r\n            </label>\r\n            <label>Repeat password\r\n                <input type=\"password\" placeholder=\"Repeat password\" formControlName=\"confirmPassword\" />\r\n            </label>\r\n            <div>\r\n                <button (click)=\"cancel()\">Cancel</button>\r\n            </div>\r\n            <div>\r\n                <button (click)=\"signIn()\">Sign In</button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/client/pages/account/changePassword/resetPassword.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/client/pages/account/changePassword/resetPassword.component.ts ***!
  \********************************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_api_account_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/services/api/account.api.service */ "./src/app/core/services/api/account.api.service.ts");
/* harmony import */ var _core_services_authentification_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/services/authentification/authentication.service */ "./src/app/core/services/authentification/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_services_shared_global_spinner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/services/shared/global-spinner.service */ "./src/app/core/services/shared/global-spinner.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils_validatorBuilder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../utils/validatorBuilder */ "./src/app/utils/validatorBuilder.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(accountApiService, authenticationService, formBuilder, router, route, spinnerService) {
        this.accountApiService = accountApiService;
        this.authenticationService = authenticationService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.spinnerService = spinnerService;
        this.changePasswordToken = '';
        this.email = '';
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initPasswordForm();
        this.route
            .queryParams
            .subscribe(function (params) {
            _this.changePasswordToken = params['changePasswordToken'];
            _this.email = params['email'];
        });
    };
    ResetPasswordComponent.prototype.signIn = function () {
        var _this = this;
        this.spinnerService.show();
        var model = this.fillForgotPasswordModel();
        if (this.isPasswordsMatch(model)) {
            this.accountApiService.changePassword(model)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])((function () { return _this.spinnerService.hide(); })))
                .subscribe(function (authToken) {
                _this.authenticationService.logIn(authToken);
                _this.router.navigate(['home']);
            }, function () {
                // this.notificationService.error('Error', 'Error during registration');
            });
        }
        this.router.navigate(['signIn']);
    };
    ResetPasswordComponent.prototype.initPasswordForm = function () {
        this.passwordForm = this.formBuilder.group({
            password: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    this.passwordValidator
                ]
            ],
            confirmPassword: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    this.isPasswordsMatch
                ]
            ],
        });
    };
    ResetPasswordComponent.prototype.fillForgotPasswordModel = function () {
        var model = __assign({ email: this.email, changePasswordToken: this.changePasswordToken }, this.passwordForm.value);
        return model;
    };
    ResetPasswordComponent.prototype.isPasswordsMatch = function (_a) {
        var password = _a.password, confirmPassword = _a.confirmPassword;
        return password === confirmPassword;
    };
    ResetPasswordComponent.prototype.passwordValidator = function (control) {
        return Object(_utils_validatorBuilder__WEBPACK_IMPORTED_MODULE_7__["passwordValidator"])(control);
    };
    ResetPasswordComponent.prototype.cancel = function () {
        this.router.navigate(['signIn']);
    };
    ResetPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resetpassword',
            template: __webpack_require__(/*! ./resetPassword.component.html */ "./src/app/client/pages/account/changePassword/resetPassword.component.html")
        }),
        __metadata("design:paramtypes", [_core_services_api_account_api_service__WEBPACK_IMPORTED_MODULE_1__["AccountApiService"],
            _core_services_authentification_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _core_services_shared_global_spinner_service__WEBPACK_IMPORTED_MODULE_5__["GlobalSpinnerService"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/client/pages/account/models/account.model.ts":
/*!**************************************************************!*\
  !*** ./src/app/client/pages/account/models/account.model.ts ***!
  \**************************************************************/
/*! exports provided: RegistrationItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationItem", function() { return RegistrationItem; });
var RegistrationItem = /** @class */ (function () {
    function RegistrationItem(component, data) {
        this.component = component;
        this.data = data;
    }
    return RegistrationItem;
}());



/***/ }),

/***/ "./src/app/client/pages/account/registration/container.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/client/pages/account/registration/container.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <ng-template appAdHost></ng-template>\r\n</div>"

/***/ }),

/***/ "./src/app/client/pages/account/registration/container.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/client/pages/account/registration/container.component.ts ***!
  \**************************************************************************/
/*! exports provided: PageResolverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageResolverComponent", function() { return PageResolverComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _page_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page.service */ "./src/app/client/pages/account/registration/page.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _registrationState_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registrationState.service */ "./src/app/client/pages/account/registration/registrationState.service.ts");
/* harmony import */ var _core_services_shared_page_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/services/shared/page.directive */ "./src/app/core/services/shared/page.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PageResolverComponent = /** @class */ (function () {
    function PageResolverComponent(componentFactoryResolver, pageService, reistrationStateService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.pageService = pageService;
        this.reistrationStateService = reistrationStateService;
    }
    PageResolverComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.items = this.pageService.getItems();
        this.reistrationStateService.step.subscribe(function (_a) {
            var index = _a.index, data = _a.data;
            _this.loadComponent(index, data);
        });
    };
    PageResolverComponent.prototype.loadComponent = function (componentIndex, data) {
        if (Object(util__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(componentIndex)) {
            componentIndex = 0;
        }
        var item = this.items[componentIndex];
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(item.component);
        var viewContainerRef = this.adHost.viewContainerRef;
        viewContainerRef.clear();
        var componentRef = viewContainerRef.createComponent(componentFactory);
        componentRef.instance.data = data;
        componentRef.changeDetectorRef.detectChanges();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_core_services_shared_page_directive__WEBPACK_IMPORTED_MODULE_4__["PageDirective"]),
        __metadata("design:type", _core_services_shared_page_directive__WEBPACK_IMPORTED_MODULE_4__["PageDirective"])
    ], PageResolverComponent.prototype, "adHost", void 0);
    PageResolverComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-container.component',
            template: __webpack_require__(/*! ./container.component.html */ "./src/app/client/pages/account/registration/container.component.html")
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _page_service__WEBPACK_IMPORTED_MODULE_1__["PageService"],
            _registrationState_service__WEBPACK_IMPORTED_MODULE_3__["RegistrationStateService"]])
    ], PageResolverComponent);
    return PageResolverComponent;
}());



/***/ }),

/***/ "./src/app/client/pages/account/registration/page.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/client/pages/account/registration/page.service.ts ***!
  \*******************************************************************/
/*! exports provided: PageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageService", function() { return PageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _registration_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registration.component */ "./src/app/client/pages/account/registration/registration.component.ts");
/* harmony import */ var _verification_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./verification.component */ "./src/app/client/pages/account/registration/verification.component.ts");
/* harmony import */ var _password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./password.component */ "./src/app/client/pages/account/registration/password.component.ts");
/* harmony import */ var _models_account_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/account.model */ "./src/app/client/pages/account/models/account.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PageService = /** @class */ (function () {
    function PageService() {
    }
    PageService.prototype.getItems = function () {
        return [
            new _models_account_model__WEBPACK_IMPORTED_MODULE_4__["RegistrationItem"](_registration_component__WEBPACK_IMPORTED_MODULE_1__["RegistrationComponent"], null),
            new _models_account_model__WEBPACK_IMPORTED_MODULE_4__["RegistrationItem"](_verification_component__WEBPACK_IMPORTED_MODULE_2__["VerificationComponent"], null),
            new _models_account_model__WEBPACK_IMPORTED_MODULE_4__["RegistrationItem"](_password_component__WEBPACK_IMPORTED_MODULE_3__["RegistrationPasswordComponent"], null)
        ];
    };
    PageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], PageService);
    return PageService;
}());



/***/ }),

/***/ "./src/app/client/pages/account/registration/password.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/client/pages/account/registration/password.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <aside class=\"authorization-aside\">\r\n        <div class=\"authorization-aside__form\">\r\n            <h2 class=\"authorization-aside__title h2\"><strong>Add password</strong></h2>\r\n            <form [formGroup]=\"passwordForm\" class=\"authorization-form\">\r\n                <div class=\"authorization-form__group\">\r\n                    <div class=\"authorization-form__label\">\r\n                        Use next safety rules to create password minimum complexity should be 8 characters,\r\n                        and at least one lowercase, uppercase,\r\n                        number and special character.\r\n                    </div>\r\n                </div>\r\n                <div class=\"authorization-form__group\">\r\n                    <label class=\"authorization-form__label\">Password</label>\r\n                    <input type=\"password\" placeholder=\"Password\" formControlName=\"password\" class=\"authorization-form__input\"/>\r\n                </div>\r\n                <div class=\"authorization-form__group\">\r\n                    <label class=\"authorization-form__label\">Repeat password</label>\r\n                    <input type=\"password\" placeholder=\"Repeat password\" formControlName=\"confirmPassword\" class=\"authorization-form__input\"/>\r\n                </div>\r\n                <div class=\"authorization-form__button-group\">\r\n                    <button class=\"button button_medium button_light-blue authorization-form__button\" (click)=\"cancel()\">Cancel</button>\r\n                    <button class=\"button button_medium button_white-filled authorization-form__button\" (click)=\"addAndSignIn()\">Add and Sign In</button>\r\n                </div>\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\"\r\n                    class=\"account-creation-progress step-3\"\r\n                    viewBox=\"0 0 331.9 24\">\r\n                    <circle class=\"step step_1\" style=\"fill: currentColor;\" cx=\"4\" cy=\"12\" r=\"4\"/>\r\n                    <g class=\"step step_2\">\r\n                        <path style=\"stroke: currentColor;\" d=\"M18.5 11.5h4v1h-4v-1zm68 1h-4v-1h4v1zm-8 0h-4v-1h4v1zm-8 0h-4v-1h4v1zm-8 0h-4v-1h4v1zm-8 0h-4v-1h4v1zm-8 0h-4v-1h4v1zm-8 0h-4v-1h4v1zm-8 0h-4v-1h4v1z\"/>\r\n                        <circle style=\"fill: currentColor;\" cx=\"107.3\" cy=\"12\" r=\"4\"/>\r\n                    </g>\r\n                    <g class=\"step step_3\">\r\n                        <path style=\"stroke: currentColor;\" d=\"M189.7 12.5h-4v-1h4v1zm-8 0h-4v-1h4v1zm-8 0h-4v-1h4v1zm-8 0h-3.9v-1h3.9v1zm-7.9 0h-4v-1h4v1zm-8 0h-4v-1h4v1zm-8 0h-4v-1h4v1zm-8 0h-4v-1h4v1zm-8 0h-4v-1h4v1z\"/>\r\n                        <circle style=\"fill: currentColor;\" cx=\"209.8\" cy=\"12\" r=\"4\"/>\r\n                    </g>\r\n                    <g class=\"step step_4\">\r\n                        <path style=\"stroke: currentColor;\" d=\"M292.3 12.5h-4v-1h4v1zm-8 0h-4v-1h4v1zm-8 0h-4v-1h4v1zm-8 0h-4v-1h4v1zm-8 0h-4v-1h4v1zm-8 0h-4v-1h4v1zm-8 0h-4v-1h4v1zm-8 0h-4v-1h4v1zm-8 0h-4v-1h4v1z\"/>\r\n                        <path style=\"fill: currentColor;\"\r\n                            d=\"M331.9 12c0-6.6-5.4-12-12-12s-12 5.4-12 12c0 3.4 1.4 6.6 3.9 8.9l.4.3s.1 0 .1.1c.2.2.4.3.6.5l.2.2c.2.2.5.3.7.5l.2.1c.3.2.5.3.8.4h.1c.9.4 1.9.7 2.9.9h.1c.3.1.6.1 1 .1h2.2c.3 0 .6-.1 1-.1h.1c1-.2 1.9-.5 2.9-.9h.1c.3-.1.5-.3.8-.4l.2-.1c.2-.1.5-.3.7-.4.1-.1.2-.1.2-.2.2-.1.4-.3.6-.4l.1-.1.4-.3c2.3-2.5 3.7-5.7 3.7-9.1zm-23.1 0c0-6.1 5-11.1 11.1-11.1S331 5.9 331 12c0 3.2-1.4 6.2-3.7 8.3-.1-.1-.3-.2-.4-.2l-3.7-1.8c-.3-.2-.5-.5-.5-.9v-1.3c.1-.1.2-.2.3-.4.5-.7.9-1.4 1.1-2.2.6-.3.9-.8.9-1.4v-1.5c0-.4-.1-.7-.4-1v-2c.1-.9-.2-1.8-.8-2.6-1-1-2.4-1.5-3.9-1.4-1.4-.1-2.8.4-3.9 1.4-.6.7-.9 1.6-.8 2.6v2c-.2.3-.4.7-.4 1v1.5c0 .5.2.9.6 1.2.3 1 .7 2 1.4 2.8v1.3c0 .4-.2.7-.5.9l-3.5 1.9c-.1.1-.2.1-.3.2-2.4-2.2-3.7-5.2-3.7-8.4zm17.7 9c-.2.1-.3.2-.5.3-.1 0-.1.1-.2.1-.2.1-.4.2-.6.4l-.1.1c-.5.3-1 .5-1.5.6h-.1c-.3.1-.6.2-.8.2-.3.1-.6.1-.9.2-.3 0-.5.1-.8.1h-1.8c-.3 0-.6-.1-.8-.1-.6-.1-1.1-.2-1.7-.4h-.1c-.3-.1-.5-.2-.8-.3s-.5-.2-.7-.4h-.1c-.2-.1-.4-.2-.7-.4l-.2-.1c-.2-.1-.4-.3-.6-.4h-.1l3.5-1.9c.6-.3 1-.9 1-1.6v-1.6l-.1-.1c-.6-.8-1.1-1.7-1.3-2.7v-.2l-.1-.1c-.2-.1-.3-.4-.3-.6v-1.5c0-.2.1-.4.2-.5l.1-.1V7.5c-.1-.7.2-1.4.6-1.9.9-.8 2-1.2 3.2-1.1 1.2-.1 2.3.3 3.2 1.1.4.5.7 1.2.6 1.9V10l.1.1c.2.1.2.3.2.5v1.5c0 .3-.2.6-.5.7l-.2.1-.1.2c-.2.8-.6 1.5-1.1 2.2-.1.2-.2.3-.3.4l-.1.1v1.6c0 .7.4 1.3 1 1.6l3.7 1.8h.1c-.2.1-.3.2-.3.2z\"/>\r\n                    </g>\r\n                </svg>\r\n            </form>\r\n        </div>\r\n    </aside>\r\n</section>"

/***/ }),

/***/ "./src/app/client/pages/account/registration/password.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/client/pages/account/registration/password.component.ts ***!
  \*************************************************************************/
/*! exports provided: RegistrationPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationPasswordComponent", function() { return RegistrationPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_api_account_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/services/api/account.api.service */ "./src/app/core/services/api/account.api.service.ts");
/* harmony import */ var _core_services_authentification_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/services/authentification/authentication.service */ "./src/app/core/services/authentification/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_services_shared_global_spinner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/services/shared/global-spinner.service */ "./src/app/core/services/shared/global-spinner.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils_validatorBuilder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../utils/validatorBuilder */ "./src/app/utils/validatorBuilder.ts");
/* harmony import */ var _registrationState_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./registrationState.service */ "./src/app/client/pages/account/registration/registrationState.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var RegistrationPasswordComponent = /** @class */ (function () {
    function RegistrationPasswordComponent(accountApiService, authenticationService, formBuilder, router, spinnerService, registrationStateService) {
        this.accountApiService = accountApiService;
        this.authenticationService = authenticationService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.spinnerService = spinnerService;
        this.registrationStateService = registrationStateService;
    }
    RegistrationPasswordComponent.prototype.ngOnInit = function () {
        this.initPasswordForm();
    };
    RegistrationPasswordComponent.prototype.addAndSignIn = function () {
        var _this = this;
        this.spinnerService.show();
        var model = this.fillPasswordModel();
        if (this.isPasswordsMatch(model)) {
            this.accountApiService.setPassword(this.fillPasswordModel())
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])((function () { return _this.spinnerService.hide(); })))
                .subscribe(function (authToken) {
                _this.authenticationService.logIn(authToken);
                // TODO: Fix redirect to the right page
                _this.router.navigate(['home']);
            }, function () {
                // this.notificationService.error('Error', 'Error during registration');
            });
            this.router.navigate(['home/signIn']);
        }
    };
    RegistrationPasswordComponent.prototype.initPasswordForm = function () {
        this.passwordForm = this.formBuilder.group({
            password: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    this.passwordValidator
                ]
            ],
            confirmPassword: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    this.passwordValidator,
                    this.isPasswordsMatch
                ]
            ],
        });
    };
    RegistrationPasswordComponent.prototype.fillPasswordModel = function () {
        var model = __assign({ email: this.data.model.email, phone: this.data.model.phone, passwordToken: this.data.code.token }, this.passwordForm.value);
        return model;
    };
    RegistrationPasswordComponent.prototype.isPasswordsMatch = function (_a) {
        var password = _a.password, confirmPassword = _a.confirmPassword;
        return password === confirmPassword;
    };
    RegistrationPasswordComponent.prototype.passwordValidator = function (control) {
        return Object(_utils_validatorBuilder__WEBPACK_IMPORTED_MODULE_7__["passwordValidator"])(control);
    };
    RegistrationPasswordComponent.prototype.cancel = function () {
        this.registrationStateService.nextStep(0, null);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RegistrationPasswordComponent.prototype, "data", void 0);
    RegistrationPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-password',
            template: __webpack_require__(/*! ./password.component.html */ "./src/app/client/pages/account/registration/password.component.html"),
            styles: [__webpack_require__(/*! ../signIn/signIn.component.scss */ "./src/app/client/pages/account/signIn/signIn.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services_api_account_api_service__WEBPACK_IMPORTED_MODULE_1__["AccountApiService"],
            _core_services_authentification_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _core_services_shared_global_spinner_service__WEBPACK_IMPORTED_MODULE_5__["GlobalSpinnerService"],
            _registrationState_service__WEBPACK_IMPORTED_MODULE_8__["RegistrationStateService"]])
    ], RegistrationPasswordComponent);
    return RegistrationPasswordComponent;
}());



/***/ }),

/***/ "./src/app/client/pages/account/registration/registration.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/client/pages/account/registration/registration.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <aside class=\"authorization-aside\">\r\n    <div class=\"authorization-aside__form\">\r\n      <h2 class=\"authorization-aside__title h2\"><strong>Create new account</strong></h2>\r\n\r\n      <form [formGroup]=\"initialForm\" class=\"authorization-form\">\r\n        <div class=\"authorization-form__group\">\r\n          <label class=\"authorization-form__label\" for=\"email\">Email</label>\r\n          <input class=\"authorization-form__input\"\r\n                 id=\"email\"\r\n                 type=\"email\"\r\n                 placeholder=\"Email\"\r\n                 formControlName=\"email\">\r\n          <div class=\"authorization-form__validation-message\"\r\n               *ngIf=\"isControlInvalid('email')\">\r\n            test validation result\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"authorization-form__group\">\r\n          <label class=\"authorization-form__label\" for=\"password\">Phone</label>\r\n          <input class=\"authorization-form__input\" placeholder=\"+61 7 ____ ____\" type=\"phone\" [textMask]=\"{mask: phoneMask}\" formControlName=\"phone\" id=\"phone\"/>\r\n          <div class=\"authorization-form__validation-message\"\r\n               *ngIf=\"isControlInvalid('phone')\">\r\n            test validation result\r\n          </div>\r\n        </div>\r\n        <div class=\"authorization-form__group authorization-form__group_checkbox\">\r\n          <input type=\"checkbox\" [formControl]=\"isChosen\" id=\"IAgree\">\r\n          <label class=\"authorization-form__label\" for=\"IAgree\">I agree with</label>\r\n          <a class=\"authorization-form__policy-link\" (click)=\"termsOfUse()\">Personal data politics</a>\r\n        </div>\r\n        <div class=\"authorization-form__button-group\">\r\n          <button class=\"button button_medium button_light-blue authorization-form__button\" (click)=\"cancel()\">Cancel</button>\r\n          <button class=\"button button_medium button_white-filled authorization-form__button\" (click)=\"showVerificationScreen()\" [disabled]=\"noneSelected()\">Continue</button>\r\n        </div>\r\n      </form>\r\n      <svg xmlns=\"http://www.w3.org/2000/svg\"\r\n           class=\"account-creation-progress\"\r\n           viewBox=\"0 0 331.9 24\">\r\n        <circle class=\"step step_1\" style=\"fill: currentColor;\" cx=\"4\" cy=\"12\" r=\"4\"/>\r\n        <g class=\"step step_2\">\r\n          <path style=\"stroke: currentColor;\" d=\"M18.5 11.5h4v1h-4v-1zm68 1h-4v-1h4v1zm-8 0h-4v-1h4v1zm-8 0h-4v-1h4v1zm-8 0h-4v-1h4v1zm-8 0h-4v-1h4v1zm-8 0h-4v-1h4v1zm-8 0h-4v-1h4v1zm-8 0h-4v-1h4v1z\"/>\r\n          <circle style=\"fill: currentColor;\" cx=\"107.3\" cy=\"12\" r=\"4\"/>\r\n        </g>\r\n        <g class=\"step step_3\">\r\n          <path style=\"stroke: currentColor;\" d=\"M189.7 12.5h-4v-1h4v1zm-8 0h-4v-1h4v1zm-8 0h-4v-1h4v1zm-8 0h-3.9v-1h3.9v1zm-7.9 0h-4v-1h4v1zm-8 0h-4v-1h4v1zm-8 0h-4v-1h4v1zm-8 0h-4v-1h4v1zm-8 0h-4v-1h4v1z\"/>\r\n          <circle style=\"fill: currentColor;\" cx=\"209.8\" cy=\"12\" r=\"4\"/>\r\n        </g>\r\n        <g class=\"step step_4\">\r\n          <path style=\"stroke: currentColor;\" d=\"M292.3 12.5h-4v-1h4v1zm-8 0h-4v-1h4v1zm-8 0h-4v-1h4v1zm-8 0h-4v-1h4v1zm-8 0h-4v-1h4v1zm-8 0h-4v-1h4v1zm-8 0h-4v-1h4v1zm-8 0h-4v-1h4v1zm-8 0h-4v-1h4v1z\"/>\r\n          <path style=\"fill: currentColor;\"\r\n                d=\"M331.9 12c0-6.6-5.4-12-12-12s-12 5.4-12 12c0 3.4 1.4 6.6 3.9 8.9l.4.3s.1 0 .1.1c.2.2.4.3.6.5l.2.2c.2.2.5.3.7.5l.2.1c.3.2.5.3.8.4h.1c.9.4 1.9.7 2.9.9h.1c.3.1.6.1 1 .1h2.2c.3 0 .6-.1 1-.1h.1c1-.2 1.9-.5 2.9-.9h.1c.3-.1.5-.3.8-.4l.2-.1c.2-.1.5-.3.7-.4.1-.1.2-.1.2-.2.2-.1.4-.3.6-.4l.1-.1.4-.3c2.3-2.5 3.7-5.7 3.7-9.1zm-23.1 0c0-6.1 5-11.1 11.1-11.1S331 5.9 331 12c0 3.2-1.4 6.2-3.7 8.3-.1-.1-.3-.2-.4-.2l-3.7-1.8c-.3-.2-.5-.5-.5-.9v-1.3c.1-.1.2-.2.3-.4.5-.7.9-1.4 1.1-2.2.6-.3.9-.8.9-1.4v-1.5c0-.4-.1-.7-.4-1v-2c.1-.9-.2-1.8-.8-2.6-1-1-2.4-1.5-3.9-1.4-1.4-.1-2.8.4-3.9 1.4-.6.7-.9 1.6-.8 2.6v2c-.2.3-.4.7-.4 1v1.5c0 .5.2.9.6 1.2.3 1 .7 2 1.4 2.8v1.3c0 .4-.2.7-.5.9l-3.5 1.9c-.1.1-.2.1-.3.2-2.4-2.2-3.7-5.2-3.7-8.4zm17.7 9c-.2.1-.3.2-.5.3-.1 0-.1.1-.2.1-.2.1-.4.2-.6.4l-.1.1c-.5.3-1 .5-1.5.6h-.1c-.3.1-.6.2-.8.2-.3.1-.6.1-.9.2-.3 0-.5.1-.8.1h-1.8c-.3 0-.6-.1-.8-.1-.6-.1-1.1-.2-1.7-.4h-.1c-.3-.1-.5-.2-.8-.3s-.5-.2-.7-.4h-.1c-.2-.1-.4-.2-.7-.4l-.2-.1c-.2-.1-.4-.3-.6-.4h-.1l3.5-1.9c.6-.3 1-.9 1-1.6v-1.6l-.1-.1c-.6-.8-1.1-1.7-1.3-2.7v-.2l-.1-.1c-.2-.1-.3-.4-.3-.6v-1.5c0-.2.1-.4.2-.5l.1-.1V7.5c-.1-.7.2-1.4.6-1.9.9-.8 2-1.2 3.2-1.1 1.2-.1 2.3.3 3.2 1.1.4.5.7 1.2.6 1.9V10l.1.1c.2.1.2.3.2.5v1.5c0 .3-.2.6-.5.7l-.2.1-.1.2c-.2.8-.6 1.5-1.1 2.2-.1.2-.2.3-.3.4l-.1.1v1.6c0 .7.4 1.3 1 1.6l3.7 1.8h.1c-.2.1-.3.2-.3.2z\"/>\r\n        </g>\r\n      </svg>\r\n    </div>\r\n  </aside>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/client/pages/account/registration/registration.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/client/pages/account/registration/registration.component.ts ***!
  \*****************************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_services_authentification_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/services/authentification/authentication.service */ "./src/app/core/services/authentification/authentication.service.ts");
/* harmony import */ var _core_services_api_account_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/services/api/account.api.service */ "./src/app/core/services/api/account.api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_shared_global_spinner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/services/shared/global-spinner.service */ "./src/app/core/services/shared/global-spinner.service.ts");
/* harmony import */ var _utils_validatorBuilder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../utils/validatorBuilder */ "./src/app/utils/validatorBuilder.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _core_components_dialog_alert_alert_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/components/dialog/alert/alert.component */ "./src/app/core/components/dialog/alert/alert.component.ts");
/* harmony import */ var _registrationState_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./registrationState.service */ "./src/app/client/pages/account/registration/registrationState.service.ts");
/* harmony import */ var _core_components_dialog_privacy_politics_privacy_politics_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../core/components/dialog/privacy-politics/privacy-politics.component */ "./src/app/core/components/dialog/privacy-politics/privacy-politics.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(accountApiService, authenticationService, formBuilder, router, spinnerService, reistrationStateService, dialog, pageStateService) {
        this.accountApiService = accountApiService;
        this.authenticationService = authenticationService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.spinnerService = spinnerService;
        this.reistrationStateService = reistrationStateService;
        this.dialog = dialog;
        this.pageStateService = pageStateService;
        this.phoneMask = _utils_validatorBuilder__WEBPACK_IMPORTED_MODULE_6__["phoneMask"];
        this.isChosen = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false);
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    RegistrationComponent.prototype.initForm = function () {
        this.initialForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _utils_validatorBuilder__WEBPACK_IMPORTED_MODULE_6__["emailValidator"]]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    };
    RegistrationComponent.prototype.fillCommonModel = function () {
        this.data = this.initialForm.value;
        return this.initialForm.value;
    };
    RegistrationComponent.prototype.isControlInvalid = function (controlName) {
        var control = this.initialForm.controls[controlName];
        return control.invalid && control.touched;
    };
    RegistrationComponent.prototype.noneSelected = function () {
        return (!this.isChosen.value || this.initialForm.invalid);
    };
    RegistrationComponent.prototype.showVerificationScreen = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_core_components_dialog_alert_alert_component__WEBPACK_IMPORTED_MODULE_9__["AlertComponent"], {
            autoFocus: false,
            data: {
                title: 'Check your phone!',
                message: 'Verification code was recent.'
            },
            panelClass: 'dialog-container'
        });
        dialogRef.afterClosed().subscribe(function () {
            _this.spinnerService.show();
            var controls = _this.initialForm.controls;
            if (_this.initialForm.invalid) {
                Object.keys(controls)
                    .forEach(function (controlName) { return controls[controlName].markAsTouched(); });
                return;
            }
            _this.accountApiService.register(_this.fillCommonModel())
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () { return _this.spinnerService.hide(); }))
                .subscribe(function (code) {
                _this.pageStateService.nextStep(1, _this.data);
            }, function () {
                // this.notificationService.error('Error', 'Error logging in');
            });
        });
    };
    RegistrationComponent.prototype.cancel = function () {
        this.router.navigate(['home']);
    };
    RegistrationComponent.prototype.termsOfUse = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_core_components_dialog_privacy_politics_privacy_politics_component__WEBPACK_IMPORTED_MODULE_11__["PrivacyPoliticsComponent"], {
            autoFocus: false,
            data: {
                title: 'Personal data politics',
                // tslint:disable-next-line:max-line-length
                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites.'
            },
            panelClass: 'privacy-politics-dialog-container'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.isChosen.setValue(result);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RegistrationComponent.prototype, "data", void 0);
    RegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/client/pages/account/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ../signIn/signIn.component.scss */ "./src/app/client/pages/account/signIn/signIn.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services_api_account_api_service__WEBPACK_IMPORTED_MODULE_3__["AccountApiService"],
            _core_services_authentification_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _core_services_shared_global_spinner_service__WEBPACK_IMPORTED_MODULE_5__["GlobalSpinnerService"],
            _registrationState_service__WEBPACK_IMPORTED_MODULE_10__["RegistrationStateService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"],
            _registrationState_service__WEBPACK_IMPORTED_MODULE_10__["RegistrationStateService"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/client/pages/account/registration/registrationState.service.ts":
/*!********************************************************************************!*\
  !*** ./src/app/client/pages/account/registration/registrationState.service.ts ***!
  \********************************************************************************/
/*! exports provided: RegistrationStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationStateService", function() { return RegistrationStateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var RegistrationStateService = /** @class */ (function () {
    function RegistrationStateService() {
        this.currentStep = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({ index: 0, data: null });
    }
    Object.defineProperty(RegistrationStateService.prototype, "step", {
        get: function () {
            return this.currentStep.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    RegistrationStateService.prototype.nextStep = function (index, data) {
        this.currentStep.next({ index: index, data: data });
    };
    RegistrationStateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], RegistrationStateService);
    return RegistrationStateService;
}());



/***/ }),

/***/ "./src/app/client/pages/account/registration/verification.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/client/pages/account/registration/verification.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <aside class=\"authorization-aside\">\r\n        <div class=\"authorization-aside__form\">\r\n            <h2 class=\"authorization-aside__title h2\"><strong>Verificate your phone</strong></h2>\r\n            <div class=\"authorization-form__group\">\r\n                <div class=\"authorization-form__label\">The code was sent to {{data.phone}}. You may to <a class=\"authorization-form__links\" (click)=\"resendCode()\">Resend code</a></div>\r\n            </div>\r\n            <div class=\"authorization-form__group\">\r\n                <label class=\"authorization-form__label\">Verification code</label>\r\n                <input [formControl]=\"verificationCode\" class=\"authorization-form__input\"/>\r\n            </div>\r\n            <div class=\"authorization-form__button-group\">\r\n                <button (click)=\"goBack()\" class=\"button button_medium button_light-blue authorization-form__button\">Back</button>\r\n                <button (click)=\"verificate()\" class=\"button button_medium button_white-filled authorization-form__button\">Verificate</button>\r\n            </div>\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\"\r\n                class=\"account-creation-progress step-2\"\r\n                viewBox=\"0 0 331.9 24\">\r\n                <circle class=\"step step_1\" style=\"fill: currentColor;\" cx=\"4\" cy=\"12\" r=\"4\"/>\r\n                <g class=\"step step_2\">\r\n                    <path style=\"stroke: currentColor;\" d=\"M18.5 11.5h4v1h-4v-1zm68 1h-4v-1h4v1zm-8 0h-4v-1h4v1zm-8 0h-4v-1h4v1zm-8 0h-4v-1h4v1zm-8 0h-4v-1h4v1zm-8 0h-4v-1h4v1zm-8 0h-4v-1h4v1zm-8 0h-4v-1h4v1z\"/>\r\n                    <circle style=\"fill: currentColor;\" cx=\"107.3\" cy=\"12\" r=\"4\"/>\r\n                </g>\r\n                <g class=\"step step_3\">\r\n                    <path style=\"stroke: currentColor;\" d=\"M189.7 12.5h-4v-1h4v1zm-8 0h-4v-1h4v1zm-8 0h-4v-1h4v1zm-8 0h-3.9v-1h3.9v1zm-7.9 0h-4v-1h4v1zm-8 0h-4v-1h4v1zm-8 0h-4v-1h4v1zm-8 0h-4v-1h4v1zm-8 0h-4v-1h4v1z\"/>\r\n                    <circle style=\"fill: currentColor;\" cx=\"209.8\" cy=\"12\" r=\"4\"/>\r\n                </g>\r\n                <g class=\"step step_4\">\r\n                    <path style=\"stroke: currentColor;\" d=\"M292.3 12.5h-4v-1h4v1zm-8 0h-4v-1h4v1zm-8 0h-4v-1h4v1zm-8 0h-4v-1h4v1zm-8 0h-4v-1h4v1zm-8 0h-4v-1h4v1zm-8 0h-4v-1h4v1zm-8 0h-4v-1h4v1zm-8 0h-4v-1h4v1z\"/>\r\n                    <path style=\"fill: currentColor;\"\r\n                        d=\"M331.9 12c0-6.6-5.4-12-12-12s-12 5.4-12 12c0 3.4 1.4 6.6 3.9 8.9l.4.3s.1 0 .1.1c.2.2.4.3.6.5l.2.2c.2.2.5.3.7.5l.2.1c.3.2.5.3.8.4h.1c.9.4 1.9.7 2.9.9h.1c.3.1.6.1 1 .1h2.2c.3 0 .6-.1 1-.1h.1c1-.2 1.9-.5 2.9-.9h.1c.3-.1.5-.3.8-.4l.2-.1c.2-.1.5-.3.7-.4.1-.1.2-.1.2-.2.2-.1.4-.3.6-.4l.1-.1.4-.3c2.3-2.5 3.7-5.7 3.7-9.1zm-23.1 0c0-6.1 5-11.1 11.1-11.1S331 5.9 331 12c0 3.2-1.4 6.2-3.7 8.3-.1-.1-.3-.2-.4-.2l-3.7-1.8c-.3-.2-.5-.5-.5-.9v-1.3c.1-.1.2-.2.3-.4.5-.7.9-1.4 1.1-2.2.6-.3.9-.8.9-1.4v-1.5c0-.4-.1-.7-.4-1v-2c.1-.9-.2-1.8-.8-2.6-1-1-2.4-1.5-3.9-1.4-1.4-.1-2.8.4-3.9 1.4-.6.7-.9 1.6-.8 2.6v2c-.2.3-.4.7-.4 1v1.5c0 .5.2.9.6 1.2.3 1 .7 2 1.4 2.8v1.3c0 .4-.2.7-.5.9l-3.5 1.9c-.1.1-.2.1-.3.2-2.4-2.2-3.7-5.2-3.7-8.4zm17.7 9c-.2.1-.3.2-.5.3-.1 0-.1.1-.2.1-.2.1-.4.2-.6.4l-.1.1c-.5.3-1 .5-1.5.6h-.1c-.3.1-.6.2-.8.2-.3.1-.6.1-.9.2-.3 0-.5.1-.8.1h-1.8c-.3 0-.6-.1-.8-.1-.6-.1-1.1-.2-1.7-.4h-.1c-.3-.1-.5-.2-.8-.3s-.5-.2-.7-.4h-.1c-.2-.1-.4-.2-.7-.4l-.2-.1c-.2-.1-.4-.3-.6-.4h-.1l3.5-1.9c.6-.3 1-.9 1-1.6v-1.6l-.1-.1c-.6-.8-1.1-1.7-1.3-2.7v-.2l-.1-.1c-.2-.1-.3-.4-.3-.6v-1.5c0-.2.1-.4.2-.5l.1-.1V7.5c-.1-.7.2-1.4.6-1.9.9-.8 2-1.2 3.2-1.1 1.2-.1 2.3.3 3.2 1.1.4.5.7 1.2.6 1.9V10l.1.1c.2.1.2.3.2.5v1.5c0 .3-.2.6-.5.7l-.2.1-.1.2c-.2.8-.6 1.5-1.1 2.2-.1.2-.2.3-.3.4l-.1.1v1.6c0 .7.4 1.3 1 1.6l3.7 1.8h.1c-.2.1-.3.2-.3.2z\"/>\r\n                </g>\r\n            </svg>\r\n        </div>\r\n    </aside>\r\n</section>"

/***/ }),

/***/ "./src/app/client/pages/account/registration/verification.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/client/pages/account/registration/verification.component.ts ***!
  \*****************************************************************************/
/*! exports provided: VerificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationComponent", function() { return VerificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_api_account_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/services/api/account.api.service */ "./src/app/core/services/api/account.api.service.ts");
/* harmony import */ var _core_services_authentification_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/services/authentification/authentication.service */ "./src/app/core/services/authentification/authentication.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_services_shared_global_spinner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/services/shared/global-spinner.service */ "./src/app/core/services/shared/global-spinner.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _registrationState_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registrationState.service */ "./src/app/client/pages/account/registration/registrationState.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var VerificationComponent = /** @class */ (function () {
    function VerificationComponent(accountApiService, authenticationService, formBuilder, spinnerService, registrationStateService) {
        this.accountApiService = accountApiService;
        this.authenticationService = authenticationService;
        this.formBuilder = formBuilder;
        this.spinnerService = spinnerService;
        this.registrationStateService = registrationStateService;
        this.verificationCode = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
    }
    VerificationComponent.prototype.resendCode = function () {
        var _this = this;
        this.spinnerService.show();
        this.accountApiService.resendCode(this.data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.spinnerService.hide(); }))
            .subscribe(function (code) {
        }, function () {
            // this.notificationService.error('Error', 'Error logging in');
        });
    };
    VerificationComponent.prototype.verificate = function () {
        var _this = this;
        var model = {
            email: this.data.email,
            phone: this.data.phone,
            code: this.verificationCode.value
        };
        this.spinnerService.show();
        this.accountApiService.confirmPhone(model)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.spinnerService.hide(); }))
            .subscribe(function (code) {
            _this.registrationStateService.nextStep(2, { model: model, code: code });
        }, function () {
            // this.notificationService.error('Error', 'Error logging in');
        });
    };
    VerificationComponent.prototype.goBack = function () {
        this.registrationStateService.nextStep(0, null);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], VerificationComponent.prototype, "data", void 0);
    VerificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-verification',
            template: __webpack_require__(/*! ./verification.component.html */ "./src/app/client/pages/account/registration/verification.component.html"),
            styles: [__webpack_require__(/*! ../signIn/signIn.component.scss */ "./src/app/client/pages/account/signIn/signIn.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services_api_account_api_service__WEBPACK_IMPORTED_MODULE_1__["AccountApiService"],
            _core_services_authentification_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _core_services_shared_global_spinner_service__WEBPACK_IMPORTED_MODULE_4__["GlobalSpinnerService"],
            _registrationState_service__WEBPACK_IMPORTED_MODULE_6__["RegistrationStateService"]])
    ], VerificationComponent);
    return VerificationComponent;
}());



/***/ }),

/***/ "./src/app/client/pages/account/signIn/signIn.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/client/pages/account/signIn/signIn.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a href=\"/\" class=\"logo\">\r\n  <img class=\"logo__img\" src=\"/assets/img/logo.svg\" alt=\"KordaMentha logo\">\r\n</a>\r\n\r\n<section>\r\n  <!-- <div class=\"authorization__content-wrapper\">\r\n    <div class=\"authorization__content\">\r\n      <h1 class=\"authorization__title h1\">Lodge a Proof of Debt Form</h1>\r\n      <div class=\"authorization__text\">\r\n        <p>Content here, content here. Lorem Ipsum is simply dummy text of printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.\r\n        </p>\r\n        <p>When an unknown printer took a galley specimen book.</p>\r\n      </div>\r\n    </div>\r\n  </div> -->\r\n  <aside class=\"authorization-aside\">\r\n    <div class=\"authorization-aside__form\">\r\n      <h2 class=\"authorization-aside__title h2\"><strong>Sign in</strong></h2>\r\n      <form [formGroup]=\"createForm\" class=\"authorization-form\">\r\n        <div class=\"authorization-form__group\">\r\n          <label class=\"authorization-form__label\" for=\"email\">Email</label>\r\n          <input class=\"authorization-form__input\" id=\"email\" formControlName=\"email\" placeholder=\"Email\" type=\"email\"/>\r\n          <div *ngIf=\"isControlInvalid('email')\">email validation result</div>\r\n        </div>\r\n        <div class=\"authorization-form__group\">\r\n          <label class=\"authorization-form__label\" for=\"password\">Password</label>\r\n          <input class=\"authorization-form__input\" placeholder=\"Enter your password\" type=\"password\" formControlName=\"password\" id=\"password\"/>\r\n        </div>\r\n        <div class=\"authorization-form__group authorization-form__group_checkbox\">\r\n          <input type=\"checkbox\" formControlName=\"rememberMe\" id=\"rememberMe\">\r\n          <label class=\"authorization-form__label\" for=\"rememberMe\">Remember me</label>\r\n        </div>\r\n        <div class=\"authorization-form__button-group\">\r\n          <button class=\"button button_medium button_light-blue authorization-form__button\" type=\"reset\" (click)=\"cancel()\">Cancel</button>\r\n          <button class=\"button button_medium button_white-filled authorization-form__button\" (click)=\"login()\" [disabled]=\"createForm.invalid\">Sign in</button>\r\n        </div>\r\n\r\n        <div class=\"authorization-form__bottom-links\">\r\n          <a routerLink=\"/provideEmail\" class=\"authorization-form__links\">Forgot my password</a>\r\n          <a routerLink=\"/home/register\" class=\"authorization-form__links\">Create new account</a>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </aside>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/client/pages/account/signIn/signIn.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/client/pages/account/signIn/signIn.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".authorization {\n  display: flex;\n  flex-direction: column;\n  color: white;\n  background-image: url(\"/../assets/img/bg-main.png\");\n  flex-wrap: wrap; }\n  @media (min-width: 992px) {\n    .authorization {\n      flex-direction: row;\n      min-height: 100vh;\n      align-items: stretch;\n      flex-wrap: nowrap; } }\n  .authorization__content-wrapper {\n    width: 100%;\n    padding: 104px 20px 56px;\n    background-color: rgba(0, 0, 0, 0.3);\n    -webkit-filter: blur(5px);\n            filter: blur(5px); }\n  @media (min-width: 768px) {\n      .authorization__content-wrapper {\n        height: 633px; } }\n  @media (min-width: 768px) and (max-width: 1199px) {\n      .authorization__content-wrapper {\n        padding: 188px 70px 110px; } }\n  @media (min-width: 992px) {\n      .authorization__content-wrapper {\n        width: calc(100% - 38.52%);\n        height: auto; } }\n  @media (min-width: 1200px) {\n      .authorization__content-wrapper {\n        padding: 281px 20px 20px 110px; } }\n  .authorization__content {\n    width: 100%;\n    max-width: 800px; }\n  .authorization__title {\n    margin-bottom: 40px; }\n  @media (min-width: 768px) {\n      .authorization__title {\n        margin-bottom: 54px; } }\n  .authorization__text p {\n    font: 300 normal 20px / 1.5 \"Weissenhof Grotesk\"; }\n  @media (min-width: 1200px) {\n      .authorization__text p {\n        font: 300 normal 24px / 1.33333333 \"Weissenhof Grotesk\"; } }\n  .authorization__text p:not(:last-child) {\n      margin-bottom: 32px; }\n  .aside-pseudo-element {\n  display: flex; }\n  .aside-pseudo-element:after {\n    display: block;\n    width: 38.52%;\n    background-color: #333e48; }\n  @media (min-width: 992px) {\n      .aside-pseudo-element:after {\n        content: ''; } }\n  .authorization-page-container {\n  max-width: 528px;\n  margin-right: auto;\n  margin-left: auto;\n  padding-right: 20px;\n  padding-left: 20px; }\n  @media (min-width: 768px) and (max-width: 991px) {\n    .authorization-page-container {\n      max-width: 644px; } }\n  @media (min-width: 992px) and (max-width: 1199px) {\n    .authorization-page-container {\n      max-width: 528px; } }\n  @media (min-width: 1200px) {\n    .authorization-page-container {\n      max-width: 992px; } }\n  .authorization-page-row {\n  display: flex;\n  margin-right: -12px;\n  margin-left: -12px;\n  flex-wrap: wrap; }\n  .authorization-page-item {\n  width: calc(100% - 12px * 2);\n  margin-right: 12px;\n  margin-left: 12px; }\n  @media (min-width: 768px) {\n    .authorization-page-item {\n      width: calc(50% - 12px * 2); } }\n  .short-guide__container {\n  width: 100%;\n  padding-top: 56px;\n  padding-bottom: 56px; }\n  @media (min-width: 992px) {\n    .short-guide__container {\n      width: calc(100% - 38.52%); } }\n  @media (min-width: 1200px) {\n    .short-guide__container {\n      padding-top: 112px;\n      padding-bottom: 91px; } }\n  .short-guide__title {\n  margin-bottom: 26px; }\n  @media (min-width: 1200px) {\n    .short-guide__title {\n      margin-bottom: 39px; } }\n  .short-guide__list {\n  counter-reset: list; }\n  .short-guide__item {\n  position: relative;\n  margin-bottom: 24px;\n  padding: 72px 12px 40px;\n  background-color: #efefef;\n  list-style-type: none; }\n  @media (min-width: 768px) and (max-width: 1199px) {\n    .short-guide__item {\n      padding: 71px 12px 40px; } }\n  @media (min-width: 1200px) {\n    .short-guide__item {\n      padding: 71px 24px 65px; } }\n  .short-guide__item:before {\n    font: 500 normal 13px / 3.69230769 \"Weissenhof Grotesk\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 80px;\n    content: counter(list);\n    counter-increment: list;\n    text-align: center;\n    background: white; }\n  .short-guide__item-title {\n  margin-bottom: 21px; }\n  .short-guide__item-text::before {\n  content: none; }\n  .footer__wrapper {\n  width: 100%; }\n  @media (min-width: 992px) {\n    .footer__wrapper {\n      width: calc(100% - 38.52%); } }\n  .footer__top {\n  padding-top: 47px;\n  padding-bottom: 53px;\n  background-color: #f6f5f4; }\n  .footer__container::before {\n  content: none; }\n  .footer__title {\n  margin-bottom: 24px; }\n  .footer__column {\n  font: 400 normal 16px / 1.5 \"Weissenhof Grotesk\"; }\n  .footer__column_flex-column {\n  display: flex;\n  flex-direction: column; }\n  @media (max-width: 767px) {\n  .footer__column_contacts {\n    margin-top: 40px; } }\n  @media (max-width: 767px) {\n  .footer__column_copyright {\n    margin-top: 14px; } }\n  .footer__subtitle {\n  margin-bottom: 24px; }\n  .footer__tel {\n  text-decoration: none;\n  color: #333e48; }\n  .footer__tel:hover {\n    text-decoration: underline; }\n  .footer__mail {\n  margin-top: 8px;\n  color: #50748a; }\n  .footer__mail:hover {\n    text-decoration: none; }\n  .footer__worktime {\n  margin-top: 8px; }\n  .footer__city {\n  margin-bottom: 8px;\n  color: #777; }\n  .footer__select {\n  max-width: 307px; }\n  .footer__bottom {\n  font: 400 normal 14px / 1.42857143 \"Weissenhof Grotesk\";\n  padding-top: 14px;\n  padding-bottom: 14px; }\n  .footer__kordamentha {\n  text-decoration: none;\n  color: #50748a; }\n  @media (max-width: 767px) {\n    .footer__kordamentha {\n      display: block;\n      text-align: center; } }\n  .footer__kordamentha:hover {\n    text-decoration: underline; }\n  .footer__copyright {\n  text-align: center;\n  color: #333e48; }\n  @media (min-width: 768px) {\n    .footer__copyright {\n      text-align: right; } }\n  .button_white-filled:disabled {\n  opacity: 0.6; }\n"

/***/ }),

/***/ "./src/app/client/pages/account/signIn/signIn.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/client/pages/account/signIn/signIn.component.ts ***!
  \*****************************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_api_account_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/services/api/account.api.service */ "./src/app/core/services/api/account.api.service.ts");
/* harmony import */ var _core_services_authentification_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/services/authentification/authentication.service */ "./src/app/core/services/authentification/authentication.service.ts");
/* harmony import */ var _core_services_shared_global_spinner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/services/shared/global-spinner.service */ "./src/app/core/services/shared/global-spinner.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_utils_validatorBuilder__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/utils/validatorBuilder */ "./src/app/utils/validatorBuilder.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SignInComponent = /** @class */ (function () {
    function SignInComponent(accountApiService, authenticationService, formBuilder, router, spinnerService, dialog) {
        this.accountApiService = accountApiService;
        this.authenticationService = authenticationService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.spinnerService = spinnerService;
        this.dialog = dialog;
    }
    SignInComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    SignInComponent.prototype.login = function () {
        var _this = this;
        this.spinnerService.show();
        this.accountApiService.getAuthToken(this.fillModel())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () { return _this.spinnerService.hide(); }))
            .subscribe(function (authToken) {
            _this.authenticationService.logIn(authToken.token);
            _this.router.navigate(['home']);
        }, function () {
            // this.notificationService.error('Error', 'Error logging in');
        });
    };
    SignInComponent.prototype.initForm = function () {
        this.createForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, src_app_utils_validatorBuilder__WEBPACK_IMPORTED_MODULE_8__["emailValidator"]]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, src_app_utils_validatorBuilder__WEBPACK_IMPORTED_MODULE_8__["passwordValidator"]]],
            rememberMe: ''
        });
    };
    SignInComponent.prototype.isControlInvalid = function (controlName) {
        var control = this.createForm.controls[controlName];
        return control.invalid && control.touched;
    };
    SignInComponent.prototype.fillModel = function () {
        return this.createForm.value;
    };
    SignInComponent.prototype.cancel = function () {
        this.router.navigate(['home']);
    };
    SignInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signIn.component.html */ "./src/app/client/pages/account/signIn/signIn.component.html"),
            styles: [__webpack_require__(/*! ./signIn.component.scss */ "./src/app/client/pages/account/signIn/signIn.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        }),
        __metadata("design:paramtypes", [_core_services_api_account_api_service__WEBPACK_IMPORTED_MODULE_3__["AccountApiService"],
            _core_services_authentification_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_services_shared_global_spinner_service__WEBPACK_IMPORTED_MODULE_5__["GlobalSpinnerService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/client/pages/home/home.component.html":
/*!*******************************************************!*\
  !*** ./src/app/client/pages/home/home.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a href=\"/\" class=\"logo\">\r\n    <img class=\"logo__img\" src=\"/assets/img/logo.svg\" alt=\"KordaMentha logo\">\r\n  </a>\r\n  \r\n  <section class=\"authorization\">\r\n    <div class=\"authorization__content-wrapper\">\r\n      <div class=\"authorization__content\">\r\n        <h1 class=\"authorization__title h1\">Lodge a Proof of Debt Form</h1>\r\n        <div class=\"authorization__text\">\r\n          <p>Content here, content here. Lorem Ipsum is simply dummy text of printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.\r\n          </p>\r\n          <p>When an unknown printer took a galley specimen book.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  \r\n  <section class=\"short-guide aside-pseudo-element\">\r\n    <div class=\"short-guide__container authorization-page-container\">\r\n      <h2 class=\"short-guide__title h2\"><strong>How it works</strong> step by step</h2>\r\n      <ul class=\"short-guide__list authorization-page-row\">\r\n        <li class=\"short-guide__item authorization-page-item\">\r\n          <h4 class=\"short-guide__item-title\">Create account or Sign in</h4>\r\n          <div class=\"short-guide__item-text\">\r\n            <p>Dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. he point of using Lorem Ipsum.</p>\r\n          </div>\r\n        </li>\r\n        <li class=\"short-guide__item authorization-page-item\">\r\n          <h4 class=\"short-guide__item-title\">Fill and send POD claim</h4>\r\n          <div class=\"short-guide__item-text\">\r\n            <p>he point of using Lorem Ipsum is that. Dummy text ever since the 1500s, when an unknown printer took a galley of type, scrambled.</p>\r\n          </div>\r\n        </li>\r\n        <li class=\"short-guide__item authorization-page-item\">\r\n          <h4 class=\"short-guide__item-title\">Waiting for our feedback</h4>\r\n          <div class=\"short-guide__item-text\">\r\n            <p>Dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled but also the leap into electronic typesetting only five. </p>\r\n          </div>\r\n        </li>\r\n        <li class=\"short-guide__item authorization-page-item\">\r\n          <h4 class=\"short-guide__item-title\">Get your fair compensation</h4>\r\n          <div class=\"short-guide__item-text\">\r\n            <p>Dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled took a galley of type.</p>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </section>\r\n  \r\n  <footer class=\"footer aside-pseudo-element\">\r\n    <div class=\"footer__wrapper\">\r\n      <div class=\"footer__top\">\r\n        <div class=\"footer__container authorization-page-container\">\r\n          <h3 class=\"footer__title h3\"><strong>Contact us</strong> to explore more</h3>\r\n          <div class=\"footer__row authorization-page-row\">\r\n            <div class=\"footer__column footer__column_flex-column authorization-page-item\">\r\n              <h4 class=\"footer__subtitle h4\">Choose suitable city</h4>\r\n              <label class=\"footer__city\" for=\"choose-city\">City</label>\r\n              <ng-select class=\"select\"\r\n                         [items]=\"cities\"\r\n                         bindLabel=\"name\"\r\n                         bindValue=\"id\"></ng-select>\r\n            </div>\r\n            <div class=\"footer__column footer__column_flex-column footer__column_contacts authorization-page-item\">\r\n              <h4 class=\"footer__subtitle h4\">Contacts in Gold Coast</h4>\r\n              <a href=\"tel:+61733380230\" class=\"footer__tel\">+61 7 3338 0230\r\n              </a>\r\n              <a href=\"mailto:info@kordamentha.com\" class=\"footer__mail\">info@kordamentha.com</a>\r\n              <div class=\"footer__worktime\">We online 24/7</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"footer__bottom\">\r\n        <div class=\"footer__container authorization-page-container\">\r\n          <div class=\"footer__row authorization-page-row\">\r\n            <div class=\"footer__column authorization-page-item\">\r\n              <a href=\"//kordamentha.com\" target=\"_blank\" class=\"footer__kordamentha\">kordamentha.com</a>\r\n            </div>\r\n            <div class=\"footer__column footer__column_copyright authorization-page-item\">\r\n              <div class=\"footer__copyright\">&copy; Copyright 2018 - KordaMentha</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </footer>\r\n  <router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/client/pages/home/home.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/client/pages/home/home.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".authorization {\n  display: flex;\n  flex-direction: column;\n  color: white;\n  background-image: url(\"/../assets/img/bg-main.png\");\n  background-size: cover;\n  flex-wrap: wrap; }\n  @media (min-width: 992px) {\n    .authorization {\n      flex-direction: row;\n      min-height: 100vh;\n      align-items: stretch;\n      flex-wrap: nowrap; } }\n  .authorization__content-wrapper {\n    width: 100%;\n    padding: 104px 20px 56px; }\n  @media (min-width: 768px) {\n      .authorization__content-wrapper {\n        height: 633px; } }\n  @media (min-width: 768px) and (max-width: 1199px) {\n      .authorization__content-wrapper {\n        padding: 188px 70px 110px; } }\n  @media (min-width: 992px) {\n      .authorization__content-wrapper {\n        width: calc(100% - 38.52%);\n        height: auto; } }\n  @media (min-width: 1200px) {\n      .authorization__content-wrapper {\n        padding: 281px 20px 20px 110px; } }\n  .authorization__content {\n    width: 100%;\n    max-width: 800px; }\n  .authorization__title {\n    margin-bottom: 40px; }\n  @media (min-width: 768px) {\n      .authorization__title {\n        margin-bottom: 54px; } }\n  .authorization__text p {\n    font: 300 normal 20px / 1.5 \"Weissenhof Grotesk\"; }\n  @media (min-width: 1200px) {\n      .authorization__text p {\n        font: 300 normal 24px / 1.33333333 \"Weissenhof Grotesk\"; } }\n  .authorization__text p:not(:last-child) {\n      margin-bottom: 32px; }\n  .aside-pseudo-element {\n  display: flex; }\n  .aside-pseudo-element:after {\n    display: block;\n    width: 38.52%;\n    background-color: #333e48; }\n  @media (min-width: 992px) {\n      .aside-pseudo-element:after {\n        content: ''; } }\n  .authorization-page-container {\n  max-width: 528px;\n  margin-right: auto;\n  margin-left: auto;\n  padding-right: 20px;\n  padding-left: 20px; }\n  @media (min-width: 768px) and (max-width: 991px) {\n    .authorization-page-container {\n      max-width: 644px; } }\n  @media (min-width: 992px) and (max-width: 1199px) {\n    .authorization-page-container {\n      max-width: 528px; } }\n  @media (min-width: 1200px) {\n    .authorization-page-container {\n      max-width: 992px; } }\n  .authorization-page-row {\n  display: flex;\n  margin-right: -12px;\n  margin-left: -12px;\n  flex-wrap: wrap; }\n  .authorization-page-item {\n  width: calc(100% - 12px * 2);\n  margin-right: 12px;\n  margin-left: 12px; }\n  @media (min-width: 768px) {\n    .authorization-page-item {\n      width: calc(50% - 12px * 2); } }\n  .short-guide__container {\n  width: 100%;\n  padding-top: 56px;\n  padding-bottom: 56px; }\n  @media (min-width: 992px) {\n    .short-guide__container {\n      width: calc(100% - 38.52%); } }\n  @media (min-width: 1200px) {\n    .short-guide__container {\n      padding-top: 112px;\n      padding-bottom: 91px; } }\n  .short-guide__title {\n  margin-bottom: 26px; }\n  @media (min-width: 1200px) {\n    .short-guide__title {\n      margin-bottom: 39px; } }\n  .short-guide__list {\n  counter-reset: list; }\n  .short-guide__item {\n  position: relative;\n  margin-bottom: 24px;\n  padding: 72px 12px 40px;\n  background-color: #efefef;\n  list-style-type: none; }\n  @media (min-width: 768px) and (max-width: 1199px) {\n    .short-guide__item {\n      padding: 71px 12px 40px; } }\n  @media (min-width: 1200px) {\n    .short-guide__item {\n      padding: 71px 24px 65px; } }\n  .short-guide__item:before {\n    font: 500 normal 13px / 3.69230769 \"Weissenhof Grotesk\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 80px;\n    content: counter(list);\n    counter-increment: list;\n    text-align: center;\n    background: white; }\n  .short-guide__item-title {\n  margin-bottom: 21px; }\n  .short-guide__item-text::before {\n  content: none; }\n  .footer__wrapper {\n  width: 100%; }\n  @media (min-width: 992px) {\n    .footer__wrapper {\n      width: calc(100% - 38.52%); } }\n  .footer__top {\n  padding-top: 47px;\n  padding-bottom: 53px;\n  background-color: #f6f5f4; }\n  .footer__container::before {\n  content: none; }\n  .footer__title {\n  margin-bottom: 24px; }\n  .footer__column {\n  font: 400 normal 16px / 1.5 \"Weissenhof Grotesk\"; }\n  .footer__column_flex-column {\n  display: flex;\n  flex-direction: column; }\n  @media (max-width: 767px) {\n  .footer__column_contacts {\n    margin-top: 40px; } }\n  @media (max-width: 767px) {\n  .footer__column_copyright {\n    margin-top: 14px; } }\n  .footer__subtitle {\n  margin-bottom: 24px; }\n  .footer__tel {\n  text-decoration: none;\n  color: #333e48; }\n  .footer__tel:hover {\n    text-decoration: underline; }\n  .footer__mail {\n  margin-top: 8px;\n  color: #50748a; }\n  .footer__mail:hover {\n    text-decoration: none; }\n  .footer__worktime {\n  margin-top: 8px; }\n  .footer__city {\n  margin-bottom: 8px;\n  color: #777; }\n  .footer__select {\n  max-width: 307px; }\n  .footer__bottom {\n  font: 400 normal 14px / 1.42857143 \"Weissenhof Grotesk\";\n  padding-top: 14px;\n  padding-bottom: 14px; }\n  .footer__kordamentha {\n  text-decoration: none;\n  color: #50748a; }\n  @media (max-width: 767px) {\n    .footer__kordamentha {\n      display: block;\n      text-align: center; } }\n  .footer__kordamentha:hover {\n    text-decoration: underline; }\n  .footer__copyright {\n  text-align: center;\n  color: #333e48; }\n  @media (min-width: 768px) {\n    .footer__copyright {\n      text-align: right; } }\n"

/***/ }),

/***/ "./src/app/client/pages/home/home.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/client/pages/home/home.component.ts ***!
  \*****************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_authentification_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/authentification/authentication.service */ "./src/app/core/services/authentification/authentication.service.ts");
/* harmony import */ var _mock_cities_data_mock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mock/cities-data.mock */ "./src/app/client/pages/home/mock/cities-data.mock.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.cities = _mock_cities_data_mock__WEBPACK_IMPORTED_MODULE_3__["citiesData"];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authenticationService.authenticatedUserSource.subscribe(function (user) {
            _this.isLoggedIn = _this.authenticationService.isLoggedIn;
            _this.user = user;
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/client/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/client/pages/home/home.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        }),
        __metadata("design:paramtypes", [_core_services_authentification_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/client/pages/home/mock/cities-data.mock.ts":
/*!************************************************************!*\
  !*** ./src/app/client/pages/home/mock/cities-data.mock.ts ***!
  \************************************************************/
/*! exports provided: citiesData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "citiesData", function() { return citiesData; });
var citiesData = Array(100).fill({ id: 1, name: 'New item' }, 0, 100);


/***/ }),

/***/ "./src/app/client/pages/sidebar/sidebar.component.html":
/*!*************************************************************!*\
  !*** ./src/app/client/pages/sidebar/sidebar.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>Sidebar</div>\r\n<button (click)=\"goToSignInPage()\">\r\nSIGN IN\r\n</button>"

/***/ }),

/***/ "./src/app/client/pages/sidebar/sidebar.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/client/pages/sidebar/sidebar.component.ts ***!
  \***********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_authentification_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/authentification/authentication.service */ "./src/app/core/services/authentification/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authenticationService.authenticatedUserSource.subscribe(function (user) {
            _this.isLoggedIn = _this.authenticationService.isLoggedIn;
            _this.user = user;
        });
    };
    SidebarComponent.prototype.goToRegisterPage = function () {
        this.router.navigate(['register']);
    };
    SidebarComponent.prototype.goToSignInPage = function () {
        this.authenticationService.logOut();
        this.router.navigate(['signIn']);
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar-component',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/client/pages/sidebar/sidebar.component.html")
        }),
        __metadata("design:paramtypes", [_core_services_authentification_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/client/pages/welcome/welcome.component.html":
/*!*************************************************************!*\
  !*** ./src/app/client/pages/welcome/welcome.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside class=\"authorization-aside\">\r\n    <div class=\"authorization-aside__form\">\r\n        <h2 class=\"authorization-aside__title h2\">\r\n            <strong>Welcome</strong>\r\n        </h2>\r\n        <div class=\"authorization__text\">\r\n            <p>Create a new account or Sign in to lodge a Proof of Debt Form</p>\r\n        </div>\r\n        <div class=\"authorization-form__bottom-links\">\r\n            <button class=\"button button_medium button_white-filled authorization-form__button-home\" routerLink=\"/home/register\">Create new account</button>\r\n        </div>\r\n        <div class=\"authorization-form__bottom-links\">\r\n            <button class=\"button button_medium button_white-filled authorization-form__button-home\" routerLink=\"/home/signIn\">Sign In</button>\r\n        </div>\r\n    </div>\r\n</aside>"

/***/ }),

/***/ "./src/app/client/pages/welcome/welcome.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/client/pages/welcome/welcome.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".authorization {\n  display: flex;\n  flex-direction: column;\n  color: white;\n  background-image: url(\"/../assets/img/bg-main.png\");\n  flex-wrap: wrap; }\n  @media (min-width: 992px) {\n    .authorization {\n      flex-direction: row;\n      min-height: 100vh;\n      align-items: stretch;\n      flex-wrap: nowrap; } }\n  .authorization__content-wrapper {\n    width: 100%;\n    padding: 104px 20px 56px;\n    background-color: rgba(0, 0, 0, 0.3);\n    -webkit-filter: blur(5px);\n            filter: blur(5px); }\n  @media (min-width: 768px) {\n      .authorization__content-wrapper {\n        height: 633px; } }\n  @media (min-width: 768px) and (max-width: 1199px) {\n      .authorization__content-wrapper {\n        padding: 188px 70px 110px; } }\n  @media (min-width: 992px) {\n      .authorization__content-wrapper {\n        width: calc(100% - 38.52%);\n        height: auto; } }\n  @media (min-width: 1200px) {\n      .authorization__content-wrapper {\n        padding: 281px 20px 20px 110px; } }\n  .authorization__content {\n    width: 100%;\n    max-width: 800px; }\n  .authorization__title {\n    margin-bottom: 40px; }\n  @media (min-width: 768px) {\n      .authorization__title {\n        margin-bottom: 54px; } }\n  .authorization__text p {\n    font: 300 normal 20px / 1.5 \"Weissenhof Grotesk\"; }\n  @media (min-width: 1200px) {\n      .authorization__text p {\n        font: 300 normal 24px / 1.33333333 \"Weissenhof Grotesk\"; } }\n  .authorization__text p:not(:last-child) {\n      margin-bottom: 32px; }\n  .aside-pseudo-element {\n  display: flex; }\n  .aside-pseudo-element:after {\n    display: block;\n    width: 38.52%;\n    background-color: #333e48; }\n  @media (min-width: 992px) {\n      .aside-pseudo-element:after {\n        content: ''; } }\n  .authorization-page-container {\n  max-width: 528px;\n  margin-right: auto;\n  margin-left: auto;\n  padding-right: 20px;\n  padding-left: 20px; }\n  @media (min-width: 768px) and (max-width: 991px) {\n    .authorization-page-container {\n      max-width: 644px; } }\n  @media (min-width: 992px) and (max-width: 1199px) {\n    .authorization-page-container {\n      max-width: 528px; } }\n  @media (min-width: 1200px) {\n    .authorization-page-container {\n      max-width: 992px; } }\n  .authorization-page-row {\n  display: flex;\n  margin-right: -12px;\n  margin-left: -12px;\n  flex-wrap: wrap; }\n  .authorization-page-item {\n  width: calc(100% - 12px * 2);\n  margin-right: 12px;\n  margin-left: 12px; }\n  @media (min-width: 768px) {\n    .authorization-page-item {\n      width: calc(50% - 12px * 2); } }\n  .short-guide__container {\n  width: 100%;\n  padding-top: 56px;\n  padding-bottom: 56px; }\n  @media (min-width: 992px) {\n    .short-guide__container {\n      width: calc(100% - 38.52%); } }\n  @media (min-width: 1200px) {\n    .short-guide__container {\n      padding-top: 112px;\n      padding-bottom: 91px; } }\n  .short-guide__title {\n  margin-bottom: 26px; }\n  @media (min-width: 1200px) {\n    .short-guide__title {\n      margin-bottom: 39px; } }\n  .short-guide__list {\n  counter-reset: list; }\n  .short-guide__item {\n  position: relative;\n  margin-bottom: 24px;\n  padding: 72px 12px 40px;\n  background-color: #efefef;\n  list-style-type: none; }\n  @media (min-width: 768px) and (max-width: 1199px) {\n    .short-guide__item {\n      padding: 71px 12px 40px; } }\n  @media (min-width: 1200px) {\n    .short-guide__item {\n      padding: 71px 24px 65px; } }\n  .short-guide__item:before {\n    font: 500 normal 13px / 3.69230769 \"Weissenhof Grotesk\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 80px;\n    content: counter(list);\n    counter-increment: list;\n    text-align: center;\n    background: white; }\n  .short-guide__item-title {\n  margin-bottom: 21px; }\n  .short-guide__item-text::before {\n  content: none; }\n"

/***/ }),

/***/ "./src/app/client/pages/welcome/welcome.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/client/pages/welcome/welcome.component.ts ***!
  \***********************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_authentification_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/authentification/authentication.service */ "./src/app/core/services/authentification/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authenticationService.authenticatedUserSource.subscribe(function (user) {
            _this.isLoggedIn = _this.authenticationService.isLoggedIn;
            _this.user = user;
        });
    };
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/client/pages/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.scss */ "./src/app/client/pages/welcome/welcome.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        }),
        __metadata("design:paramtypes", [_core_services_authentification_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/app/core/components/constants/app.constants.ts":
/*!************************************************************!*\
  !*** ./src/app/core/components/constants/app.constants.ts ***!
  \************************************************************/
/*! exports provided: TokenName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenName", function() { return TokenName; });
var TokenName = 'POD-authentication-token';


/***/ }),

/***/ "./src/app/core/components/constants/date.constants.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/components/constants/date.constants.ts ***!
  \*************************************************************/
/*! exports provided: calendarView, calendarViewTitles, months, DATE_RANGE_MAX, DATE_RANGE_MIN, DATE_FORMAT_DTO, DATE_TIME_FORMAT_DTO, TIME_FORMAT_DTO, DATE_FORMAT_EDIT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calendarView", function() { return calendarView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calendarViewTitles", function() { return calendarViewTitles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "months", function() { return months; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATE_RANGE_MAX", function() { return DATE_RANGE_MAX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATE_RANGE_MIN", function() { return DATE_RANGE_MIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATE_FORMAT_DTO", function() { return DATE_FORMAT_DTO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATE_TIME_FORMAT_DTO", function() { return DATE_TIME_FORMAT_DTO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TIME_FORMAT_DTO", function() { return TIME_FORMAT_DTO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATE_FORMAT_EDIT", function() { return DATE_FORMAT_EDIT; });
/**
 * Calendar picker constants
 */
var calendarView = {
    year: 'year',
    month: 'month',
    day: 'day',
};
var calendarViewTitles = {
    year: 'Choose year',
    month: 'Choose month',
    day: 'Choose day',
};
var months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
];
/**
 * date range valid
 */
var DATE_RANGE_MAX = new Date(2200, 1, 1);
var DATE_RANGE_MIN = new Date(1900, 1, 1);
var DATE_FORMAT_DTO = 'YYYY-MM-DD';
var DATE_TIME_FORMAT_DTO = 'YYYY-MM-DD HH:mm';
var TIME_FORMAT_DTO = 'HH:mm';
var DATE_FORMAT_EDIT = 'DD/MM/YYYY';


/***/ }),

/***/ "./src/app/core/components/dialog/alert/alert.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/core/components/dialog/alert/alert.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog\">\r\n  <h3 class=\"dialog__title h3\">{{data.title}}</h3>\r\n  <div class=\"dialog__content\">\r\n    <p>{{data.message}}</p>\r\n  </div>\r\n  <button class=\"button button_medium button_black-gray-filled dialog__button\"\r\n          mat-dialog-close\r\n          (click)=\"close()\">Close</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/core/components/dialog/alert/alert.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/core/components/dialog/alert/alert.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/components/dialog/alert/alert.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/core/components/dialog/alert/alert.component.ts ***!
  \*****************************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AlertComponent = /** @class */ (function () {
    function AlertComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    AlertComponent.prototype.close = function () {
        this.dialogRef.close(true);
    };
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/core/components/dialog/alert/alert.component.html"),
            styles: [__webpack_require__(/*! ../dialog.component.scss */ "./src/app/core/components/dialog/dialog.component.scss"), __webpack_require__(/*! ./alert.component.scss */ "./src/app/core/components/dialog/alert/alert.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/core/components/dialog/dialog.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/core/components/dialog/dialog.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-elevation-z0{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-elevation-z1{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}.mat-elevation-z2{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mat-elevation-z3{box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)}.mat-elevation-z4{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mat-elevation-z5{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12)}.mat-elevation-z6{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.mat-elevation-z7{box-shadow:0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12)}.mat-elevation-z8{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.mat-elevation-z9{box-shadow:0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12)}.mat-elevation-z10{box-shadow:0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)}.mat-elevation-z11{box-shadow:0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12)}.mat-elevation-z12{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.mat-elevation-z13{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12)}.mat-elevation-z14{box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12)}.mat-elevation-z15{box-shadow:0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12)}.mat-elevation-z16{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}.mat-elevation-z17{box-shadow:0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12)}.mat-elevation-z18{box-shadow:0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12)}.mat-elevation-z19{box-shadow:0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12)}.mat-elevation-z20{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12)}.mat-elevation-z21{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12)}.mat-elevation-z22{box-shadow:0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12)}.mat-elevation-z23{box-shadow:0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12)}.mat-elevation-z24{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.mat-badge-content{font-weight:600;font-size:12px;font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-badge-small .mat-badge-content{font-size:6px}.mat-badge-large .mat-badge-content{font-size:24px}.mat-h1,.mat-headline,.mat-typography h1{font:400 24px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h2,.mat-title,.mat-typography h2{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h3,.mat-subheading-2,.mat-typography h3{font:400 16px/28px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h4,.mat-subheading-1,.mat-typography h4{font:400 15px/24px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h5,.mat-typography h5{font:400 11.62px/20px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 12px}.mat-h6,.mat-typography h6{font:400 9.38px/20px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 12px}.mat-body-2,.mat-body-strong{font:500 14px/24px Roboto,\"Helvetica Neue\",sans-serif}.mat-body,.mat-body-1,.mat-typography{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-body p,.mat-body-1 p,.mat-typography p{margin:0 0 12px}.mat-caption,.mat-small{font:400 12px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-display-4,.mat-typography .mat-display-4{font:300 112px/112px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 56px;letter-spacing:-.05em}.mat-display-3,.mat-typography .mat-display-3{font:400 56px/56px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px;letter-spacing:-.02em}.mat-display-2,.mat-typography .mat-display-2{font:400 45px/48px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px;letter-spacing:-.005em}.mat-display-1,.mat-typography .mat-display-1{font:400 34px/40px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px}.mat-bottom-sheet-container{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:16px;font-weight:400}.mat-button,.mat-fab,.mat-flat-button,.mat-icon-button,.mat-mini-fab,.mat-raised-button,.mat-stroked-button{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}.mat-button-toggle{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-card{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-card-title{font-size:24px;font-weight:400}.mat-card-content,.mat-card-header .mat-card-title,.mat-card-subtitle{font-size:14px}.mat-checkbox{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-checkbox-layout .mat-checkbox-label{line-height:24px}.mat-chip{font-size:13px;line-height:18px}.mat-chip .mat-chip-remove.mat-icon,.mat-chip .mat-chip-trailing-icon.mat-icon{font-size:18px}.mat-table{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-header-cell{font-size:12px;font-weight:500}.mat-cell,.mat-footer-cell{font-size:14px}.mat-calendar{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-calendar-body{font-size:13px}.mat-calendar-body-label,.mat-calendar-period-button{font-size:14px;font-weight:500}.mat-calendar-table-header th{font-size:11px;font-weight:400}.mat-dialog-title{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif}.mat-expansion-panel-header{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:15px;font-weight:400}.mat-expansion-panel-content{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-form-field{font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-form-field-wrapper{padding-bottom:1.34375em}.mat-form-field-prefix .mat-icon,.mat-form-field-suffix .mat-icon{font-size:150%;line-height:1.125}.mat-form-field-prefix .mat-icon-button,.mat-form-field-suffix .mat-icon-button{height:1.5em;width:1.5em}.mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-suffix .mat-icon-button .mat-icon{height:1.125em;line-height:1.125}.mat-form-field-infix{padding:.5em 0;border-top:.84375em solid transparent}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.34375em) scale(.75);transform:translateY(-1.34375em) scale(.75);width:133.33333%}.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.34374em) scale(.75);transform:translateY(-1.34374em) scale(.75);width:133.33334%}.mat-form-field-label-wrapper{top:-.84375em;padding-top:.84375em}.mat-form-field-label{top:1.34375em}.mat-form-field-underline{bottom:1.34375em}.mat-form-field-subscript-wrapper{font-size:75%;margin-top:.66667em;top:calc(100% - 1.79167em)}.mat-form-field-appearance-legacy .mat-form-field-wrapper{padding-bottom:1.25em}.mat-form-field-appearance-legacy .mat-form-field-infix{padding:.4375em 0}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);-ms-transform:translateY(-1.28125em) scale(.75);width:133.33333%}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00101px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00101px);-ms-transform:translateY(-1.28124em) scale(.75);width:133.33334%}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00102px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00102px);-ms-transform:translateY(-1.28123em) scale(.75);width:133.33335%}.mat-form-field-appearance-legacy .mat-form-field-label{top:1.28125em}.mat-form-field-appearance-legacy .mat-form-field-underline{bottom:1.25em}.mat-form-field-appearance-legacy .mat-form-field-subscript-wrapper{margin-top:.54167em;top:calc(100% - 1.66667em)}.mat-form-field-appearance-fill .mat-form-field-infix{padding:.25em 0 .75em 0}.mat-form-field-appearance-fill .mat-form-field-label{top:1.09375em;margin-top:-.5em}.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-.59375em) scale(.75);transform:translateY(-.59375em) scale(.75);width:133.33333%}.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-.59374em) scale(.75);transform:translateY(-.59374em) scale(.75);width:133.33334%}.mat-form-field-appearance-outline .mat-form-field-infix{padding:1em 0 1em 0}.mat-form-field-appearance-outline .mat-form-field-outline{bottom:1.34375em}.mat-form-field-appearance-outline .mat-form-field-label{top:1.84375em;margin-top:-.25em}.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.59375em) scale(.75);transform:translateY(-1.59375em) scale(.75);width:133.33333%}.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.59374em) scale(.75);transform:translateY(-1.59374em) scale(.75);width:133.33334%}.mat-grid-tile-footer,.mat-grid-tile-header{font-size:14px}.mat-grid-tile-footer .mat-line,.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2),.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:12px}input.mat-input-element{margin-top:-.0625em}.mat-menu-item{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:16px;font-weight:400}.mat-paginator,.mat-paginator-page-size .mat-select-trigger{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px}.mat-radio-button{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-select{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-select-trigger{height:1.125em}.mat-slide-toggle-content{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-slider-thumb-label-text{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px;font-weight:500}.mat-stepper-horizontal,.mat-stepper-vertical{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-step-label{font-size:14px;font-weight:400}.mat-step-label-selected{font-size:14px;font-weight:500}.mat-tab-group{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-tab-label,.mat-tab-link{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0}.mat-tooltip{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:10px;padding-top:6px;padding-bottom:6px}.mat-tooltip-handset{font-size:14px;padding-top:9px;padding-bottom:9px}.mat-list-item{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-list-option{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-list .mat-list-item,.mat-nav-list .mat-list-item,.mat-selection-list .mat-list-item{font-size:16px}.mat-list .mat-list-item .mat-line,.mat-nav-list .mat-list-item .mat-line,.mat-selection-list .mat-list-item .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list .mat-list-item .mat-line:nth-child(n+2),.mat-nav-list .mat-list-item .mat-line:nth-child(n+2),.mat-selection-list .mat-list-item .mat-line:nth-child(n+2){font-size:14px}.mat-list .mat-list-option,.mat-nav-list .mat-list-option,.mat-selection-list .mat-list-option{font-size:16px}.mat-list .mat-list-option .mat-line,.mat-nav-list .mat-list-option .mat-line,.mat-selection-list .mat-list-option .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list .mat-list-option .mat-line:nth-child(n+2),.mat-nav-list .mat-list-option .mat-line:nth-child(n+2),.mat-selection-list .mat-list-option .mat-line:nth-child(n+2){font-size:14px}.mat-list .mat-subheader,.mat-nav-list .mat-subheader,.mat-selection-list .mat-subheader{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}.mat-list[dense] .mat-list-item,.mat-nav-list[dense] .mat-list-item,.mat-selection-list[dense] .mat-list-item{font-size:12px}.mat-list[dense] .mat-list-item .mat-line,.mat-nav-list[dense] .mat-list-item .mat-line,.mat-selection-list[dense] .mat-list-item .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list[dense] .mat-list-item .mat-line:nth-child(n+2),.mat-nav-list[dense] .mat-list-item .mat-line:nth-child(n+2),.mat-selection-list[dense] .mat-list-item .mat-line:nth-child(n+2){font-size:12px}.mat-list[dense] .mat-list-option,.mat-nav-list[dense] .mat-list-option,.mat-selection-list[dense] .mat-list-option{font-size:12px}.mat-list[dense] .mat-list-option .mat-line,.mat-nav-list[dense] .mat-list-option .mat-line,.mat-selection-list[dense] .mat-list-option .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list[dense] .mat-list-option .mat-line:nth-child(n+2),.mat-nav-list[dense] .mat-list-option .mat-line:nth-child(n+2),.mat-selection-list[dense] .mat-list-option .mat-line:nth-child(n+2){font-size:12px}.mat-list[dense] .mat-subheader,.mat-nav-list[dense] .mat-subheader,.mat-selection-list[dense] .mat-subheader{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px;font-weight:500}.mat-option{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:16px}.mat-optgroup-label{font:500 14px/24px Roboto,\"Helvetica Neue\",sans-serif}.mat-simple-snackbar{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px}.mat-simple-snackbar-action{line-height:1;font-family:inherit;font-size:inherit;font-weight:500}.mat-tree{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-tree-node{font-weight:400;font-size:14px}.mat-ripple{overflow:hidden}@media screen and (-ms-high-contrast:active){.mat-ripple{display:none}}.mat-ripple.mat-ripple-unbounded{overflow:visible}.mat-ripple-element{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,-webkit-transform 0s cubic-bezier(0,0,.2,1);transition:opacity,transform 0s cubic-bezier(0,0,.2,1);transition:opacity,transform 0s cubic-bezier(0,0,.2,1),-webkit-transform 0s cubic-bezier(0,0,.2,1);-webkit-transform:scale(0);transform:scale(0)}.cdk-visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;outline:0;-webkit-appearance:none;-moz-appearance:none}.cdk-global-overlay-wrapper,.cdk-overlay-container{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed;z-index:1000}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000;display:flex;max-width:100%;max-height:100%}.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:transparent;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:1}@media screen and (-ms-high-contrast:active){.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.6}}.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.288)}.cdk-overlay-transparent-backdrop,.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing{opacity:0}.cdk-overlay-connected-position-bounding-box{position:absolute;z-index:1000;display:flex;flex-direction:column;min-width:1px;min-height:1px}.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}.cdk-text-field-autofill-monitored:-webkit-autofill{-webkit-animation-name:cdk-text-field-autofill-start;animation-name:cdk-text-field-autofill-start}.cdk-text-field-autofill-monitored:not(:-webkit-autofill){-webkit-animation-name:cdk-text-field-autofill-end;animation-name:cdk-text-field-autofill-end}textarea.cdk-textarea-autosize{resize:none}textarea.cdk-textarea-autosize-measuring{height:auto!important;overflow:hidden!important;padding:2px 0!important;box-sizing:content-box!important}.mat-ripple-element{background-color:rgba(0,0,0,.1)}.mat-option{color:rgba(0,0,0,.87)}.mat-option:focus:not(.mat-option-disabled),.mat-option:hover:not(.mat-option-disabled){background:rgba(0,0,0,.04)}.mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled){background:rgba(0,0,0,.04)}.mat-option.mat-active{background:rgba(0,0,0,.04);color:rgba(0,0,0,.87)}.mat-option.mat-option-disabled{color:rgba(0,0,0,.38)}.mat-primary .mat-option.mat-selected:not(.mat-option-disabled){color:#673ab7}.mat-accent .mat-option.mat-selected:not(.mat-option-disabled){color:#ffd740}.mat-warn .mat-option.mat-selected:not(.mat-option-disabled){color:#f44336}.mat-optgroup-label{color:rgba(0,0,0,.54)}.mat-optgroup-disabled .mat-optgroup-label{color:rgba(0,0,0,.38)}.mat-pseudo-checkbox{color:rgba(0,0,0,.54)}.mat-pseudo-checkbox::after{color:#fafafa}.mat-accent .mat-pseudo-checkbox-checked,.mat-accent .mat-pseudo-checkbox-indeterminate,.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-indeterminate{background:#ffd740}.mat-primary .mat-pseudo-checkbox-checked,.mat-primary .mat-pseudo-checkbox-indeterminate{background:#673ab7}.mat-warn .mat-pseudo-checkbox-checked,.mat-warn .mat-pseudo-checkbox-indeterminate{background:#f44336}.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{background:#b0b0b0}.mat-app-background{background-color:#fafafa;color:rgba(0,0,0,.87)}.mat-theme-loaded-marker{display:none}.mat-autocomplete-panel{background:#fff;color:rgba(0,0,0,.87)}.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover){background:#fff}.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover):not(.mat-option-disabled){color:rgba(0,0,0,.87)}.mat-badge-content{color:#fff;background:#673ab7}.mat-badge-accent .mat-badge-content{background:#ffd740;color:rgba(0,0,0,.87)}.mat-badge-warn .mat-badge-content{color:#fff;background:#f44336}.mat-badge{position:relative}.mat-badge-hidden .mat-badge-content{display:none}.mat-badge-content{position:absolute;text-align:center;display:inline-block;border-radius:50%;transition:-webkit-transform .2s ease-in-out;transition:transform .2s ease-in-out;transition:transform .2s ease-in-out, -webkit-transform .2s ease-in-out;-webkit-transform:scale(.6);transform:scale(.6);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;pointer-events:none}.mat-badge-content.mat-badge-active{-webkit-transform:none;transform:none}.mat-badge-small .mat-badge-content{width:16px;height:16px;line-height:16px}@media screen and (-ms-high-contrast:active){.mat-badge-small .mat-badge-content{outline:solid 1px;border-radius:0}}.mat-badge-small.mat-badge-above .mat-badge-content{top:-8px}.mat-badge-small.mat-badge-below .mat-badge-content{bottom:-8px}.mat-badge-small.mat-badge-before{margin-left:16px}.mat-badge-small.mat-badge-before .mat-badge-content{left:-16px}[dir=rtl] .mat-badge-small.mat-badge-before{margin-left:0;margin-right:16px}[dir=rtl] .mat-badge-small.mat-badge-before .mat-badge-content{left:auto;right:-16px}.mat-badge-small.mat-badge-after{margin-right:16px}.mat-badge-small.mat-badge-after .mat-badge-content{right:-16px}[dir=rtl] .mat-badge-small.mat-badge-after{margin-right:0;margin-left:16px}[dir=rtl] .mat-badge-small.mat-badge-after .mat-badge-content{right:auto;left:-16px}.mat-badge-small.mat-badge-overlap.mat-badge-before{margin-left:8px}.mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-8px}[dir=rtl] .mat-badge-small.mat-badge-overlap.mat-badge-before{margin-left:0;margin-right:8px}[dir=rtl] .mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-8px}.mat-badge-small.mat-badge-overlap.mat-badge-after{margin-right:8px}.mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-8px}[dir=rtl] .mat-badge-small.mat-badge-overlap.mat-badge-after{margin-right:0;margin-left:16px}[dir=rtl] .mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-8px}.mat-badge-medium .mat-badge-content{width:22px;height:22px;line-height:22px}@media screen and (-ms-high-contrast:active){.mat-badge-medium .mat-badge-content{outline:solid 1px;border-radius:0}}.mat-badge-medium.mat-badge-above .mat-badge-content{top:-11px}.mat-badge-medium.mat-badge-below .mat-badge-content{bottom:-11px}.mat-badge-medium.mat-badge-before{margin-left:22px}.mat-badge-medium.mat-badge-before .mat-badge-content{left:-22px}[dir=rtl] .mat-badge-medium.mat-badge-before{margin-left:0;margin-right:22px}[dir=rtl] .mat-badge-medium.mat-badge-before .mat-badge-content{left:auto;right:-22px}.mat-badge-medium.mat-badge-after{margin-right:22px}.mat-badge-medium.mat-badge-after .mat-badge-content{right:-22px}[dir=rtl] .mat-badge-medium.mat-badge-after{margin-right:0;margin-left:22px}[dir=rtl] .mat-badge-medium.mat-badge-after .mat-badge-content{right:auto;left:-22px}.mat-badge-medium.mat-badge-overlap.mat-badge-before{margin-left:11px}.mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-11px}[dir=rtl] .mat-badge-medium.mat-badge-overlap.mat-badge-before{margin-left:0;margin-right:11px}[dir=rtl] .mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-11px}.mat-badge-medium.mat-badge-overlap.mat-badge-after{margin-right:11px}.mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-11px}[dir=rtl] .mat-badge-medium.mat-badge-overlap.mat-badge-after{margin-right:0;margin-left:22px}[dir=rtl] .mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-11px}.mat-badge-large .mat-badge-content{width:28px;height:28px;line-height:28px}@media screen and (-ms-high-contrast:active){.mat-badge-large .mat-badge-content{outline:solid 1px;border-radius:0}}.mat-badge-large.mat-badge-above .mat-badge-content{top:-14px}.mat-badge-large.mat-badge-below .mat-badge-content{bottom:-14px}.mat-badge-large.mat-badge-before{margin-left:28px}.mat-badge-large.mat-badge-before .mat-badge-content{left:-28px}[dir=rtl] .mat-badge-large.mat-badge-before{margin-left:0;margin-right:28px}[dir=rtl] .mat-badge-large.mat-badge-before .mat-badge-content{left:auto;right:-28px}.mat-badge-large.mat-badge-after{margin-right:28px}.mat-badge-large.mat-badge-after .mat-badge-content{right:-28px}[dir=rtl] .mat-badge-large.mat-badge-after{margin-right:0;margin-left:28px}[dir=rtl] .mat-badge-large.mat-badge-after .mat-badge-content{right:auto;left:-28px}.mat-badge-large.mat-badge-overlap.mat-badge-before{margin-left:14px}.mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-14px}[dir=rtl] .mat-badge-large.mat-badge-overlap.mat-badge-before{margin-left:0;margin-right:14px}[dir=rtl] .mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-14px}.mat-badge-large.mat-badge-overlap.mat-badge-after{margin-right:14px}.mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-14px}[dir=rtl] .mat-badge-large.mat-badge-overlap.mat-badge-after{margin-right:0;margin-left:28px}[dir=rtl] .mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-14px}.mat-bottom-sheet-container{background:#fff;color:rgba(0,0,0,.87)}.mat-button,.mat-icon-button,.mat-stroked-button{color:inherit;background:0 0}.mat-button.mat-primary,.mat-icon-button.mat-primary,.mat-stroked-button.mat-primary{color:#673ab7}.mat-button.mat-accent,.mat-icon-button.mat-accent,.mat-stroked-button.mat-accent{color:#ffd740}.mat-button.mat-warn,.mat-icon-button.mat-warn,.mat-stroked-button.mat-warn{color:#f44336}.mat-button.mat-accent[disabled],.mat-button.mat-primary[disabled],.mat-button.mat-warn[disabled],.mat-button[disabled][disabled],.mat-icon-button.mat-accent[disabled],.mat-icon-button.mat-primary[disabled],.mat-icon-button.mat-warn[disabled],.mat-icon-button[disabled][disabled],.mat-stroked-button.mat-accent[disabled],.mat-stroked-button.mat-primary[disabled],.mat-stroked-button.mat-warn[disabled],.mat-stroked-button[disabled][disabled]{color:rgba(0,0,0,.26)}.mat-button.mat-primary .mat-button-focus-overlay,.mat-icon-button.mat-primary .mat-button-focus-overlay,.mat-stroked-button.mat-primary .mat-button-focus-overlay{background-color:rgba(103,58,183,.12)}.mat-button.mat-accent .mat-button-focus-overlay,.mat-icon-button.mat-accent .mat-button-focus-overlay,.mat-stroked-button.mat-accent .mat-button-focus-overlay{background-color:rgba(255,215,64,.12)}.mat-button.mat-warn .mat-button-focus-overlay,.mat-icon-button.mat-warn .mat-button-focus-overlay,.mat-stroked-button.mat-warn .mat-button-focus-overlay{background-color:rgba(244,67,54,.12)}.mat-button[disabled] .mat-button-focus-overlay,.mat-icon-button[disabled] .mat-button-focus-overlay,.mat-stroked-button[disabled] .mat-button-focus-overlay{background-color:transparent}.mat-button.mat-primary .mat-ripple-element,.mat-icon-button.mat-primary .mat-ripple-element,.mat-stroked-button.mat-primary .mat-ripple-element{background-color:rgba(103,58,183,.1)}.mat-button.mat-accent .mat-ripple-element,.mat-icon-button.mat-accent .mat-ripple-element,.mat-stroked-button.mat-accent .mat-ripple-element{background-color:rgba(255,215,64,.1)}.mat-button.mat-warn .mat-ripple-element,.mat-icon-button.mat-warn .mat-ripple-element,.mat-stroked-button.mat-warn .mat-ripple-element{background-color:rgba(244,67,54,.1)}.mat-fab,.mat-flat-button,.mat-mini-fab,.mat-raised-button{color:rgba(0,0,0,.87);background-color:#fff}.mat-fab.mat-primary,.mat-flat-button.mat-primary,.mat-mini-fab.mat-primary,.mat-raised-button.mat-primary{color:#fff}.mat-fab.mat-accent,.mat-flat-button.mat-accent,.mat-mini-fab.mat-accent,.mat-raised-button.mat-accent{color:rgba(0,0,0,.87)}.mat-fab.mat-warn,.mat-flat-button.mat-warn,.mat-mini-fab.mat-warn,.mat-raised-button.mat-warn{color:#fff}.mat-fab.mat-accent[disabled],.mat-fab.mat-primary[disabled],.mat-fab.mat-warn[disabled],.mat-fab[disabled][disabled],.mat-flat-button.mat-accent[disabled],.mat-flat-button.mat-primary[disabled],.mat-flat-button.mat-warn[disabled],.mat-flat-button[disabled][disabled],.mat-mini-fab.mat-accent[disabled],.mat-mini-fab.mat-primary[disabled],.mat-mini-fab.mat-warn[disabled],.mat-mini-fab[disabled][disabled],.mat-raised-button.mat-accent[disabled],.mat-raised-button.mat-primary[disabled],.mat-raised-button.mat-warn[disabled],.mat-raised-button[disabled][disabled]{color:rgba(0,0,0,.26)}.mat-fab.mat-primary,.mat-flat-button.mat-primary,.mat-mini-fab.mat-primary,.mat-raised-button.mat-primary{background-color:#673ab7}.mat-fab.mat-accent,.mat-flat-button.mat-accent,.mat-mini-fab.mat-accent,.mat-raised-button.mat-accent{background-color:#ffd740}.mat-fab.mat-warn,.mat-flat-button.mat-warn,.mat-mini-fab.mat-warn,.mat-raised-button.mat-warn{background-color:#f44336}.mat-fab.mat-accent[disabled],.mat-fab.mat-primary[disabled],.mat-fab.mat-warn[disabled],.mat-fab[disabled][disabled],.mat-flat-button.mat-accent[disabled],.mat-flat-button.mat-primary[disabled],.mat-flat-button.mat-warn[disabled],.mat-flat-button[disabled][disabled],.mat-mini-fab.mat-accent[disabled],.mat-mini-fab.mat-primary[disabled],.mat-mini-fab.mat-warn[disabled],.mat-mini-fab[disabled][disabled],.mat-raised-button.mat-accent[disabled],.mat-raised-button.mat-primary[disabled],.mat-raised-button.mat-warn[disabled],.mat-raised-button[disabled][disabled]{background-color:rgba(0,0,0,.12)}.mat-fab.mat-primary .mat-ripple-element,.mat-flat-button.mat-primary .mat-ripple-element,.mat-mini-fab.mat-primary .mat-ripple-element,.mat-raised-button.mat-primary .mat-ripple-element{background-color:rgba(255,255,255,.1)}.mat-fab.mat-accent .mat-ripple-element,.mat-flat-button.mat-accent .mat-ripple-element,.mat-mini-fab.mat-accent .mat-ripple-element,.mat-raised-button.mat-accent .mat-ripple-element{background-color:rgba(0,0,0,.1)}.mat-fab.mat-warn .mat-ripple-element,.mat-flat-button.mat-warn .mat-ripple-element,.mat-mini-fab.mat-warn .mat-ripple-element,.mat-raised-button.mat-warn .mat-ripple-element{background-color:rgba(255,255,255,.1)}.mat-icon-button.mat-primary .mat-ripple-element{background-color:rgba(103,58,183,.2)}.mat-icon-button.mat-accent .mat-ripple-element{background-color:rgba(255,215,64,.2)}.mat-icon-button.mat-warn .mat-ripple-element{background-color:rgba(244,67,54,.2)}.mat-button-toggle{color:rgba(0,0,0,.38)}.mat-button-toggle .mat-button-toggle-focus-overlay{background-color:rgba(0,0,0,.12)}.mat-button-toggle-checked{background-color:#e0e0e0;color:rgba(0,0,0,.54)}.mat-button-toggle-disabled{background-color:#eee;color:rgba(0,0,0,.26)}.mat-button-toggle-disabled.mat-button-toggle-checked{background-color:#bdbdbd}.mat-card{background:#fff;color:rgba(0,0,0,.87)}.mat-card-subtitle{color:rgba(0,0,0,.54)}.mat-checkbox-frame{border-color:rgba(0,0,0,.54)}.mat-checkbox-checkmark{fill:#fafafa}.mat-checkbox-checkmark-path{stroke:#fafafa!important}.mat-checkbox-mixedmark{background-color:#fafafa}.mat-checkbox-checked.mat-primary .mat-checkbox-background,.mat-checkbox-indeterminate.mat-primary .mat-checkbox-background{background-color:#673ab7}.mat-checkbox-checked.mat-accent .mat-checkbox-background,.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:#ffd740}.mat-checkbox-checked.mat-warn .mat-checkbox-background,.mat-checkbox-indeterminate.mat-warn .mat-checkbox-background{background-color:#f44336}.mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background,.mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background{background-color:#b0b0b0}.mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame{border-color:#b0b0b0}.mat-checkbox-disabled .mat-checkbox-label{color:#b0b0b0}.mat-checkbox:not(.mat-checkbox-disabled).mat-primary .mat-checkbox-ripple .mat-ripple-element{background-color:rgba(103,58,183,.26)}.mat-checkbox:not(.mat-checkbox-disabled).mat-accent .mat-checkbox-ripple .mat-ripple-element{background-color:rgba(255,215,64,.26)}.mat-checkbox:not(.mat-checkbox-disabled).mat-warn .mat-checkbox-ripple .mat-ripple-element{background-color:rgba(244,67,54,.26)}.mat-chip.mat-standard-chip{background-color:#e0e0e0;color:rgba(0,0,0,.87)}.mat-chip.mat-standard-chip .mat-chip-remove{color:rgba(0,0,0,.87);opacity:.4}.mat-chip.mat-standard-chip .mat-chip-remove:hover{opacity:.54}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#673ab7;color:#fff}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove{color:#fff;opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove:hover{opacity:.54}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn{background-color:#f44336;color:#fff}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove{color:#fff;opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove:hover{opacity:.54}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent{background-color:#ffd740;color:rgba(0,0,0,.87)}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove{color:rgba(0,0,0,.87);opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove:hover{opacity:.54}.mat-table{background:#fff}mat-footer-row,mat-header-row,mat-row,td.mat-cell,td.mat-footer-cell,th.mat-header-cell{border-bottom-color:rgba(0,0,0,.12)}.mat-header-cell{color:rgba(0,0,0,.54)}.mat-cell,.mat-footer-cell{color:rgba(0,0,0,.87)}.mat-calendar-arrow{border-top-color:rgba(0,0,0,.54)}.mat-datepicker-popup .mat-calendar-next-button,.mat-datepicker-popup .mat-calendar-previous-button,.mat-datepicker-toggle{color:rgba(0,0,0,.54)}.mat-calendar-table-header{color:rgba(0,0,0,.38)}.mat-calendar-table-header-divider::after{background:rgba(0,0,0,.12)}.mat-calendar-body-label{color:rgba(0,0,0,.54)}.mat-calendar-body-cell-content{color:rgba(0,0,0,.87);border-color:transparent}.mat-calendar-body-disabled>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){color:rgba(0,0,0,.38)}.cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){background-color:rgba(0,0,0,.04)}.mat-calendar-body-today:not(.mat-calendar-body-selected){border-color:rgba(0,0,0,.38)}.mat-calendar-body-disabled>.mat-calendar-body-today:not(.mat-calendar-body-selected){border-color:rgba(0,0,0,.18)}.mat-calendar-body-selected{background-color:#673ab7;color:#fff}.mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(103,58,183,.4)}.mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px #fff}.mat-datepicker-content{background-color:#fff;color:rgba(0,0,0,.87)}.mat-datepicker-content.mat-accent .mat-calendar-body-selected{background-color:#ffd740;color:rgba(0,0,0,.87)}.mat-datepicker-content.mat-accent .mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(255,215,64,.4)}.mat-datepicker-content.mat-accent .mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px rgba(0,0,0,.87)}.mat-datepicker-content.mat-warn .mat-calendar-body-selected{background-color:#f44336;color:#fff}.mat-datepicker-content.mat-warn .mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(244,67,54,.4)}.mat-datepicker-content.mat-warn .mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px #fff}.mat-datepicker-toggle-active{color:#673ab7}.mat-datepicker-toggle-active.mat-accent{color:#ffd740}.mat-datepicker-toggle-active.mat-warn{color:#f44336}.mat-dialog-container{background:#fff;color:rgba(0,0,0,.87)}.mat-divider{border-top-color:rgba(0,0,0,.12)}.mat-divider-vertical{border-right-color:rgba(0,0,0,.12)}.mat-expansion-panel{background:#fff;color:rgba(0,0,0,.87)}.mat-action-row{border-top-color:rgba(0,0,0,.12)}.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused,.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:rgba(0,0,0,.04)}.mat-expansion-panel-header-title{color:rgba(0,0,0,.87)}.mat-expansion-indicator::after,.mat-expansion-panel-header-description{color:rgba(0,0,0,.54)}.mat-expansion-panel-header[aria-disabled=true]{color:rgba(0,0,0,.26)}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title{color:inherit}.mat-form-field-label{color:rgba(0,0,0,.6)}.mat-hint{color:rgba(0,0,0,.6)}.mat-form-field.mat-focused .mat-form-field-label{color:#673ab7}.mat-form-field.mat-focused .mat-form-field-label.mat-accent{color:#ffd740}.mat-form-field.mat-focused .mat-form-field-label.mat-warn{color:#f44336}.mat-focused .mat-form-field-required-marker{color:#ffd740}.mat-form-field-ripple{background-color:rgba(0,0,0,.87)}.mat-form-field.mat-focused .mat-form-field-ripple{background-color:#673ab7}.mat-form-field.mat-focused .mat-form-field-ripple.mat-accent{background-color:#ffd740}.mat-form-field.mat-focused .mat-form-field-ripple.mat-warn{background-color:#f44336}.mat-form-field.mat-form-field-invalid .mat-form-field-label{color:#f44336}.mat-form-field.mat-form-field-invalid .mat-form-field-label .mat-form-field-required-marker,.mat-form-field.mat-form-field-invalid .mat-form-field-label.mat-accent{color:#f44336}.mat-form-field.mat-form-field-invalid .mat-form-field-ripple{background-color:#f44336}.mat-error{color:#f44336}.mat-form-field-appearance-legacy .mat-form-field-label{color:rgba(0,0,0,.54)}.mat-form-field-appearance-legacy .mat-hint{color:rgba(0,0,0,.54)}.mat-form-field-appearance-legacy .mat-form-field-underline{background-color:rgba(0,0,0,.42)}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-image:linear-gradient(to right,rgba(0,0,0,.42) 0,rgba(0,0,0,.42) 33%,transparent 0);background-size:4px 100%;background-repeat:repeat-x}.mat-form-field-appearance-standard .mat-form-field-underline{background-color:rgba(0,0,0,.42)}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-image:linear-gradient(to right,rgba(0,0,0,.42) 0,rgba(0,0,0,.42) 33%,transparent 0);background-size:4px 100%;background-repeat:repeat-x}.mat-form-field-appearance-fill .mat-form-field-flex{background-color:rgba(0,0,0,.04)}.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex{background-color:rgba(0,0,0,.02)}.mat-form-field-appearance-fill .mat-form-field-underline::before{background-color:rgba(0,0,0,.42)}.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-label{color:rgba(0,0,0,.38)}.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-underline::before{background-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline{color:rgba(0,0,0,.12)}.mat-form-field-appearance-outline .mat-form-field-outline-thick{color:rgba(0,0,0,.87)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{color:#673ab7}.mat-form-field-appearance-outline.mat-focused.mat-accent .mat-form-field-outline-thick{color:#ffd740}.mat-form-field-appearance-outline.mat-focused.mat-warn .mat-form-field-outline-thick{color:#f44336}.mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick{color:#f44336}.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-label{color:rgba(0,0,0,.38)}.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline{color:rgba(0,0,0,.06)}.mat-icon.mat-primary{color:#673ab7}.mat-icon.mat-accent{color:#ffd740}.mat-icon.mat-warn{color:#f44336}.mat-input-element:disabled{color:rgba(0,0,0,.38)}.mat-input-element{caret-color:#673ab7}.mat-input-element::-webkit-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element:-ms-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-ms-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-moz-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-webkit-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element:-ms-input-placeholder{color:rgba(0,0,0,.42)}.mat-accent .mat-input-element{caret-color:#ffd740}.mat-form-field-invalid .mat-input-element,.mat-warn .mat-input-element{caret-color:#f44336}.mat-list .mat-list-item,.mat-nav-list .mat-list-item,.mat-selection-list .mat-list-item{color:rgba(0,0,0,.87)}.mat-list .mat-list-option,.mat-nav-list .mat-list-option,.mat-selection-list .mat-list-option{color:rgba(0,0,0,.87)}.mat-list .mat-subheader,.mat-nav-list .mat-subheader,.mat-selection-list .mat-subheader{color:rgba(0,0,0,.54)}.mat-list-item-disabled{background-color:#eee}.mat-list-option.mat-list-item-focus,.mat-list-option:hover,.mat-nav-list .mat-list-item.mat-list-item-focus,.mat-nav-list .mat-list-item:hover{background:rgba(0,0,0,.04)}.mat-menu-panel{background:#fff}.mat-menu-item{background:0 0;color:rgba(0,0,0,.87)}.mat-menu-item[disabled],.mat-menu-item[disabled]::after{color:rgba(0,0,0,.38)}.mat-menu-item .mat-icon:not([color]),.mat-menu-item-submenu-trigger::after{color:rgba(0,0,0,.54)}.mat-menu-item-highlighted:not([disabled]),.mat-menu-item.cdk-keyboard-focused:not([disabled]),.mat-menu-item.cdk-program-focused:not([disabled]),.mat-menu-item:hover:not([disabled]){background:rgba(0,0,0,.04)}.mat-paginator{background:#fff}.mat-paginator,.mat-paginator-page-size .mat-select-trigger{color:rgba(0,0,0,.54)}.mat-paginator-decrement,.mat-paginator-increment{border-top:2px solid rgba(0,0,0,.54);border-right:2px solid rgba(0,0,0,.54)}.mat-paginator-first,.mat-paginator-last{border-top:2px solid rgba(0,0,0,.54)}.mat-icon-button[disabled] .mat-paginator-decrement,.mat-icon-button[disabled] .mat-paginator-first,.mat-icon-button[disabled] .mat-paginator-increment,.mat-icon-button[disabled] .mat-paginator-last{border-color:rgba(0,0,0,.38)}.mat-progress-bar-background{fill:#d1c4e9}.mat-progress-bar-buffer{background-color:#d1c4e9}.mat-progress-bar-fill::after{background-color:#673ab7}.mat-progress-bar.mat-accent .mat-progress-bar-background{fill:#ffe57f}.mat-progress-bar.mat-accent .mat-progress-bar-buffer{background-color:#ffe57f}.mat-progress-bar.mat-accent .mat-progress-bar-fill::after{background-color:#ffd740}.mat-progress-bar.mat-warn .mat-progress-bar-background{fill:#ffcdd2}.mat-progress-bar.mat-warn .mat-progress-bar-buffer{background-color:#ffcdd2}.mat-progress-bar.mat-warn .mat-progress-bar-fill::after{background-color:#f44336}.mat-progress-spinner circle,.mat-spinner circle{stroke:#673ab7}.mat-progress-spinner.mat-accent circle,.mat-spinner.mat-accent circle{stroke:#ffd740}.mat-progress-spinner.mat-warn circle,.mat-spinner.mat-warn circle{stroke:#f44336}.mat-radio-outer-circle{border-color:rgba(0,0,0,.54)}.mat-radio-disabled .mat-radio-outer-circle{border-color:rgba(0,0,0,.38)}.mat-radio-disabled .mat-radio-inner-circle,.mat-radio-disabled .mat-radio-ripple .mat-ripple-element{background-color:rgba(0,0,0,.38)}.mat-radio-disabled .mat-radio-label-content{color:rgba(0,0,0,.38)}.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle{border-color:#673ab7}.mat-radio-button.mat-primary .mat-radio-inner-circle{background-color:#673ab7}.mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element{background-color:rgba(103,58,183,.26)}.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#ffd740}.mat-radio-button.mat-accent .mat-radio-inner-circle{background-color:#ffd740}.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element{background-color:rgba(255,215,64,.26)}.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle{border-color:#f44336}.mat-radio-button.mat-warn .mat-radio-inner-circle{background-color:#f44336}.mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element{background-color:rgba(244,67,54,.26)}.mat-select-content,.mat-select-panel-done-animating{background:#fff}.mat-select-value{color:rgba(0,0,0,.87)}.mat-select-placeholder{color:rgba(0,0,0,.42)}.mat-select-disabled .mat-select-value{color:rgba(0,0,0,.38)}.mat-select-arrow{color:rgba(0,0,0,.54)}.mat-select-panel .mat-option.mat-selected:not(.mat-option-multiple){background:rgba(0,0,0,.12)}.mat-form-field.mat-focused.mat-primary .mat-select-arrow{color:#673ab7}.mat-form-field.mat-focused.mat-accent .mat-select-arrow{color:#ffd740}.mat-form-field.mat-focused.mat-warn .mat-select-arrow{color:#f44336}.mat-form-field .mat-select.mat-select-invalid .mat-select-arrow{color:#f44336}.mat-form-field .mat-select.mat-select-disabled .mat-select-arrow{color:rgba(0,0,0,.38)}.mat-drawer-container{background-color:#fafafa;color:rgba(0,0,0,.87)}.mat-drawer{background-color:#fff;color:rgba(0,0,0,.87)}.mat-drawer.mat-drawer-push{background-color:#fff}.mat-drawer-backdrop.mat-drawer-shown{background-color:rgba(0,0,0,.6)}.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#ffc107}.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:rgba(255,193,7,.5)}.mat-slide-toggle:not(.mat-checked) .mat-ripple-element{background-color:rgba(0,0,0,.06)}.mat-slide-toggle .mat-ripple-element{background-color:rgba(255,193,7,.12)}.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#673ab7}.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:rgba(103,58,183,.5)}.mat-slide-toggle.mat-primary:not(.mat-checked) .mat-ripple-element{background-color:rgba(0,0,0,.06)}.mat-slide-toggle.mat-primary .mat-ripple-element{background-color:rgba(103,58,183,.12)}.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#f44336}.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:rgba(244,67,54,.5)}.mat-slide-toggle.mat-warn:not(.mat-checked) .mat-ripple-element{background-color:rgba(0,0,0,.06)}.mat-slide-toggle.mat-warn .mat-ripple-element{background-color:rgba(244,67,54,.12)}.mat-disabled .mat-slide-toggle-thumb{background-color:#bdbdbd}.mat-disabled .mat-slide-toggle-bar{background-color:rgba(0,0,0,.1)}.mat-slide-toggle-thumb{background-color:#fafafa}.mat-slide-toggle-bar{background-color:rgba(0,0,0,.38)}.mat-slider-track-background{background-color:rgba(0,0,0,.26)}.mat-primary .mat-slider-thumb,.mat-primary .mat-slider-thumb-label,.mat-primary .mat-slider-track-fill{background-color:#673ab7}.mat-primary .mat-slider-thumb-label-text{color:#fff}.mat-accent .mat-slider-thumb,.mat-accent .mat-slider-thumb-label,.mat-accent .mat-slider-track-fill{background-color:#ffd740}.mat-accent .mat-slider-thumb-label-text{color:rgba(0,0,0,.87)}.mat-warn .mat-slider-thumb,.mat-warn .mat-slider-thumb-label,.mat-warn .mat-slider-track-fill{background-color:#f44336}.mat-warn .mat-slider-thumb-label-text{color:#fff}.mat-slider-focus-ring{background-color:rgba(255,215,64,.2)}.cdk-focused .mat-slider-track-background,.mat-slider:hover .mat-slider-track-background{background-color:rgba(0,0,0,.38)}.mat-slider-disabled .mat-slider-thumb,.mat-slider-disabled .mat-slider-track-background,.mat-slider-disabled .mat-slider-track-fill{background-color:rgba(0,0,0,.26)}.mat-slider-disabled:hover .mat-slider-track-background{background-color:rgba(0,0,0,.26)}.mat-slider-min-value .mat-slider-focus-ring{background-color:rgba(0,0,0,.12)}.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label{background-color:rgba(0,0,0,.87)}.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label{background-color:rgba(0,0,0,.26)}.mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb{border-color:rgba(0,0,0,.26);background-color:transparent}.mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb,.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb{border-color:rgba(0,0,0,.38)}.mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb,.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb{border-color:rgba(0,0,0,.26)}.mat-slider-has-ticks .mat-slider-wrapper::after{border-color:rgba(0,0,0,.7)}.mat-slider-horizontal .mat-slider-ticks{background-image:repeating-linear-gradient(to right,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent);background-image:-moz-repeating-linear-gradient(.0001deg,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent)}.mat-slider-vertical .mat-slider-ticks{background-image:repeating-linear-gradient(to bottom,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent)}.mat-step-header.cdk-keyboard-focused,.mat-step-header.cdk-program-focused,.mat-step-header:hover{background-color:rgba(0,0,0,.04)}.mat-step-header .mat-step-label,.mat-step-header .mat-step-optional{color:rgba(0,0,0,.38)}.mat-step-header .mat-step-icon{background-color:#673ab7;color:#fff}.mat-step-header .mat-step-icon-not-touched{background-color:rgba(0,0,0,.38);color:#fff}.mat-step-header .mat-step-label.mat-step-label-active{color:rgba(0,0,0,.87)}.mat-stepper-horizontal,.mat-stepper-vertical{background-color:#fff}.mat-stepper-vertical-line::before{border-left-color:rgba(0,0,0,.12)}.mat-stepper-horizontal-line{border-top-color:rgba(0,0,0,.12)}.mat-tab-header,.mat-tab-nav-bar{border-bottom:1px solid rgba(0,0,0,.12)}.mat-tab-group-inverted-header .mat-tab-header,.mat-tab-group-inverted-header .mat-tab-nav-bar{border-top:1px solid rgba(0,0,0,.12);border-bottom:none}.mat-tab-label,.mat-tab-link{color:rgba(0,0,0,.87)}.mat-tab-label.mat-tab-disabled,.mat-tab-link.mat-tab-disabled{color:rgba(0,0,0,.38)}.mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.87)}.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.38)}.mat-tab-group[class*=mat-background-] .mat-tab-header,.mat-tab-nav-bar[class*=mat-background-]{border-bottom:none;border-top:none}.mat-tab-group.mat-primary .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-group.mat-primary .mat-tab-link:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-primary .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-primary .mat-tab-link:not(.mat-tab-disabled):focus{background-color:rgba(209,196,233,.3)}.mat-tab-group.mat-primary .mat-ink-bar,.mat-tab-nav-bar.mat-primary .mat-ink-bar{background-color:#673ab7}.mat-tab-group.mat-primary.mat-background-primary .mat-ink-bar,.mat-tab-nav-bar.mat-primary.mat-background-primary .mat-ink-bar{background-color:#fff}.mat-tab-group.mat-accent .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-group.mat-accent .mat-tab-link:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-accent .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-accent .mat-tab-link:not(.mat-tab-disabled):focus{background-color:rgba(255,229,127,.3)}.mat-tab-group.mat-accent .mat-ink-bar,.mat-tab-nav-bar.mat-accent .mat-ink-bar{background-color:#ffd740}.mat-tab-group.mat-accent.mat-background-accent .mat-ink-bar,.mat-tab-nav-bar.mat-accent.mat-background-accent .mat-ink-bar{background-color:rgba(0,0,0,.87)}.mat-tab-group.mat-warn .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-group.mat-warn .mat-tab-link:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-warn .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-warn .mat-tab-link:not(.mat-tab-disabled):focus{background-color:rgba(255,205,210,.3)}.mat-tab-group.mat-warn .mat-ink-bar,.mat-tab-nav-bar.mat-warn .mat-ink-bar{background-color:#f44336}.mat-tab-group.mat-warn.mat-background-warn .mat-ink-bar,.mat-tab-nav-bar.mat-warn.mat-background-warn .mat-ink-bar{background-color:#fff}.mat-tab-group.mat-background-primary .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-group.mat-background-primary .mat-tab-link:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-background-primary .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-background-primary .mat-tab-link:not(.mat-tab-disabled):focus{background-color:rgba(209,196,233,.3)}.mat-tab-group.mat-background-primary .mat-tab-header,.mat-tab-group.mat-background-primary .mat-tab-links,.mat-tab-nav-bar.mat-background-primary .mat-tab-header,.mat-tab-nav-bar.mat-background-primary .mat-tab-links{background-color:#673ab7}.mat-tab-group.mat-background-primary .mat-tab-label,.mat-tab-group.mat-background-primary .mat-tab-link,.mat-tab-nav-bar.mat-background-primary .mat-tab-label,.mat-tab-nav-bar.mat-background-primary .mat-tab-link{color:#fff}.mat-tab-group.mat-background-primary .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-primary .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-primary .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-primary .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-primary .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-chevron{border-color:#fff}.mat-tab-group.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-primary .mat-ripple-element,.mat-tab-nav-bar.mat-background-primary .mat-ripple-element{background-color:rgba(255,255,255,.12)}.mat-tab-group.mat-background-accent .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-group.mat-background-accent .mat-tab-link:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-background-accent .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-background-accent .mat-tab-link:not(.mat-tab-disabled):focus{background-color:rgba(255,229,127,.3)}.mat-tab-group.mat-background-accent .mat-tab-header,.mat-tab-group.mat-background-accent .mat-tab-links,.mat-tab-nav-bar.mat-background-accent .mat-tab-header,.mat-tab-nav-bar.mat-background-accent .mat-tab-links{background-color:#ffd740}.mat-tab-group.mat-background-accent .mat-tab-label,.mat-tab-group.mat-background-accent .mat-tab-link,.mat-tab-nav-bar.mat-background-accent .mat-tab-label,.mat-tab-nav-bar.mat-background-accent .mat-tab-link{color:rgba(0,0,0,.87)}.mat-tab-group.mat-background-accent .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-accent .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-accent .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-accent .mat-tab-link.mat-tab-disabled{color:rgba(0,0,0,.4)}.mat-tab-group.mat-background-accent .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.87)}.mat-tab-group.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.4)}.mat-tab-group.mat-background-accent .mat-ripple-element,.mat-tab-nav-bar.mat-background-accent .mat-ripple-element{background-color:rgba(0,0,0,.12)}.mat-tab-group.mat-background-warn .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-group.mat-background-warn .mat-tab-link:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-background-warn .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-background-warn .mat-tab-link:not(.mat-tab-disabled):focus{background-color:rgba(255,205,210,.3)}.mat-tab-group.mat-background-warn .mat-tab-header,.mat-tab-group.mat-background-warn .mat-tab-links,.mat-tab-nav-bar.mat-background-warn .mat-tab-header,.mat-tab-nav-bar.mat-background-warn .mat-tab-links{background-color:#f44336}.mat-tab-group.mat-background-warn .mat-tab-label,.mat-tab-group.mat-background-warn .mat-tab-link,.mat-tab-nav-bar.mat-background-warn .mat-tab-label,.mat-tab-nav-bar.mat-background-warn .mat-tab-link{color:#fff}.mat-tab-group.mat-background-warn .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-warn .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-warn .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-warn .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-warn .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-chevron{border-color:#fff}.mat-tab-group.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-warn .mat-ripple-element,.mat-tab-nav-bar.mat-background-warn .mat-ripple-element{background-color:rgba(255,255,255,.12)}.mat-toolbar{background:#f5f5f5;color:rgba(0,0,0,.87)}.mat-toolbar.mat-primary{background:#673ab7;color:#fff}.mat-toolbar.mat-accent{background:#ffd740;color:rgba(0,0,0,.87)}.mat-toolbar.mat-warn{background:#f44336;color:#fff}.mat-toolbar .mat-focused .mat-form-field-ripple,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-form-field-underline{background-color:currentColor}.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-select-value{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-tooltip{background:rgba(97,97,97,.9)}.mat-tree{background:#fff}.mat-tree-node{color:rgba(0,0,0,.87)}.mat-snack-bar-container{background:#323232;color:#fff}.mat-simple-snackbar-action{color:#ffd740}\n"

/***/ }),

/***/ "./src/app/core/components/dialog/dialog.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/components/dialog/dialog.module.ts ***!
  \*********************************************************/
/*! exports provided: DialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogModule", function() { return DialogModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert/alert.component */ "./src/app/core/components/dialog/alert/alert.component.ts");
/* harmony import */ var _privacy_politics_privacy_politics_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./privacy-politics/privacy-politics.component */ "./src/app/core/components/dialog/privacy-politics/privacy-politics.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DialogModule = /** @class */ (function () {
    function DialogModule() {
    }
    DialogModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"]
            ],
            declarations: [_alert_alert_component__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"], _privacy_politics_privacy_politics_component__WEBPACK_IMPORTED_MODULE_4__["PrivacyPoliticsComponent"]],
            entryComponents: [_alert_alert_component__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"], _privacy_politics_privacy_politics_component__WEBPACK_IMPORTED_MODULE_4__["PrivacyPoliticsComponent"]]
        })
    ], DialogModule);
    return DialogModule;
}());



/***/ }),

/***/ "./src/app/core/components/dialog/privacy-politics/privacy-politics.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/core/components/dialog/privacy-politics/privacy-politics.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"privacy-politics\">\r\n  <div class=\"privacy-politics__wrapper\">\r\n    <div class=\"privacy-politics__content user-content custom-scroll\">\r\n      <h1>{{data.title}}</h1>\r\n      <h3>1. Firts part title</h3>\r\n      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. All the Lorem Ipsum generators on the\r\n        Internet tend to repeat predefined chunks as necessary.\r\n      </p>\r\n      <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites.\r\n      </p>\r\n      <h4>1.1 An Unordered List:</h4>\r\n      <ul>\r\n        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>\r\n        <li>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</li>\r\n        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>\r\n      </ul>\r\n      <h4>1.2 An Ordered List:</h4>\r\n      <ol>\r\n        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>\r\n        <li>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</li>\r\n        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>\r\n      </ol>\r\n      <p>{{data.content}}</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"privacy-politics__buttons\">\r\n    <button class=\"privacy-politics__button privacy-politics__button_cancel\"\r\n            mat-dialog-close\r\n            (click)=\"close()\">Close</button>\r\n    <button class=\"privacy-politics__button privacy-politics__button_submit\"\r\n            mat-dialog-close\r\n            (click)=\"aprouve()\">I agree</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/core/components/dialog/privacy-politics/privacy-politics.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/core/components/dialog/privacy-politics/privacy-politics.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button, .privacy-politics__button {\n  transition: all 0.25s ease-in;\n  display: inline-block;\n  box-sizing: border-box;\n  text-align: center;\n  text-decoration: none;\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 0;\n  outline: none !important;\n  white-space: nowrap; }\n  .button:hover, .privacy-politics__button:hover {\n    cursor: pointer; }\n  .button-home {\n  width: 100%; }\n  .button_medium, .privacy-politics__button {\n  font: 400 normal 16px / 1.5 \"Weissenhof Grotesk\";\n  padding: 11px 22px; }\n  .button_light-blue {\n  color: #9ed1e9;\n  border-color: #9ed1e9;\n  background-color: transparent; }\n  .button_light-blue:hover {\n    color: white;\n    border-color: white;\n    background-color: transparent; }\n  .button_deep-blue, .privacy-politics__button_cancel {\n  color: #50748a;\n  border-color: #50748a;\n  background-color: transparent; }\n  .button_deep-blue:hover, .privacy-politics__button_cancel:hover {\n    box-shadow: 0 0 5px #50748a; }\n  .button_deep-blue:active, .privacy-politics__button_cancel:active {\n    box-shadow: none; }\n  .button_white-filled {\n  color: #333e48;\n  border-color: white;\n  background-color: white; }\n  .button_white-filled:hover {\n    box-shadow: 0 0 5px #9ed1e9; }\n  .button_white-filled:active {\n    box-shadow: none; }\n  .button_black-gray-filled, .privacy-politics__button_submit {\n  color: white;\n  border-color: #21282e;\n  background-color: #21282e; }\n  .button_black-gray-filled:hover, .privacy-politics__button_submit:hover {\n    box-shadow: 0 0 5px #21282e; }\n  .button_black-gray-filled:active, .privacy-politics__button_submit:active {\n    box-shadow: none; }\n  .privacy-politics {\n  overflow: hidden;\n  height: 100%; }\n  .privacy-politics__wrapper {\n    display: flex;\n    overflow: hidden;\n    max-height: calc(100% - 169px);\n    padding: 24px 20px 24px;\n    flex-wrap: nowrap; }\n  @media (min-width: 544px) {\n      .privacy-politics__wrapper {\n        max-height: calc(100% - 96px); } }\n  @media (min-width: 768px) and (max-width: 1199px) {\n      .privacy-politics__wrapper {\n        padding: 40px 40px 20px; } }\n  @media (min-width: 1200px) {\n      .privacy-politics__wrapper {\n        padding: 60px 105px 24px; } }\n  .privacy-politics__content {\n    padding-right: 20px; }\n  .privacy-politics__buttons {\n    display: flex;\n    margin-top: auto;\n    margin-bottom: unset;\n    padding: 24px 20px;\n    border-top: 1px solid #b3b2b1;\n    align-items: center; }\n  @media (min-width: 768px) {\n      .privacy-politics__buttons {\n        height: 96px; } }\n  @media (min-width: 768px) and (max-width: 1199px) {\n      .privacy-politics__buttons {\n        padding: 24px 40px; } }\n  @media (min-width: 1200px) {\n      .privacy-politics__buttons {\n        padding: 24px 105px; } }\n  .privacy-politics__button {\n    width: 100%;\n    margin: 0; }\n  @media (min-width: 544px) {\n      .privacy-politics__button {\n        width: calc(50% - 12px); } }\n  @media (max-width: 543px) {\n      .privacy-politics__button:first-child {\n        margin-top: 24px;\n        order: 2; }\n      .privacy-politics__button:last-child {\n        order: 1; } }\n  @media (min-width: 544px) {\n    .privacy-politics__button_submit {\n      margin-left: auto; } }\n"

/***/ }),

/***/ "./src/app/core/components/dialog/privacy-politics/privacy-politics.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/core/components/dialog/privacy-politics/privacy-politics.component.ts ***!
  \***************************************************************************************/
/*! exports provided: PrivacyPoliticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPoliticsComponent", function() { return PrivacyPoliticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var PrivacyPoliticsComponent = /** @class */ (function () {
    function PrivacyPoliticsComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    PrivacyPoliticsComponent.prototype.close = function () {
        this.dialogRef.close(false);
    };
    PrivacyPoliticsComponent.prototype.aprouve = function () {
        this.dialogRef.close(true);
    };
    PrivacyPoliticsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'privacy-politics',
            styles: [__webpack_require__(/*! ./privacy-politics.component.scss */ "./src/app/core/components/dialog/privacy-politics/privacy-politics.component.scss")],
            template: __webpack_require__(/*! ./privacy-politics.component.html */ "./src/app/core/components/dialog/privacy-politics/privacy-politics.component.html")
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], PrivacyPoliticsComponent);
    return PrivacyPoliticsComponent;
}());



/***/ }),

/***/ "./src/app/core/components/input/input.component.html":
/*!************************************************************!*\
  !*** ./src/app/core/components/input/input.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<textarea \r\n    *ngIf=\"controlType==='texterea'\" \r\n    title=\"\">\r\n</textarea>\r\n\r\n<input \r\n    *ngIf=\"controlType==='text'\"\r\n    type=\"text\"\r\n    title=\"\"\r\n    [formControl]='control'>"

/***/ }),

/***/ "./src/app/core/components/input/input.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/components/input/input.component.ts ***!
  \**********************************************************/
/*! exports provided: InputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function() { return InputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _constants_date_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/date.constants */ "./src/app/core/components/constants/date.constants.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return InputComponent; }),
    multi: true
};
var InputComponent = /** @class */ (function () {
    function InputComponent() {
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.minDate = _constants_date_constants__WEBPACK_IMPORTED_MODULE_2__["DATE_RANGE_MIN"];
        this.maxDate = _constants_date_constants__WEBPACK_IMPORTED_MODULE_2__["DATE_RANGE_MAX"];
        this.types = {
            text: false,
            longText: false,
            select: false,
            date: false,
            time: false,
            numeric: false
        };
    }
    InputComponent.prototype.ngOnInit = function () {
        this.setType();
        this.initListener();
    };
    InputComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    InputComponent.prototype.setType = function () {
        this.types[this.controlType] = true;
    };
    InputComponent.prototype.writeValue = function (value) {
        this.control.setValue(value);
    };
    InputComponent.prototype.registerOnChange = function (fn) {
        this._onChangeCallback = fn;
    };
    InputComponent.prototype.registerOnTouched = function (fn) {
        this._onTouchedCallback = fn;
    };
    InputComponent.prototype.initListener = function () {
        var _this = this;
        this.subscription = this.control.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(250), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])()).subscribe(function (item) {
            _this._onChangeCallback(item);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], InputComponent.prototype, "controlType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], InputComponent.prototype, "itemList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Date)
    ], InputComponent.prototype, "max", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Date)
    ], InputComponent.prototype, "min", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], InputComponent.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InputComponent.prototype, "value", void 0);
    InputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-input',
            template: __webpack_require__(/*! ./input.component.html */ "./src/app/core/components/input/input.component.html"),
            providers: [INPUT_CONTROL_VALUE_ACCESSOR]
        })
    ], InputComponent);
    return InputComponent;
}());



/***/ }),

/***/ "./src/app/core/components/models/checkbox-item.model.html":
/*!*****************************************************************!*\
  !*** ./src/app/core/components/models/checkbox-item.model.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input \r\n    type=\"checkbox\"\r\n    title=\"\"\r\n    [formControl]='control'>"

/***/ }),

/***/ "./src/app/core/components/models/checkbox-item.model.ts":
/*!***************************************************************!*\
  !*** ./src/app/core/components/models/checkbox-item.model.ts ***!
  \***************************************************************/
/*! exports provided: CheckboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxComponent", function() { return CheckboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CHECKBOX_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return CheckboxComponent; }),
    multi: true
};
var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent() {
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
    }
    CheckboxComponent.prototype.writeValue = function (value) {
        this.control.setValue(value);
    };
    CheckboxComponent.prototype.registerOnChange = function (fn) {
        this._onChangeCallback = fn;
    };
    CheckboxComponent.prototype.registerOnTouched = function (fn) {
        this._onTouchedCallback = fn;
    };
    CheckboxComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    CheckboxComponent.prototype.ngOnInit = function () {
        this.initListener();
    };
    CheckboxComponent.prototype.initListener = function () {
        var _this = this;
        this.subscription = this.control.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(250), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])()).subscribe(function (item) {
            _this._onChangeCallback(item);
        });
    };
    CheckboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-checkbox',
            template: __webpack_require__(/*! ./checkbox-item.model.html */ "./src/app/core/components/models/checkbox-item.model.html"),
            providers: [CHECKBOX_CONTROL_VALUE_ACCESSOR]
        })
    ], CheckboxComponent);
    return CheckboxComponent;
}());



/***/ }),

/***/ "./src/app/core/components/models/error-dialog.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/core/components/models/error-dialog.component.ts ***!
  \******************************************************************/
/*! exports provided: ErrorDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorDialogComponent", function() { return ErrorDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorDialogComponent = /** @class */ (function () {
    function ErrorDialogComponent() {
    }
    ErrorDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error-dialog',
            template: "<div *ngFor=\"let error of errors\"><span>{{error}}</span><br /></div>"
        }),
        __metadata("design:paramtypes", [])
    ], ErrorDialogComponent);
    return ErrorDialogComponent;
}());



/***/ }),

/***/ "./src/app/core/components/spinner/global-spinner.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/core/components/spinner/global-spinner.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loader-wrapper\" >\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/core/components/spinner/global-spinner.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/core/components/spinner/global-spinner.component.ts ***!
  \*********************************************************************/
/*! exports provided: GlobalSpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalSpinnerComponent", function() { return GlobalSpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shared_global_spinner_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/shared/global-spinner.service */ "./src/app/core/services/shared/global-spinner.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GlobalSpinnerComponent = /** @class */ (function () {
    function GlobalSpinnerComponent(siteSpinnerService) {
        var _this = this;
        this.siteSpinnerService = siteSpinnerService;
        this.isLoading = false;
        this.loadingText = '';
        siteSpinnerService.spinnerStateStream.subscribe(function (state) { return _this.isLoading = state; });
        siteSpinnerService.spinnerTextStream.subscribe(function (text) { return _this.loadingText = text; });
    }
    GlobalSpinnerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-global-spinner',
            template: __webpack_require__(/*! ./global-spinner.component.html */ "./src/app/core/components/spinner/global-spinner.component.html"),
        }),
        __metadata("design:paramtypes", [_services_shared_global_spinner_service__WEBPACK_IMPORTED_MODULE_1__["GlobalSpinnerService"]])
    ], GlobalSpinnerComponent);
    return GlobalSpinnerComponent;
}());



/***/ }),

/***/ "./src/app/core/components/spinner/spinner.component.html":
/*!****************************************************************!*\
  !*** ./src/app/core/components/spinner/spinner.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"visible\">\r\n    <p [ngClass]=\"classes\">\r\n        <i class=\"fa fa-spin fa-spinner\"></i>\r\n        <br />\r\n        <span class=\"spinner-text\">{{text}}</span>\r\n    </p>\r\n</div>"

/***/ }),

/***/ "./src/app/core/components/spinner/spinner.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/core/components/spinner/spinner.component.ts ***!
  \**************************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent() {
        this.visible = true;
        this.classes = 'text';
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SpinnerComponent.prototype, "visible", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], SpinnerComponent.prototype, "delay", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SpinnerComponent.prototype, "text", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SpinnerComponent.prototype, "classes", void 0);
    SpinnerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-spinner',
            template: __webpack_require__(/*! ./spinner.component.html */ "./src/app/core/components/spinner/spinner.component.html"),
        })
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "./src/app/core/directives/directives.module.ts":
/*!******************************************************!*\
  !*** ./src/app/core/directives/directives.module.ts ***!
  \******************************************************/
/*! exports provided: DirectivesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectivesModule", function() { return DirectivesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * DirectivesModule class
 */
var DirectivesModule = /** @class */ (function () {
    function DirectivesModule() {
    }
    DirectivesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            exports: []
        })
    ], DirectivesModule);
    return DirectivesModule;
}());



/***/ }),

/***/ "./src/app/core/services/api/account.api.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/services/api/account.api.service.ts ***!
  \**********************************************************/
/*! exports provided: AccountApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountApiService", function() { return AccountApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service_ts_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http-service.ts/http.service */ "./src/app/core/services/api/http-service.ts/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccountApiService = /** @class */ (function () {
    function AccountApiService(http) {
        this.http = http;
        this.urlPrefix = 'api/account/';
    }
    AccountApiService.prototype.getAuthToken = function (model) {
        return this.http.post(this.urlPrefix + "login", model);
    };
    AccountApiService.prototype.register = function (model) {
        return this.http.post(this.urlPrefix + "register", model);
    };
    AccountApiService.prototype.resendCode = function (model) {
        return this.http.post(this.urlPrefix + "resendPhoneConfirmation", model);
    };
    AccountApiService.prototype.confirmPhone = function (model) {
        return this.http.post(this.urlPrefix + "confirmPhone", model);
    };
    AccountApiService.prototype.setPassword = function (model) {
        return this.http.post(this.urlPrefix + "setPassword", model);
    };
    AccountApiService.prototype.changePassword = function (model) {
        return this.http.post(this.urlPrefix + "changePassword", model);
    };
    AccountApiService.prototype.forgotPassword = function (email) {
        return this.http.post(this.urlPrefix + "forgotPassword", email);
    };
    AccountApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_http_service_ts_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], AccountApiService);
    return AccountApiService;
}());



/***/ }),

/***/ "./src/app/core/services/api/http-service.ts/http.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/core/services/api/http-service.ts/http.service.ts ***!
  \*******************************************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _authentification_auth_token_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../authentification/auth-token-provider */ "./src/app/core/services/authentification/auth-token-provider.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../environments/environment.prod */ "./src/environments/environment.prod.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HttpService = /** @class */ (function () {
    function HttpService(httpClient, router, authTokenProvider) {
        this.httpClient = httpClient;
        this.router = router;
        this.authTokenProvider = authTokenProvider;
        this.logoutMessageStream = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        var baseUrl = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__["environment"].production ? 'http://kordamentha3467.cloudapp.net:8081' : 'http://localhost:58412';
        this.setBaseUrl(baseUrl);
    }
    HttpService.prototype.request = function (method, url, body, options) {
        options = this.IntitializeOptions(options, body);
        this.setAuthHeader(options);
        url = this.applyBaseUrl(url);
        return this.httpClient.request(method, url, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.catchAuthError()));
    };
    HttpService.prototype.get = function (url, options) {
        return this.request('get', url, null, options);
    };
    HttpService.prototype.post = function (url, body, options) {
        return this.request('post', url, body, options);
    };
    HttpService.prototype.put = function (url, body, options) {
        return this.request('put', url, body, options);
    };
    HttpService.prototype.delete = function (url, options) {
        return this.request('delete', url, options);
    };
    HttpService.prototype.setBaseUrl = function (baseUrl) {
        this.baseUrl = baseUrl.endsWith('/') ? baseUrl : baseUrl + '/';
    };
    HttpService.prototype.catchAuthError = function () {
        var _this = this;
        return function (response) {
            if (response.status === 401) {
                _this.logoutMessageStream.next();
                _this.router.navigate(['signIn']);
            }
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(response);
        };
    };
    HttpService.prototype.setAuthHeader = function (options) {
        var token = this.authTokenProvider.getToken();
        options.headers = options.headers.set('Authorization', "Bearer " + token);
    };
    HttpService.prototype.IntitializeOptions = function (options, body) {
        if (!options) {
            options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]() };
        }
        if (!options.headers) {
            options.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        }
        options.headers = options.headers.set('Content-Type', "Application/json");
        options.body = body;
        return options;
    };
    HttpService.prototype.applyBaseUrl = function (url) {
        url = url.startsWith('/') ? url.slice(1) : url;
        return this.baseUrl + url;
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"],
            _authentification_auth_token_provider__WEBPACK_IMPORTED_MODULE_4__["AuthTokenProvider"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/core/services/api/user.api.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/services/api/user.api.service.ts ***!
  \*******************************************************/
/*! exports provided: UserApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserApiService", function() { return UserApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service_ts_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http-service.ts/http.service */ "./src/app/core/services/api/http-service.ts/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserApiService = /** @class */ (function () {
    function UserApiService(http) {
        this.http = http;
        this.urlPrefix = 'user/';
    }
    UserApiService.prototype.getDetails = function (userId) {
        return this.http.get(this.urlPrefix + "getDetails/?userId=" + userId);
    };
    UserApiService.prototype.getAuthenticatedUserDetails = function () {
        return this.http.get(this.urlPrefix + "getAuthenticatedUserDetails");
    };
    UserApiService.prototype.updateUserInfo = function (model) {
        return this.http.post(this.urlPrefix + "update", model);
    };
    UserApiService.prototype.changePassword = function (model) {
        return this.http.post(this.urlPrefix + "changePassword", model);
    };
    UserApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_http_service_ts_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], UserApiService);
    return UserApiService;
}());



/***/ }),

/***/ "./src/app/core/services/authentification/auth-token-provider.ts":
/*!***********************************************************************!*\
  !*** ./src/app/core/services/authentification/auth-token-provider.ts ***!
  \***********************************************************************/
/*! exports provided: AuthTokenProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthTokenProvider", function() { return AuthTokenProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/constants/app.constants */ "./src/app/core/components/constants/app.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthTokenProvider = /** @class */ (function () {
    function AuthTokenProvider() {
        this.authToken = this.loadTokenFromStorage();
    }
    AuthTokenProvider.prototype.getToken = function () {
        return this.authToken;
    };
    AuthTokenProvider.prototype.setToken = function (token) {
        this.authToken = token;
        this.saveTokenToStorage(token);
    };
    AuthTokenProvider.prototype.deleteToken = function () {
        this.authToken = null;
        this.deleteTokenFromStorage();
    };
    AuthTokenProvider.prototype.saveTokenToStorage = function (token) {
        localStorage.setItem(_components_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__["TokenName"], token);
    };
    AuthTokenProvider.prototype.loadTokenFromStorage = function () {
        return localStorage.getItem(_components_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__["TokenName"]);
    };
    AuthTokenProvider.prototype.deleteTokenFromStorage = function () {
        localStorage.removeItem(_components_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__["TokenName"]);
    };
    AuthTokenProvider = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AuthTokenProvider);
    return AuthTokenProvider;
}());



/***/ }),

/***/ "./src/app/core/services/authentification/authentication.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/core/services/authentification/authentication.module.ts ***!
  \*************************************************************************/
/*! exports provided: AuthenticationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return AuthenticationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.service */ "./src/app/core/services/authentification/authentication.service.ts");
/* harmony import */ var _authorize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authorize */ "./src/app/core/services/authentification/authorize.ts");
/* harmony import */ var _auth_token_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-token-provider */ "./src/app/core/services/authentification/auth-token-provider.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AuthenticationModule = /** @class */ (function () {
    function AuthenticationModule() {
    }
    AuthenticationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            providers: [
                _authorize__WEBPACK_IMPORTED_MODULE_2__["Authorize"],
                _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"],
                _auth_token_provider__WEBPACK_IMPORTED_MODULE_3__["AuthTokenProvider"]
            ]
        })
    ], AuthenticationModule);
    return AuthenticationModule;
}());



/***/ }),

/***/ "./src/app/core/services/authentification/authentication.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/core/services/authentification/authentication.service.ts ***!
  \**************************************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_user_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/user.api.service */ "./src/app/core/services/api/user.api.service.ts");
/* harmony import */ var _shared_global_spinner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/global-spinner.service */ "./src/app/core/services/shared/global-spinner.service.ts");
/* harmony import */ var _auth_token_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-token-provider */ "./src/app/core/services/authentification/auth-token-provider.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _api_http_service_ts_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/http-service.ts/http.service */ "./src/app/core/services/api/http-service.ts/http.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(userApiService, spinnerService, authTokenProvider, httpService) {
        var _this = this;
        this.userApiService = userApiService;
        this.spinnerService = spinnerService;
        this.authTokenProvider = authTokenProvider;
        this.httpService = httpService;
        this.authenticatedUserSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.httpService.logoutMessageStream.subscribe(function () {
            _this.logOut();
        });
        var token = authTokenProvider.getToken();
        if (this.authTokenProvider.getToken()) {
            this.logIn(token);
        }
    }
    Object.defineProperty(AuthenticationService.prototype, "isLoggedIn", {
        get: function () {
            return this._isLoggedIn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthenticationService.prototype, "authenticatedUser", {
        get: function () {
            return this.user;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.updateAuthenticatedUserInfo = function (user) {
        this.user = user;
        this.authenticatedUserSource.next(this.user);
    };
    AuthenticationService.prototype.logIn = function (token) {
        this._isLoggedIn = true;
        this.authTokenProvider.setToken(token);
        // this.loadUser();
    };
    AuthenticationService.prototype.logOut = function () {
        this._isLoggedIn = false;
        this.updateAuthenticatedUserInfo(null);
        this.authTokenProvider.deleteToken();
    };
    AuthenticationService.prototype.loadUser = function () {
        var _this = this;
        this.spinnerService.show();
        this.userApiService.getAuthenticatedUserDetails()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])((function () { return _this.spinnerService.hide(); })))
            .subscribe(function (user) {
            _this.updateAuthenticatedUserInfo(user);
        });
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_api_user_api_service__WEBPACK_IMPORTED_MODULE_1__["UserApiService"],
            _shared_global_spinner_service__WEBPACK_IMPORTED_MODULE_2__["GlobalSpinnerService"],
            _auth_token_provider__WEBPACK_IMPORTED_MODULE_3__["AuthTokenProvider"],
            _api_http_service_ts_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/core/services/authentification/authorize.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/services/authentification/authorize.ts ***!
  \*************************************************************/
/*! exports provided: Authorize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Authorize", function() { return Authorize; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication.service */ "./src/app/core/services/authentification/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Authorize = /** @class */ (function () {
    function Authorize(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    Authorize.prototype.canActivate = function () {
        if (this.authenticationService.isLoggedIn) {
            return true;
        }
        else {
            this.router.navigate(['home']);
            return false;
        }
    };
    Authorize = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], Authorize);
    return Authorize;
}());



/***/ }),

/***/ "./src/app/core/services/shared/global-spinner.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/core/services/shared/global-spinner.service.ts ***!
  \****************************************************************/
/*! exports provided: GlobalSpinnerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalSpinnerService", function() { return GlobalSpinnerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var GlobalSpinnerService = /** @class */ (function () {
    function GlobalSpinnerService() {
        this.spinnerStateStream = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.spinnerTextStream = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    GlobalSpinnerService.prototype.show = function (text) {
        if (text === void 0) { text = ''; }
        this.spinnerStateStream.next(true);
        this.spinnerTextStream.next(text);
    };
    GlobalSpinnerService.prototype.hide = function () {
        this.spinnerStateStream.next(false);
    };
    GlobalSpinnerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], GlobalSpinnerService);
    return GlobalSpinnerService;
}());



/***/ }),

/***/ "./src/app/core/services/shared/page.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/core/services/shared/page.directive.ts ***!
  \********************************************************/
/*! exports provided: PageDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageDirective", function() { return PageDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageDirective = /** @class */ (function () {
    function PageDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    PageDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appAdHost]',
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], PageDirective);
    return PageDirective;
}());



/***/ }),

/***/ "./src/app/utils/validatorBuilder.ts":
/*!*******************************************!*\
  !*** ./src/app/utils/validatorBuilder.ts ***!
  \*******************************************/
/*! exports provided: phoneMask, passwordValidator, emailValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phoneMask", function() { return phoneMask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordValidator", function() { return passwordValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailValidator", function() { return emailValidator; });
var phoneMask = ['+', '6', '1', '7', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
var specialCharacters = /\!|\"|\#|\$|\%|\&|\'|\(|\)|\*|\+|\,|\-|\.|\/|\:|\;|\<|\=|\>|\?|\@|\[|\]|\^|\_|\`|\{|\||\}|\~/;
function passwordValidator(_a) {
    var value = _a.value;
    var hasNumber = /[0-9]/.test(value);
    var hasCapitalLetter = /[A-Z]/.test(value);
    var hasLowercaseLetter = /[a-z]/.test(value);
    var isLengthValid = value ? value.length > 7 : false;
    var specialCharacter = specialCharacters.test(value);
    var passwordValid = hasNumber && hasCapitalLetter && hasLowercaseLetter && isLengthValid && specialCharacter;
    if (!passwordValid) {
        return { invalidPassword: 'error message' };
    }
    return null;
}
function emailValidator(_a) {
    var value = _a.value;
    var email = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/.test(value);
    if (!email) {
        return { invalidPassword: 'error message' };
    }
    return null;
}


/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: false
};


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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Женя\Repos\kordamenta\kordamentha-pod\KM.POD\Client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map