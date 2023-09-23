"use strict";
(self["webpackChunksound_lab"] = self["webpackChunksound_lab"] || []).push([["src_app_modules_public_public_module_ts"],{

/***/ 570:
/*!******************************************************************************!*\
  !*** ./src/app/modules/public/Components/email-form/email-form.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmailFormComponent: () => (/* binding */ EmailFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class EmailFormComponent {}
_class = EmailFormComponent;
_class.ɵfac = function EmailFormComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-email-form"]],
  decls: 2,
  vars: 0,
  template: function EmailFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "email-form works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  encapsulation: 2
});

/***/ }),

/***/ 6529:
/*!*************************************************************************!*\
  !*** ./src/app/modules/public/Views/contact-me/contact-me.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactMeComponent: () => (/* binding */ ContactMeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class ContactMeComponent {}
_class = ContactMeComponent;
_class.ɵfac = function ContactMeComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-contact-me"]],
  decls: 2,
  vars: 0,
  consts: [[1, "bg-white"]],
  template: function ContactMeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "contact-me works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  encapsulation: 2
});

/***/ }),

/***/ 7244:
/*!*************************************************************!*\
  !*** ./src/app/modules/public/Views/home/home.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class HomeComponent {}
_class = HomeComponent;
_class.ɵfac = function HomeComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-home"]],
  decls: 2,
  vars: 0,
  consts: [[1, "bg-white"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "home works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  encapsulation: 2
});

/***/ }),

/***/ 5116:
/*!*************************************************!*\
  !*** ./src/app/modules/public/public.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PublicModule: () => (/* binding */ PublicModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _sub_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sub-routing.module */ 930);
/* harmony import */ var _Views_contact_me_contact_me_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Views/contact-me/contact-me.component */ 6529);
/* harmony import */ var _Views_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Views/home/home.component */ 7244);
/* harmony import */ var _Components_email_form_email_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/email-form/email-form.component */ 570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;






class PublicModule {}
_class = PublicModule;
_class.ɵfac = function PublicModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _sub_routing_module__WEBPACK_IMPORTED_MODULE_0__.SubRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](PublicModule, {
    declarations: [_Views_contact_me_contact_me_component__WEBPACK_IMPORTED_MODULE_1__.ContactMeComponent, _Views_home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent, _Components_email_form_email_form_component__WEBPACK_IMPORTED_MODULE_3__.EmailFormComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _sub_routing_module__WEBPACK_IMPORTED_MODULE_0__.SubRoutingModule]
  });
})();

/***/ }),

/***/ 930:
/*!******************************************************!*\
  !*** ./src/app/modules/public/sub-routing.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubRoutingModule: () => (/* binding */ SubRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _Views_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Views/home/home.component */ 7244);
/* harmony import */ var _constants_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @constants/routes */ 1276);
/* harmony import */ var _Views_contact_me_contact_me_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Views/contact-me/contact-me.component */ 6529);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;






const routes = [{
  path: _constants_routes__WEBPACK_IMPORTED_MODULE_1__.PATHS_MODULE_CLIENT.root,
  component: _Views_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: _constants_routes__WEBPACK_IMPORTED_MODULE_1__.PATHS_MODULE_CLIENT.home,
  component: _Views_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: _constants_routes__WEBPACK_IMPORTED_MODULE_1__.PATHS_MODULE_CLIENT.contactUs,
  component: _Views_contact_me_contact_me_component__WEBPACK_IMPORTED_MODULE_2__.ContactMeComponent
}];
class SubRoutingModule {}
_class = SubRoutingModule;
_class.ɵfac = function SubRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SubRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_modules_public_public_module_ts.js.map