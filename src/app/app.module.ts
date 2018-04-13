import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { NativeStorage } from '@ionic-native/native-storage';
import { MyApp } from './app.component';
//import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Facebook } from '@ionic-native/facebook'
import { TwitterConnect } from '@ionic-native/twitter-connect';
//------------------------------Calendar Module Importing--------------------------------
import { CalendarModule } from "ion2-calendar";
import { Camera } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
//----------------------------Customize Pages--------------------------------------------
import { HomePage } from '../pages/Home/home';
import { LoginPage } from '../pages/Login/login';
import { SignupPage, PopoverPage } from '../pages/Signup/signup';
import { AddAlertPage } from '../pages/AddAlert/addalert';
import { CalendarModalPage } from '../pages/CalendarModal/calendarModal';
import { ClockModalPage } from '../pages/ClockModal/clockModal';
import { EditAlertPage } from '../pages/EditAlert/editAlert';
import { SettingPage } from '../pages/Setting/setting';
import { AlarmModalPage } from '../pages/AlarmModal/alarmModal';
import { TimePickerPage } from '../pages/TimePicker/timePicker';
//----------------------------Translator Module Import------------------------------------
import { TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';
import { LanguageService } from '../providers/language.service';
import { TherapService } from '../providers/therap.service';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { TaggingTextComponent} from '../components/tagging-text/tagging-text';
import { weeklyPopoverPage} from '../components/tagging-text/tagging-text';
import { BackgroundMode } from '@ionic-native/background-mode';
import { NativeAudio } from '@ionic-native/native-audio';
import { Vibration } from '@ionic-native/vibration';
//----------------------------Translator Module Export--------------------------------------
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    PopoverPage,
    AddAlertPage,
    EditAlertPage,
    SettingPage,
    CalendarModalPage,
    ClockModalPage,
    TaggingTextComponent,
    weeklyPopoverPage,
    AlarmModalPage,
    TimePickerPage
  ],
  imports: [
    BrowserModule,
    CalendarModule,
    HttpClientModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
      loader: {
           provide: TranslateLoader,
           useFactory: (createTranslateLoader),
           deps: [HttpClient]
         }
      })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    PopoverPage,
    AddAlertPage,
    EditAlertPage,
    SettingPage,
    CalendarModalPage,
    ClockModalPage,
    TaggingTextComponent,
    weeklyPopoverPage,
    AlarmModalPage,
    TimePickerPage
  ],
  providers: [
    BackgroundMode,
    NativeAudio,
    //StatusBar,
    SplashScreen,
    NativeStorage,
    Facebook,
    TwitterConnect,
    LanguageService,
    Camera,
    Vibration,
    TherapService,
    LocalNotifications,
    File,
    Transfer,
    Camera,
    FilePath,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
