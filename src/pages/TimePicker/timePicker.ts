import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import * as moment from 'moment';
@Component({
  selector: 'page-timePicker',
  templateUrl: 'timePicker.html',
})
export class TimePickerPage {
  hourValue:        any;
  minutesValue:     any;
  
  currentHours:     any;
  currentMinutes:   any;

  hoursList:        any[];
  minutesList:      any[];

  time:             any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController) {
    
    
    let curData = new Date();
    this.currentHours = curData.getHours();
    this.currentMinutes = curData.getMinutes();
    this.time = moment();
    this.time.set({hour:this.currentHours,minute:this.currentMinutes,second:0,millisecond:0});
    console.log('adsfasdf', this.time.hours());
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimePickerPage');
  }
 
  increaseHours(){
    if(this.currentHours == 23){
      this.currentHours = 0;
    }else{
      this.currentHours ++;
    }

    this.time.set({hour:this.currentHours,minute:this.currentMinutes,second:0,millisecond:0});
    console.log('Hours', this.time.hours());
    console.log('Minutes', this.time.minutes());
  }
  decreaseHours(){
    if(this.currentHours == 0){
      this.currentHours = 23;
    }else{
      this.currentHours--;
    }
    this.time.set({hour:this.currentHours,minute:this.currentMinutes,second:0,millisecond:0});
    this.hourValue = this.time.hours();
  }
  increaseMinutes(){
    if(this.currentMinutes == 59){
      this.currentMinutes = 0;
    
    }else{
      this.currentMinutes ++;
    }
    this.time.set({hour:this.currentHours,minute:this.currentMinutes,second:0,millisecond:0});
    this.minutesValue = this.time.minutes();

    
  }
  decreaseMinutes(){
    if(this.currentMinutes == 0){
      this.currentMinutes = 59;
    }else{
      this.currentMinutes--;
    }
    this.time.set({hour:this.currentHours,minute:this.currentMinutes,second:0,millisecond:0});
    this.minutesValue = this.time.minutes();
  }

  setTime(){
    let str = this.time.toString();
    let splitt = str.split(" ", 5 );
    this.viewCtrl.dismiss(splitt[4]); 
  }
  close(){
    this.viewCtrl.dismiss();
  }

}
