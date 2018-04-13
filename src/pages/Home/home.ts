import { Component} from '@angular/core';
import { NavController, AlertController, Loading, Events, ModalController, LoadingController} from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { AddAlertPage } from '../AddAlert/addalert';
import { EditAlertPage } from '../EditAlert/editAlert';
import { TherapService } from '../../providers/therap.service';
import { TherapModel } from "../../models/therap.model";
import { TodayTherapModel } from "../../models/todayTherap.model";
// import * as moment from 'moment';
// import { Observable } from "rxjs";
// import {Autostart} from "@ionic-native/autostart";
import { LocalNotifications } from '@ionic-native/local-notifications';
import { AlarmModalPage } from '../AlarmModal/alarmModal';
import { BackgroundMode } from '@ionic-native/background-mode';
import { NativeAudio } from '@ionic-native/native-audio';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  message:        any;
  todayDate:      string;
  todayDateLabel: string;
  todayPlanLabel: string;

  theraps:        Array<TherapModel> = new Array<TherapModel>();
  todayTheraps:   Array<TodayTherapModel> = new Array<TodayTherapModel>();

  public loading: Loading;
  public date;
  public subscription;
  public activatedAlarm: any;

  constructor(public events:            Events,
              public navCtrl:           NavController,
              public loadingCtrl:       LoadingController,
              public therapService:     TherapService,
              public localNotifications:LocalNotifications,
              public alertCtrl:         AlertController,
              public modalCtrl:         ModalController,
              public translate:         TranslateService,
              public backgroundMode:    BackgroundMode,
              public nativeAudio:       NativeAudio) {

    this.backgroundMode.enable();
    this.backgroundMode.setDefaults({ silent: true });
    
    // Show Pharmalarm
    this.localNotifications.on("click", (notification, state) => {
      let alarmData = JSON.parse(notification.data);
      let alarmModal = this.modalCtrl.create(AlarmModalPage, {item: alarmData});
      alarmModal.present();
    });
    this.localNotifications.on("trigger", (notification, state) => {
      this.therapService.startAlarm();
    });
     
    this._subscribeToEvents();    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.initData();
  }
  ionViewWillEnter() {
    console.log('ionViewWillEnter HomePage');
    this.getTodayDateValue();
  }
  setNotification(){
    for (let i = 0; i < this.therapService.todayTheraps.length; i++) {
      let alarmDate = new Date(this.therapService.todayTheraps[i].time);
      let notiData = JSON.stringify(this.therapService.todayTheraps[i]);
      this.localNotifications.schedule({
            id: i,
            title: "Pharmalarm Therapy Notification",
            text: this.therapService.todayTheraps[i].medicineName,
            at: alarmDate,
            data: notiData,
      });
    }    
  }
  _subscribeToEvents(){
    
    this.message = '';
    this.events.subscribe('user:getTherap', (data: any) => {
      this.message = data;  
    });
    this.events.subscribe('user:getTodayTherap', (data: any) => {
      this.setNotification();
      console.log('Today Therapys Set!');
    });
    
  }
  public initData() {
    setTimeout(() => {
      if (this.message === 'success') {
        this.loading.dismiss().then(() => {
           
        });
      } else if (this.message === 'error') {
        this.loading.dismiss().then(() => {
          console.log('Loading Dismission!');
          let alert = this.alertCtrl.create({
            message: this.message,
            buttons: [{
              text: "Ok",
              role: 'cancel'
            }]
          });
          alert.present();
        });
      } else {

        this.loading.dismiss();
      }
    }, 5000);
    this.loading = this.loadingCtrl.create({
      content: 'Loding Alarms...',
      dismissOnPageChange: true,
    });
    this.loading.present();
  }

  //-----------Get Today Date String----------------------------------------------------------------------------
  getTodayDateValue() {
    let tempdate = new Date().toString();
    var splitt = tempdate.split(' ', 5);
    this.translate.get(splitt[0]).subscribe(translateValue => {
      this.todayDateLabel = translateValue + " " + splitt[2] + " ";
    });
    this.translate.get(splitt[1]).subscribe(translateValue => {
      this.todayDateLabel += translateValue;
    });

    this.translate.get('PLAN_TERAPERUTICO').subscribe(translateValue => {
      this.todayPlanLabel = translateValue;
    });
    console.log('Today PlanLabel', this.todayPlanLabel);
  }

  //-----------------Add Pharmalarm Page---------------------------------------------------------------------------------
  addItems() {
    let nav = this.navCtrl;
    nav.push(AddAlertPage);
  }

  getStatusImage(status: boolean) {
    if (status) {
      return "assets/imgs/check_icon.png";
    } else {
      return "assets/imgs/arrow_icon.png";
    }
  }
  //-------------Show Alarm Details ------------------------------------------------------------
  gotoDetails(item: any) {
    console.log('Edit Item', item);
    let editItme = new TherapModel();
    for (let i = 0; i < this.therapService.theraps.length; i++) {
      if (this.therapService.theraps[i].id === item.id) {
        editItme = this.therapService.theraps[i];
        break;
      }
    }
    let nav = this.navCtrl;
    nav.push(EditAlertPage, {therap: editItme});
  }
}
