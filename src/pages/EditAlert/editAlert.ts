import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { NavController, NavParams, ModalController, AlertController, Events, Loading, LoadingController } from 'ionic-angular';
import * as moment from 'moment';
import { TherapService } from '../../providers/therap.service';
import { CalendarModalPage } from '../CalendarModal/calendarModal';
import { TimePickerPage } from '../TimePicker/timePicker';
import { File } from '@ionic-native/file';
import { FilePath } from '@ionic-native/file-path';
/**
 * Generated class for the EditAlertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var cordova: any;
@Component({
  selector: 'page-editAlert',
  templateUrl: 'editAlert.html',
})
export class EditAlertPage {
  public startDate:   any;
  public rStartDate:  any;
  public endDate:     any;
  public rEndDate:    any;
  public theraps:     any=[];
  public hoursData:   any=[];
  public timeDatas:   any=[];
  public weeklyData:  any=[];

  public alertString: any;
  public loading:Loading;

  public err_message: any;
  public suc_message: any;
  public date;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public therapService: TherapService, 
    public modalCtrl: ModalController,
    public camera:  Camera, 
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public events: Events,
    public file: File, 
    public filePath: FilePath){
    
    this.theraps = this.navParams.get('therap');
    console.log('Edit theraps', this.theraps);
    this.hoursData = [];
    this.timeDatas = [];
    this.date = moment();
    for(let i = 0; i < this.theraps.hours.length; i++){
      let newDay= moment([this.date.year(), this.date.month(), this.date.date(), this.theraps.hours[i].hours, this.theraps.hours[i].minutes, 0, 0]);
      this.hoursData.push({
       time: newDay
      });
      this.timeDatas.push({
        hours: this.theraps.hours[i].hours,
        minutes: this.theraps.hours[i].minutes
      }) ;
    }
    
    
    let sDStr = moment(this.theraps.tsStart);
    this.rStartDate = this.theraps.tsStartStr;

    let splitted = (sDStr.toString()).split(" ", 4);
    this.startDate = splitted[0] + ", " + splitted[1] + " " + splitted[2];
    
    if(this.theraps.tsEnd){
      let eDStr = moment(this.theraps.tsEnd);
      this.rEndDate = this.theraps.tsEndStr;
      let splittedE = (eDStr.toString()).split(" ", 4);
      this.endDate = splittedE[0] + ", " + splittedE[1] + " " + splittedE[2];
    }else{
      this.endDate="" ;
    }
   

    
    this.weeklyData = this.theraps.weekDays;
    console.log('The Week Datas', this.weeklyData);

    this.err_message = '';
    this.events.subscribe('user:updateTherapy_error', (data: any) => {
      this.err_message = data;
    });

    this.suc_message = '';
    this.events.subscribe('user:updateTherapy_success', (data: any) => {
      this.suc_message = data;
    });
    console.log('MEDIA', this.theraps.media);
    for(let j = 0; j < this.theraps.media.length; j++){
      console.log('media length',this.theraps.media[j].length );
      if(this.theraps.media[j].length === undefined){
        this.initMedia();        
      }else{
        var imageName =  this.theraps.media[j].substr(this.theraps.media[j].lastIndexOf('/') + 1);
        var imagePath = this.theraps.media[j].substr(0, this.theraps.media[j].lastIndexOf('/') + 1);
        console.log('!12312312',imageName, imagePath);
        if(imageName === "camera-icon.png" || imageName === "camera-cross-icon.png"){
          
        }else{
          this.file.checkFile(imagePath, imageName).then((success)=>{
            console.log('file exist!');
          },(error)=>{
            console.log('file doesn t exist!');
            this.theraps.media[j] = "assets/imgs/camera-cross-icon.png";
          }); 
        } 
      } 
    }
    console.log('MEDIA AFTER', this.theraps.media);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditAlertPage');
  }
  initMedia(){
    this.theraps.media = [];
    for(let i = 0; i< 4;i++){
      var str = "assets/imgs/camera-icon.png";
      this.theraps.media.push(str);
    }
  }
  editStartDate(){
    this.startDate = "";
    this.rStartDate = '';
    let myCalendar =  this.modalCtrl.create(CalendarModalPage);
    myCalendar.present();
    
    myCalendar.onDidDismiss(data => {
      console.log(data);
      if(data){
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
  editEndDate(){
    console.log("EditEndDate Button Clicked!");
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
  checkValidData(){
    this.alertString = '';
    if(this.theraps.medicineName === undefined || this.theraps.medicineNam === ""){
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
    if(this.theraps.medicineQty ===  undefined || this.theraps.medicineQty === ""){
      this.alertString = 'Insert Medicin Unity';
      return;
    }
    if(this.theraps.medicineTakeMode === undefined || this.theraps.medicineTakeMode == ""){
      this.alertString = 'Please Set Medicin Type';
      return;
    }
  }
  capture(event){
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
    }, (err) => {
      // Handle error
    });
  }
  addAlarmHours(){
    let timeModal = this.modalCtrl.create(TimePickerPage);
    timeModal.present();
    timeModal.onDidDismiss(data => {
      console.log(data);
      if(data){
          let splitted = data.split(":", 3 );
          this.timeDatas.push({
            hours:splitted[0],
            minutes:splitted[1]
          });
          let newDay= moment([this.date.year(), this.date.month(), this.date.date(), splitted[0], splitted[1], 0, 0]);
          this.hoursData.push({
            time: newDay
          }); 

          console.log(this.hoursData);
      }
    });
  }
  removeAlarm(index){
    this.hoursData.splice(index, 1);
    this.timeDatas.splice(index, 1);
  }
  deleteAlert(){
    // this.therapService.deleteTherapy();
    console.log('This theraps deleting');
  }
  saveAlert(){
    console.log('This Therapys updating');
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
      this.updateAlertData();
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
          content:'Updating Therapy...',
          dismissOnPageChange: true,
      });
      this.loading.present();
    }
  }
  updateAlertData(){
    let images=[];
    if(this.theraps.media[0]){
      images.push(this.theraps.media[0]);
    }
    if(this.theraps.media[1]){
      images.push(this.theraps.media[1]);
    }
    if(this.theraps.media[2]){
      images.push(this.theraps.media[2]);
    }
    if(this.theraps.media[3]){
      images.push(this.theraps.media[3]);
    }
    
    let mEnd = moment(this.rEndDate);
    let mEndStr = mEnd.valueOf();

    let mStart = moment(this.rStartDate);
    let mStartStr = mStart.valueOf();

    console.log('Milliseconds Data', mStartStr, mEndStr);

    let tempData = ({
      id:               this.theraps.id,
      customDays:       this.theraps.customDays,
      hours:            this.timeDatas,
      media:            images,
      medicineName:     this.theraps.medicineName,
      medicineQty:      this.theraps.medicineQty,
      medicineTakeMode: this.theraps.medicineTakeMode,
      removed:          false,
      noRepeat:         true,
      tsEnd:            mEndStr,
      tsEndStr:         this.rEndDate,
      tsStart:          mStartStr,
      tsStartStr:       this.rStartDate,
      weekDays:         this.therapService.weekDays
    });
    console.log('Updated Therapys Data', tempData);
    this.therapService.updateTheraps(tempData);
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
        this.theraps.media[0] =  cordova.file.dataDirectory + newFileName
      }else if(eventName === "imageB-col small-img"){
        this.theraps.media[1] = cordova.file.dataDirectory + newFileName
      }else if(eventName === "imageC-col small-img"){
        this.theraps.media[2] = cordova.file.dataDirectory + newFileName;
      }else{
        this.theraps.media[3] = cordova.file.dataDirectory + newFileName;
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