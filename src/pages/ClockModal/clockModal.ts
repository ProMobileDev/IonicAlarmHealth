import { Component, ViewChild, Renderer } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import * as $ from 'jquery';
@Component({
  selector: 'page-clockModal',
  templateUrl: 'clockModal.html',
})
export class ClockModalPage {
  @ViewChild('myCanvas') canvas: any;

    amElement:any;
    pmElement:any;
    canvasElement:  any;
    centerElement:  any;
    firstX:         number;
    firstY:         number;
    currentColour:  string = '#009688';
  
    hoursView:      any;
    currentHours:   any;
    currentMinutes: any;
    enableAM:       boolean;
    enablePM:      boolean;
    currentTime:    any;

    hoursEnable:    boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController, public renderer: Renderer, public platform: Platform) {

    var tempDate = new Date().toISOString();
    var splitted = tempDate.split("T", 2  );
    var tempHour = splitted[1].split(":", 3);
    this.currentHours = tempHour[0];
    this.currentMinutes = tempHour[1];
    
    this.hoursEnable = true;
    this.enableAM = true;
    this.enablePM = false;
    
  }
  ngAfterViewInit(){
    
    this.canvasElement = this.canvas.nativeElement;
    this.renderer.setElementAttribute(this.canvasElement, 'width', this.platform.width() + '');
    this.renderer.setElementAttribute(this.canvasElement, 'height', this.platform.height() + '');
    this.amElement = document.querySelector('.sel-btnAM');
    if(this.amElement){
      this.amElement.style.color="white";
      this.amElement.style.transform="scale(1.3)";
    } 
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ClockModalPage');
    
  }

  selectTime(){
    this.clearCanvas();
    this.viewCtrl.dismiss(this.currentTime);
  }

  selectAM(event){
    console.log(event);
    this.enableAM = true;
    this.enablePM = false;
    this.releaseHover();
    this.amElement = document.querySelector('.sel-btnAM');
    if(this.amElement){
      this.amElement.style.color="white";
      this.amElement.style.transform="scale(1.3)";
    } 
  }
  selectPM(event){
    this.enableAM = false;
    this.enablePM = true;
    this.releaseHover();
    this.pmElement = document.querySelector('.sel-btnPM');
    if(this.pmElement){
      this.pmElement.style.color="white";
      this.pmElement.style.transform="scale(1.3)";
    } 
  }
  releaseHover(){
    this.clearCanvas();
    this.amElement = document.querySelector('.sel-btnAM');
    if(this.amElement){
      this.amElement.style.color="gray";
      this.amElement.style.transform="scale(1.3)";
    }
    this.pmElement = document.querySelector('.sel-btnPM');
    if(this.pmElement){
      this.pmElement.style.color="gray";
      this.pmElement.style.transform="scale(1.0)";
    }  
  }
  //-------Cancel Set Time------------------------
  cancelTime(event){
    this.clearCanvas();
    this.viewCtrl.dismiss();
  
  }
  //-------Save Set Time------------------------
  saveTime(event){
    this.clearCanvas();
    let hoursData;
    hoursData =  this.currentHours + ":" + this.currentMinutes;
    this.viewCtrl.dismiss(hoursData);
  }

  //------------Change to select Hours face--------------
  hoursSet($event){
    this.hoursEnable = true;
    this.clearCanvas(); 
  }
  //------------Change to select Minutes face--------------
  minuesSet($event){
    this.hoursEnable = false;
    this.clearCanvas(); 
  }

  selectedHours(event){
    this.clearCanvas();
    console.log('event==', event);
    var endPosData = $(event.target).position();
    var evWidth = $(event.target).width();
    var evHeight = $(event.target).height();
    console.log('Event Item Size', evWidth, evHeight);
    let endX = endPosData.left + evWidth/2;
    let endY = endPosData.top + evHeight/2;
    

    console.log('End Position', endX, endY);
    var startPosData=$('.center').position();
    let currentX = startPosData.left + 5;
    let currentY = startPosData.top + 5;

    //----------Line Draw Part-----------------------
    let ctx = this.canvasElement.getContext('2d');
   
    ctx.beginPath();
    ctx.lineJoin = "round";
    ctx.moveTo(currentX, currentY);
    ctx.lineTo(endX, endY);
    ctx.closePath();
    ctx.strokeStyle = this.currentColour;
    ctx.lineWidth = 3;
    ctx.stroke();
    //------------------------------------------------
    
    if(this.enablePM){
      let str = Number(event.target.innerText) + 12;
      this.currentHours = str;
    }else{
      this.currentHours = event.target.innerText;  
    }
       
 
  }
  selectedMinutes(event){
    console.log('Event Target Minutes', event.target.innerText);
    this.clearCanvas();
    
    //----------Line Draw Part-----------------------
    let ctx = this.canvasElement.getContext('2d');
    var posData=$('.center').position();
    let currentX = posData.left + 5;
    let currentY = posData.top + 5;
    
    var endPosData = $(event.target).position();
    var evWidth =$(event.target).width();
    var evHeight = $(event.target).height();

    let endX = endPosData.left + evWidth/2;
    let endY = endPosData.top + evHeight/2;
    
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
  }

  //-----------Cavas Clear Function-------------------------
  deletLine(){
    this.clearCanvas();
  }
  clearCanvas(){
    let ctx = this.canvasElement.getContext('2d');
    ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);  
  }
   
}
