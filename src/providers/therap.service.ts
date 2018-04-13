import { Events } from 'ionic-angular';
import { Injectable } from "@angular/core";
import { TherapModel } from "../models/therap.model";
import { TodayTherapModel } from "../models/todayTherap.model";
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Storage } from '@ionic/storage';
import * as moment from 'moment';
// import { Media, MediaObject } from '@ionic-native/media';
import { Vibration } from '@ionic-native/vibration';
import { NativeAudio } from '@ionic-native/native-audio';

@Injectable()
export class TherapService {
    public theraps:       Array<TherapModel> = new Array<TherapModel>();
    public todayTheraps:  Array<TodayTherapModel> = new Array<TodayTherapModel>();
    
    public adminToken:    any;
    public userToken:     any;
    public userID:        any;
    public takeModeList:  any = [];
    public userInfo:      any = [];

    // public alarmMedia:    MediaObject;
    public interval:     any;
    public queryInterval: any;
    public weekDays: any = {
      "mon": false, "tue": false, "wed": false, "thu": false, "fri": false,"sat": false, "sun": false 
    };
    public URL = 'http://145.239.199.191:8080/phr';
    // static get parameters() {return [[Http]];}
    //site URL="http://145.239.199.191:8080/phr/swagger-ui.html#!/user-controller/createUserFromAppUsingPOST"
    public tokenURL:    any;
    public geoURL:      any;
    public taskURL:     any;
    public therapyURL:  any;
    public userURL:     any;
    public takeModeURL: any;
    //------------------------App`s user ID ----------------------
    public userName : string;
    public header = new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    });

    constructor(
      private http:Http, 
      public storage: Storage,
      public events: Events,
      public nativeAudio: NativeAudio,
      private vibration: Vibration
    ){
      this.initURL();
      this.initWeeksDay();   
    }
    //------------------------- Init Temp Data--------------------
    public initURL(){
      this.tokenURL       = this.URL + '/session';
      this.geoURL         = this.URL + '/geo';
      this.taskURL        = this.URL + '/task';
      this.therapyURL     = this.URL + '/therapy';
      this.userURL        = this.URL + '/user';
      this.takeModeURL    = this.URL + '/therapy/medicine/takemode/list' 
      
      this.userToken = "";
      this.userInfo = [];
      this.queryInterval = null;

      this.nativeAudio.preloadSimple('alarm', 'assets/audio/alarm-tone.mp3').then((msg)=>{
        console.log("message: " + msg);
      }, (error)=>{
        console.log("error: " + error);
      });
    }
    public initHeader(){
      this.header = null;
      this.header = new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      });
    }    
    //-------------------------- Admin Token Controller -----------------
    public setAdminToken(): void{
      console.log('Admin Token Getting!');
      this.initHeader();
      var options  = new RequestOptions({headers: this.header});
      var tokenRegData = {password: "phr",username: "usercreate"};
      this.http.post(this.tokenURL, tokenRegData, options)
      .map(res => res.json())
      .subscribe(
          data => {
            console.log('adminToken Data:', data.model.token);
            this.adminToken = data.model.token;
            this.storage.set('admin_token', data.model.token);
          },
          err => {
          console.log("ERROR!: ", err);
        }
      );
    }
    
    public getAdminToken(){
      return this.storage.get('admin_token');
    }
    //------------------------ Customer Token Controller ------------------------
    public setUserToken(info): void{
      console.log('User Token Get Function');
      this.initHeader();
      var options  = new RequestOptions({headers: this.header});
      var tokenRegData = {password: info.password, username: info.username};
      this.http.post(this.tokenURL, tokenRegData, options)
      .map(res => res.json())
      .subscribe(
          data => {
            console.log('userToken Data', data.model.token);
            this.userToken = data.model.token;
            this.storage.set('userToken', data.model.token);
          },
          err => {
          console.log("ERROR!: ", err);
        }
      );
    }
    
    public getUserToken(){
      return this.storage.get('userToken');
    }
    //------------------------  User Controller Service ------------------------ 
    public setUser(info:any){
      this.userInfo = info; 
      this.storage.set('customer',info);
    }
    public getUser(){
      return this.storage.get('customer');
    }
   
    //------------------------  Session Controller Service ------------------------ 
    public login(info:any){
      this.initHeader();
      var options = new RequestOptions({headers: this.header});
      let reqData = {
        username: info.username,
        password: info.password,
      }
      console.log('Login Requestion Data', this.tokenURL, reqData, options);
      this.http
      .post(this.tokenURL, reqData, options)
      .map(res => res.json())
      .subscribe(
          data => {
            console.log('User Logged in data:', data);
            
            let userInfo = ({
              id: data.model.id,
              username: data.model.username,
              password: info.password,
              lang:     data.model.language
            });
           
            this.setUser(userInfo);
            this.userToken = data.model.token;
            this.userID    = data.model.id
            this.getTheraps();
            this.getTakeMode();
            this.storage.set('userToken', data.model.token); 
            if(this.queryInterval){
              clearInterval(this.queryInterval);
            }
            this.getRealTimeData();
            this.events.publish('user:login', userInfo);
          },
          err => {
            console.log("ERROR!: ", err);
            this.events.publish('user:login_error',err);
          }
      );  
    }
    public getRealTimeData(){
      this.queryInterval = setInterval(() => {
        if(this.userInfo.username && this.userInfo.password){
          this.login(this.userInfo);
          // console.log('RealTime Query!');
        }
      }, 3600000);
    }
    public logout(){
      this.userInfo = [];
      this.userID = '';
      this.userToken = '';
      this.storage.remove('customer');
      this.storage.remove('userToken');
    }
    //------------------------ Customer Creat Controller ----------------------------- 
    public signupCustomer(info:any){
      this.initHeader();
      var options  = new RequestOptions({headers: this.header});
      var tokenRegData = {password: "phr",username: "usercreate"};
      this.http.post(this.tokenURL, tokenRegData, options).map(res => res.json()).subscribe(
          data => {
            console.log('adminToken Data:', data.model.token);
            this.adminToken = data.model.token;
            this.header.append('X-Token',this.adminToken);
            var options = new RequestOptions({headers: this.header});
            let creatUserURL = this.userURL + '/new';
            let reqData = {
              username: info.username, 
              password: info.password, 
              roles:['CUSTOMER']
            };
            this.http.post(creatUserURL, reqData, options).map(res => res.json()).subscribe(
                data => {
                  console.log('userSingupData', data);
                  let userInfo = ({
                    id: data.model.id,
                    username: info.username,
                    password: info.password
                  });
                  this.setUser(userInfo);
                  this.setUserToken(userInfo); 
                  this.events.publish('user:signup', data.model.username);
                },
                err => {
                  console.log("ERROR!: ", err);
                  this.events.publish('user:signup_error',err);
                }
            );

          },
          err => {
          console.log("ERROR!: ", err);
        }
      );  
    }
    //----------------------------------------------------------------------------------------------------
    //-----------------------------------  Therapy Controller Service ------------------------------------ 
    //----------------------------------------------------------------------------------------------------
    public setTherapy(info:any){
      console.log('setTherapy post!');
      this.initHeader();
      var options  = new RequestOptions({headers: this.header});
      var tokenRegData = {password: this.userInfo.password, username: this.userInfo.username};
      this.http.post(this.tokenURL, tokenRegData, options).map(res => res.json()).subscribe(data => {
            this.userToken = data.model.token;
            this.postTheraps(info, this.userToken, this.userID);
            this.storage.set('userToken', data.model.token);
      },err => {
          console.log("ERROR!: ", err);
      });
       
    }
    //---Post Theraps---------------------------------------------------------------------------
    public postTheraps(info:any, token:any, uId:any){
      this.initHeader();
      this.header.append('X-Token',token);
      var options = new RequestOptions({headers: this.header});
      let setTherapyURL = this.therapyURL;
      let reqData = {
        id:               0,
        userId:           uId,    
        customDays:       info.customDays,
        hours:            info.hours,
        media:            info.media,
        medicineName:     info.medicineName,
        medicineQty:      info.medicineQty,
        medicineTakeMode: info.medicineTakeMode,
        removed:          info.removed,
        noRepeat:         info.noRepeat,
        tsEnd:            info.tsEnd,
        tsEndStr:         info.tsEndStr,
        tsStart:          info.tsStart,
        tsStartStr:       info.tsStartStr,
        weekDays:         info.weekDays
      };
      console.log('postTherapyData===', setTherapyURL, reqData, options);
      this.http
      .post(setTherapyURL, reqData, options)
      .map(res => res.json())
      .subscribe(
          data => {
            console.log('Therapy Post Response!',data);
            this.theraps.push(data.model);
            this.getTodayTherapy();
            this.events.publish('user:createThet_success','success'); 
          },
          err => {
            console.log("ERROR!: ", err);
            this.events.publish('user:createThet_error',err);
          }
      );
    }
    //------ Get Theraps ---------------------------------------------------------------------------
    public getTheraps(){
      
      if(this.userToken && this.userID){
        this.getTherapsData(this.userToken, this.userID);
      }
    }
    public getTherapsData(token:any,uId:any){
      this.initHeader();
      this.header.append('X-Token',token);
      var options = new RequestOptions({headers: this.header});
      let getTherapyURL = this.therapyURL + '?userId='+uId + '&includeRemoved=false';
      console.log('header-datas', this.header, getTherapyURL);
      this.http
      .get(getTherapyURL, options)
      .map(res => res.json())
      .subscribe(
          data => {
            console.log('Get TherapyResponse',data);
            this.theraps = [];
            this.todayTheraps = [];
            for(let i = 0 ; i< data.model.length; i++){
              this.theraps.push(data.model[i]);
            }
            this.getTodayTherapy();
            this.events.publish('user:getTherap','success'); 
          },
          err => {
            console.log("ERROR!: ", err);
            this.events.publish('user:getTherap','error');
          }
      );
    }
    public getTherapsDataForApp(){
      return this.theraps;
    }

    //-- Edit Theraps ---------------------------------------------------------------------------
    public updateTheraps(therapys: any){
      
      this.initHeader();
      var options  = new RequestOptions({headers: this.header});
      var tokenRegData = {password: this.userInfo.password, username: this.userInfo.username};
      this.http.post(this.tokenURL, tokenRegData, options).map(res => res.json()).subscribe(data => {
          this.userToken = data.model.token;
          let updateTherapyData = [];
          updateTherapyData = therapys;
          updateTherapyData['userId'] = this.userID;
          let updateTherapyURL = this.therapyURL + "/" + updateTherapyData['id'];
          console.log('Therapy updating!');
          
          this.updateTherapsData(updateTherapyData, this.userToken, updateTherapyURL);
            
      },err => {
          console.log("ERROR!: ", err);
      });
    }
    public updateTherapsData(therapysData: any, token:any, url:any){
      this.initHeader();
      let self = this;
      this.header.append('X-Token',token);
      var options = new RequestOptions({headers: this.header});
      console.log('Update Therapy Data', therapysData);
      this.http.put(url,therapysData,options).map(res => res.json()).subscribe(data => {
        console.log('Update TherapyResponse',data);
        for(let i = 0; i < this.theraps.length;i++){
            if(self.theraps[i]['id'] === therapysData['id'] && self.theraps[i]['userId'] === therapysData['userId']){
                let tempData = ({
                  id:               therapysData['id'],
                  userId:           therapysData['userId'],  
                  customDays:       therapysData['customDays'],
                  hours:            therapysData['hours'],
                  media:            therapysData['media'],
                  medicineName:     therapysData['medicineName'],
                  medicineQty:      therapysData['medicineQty'],
                  medicineTakeMode: therapysData['medicineTakeMode'],
                  removed:          therapysData['removed'],
                  noRepeat:         therapysData['noRepeat'],
                  tsEnd:            therapysData['tsEnd'],
                  tsEndStr:         therapysData['tsEndStr'],
                  tsStart:          therapysData['tsStart'],
                  tsStartStr:       therapysData['tsStartStr'],
                  weekDays:         therapysData['weekDays']
                });
                self.theraps.splice(i, 1);
                self.theraps.splice(i,0, tempData);
                break;
            }
        }
        this.getTodayTherapy();
        this.events.publish('user:updateTherapy_success','success'); 
      },
      err => {
        console.log("ERROR!: ", err);
        this.events.publish('user:updateTherapy_error',err);
      });
    }
      
     
    //------------------------ Get TherapyTakeMode ---------------------------
    public getTakeMode(){
      this.initHeader();
      this.header.append('X-Token',this.userToken);
      this.http.get(this.takeModeURL, {headers: this.header}).map(res => res.json()).subscribe(data => {
          console.log('TakeModeList', data);
          this.takeModeList = data.model;
        },err => {
          console.log('Take Model Error!', err);
        }
      );
    } 
    //------------------------  Geo Controller Service ------------------------ 
    public getCityInformation(){

    }
    public getCountryInformation(){

    }
    //------------------------  Days of Week Service ------------------------ 
    public activeWeekDays(week:string){
      switch (week){
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
        default:{
          break;
        }
      }
    }
    public deActiveWeekDays(week:string){
      switch (week){
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
        default:{
          break;
        }
      }
    }
    public initWeeksDay(){
      this.weekDays.mon = true;
      this.weekDays.tue = true;
      this.weekDays.wed = true;
      this.weekDays.thu = true;
      this.weekDays.fri = true;
      this.weekDays.sat = true;
      this.weekDays.sun = true;
    }
    public getTodayTherapy(){
      let todayDate = moment();
      let tempTherapy = [];
      this.todayTheraps = [];
      
      for(let i = 0; i < this.theraps.length; i++){
        let sDate = moment(this.theraps[i].tsStart);
        if(this.theraps[i].tsEnd){
          let eDate = moment(this.theraps[i].tsEnd);
          if((todayDate.isBetween(sDate, eDate,'day')) || (todayDate.isSame(sDate, 'day')) || (todayDate.isSame(eDate, 'day'))){
            console.log('Theraps Contained', this.theraps[i]);
            tempTherapy.push(this.theraps[i]);
          }
        }else{
          if(todayDate.isSame(sDate, 'day') || todayDate.isSameOrAfter(sDate, 'day')){
            console.log('Theraps Contained with Empty EndDate', this.theraps[i]);
            tempTherapy.push(this.theraps[i]);
          }
        }
        
      }
      for(let i = 0; i < tempTherapy.length; i++){
       for(let j = 0; j < tempTherapy[i].hours.length; j++){
          todayDate = moment();
          let newDay= moment([todayDate.year(), todayDate.month(), todayDate.date(), tempTherapy[i].hours[j].hours, tempTherapy[i].hours[j].minutes, 0, 0]);
          if(moment(newDay).isSameOrBefore(todayDate, 'seconds')){
                newDay.add(1,'d');
          }
          let tempToday  = new TodayTherapModel();
          tempToday= ({
            time:             newDay,
            id:               tempTherapy[i].id,
            customDays:       tempTherapy[i].customDays,
            hours:            tempTherapy[i].hours[j],
            media:            tempTherapy[i].media,
            medicineName:     tempTherapy[i].medicineName,
            medicineQty:      tempTherapy[i].medicineQty,
            medicineTakeMode: tempTherapy[i].medicineTakeMode,
            removed:          tempTherapy[i].removed,
            noRepeat:         tempTherapy[i].noRepeat,
            tsEnd:            tempTherapy[i].tsEnd,
            tsEndStr:         tempTherapy[i].tsEndStr,
            tsStart:          tempTherapy[i].tsStart,
            tsStartStr:       tempTherapy[i].tsStartStr,
            weekDays:         tempTherapy[i].weekDays
          });
          this.todayTheraps.push(tempToday);
        }
      }
      this.todayTheraps.sort(function(a, b){return a.hours.minutes - b.hours.minutes });
      this.todayTheraps.sort(function(a, b){return a.hours.hours - b.hours.hours });
      
      this.events.publish('user:getTodayTherap','success');
      console.log('Today Therapy', this.todayTheraps);

    }
  
    public setAcknowledge(tId){
      this.initHeader();
      this.header.append('X-Token',this.userToken);
      var options = new RequestOptions({headers: this.header});
      let eventMoment = moment();
      let tsEvent = eventMoment.valueOf()
      let ackURL =  this.therapyURL + '/ack/'+this.userID +'/'+ tId +'/'+ tsEvent+'?level='+'DONE';
      let content = undefined;
      this.http.put(ackURL,content, options).map(res => res.json()).subscribe(data => {
          console.log('Acknowledge Response!', data);
      },err =>{
        console.log('Acknowledge Error!',err);
      });
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////// Vibration and Sounds ///////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
    startAlarm(){
      this.nativeAudio.play('alarm');
      this.interval = setInterval(() => {
        this.vibration.vibrate(2000);
      }, 3000);
    }
    stopeAlarm(){
      this.nativeAudio.stop('alarm');
      clearInterval(this.interval);
    }
}
