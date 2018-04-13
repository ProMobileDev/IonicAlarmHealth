import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
//import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativeStorage } from '@ionic-native/native-storage';
import { TranslateService } from '@ngx-translate/core';
import { LoginPage } from '../pages/Login/login';
import { HomePage } from '../pages/Home/home';
import { TherapService } from '../providers/therap.service';
import { Storage } from '@ionic/storage';
import { Keyboard } from '@ionic-native/keyboard';
export interface PageInterface {
  title: string;
  component: any;
  icon: string;
  logsOut?: boolean;
  index?: number;
  tabComponent?: any;
}

@Component({
  selector: 'page-app',
  templateUrl: 'app.html',
  providers: [Keyboard]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = LoginPage;
  userName:any;
    //-----------Menu Page Array------
    pages : PageInterface[]=[
      { title: 'THERAPY', component: HomePage, icon: 'timer_icon'},
      { title: 'NEW_THERAPY', component: HomePage,icon: 'new_icon'},
      { title: 'PROFILE', component: HomePage, icon: 'profile_icon'},
      { title: 'OPTIONS', component: HomePage, icon: 'option_icon'},
      { title: 'OTHER_VOICE', component: HomePage, icon: 'other_voice_icon'},
      { title: 'SUPPORT', component: HomePage, icon: 'phone_icon'},
      { title: 'LOGOUT', component: LoginPage, icon: 'logout_icon'}
     
    ];

  constructor(
    public events: Events,
    public platform: Platform, 
    //public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public nativeStorage: NativeStorage,
    public therapService: TherapService,
    public translateService: TranslateService,
    public storage: Storage,
    private keyboard: Keyboard){
        
      this.platform.ready().then(() => {        
        this.getUserInfo();
        // Splach Screen Hidden
        setTimeout(() => {
          this.splashScreen.hide();
          
        }, 100);
        this.keyboard.disableScroll(false);
        // Translate Services
        this.translateService.setDefaultLang('en');
        this.translateService.use('en');  
        
      });

      this.listenToLoginEvents();
  }
  listenToLoginEvents(){
    this.events.subscribe('user:login', (data: any) => {
      console.log('userLogin');
      this.userName = data.username;
      this.translateService.use(data.lang);
      this.nav.setRoot(HomePage);
  
    });
    this.events.subscribe('user:signup', (data: string) => {
      console.log('userSignup');
      this.userName = data;
      this.nav.setRoot(HomePage);
      
    });
  }
  
  // if admin token is exist, getting userinformation..
  getUserInfo(){
    this.therapService.getUser().then((value)=>{
      console.log('userData', value);
      if(value == null){
        console.log('User Information does not exist!')
        this.therapService.setAdminToken();
        this.rootPage = LoginPage;
      }else{
        this.userName = value.username;
        this.translateService.use(value.lang);
        this.therapService.login(value);        
      }
    });
  }
  // Getting image name for side menu icoe. 
  getUrl(name:string){
    return 'assets/sidemenu/' + name + '.png';
     
  }
  gotoPage(){
    
  }
  openPage(page: PageInterface) {
    ///\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/    
    if(page.index) {
      if(page.title === 'LOGOUT'){
        this.therapService.logout();
        console.log('Logout');
        this.nav.setRoot(page.component, { tabIndex: page.index });
      }
      
    } else {
      this.nav.setRoot(page.component).catch(() => {
        console.log("Didn't set nav root");
      });
    }
     
  }  
  twLogin(){

  }
  googleLogin(){

  }
  fbLogin(){

  }
}
