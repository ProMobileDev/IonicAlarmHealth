/**
 * Generated class for the AddAlertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { NavController, NavParams, Events, ModalController, AlertController,ViewController, Loading, LoadingController} from 'ionic-angular';
import { CalendarModalPage } from '../CalendarModal/calendarModal';
import { TimePickerPage } from '../TimePicker/timePicker';
import { TherapService } from '../../providers/therap.service';
import * as moment from 'moment';
import { AlarmModalPage } from '../AlarmModal/alarmModal'; 
import { File } from '@ionic-native/file';
import { FilePath } from '@ionic-native/file-path';
import { Keyboard } from '@ionic-native/keyboard';

declare var cordova: any;
@Component({
  selector: 'page-addalert',
  templateUrl: 'addalert.html',
})
export class AddAlertPage {
  public loading:       Loading;
  public err_message:   any;
  public suc_message:   any;
  public startDate:     any;
  public endDate:       any;
  public rStartDate:    any;
  public rEndDate:      any;
  public medicinName:   string;
  public medicinUnity:  string;
  public medicinType:   string;
  public repeat:        number;
  public therImgA:      string;
  public therImgB:      string;
  public therImgC:      string;
  public therImgD:      string;
  public newAlarm:      any;
  public date:          any;
  public subscription:  any;
  public hoursData:     any=[];
  public alertString:   any;
  
  constructor(
    public navCtrl:       NavController, 
    public navParams:     NavParams,
    public events:        Events,  
    public modalCtrl:     ModalController,
    public viewCtrl:      ViewController,
    public loadingCtrl:   LoadingController, 
    public camera:        Camera, 
    public alertCtrl:     AlertController,
    public therapService: TherapService,
    public file:          File, 
    public filePath:      FilePath,
    private keyboard:     Keyboard){

    this.InitImage();
    this.date = moment();
    this.err_message = '';
    this.events.subscribe('user:createThet_error', (data: any) => {
      this.err_message = data;
    });

    this.suc_message = '';
    this.events.subscribe('user:createThet_success', (data: any) => {
      this.suc_message = data;
    });
    this.repeat = 1;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddAlertPage');
  }
  ionViewDidLeave(){
    this.keyboard.close();
  }
  InitImage(){
    this.therImgA = "assets/imgs/camera-icon.png";
    this.therImgB = "assets/imgs/camera-icon.png";
    this.therImgC = "assets/imgs/camera-icon.png";
    this.therImgD = "assets/imgs/camera-icon.png";

    this.alertString = "";
  }
  AddStartDate(){
    this.startDate = "";
    this.rStartDate = '';
    let myCalendar =  this.modalCtrl.create(CalendarModalPage);
    myCalendar.present();
    
    myCalendar.onDidDismiss(data => {
      console.log(data);
      if(data){
        console.log('Start Date', data);
        var splitted = data.split(" ", 4);
        this.startDate = splitted[0] + ", " + splitted[1] + " " + splitted[2];
        let m = new Date(data);
        let str = moment(m, 'YYYY-MM-DD hh:mm').format();
        var str1 = str.split('T',2);
        var str2 = str1[1].split(':',3);
        this.rStartDate = str1[0]+' '+ str2[0]+':'+str2[1];
        console.log('StartDate',this.rStartDate);
      }
    });
  }
  AddEndDate(){
    console.log("AddEndDate Button Clicked!");
    this.endDate = "";
    this.rEndDate = '';
    let myCalendar =  this.modalCtrl.create(CalendarModalPage);
    myCalendar.present();
    myCalendar.onDidDismiss(data => {
      console.log(data);
      if(data){
        var splitted = data.split(" ", 4);
        this.endDate = splitted[0] + ", " + splitted[1] + " " + splitted[2];
        
        let m = new Date(data);
        let str = moment(m, 'YYYY-MM-DD hh:mm').format(); 
        var str1 = str.split('T',2);
        var str2 = str1[1].split(':',3);
        this.rEndDate = str1[0]+' '+ str2[0]+':'+str2[1];
      }
    });
  }
  //---------------- Test Alert--------------------------------------
  testAlert(){
    console.log("Test Alert Button Clicked!");
    let images=[];
    if(this.therImgA){
      images.push(this.therImgA);
    }
    if(this.therImgB){
      images.push(this.therImgB);
    }
    if(this.therImgC){
      images.push(this.therImgC);
    }
    if(this.therImgD){
      images.push(this.therImgD);
    }
    let tempData = ({
      customDays:       this.repeat,
      hours:            this.hoursData[0],
      media:            images,
      medicineName:     this.medicinName,
      medicineQty:      this.medicinUnity,
      medicineTakeMode: this.medicinType,
      removed:          false,
      noRepeat:         true,
      tsEnd:            0,
      tsEndStr:         this.rEndDate,
      tsStart:          0,
      tsStartStr:       this.rStartDate,
      weekDays:         this.therapService.weekDays
    });

    this.checkValidData();
    
    console.log('Test Data', tempData);
    if(this.alertString != ''){
      let alert = this.alertCtrl.create({
        message: this.alertString,
        buttons: [{
            text: "Ok",
            role: 'cancel'
          }]
      });
      alert.present();
    }else{
      
      let alarmModal = this.modalCtrl.create(AlarmModalPage, {item: tempData});
      alarmModal.present();
    }
  }
  //-----------------Save Alert--------------------------------------
  saveAlert(){
    console.log("Save Alert Button Clicked!");
    this.checkValidData();
    if(this.alertString != ''){
      let alert = this.alertCtrl.create({
        message: this.alertString,
        buttons: [{
            text: "Ok",
            role: 'cancel'
          }]
      });
      alert.present();
    }else{
      this.saveAlertData();
      setTimeout(() => {
        if(this.err_message){
          this.loading.dismiss().then( () => {
            let alert = this.alertCtrl.create({
              message: this.err_message,
              buttons: [{
                  text: "Ok",
                  role: 'cancel'
                }]
            });
            alert.present();
          });
        }
        if(this.suc_message){
          this.loading.dismiss().then( () => {
            this.navCtrl.pop();             
          });
        }
      }, 5000);
      this.loading = this.loadingCtrl.create({
          content:'Please Wait...',
          dismissOnPageChange: true,
      });
      this.loading.present();
    }
  }
  checkValidData(){
    this.alertString = '';
    if(this.medicinName === undefined || this.medicinName === ""){
      this.alertString = 'Insert Medicin Name';
      return;
    }
    if(this.rStartDate === undefined || this.rStartDate === ""){
        console.log('Not Selected Start Date');
        let dateData = new Date();
        let data = dateData.toString();
        var splitted = data.split(" ", 4);
        this.startDate = splitted[0] + ", " + splitted[1] + " " + splitted[2];
        let m = new Date(data);
        let str = moment(m, 'YYYY-MM-DD hh:mm').format();
        var str1 = str.split('T',2);
        var str2 = str1[1].split(':',3);
        this.rStartDate = str1[0]+' '+ str2[0]+':'+str2[1];
      return;
    }
    if(this.rEndDate === undefined || this.rEndDate === ""){
      this.rEndDate = "";
      return;
    }
    if(this.hoursData.length == 0){
      this.alertString = 'Insert Alarm Hours';
      return;
    }
    if(this.medicinUnity ===  undefined || this.medicinUnity === ""){
      this.alertString = 'Insert Medicin Unity';
      return;
    }
    if(this.medicinType === undefined || this.medicinType == ""){
      this.alertString = 'Please Set Medicin Type';
      return;
    }
  }
  saveAlertData(){
    let images=[];
    if(this.therImgA){
      images.push(this.therImgA);
    }
    if(this.therImgB){
      images.push(this.therImgB);
    }
    if(this.therImgC){
      images.push(this.therImgC);
    }
    if(this.therImgD){
      images.push(this.therImgD);
    }
    
    let tempData = ({
      customDays:       this.repeat,
      hours:            this.hoursData,
      media:            images,
      medicineName:     this.medicinName,
      medicineQty:      this.medicinUnity,
      medicineTakeMode: this.medicinType,
      removed:          false,
      noRepeat:         true,
      tsEnd:            0,
      tsEndStr:         this.rEndDate,
      tsStart:          0,
      tsStartStr:       this.rStartDate,
      weekDays:         this.therapService.weekDays
    });
    this.therapService.setTherapy(tempData);
  }
  //-------------_Add Alarm Hours -------------------------------------------------------------------------
  addAlarmHours(){

    let timeModal = this.modalCtrl.create(TimePickerPage);
    timeModal.present();
    timeModal.onDidDismiss(data => {
      console.log(data);
      if(data){
          let splitted = data.split(":", 3 );
          this.hoursData.push({
            hours:splitted[0],
            minutes:splitted[1]
          });
          console.log(this.hoursData);
      }
    });
  }
  removeAlarm(index){
    this.hoursData.splice(index, 1);
  }
  //-------------- Alarm Image Capture-----------------------------
  capture(event) {
    console.log(event.target.className);
    const cameraOptions: CameraOptions = {
      quality: 100,
      sourceType: this.camera.PictureSourceType.CAMERA,
      saveToPhotoAlbum: false,
      correctOrientation: true,
      targetWidth:        512,
      targetHeight:       512,
      allowEdit:          true,
    };
    this.camera.getPicture(cameraOptions).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      var currentName =  imageData.substr(imageData.lastIndexOf('/') + 1);
      var correctPath = imageData.substr(0, imageData.lastIndexOf('/') + 1);
     
      this.copyFileToLocalDir(correctPath, currentName, this.createFileName(), event.target.className);
       
      // if(event.target.className == "imageA-col small-img"){
      //     this.therImgA = "data:image/jpeg;base64," + imageData;
      // }else if(event.target.className == "imageB-col small-img"){
      //   this.therImgB = "data:image/jpeg;base64," + imageData;
      // }else if(event.target.className == "imageC-col small-img"){
      //   this.therImgC = "data:image/jpeg;base64," + imageData;
      // }else{
      //   this.therImgD = "data:image/jpeg;base64," + imageData;
      // }
    }, (err) => {
      // Handle error
    });
  }
  
  // Create a new name for the image
	private createFileName() {
    var d = new Date(),
    n = d.getTime(),
    newFileName =  n + ".jpg";
    return newFileName;
  }
  public copyFileToLocalDir(namePath, currentName, newFileName, eventName) {
    // let alert = this.alertCtrl.create({
    //   message:   namePath + "TTTTT  TTTTT" + currentName+"TTTTT  TTTTT" + newFileName,
    //   buttons: [{
    //       text: "Ok",
    //       role: 'cancel'
    //     }]
    // });
    // alert.present();
    this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
      // this.lastImage = newFileName;
     
      if(eventName === "imageA-col small-img"){
        this.therImgA =  cordova.file.dataDirectory + newFileName
      }else if(eventName === "imageB-col small-img"){
        this.therImgB = cordova.file.dataDirectory + newFileName
      }else if(eventName === "imageC-col small-img"){
        this.therImgC = cordova.file.dataDirectory + newFileName;
      }else{
        this.therImgD = cordova.file.dataDirectory + newFileName;
      }
   }, error => {
    console.log('Error while storing file.');
    let alert = this.alertCtrl.create({
      message:  'Error while storing file.'  ,
      buttons: [{
          text: "Ok",
          role: 'cancel'
        }]
    });
    alert.present();
   });
  }
}
