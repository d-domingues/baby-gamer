(self["webpackChunkbaby_gamer"] = self["webpackChunkbaby_gamer"] || []).push([["src_app_pages_home_home_module_ts"],{

/***/ 6610:
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_services_animals_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/animals.service */ 6445);
/* harmony import */ var src_app_services_figure_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/figure.service */ 2433);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page */ 678);






const routes = [
    { path: '', component: _home_page__WEBPACK_IMPORTED_MODULE_2__.HomePage, resolve: [src_app_services_animals_service__WEBPACK_IMPORTED_MODULE_0__.AnimalsService, src_app_services_figure_service__WEBPACK_IMPORTED_MODULE_1__.FigureService] },
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 7994:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/native-audio/ngx */ 7125);
/* harmony import */ var _ionic_native_speech_recognition_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/speech-recognition/ngx */ 7642);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _what_animal_is_it_what_animal_is_it_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../what-animal-is-it/what-animal-is-it.page */ 1892);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-routing.module */ 6610);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.page */ 678);










let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_3__.HomePageRoutingModule],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_4__.HomePage, _what_animal_is_it_what_animal_is_it_page__WEBPACK_IMPORTED_MODULE_2__.WhatAnimalIsItPage],
        providers: [_ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_0__.NativeAudio, _ionic_native_speech_recognition_ngx__WEBPACK_IMPORTED_MODULE_1__.SpeechRecognition],
    })
], HomePageModule);



/***/ }),

/***/ 678:
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 8102);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 7603);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_services_figure_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/figure.service */ 2433);
/* harmony import */ var _family_gallery_family_gallery_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../family-gallery/family-gallery.page */ 74);







let HomePage = class HomePage {
    constructor(modalCtrl, figServ) {
        this.modalCtrl = modalCtrl;
        this.figServ = figServ;
        this.onClick = () => this.modalCtrl
            .create({ component: _family_gallery_family_gallery_page__WEBPACK_IMPORTED_MODULE_3__.FamilyGalleryPage })
            .then((m) => m.present());
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: src_app_services_figure_service__WEBPACK_IMPORTED_MODULE_2__.FigureService }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'bbg-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 1892:
/*!*******************************************************************!*\
  !*** ./src/app/pages/what-animal-is-it/what-animal-is-it.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WhatAnimalIsItPage": () => (/* binding */ WhatAnimalIsItPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_what_animal_is_it_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./what-animal-is-it.page.html */ 2933);
/* harmony import */ var _what_animal_is_it_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./what-animal-is-it.page.scss */ 8777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_animals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/animals.service */ 6445);





let WhatAnimalIsItPage = class WhatAnimalIsItPage {
    constructor(animals) {
        this.animals = animals;
        this.options = this.animals.getRandom(4);
    }
};
WhatAnimalIsItPage.ctorParameters = () => [
    { type: src_app_services_animals_service__WEBPACK_IMPORTED_MODULE_2__.AnimalsService }
];
WhatAnimalIsItPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'bbg-what-animal-is-it',
        template: _raw_loader_what_animal_is_it_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_what_animal_is_it_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], WhatAnimalIsItPage);



/***/ }),

/***/ 6445:
/*!*********************************************!*\
  !*** ./src/app/services/animals.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimalsService": () => (/* binding */ AnimalsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


let AnimalsService = class AnimalsService {
    constructor() {
        this.animals = [];
        this.resolve = () => fetch('assets/animals/animals.json')
            .then((resp) => resp.json())
            .then((resp) => (this.animals = resp));
        this.getRandom = (qty) => [
            { name: 'fish', img: 'fish', nameAudio: 'fish', sound: 'fish' },
            { name: 'camel', img: 'camel', nameAudio: 'camel', sound: 'camel' },
            { name: 'cat', img: 'cat', nameAudio: 'cat', sound: 'cat' },
            { name: 'crab', img: 'crab', nameAudio: 'crab', sound: 'crab' },
        ];
    }
};
AnimalsService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({ providedIn: 'root' })
], AnimalsService);



/***/ }),

/***/ 7603:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */");

/***/ }),

/***/ 8777:
/*!*********************************************************************!*\
  !*** ./src/app/pages/what-animal-is-it/what-animal-is-it.page.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-title {\n  font-family: \"FrederickatheGreat\";\n  font-size: 30px;\n}\n\nion-content {\n  --background: url(\"/assets/wallpapers/nature.jpg\") 0 0/100% 100% no-repeat;\n  --padding-top: 50px;\n  --padding-bottom: 50px;\n  --padding-start: 50px;\n  --padding-end: 50px;\n}\n\n.what-animal {\n  background: white;\n  margin: auto;\n  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;\n  padding: 20px;\n  display: block;\n  border-radius: 10px;\n  margin-bottom: 20px;\n}\n\n.animal-options {\n  display: grid;\n  grid-template-columns: 47% 47%;\n  grid-column-gap: 6%;\n  grid-row-gap: 6%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndoYXQtYW5pbWFsLWlzLWl0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsMEVBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EseUZBQUE7RUFFQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFBRiIsImZpbGUiOiJ3aGF0LWFuaW1hbC1pcy1pdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGUge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkZyZWRlcmlja2F0aGVHcmVhdFwiO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy93YWxscGFwZXJzL25hdHVyZS5qcGdcIikgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XHJcbiAgLS1wYWRkaW5nLXRvcDogNTBweDtcclxuICAtLXBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gIC0tcGFkZGluZy1zdGFydDogNTBweDtcclxuICAtLXBhZGRpbmctZW5kOiA1MHB4O1xyXG59XHJcblxyXG4ud2hhdC1hbmltYWwge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBib3gtc2hhZG93OiByZ2JhKDYwLCA2NCwgNjcsIDAuMykgMHB4IDFweCAycHggMHB4LFxyXG4gICAgcmdiYSg2MCwgNjQsIDY3LCAwLjE1KSAwcHggMXB4IDNweCAxcHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5hbmltYWwtb3B0aW9ucyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQ3JSA0NyU7XHJcbiAgZ3JpZC1jb2x1bW4tZ2FwOiA2JTtcclxuICBncmlkLXJvdy1nYXA6IDYlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 8102:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Blank2</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n\n\n  <button bonbon (click)=\"onClick()\">\n    FAMILIA\n  </button>\n\n\n\n\n  <button bonbon (click)=\"onClick()\">\n    PARES\n  </button>\n\n\n\n</ion-content>\n\n\n<!-- <ion-content [fullscreen]=\"true\">\n\n</ion-content> -->");

/***/ }),

/***/ 2933:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/what-animal-is-it/what-animal-is-it.page.html ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\" mode=\"md\">\n  <ion-toolbar>\n    <ion-title>\n      Quem é este animal?\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <img class=\"what-animal\" src=\"assets/animals/filled/camel.svg\" />\n\n  <div class=\"animal-options\">\n    <img src=\"assets/animals/plain/fish.svg\" />\n    <img src=\"assets/animals/plain/camel.svg\" />\n    <img src=\"assets/animals/plain/crab.svg\" />\n    <img src=\"assets/animals/plain/cat.svg\" />\n    <a class=\"button orange serif skew glossy xs\">\n      <img src=\"assets/animals/plain/cat.svg\" />\n    </a>\n  </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_home_module_ts.js.map