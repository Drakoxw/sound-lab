"use strict";
(self["webpackChunksound_lab"] = self["webpackChunksound_lab"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _constants_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @constants/routes */ 1276);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;




const routes = [{
  path: _constants_routes__WEBPACK_IMPORTED_MODULE_0__.MODULES.PUBLIC,
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_public_public_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! @modulePublic/public.module */ 5116)).then(m => m.PublicModule)
}, {
  path: '**',
  redirectTo: '',
  pathMatch: 'full'
}];
class AppRoutingModule {}
_class = AppRoutingModule;
_class.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  }), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _shared_chat_me_whatsapp_chat_me_whatsapp_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/chat-me-whatsapp/chat-me-whatsapp.component */ 9688);
/* harmony import */ var _shared_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/nav-bar/nav-bar.component */ 5433);
var _class;




class AppComponent {
  constructor() {
    this.title = 'sound-lab';
  }
}
_class = AppComponent;
_class.ɵfac = function AppComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-root"]],
  decls: 4,
  vars: 0,
  consts: [[1, "w-full", "h-screen"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "main", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-nav-bar")(2, "router-outlet")(3, "app-chat-me-whatsapp");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _shared_chat_me_whatsapp_chat_me_whatsapp_component__WEBPACK_IMPORTED_MODULE_0__.ChatMeWhatsappComponent, _shared_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__.NavBarComponent],
  styles: ["main[_ngcontent-%COMP%] {\n  background-image: url('bg-movil.webp');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n@media (min-width: 900px) {\n  main[_ngcontent-%COMP%] {\n    background-image: url('bg-pc.webp');\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0NBQTZEO0VBQzdELDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0U7SUFDRSxtQ0FBMEQ7RUFDNUQ7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW4ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvaW1nL2JhY2tncm91bmQvYmctbW92aWwud2VicCk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7XHJcbiAgbWFpbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL2ltZy9iYWNrZ3JvdW5kL2JnLXBjLndlYnApO1xyXG4gIH1cclxufVxyXG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQ0FBNkQ7RUFDN0QsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRTtJQUNFLG1DQUEwRDtFQUM1RDtBQUNGOztBQUVBLDR1QkFBNHVCIiwic291cmNlc0NvbnRlbnQiOlsibWFpbiB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9pbWcvYmFja2dyb3VuZC9iZy1tb3ZpbC53ZWJwKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIHtcclxuICBtYWluIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvaW1nL2JhY2tncm91bmQvYmctcGMud2VicCk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _shared_chat_me_whatsapp_chat_me_whatsapp_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/chat-me-whatsapp/chat-me-whatsapp.component */ 9688);
/* harmony import */ var _shared_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/nav-bar/nav-bar.component */ 5433);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;






class AppModule {}
_class = AppModule;
_class.ɵfac = function AppModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: _class,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _shared_chat_me_whatsapp_chat_me_whatsapp_component__WEBPACK_IMPORTED_MODULE_2__.ChatMeWhatsappComponent, _shared_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__.NavBarComponent]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _shared_chat_me_whatsapp_chat_me_whatsapp_component__WEBPACK_IMPORTED_MODULE_2__.ChatMeWhatsappComponent, _shared_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__.NavBarComponent]
  });
})();

/***/ }),

/***/ 2033:
/*!******************************************!*\
  !*** ./src/app/core/constants/common.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WHATSAPP_LINK: () => (/* binding */ WHATSAPP_LINK),
/* harmony export */   WHATSAPP_PHONE: () => (/* binding */ WHATSAPP_PHONE)
/* harmony export */ });
const WHATSAPP_PHONE = 3143528964;
const WHATSAPP_LINK = "https://wa.me/57" + WHATSAPP_PHONE;

/***/ }),

/***/ 1276:
/*!******************************************!*\
  !*** ./src/app/core/constants/routes.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MODULES: () => (/* binding */ MODULES),
/* harmony export */   PATHS_FULL_CLIENT: () => (/* binding */ PATHS_FULL_CLIENT),
/* harmony export */   PATHS_MODULE_CLIENT: () => (/* binding */ PATHS_MODULE_CLIENT)
/* harmony export */ });
const MODULES = {
  PUBLIC: '',
  USER: 'user'
};
// RUTAS DEL CLIENTE EN MODULO
const PATHS_MODULE_CLIENT = {
  root: '',
  home: 'inicio',
  contactUs: 'contactanos'
  // aboutUs: 'quienes-somos',
  // login: 'login',
  // listClients: 'list-clients'
};
// RUTAS COMPLETAS PARA EL ROUTE LINK
const PATHS_FULL_CLIENT = {
  root: '',
  home: `${MODULES.PUBLIC}/${PATHS_MODULE_CLIENT.home}`,
  contactUs: `${MODULES.PUBLIC}/${PATHS_MODULE_CLIENT.contactUs}`
  // aboutUs: `${MODULES.PUBLIC}/${PATHS_MODULE_CLIENT.aboutUs}`,
  // login: `${MODULES.USER}/${PATHS_MODULE_CLIENT.login}`,
  // listClients: `${MODULES.USER}/${PATHS_MODULE_CLIENT.listClients}`,
};

/***/ }),

/***/ 9688:
/*!***********************************************************************!*\
  !*** ./src/app/shared/chat-me-whatsapp/chat-me-whatsapp.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChatMeWhatsappComponent: () => (/* binding */ ChatMeWhatsappComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _constants_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @constants/common */ 2033);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;



class ChatMeWhatsappComponent {
  constructor() {
    this.linkWhastapp = _constants_common__WEBPACK_IMPORTED_MODULE_0__.WHATSAPP_LINK;
  }
}
_class = ChatMeWhatsappComponent;
_class.ɵfac = function ChatMeWhatsappComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-chat-me-whatsapp"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
  decls: 3,
  vars: 1,
  consts: [[1, "absolute", "cursor-pointer", "bottom-6", "right-6", "md:bottom-8", "md:right-8", "z-50"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"], ["src", "../../../assets/icons/whatsapp.png", "alt", "icon whatsapp", 1, "w-12", "h-12"]],
  template: function ChatMeWhatsappComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "picture", 0)(1, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx.linkWhastapp, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
  encapsulation: 2
});

/***/ }),

/***/ 5433:
/*!*****************************************************!*\
  !*** ./src/app/shared/nav-bar/nav-bar.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavBarComponent: () => (/* binding */ NavBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _constants_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @constants/common */ 2033);
/* harmony import */ var _constants_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @constants/routes */ 1276);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;







class NavBarComponent {
  constructor() {
    this.linkWhastapp = _constants_common__WEBPACK_IMPORTED_MODULE_0__.WHATSAPP_LINK;
    this.routes = _constants_routes__WEBPACK_IMPORTED_MODULE_1__.PATHS_FULL_CLIENT;
    this.showNavbar = false;
  }
}
_class = NavBarComponent;
_class.ɵfac = function NavBarComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-nav-bar"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
  decls: 14,
  vars: 3,
  consts: [["data-te-navbar-ref", "", 1, "relative", "flex", "w-full", "flex-nowrap", "items-end", "justify-between", "py-2", "text-gray-200", "shadow-lg", "hover:text-white", "focus:text-white", "lg:flex-wrap", "lg:justify-end", "lg:py-4", "bg-black", "bg-opacity-20"], [1, "flex", "w-full", "flex-wrap", "items-end", "justify-end"], ["type", "button", "data-te-collapse-init", "", "data-te-target", "#navbarSupportedContent7", "aria-controls", "navbarSupportedContent7", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "block", "border-0", "bg-transparent", "px-2", "hover:no-underline", "hover:shadow-none", "focus:no-underline", "focus:shadow-none", "focus:outline-none", "focus:ring-0", "dark:text-neutral-200", "lg:hidden", "h-12", 3, "click"], [1, "[&>svg]:w-12", "mr-3"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "currentColor", 1, "h-auto", "w-12"], ["fill-rule", "evenodd", "d", "M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z", "clip-rule", "evenodd"], ["id", "navbarSupportedContent7", "data-te-collapse-item", "", 1, "!visible", "mt-2", "flex-grow", "basis-[100%]", "lg:mt-0", "lg:!flex", "lg:basis-auto", 3, "ngClass"], ["data-te-navbar-nav-ref", "", 1, "list-style-none", "ml-auto", "flex", "flex-col", "pl-0", "lg:mt-1", "lg:flex-row", "text-gray-400", "lg:mr-4", 3, "click"], ["data-te-nav-item-ref", "", 1, "hover:bg-pink-800", "hover:bg-opacity-50", "hover:text-white", "pl-2", "lg:mb-0", "lg:pl-0", "lg:pr-1", "p-2", "cursor-pointer"], ["routerLinkActive", "", 1, "p-0", "transition", "duration-200", "hover:ease-in-out", "focus:text-white", "motion-reduce:transition-none", "lg:px-2", "[&.active]:text-white", 3, "routerLink"], ["target", "_blank", "rel", "noopener noreferrer", 1, "p-0", "transition", "duration-200", "hover:ease-in-out", "focus:text-white", "motion-reduce:transition-none", "lg:px-2", "[&.active]:text-white", 3, "href"]],
  template: function NavBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavBarComponent_Template_button_click_2_listener() {
        return ctx.showNavbar = !ctx.showNavbar;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "svg", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "path", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6)(7, "ul", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavBarComponent_Template_ul_click_7_listener() {
        return ctx.showNavbar = !ctx.showNavbar;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "li", 8)(9, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Contacto");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "li", 8)(12, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Whatsapp");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.showNavbar ? "" : "hidden");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", ctx.routes.contactUs);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx.linkWhastapp, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive],
  styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXYtYmFyLmNvbXBvbmVudC5jc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxvS0FBb0siLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map