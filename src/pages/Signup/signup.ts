import { Component } from '@angular/core';
import { NavController, NavParams, Events, Loading, PopoverController, ViewController, AlertController, LoadingController} from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from "../../providers/language.service";
import { LanguageModel } from "../../models/language.model";
import { TherapService } from '../../providers/therap.service';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  message: any;
  public loading:Loading;
  userInfo = {
    username:'',
    password:'',
    language:'',
    nation:'',
    city:'',
    birthday:'',
  }
  
  languageSelected : any = 'it';
  languages : Array<LanguageModel>;
  
  constructor(
      public navCtrl:         NavController, 
      public navParams:       NavParams,
      public events:          Events, 
      public popoverCtrl:     PopoverController,
      public alertCtrl:       AlertController,
      public loadingCtrl:     LoadingController, 
      public translate:       TranslateService,
      public languageService: LanguageService,
      public therapService:   TherapService
  ){
      this.languages = this.languageService.getLanguages();
      this.setLanguage();
      this.message = '';
      this.events.subscribe('user:signup_error', (data: any) => {
        this.message = data;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
    this.translate.get('OTHER_VOICE').subscribe(
      value => {
        // value is our translated string
        let alertTitle = value;
        console.log('Translate Value==', alertTitle);
      }
    )
  }

  setLanguage(){
    let defaultLanguage = this.translate.getDefaultLang();
    if(this.languageSelected){
      this.translate.setDefaultLang(this.languageSelected);
      this.translate.use(this.languageSelected);
    }else{
      this.languageSelected = defaultLanguage;
      this.translate.use(defaultLanguage);
    }
  }
  showLanguageList(event){
    console.log("clicked showlist button!");
     
    let popover = this.popoverCtrl.create(PopoverPage, {item:'lang'});
    popover.present({
      ev: event
    });
    popover.onDidDismiss(
        data=>{
          if(data)
            this.userInfo.language = data;
            this.languageSelected = data;
            this.setLanguage();
    });
  }
  showNationList(event){
    console.log("clicked showlist button!");
     
    let popover = this.popoverCtrl.create(PopoverPage, {item:'nation'});
    popover.present({
      ev: event
    });
    popover.onDidDismiss(
        data=>{
          if(data)
            this.userInfo.nation = data;
    });
  }
  showCityList(event){
    console.log("clicked showlist button!");
     
    let popover = this.popoverCtrl.create(PopoverPage, {item:'city'});
    popover.present({
      ev: event
    });
    popover.onDidDismiss(
        data=>{
          if(data)
            this.userInfo.city = data;
    });
  }

  gotoLogin(){
    this.navCtrl.popToRoot();
  }

  //------------------------------Create a User - app ---------------------------------
  register(){
    if(!this.userInfo.username || !this.userInfo.password || !this.userInfo.language || !this.userInfo.nation || !this.userInfo.city || !this.userInfo.birthday ){
      let alert = this.alertCtrl.create({
        message: 'Please Inset Valid Value to Register',
          buttons: [
            {
              text: "Ok",
              role: 'cancel'
            }
          ]
        });
        alert.present();
    }
    this.therapService.signupCustomer(this.userInfo);
    setTimeout(() => {
      console.log("The Message======Signup", this.message);
      if(this.message){
        this.loading.dismiss().then( () => {
          let alert = this.alertCtrl.create({
            message: this.message,
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
        content:'Please Wait...',
        dismissOnPageChange: true,
    });
    this.loading.present();
  }

}

@Component({
  template:`<ion-list radio-group>
              <ion-item class="feedback-item" *ngFor="let item of optionList;">
                <ion-label>{{item}}</ion-label>
                <ion-radio [checked]="item===m_selectItem" value="{{item}}" (click)="selectItem(item)"></ion-radio>
              </ion-item>         
            </ion-list>` 
})
export class PopoverPage {
  m_selectItem:any;
  optionList: any[];
  languageList = [
    'en', 'it','ru'
  ]
  nationList = [
    'Italian', 'England', 'Russian'
  ]
  cityList = [
    'Roma', 'Milan','Naples', 'Turin', 'Palermo'
  ]
  
  constructor(public params:NavParams, public viewCtrl: ViewController){
    this.m_selectItem = this.params.get('item');
    this.checkListItem();
  }
  checkListItem(){
    if(this.m_selectItem =="lang"){
      this.optionList = this.languageList;
    }else if(this.m_selectItem == "nation"){
      this.optionList = this.nationList
    }else if(this.m_selectItem =='city'){
      this.optionList = this.cityList;
    }
  }
  selectItem(item:any){
    // this.m_selectItem = item;
    this.viewCtrl.dismiss(item);
  }
}

 