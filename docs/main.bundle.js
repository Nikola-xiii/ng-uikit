webpackJsonp([1,5],{

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__button_component__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ButtonModule = (function () {
    function ButtonModule() {
    }
    ButtonModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* CommonModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__button_component__["a" /* ButtonComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_1__button_component__["a" /* ButtonComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], ButtonModule);
    return ButtonModule;
}());
//# sourceMappingURL=button.module.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonDocComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ButtonDocComponent = (function () {
    function ButtonDocComponent() {
        this.CreateBTNText = "Create";
    }
    ButtonDocComponent.prototype.ngOnInit = function () {
    };
    ButtonDocComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'kit-button-doc',
            template: __webpack_require__(543),
            styles: [__webpack_require__(531)]
        }), 
        __metadata('design:paramtypes', [])
    ], ButtonDocComponent);
    return ButtonDocComponent;
}());
//# sourceMappingURL=button-doc.component.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridDocComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GridDocComponent = (function () {
    function GridDocComponent() {
        this.GridDataRows = [
            {
                id: 11,
                name: 'Test1',
                email: 'test1@test.com',
                vendor: 'LoopMe',
                company: 'Home',
                action: {
                    name: 'Login',
                    icon: 'input'
                }
            },
            {
                id: 12,
                email: 'test2@test.com',
                vendor: 'LoopMe',
                company: 'EA Sport',
                action: {
                    name: 'Login',
                    icon: 'input'
                }
            },
            {
                id: 14,
                name: 'Test1',
                email: 'test1@test.com',
                vendor: 'LoopMe',
                company: 'Home',
                action: {
                    name: 'Login',
                    icon: 'input'
                }
            },
            {
                id: 14,
                email: 'test2@test.com',
                vendor: 'LoopMe',
                company: 'EA Sport',
                action: {
                    name: 'Login',
                    icon: 'input'
                }
            }
        ];
        this.GridDataColumns = {
            id: [11, 12, 13, 14],
            name: ['Test1', 'Test2', 'Test3', 'Test4'],
            email: ['test1@test.com', 'test2@test.com', 'test3@test.com', 'test4@test.com'],
            vendor: ['LoopMe', '', 'EA', 'LoopMe'],
            company: ['LoopMe', 'LoopMe', 'LoopMe', 'LoopMe'],
            action: ['input', 'input', 'input', 'input']
        };
        this.settings = {
            headers: [
                { key: 'id', name: 'id', sortable: true, type: 'text' },
                { key: 'name', name: 'name', sortable: false, type: 'text' },
                { key: 'company', name: 'company', sortable: false, type: 'text' },
                { key: 'vendor', name: 'vendor', sortable: true, type: 'text' },
                { key: 'email', name: 'email', sortable: false, type: 'link' },
                { key: 'action', name: '', sortable: false, type: 'action' },
            ],
        };
    }
    GridDocComponent.prototype.ngOnInit = function () {
    };
    GridDocComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'kit-grid-doc',
            template: __webpack_require__(544),
            styles: [__webpack_require__(532)]
        }), 
        __metadata('design:paramtypes', [])
    ], GridDocComponent);
    return GridDocComponent;
}());
//# sourceMappingURL=grid-doc.component.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuDocComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuDocComponent = (function () {
    function MenuDocComponent() {
        this.menuItems = [
            {
                name: 'Menu',
                id: "done",
                active: true,
                routerLink: '',
                icon: 'touch_app',
                subItems: [
                    { name: 'SubItem 1', id: "menu", routerLink: '' },
                    { name: 'SubItem 2', id: "menu", routerLink: '' }
                ]
            }
        ];
    }
    MenuDocComponent.prototype.ngOnInit = function () {
    };
    MenuDocComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'kit-menu-doc',
            template: __webpack_require__(545),
            styles: [__webpack_require__(533)]
        }), 
        __metadata('design:paramtypes', [])
    ], MenuDocComponent);
    return MenuDocComponent;
}());
//# sourceMappingURL=menu-doc.component.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReadmeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReadmeComponent = (function () {
    function ReadmeComponent() {
    }
    ReadmeComponent.prototype.ngOnInit = function () {
    };
    ReadmeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'kit-readme',
            template: __webpack_require__(546),
            styles: [__webpack_require__(534)]
        }), 
        __metadata('design:paramtypes', [])
    ], ReadmeComponent);
    return ReadmeComponent;
}());
//# sourceMappingURL=readme.component.js.map

/***/ }),

/***/ 336:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 336;


/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(470);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ButtonComponent = (function () {
    function ButtonComponent() {
    }
    ButtonComponent.prototype.ngOnInit = function () { };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])("UIButtonType"), 
        __metadata('design:type', String)
    ], ButtonComponent.prototype, "UIButtonType", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])("type"), 
        __metadata('design:type', String)
    ], ButtonComponent.prototype, "type", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])("icon"), 
        __metadata('design:type', String)
    ], ButtonComponent.prototype, "icon", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(), 
        __metadata('design:type', Boolean)
    ], ButtonComponent.prototype, "disabled", void 0);
    ButtonComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'uikit-button',
            template: __webpack_require__(536),
            styles: [__webpack_require__(525)]
        }), 
        __metadata('design:paramtypes', [])
    ], ButtonComponent);
    return ButtonComponent;
}());
//# sourceMappingURL=button.component.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GridComponent = (function () {
    function GridComponent() {
        this.GridDataRows = [];
    }
    GridComponent.prototype.RebuildToRow = function (DataColumns) {
    };
    GridComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(), 
        __metadata('design:type', Object)
    ], GridComponent.prototype, "GridDataRows", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(), 
        __metadata('design:type', Object)
    ], GridComponent.prototype, "GridDataColumns", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(), 
        __metadata('design:type', Object)
    ], GridComponent.prototype, "settings", void 0);
    GridComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'uikit-grid',
            template: __webpack_require__(537),
            styles: [__webpack_require__(526)],
        }), 
        __metadata('design:paramtypes', [])
    ], GridComponent);
    return GridComponent;
}());
//# sourceMappingURL=grid.component.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid_component__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__button_button_module__ = __webpack_require__(302);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GridModule = (function () {
    function GridModule() {
    }
    GridModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__button_button_module__["a" /* ButtonModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__grid_component__["a" /* GridComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_1__grid_component__["a" /* GridComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], GridModule);
    return GridModule;
}());
//# sourceMappingURL=grid.module.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'uikit-header',
            template: __webpack_require__(538),
            styles: [__webpack_require__(527)]
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_component__ = __webpack_require__(460);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderModule = (function () {
    function HeaderModule() {
    }
    HeaderModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__header_component__["a" /* HeaderComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_1__header_component__["a" /* HeaderComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderModule);
    return HeaderModule;
}());
//# sourceMappingURL=header.module.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(), 
        __metadata('design:type', Object)
    ], MenuComponent.prototype, "menuItems", void 0);
    MenuComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'uikit-menu',
            template: __webpack_require__(539),
            styles: [__webpack_require__(528)]
        }), 
        __metadata('design:paramtypes', [])
    ], MenuComponent);
    return MenuComponent;
}());
//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_component__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(296);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenuModule = (function () {
    function MenuModule() {
    }
    MenuModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__menu_component__["a" /* MenuComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__menu_component__["a" /* MenuComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], MenuModule);
    return MenuModule;
}());
//# sourceMappingURL=menu.module.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_header_module__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sidebar_sidebar_module__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_menu_module__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__button_button_module__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__grid_grid_module__ = __webpack_require__(459);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgUIKitModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MATERIAL_MODULES = [
    __WEBPACK_IMPORTED_MODULE_1__header_header_module__["a" /* HeaderModule */],
    __WEBPACK_IMPORTED_MODULE_2__sidebar_sidebar_module__["a" /* SidebarModule */],
    __WEBPACK_IMPORTED_MODULE_3__menu_menu_module__["a" /* MenuModule */],
    __WEBPACK_IMPORTED_MODULE_4__button_button_module__["a" /* ButtonModule */],
    __WEBPACK_IMPORTED_MODULE_5__grid_grid_module__["a" /* GridModule */],
];
var NgUIKitModule = (function () {
    function NgUIKitModule() {
    }
    NgUIKitModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            exports: MATERIAL_MODULES,
        }), 
        __metadata('design:paramtypes', [])
    ], NgUIKitModule);
    return NgUIKitModule;
}());
//# sourceMappingURL=ng-uikit.module.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'uikit-sidebar',
            template: __webpack_require__(540),
            styles: [__webpack_require__(529)]
        }), 
        __metadata('design:paramtypes', [])
    ], SidebarComponent);
    return SidebarComponent;
}());
//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_component__ = __webpack_require__(465);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarModule = (function () {
    function SidebarModule() {
    }
    SidebarModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__sidebar_component__["a" /* SidebarComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_1__sidebar_component__["a" /* SidebarComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], SidebarModule);
    return SidebarModule;
}());
//# sourceMappingURL=sidebar.module.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Angular 2 UIKit';
        this.menuItems = [
            {
                name: 'Readme',
                routerLink: '/readme',
                icon: 'assignment_late',
                subItems: [
                    { name: 'SubItem 1', id: "menu", routerLink: '' },
                ]
            },
            {
                name: 'Buttons',
                id: "buttons",
                active: true,
                routerLink: '/buttons',
                icon: 'touch_app'
            },
            {
                name: 'Menu',
                id: "menu",
                routerLink: '/menu',
                active: false,
                icon: 'menu',
                subItems: [
                    { name: 'SubItem 1', id: "menu", routerLink: '' },
                    { name: 'SubItem 2', id: "menu", routerLink: '' },
                    { name: 'SubItem 3', id: "menu", routerLink: '' },
                    { name: 'SubItem 4', id: "menu", routerLink: '' }
                ]
            },
            {
                name: 'Table grid',
                id: "buttons",
                active: true,
                routerLink: '/grid',
                icon: 'view_list'
            }
        ];
    }
    AppComponent.prototype.HelloClick = function () {
        console.log('Hello from main app');
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(542),
            styles: [__webpack_require__(530)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routes__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_ng_uikit_module__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__button_doc_button_doc_component__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__menu_doc_menu_doc_component__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__readme_readme_component__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__grid_doc_grid_doc_component__ = __webpack_require__(304);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__button_doc_button_doc_component__["a" /* ButtonDocComponent */],
                __WEBPACK_IMPORTED_MODULE_9__menu_doc_menu_doc_component__["a" /* MenuDocComponent */],
                __WEBPACK_IMPORTED_MODULE_10__readme_readme_component__["a" /* ReadmeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__grid_doc_grid_doc_component__["a" /* GridDocComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_7__components_ng_uikit_module__["a" /* NgUIKitModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routes__["a" /* routing */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__button_doc_button_doc_component__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_doc_menu_doc_component__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__readme_readme_component__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__grid_doc_grid_doc_component__ = __webpack_require__(304);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });





var routes = [
    { path: 'buttons', component: __WEBPACK_IMPORTED_MODULE_1__button_doc_button_doc_component__["a" /* ButtonDocComponent */] },
    { path: 'menu', component: __WEBPACK_IMPORTED_MODULE_2__menu_doc_menu_doc_component__["a" /* MenuDocComponent */] },
    { path: 'grid', component: __WEBPACK_IMPORTED_MODULE_4__grid_doc_grid_doc_component__["a" /* GridDocComponent */] },
    { path: 'readme', component: __WEBPACK_IMPORTED_MODULE_3__readme_readme_component__["a" /* ReadmeComponent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/icon?family=Material+Icons);", ""]);

// module
exports.push([module.i, ":host {\n  display: inline-block; }\n\n.uikit-button {\n  min-width: 80px;\n  padding: 4px 15px;\n  font-family: \"Open Sans\", sans-serif;\n  text-transform: uppercase;\n  border-radius: 3px;\n  border: 1px solid;\n  font-size: 10px;\n  line-height: 1.4;\n  font-weight: 700; }\n  .uikit-button[disabled] {\n    opacity: .5; }\n  .uikit-button-icon {\n    padding: 0;\n    background: transparent;\n    border: 0;\n    cursor: pointer;\n    min-width: inherit;\n    text-align: left;\n    line-height: 1;\n    vertical-align: text-top; }\n    .uikit-button-icon .material-icons {\n      color: #7d7d7d;\n      font-size: 15px;\n      height: 100%; }\n    .uikit-button-icon:hover .material-icons {\n      color: #000; }\n  .uikit-button-primary {\n    background: #B11118;\n    border-color: #8A070C;\n    color: #fff;\n    font-weight: bold; }\n    .uikit-button-primary:hover {\n      background: #8A070C;\n      cursor: pointer; }\n    .uikit-button-primary.cancel {\n      background: #F4F4F4;\n      border-color: #D0D0D0;\n      color: #7D7D7D; }\n      .uikit-button-primary.cancel:hover {\n        background: #D0D0D0;\n        cursor: pointer; }\n  .uikit-button-secondary {\n    background: #fff;\n    border-color: #B11118;\n    color: #B11118;\n    font-weight: 400; }\n    .uikit-button-secondary:hover {\n      background: #8A070C;\n      color: #fff;\n      cursor: pointer; }\n    .uikit-button-secondary.cancel {\n      background: #fff;\n      border-color: #D0D0D0;\n      color: #7D7D7D; }\n      .uikit-button-secondary.cancel:hover {\n        background: #D0D0D0;\n        cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 526:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/icon?family=Material+Icons);", ""]);

// module
exports.push([module.i, ":host {\n  display: block; }\n\n.uikit-grid {\n  width: 100%;\n  border-collapse: collapse;\n  padding: 20px 0; }\n  .uikit-grid th {\n    border-bottom: 1px solid #D0D0D0;\n    position: relative;\n    text-align: left;\n    padding: 5px 0;\n    font-weight: 400;\n    text-transform: uppercase; }\n    .uikit-grid th .material-icons {\n      font-size: 12px;\n      color: #010101;\n      vertical-align: text-top; }\n  .uikit-grid tr {\n    border-bottom: 1px solid #D0D0D0; }\n  .uikit-grid td {\n    font-size: 12px;\n    line-height: 17px;\n    padding: 5px 0;\n    color: #323232; }\n    .uikit-grid td a {\n      color: #b11118; }\n      .uikit-grid td a:hover {\n        text-decoration: none; }\n  .uikit-grid th {\n    color: #8d8d8d;\n    font-size: 9px;\n    line-height: 13px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 527:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, ".uikit-header {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 40px;\n  padding: 0 5px;\n  z-index: 9999;\n  background-color: #2a2a2a;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.15);\n  box-shadow: 0 0 6px 0 #2a2a2a;\n  box-sizing: border-box; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/icon?family=Material+Icons);", ""]);

// module
exports.push([module.i, ".uikit-menu .main-menu {\n  margin: 0;\n  padding: 0; }\n\n.uikit-menu-item {\n  position: relative;\n  color: #ffffff;\n  list-style-type: none;\n  text-align: center;\n  padding: 20px 0;\n  cursor: pointer;\n  font-size: 12px; }\n  .uikit-menu-item span {\n    opacity: 0.6; }\n  .uikit-menu-item img {\n    height: 24px;\n    width: auto; }\n  .uikit-menu-item:hover .sub-menu {\n    display: block; }\n  .uikit-menu-item:hover .material-icons,\n  .uikit-menu-item:hover span {\n    opacity: 1; }\n  .uikit-menu-item a {\n    color: #ffffff;\n    display: block;\n    text-decoration: none; }\n    .uikit-menu-item a.active .material-icons,\n    .uikit-menu-item a.active span {\n      opacity: 1; }\n    .uikit-menu-item a.active span {\n      font-weight: 700; }\n    .uikit-menu-item a.active::after {\n      position: absolute;\n      content: '';\n      width: 0;\n      height: 0;\n      z-index: 120;\n      right: -5px;\n      top: 50%;\n      -webkit-transform: translateY(-50%);\n              transform: translateY(-50%);\n      border-top: 7px solid transparent;\n      border-bottom: 7px solid transparent;\n      border-right: 7px solid #ffffff; }\n  .uikit-menu-item .material-icons {\n    display: block;\n    opacity: 0.6;\n    margin: 0 auto 12px;\n    font-size: 32px; }\n\n.sub-menu {\n  display: none;\n  position: absolute;\n  z-index: 100;\n  padding: 10px 1px;\n  background: #fff;\n  box-shadow: 0 1px 4px 1px rgba(150, 150, 150, 0.3);\n  margin: 0;\n  width: 120px;\n  left: 80px;\n  top: 20px; }\n  .sub-menu li {\n    list-style-type: none; }\n  .sub-menu a {\n    color: #7c7c7c;\n    font-size: 10px;\n    text-align: left;\n    padding: 5px 15px; }\n    .sub-menu a span {\n      opacity: 1; }\n    .sub-menu a:hover {\n      color: #fff;\n      background: #b11118; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, ".uikit-sidebar {\n  width: 75px;\n  padding: 0 5px;\n  background: #b11118;\n  height: 100vh; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 530:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  width: 100%;\n  height: calc(100vh - 40px); }\n\napp-root {\n  height: 100%;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.content {\n  padding: 0 20px;\n  width: 100%;\n  overflow-y: scroll; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 531:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 532:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 533:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 534:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 536:
/***/ (function(module, exports) {

module.exports = "<button class=\"uikit-button uikit-button-{{UIButtonType}}\" type=\"{{type}}\" [attr.disabled]=\"disabled ? true : null\">\n  <i *ngIf=\"icon\" class=\"material-icons\">{{icon}}</i>\n  <ng-content></ng-content>\n</button>\n"

/***/ }),

/***/ 537:
/***/ (function(module, exports) {

module.exports = "<table class=\"uikit-grid\">\n  <thead>\n    <th *ngFor=\"let Header of settings.headers\">\n      <i *ngIf=\"Header.sortable\" class=\"material-icons\">arrow_downward</i>\n      {{Header.name}}\n    </th>\n  </thead>\n  <tbody>\n    <template [ngIf]=\"GridDataRows\">\n      <tr *ngFor=\"let GridDataRow of GridDataRows\">\n        <td *ngFor=\"let column of settings.headers\">\n          <span *ngIf=\"column.type == 'text'\">{{GridDataRow[column.key]}}</span>\n          <a *ngIf=\"column.type == 'link'\" href=\"{{GridDataRow[column.key]}}\">{{GridDataRow[column.key]}}</a>\n          <uikit-button *ngIf=\"column.type == 'action'\" UIButtonType=\"icon\" icon=\"{{GridDataRow[column.key].icon}}\"></uikit-button>\n        </td>\n      </tr>\n    </template>\n    <template [ngIf]=\"GridDataColumns\">\n      <tr *ngFor=\"let GridDataColumn of GridDataColumns.id; let i = index;\">\n        <td *ngFor=\"let column of settings.headers\">\n          <span *ngIf=\"column.type == 'text'\">{{GridDataColumns[column.key][i]}}</span>\n          <a *ngIf=\"column.type == 'link'\" href=\"{{GridDataColumns[column.key][i]}}\">{{GridDataColumns[column.key][i]}}</a>\n          <uikit-button *ngIf=\"column.type == 'action'\" UIButtonType=\"icon\" icon=\"{{GridDataColumns[column.key][i]}}\"></uikit-button>\n        </td>\n      </tr>\n    </template>\n  </tbody>\n</table>\n"

/***/ }),

/***/ 538:
/***/ (function(module, exports) {

module.exports = "<header class=\"uikit-header\">\n  <ng-content></ng-content>\n</header>\n"

/***/ }),

/***/ 539:
/***/ (function(module, exports) {

module.exports = "<div class=\"uikit-menu\">\n  <ul class=\"main-menu\">\n    <li class=\"uikit-menu-item\" *ngFor=\"let menuItem of menuItems;\">\n      <a routerLink=\"/{{menuItem.routerLink}}\" routerLinkActive=\"active\">\n        <i *ngIf=\"menuItem.icon\" class=\"material-icons\">{{menuItem.icon}}</i>\n        <img *ngIf=\"menuItem.iconUrl\" src=\"{{menuItem.iconUrl}}\">\n        <span>{{menuItem.name}}</span>\n      </a>\n\n      <ul *ngIf=\"menuItem.subItems\" class=\"sub-menu\">\n        <li class=\"uikit-menu-sub-item\" *ngFor=\"let subItem of menuItem.subItems;\">\n          <a routerLink=\"/{{menuItem.routerLink}}\">\n            <span>{{subItem.name}}</span>\n          </a>\n        </li>\n      </ul>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ 540:
/***/ (function(module, exports) {

module.exports = "<aside class=\"uikit-sidebar\">\n  <ng-content></ng-content>\n</aside>\n"

/***/ }),

/***/ 542:
/***/ (function(module, exports) {

module.exports = "<uikit-header>\n  <img src=\"assets/img/logo.svg\" height=\"30\">\n</uikit-header>\n<main>\n  <uikit-sidebar>\n    <uikit-menu [menuItems]=\"menuItems\"></uikit-menu>\n  </uikit-sidebar>\n  <div class=\"content\">\n    <router-outlet></router-outlet>\n  </div>\n</main>\n"

/***/ }),

/***/ 543:
/***/ (function(module, exports) {

module.exports = "<h1>Button component</h1>\n<h2>Markup</h2>\n<pre class=\"language-markup\">\n  <code class=\"language-markup\">\n    &lt;uikit-button UIButtonType=\"UIButtonType\"&gt;&lt;/uikit-button&gt;\n  </code>\n</pre>\n<p><strong>UIButtonType:</strong> primary</p>\n<uikit-button UIButtonType=\"primary\" (click)=\"HelloClick()\">{{CreateBTNText}}</uikit-button>\n<uikit-button UIButtonType=\"primary cancel\">Cancel</uikit-button>\n<uikit-button UIButtonType=\"primary\" icon=\"assignment_late\"></uikit-button>\n<p><strong>UIButtonType:</strong> primary <strong>[disabled]=\"true\"</strong></p>\n<uikit-button UIButtonType=\"primary\" [disabled]=\"true\" (click)=\"HelloClick()\">{{CreateBTNText}}</uikit-button>\n<uikit-button UIButtonType=\"primary cancel\" [disabled]=\"true\">Cancel</uikit-button>\n<p><strong>UIButtonType:</strong> secondary</p>\n<uikit-button type=\"submit\" UIButtonType=\"secondary\">Create</uikit-button>\n<uikit-button type=\"submit\" UIButtonType=\"secondary cancel\">Create</uikit-button>\n<p><strong>UIButtonType:</strong> primary <strong>[disabled]=\"true\"</strong></p>\n<uikit-button UIButtonType=\"secondary\" [disabled]=\"true\" (click)=\"HelloClick()\">{{CreateBTNText}}</uikit-button>\n<uikit-button UIButtonType=\"secondary cancel\" [disabled]=\"true\">Cancel</uikit-button>\n<h2>Component selector</h2>\n<div>\n  <p>Tag name - <strong>uikit-button</strong></p>\n  <p>Attr - <strong>UIButtonType</strong></p>\n  <p>Values: primary | secondary | icon</p>\n</div>\n"

/***/ }),

/***/ 544:
/***/ (function(module, exports) {

module.exports = "<h1>Grid Component</h1>\n<pre class=\"language-markup\">\n  <code class=\"language-markup\">\n    &lt;uikit-grid [GridDataRows]=\"GridDataRows\" [settings]=\"settings\"&gt;&lt;/uikit-grid&gt;\n  </code>\n</pre>\n<uikit-grid [GridDataRows]=\"GridDataRows\" [settings]=\"settings\"></uikit-grid>\n<h3>Data array Row format</h3>\n<pre class=\"language-javascript\">\n  <code class=\"language-javascript\">\n    public GridDataRows = [\n    &#123;\n      id: 11,\n      name: 'Test1',\n      email: 'test1@test.com',\n      vendor: 'LoopMe',\n      company: 'Home',\n      action: 'input'\n    &#125;,\n    ...\n  ];\n  </code>\n</pre>\n\n<h3>Grid settings</h3>\n<pre class=\"language-javascript\">\n  <code class=\"language-javascript\">\n    settings: Object = &#123;\n      headers: [\n        &#123; key: 'id', name: 'id', sortable: true, type: 'text'&#125;,\n        &#123; key: 'name', name: 'name', sortable: false, type: 'text'&#125;,\n        &#123; key: 'company', name: 'company', sortable: false, type: 'text'&#125;,\n        &#123; key: 'vendor', name: 'vendor', sortable: true, type: 'text'&#125;,\n        &#123; key: 'email', name: 'email', sortable: false, type: 'link'&#125;,\n        &#123; key: 'action', name: '', sortable: false, type: 'action'&#125;,\n      ],\n    &#125;;\n  </code>\n</pre>\n<pre class=\"language-markup\">\n  <code class=\"language-markup\">\n    &lt;uikit-grid [GridDataColumns]=\"GridDataColumns\" [settings]=\"settings\"&gt;&lt;/uikit-grid&gt;\n  </code>\n</pre>\n<uikit-grid [GridDataColumns]=\"GridDataColumns\" [settings]=\"settings\"></uikit-grid>\n<h3>Data array Column format</h3>\n<pre class=\"language-javascript\">\n  <code class=\"language-javascript\">\n    GridDataColumns = [\n      &#123;\n        id: [11, 12, 13, 14],\n        name: ['Test1', 'Test2', 'Test3', 'Test4'],\n        email: ['test1@test.com', 'test2@test.com', 'test3@test.com', 'test4@test.com'],\n        vendor: ['LoopMe', '', 'EA', 'LoopMe'],\n        company: ['LoopMe', 'LoopMe', 'LoopMe', 'LoopMe'],\n        action: ['input', 'input', 'input', 'input']\n      &#125;\n    ];\n  </code>\n</pre>\n\n<h3>Grid settings</h3>\n<pre class=\"language-javascript\">\n  <code class=\"language-javascript\">\n    settings: Object = &#123;\n      headers: [\n        &#123; key: 'id', name: 'id', sortable: true, type: 'text'&#125;,\n        &#123; key: 'name', name: 'name', sortable: false, type: 'text'&#125;,\n        &#123; key: 'company', name: 'company', sortable: false, type: 'text'&#125;,\n        &#123; key: 'vendor', name: 'vendor', sortable: true, type: 'text'&#125;,\n        &#123; key: 'email', name: 'email', sortable: false, type: 'link'&#125;,\n        &#123; key: 'action', name: '', sortable: false, type: 'action'&#125;,\n      ],\n    &#125;;\n  </code>\n</pre>\n"

/***/ }),

/***/ 545:
/***/ (function(module, exports) {

module.exports = "<h1>Menu Components</h1>\n<h2>Basic tag</h2>\n<pre class=\"language-markup\">\n  <code class=\"language-markup\">\n    &lt;uikit-menu [menuItems]=\"menuItems\"&gt;&lt;/uikit-menu&gt;\n  </code>\n</pre>\n<div style=\"background: #000; width: 75px; padding: 0 5px;\">\n  <uikit-menu [menuItems]=\"menuItems\"></uikit-menu>\n</div>\n<h2>Array Menu Items</h2>\n<pre class=\"language-javascript\">\n  <code class=\"language-javascript\">\n    menuItems = [\n      &#123;\n        name: 'Menu',\n        id: \"done\",\n        active: true,\n        routerLink: '',\n        icon: 'touch_app',\n        subItems: [\n          &#123; name: 'SubItem 1', id: \"menu\", routerLink: '' &#125;,\n          &#123; name: 'SubItem 2', id: \"menu\", routerLink: '' &#125;,\n        ]\n      &#125;\n      ...\n    ]\n  </code>\n</pre>\n"

/***/ }),

/***/ 546:
/***/ (function(module, exports) {

module.exports = "<h1>LoopMe Angular 2 UIKit</h1>\n<h2>Install</h2>\n<pre class=\"language-bash\">\n  <code class=\"language-bash\">\n  npm install nikola-xiii/ng-uikit\n  </code>\n</pre>\n<h2>Include and use</h2>\n<p>Import NgModule</p>\n<pre class=\"language-javascript\">\n  <code class=\"language-javascript\">\n  import &#123; NgUIKitModule &#125; from 'ng-uikit/components/ng-uikit.module';\n  </code>\n</pre>\n<pre class=\"language-javascript\">\n  <code class=\"language-javascript\">\n    import &#123; NgUIKitModule &#125; from 'ng-uikit/components/ng-uikit.module';\n\n    @NgModule(&#123;\n      ...\n      imports: [\n      ...,\n      NgUIKitModule,\n    ]&#125;);\n  </code>\n</pre>\n"

/***/ }),

/***/ 565:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(337);


/***/ })

},[565]);
//# sourceMappingURL=main.bundle.js.map