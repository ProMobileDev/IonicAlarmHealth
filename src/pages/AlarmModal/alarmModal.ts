import { Component, ViewChild} from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';
import * as moment from 'moment';
import { TherapService } from '../../providers/therap.service';
 
@Component({
  selector: 'page-alarmModal',
  templateUrl: 'alarmModal.html',
})

export class AlarmModalPage {
  @ViewChild('mySlider') slider: Slides;
  public currentImgIndex: number;
  public alarmItem:       any;
  public imgArray:        any[];
  public alarmed:         Boolean;
  public time:            any;
  public date:            any;
  public slideLength:     boolean = false;
  constructor(
    public navCtrl:       NavController, 
    public navParams:     NavParams,
    public therapService: TherapService,
  ){
    
    
    this.alarmItem = this.navParams.get('item');
    console.log('Alarma Data',this.alarmItem);
    this.currentImgIndex = 0;
    this.imgArray = this.alarmItem.media;
    this.alarmed = false;
    console.log('Alarm Hours Data', this.alarmItem.hours);
    this.date = moment();
    this.time = moment([this.date.year(), this.date.month(), this.date.date(), this.alarmItem .hours.hours, this.alarmItem.hours.minutes, 0, 0]);


    if(this.imgArray.length > 0) {
      this.slideLength = true;
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AlarmModalPage');
    console.log(this.slider);
  }
  close(){
    console.log('Close Modal!');
    this.navCtrl.pop();
    this.therapService.stopeAlarm();
  }

  previousSection(){
    this.slider.slidePrev();
  }
  nextSection(){
    this.slider.slideNext();  
  }
  
  updateStatus(alarmStatus){
    console.log(alarmStatus);
    if(alarmStatus){
      this.therapService.setAcknowledge(this.alarmItem.id);
      this.therapService.stopeAlarm();
    }
  }

  }