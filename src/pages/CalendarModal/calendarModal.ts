import { Component } from '@angular/core';
import { NavController, NavParams , ViewController} from 'ionic-angular'; 
/**
 * Generated class for the CalendarModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@Component({
  selector: 'page-calendar-modal',
  templateUrl: 'calendarModal.html',
})
export class CalendarModalPage {
  myYears:      any;
  currentData:  any;
  pickDate: any;
  date: string;
  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController) {
    
    this.myYears = new Date().getFullYear();
    var tempDate = new Date().toString();
    // To get Date String From current Date
    var splitted = tempDate.split(" ", 4);
    this.currentData = splitted[0] + ", " + splitted[1] + " " + splitted[2];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarModalPage');
   }
  onChange($event){
    var tempDate = this.date.toString();
    var splitted = tempDate.split(" ", 4);
    this.currentData = splitted[0] + ", " + splitted[1] + " " + splitted[2];
    this.pickDate = tempDate;
    this.myYears = splitted[3];          
  }
  onMonthChange($event){
    console.log("Calendar monthChange Function!" , event);
  }
  cancelDate(event){
    console.log("CancelButton Clicked!");
    this.viewCtrl.dismiss();
  }
  selectedDate(event){
    console.log("Ok Button Clicked!");
    this.viewCtrl.dismiss(this.pickDate);
  }

}
