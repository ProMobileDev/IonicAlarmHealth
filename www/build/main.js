webpackJsonp([1],{

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CalendarModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CalendarModalPage = (function () {
    function CalendarModalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.myYears = new Date().getFullYear();
        var tempDate = new Date().toString();
        // To get Date String From current Date
        var splitted = tempDate.split(" ", 4);
        this.currentData = splitted[0] + ", " + splitted[1] + " " + splitted[2];
    }
    CalendarModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CalendarModalPage');
    };
    CalendarModalPage.prototype.onChange = function ($event) {
        var tempDate = this.date.toString();
        var splitted = tempDate.split(" ", 4);
        this.currentData = splitted[0] + ", " + splitted[1] + " " + splitted[2];
        this.pickDate = tempDate;
        this.myYears = splitted[3];
    };
    CalendarModalPage.prototype.onMonthChange = function ($event) {
        console.log("Calendar monthChange Function!", event);
    };
    CalendarModalPage.prototype.cancelDate = function (event) {
        console.log("CancelButton Clicked!");
        this.viewCtrl.dismiss();
    };
    CalendarModalPage.prototype.selectedDate = function (event) {
        console.log("Ok Button Clicked!");
        this.viewCtrl.dismiss(this.pickDate);
    };
    return CalendarModalPage;
}());
CalendarModalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-calendar-modal',template:/*ion-inline-start:"/Volumes/Work/WorkSpace/Mobile/Igor/phr-app/src/pages/CalendarModal/calendarModal.html"*/'<!--\n  Generated template for the CalendarModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar class="calendar-nav">\n    <ion-title>{{myYears}}</ion-title>\n  </ion-navbar>\n  <ion-toolbar class="calendar-tool">\n    <ion-label class="currenDate-label">{{currentData}}</ion-label>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-calendar [(ngModel)]="date"\n    (onChange)="onChange($event)"\n    (monthChange) = "onMonthChange($event)"\n    [type]="type"\n    [format]="\'YYYY-MM-DD\'">\n  </ion-calendar>\n  <ion-row class="btn-row">\n    <ion-col class="cancel-col">\n        <button ion-button class="cancel-btn" (click)="cancelDate($event)" block>{{\'CANCEL\' | translate}}</button>\n    </ion-col>\n    <ion-col class="ok-col">\n        <button ion-button class="ok-btn" (click)="selectedDate($event)" block>{{\'OK\' | translate}}</button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"/Volumes/Work/WorkSpace/Mobile/Igor/phr-app/src/pages/CalendarModal/calendarModal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
], CalendarModalPage);

//# sourceMappingURL=calendarModal.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimePickerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TimePickerPage = (function () {
    function TimePickerPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        var curData = new Date();
        this.currentHours = curData.getHours();
        this.currentMinutes = curData.getMinutes();
        this.time = __WEBPACK_IMPORTED_MODULE_2_moment__();
        this.time.set({ hour: this.currentHours, minute: this.currentMinutes, second: 0, millisecond: 0 });
        console.log('adsfasdf', this.time.hours());
    }
    TimePickerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TimePickerPage');
    };
    TimePickerPage.prototype.increaseHours = function () {
        if (this.currentHours == 23) {
            this.currentHours = 0;
        }
        else {
            this.currentHours++;
        }
        this.time.set({ hour: this.currentHours, minute: this.currentMinutes, second: 0, millisecond: 0 });
        console.log('Hours', this.time.hours());
        console.log('Minutes', this.time.minutes());
    };
    TimePickerPage.prototype.decreaseHours = function () {
        if (this.currentHours == 0) {
            this.currentHours = 23;
        }
        else {
            this.currentHours--;
        }
        this.time.set({ hour: this.currentHours, minute: this.currentMinutes, second: 0, millisecond: 0 });
        this.hourValue = this.time.hours();
    };
    TimePickerPage.prototype.increaseMinutes = function () {
        if (this.currentMinutes == 59) {
            this.currentMinutes = 0;
        }
        else {
            this.currentMinutes++;
        }
        this.time.set({ hour: this.currentHours, minute: this.currentMinutes, second: 0, millisecond: 0 });
        this.minutesValue = this.time.minutes();
    };
    TimePickerPage.prototype.decreaseMinutes = function () {
        if (this.currentMinutes == 0) {
            this.currentMinutes = 59;
        }
        else {
            this.currentMinutes--;
        }
        this.time.set({ hour: this.currentHours, minute: this.currentMinutes, second: 0, millisecond: 0 });
        this.minutesValue = this.time.minutes();
    };
    TimePickerPage.prototype.setTime = function () {
        var str = this.time.toString();
        var splitt = str.split(" ", 5);
        this.viewCtrl.dismiss(splitt[4]);
    };
    TimePickerPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    return TimePickerPage;
}());
TimePickerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-timePicker',template:/*ion-inline-start:"/Volumes/Work/WorkSpace/Mobile/Igor/phr-app/src/pages/TimePicker/timePicker.html"*/' <ion-content padding>\n</ion-content>\n\n<div class="popup-container">\n  <div class="popup">\n    <div class="popup-body">\n      <div>\n        <div class="heading"> {{time.format(\'HH : mm\')}} </div>\n        <div class="row" >\n          <div class="col col-25 col-offset-20">\n            <button type="button" class="button button-clear button-small button-dark time_picker_arrows" (click)="increaseHours()">\n              <!-- <ion-icon name ="arrow-up" class="icon"></ion-icon>  -->\n              <!-- <i class="icon ion-chevron-down"></i> --><img  class="arrow-up" src="assets/icon/arrow-up.png" />\n            </button>\n            <div class="time_picker_box_text"> {{time.format(\'HH\')}}</div>\n            <button type="button" class="button button-clear button-small button-dark time_picker_arrows" (click)="decreaseHours()">\n                <!-- <ion-icon  name="arrow-down" class="icon"></ion-icon> -->\n                <img  class="arrow-down" src="assets/icon/arrow-down.png" />\n            </button>\n          </div>\n          <label class="col col-10 time_picker_colon">:</label>\n          <div class="col col-25">\n            <button type="button" class="button button-clear button-small button-dark time_picker_arrows" (click)="increaseMinutes()">\n                <!-- <ion-icon  name ="arrow-up" class="icon"></ion-icon> -->\n                <img  class="arrow-up" src="assets/icon/arrow-up.png" />\n            </button>\n            <div class="time_picker_box_text"> {{time.format(\'mm\')}} </div>\n            <button type="button" class="button button-clear button-small button-dark time_picker_arrows" (click)="decreaseMinutes()">\n                <!-- <ion-icon  name ="arrow-down" class="icon"></ion-icon> -->\n                <img  class="arrow-down" src="assets/icon/arrow-down.png" />\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class="popup-buttons" ng-show="buttons.length">\n      <!-- ngRepeat: button in buttons -->\n      <button  (click)="setTime()" class="button button_set">Set</button>\n      <!-- end ngRepeat: button in buttons -->\n      <button  (click)="close()" class="button  button_close">Close</button>\n      <!-- end ngRepeat: button in buttons -->\n    </div>\n  </div>\n</div>\n\n\n '/*ion-inline-end:"/Volumes/Work/WorkSpace/Mobile/Igor/phr-app/src/pages/TimePicker/timePicker.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
], TimePickerPage);

//# sourceMappingURL=timePicker.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlarmModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_therap_service__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AlarmModalPage = (function () {
    function AlarmModalPage(navCtrl, navParams, therapService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.therapService = therapService;
        this.slideLength = false;
        this.alarmItem = this.navParams.get('item');
        console.log('Alarma Data', this.alarmItem);
        this.currentImgIndex = 0;
        this.imgArray = this.alarmItem.media;
        this.alarmed = false;
        console.log('Alarm Hours Data', this.alarmItem.hours);
        this.date = __WEBPACK_IMPORTED_MODULE_2_moment__();
        this.time = __WEBPACK_IMPORTED_MODULE_2_moment__([this.date.year(), this.date.month(), this.date.date(), this.alarmItem.hours.hours, this.alarmItem.hours.minutes, 0, 0]);
        if (this.imgArray.length > 0) {
            this.slideLength = true;
        }
    }
    AlarmModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AlarmModalPage');
        console.log(this.slider);
    };
    AlarmModalPage.prototype.close = function () {
        console.log('Close Modal!');
        this.navCtrl.pop();
        this.therapService.stopeAlarm();
    };
    AlarmModalPage.prototype.previousSection = function () {
        this.slider.slidePrev();
    };
    AlarmModalPage.prototype.nextSection = function () {
        this.slider.slideNext();
    };
    AlarmModalPage.prototype.updateStatus = function (alarmStatus) {
        console.log(alarmStatus);
        if (alarmStatus) {
            this.therapService.setAcknowledge(this.alarmItem.id);
            this.therapService.stopeAlarm();
        }
    };
    return AlarmModalPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('mySlider'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */])
], AlarmModalPage.prototype, "slider", void 0);
AlarmModalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-alarmModal',template:/*ion-inline-start:"/Volumes/Work/WorkSpace/Mobile/Igor/phr-app/src/pages/AlarmModal/alarmModal.html"*/'<!--\n  Generated template for the AlarmModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n \n<ion-content padding (click)="close()">\n\n</ion-content>\n<div class="alarm-container">\n  <div class="icon-content">\n    <img class="icon-img" src="assets/imgs/app_icon.png"/>\n  </div>\n  <div class="alarm-content">\n    <ion-row class="header-row">\n      <ion-col class="time-col">\n        <div class="t-container"><p>{{time.format(\'HH:mm\')}}</p></div>\n         \n      </ion-col>\n      <ion-col class="ring-col"><ion-icon name="notifications" color="pharmalarm"></ion-icon></ion-col>\n    </ion-row>\n    <ion-row class="details-row">\n      <ion-col>\n        <h2>{{alarmItem.medicineName}}</h2>\n        <p>{{alarmItem.medicineQty}} {{alarmItem.medicineTakeMode}}</p>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div class="img-container">\n      <div class="img-cont">\n          <ion-slides  #mySlider autoplay="2000" loop="true" speed="1000">\n              <ion-slide *ngFor="let item of imgArray">\n                <img class="therap-img" src="{{item}}" />\n              </ion-slide>\n          </ion-slides>\n        <!-- <img class="therap-img" [src]="getURL()" /> -->\n      </div>\n      <ion-fab left middle>\n          <button ion-fab color="light" (click)="previousSection()">\n              <ion-icon name="arrow-back"></ion-icon>\n          </button>\n      </ion-fab>\n        \n      <ion-fab right middle>\n            <button ion-fab color="light" (click)="nextSection()">\n              <ion-icon name="arrow-forward"></ion-icon>\n            </button>\n      </ion-fab>\n  </div>\n\n  <div class="select-container">\n     <ion-row>\n      <ion-col>\n          <ion-toggle [(ngModel)]="alarmed" (ionChange)="updateStatus(alarmed)" ></ion-toggle>\n      </ion-col>\n    </ion-row>  \n  </div>\n</div>'/*ion-inline-end:"/Volumes/Work/WorkSpace/Mobile/Igor/phr-app/src/pages/AlarmModal/alarmModal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_therap_service__["a" /* TherapService */]])
], AlarmModalPage);

//# sourceMappingURL=alarmModal.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_twitter_connect__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Signup_signup__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_therap_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__validators_email__ = __webpack_require__(421);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = LoginPage_1 = (function () {
    function LoginPage(navCtrl, navParams, events, formBuilder, loadingCtrl, alertCtrl, fb, tw, therapService, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.fb = fb;
        this.tw = tw;
        this.therapService = therapService;
        this.storage = storage;
        this.FB_APP_ID = 897890287041798;
        this.userReady = false;
        this.fb.browserInit(this.FB_APP_ID, "v2.8");
        this.loginForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_8__validators_email__["a" /* EmailValidator */].isValid])],
            password: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required])]
        });
        this.message = '';
        this.events.subscribe('user:login_error', function (data) {
            _this.message = data;
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.ionViewCanEnter = function () {
    };
    //---------Twitter Login and Logout------------------------------------
    LoginPage.prototype.twitterLgoin = function () {
        var self = this;
        var loading = this.loadingCtrl.create({
            content: 'Connecting twitter...'
        });
        loading.present();
        //Request for login
        this.tw.login().then(function (result) {
            loading.dismiss().then(function () {
                //Get user data
                self.tw.showUser().then(function (user) {
                    console.log('Twitter User data!', user);
                    var userInfo = {
                        username: user.name,
                        password: user.id
                    };
                    console.log('loginWithTwitter Information', userInfo);
                    this.therapService.login(userInfo);
                }, function (error) {
                    console.log(error);
                });
            });
        }, function (error) {
            loading.dismiss();
            console.log('twitter login error:', error);
        });
    };
    LoginPage.prototype.twitterLogout = function () {
        var nav = this.navCtrl;
        var self = this;
        this.tw.logout().then(function (response) {
            self.storage.remove('user');
            nav.push(LoginPage_1);
        }, function (error) {
            console.log(error);
        });
    };
    //---------Facebook Login and Logout------------------------------------  
    LoginPage.prototype.facebookLgoin = function () {
        var permissions = new Array();
        var self = this;
        var loading = this.loadingCtrl.create({
            content: 'Connecting facebook...'
        });
        loading.present();
        //the permissions your facebook app needs from the user
        permissions = ["public_profile"];
        this.fb.login(permissions).then(function (response) {
            this.loading.dismiss().then(function () {
                var userId = response.authResponse.userID;
                var params = new Array();
                //Getting name and gender properties
                self.fb.api("/me?fields=name,gender", params).then(function (user) {
                    user.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
                    console.log('facebook user information', user);
                    var userInfo = {
                        username: user.name,
                        password: userId
                    };
                    console.log('loginWithFB Information', userInfo);
                    this.therapService.login(userInfo);
                });
            });
        }, function (error) {
            loading.dismiss();
            console.log('facebook login error:', error);
        });
    };
    LoginPage.prototype.facebookLogout = function () {
        var nav = this.navCtrl;
        this.fb.logout()
            .then(function (response) {
            nav.setRoot(LoginPage_1);
        }, function (error) {
            console.log(error);
        });
    };
    //---------User Login ------------------------------------
    LoginPage.prototype.accept = function () {
        var _this = this;
        console.log('Login Button Clicked');
        if (this.loginForm.value.email == '' || this.loginForm.value.password == '') {
            console.log(this.loginForm.value);
            var alert_1 = this.alertCtrl.create({
                message: 'Please Input Empty Value',
                buttons: [
                    {
                        text: "Ok",
                        role: 'cancel'
                    }
                ]
            });
            alert_1.present();
        }
        else {
            var userInfo = {
                username: this.loginForm.value.email,
                password: this.loginForm.value.password
            };
            console.log('login Information', userInfo);
            this.therapService.login(userInfo);
            setTimeout(function () {
                if (_this.message) {
                    _this.loading.dismiss().then(function () {
                        var alert = _this.alertCtrl.create({
                            message: _this.message,
                            buttons: [
                                {
                                    text: "Ok",
                                    role: 'cancel'
                                }
                            ]
                        });
                        alert.present();
                    });
                }
            }, 3000);
            this.loading = this.loadingCtrl.create({
                content: 'Please Wait...',
                dismissOnPageChange: true,
            });
            this.loading.present();
        }
    };
    LoginPage.prototype.register = function () {
        console.log('Register Button Clicked');
        var nav = this.navCtrl;
        nav.push(__WEBPACK_IMPORTED_MODULE_4__Signup_signup__["b" /* SignupPage */]);
    };
    return LoginPage;
}());
LoginPage = LoginPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Volumes/Work/WorkSpace/Mobile/Igor/phr-app/src/pages/Login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding>\n  <div class="header">\n    <img class = "header_img"src="assets/imgs/logo.png" />\n  </div>\n  \n  <ion-row class="social">\n    <ion-col class="twitter" (click) = "twitterLgoin()">\n      <img class="social_img" src="assets/imgs/twitter_btn.png" />\n    </ion-col>\n\n    <ion-col class="facebook" (click) = "facebookLgoin()">\n      <img class="social_img" src="assets/imgs/facebook_btn.png" />\n    </ion-col>\n  </ion-row>\n  \n  <form [formGroup]="loginForm" novalidate>  \n    <ion-item class="email_item">\n        <ion-input  class="email-input" formControlName="email" type="email" placeholder="{{\'USER_NAME\' | translate}}" [class.invalid]="!loginForm.controls.email.valid &&\n        loginForm.controls.email.dirty"></ion-input>\n        <p>Please enter a valid email.</p>\n    </ion-item>\n    <ion-item class="password_item">\n        <ion-input  class="password-input" formControlName="password" type="password" placeholder="{{\'PASSWORD\' | translate}}" [class.invalid]="!loginForm.controls.password.valid &&\n        loginForm.controls.password.dirty"></ion-input>\n        <p>Your password needs more than 6 characters.</p>\n    </ion-item>\n    \n    <ion-row class="accept_row">\n      <ion-col class="accept">\n        <button ion-button class="login-btn" (click)="accept()">{{"LOGIN" | translate}}</button>\n      </ion-col>\n      \n      </ion-row>\n      <p>{{ \'USERNAME_OR_PASSWORD_FORGOT\' | translate }}</p>\n    <ion-row class="register_row">\n      <ion-col class="register">\n          <button ion-button class="register-btn" (click)="register()">{{"NEW_REGISTER?" | translate}}</button>\n      </ion-col>  \n    </ion-row>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Volumes/Work/WorkSpace/Mobile/Igor/phr-app/src/pages/Login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
        __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__["a" /* Facebook */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_twitter_connect__["a" /* TwitterConnect */],
        __WEBPACK_IMPORTED_MODULE_5__providers_therap_service__["a" /* TherapService */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
], LoginPage);

var LoginPage_1;
//# sourceMappingURL=login.js.map

/***/ }),

/***/ 134:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 134;

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/Login/login.module": [
		456,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 176;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SignupPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_language_service__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_therap_service__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = (function () {
    function SignupPage(navCtrl, navParams, events, popoverCtrl, alertCtrl, loadingCtrl, translate, languageService, therapService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.popoverCtrl = popoverCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.translate = translate;
        this.languageService = languageService;
        this.therapService = therapService;
        this.userInfo = {
            username: '',
            password: '',
            language: '',
            nation: '',
            city: '',
            birthday: '',
        };
        this.languageSelected = 'it';
        this.languages = this.languageService.getLanguages();
        this.setLanguage();
        this.message = '';
        this.events.subscribe('user:signup_error', function (data) {
            _this.message = data;
        });
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
        this.translate.get('OTHER_VOICE').subscribe(function (value) {
            // value is our translated string
            var alertTitle = value;
            console.log('Translate Value==', alertTitle);
        });
    };
    SignupPage.prototype.setLanguage = function () {
        var defaultLanguage = this.translate.getDefaultLang();
        if (this.languageSelected) {
            this.translate.setDefaultLang(this.languageSelected);
            this.translate.use(this.languageSelected);
        }
        else {
            this.languageSelected = defaultLanguage;
            this.translate.use(defaultLanguage);
        }
    };
    SignupPage.prototype.showLanguageList = function (event) {
        var _this = this;
        console.log("clicked showlist button!");
        var popover = this.popoverCtrl.create(PopoverPage, { item: 'lang' });
        popover.present({
            ev: event
        });
        popover.onDidDismiss(function (data) {
            if (data)
                _this.userInfo.language = data;
            _this.languageSelected = data;
            _this.setLanguage();
        });
    };
    SignupPage.prototype.showNationList = function (event) {
        var _this = this;
        console.log("clicked showlist button!");
        var popover = this.popoverCtrl.create(PopoverPage, { item: 'nation' });
        popover.present({
            ev: event
        });
        popover.onDidDismiss(function (data) {
            if (data)
                _this.userInfo.nation = data;
        });
    };
    SignupPage.prototype.showCityList = function (event) {
        var _this = this;
        console.log("clicked showlist button!");
        var popover = this.popoverCtrl.create(PopoverPage, { item: 'city' });
        popover.present({
            ev: event
        });
        popover.onDidDismiss(function (data) {
            if (data)
                _this.userInfo.city = data;
        });
    };
    SignupPage.prototype.gotoLogin = function () {
        this.navCtrl.popToRoot();
    };
    //------------------------------Create a User - app ---------------------------------
    SignupPage.prototype.register = function () {
        var _this = this;
        if (!this.userInfo.username || !this.userInfo.password || !this.userInfo.language || !this.userInfo.nation || !this.userInfo.city || !this.userInfo.birthday) {
            var alert_1 = this.alertCtrl.create({
                message: 'Please Inset Valid Value to Register',
                buttons: [
                    {
                        text: "Ok",
                        role: 'cancel'
                    }
                ]
            });
            alert_1.present();
        }
        this.therapService.signupCustomer(this.userInfo);
        setTimeout(function () {
            console.log("The Message======Signup", _this.message);
            if (_this.message) {
                _this.loading.dismiss().then(function () {
                    var alert = _this.alertCtrl.create({
                        message: _this.message,
                        buttons: [
                            {
                                text: "Ok",
                                role: 'cancel'
                            }
                        ]
                    });
                    alert.present();
                });
            }
        }, 3000);
        this.loading = this.loadingCtrl.create({
            content: 'Please Wait...',
            dismissOnPageChange: true,
        });
        this.loading.present();
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"/Volumes/Work/WorkSpace/Mobile/Igor/phr-app/src/pages/Signup/signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{\'REGISTER\' | translate}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    \n    <ion-item class="username-item">\n        <ion-input  class="email-input" type="email" placeholder="{{\'USER_NAME\' | translate}}" [(ngModel)]="userInfo.username"></ion-input>\n    </ion-item>\n   \n    <ion-item class="password-item">\n        <ion-input  class="password-input" type="password" placeholder="{{\'PASSWORD\' | translate}}" [(ngModel)]="userInfo.password"></ion-input>\n    </ion-item>\n\n    <ion-row class="language-select">\n        <ion-col class="language-item label-item">\n            <ion-input  class="language-input" type="text" placeholder="{{\'LANGUAGES\' | translate}}" [(ngModel)]="userInfo.language"></ion-input>\n        </ion-col>\n        <ion-col class ="dropdown">\n          <ion-icon class="dropdown-icon" ios="md-arrow-dropdown" md="md-arrow-dropdown" (click)="showLanguageList($event)"></ion-icon>\n        </ion-col>\n    </ion-row> \n    \n    <ion-row class="nation-select">\n        <ion-col class="nation-item label-item">\n            <ion-input  class="nation-input" type="text" placeholder="{{\'NATION\' | translate}}" [(ngModel)]="userInfo.nation"></ion-input>\n        </ion-col>\n        <ion-col class ="dropdown">\n            <ion-icon class="dropdown-icon" ios="md-arrow-dropdown" md="md-arrow-dropdown" (click)="showNationList($event)"></ion-icon>\n        </ion-col>\n    </ion-row> \n\n    <ion-row class="city-select">\n        <ion-col class="city-item label-item">\n            <ion-input  class="city-input" type="text" placeholder="{{\'CITY\' | translate}}" [(ngModel)]="userInfo.city"></ion-input>\n        </ion-col>\n        <ion-col class ="dropdown">\n            <ion-icon class="dropdown-icon" ios="md-arrow-dropdown" md="md-arrow-dropdown" (click)="showCityList($event)"></ion-icon>\n        </ion-col>\n    </ion-row> \n    \n\n    <ion-item class="birthday-item">\n        <ion-datetime displayFormat="MMM DD, YYYY" [(ngModel)]="userInfo.birthday" placeholder="{{\'BIRTHDAY_DATE\' | translate}}"></ion-datetime>\n    </ion-item>\n\n    <ion-row class="btn-cont">\n      <ion-col>\n        <button ion-button class="login-btn" (click)="gotoLogin()">{{\'LOGIN\' | translate}}</button>\n      </ion-col>\n      \n      <ion-col>\n          <button ion-button class="register-btn" (click)="register()">{{\'REGISTER\' | translate}}</button>\n      </ion-col>\n    </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/Work/WorkSpace/Mobile/Igor/phr-app/src/pages/Signup/signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_language_service__["a" /* LanguageService */],
        __WEBPACK_IMPORTED_MODULE_4__providers_therap_service__["a" /* TherapService */]])
], SignupPage);

var PopoverPage = (function () {
    function PopoverPage(params, viewCtrl) {
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.languageList = [
            'en', 'it', 'ru'
        ];
        this.nationList = [
            'Italian', 'England', 'Russian'
        ];
        this.cityList = [
            'Roma', 'Milan', 'Naples', 'Turin', 'Palermo'
        ];
        this.m_selectItem = this.params.get('item');
        this.checkListItem();
    }
    PopoverPage.prototype.checkListItem = function () {
        if (this.m_selectItem == "lang") {
            this.optionList = this.languageList;
        }
        else if (this.m_selectItem == "nation") {
            this.optionList = this.nationList;
        }
        else if (this.m_selectItem == 'city') {
            this.optionList = this.cityList;
        }
    };
    PopoverPage.prototype.selectItem = function (item) {
        // this.m_selectItem = item;
        this.viewCtrl.dismiss(item);
    };
    return PopoverPage;
}());
PopoverPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        template: "<ion-list radio-group>\n              <ion-item class=\"feedback-item\" *ngFor=\"let item of optionList;\">\n                <ion-label>{{item}}</ion-label>\n                <ion-radio [checked]=\"item===m_selectItem\" value=\"{{item}}\" (click)=\"selectItem(item)\"></ion-radio>\n              </ion-item>         \n            </ion-list>"
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
], PopoverPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LanguageService = (function () {
    function LanguageService() {
        this.languages = new Array();
        this.languages.push({ name: "English", code: "en" }, { name: "Italian", code: "it" }, { name: "Russian", code: "ru" });
    }
    LanguageService.prototype.getLanguages = function () {
        return this.languages;
    };
    return LanguageService;
}());
LanguageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], LanguageService);

//# sourceMappingURL=language.service.js.map

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TherapService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_todayTherap_model__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_vibration__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_audio__ = __webpack_require__(96);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import { Media, MediaObject } from '@ionic-native/media';


var TherapService = (function () {
    function TherapService(http, storage, events, nativeAudio, vibration) {
        this.http = http;
        this.storage = storage;
        this.events = events;
        this.nativeAudio = nativeAudio;
        this.vibration = vibration;
        this.theraps = new Array();
        this.todayTheraps = new Array();
        this.takeModeList = [];
        this.userInfo = [];
        this.weekDays = {
            "mon": false, "tue": false, "wed": false, "thu": false, "fri": false, "sat": false, "sun": false
        };
        this.URL = 'http://145.239.199.191:8080/phr';
        this.header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        });
        this.initURL();
        this.initWeeksDay();
    }
    //------------------------- Init Temp Data--------------------
    TherapService.prototype.initURL = function () {
        this.tokenURL = this.URL + '/session';
        this.geoURL = this.URL + '/geo';
        this.taskURL = this.URL + '/task';
        this.therapyURL = this.URL + '/therapy';
        this.userURL = this.URL + '/user';
        this.takeModeURL = this.URL + '/therapy/medicine/takemode/list';
        this.userToken = "";
        this.userInfo = [];
        this.queryInterval = null;
        this.nativeAudio.preloadSimple('alarm', 'assets/audio/alarm-tone.mp3').then(function (msg) {
            console.log("message: " + msg);
        }, function (error) {
            console.log("error: " + error);
        });
    };
    TherapService.prototype.initHeader = function () {
        this.header = null;
        this.header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        });
    };
    //-------------------------- Admin Token Controller -----------------
    TherapService.prototype.setAdminToken = function () {
        var _this = this;
        console.log('Admin Token Getting!');
        this.initHeader();
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: this.header });
        var tokenRegData = { password: "phr", username: "usercreate" };
        this.http.post(this.tokenURL, tokenRegData, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log('adminToken Data:', data.model.token);
            _this.adminToken = data.model.token;
            _this.storage.set('admin_token', data.model.token);
        }, function (err) {
            console.log("ERROR!: ", err);
        });
    };
    TherapService.prototype.getAdminToken = function () {
        return this.storage.get('admin_token');
    };
    //------------------------ Customer Token Controller ------------------------
    TherapService.prototype.setUserToken = function (info) {
        var _this = this;
        console.log('User Token Get Function');
        this.initHeader();
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: this.header });
        var tokenRegData = { password: info.password, username: info.username };
        this.http.post(this.tokenURL, tokenRegData, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log('userToken Data', data.model.token);
            _this.userToken = data.model.token;
            _this.storage.set('userToken', data.model.token);
        }, function (err) {
            console.log("ERROR!: ", err);
        });
    };
    TherapService.prototype.getUserToken = function () {
        return this.storage.get('userToken');
    };
    //------------------------  User Controller Service ------------------------ 
    TherapService.prototype.setUser = function (info) {
        this.userInfo = info;
        this.storage.set('customer', info);
    };
    TherapService.prototype.getUser = function () {
        return this.storage.get('customer');
    };
    //------------------------  Session Controller Service ------------------------ 
    TherapService.prototype.login = function (info) {
        var _this = this;
        this.initHeader();
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: this.header });
        var reqData = {
            username: info.username,
            password: info.password,
        };
        console.log('Login Requestion Data', this.tokenURL, reqData, options);
        this.http
            .post(this.tokenURL, reqData, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log('User Logged in data:', data);
            var userInfo = ({
                id: data.model.id,
                username: data.model.username,
                password: info.password,
                lang: data.model.language
            });
            _this.setUser(userInfo);
            _this.userToken = data.model.token;
            _this.userID = data.model.id;
            _this.getTheraps();
            _this.getTakeMode();
            _this.storage.set('userToken', data.model.token);
            if (_this.queryInterval) {
                clearInterval(_this.queryInterval);
            }
            _this.getRealTimeData();
            _this.events.publish('user:login', userInfo);
        }, function (err) {
            console.log("ERROR!: ", err);
            _this.events.publish('user:login_error', err);
        });
    };
    TherapService.prototype.getRealTimeData = function () {
        var _this = this;
        this.queryInterval = setInterval(function () {
            if (_this.userInfo.username && _this.userInfo.password) {
                _this.login(_this.userInfo);
                // console.log('RealTime Query!');
            }
        }, 3600000);
    };
    TherapService.prototype.logout = function () {
        this.userInfo = [];
        this.userID = '';
        this.userToken = '';
        this.storage.remove('customer');
        this.storage.remove('userToken');
    };
    //------------------------ Customer Creat Controller ----------------------------- 
    TherapService.prototype.signupCustomer = function (info) {
        var _this = this;
        this.initHeader();
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: this.header });
        var tokenRegData = { password: "phr", username: "usercreate" };
        this.http.post(this.tokenURL, tokenRegData, options).map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log('adminToken Data:', data.model.token);
            _this.adminToken = data.model.token;
            _this.header.append('X-Token', _this.adminToken);
            var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: _this.header });
            var creatUserURL = _this.userURL + '/new';
            var reqData = {
                username: info.username,
                password: info.password,
                roles: ['CUSTOMER']
            };
            _this.http.post(creatUserURL, reqData, options).map(function (res) { return res.json(); }).subscribe(function (data) {
                console.log('userSingupData', data);
                var userInfo = ({
                    id: data.model.id,
                    username: info.username,
                    password: info.password
                });
                _this.setUser(userInfo);
                _this.setUserToken(userInfo);
                _this.events.publish('user:signup', data.model.username);
            }, function (err) {
                console.log("ERROR!: ", err);
                _this.events.publish('user:signup_error', err);
            });
        }, function (err) {
            console.log("ERROR!: ", err);
        });
    };
    //----------------------------------------------------------------------------------------------------
    //-----------------------------------  Therapy Controller Service ------------------------------------ 
    //----------------------------------------------------------------------------------------------------
    TherapService.prototype.setTherapy = function (info) {
        var _this = this;
        console.log('setTherapy post!');
        this.initHeader();
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: this.header });
        var tokenRegData = { password: this.userInfo.password, username: this.userInfo.username };
        this.http.post(this.tokenURL, tokenRegData, options).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.userToken = data.model.token;
            _this.postTheraps(info, _this.userToken, _this.userID);
            _this.storage.set('userToken', data.model.token);
        }, function (err) {
            console.log("ERROR!: ", err);
        });
    };
    //---Post Theraps---------------------------------------------------------------------------
    TherapService.prototype.postTheraps = function (info, token, uId) {
        var _this = this;
        this.initHeader();
        this.header.append('X-Token', token);
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: this.header });
        var setTherapyURL = this.therapyURL;
        var reqData = {
            id: 0,
            userId: uId,
            customDays: info.customDays,
            hours: info.hours,
            media: info.media,
            medicineName: info.medicineName,
            medicineQty: info.medicineQty,
            medicineTakeMode: info.medicineTakeMode,
            removed: info.removed,
            noRepeat: info.noRepeat,
            tsEnd: info.tsEnd,
            tsEndStr: info.tsEndStr,
            tsStart: info.tsStart,
            tsStartStr: info.tsStartStr,
            weekDays: info.weekDays
        };
        console.log('postTherapyData===', setTherapyURL, reqData, options);
        this.http
            .post(setTherapyURL, reqData, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log('Therapy Post Response!', data);
            _this.theraps.push(data.model);
            _this.getTodayTherapy();
            _this.events.publish('user:createThet_success', 'success');
        }, function (err) {
            console.log("ERROR!: ", err);
            _this.events.publish('user:createThet_error', err);
        });
    };
    //------ Get Theraps ---------------------------------------------------------------------------
    TherapService.prototype.getTheraps = function () {
        if (this.userToken && this.userID) {
            this.getTherapsData(this.userToken, this.userID);
        }
    };
    TherapService.prototype.getTherapsData = function (token, uId) {
        var _this = this;
        this.initHeader();
        this.header.append('X-Token', token);
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: this.header });
        var getTherapyURL = this.therapyURL + '?userId=' + uId + '&includeRemoved=false';
        console.log('header-datas', this.header, getTherapyURL);
        this.http
            .get(getTherapyURL, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log('Get TherapyResponse', data);
            _this.theraps = [];
            _this.todayTheraps = [];
            for (var i = 0; i < data.model.length; i++) {
                _this.theraps.push(data.model[i]);
            }
            _this.getTodayTherapy();
            _this.events.publish('user:getTherap', 'success');
        }, function (err) {
            console.log("ERROR!: ", err);
            _this.events.publish('user:getTherap', 'error');
        });
    };
    TherapService.prototype.getTherapsDataForApp = function () {
        return this.theraps;
    };
    //-- Edit Theraps ---------------------------------------------------------------------------
    TherapService.prototype.updateTheraps = function (therapys) {
        var _this = this;
        this.initHeader();
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: this.header });
        var tokenRegData = { password: this.userInfo.password, username: this.userInfo.username };
        this.http.post(this.tokenURL, tokenRegData, options).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.userToken = data.model.token;
            var updateTherapyData = [];
            updateTherapyData = therapys;
            updateTherapyData['userId'] = _this.userID;
            var updateTherapyURL = _this.therapyURL + "/" + updateTherapyData['id'];
            console.log('Therapy updating!');
            _this.updateTherapsData(updateTherapyData, _this.userToken, updateTherapyURL);
        }, function (err) {
            console.log("ERROR!: ", err);
        });
    };
    TherapService.prototype.updateTherapsData = function (therapysData, token, url) {
        var _this = this;
        this.initHeader();
        var self = this;
        this.header.append('X-Token', token);
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: this.header });
        console.log('Update Therapy Data', therapysData);
        this.http.put(url, therapysData, options).map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log('Update TherapyResponse', data);
            for (var i = 0; i < _this.theraps.length; i++) {
                if (self.theraps[i]['id'] === therapysData['id'] && self.theraps[i]['userId'] === therapysData['userId']) {
                    var tempData = ({
                        id: therapysData['id'],
                        userId: therapysData['userId'],
                        customDays: therapysData['customDays'],
                        hours: therapysData['hours'],
                        media: therapysData['media'],
                        medicineName: therapysData['medicineName'],
                        medicineQty: therapysData['medicineQty'],
                        medicineTakeMode: therapysData['medicineTakeMode'],
                        removed: therapysData['removed'],
                        noRepeat: therapysData['noRepeat'],
                        tsEnd: therapysData['tsEnd'],
                        tsEndStr: therapysData['tsEndStr'],
                        tsStart: therapysData['tsStart'],
                        tsStartStr: therapysData['tsStartStr'],
                        weekDays: therapysData['weekDays']
                    });
                    self.theraps.splice(i, 1);
                    self.theraps.splice(i, 0, tempData);
                    break;
                }
            }
            _this.getTodayTherapy();
            _this.events.publish('user:updateTherapy_success', 'success');
        }, function (err) {
            console.log("ERROR!: ", err);
            _this.events.publish('user:updateTherapy_error', err);
        });
    };
    //------------------------ Get TherapyTakeMode ---------------------------
    TherapService.prototype.getTakeMode = function () {
        var _this = this;
        this.initHeader();
        this.header.append('X-Token', this.userToken);
        this.http.get(this.takeModeURL, { headers: this.header }).map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log('TakeModeList', data);
            _this.takeModeList = data.model;
        }, function (err) {
            console.log('Take Model Error!', err);
        });
    };
    //------------------------  Geo Controller Service ------------------------ 
    TherapService.prototype.getCityInformation = function () {
    };
    TherapService.prototype.getCountryInformation = function () {
    };
    //------------------------  Days of Week Service ------------------------ 
    TherapService.prototype.activeWeekDays = function (week) {
        switch (week) {
            case 'All days':
                this.initWeeksDay();
                break;
            case 'Monday':
                this.weekDays.mon = true;
                break;
            case 'Tuesday':
                this.weekDays.tue = true;
                break;
            case 'Wednesday':
                this.weekDays.wed = true;
                break;
            case 'Thuesday':
                this.weekDays.thu = true;
                break;
            case 'Friday':
                this.weekDays.fri = true;
                break;
            case 'Saturday':
                this.weekDays.sat = true;
                break;
            case 'Sunday':
                this.weekDays.sun = true;
                break;
            default: {
                break;
            }
        }
    };
    TherapService.prototype.deActiveWeekDays = function (week) {
        switch (week) {
            case 'All days':
                this.initWeeksDay();
                break;
            case 'Monday':
                this.weekDays.mon = false;
                break;
            case 'Tuesday':
                this.weekDays.tue = false;
                break;
            case 'Wednesday':
                this.weekDays.wed = false;
                break;
            case 'Thuesday':
                this.weekDays.thu = false;
                break;
            case 'Friday':
                this.weekDays.fri = false;
                break;
            case 'Saturday':
                this.weekDays.sat = false;
                break;
            case 'Sunday':
                this.weekDays.sun = false;
                break;
            default: {
                break;
            }
        }
    };
    TherapService.prototype.initWeeksDay = function () {
        this.weekDays.mon = true;
        this.weekDays.tue = true;
        this.weekDays.wed = true;
        this.weekDays.thu = true;
        this.weekDays.fri = true;
        this.weekDays.sat = true;
        this.weekDays.sun = true;
    };
    TherapService.prototype.getTodayTherapy = function () {
        var todayDate = __WEBPACK_IMPORTED_MODULE_6_moment__();
        var tempTherapy = [];
        this.todayTheraps = [];
        for (var i = 0; i < this.theraps.length; i++) {
            var sDate = __WEBPACK_IMPORTED_MODULE_6_moment__(this.theraps[i].tsStart);
            if (this.theraps[i].tsEnd) {
                var eDate = __WEBPACK_IMPORTED_MODULE_6_moment__(this.theraps[i].tsEnd);
                if ((todayDate.isBetween(sDate, eDate, 'day')) || (todayDate.isSame(sDate, 'day')) || (todayDate.isSame(eDate, 'day'))) {
                    console.log('Theraps Contained', this.theraps[i]);
                    tempTherapy.push(this.theraps[i]);
                }
            }
            else {
                if (todayDate.isSame(sDate, 'day') || todayDate.isSameOrAfter(sDate, 'day')) {
                    console.log('Theraps Contained with Empty EndDate', this.theraps[i]);
                    tempTherapy.push(this.theraps[i]);
                }
            }
        }
        for (var i = 0; i < tempTherapy.length; i++) {
            for (var j = 0; j < tempTherapy[i].hours.length; j++) {
                todayDate = __WEBPACK_IMPORTED_MODULE_6_moment__();
                var newDay = __WEBPACK_IMPORTED_MODULE_6_moment__([todayDate.year(), todayDate.month(), todayDate.date(), tempTherapy[i].hours[j].hours, tempTherapy[i].hours[j].minutes, 0, 0]);
                if (__WEBPACK_IMPORTED_MODULE_6_moment__(newDay).isSameOrBefore(todayDate, 'seconds')) {
                    newDay.add(1, 'd');
                }
                var tempToday = new __WEBPACK_IMPORTED_MODULE_2__models_todayTherap_model__["a" /* TodayTherapModel */]();
                tempToday = ({
                    time: newDay,
                    id: tempTherapy[i].id,
                    customDays: tempTherapy[i].customDays,
                    hours: tempTherapy[i].hours[j],
                    media: tempTherapy[i].media,
                    medicineName: tempTherapy[i].medicineName,
                    medicineQty: tempTherapy[i].medicineQty,
                    medicineTakeMode: tempTherapy[i].medicineTakeMode,
                    removed: tempTherapy[i].removed,
                    noRepeat: tempTherapy[i].noRepeat,
                    tsEnd: tempTherapy[i].tsEnd,
                    tsEndStr: tempTherapy[i].tsEndStr,
                    tsStart: tempTherapy[i].tsStart,
                    tsStartStr: tempTherapy[i].tsStartStr,
                    weekDays: tempTherapy[i].weekDays
                });
                this.todayTheraps.push(tempToday);
            }
        }
        this.todayTheraps.sort(function (a, b) { return a.hours.minutes - b.hours.minutes; });
        this.todayTheraps.sort(function (a, b) { return a.hours.hours - b.hours.hours; });
        this.events.publish('user:getTodayTherap', 'success');
        console.log('Today Therapy', this.todayTheraps);
    };
    TherapService.prototype.setAcknowledge = function (tId) {
        this.initHeader();
        this.header.append('X-Token', this.userToken);
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: this.header });
        var eventMoment = __WEBPACK_IMPORTED_MODULE_6_moment__();
        var tsEvent = eventMoment.valueOf();
        var ackURL = this.therapyURL + '/ack/' + this.userID + '/' + tId + '/' + tsEvent + '?level=' + 'DONE';
        var content = undefined;
        this.http.put(ackURL, content, options).map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log('Acknowledge Response!', data);
        }, function (err) {
            console.log('Acknowledge Error!', err);
        });
    };
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////// Vibration and Sounds ///////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    TherapService.prototype.startAlarm = function () {
        var _this = this;
        this.nativeAudio.play('alarm');
        this.interval = setInterval(function () {
            _this.vibration.vibrate(2000);
        }, 3000);
    };
    TherapService.prototype.stopeAlarm = function () {
        this.nativeAudio.stop('alarm');
        clearInterval(this.interval);
    };
    return TherapService;
}());
TherapService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Events */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_audio__["a" /* NativeAudio */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_vibration__["a" /* Vibration */]])
], TherapService);

//# sourceMappingURL=therap.service.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AddAlert_addalert__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__EditAlert_editAlert__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_therap_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_therap_model__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_local_notifications__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__AlarmModal_alarmModal__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_background_mode__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_native_audio__ = __webpack_require__(96);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import * as moment from 'moment';
// import { Observable } from "rxjs";
// import {Autostart} from "@ionic-native/autostart";




var HomePage = (function () {
    function HomePage(events, navCtrl, loadingCtrl, therapService, localNotifications, alertCtrl, modalCtrl, translate, backgroundMode, nativeAudio) {
        var _this = this;
        this.events = events;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.therapService = therapService;
        this.localNotifications = localNotifications;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.translate = translate;
        this.backgroundMode = backgroundMode;
        this.nativeAudio = nativeAudio;
        this.theraps = new Array();
        this.todayTheraps = new Array();
        this.backgroundMode.enable();
        this.backgroundMode.setDefaults({ silent: true });
        // Show Pharmalarm
        this.localNotifications.on("click", function (notification, state) {
            var alarmData = JSON.parse(notification.data);
            var alarmModal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__AlarmModal_alarmModal__["a" /* AlarmModalPage */], { item: alarmData });
            alarmModal.present();
        });
        this.localNotifications.on("trigger", function (notification, state) {
            _this.therapService.startAlarm();
        });
        this._subscribeToEvents();
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
        this.initData();
    };
    HomePage.prototype.ionViewWillEnter = function () {
        console.log('ionViewWillEnter HomePage');
        this.getTodayDateValue();
    };
    HomePage.prototype.setNotification = function () {
        for (var i = 0; i < this.therapService.todayTheraps.length; i++) {
            var alarmDate = new Date(this.therapService.todayTheraps[i].time);
            var notiData = JSON.stringify(this.therapService.todayTheraps[i]);
            this.localNotifications.schedule({
                id: i,
                title: "Pharmalarm Therapy Notification",
                text: this.therapService.todayTheraps[i].medicineName,
                at: alarmDate,
                data: notiData,
            });
        }
    };
    HomePage.prototype._subscribeToEvents = function () {
        var _this = this;
        this.message = '';
        this.events.subscribe('user:getTherap', function (data) {
            _this.message = data;
        });
        this.events.subscribe('user:getTodayTherap', function (data) {
            _this.setNotification();
            console.log('Today Therapys Set!');
        });
    };
    HomePage.prototype.initData = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.message === 'success') {
                _this.loading.dismiss().then(function () {
                });
            }
            else if (_this.message === 'error') {
                _this.loading.dismiss().then(function () {
                    console.log('Loading Dismission!');
                    var alert = _this.alertCtrl.create({
                        message: _this.message,
                        buttons: [{
                                text: "Ok",
                                role: 'cancel'
                            }]
                    });
                    alert.present();
                });
            }
            else {
                _this.loading.dismiss();
            }
        }, 5000);
        this.loading = this.loadingCtrl.create({
            content: 'Loding Alarms...',
            dismissOnPageChange: true,
        });
        this.loading.present();
    };
    //-----------Get Today Date String----------------------------------------------------------------------------
    HomePage.prototype.getTodayDateValue = function () {
        var _this = this;
        var tempdate = new Date().toString();
        var splitt = tempdate.split(' ', 5);
        this.translate.get(splitt[0]).subscribe(function (translateValue) {
            _this.todayDateLabel = translateValue + " " + splitt[2] + " ";
        });
        this.translate.get(splitt[1]).subscribe(function (translateValue) {
            _this.todayDateLabel += translateValue;
        });
        this.translate.get('PLAN_TERAPERUTICO').subscribe(function (translateValue) {
            _this.todayPlanLabel = translateValue;
        });
        console.log('Today PlanLabel', this.todayPlanLabel);
    };
    //-----------------Add Pharmalarm Page---------------------------------------------------------------------------------
    HomePage.prototype.addItems = function () {
        var nav = this.navCtrl;
        nav.push(__WEBPACK_IMPORTED_MODULE_3__AddAlert_addalert__["a" /* AddAlertPage */]);
    };
    HomePage.prototype.getStatusImage = function (status) {
        if (status) {
            return "assets/imgs/check_icon.png";
        }
        else {
            return "assets/imgs/arrow_icon.png";
        }
    };
    //-------------Show Alarm Details ------------------------------------------------------------
    HomePage.prototype.gotoDetails = function (item) {
        console.log('Edit Item', item);
        var editItme = new __WEBPACK_IMPORTED_MODULE_6__models_therap_model__["a" /* TherapModel */]();
        for (var i = 0; i < this.therapService.theraps.length; i++) {
            if (this.therapService.theraps[i].id === item.id) {
                editItme = this.therapService.theraps[i];
                break;
            }
        }
        var nav = this.navCtrl;
        nav.push(__WEBPACK_IMPORTED_MODULE_4__EditAlert_editAlert__["a" /* EditAlertPage */], { therap: editItme });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Volumes/Work/WorkSpace/Mobile/Igor/phr-app/src/pages/Home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Pharmalarm</ion-title>\n    <div class="rightbtn_container" (click)="addItems()">\n        <img class="add_icon" src="assets/icon/add_icon.png" />\n    </div>\n  </ion-navbar>\n   \n</ion-header>\n\n<ion-content>\n    <div class="plan_home_container">\n        <ion-label class="plan_label">{{todayPlanLabel}}</ion-label> \n    </div>\n    <div class="Datelabel_container">\n      <ion-label class="date_label">{{todayDateLabel}}</ion-label> \n    </div>\n    <div class="daily-Container">\n      <ion-row class="drug-row" *ngFor="let item of therapService.todayTheraps; let i = index">  \n        <ion-col class="time_col">\n          <div class="first">\n              <div class="second"><p> {{item.time.format(\'HH:mm\')}} </p></div>\n          </div>\n        </ion-col>\n        <ion-col class="des_col">\n          <p class="title">{{item.medicineName}}</p>\n          <p class="des">{{item.medicineQty}} {{item.medicineTakeMode}}</p>\n        </ion-col>\n        <ion-col class="info_col">\n          <img class="info_icon"  [src]="getStatusImage(item.removed)" (click)="gotoDetails(item)"/>\n        </ion-col>\n      </ion-row>\n    </div>\n</ion-content>\n\n '/*ion-inline-end:"/Volumes/Work/WorkSpace/Mobile/Igor/phr-app/src/pages/Home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_therap_service__["a" /* TherapService */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_local_notifications__["a" /* LocalNotifications */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_9__ionic_native_background_mode__["a" /* BackgroundMode */],
        __WEBPACK_IMPORTED_MODULE_10__ionic_native_native_audio__["a" /* NativeAudio */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddAlertPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CalendarModal_calendarModal__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__TimePicker_timePicker__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_therap_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__AlarmModal_alarmModal__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_path__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_keyboard__ = __webpack_require__(348);
/**
 * Generated class for the AddAlertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AddAlertPage = (function () {
    function AddAlertPage(navCtrl, navParams, events, modalCtrl, viewCtrl, loadingCtrl, camera, alertCtrl, therapService, file, filePath, keyboard) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        this.therapService = therapService;
        this.file = file;
        this.filePath = filePath;
        this.keyboard = keyboard;
        this.hoursData = [];
        this.InitImage();
        this.date = __WEBPACK_IMPORTED_MODULE_6_moment__();
        this.err_message = '';
        this.events.subscribe('user:createThet_error', function (data) {
            _this.err_message = data;
        });
        this.suc_message = '';
        this.events.subscribe('user:createThet_success', function (data) {
            _this.suc_message = data;
        });
        this.repeat = 1;
    }
    AddAlertPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddAlertPage');
    };
    AddAlertPage.prototype.ionViewDidLeave = function () {
        this.keyboard.close();
    };
    AddAlertPage.prototype.InitImage = function () {
        this.therImgA = "assets/imgs/camera-icon.png";
        this.therImgB = "assets/imgs/camera-icon.png";
        this.therImgC = "assets/imgs/camera-icon.png";
        this.therImgD = "assets/imgs/camera-icon.png";
        this.alertString = "";
    };
    AddAlertPage.prototype.AddStartDate = function () {
        var _this = this;
        this.startDate = "";
        this.rStartDate = '';
        var myCalendar = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__CalendarModal_calendarModal__["a" /* CalendarModalPage */]);
        myCalendar.present();
        myCalendar.onDidDismiss(function (data) {
            console.log(data);
            if (data) {
                console.log('Start Date', data);
                var splitted = data.split(" ", 4);
                _this.startDate = splitted[0] + ", " + splitted[1] + " " + splitted[2];
                var m = new Date(data);
                var str = __WEBPACK_IMPORTED_MODULE_6_moment__(m, 'YYYY-MM-DD hh:mm').format();
                var str1 = str.split('T', 2);
                var str2 = str1[1].split(':', 3);
                _this.rStartDate = str1[0] + ' ' + str2[0] + ':' + str2[1];
                console.log('StartDate', _this.rStartDate);
            }
        });
    };
    AddAlertPage.prototype.AddEndDate = function () {
        var _this = this;
        console.log("AddEndDate Button Clicked!");
        this.endDate = "";
        this.rEndDate = '';
        var myCalendar = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__CalendarModal_calendarModal__["a" /* CalendarModalPage */]);
        myCalendar.present();
        myCalendar.onDidDismiss(function (data) {
            console.log(data);
            if (data) {
                var splitted = data.split(" ", 4);
                _this.endDate = splitted[0] + ", " + splitted[1] + " " + splitted[2];
                var m = new Date(data);
                var str = __WEBPACK_IMPORTED_MODULE_6_moment__(m, 'YYYY-MM-DD hh:mm').format();
                var str1 = str.split('T', 2);
                var str2 = str1[1].split(':', 3);
                _this.rEndDate = str1[0] + ' ' + str2[0] + ':' + str2[1];
            }
        });
    };
    //---------------- Test Alert--------------------------------------
    AddAlertPage.prototype.testAlert = function () {
        console.log("Test Alert Button Clicked!");
        var images = [];
        if (this.therImgA) {
            images.push(this.therImgA);
        }
        if (this.therImgB) {
            images.push(this.therImgB);
        }
        if (this.therImgC) {
            images.push(this.therImgC);
        }
        if (this.therImgD) {
            images.push(this.therImgD);
        }
        var tempData = ({
            customDays: this.repeat,
            hours: this.hoursData[0],
            media: images,
            medicineName: this.medicinName,
            medicineQty: this.medicinUnity,
            medicineTakeMode: this.medicinType,
            removed: false,
            noRepeat: true,
            tsEnd: 0,
            tsEndStr: this.rEndDate,
            tsStart: 0,
            tsStartStr: this.rStartDate,
            weekDays: this.therapService.weekDays
        });
        this.checkValidData();
        console.log('Test Data', tempData);
        if (this.alertString != '') {
            var alert_1 = this.alertCtrl.create({
                message: this.alertString,
                buttons: [{
                        text: "Ok",
                        role: 'cancel'
                    }]
            });
            alert_1.present();
        }
        else {
            var alarmModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__AlarmModal_alarmModal__["a" /* AlarmModalPage */], { item: tempData });
            alarmModal.present();
        }
    };
    //-----------------Save Alert--------------------------------------
    AddAlertPage.prototype.saveAlert = function () {
        var _this = this;
        console.log("Save Alert Button Clicked!");
        this.checkValidData();
        if (this.alertString != '') {
            var alert_2 = this.alertCtrl.create({
                message: this.alertString,
                buttons: [{
                        text: "Ok",
                        role: 'cancel'
                    }]
            });
            alert_2.present();
        }
        else {
            this.saveAlertData();
            setTimeout(function () {
                if (_this.err_message) {
                    _this.loading.dismiss().then(function () {
                        var alert = _this.alertCtrl.create({
                            message: _this.err_message,
                            buttons: [{
                                    text: "Ok",
                                    role: 'cancel'
                                }]
                        });
                        alert.present();
                    });
                }
                if (_this.suc_message) {
                    _this.loading.dismiss().then(function () {
                        _this.navCtrl.pop();
                    });
                }
            }, 5000);
            this.loading = this.loadingCtrl.create({
                content: 'Please Wait...',
                dismissOnPageChange: true,
            });
            this.loading.present();
        }
    };
    AddAlertPage.prototype.checkValidData = function () {
        this.alertString = '';
        if (this.medicinName === undefined || this.medicinName === "") {
            this.alertString = 'Insert Medicin Name';
            return;
        }
        if (this.rStartDate === undefined || this.rStartDate === "") {
            console.log('Not Selected Start Date');
            var dateData = new Date();
            var data = dateData.toString();
            var splitted = data.split(" ", 4);
            this.startDate = splitted[0] + ", " + splitted[1] + " " + splitted[2];
            var m = new Date(data);
            var str = __WEBPACK_IMPORTED_MODULE_6_moment__(m, 'YYYY-MM-DD hh:mm').format();
            var str1 = str.split('T', 2);
            var str2 = str1[1].split(':', 3);
            this.rStartDate = str1[0] + ' ' + str2[0] + ':' + str2[1];
            return;
        }
        if (this.rEndDate === undefined || this.rEndDate === "") {
            this.rEndDate = "";
            return;
        }
        if (this.hoursData.length == 0) {
            this.alertString = 'Insert Alarm Hours';
            return;
        }
        if (this.medicinUnity === undefined || this.medicinUnity === "") {
            this.alertString = 'Insert Medicin Unity';
            return;
        }
        if (this.medicinType === undefined || this.medicinType == "") {
            this.alertString = 'Please Set Medicin Type';
            return;
        }
    };
    AddAlertPage.prototype.saveAlertData = function () {
        var images = [];
        if (this.therImgA) {
            images.push(this.therImgA);
        }
        if (this.therImgB) {
            images.push(this.therImgB);
        }
        if (this.therImgC) {
            images.push(this.therImgC);
        }
        if (this.therImgD) {
            images.push(this.therImgD);
        }
        var tempData = ({
            customDays: this.repeat,
            hours: this.hoursData,
            media: images,
            medicineName: this.medicinName,
            medicineQty: this.medicinUnity,
            medicineTakeMode: this.medicinType,
            removed: false,
            noRepeat: true,
            tsEnd: 0,
            tsEndStr: this.rEndDate,
            tsStart: 0,
            tsStartStr: this.rStartDate,
            weekDays: this.therapService.weekDays
        });
        this.therapService.setTherapy(tempData);
    };
    //-------------_Add Alarm Hours -------------------------------------------------------------------------
    AddAlertPage.prototype.addAlarmHours = function () {
        var _this = this;
        var timeModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__TimePicker_timePicker__["a" /* TimePickerPage */]);
        timeModal.present();
        timeModal.onDidDismiss(function (data) {
            console.log(data);
            if (data) {
                var splitted = data.split(":", 3);
                _this.hoursData.push({
                    hours: splitted[0],
                    minutes: splitted[1]
                });
                console.log(_this.hoursData);
            }
        });
    };
    AddAlertPage.prototype.removeAlarm = function (index) {
        this.hoursData.splice(index, 1);
    };
    //-------------- Alarm Image Capture-----------------------------
    AddAlertPage.prototype.capture = function (event) {
        var _this = this;
        console.log(event.target.className);
        var cameraOptions = {
            quality: 100,
            sourceType: this.camera.PictureSourceType.CAMERA,
            saveToPhotoAlbum: false,
            correctOrientation: true,
            targetWidth: 512,
            targetHeight: 512,
            allowEdit: true,
        };
        this.camera.getPicture(cameraOptions).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            var currentName = imageData.substr(imageData.lastIndexOf('/') + 1);
            var correctPath = imageData.substr(0, imageData.lastIndexOf('/') + 1);
            _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName(), event.target.className);
            // if(event.target.className == "imageA-col small-img"){
            //     this.therImgA = "data:image/jpeg;base64," + imageData;
            // }else if(event.target.className == "imageB-col small-img"){
            //   this.therImgB = "data:image/jpeg;base64," + imageData;
            // }else if(event.target.className == "imageC-col small-img"){
            //   this.therImgC = "data:image/jpeg;base64," + imageData;
            // }else{
            //   this.therImgD = "data:image/jpeg;base64," + imageData;
            // }
        }, function (err) {
            // Handle error
        });
    };
    // Create a new name for the image
    AddAlertPage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        return newFileName;
    };
    AddAlertPage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName, eventName) {
        var _this = this;
        // let alert = this.alertCtrl.create({
        //   message:   namePath + "TTTTT  TTTTT" + currentName+"TTTTT  TTTTT" + newFileName,
        //   buttons: [{
        //       text: "Ok",
        //       role: 'cancel'
        //     }]
        // });
        // alert.present();
        this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function (success) {
            // this.lastImage = newFileName;
            if (eventName === "imageA-col small-img") {
                _this.therImgA = cordova.file.dataDirectory + newFileName;
            }
            else if (eventName === "imageB-col small-img") {
                _this.therImgB = cordova.file.dataDirectory + newFileName;
            }
            else if (eventName === "imageC-col small-img") {
                _this.therImgC = cordova.file.dataDirectory + newFileName;
            }
            else {
                _this.therImgD = cordova.file.dataDirectory + newFileName;
            }
        }, function (error) {
            console.log('Error while storing file.');
            var alert = _this.alertCtrl.create({
                message: 'Error while storing file.',
                buttons: [{
                        text: "Ok",
                        role: 'cancel'
                    }]
            });
            alert.present();
        });
    };
    return AddAlertPage;
}());
AddAlertPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-addalert',template:/*ion-inline-start:"/Volumes/Work/WorkSpace/Mobile/Igor/phr-app/src/pages/AddAlert/addalert.html"*/'<!--\n  Generated template for the AddAlertPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Add Pharmalarm</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-label class="des-label">{{\'MEDICIN_NAME\' | translate}}</ion-label>\n    <ion-row class="input-row">\n        <ion-col class="s-col"></ion-col>\n        <ion-col class="d-col">\n          <ion-input  class="des-input" type="text" placeholder="{{\'MEDICIN_NAME\' | translate}}" [(ngModel)]="medicinName"></ion-input>\n        </ion-col>\n    </ion-row>\n    <ion-row class="medicin-row">\n            <ion-col class="unity-col">\n                <ion-label>{{\'MEDICIN_QTY\' | translate}}</ion-label>\n                <ion-input type="number" placeholder="{{\'MEDICIN_QTY\' | translate}}" [(ngModel)]="medicinUnity"></ion-input>\n            </ion-col>\n            <ion-col class="take-col">\n                <ion-label>{{\'MEDICIN_TYPE\' | translate}}</ion-label>\n                <ion-select [(ngModel)]="medicinType" interface="popover" placeholder="{{\'MEDICIN_TYPE\' | translate}}">\n                    <ion-option *ngFor="let medicinType of therapService.takeModeList" [value]="medicinType" >{{medicinType}}</ion-option>\n                </ion-select>\n            </ion-col>\n    </ion-row>\n    <ion-label class="start-label">{{\'START_DATE\' | translate}}</ion-label>\n    <ion-row class="input-row">\n        <ion-col class="s-col"></ion-col>\n        <ion-col class="d-col">\n          <ion-input class="start-input" (click)="AddStartDate()" displayFormat="MMM DD, YYYY" type="text" placeholder="{{\'START_DATE\' | translate}}" [(ngModel)]="startDate"  readonly="true"></ion-input>\n        </ion-col>\n    </ion-row>\n    \n    <ion-label class="end-label">{{\'END_DATE\' | translate}}</ion-label>\n    <ion-row class="input-row">\n        <ion-col class="s-col"></ion-col>\n        <ion-col class="d-col">\n            <ion-input  class="end-input" (click)="AddEndDate()" type="text" placeholder="{{\'END_DATE\' | translate}}" [(ngModel)]="endDate" readonly="true"></ion-input>\n        </ion-col>\n    </ion-row>\n    \n    <ion-row class="camera-row">\n      <ion-col>\n          <img class="imageA-col small-img" [src]="therImgA" *ngIf="therImgA" (click)="capture($event)"/>\n      </ion-col>\n      <ion-col style="margin-left:2%;">\n          <img class="imageB-col small-img" [src]="therImgB"  *ngIf="therImgB" (click)="capture($event)"/>\n      </ion-col>\n      <ion-col style="margin-left:2%;">\n          <img class="imageC-col small-img" [src]="therImgC"  *ngIf="therImgC" (click)="capture($event)"/>\n      </ion-col>\n      <ion-col style="margin-left:2%;">\n          <img class="imageD-col small-img" [src]="therImgD"  *ngIf="therImgD" (click)="capture($event)"/>  \n      </ion-col>\n    </ion-row>\n    \n    <ion-label class="end-label">{{\'HOURS_OF_DAY\' | translate}}</ion-label>\n    <div class="h-o-d-container">\n            <ion-scroll scrollY="true">\n                    <ion-item *ngFor="let alarm of hoursData; let i = index" class="hour-item">\n                            <ion-label>\n                              {{alarm.hours}}:{{alarm.minutes}}\n                              <button (click)="removeAlarm(i)">X</button>\n                            </ion-label>\n                    </ion-item> \n                    <button ion-button class="addtime-btn" (click)="addAlarmHours()">+ {{\'CLICK_HERE_TO_ADD\' | translate}}</button>\n            </ion-scroll>\n         \n    </div>\n    \n    <ion-label class="weekly-label">{{\'DAYS_OF_WEEK\' | translate}}</ion-label>\n    <tagging-text [myText]="therapService.weekDays"></tagging-text>   \n    <ion-row class="btn-container">\n      <ion-col class="test-col">\n        <button ion-button class="test-btn" (click)="testAlert()" block>{{\'TEST\' | translate}}</button>\n      </ion-col>\n      <ion-col class="save-col">\n          <button ion-button class="save-btn" (click)="saveAlert()" block>{{\'SAVE\' | translate}}</button>\n      </ion-col>\n    </ion-row>\n</ion-content>\n'/*ion-inline-end:"/Volumes/Work/WorkSpace/Mobile/Igor/phr-app/src/pages/AddAlert/addalert.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Events */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_therap_service__["a" /* TherapService */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__["a" /* File */],
        __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_path__["a" /* FilePath */],
        __WEBPACK_IMPORTED_MODULE_10__ionic_native_keyboard__["a" /* Keyboard */]])
], AddAlertPage);

//# sourceMappingURL=addalert.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditAlertPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_therap_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__CalendarModal_calendarModal__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__TimePicker_timePicker__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_path__ = __webpack_require__(123);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var EditAlertPage = (function () {
    function EditAlertPage(navCtrl, navParams, therapService, modalCtrl, camera, alertCtrl, loadingCtrl, events, file, filePath) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.therapService = therapService;
        this.modalCtrl = modalCtrl;
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.file = file;
        this.filePath = filePath;
        this.theraps = [];
        this.hoursData = [];
        this.timeDatas = [];
        this.weeklyData = [];
        this.theraps = this.navParams.get('therap');
        console.log('Edit theraps', this.theraps);
        this.hoursData = [];
        this.timeDatas = [];
        this.date = __WEBPACK_IMPORTED_MODULE_3_moment__();
        for (var i = 0; i < this.theraps.hours.length; i++) {
            var newDay = __WEBPACK_IMPORTED_MODULE_3_moment__([this.date.year(), this.date.month(), this.date.date(), this.theraps.hours[i].hours, this.theraps.hours[i].minutes, 0, 0]);
            this.hoursData.push({
                time: newDay
            });
            this.timeDatas.push({
                hours: this.theraps.hours[i].hours,
                minutes: this.theraps.hours[i].minutes
            });
        }
        var sDStr = __WEBPACK_IMPORTED_MODULE_3_moment__(this.theraps.tsStart);
        this.rStartDate = this.theraps.tsStartStr;
        var splitted = (sDStr.toString()).split(" ", 4);
        this.startDate = splitted[0] + ", " + splitted[1] + " " + splitted[2];
        if (this.theraps.tsEnd) {
            var eDStr = __WEBPACK_IMPORTED_MODULE_3_moment__(this.theraps.tsEnd);
            this.rEndDate = this.theraps.tsEndStr;
            var splittedE = (eDStr.toString()).split(" ", 4);
            this.endDate = splittedE[0] + ", " + splittedE[1] + " " + splittedE[2];
        }
        else {
            this.endDate = "";
        }
        this.weeklyData = this.theraps.weekDays;
        console.log('The Week Datas', this.weeklyData);
        this.err_message = '';
        this.events.subscribe('user:updateTherapy_error', function (data) {
            _this.err_message = data;
        });
        this.suc_message = '';
        this.events.subscribe('user:updateTherapy_success', function (data) {
            _this.suc_message = data;
        });
        console.log('MEDIA', this.theraps.media);
        var _loop_1 = function (j) {
            console.log('media length', this_1.theraps.media[j].length);
            if (this_1.theraps.media[j].length === undefined) {
                this_1.initMedia();
            }
            else {
                imageName = this_1.theraps.media[j].substr(this_1.theraps.media[j].lastIndexOf('/') + 1);
                imagePath = this_1.theraps.media[j].substr(0, this_1.theraps.media[j].lastIndexOf('/') + 1);
                console.log('!12312312', imageName, imagePath);
                if (imageName === "camera-icon.png" || imageName === "camera-cross-icon.png") {
                }
                else {
                    this_1.file.checkFile(imagePath, imageName).then(function (success) {
                        console.log('file exist!');
                    }, function (error) {
                        console.log('file doesn t exist!');
                        _this.theraps.media[j] = "assets/imgs/camera-cross-icon.png";
                    });
                }
            }
        };
        var this_1 = this, imageName, imagePath;
        for (var j = 0; j < this.theraps.media.length; j++) {
            _loop_1(j);
        }
        console.log('MEDIA AFTER', this.theraps.media);
    }
    EditAlertPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditAlertPage');
    };
    EditAlertPage.prototype.initMedia = function () {
        this.theraps.media = [];
        for (var i = 0; i < 4; i++) {
            var str = "assets/imgs/camera-icon.png";
            this.theraps.media.push(str);
        }
    };
    EditAlertPage.prototype.editStartDate = function () {
        var _this = this;
        this.startDate = "";
        this.rStartDate = '';
        var myCalendar = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__CalendarModal_calendarModal__["a" /* CalendarModalPage */]);
        myCalendar.present();
        myCalendar.onDidDismiss(function (data) {
            console.log(data);
            if (data) {
                var splitted = data.split(" ", 4);
                _this.startDate = splitted[0] + ", " + splitted[1] + " " + splitted[2];
                var m = new Date(data);
                var str = __WEBPACK_IMPORTED_MODULE_3_moment__(m, 'YYYY-MM-DD hh:mm').format();
                var str1 = str.split('T', 2);
                var str2 = str1[1].split(':', 3);
                _this.rStartDate = str1[0] + ' ' + str2[0] + ':' + str2[1];
                console.log('StartDate', _this.rStartDate);
            }
        });
    };
    EditAlertPage.prototype.editEndDate = function () {
        var _this = this;
        console.log("EditEndDate Button Clicked!");
        this.endDate = "";
        this.rEndDate = '';
        var myCalendar = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__CalendarModal_calendarModal__["a" /* CalendarModalPage */]);
        myCalendar.present();
        myCalendar.onDidDismiss(function (data) {
            console.log(data);
            if (data) {
                var splitted = data.split(" ", 4);
                _this.endDate = splitted[0] + ", " + splitted[1] + " " + splitted[2];
                var m = new Date(data);
                var str = __WEBPACK_IMPORTED_MODULE_3_moment__(m, 'YYYY-MM-DD hh:mm').format();
                var str1 = str.split('T', 2);
                var str2 = str1[1].split(':', 3);
                _this.rEndDate = str1[0] + ' ' + str2[0] + ':' + str2[1];
            }
        });
    };
    EditAlertPage.prototype.checkValidData = function () {
        this.alertString = '';
        if (this.theraps.medicineName === undefined || this.theraps.medicineNam === "") {
            this.alertString = 'Insert Medicin Name';
            return;
        }
        if (this.rStartDate === undefined || this.rStartDate === "") {
            console.log('Not Selected Start Date');
            var dateData = new Date();
            var data = dateData.toString();
            var splitted = data.split(" ", 4);
            this.startDate = splitted[0] + ", " + splitted[1] + " " + splitted[2];
            var m = new Date(data);
            var str = __WEBPACK_IMPORTED_MODULE_3_moment__(m, 'YYYY-MM-DD hh:mm').format();
            var str1 = str.split('T', 2);
            var str2 = str1[1].split(':', 3);
            this.rStartDate = str1[0] + ' ' + str2[0] + ':' + str2[1];
            return;
        }
        if (this.rEndDate === undefined || this.rEndDate === "") {
            this.rEndDate = "";
            return;
        }
        if (this.hoursData.length == 0) {
            this.alertString = 'Insert Alarm Hours';
            return;
        }
        if (this.theraps.medicineQty === undefined || this.theraps.medicineQty === "") {
            this.alertString = 'Insert Medicin Unity';
            return;
        }
        if (this.theraps.medicineTakeMode === undefined || this.theraps.medicineTakeMode == "") {
            this.alertString = 'Please Set Medicin Type';
            return;
        }
    };
    EditAlertPage.prototype.capture = function (event) {
        var _this = this;
        console.log(event.target.className);
        var cameraOptions = {
            quality: 100,
            sourceType: this.camera.PictureSourceType.CAMERA,
            saveToPhotoAlbum: false,
            correctOrientation: true,
            targetWidth: 512,
            targetHeight: 512,
            allowEdit: true,
        };
        this.camera.getPicture(cameraOptions).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            var currentName = imageData.substr(imageData.lastIndexOf('/') + 1);
            var correctPath = imageData.substr(0, imageData.lastIndexOf('/') + 1);
            _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName(), event.target.className);
        }, function (err) {
            // Handle error
        });
    };
    EditAlertPage.prototype.addAlarmHours = function () {
        var _this = this;
        var timeModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__TimePicker_timePicker__["a" /* TimePickerPage */]);
        timeModal.present();
        timeModal.onDidDismiss(function (data) {
            console.log(data);
            if (data) {
                var splitted = data.split(":", 3);
                _this.timeDatas.push({
                    hours: splitted[0],
                    minutes: splitted[1]
                });
                var newDay = __WEBPACK_IMPORTED_MODULE_3_moment__([_this.date.year(), _this.date.month(), _this.date.date(), splitted[0], splitted[1], 0, 0]);
                _this.hoursData.push({
                    time: newDay
                });
                console.log(_this.hoursData);
            }
        });
    };
    EditAlertPage.prototype.removeAlarm = function (index) {
        this.hoursData.splice(index, 1);
        this.timeDatas.splice(index, 1);
    };
    EditAlertPage.prototype.deleteAlert = function () {
        // this.therapService.deleteTherapy();
        console.log('This theraps deleting');
    };
    EditAlertPage.prototype.saveAlert = function () {
        var _this = this;
        console.log('This Therapys updating');
        this.checkValidData();
        if (this.alertString != '') {
            var alert_1 = this.alertCtrl.create({
                message: this.alertString,
                buttons: [{
                        text: "Ok",
                        role: 'cancel'
                    }]
            });
            alert_1.present();
        }
        else {
            this.updateAlertData();
            setTimeout(function () {
                if (_this.err_message) {
                    _this.loading.dismiss().then(function () {
                        var alert = _this.alertCtrl.create({
                            message: _this.err_message,
                            buttons: [{
                                    text: "Ok",
                                    role: 'cancel'
                                }]
                        });
                        alert.present();
                    });
                }
                if (_this.suc_message) {
                    _this.loading.dismiss().then(function () {
                        _this.navCtrl.pop();
                    });
                }
            }, 5000);
            this.loading = this.loadingCtrl.create({
                content: 'Updating Therapy...',
                dismissOnPageChange: true,
            });
            this.loading.present();
        }
    };
    EditAlertPage.prototype.updateAlertData = function () {
        var images = [];
        if (this.theraps.media[0]) {
            images.push(this.theraps.media[0]);
        }
        if (this.theraps.media[1]) {
            images.push(this.theraps.media[1]);
        }
        if (this.theraps.media[2]) {
            images.push(this.theraps.media[2]);
        }
        if (this.theraps.media[3]) {
            images.push(this.theraps.media[3]);
        }
        var mEnd = __WEBPACK_IMPORTED_MODULE_3_moment__(this.rEndDate);
        var mEndStr = mEnd.valueOf();
        var mStart = __WEBPACK_IMPORTED_MODULE_3_moment__(this.rStartDate);
        var mStartStr = mStart.valueOf();
        console.log('Milliseconds Data', mStartStr, mEndStr);
        var tempData = ({
            id: this.theraps.id,
            customDays: this.theraps.customDays,
            hours: this.timeDatas,
            media: images,
            medicineName: this.theraps.medicineName,
            medicineQty: this.theraps.medicineQty,
            medicineTakeMode: this.theraps.medicineTakeMode,
            removed: false,
            noRepeat: true,
            tsEnd: mEndStr,
            tsEndStr: this.rEndDate,
            tsStart: mStartStr,
            tsStartStr: this.rStartDate,
            weekDays: this.therapService.weekDays
        });
        console.log('Updated Therapys Data', tempData);
        this.therapService.updateTheraps(tempData);
    };
    // Create a new name for the image
    EditAlertPage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        return newFileName;
    };
    EditAlertPage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName, eventName) {
        var _this = this;
        // let alert = this.alertCtrl.create({
        //   message:   namePath + "TTTTT  TTTTT" + currentName+"TTTTT  TTTTT" + newFileName,
        //   buttons: [{
        //       text: "Ok",
        //       role: 'cancel'
        //     }]
        // });
        // alert.present();
        this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function (success) {
            // this.lastImage = newFileName;
            if (eventName === "imageA-col small-img") {
                _this.theraps.media[0] = cordova.file.dataDirectory + newFileName;
            }
            else if (eventName === "imageB-col small-img") {
                _this.theraps.media[1] = cordova.file.dataDirectory + newFileName;
            }
            else if (eventName === "imageC-col small-img") {
                _this.theraps.media[2] = cordova.file.dataDirectory + newFileName;
            }
            else {
                _this.theraps.media[3] = cordova.file.dataDirectory + newFileName;
            }
        }, function (error) {
            console.log('Error while storing file.');
            var alert = _this.alertCtrl.create({
                message: 'Error while storing file.',
                buttons: [{
                        text: "Ok",
                        role: 'cancel'
                    }]
            });
            alert.present();
        });
    };
    return EditAlertPage;
}());
EditAlertPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-editAlert',template:/*ion-inline-start:"/Volumes/Work/WorkSpace/Mobile/Igor/phr-app/src/pages/EditAlert/editAlert.html"*/'<!--\n  Generated template for the EditAlertPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>EditAlert</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-label class="des-label">{{\'MEDICIN_NAME\' | translate}}</ion-label>\n    <ion-row class="input-row">\n        <ion-col class="s-col"></ion-col>\n        <ion-col class="d-col">\n          <ion-input  class="des-input" type="text" placeholder="{{\'MEDICIN_NAME\' | translate}}" [(ngModel)]="theraps.medicineName"></ion-input>\n        </ion-col>\n    </ion-row>\n    <ion-row class="medicin-row">\n        <ion-col class="unity-col">\n            <ion-label>{{\'MEDICIN_QTY\' | translate}}</ion-label>\n            <ion-input type="number" placeholder="{{\'MEDICIN_QTY\' | translate}}" [(ngModel)]="theraps.medicineQty"></ion-input>\n        </ion-col>\n        <ion-col class="take-col">\n            <ion-label>{{\'MEDICIN_TYPE\' | translate}}</ion-label>\n                <ion-select [(ngModel)]="theraps.medicineTakeMode" interface="popover" placeholder="{{\'MEDICIN_TYPE\' | translate}}">\n                    <ion-option *ngFor="let medicinType of therapService.takeModeList" [value]="medicinType" >{{medicinType}}</ion-option>\n                </ion-select>\n             \n        </ion-col>\n    </ion-row>\n\n    <ion-label class="start-label">{{\'START_DATE\' | translate}}</ion-label>\n    <ion-row class="input-row">\n        <ion-col class="s-col"></ion-col>\n        <ion-col class="d-col">\n          <ion-input class="start-input" (click)="editStartDate()" displayFormat="MMM DD, YYYY" type="text" placeholder="{{\'START_DATE\' | translate}}" [(ngModel)]="startDate"  readonly="true"></ion-input>\n        </ion-col>\n    </ion-row>\n    \n    <ion-label class="end-label">{{\'END_DATE\' | translate}}</ion-label>\n    <ion-row class="input-row">\n        <ion-col class="s-col"></ion-col>\n        <ion-col class="d-col">\n            <ion-input  class="end-input" (click)="editEndDate()" type="text" placeholder="{{\'END_DATE\' | translate}}" [(ngModel)]="endDate" readonly="true"></ion-input>\n        </ion-col>\n    </ion-row>\n    \n    <ion-row class="camera-row">\n      <ion-col>\n          <img class="imageA-col small-img" [src]="theraps.media[0]" *ngIf="theraps.media[0]" (click)="capture($event)"/>\n      </ion-col>\n      <ion-col style="margin-left:2%;">\n          <img class="imageB-col small-img" [src]="theraps.media[1]"  *ngIf="theraps.media[1]" (click)="capture($event)"/>\n      </ion-col>\n      <ion-col style="margin-left:2%;">\n          <img class="imageC-col small-img" [src]="theraps.media[2]"  *ngIf="theraps.media[2]" (click)="capture($event)"/>\n      </ion-col>\n      <ion-col style="margin-left:2%;">\n          <img class="imageD-col small-img" [src]="theraps.media[3]"  *ngIf="theraps.media[3]" (click)="capture($event)"/>  \n      </ion-col>\n    </ion-row>\n    \n    <ion-label class="end-label">{{\'HOURS_OF_DAY\' | translate}}</ion-label>\n    <div class="h-o-d-container">\n            <ion-scroll scrollY="true">\n                    <ion-item *ngFor="let alarm of hoursData; let i = index" class="hour-item">\n                            <ion-label>\n                                {{alarm.time.format(\'HH:mm\')}}\n                              <button (click)="removeAlarm(i)">X</button>\n                            </ion-label>\n                    </ion-item> \n                    <button ion-button class="addtime-btn" (click)="addAlarmHours()">+ {{\'CLICK_HERE_TO_ADD\' | translate}}</button>\n            </ion-scroll>\n         \n    </div>\n    \n    <ion-label class="weekly-label">{{\'DAYS_OF_WEEK\' | translate}}</ion-label>\n    <tagging-text [myText]="this.weeklyData"></tagging-text>\n   \n    <ion-row class="btn-container">\n      <ion-col class="test-col">\n        <button ion-button class="test-btn" (click)="deleteAlert()" block>{{\'DELETE\' | translate}}</button>\n      </ion-col>\n      <ion-col class="save-col">\n          <button ion-button class="save-btn" (click)="saveAlert()" block>{{\'SAVE\' | translate}}</button>\n      </ion-col>\n    </ion-row>\n</ion-content>\n'/*ion-inline-end:"/Volumes/Work/WorkSpace/Mobile/Igor/phr-app/src/pages/EditAlert/editAlert.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__providers_therap_service__["a" /* TherapService */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Events */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__["a" /* File */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_path__["a" /* FilePath */]])
], EditAlertPage);

//# sourceMappingURL=editAlert.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaggingTextComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return weeklyPopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_therap_service__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the TaggingText component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
var TaggingTextComponent = (function () {
    function TaggingTextComponent(popoverCtrl, therapService) {
        this.popoverCtrl = popoverCtrl;
        this.therapService = therapService;
        this.textToUse = [];
        this.values = '';
        this.optionList = [
            { name: 'All Days', state: true },
            { name: 'Monday', state: false },
            { name: 'Tuesday', state: false },
            { name: 'Wednesday', state: false },
            { name: 'Thuesday', state: false },
            { name: 'Friday', state: false },
            { name: 'Saturday', state: false },
            { name: 'Sunday', state: false }
        ];
        this.weekArray = [];
        console.log('Taggin Text HomePage');
    }
    TaggingTextComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        console.log('adsfasdf', this.textToUse);
        if (this.textToUse === []) {
            console.log('All Days');
            setTimeout(function () {
                _this.initData(0);
            }, 1000);
        }
        else if (this.textToUse.mon && this.textToUse.tue && this.textToUse.wed && this.textToUse.thu && this.textToUse.fri && this.textToUse.sat && this.textToUse.sun) {
            console.log('All Days Not');
            setTimeout(function () {
                _this.initData(0);
            }, 1000);
        }
    };
    TaggingTextComponent.prototype.initData = function (data) {
        var _this = this;
        if (this.checkWeekData(this.optionList[data].name) == false) {
            console.log('TagginText Init Data');
            var el = document.querySelector("#textarea #input-txt");
            var refenceNode = el.parentNode;
            var button = document.createElement("daysbutton");
            button.className = "mybutton";
            //inserir no button o texto digitado antes da vírgula(-1)
            button.innerText = this.optionList[data].name;
            this.optionList[data].state = true;
            this.weekArray.push({
                name: this.optionList[data].name,
                set: true
            });
            this.therapService.activeWeekDays(this.optionList[data].name);
            refenceNode.insertBefore(button, el);
            this.delegate(document, "click", "daysbutton", function (event) {
                var weekValue = event.srcElement.innerText;
                _this.removeWeekData(weekValue);
                _this.therapService.deActiveWeekDays(weekValue);
                event.target.style.display = 'none';
            });
        }
    };
    TaggingTextComponent.prototype.removeButton = function (event) {
    };
    TaggingTextComponent.prototype.showOptions = function ($event) {
        var _this = this;
        console.log('Show Option');
        var popover = this.popoverCtrl.create(weeklyPopoverPage, { optList: this.optionList });
        popover.present({
            ev: event
        });
        popover.onDidDismiss(function (data) {
            _this.initData(data);
        });
    };
    TaggingTextComponent.prototype.checkWeekData = function (data) {
        var value = false;
        for (var i = 0; i < this.weekArray.length; i++) {
            if (this.weekArray[i].name == data) {
                value = true;
            }
        }
        return value;
    };
    TaggingTextComponent.prototype.removeWeekData = function (data) {
        console.log('before data', this.weekArray);
        if (this.checkWeekData(data)) {
            for (var i = 0; i < this.weekArray.length; i++) {
                if (this.weekArray[i].name == data) {
                    this.weekArray.splice(i, 1);
                    console.log('removed Item');
                }
            }
        }
        console.log('after data', this.weekArray);
    };
    TaggingTextComponent.prototype.delegate = function (el, evt, sel, handler) {
        var _this = this;
        el.addEventListener(evt, function (event) {
            var t = event.target.localName;
            while (t && t !== _this) {
                if (t == sel) {
                    handler.call(t, event);
                }
                t = t.parentNode;
            }
        });
    };
    return TaggingTextComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('myText'),
    __metadata("design:type", Object)
], TaggingTextComponent.prototype, "textToUse", void 0);
TaggingTextComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'tagging-text',template:/*ion-inline-start:"/Volumes/Work/WorkSpace/Mobile/Igor/phr-app/src/components/tagging-text/tagging-text.html"*/'<!--\n  Generated template for the TaggingText component.\n\n  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html\n  for more info on Angular 2 Components.\n-->\n\n<div id="textarea" >\n  <div id="input-txt" (click)="showOptions($event)"></div>\n</div>\n\n'/*ion-inline-end:"/Volumes/Work/WorkSpace/Mobile/Igor/phr-app/src/components/tagging-text/tagging-text.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_2__providers_therap_service__["a" /* TherapService */]])
], TaggingTextComponent);

var weeklyPopoverPage = (function () {
    function weeklyPopoverPage(params, viewCtrl) {
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.days = "all";
        this.optionList = this.params.get('optList');
        this.m_selectItem = this.params.get('item');
        // this.m_selectItem = 'All Days';
        // console.log('adfasdfasdfasdfasd', this.m_selectItem);
    }
    weeklyPopoverPage.prototype.selectItem = function (index) {
        for (var i = 0; i < this.optionList.length; i++) {
            this.optionList[i].state = false;
        }
        this.m_selectItem = this.optionList[index];
        this.viewCtrl.dismiss(index);
    };
    return weeklyPopoverPage;
}());
weeklyPopoverPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'tagging-text-pop',
        template: "<ion-list >\n              <ion-item class=\"feedback-item\"  *ngFor=\"let item of optionList; let i = index\">\n                <ion-label (click)=\"selectItem(item)\">{{item.name}}</ion-label>\n                <ion-radio value=\"item.name\" [checked]=\"item.state\" (ionSelect)=\"selectItem(i)\"></ion-radio>\n              </ion-item>         \n            </ion-list>"
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
], weeklyPopoverPage);

//# sourceMappingURL=tagging-text.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(372);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_facebook__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_twitter_connect__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ion2_calendar__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_camera__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_file__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_transfer__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_file_path__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_Home_home__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_Login_login__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_Signup_signup__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_AddAlert_addalert__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_CalendarModal_calendarModal__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_ClockModal_clockModal__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_EditAlert_editAlert__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_Setting_setting__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_AlarmModal_alarmModal__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_TimePicker_timePicker__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ngx_translate_core__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ngx_translate_http_loader__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_language_service__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_therap_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_local_notifications__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_tagging_text_tagging_text__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_background_mode__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_native_native_audio__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_vibration__ = __webpack_require__(304);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//import { StatusBar } from '@ionic-native/status-bar';




//------------------------------Calendar Module Importing--------------------------------





//----------------------------Customize Pages--------------------------------------------










//----------------------------Translator Module Import------------------------------------










//----------------------------Translator Module Export--------------------------------------
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_27__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_16__pages_Home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_Login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_Signup_signup__["b" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_Signup_signup__["a" /* PopoverPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_AddAlert_addalert__["a" /* AddAlertPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_EditAlert_editAlert__["a" /* EditAlertPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_Setting_setting__["a" /* SettingPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_CalendarModal_calendarModal__["a" /* CalendarModalPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_ClockModal_clockModal__["a" /* ClockModalPage */],
            __WEBPACK_IMPORTED_MODULE_31__components_tagging_text_tagging_text__["a" /* TaggingTextComponent */],
            __WEBPACK_IMPORTED_MODULE_31__components_tagging_text_tagging_text__["b" /* weeklyPopoverPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_AlarmModal_alarmModal__["a" /* AlarmModalPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_TimePicker_timePicker__["a" /* TimePickerPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_11_ion2_calendar__["a" /* CalendarModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/Login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_26__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_26__ngx_translate_core__["a" /* TranslateLoader */],
                    useFactory: (createTranslateLoader),
                    deps: [__WEBPACK_IMPORTED_MODULE_8__angular_common_http__["a" /* HttpClient */]]
                }
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_16__pages_Home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_Login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_Signup_signup__["b" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_Signup_signup__["a" /* PopoverPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_AddAlert_addalert__["a" /* AddAlertPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_EditAlert_editAlert__["a" /* EditAlertPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_Setting_setting__["a" /* SettingPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_CalendarModal_calendarModal__["a" /* CalendarModalPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_ClockModal_clockModal__["a" /* ClockModalPage */],
            __WEBPACK_IMPORTED_MODULE_31__components_tagging_text_tagging_text__["a" /* TaggingTextComponent */],
            __WEBPACK_IMPORTED_MODULE_31__components_tagging_text_tagging_text__["b" /* weeklyPopoverPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_AlarmModal_alarmModal__["a" /* AlarmModalPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_TimePicker_timePicker__["a" /* TimePickerPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_32__ionic_native_background_mode__["a" /* BackgroundMode */],
            __WEBPACK_IMPORTED_MODULE_33__ionic_native_native_audio__["a" /* NativeAudio */],
            //StatusBar,
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_twitter_connect__["a" /* TwitterConnect */],
            __WEBPACK_IMPORTED_MODULE_28__providers_language_service__["a" /* LanguageService */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_34__ionic_native_vibration__["a" /* Vibration */],
            __WEBPACK_IMPORTED_MODULE_29__providers_therap_service__["a" /* TherapService */],
            __WEBPACK_IMPORTED_MODULE_30__ionic_native_local_notifications__["a" /* LocalNotifications */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_transfer__["a" /* Transfer */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_file_path__["a" /* FilePath */],
            { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodayTherapModel; });
var TodayTherapModel = (function () {
    function TodayTherapModel() {
    }
    return TodayTherapModel;
}());

//# sourceMappingURL=todayTherap.model.js.map

/***/ }),

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 186,
	"./af.js": 186,
	"./ar": 187,
	"./ar-dz": 188,
	"./ar-dz.js": 188,
	"./ar-kw": 189,
	"./ar-kw.js": 189,
	"./ar-ly": 190,
	"./ar-ly.js": 190,
	"./ar-ma": 191,
	"./ar-ma.js": 191,
	"./ar-sa": 192,
	"./ar-sa.js": 192,
	"./ar-tn": 193,
	"./ar-tn.js": 193,
	"./ar.js": 187,
	"./az": 194,
	"./az.js": 194,
	"./be": 195,
	"./be.js": 195,
	"./bg": 196,
	"./bg.js": 196,
	"./bm": 197,
	"./bm.js": 197,
	"./bn": 198,
	"./bn.js": 198,
	"./bo": 199,
	"./bo.js": 199,
	"./br": 200,
	"./br.js": 200,
	"./bs": 201,
	"./bs.js": 201,
	"./ca": 202,
	"./ca.js": 202,
	"./cs": 203,
	"./cs.js": 203,
	"./cv": 204,
	"./cv.js": 204,
	"./cy": 205,
	"./cy.js": 205,
	"./da": 206,
	"./da.js": 206,
	"./de": 207,
	"./de-at": 208,
	"./de-at.js": 208,
	"./de-ch": 209,
	"./de-ch.js": 209,
	"./de.js": 207,
	"./dv": 210,
	"./dv.js": 210,
	"./el": 211,
	"./el.js": 211,
	"./en-au": 212,
	"./en-au.js": 212,
	"./en-ca": 213,
	"./en-ca.js": 213,
	"./en-gb": 214,
	"./en-gb.js": 214,
	"./en-ie": 215,
	"./en-ie.js": 215,
	"./en-nz": 216,
	"./en-nz.js": 216,
	"./eo": 217,
	"./eo.js": 217,
	"./es": 218,
	"./es-do": 219,
	"./es-do.js": 219,
	"./es-us": 220,
	"./es-us.js": 220,
	"./es.js": 218,
	"./et": 221,
	"./et.js": 221,
	"./eu": 222,
	"./eu.js": 222,
	"./fa": 223,
	"./fa.js": 223,
	"./fi": 224,
	"./fi.js": 224,
	"./fo": 225,
	"./fo.js": 225,
	"./fr": 226,
	"./fr-ca": 227,
	"./fr-ca.js": 227,
	"./fr-ch": 228,
	"./fr-ch.js": 228,
	"./fr.js": 226,
	"./fy": 229,
	"./fy.js": 229,
	"./gd": 230,
	"./gd.js": 230,
	"./gl": 231,
	"./gl.js": 231,
	"./gom-latn": 232,
	"./gom-latn.js": 232,
	"./gu": 233,
	"./gu.js": 233,
	"./he": 234,
	"./he.js": 234,
	"./hi": 235,
	"./hi.js": 235,
	"./hr": 236,
	"./hr.js": 236,
	"./hu": 237,
	"./hu.js": 237,
	"./hy-am": 238,
	"./hy-am.js": 238,
	"./id": 239,
	"./id.js": 239,
	"./is": 240,
	"./is.js": 240,
	"./it": 241,
	"./it.js": 241,
	"./ja": 242,
	"./ja.js": 242,
	"./jv": 243,
	"./jv.js": 243,
	"./ka": 244,
	"./ka.js": 244,
	"./kk": 245,
	"./kk.js": 245,
	"./km": 246,
	"./km.js": 246,
	"./kn": 247,
	"./kn.js": 247,
	"./ko": 248,
	"./ko.js": 248,
	"./ky": 249,
	"./ky.js": 249,
	"./lb": 250,
	"./lb.js": 250,
	"./lo": 251,
	"./lo.js": 251,
	"./lt": 252,
	"./lt.js": 252,
	"./lv": 253,
	"./lv.js": 253,
	"./me": 254,
	"./me.js": 254,
	"./mi": 255,
	"./mi.js": 255,
	"./mk": 256,
	"./mk.js": 256,
	"./ml": 257,
	"./ml.js": 257,
	"./mr": 258,
	"./mr.js": 258,
	"./ms": 259,
	"./ms-my": 260,
	"./ms-my.js": 260,
	"./ms.js": 259,
	"./my": 261,
	"./my.js": 261,
	"./nb": 262,
	"./nb.js": 262,
	"./ne": 263,
	"./ne.js": 263,
	"./nl": 264,
	"./nl-be": 265,
	"./nl-be.js": 265,
	"./nl.js": 264,
	"./nn": 266,
	"./nn.js": 266,
	"./pa-in": 267,
	"./pa-in.js": 267,
	"./pl": 268,
	"./pl.js": 268,
	"./pt": 269,
	"./pt-br": 270,
	"./pt-br.js": 270,
	"./pt.js": 269,
	"./ro": 271,
	"./ro.js": 271,
	"./ru": 272,
	"./ru.js": 272,
	"./sd": 273,
	"./sd.js": 273,
	"./se": 274,
	"./se.js": 274,
	"./si": 275,
	"./si.js": 275,
	"./sk": 276,
	"./sk.js": 276,
	"./sl": 277,
	"./sl.js": 277,
	"./sq": 278,
	"./sq.js": 278,
	"./sr": 279,
	"./sr-cyrl": 280,
	"./sr-cyrl.js": 280,
	"./sr.js": 279,
	"./ss": 281,
	"./ss.js": 281,
	"./sv": 282,
	"./sv.js": 282,
	"./sw": 283,
	"./sw.js": 283,
	"./ta": 284,
	"./ta.js": 284,
	"./te": 285,
	"./te.js": 285,
	"./tet": 286,
	"./tet.js": 286,
	"./th": 287,
	"./th.js": 287,
	"./tl-ph": 288,
	"./tl-ph.js": 288,
	"./tlh": 289,
	"./tlh.js": 289,
	"./tr": 290,
	"./tr.js": 290,
	"./tzl": 291,
	"./tzl.js": 291,
	"./tzm": 292,
	"./tzm-latn": 293,
	"./tzm-latn.js": 293,
	"./tzm.js": 292,
	"./uk": 294,
	"./uk.js": 294,
	"./ur": 295,
	"./ur.js": 295,
	"./uz": 296,
	"./uz-latn": 297,
	"./uz-latn.js": 297,
	"./uz.js": 296,
	"./vi": 298,
	"./vi.js": 298,
	"./x-pseudo": 299,
	"./x-pseudo.js": 299,
	"./yo": 300,
	"./yo.js": 300,
	"./zh-cn": 301,
	"./zh-cn.js": 301,
	"./zh-hk": 302,
	"./zh-hk.js": 302,
	"./zh-tw": 303,
	"./zh-tw.js": 303
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 420;

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailValidator; });
var EmailValidator = (function () {
    function EmailValidator() {
    }
    EmailValidator.isValid = function (control) {
        var re = /^\w+@[a-zA-Z_.]+?\.[a-zA-Z]{2,3}$/.test(control.value);
        if (re) {
            return null;
        }
        return {
            "invalidEmail": true
        };
    };
    return EmailValidator;
}());

//# sourceMappingURL=email.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_Login_login__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_Home_home__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_therap_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_keyboard__ = __webpack_require__(348);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { StatusBar } from '@ionic-native/status-bar';








var MyApp = (function () {
    function MyApp(events, platform, 
        //public statusBar: StatusBar,
        splashScreen, nativeStorage, therapService, translateService, storage, keyboard) {
        var _this = this;
        this.events = events;
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.nativeStorage = nativeStorage;
        this.therapService = therapService;
        this.translateService = translateService;
        this.storage = storage;
        this.keyboard = keyboard;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_Login_login__["a" /* LoginPage */];
        //-----------Menu Page Array------
        this.pages = [
            { title: 'THERAPY', component: __WEBPACK_IMPORTED_MODULE_6__pages_Home_home__["a" /* HomePage */], icon: 'timer_icon' },
            { title: 'NEW_THERAPY', component: __WEBPACK_IMPORTED_MODULE_6__pages_Home_home__["a" /* HomePage */], icon: 'new_icon' },
            { title: 'PROFILE', component: __WEBPACK_IMPORTED_MODULE_6__pages_Home_home__["a" /* HomePage */], icon: 'profile_icon' },
            { title: 'OPTIONS', component: __WEBPACK_IMPORTED_MODULE_6__pages_Home_home__["a" /* HomePage */], icon: 'option_icon' },
            { title: 'OTHER_VOICE', component: __WEBPACK_IMPORTED_MODULE_6__pages_Home_home__["a" /* HomePage */], icon: 'other_voice_icon' },
            { title: 'SUPPORT', component: __WEBPACK_IMPORTED_MODULE_6__pages_Home_home__["a" /* HomePage */], icon: 'phone_icon' },
            { title: 'LOGOUT', component: __WEBPACK_IMPORTED_MODULE_5__pages_Login_login__["a" /* LoginPage */], icon: 'logout_icon' }
        ];
        this.platform.ready().then(function () {
            _this.getUserInfo();
            // Splach Screen Hidden
            setTimeout(function () {
                _this.splashScreen.hide();
            }, 100);
            _this.keyboard.disableScroll(false);
            // Translate Services
            _this.translateService.setDefaultLang('en');
            _this.translateService.use('en');
        });
        this.listenToLoginEvents();
    }
    MyApp.prototype.listenToLoginEvents = function () {
        var _this = this;
        this.events.subscribe('user:login', function (data) {
            console.log('userLogin');
            _this.userName = data.username;
            _this.translateService.use(data.lang);
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_Home_home__["a" /* HomePage */]);
        });
        this.events.subscribe('user:signup', function (data) {
            console.log('userSignup');
            _this.userName = data;
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_Home_home__["a" /* HomePage */]);
        });
    };
    // if admin token is exist, getting userinformation..
    MyApp.prototype.getUserInfo = function () {
        var _this = this;
        this.therapService.getUser().then(function (value) {
            console.log('userData', value);
            if (value == null) {
                console.log('User Information does not exist!');
                _this.therapService.setAdminToken();
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_Login_login__["a" /* LoginPage */];
            }
            else {
                _this.userName = value.username;
                _this.translateService.use(value.lang);
                _this.therapService.login(value);
            }
        });
    };
    // Getting image name for side menu icoe. 
    MyApp.prototype.getUrl = function (name) {
        return 'assets/sidemenu/' + name + '.png';
    };
    MyApp.prototype.gotoPage = function () {
    };
    MyApp.prototype.openPage = function (page) {
        ///\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/    
        if (page.index) {
            if (page.title === 'LOGOUT') {
                this.therapService.logout();
                console.log('Logout');
                this.nav.setRoot(page.component, { tabIndex: page.index });
            }
        }
        else {
            this.nav.setRoot(page.component).catch(function () {
                console.log("Didn't set nav root");
            });
        }
    };
    MyApp.prototype.twLogin = function () {
    };
    MyApp.prototype.googleLogin = function () {
    };
    MyApp.prototype.fbLogin = function () {
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-app',template:/*ion-inline-start:"/Volumes/Work/WorkSpace/Mobile/Igor/phr-app/src/app/app.html"*/'<ion-menu [content]="content" class="sidemenu">\n  <ion-header>\n    <ion-toolbar>\n       <div class ="close_cont">\n          <button ion-button menuToggle class="close-btn" >\n              <img src="assets/sidemenu/close_icon.png" />\n          </button>\n       </div>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class="menu_list">\n    <ion-item menuClose> \n      <ion-label style="margin-left:18%;">{{userName}}</ion-label>\n    </ion-item>\n    <ion-list>\n        <ion-item menuClose class="menu-item" *ngFor="let p of pages" (click)="openPage(p)">\n            <img class="menu-icon" [src]="getUrl(p.icon)" item-start />\n            <h2 class="menu-label">{{p.title | translate}}</h2>\n        </ion-item>\n    </ion-list>\n  </ion-content>\n  \n  <ion-footer no-border>\n      <ion-toolbar>\n        <ion-row class="footer-item">\n          <ion-col class="start">\n              <img src="assets/sidemenu/twitter_icon.png" (click)="twLogin()" />\n          </ion-col>\n          <ion-col class="middle">\n              <img src="assets/sidemenu/google_icon.png" (click)="googleLogin()" />\n          </ion-col>\n          <ion-col class="end">\n              <img src="assets/sidemenu/facebook_icon.png" (click)="fbLogin()" />\n          </ion-col> \n        </ion-row>\n    </ion-toolbar>\n  </ion-footer>  \n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Volumes/Work/WorkSpace/Mobile/Igor/phr-app/src/app/app.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_9__ionic_native_keyboard__["a" /* Keyboard */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__["a" /* NativeStorage */],
        __WEBPACK_IMPORTED_MODULE_7__providers_therap_service__["a" /* TherapService */],
        __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_9__ionic_native_keyboard__["a" /* Keyboard */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TherapModel; });
var TherapModel = (function () {
    function TherapModel() {
    }
    return TherapModel;
}());

//# sourceMappingURL=therap.model.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClockModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClockModalPage = (function () {
    function ClockModalPage(navCtrl, navParams, viewCtrl, renderer, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.renderer = renderer;
        this.platform = platform;
        this.currentColour = '#009688';
        var tempDate = new Date().toISOString();
        var splitted = tempDate.split("T", 2);
        var tempHour = splitted[1].split(":", 3);
        this.currentHours = tempHour[0];
        this.currentMinutes = tempHour[1];
        this.hoursEnable = true;
        this.enableAM = true;
        this.enablePM = false;
    }
    ClockModalPage.prototype.ngAfterViewInit = function () {
        this.canvasElement = this.canvas.nativeElement;
        this.renderer.setElementAttribute(this.canvasElement, 'width', this.platform.width() + '');
        this.renderer.setElementAttribute(this.canvasElement, 'height', this.platform.height() + '');
        this.amElement = document.querySelector('.sel-btnAM');
        if (this.amElement) {
            this.amElement.style.color = "white";
            this.amElement.style.transform = "scale(1.3)";
        }
    };
    ClockModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ClockModalPage');
    };
    ClockModalPage.prototype.selectTime = function () {
        this.clearCanvas();
        this.viewCtrl.dismiss(this.currentTime);
    };
    ClockModalPage.prototype.selectAM = function (event) {
        console.log(event);
        this.enableAM = true;
        this.enablePM = false;
        this.releaseHover();
        this.amElement = document.querySelector('.sel-btnAM');
        if (this.amElement) {
            this.amElement.style.color = "white";
            this.amElement.style.transform = "scale(1.3)";
        }
    };
    ClockModalPage.prototype.selectPM = function (event) {
        this.enableAM = false;
        this.enablePM = true;
        this.releaseHover();
        this.pmElement = document.querySelector('.sel-btnPM');
        if (this.pmElement) {
            this.pmElement.style.color = "white";
            this.pmElement.style.transform = "scale(1.3)";
        }
    };
    ClockModalPage.prototype.releaseHover = function () {
        this.clearCanvas();
        this.amElement = document.querySelector('.sel-btnAM');
        if (this.amElement) {
            this.amElement.style.color = "gray";
            this.amElement.style.transform = "scale(1.3)";
        }
        this.pmElement = document.querySelector('.sel-btnPM');
        if (this.pmElement) {
            this.pmElement.style.color = "gray";
            this.pmElement.style.transform = "scale(1.0)";
        }
    };
    //-------Cancel Set Time------------------------
    ClockModalPage.prototype.cancelTime = function (event) {
        this.clearCanvas();
        this.viewCtrl.dismiss();
    };
    //-------Save Set Time------------------------
    ClockModalPage.prototype.saveTime = function (event) {
        this.clearCanvas();
        var hoursData;
        hoursData = this.currentHours + ":" + this.currentMinutes;
        this.viewCtrl.dismiss(hoursData);
    };
    //------------Change to select Hours face--------------
    ClockModalPage.prototype.hoursSet = function ($event) {
        this.hoursEnable = true;
        this.clearCanvas();
    };
    //------------Change to select Minutes face--------------
    ClockModalPage.prototype.minuesSet = function ($event) {
        this.hoursEnable = false;
        this.clearCanvas();
    };
    ClockModalPage.prototype.selectedHours = function (event) {
        this.clearCanvas();
        console.log('event==', event);
        var endPosData = __WEBPACK_IMPORTED_MODULE_2_jquery__(event.target).position();
        var evWidth = __WEBPACK_IMPORTED_MODULE_2_jquery__(event.target).width();
        var evHeight = __WEBPACK_IMPORTED_MODULE_2_jquery__(event.target).height();
        console.log('Event Item Size', evWidth, evHeight);
        var endX = endPosData.left + evWidth / 2;
        var endY = endPosData.top + evHeight / 2;
        console.log('End Position', endX, endY);
        var startPosData = __WEBPACK_IMPORTED_MODULE_2_jquery__('.center').position();
        var currentX = startPosData.left + 5;
        var currentY = startPosData.top + 5;
        //----------Line Draw Part-----------------------
        var ctx = this.canvasElement.getContext('2d');
        ctx.beginPath();
        ctx.lineJoin = "round";
        ctx.moveTo(currentX, currentY);
        ctx.lineTo(endX, endY);
        ctx.closePath();
        ctx.strokeStyle = this.currentColour;
        ctx.lineWidth = 3;
        ctx.stroke();
        //------------------------------------------------
        if (this.enablePM) {
            var str = Number(event.target.innerText) + 12;
            this.currentHours = str;
        }
        else {
            this.currentHours = event.target.innerText;
        }
    };
    ClockModalPage.prototype.selectedMinutes = function (event) {
        console.log('Event Target Minutes', event.target.innerText);
        this.clearCanvas();
        //----------Line Draw Part-----------------------
        var ctx = this.canvasElement.getContext('2d');
        var posData = __WEBPACK_IMPORTED_MODULE_2_jquery__('.center').position();
        var currentX = posData.left + 5;
        var currentY = posData.top + 5;
        var endPosData = __WEBPACK_IMPORTED_MODULE_2_jquery__(event.target).position();
        var evWidth = __WEBPACK_IMPORTED_MODULE_2_jquery__(event.target).width();
        var evHeight = __WEBPACK_IMPORTED_MODULE_2_jquery__(event.target).height();
        var endX = endPosData.left + evWidth / 2;
        var endY = endPosData.top + evHeight / 2;
        ctx.beginPath();
        ctx.lineJoin = "round";
        ctx.moveTo(currentX, currentY);
        ctx.lineTo(endX, endY);
        ctx.closePath();
        ctx.strokeStyle = this.currentColour;
        ctx.lineWidth = 3;
        ctx.stroke();
        //------------------------------------------------
        this.currentMinutes = event.target.innerText;
    };
    //-----------Cavas Clear Function-------------------------
    ClockModalPage.prototype.deletLine = function () {
        this.clearCanvas();
    };
    ClockModalPage.prototype.clearCanvas = function () {
        var ctx = this.canvasElement.getContext('2d');
        ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
    };
    return ClockModalPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('myCanvas'),
    __metadata("design:type", Object)
], ClockModalPage.prototype, "canvas", void 0);
ClockModalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-clockModal',template:/*ion-inline-start:"/Volumes/Work/WorkSpace/Mobile/Igor/phr-app/src/pages/ClockModal/clockModal.html"*/'<!--\n  Generated template for the ClockModalPage page.\n\n  See http://ionicframework.com/docs/comprownts/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n     <ion-row class="time-row">\n       <ion-col class="time-col">\n         <ion-label class="hours-label">{{currentHours}}:{{currentMinutes}}</ion-label>\n       </ion-col>\n       <ion-col class="sel-col">\n         <!-- <button ion-button class="sel-btnAM" (click)="selectAM($event)">AM</button>\n         <button ion-button class="sel-btnPM" (click)="selectPM($event)">PM</button> -->\n       </ion-col>\n     </ion-row>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <canvas #myCanvas class="my-canvas" (click)="deletLine()"></canvas>\n  <ion-row class="select-row">\n      <ion-col class="hours-col">\n          <button ion-button class="hours-btn" (click)="hoursSet($event)" block>Hour</button>\n      </ion-col>\n      <ion-col class="minutes-col">\n          <button ion-button class="minute-btn" (click)="minuesSet($event)" block>Minute</button>\n      </ion-col>\n  </ion-row> \n  <div class="clock-container" *ngIf="hoursEnable == true">\n      <div class="row-twelev number-item" (click)="selectedHours($event)">00</div>\n      <div class="row-one number-item" (click)="selectedHours($event)">13</div>\n      <div class="row-two number-item" (click)="selectedHours($event)">14</div>\n      <div class="row-three number-item" (click)="selectedHours($event)">15</div>\n      <div class="row-four number-item" (click)="selectedHours($event)">16</div>\n      <div class="row-five number-item" (click)="selectedHours($event)">17</div>\n      <div class="row-six number-item" (click)="selectedHours($event)">18</div>\n      <div class="row-seven number-item" (click)="selectedHours($event)">19</div>\n      <div class="row-eight number-item" (click)="selectedHours($event)">20</div>\n      <div class="row-nine number-item" (click)="selectedHours($event)">21</div>\n      <div class="row-ten number-item" (click)="selectedHours($event)">22</div>\n      <div class="row-elev number-item" (click)="selectedHours($event)">23</div>\n      <div class="center"></div>\n      <!-- <div class="clock-container-12"> -->\n        <div class="row-twelev-12 number-item" (click)="selectedHours($event)">12</div>\n        <div class="row-one-12 number-item" (click)="selectedHours($event)">1</div>\n        <div class="row-two-12 number-item" (click)="selectedHours($event)">2</div>\n        <div class="row-three-12 number-item" (click)="selectedHours($event)">3</div>\n        <div class="row-four-12 number-item" (click)="selectedHours($event)">4</div>\n        <div class="row-five-12 number-item" (click)="selectedHours($event)">5</div>\n        <div class="row-six-12 number-item" (click)="selectedHours($event)">6</div>\n        <div class="row-seven-12 number-item" (click)="selectedHours($event)">7</div>\n        <div class="row-eight-12 number-item" (click)="selectedHours($event)">8</div>\n        <div class="row-nine-12 number-item" (click)="selectedHours($event)">9</div>\n        <div class="row-ten-12 number-item" (click)="selectedHours($event)">10</div>\n        <div class="row-elev-12 number-item" (click)="selectedHours($event)"> 11</div>\n      <!-- </div> -->\n   </div>\n   <div class="clock-container" *ngIf="hoursEnable == false">\n      <div class="row-twelev number-item" (click)="selectedMinutes($event)">00</div>\n      <div class="row-one number-item" (click)="selectedMinutes($event)">05</div>\n      <div class="row-two number-item" (click)="selectedMinutes($event)">10</div>\n      <div class="row-three number-item" (click)="selectedMinutes($event)">15</div>\n      <div class="row-four number-item" (click)="selectedMinutes($event)">20</div>\n      <div class="row-five number-item" (click)="selectedMinutes($event)">25</div>\n      <div class="row-six number-item" (click)="selectedMinutes($event)">30</div>\n      <div class="row-seven number-item" (click)="selectedMinutes($event)">35</div>\n      <div class="row-eight number-item" (click)="selectedMinutes($event)">40</div>\n      <div class="row-nine number-item" (click)="selectedMinutes($event)">45</div>\n      <div class="row-ten number-item" (click)="selectedMinutes($event)">50</div>\n      <div class="row-elev number-item" (click)="selectedMinutes($event)"> 55</div>\n      <div class="center"></div>\n    </div>\n  <ion-row class="btn-row">\n      <ion-col class="cancel-col">\n          <button ion-button class="cancel-btn" (click)="cancelTime($event)" block>CANCEL</button>\n      </ion-col>\n      <ion-col class="ok-col">\n          <button ion-button class="ok-btn" (click)="saveTime($event)" block>OK</button>\n      </ion-col>\n    </ion-row> \n</ion-content>\n'/*ion-inline-end:"/Volumes/Work/WorkSpace/Mobile/Igor/phr-app/src/pages/ClockModal/clockModal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Renderer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]])
], ClockModalPage);

//# sourceMappingURL=clockModal.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SerttingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingPage = (function () {
    function SettingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SettingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingPage');
    };
    return SettingPage;
}());
SettingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-setting',template:/*ion-inline-start:"/Volumes/Work/WorkSpace/Mobile/Igor/phr-app/src/pages/Setting/setting.html"*/'<!--\n  Generated template for the SerttingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Setting</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/Work/WorkSpace/Mobile/Igor/phr-app/src/pages/Setting/setting.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], SettingPage);

//# sourceMappingURL=setting.js.map

/***/ })

},[357]);
//# sourceMappingURL=main.js.map