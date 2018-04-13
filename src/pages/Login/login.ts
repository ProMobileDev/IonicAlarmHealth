import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, LoadingController, Loading, AlertController } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { TwitterConnect } from '@ionic-native/twitter-connect';
import { SignupPage } from '../Signup/signup';
import { TherapService } from '../../providers/therap.service';
import { Storage } from '@ionic/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidator } from '../../validators/email';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  FB_APP_ID:        number = 897890287041798;
  userReady:        boolean = false;
  userName:         any;
  password:         any;
  message:          any;
  
  public loginForm: FormGroup;
  public loading:   Loading;

  constructor(
    public navCtrl:       NavController, 
    public navParams:     NavParams,
    public events:        Events,
    public formBuilder:   FormBuilder,
    public loadingCtrl:   LoadingController,
    public alertCtrl:     AlertController,
    public fb:            Facebook,
    public tw:            TwitterConnect,
    public therapService: TherapService,
    public storage:       Storage){

      this.fb.browserInit(this.FB_APP_ID, "v2.8");
      this.loginForm = formBuilder.group({
        email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
        password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
      });
      
      this.message ='';
      this.events.subscribe('user:login_error', (data: any) => {
        this.message = data;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  ionViewCanEnter(){
 
	}
//---------Twitter Login and Logout------------------------------------
  twitterLgoin(){
     
    
    let self = this;
    let loading = this.loadingCtrl.create({
      content: 'Connecting twitter...'
    });
    loading.present();
		
    //Request for login
    this.tw.login().then(function(result) {
      loading.dismiss().then( () => {
        //Get user data
        self.tw.showUser().then(function(user){
          console.log('Twitter User data!', user); 
          let userInfo = {
            username: user.name,
            password: user.id
          }
          console.log('loginWithTwitter Information', userInfo); 
          this.therapService.login(userInfo);
        }, function(error){
          console.log(error);
        });
      });
      
    }, function(error){
      loading.dismiss();
      console.log('twitter login error:',error);
    });
  }
  public twitterLogout(){
    let nav = this.navCtrl;
		let self = this;
    this.tw.logout().then(function(response)
    {
      self.storage.remove('user');
      nav.push(LoginPage);
    }, function (error) {
      console.log(error);
    });
  }
//---------Facebook Login and Logout------------------------------------  
  public facebookLgoin(){
    let permissions = new Array<string>();
    
    let self = this;
    let loading = this.loadingCtrl.create({
      content: 'Connecting facebook...'
    });

    loading.present();
    //the permissions your facebook app needs from the user
    permissions = ["public_profile"];
    this.fb.login(permissions).then(function(response){
      this.loading.dismiss().then( () =>{
        let userId = response.authResponse.userID;
        let params = new Array<string>();
        
        //Getting name and gender properties
        self.fb.api("/me?fields=name,gender", params).then(function(user) {
          user.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
          console.log('facebook user information', user);
          let userInfo = {
            username: user.name,
            password: userId
          }
          console.log('loginWithFB Information', userInfo); 
          this.therapService.login(userInfo);
      })
      });
      
    }, function(error){
      loading.dismiss();
      console.log('facebook login error:',error);
    });
  }
  facebookLogout(){
      var nav = this.navCtrl;
      this.fb.logout()
      .then(function(response) {
         
        nav.setRoot(LoginPage);
      }, function(error){
        console.log(error);
      });
     
  }
//---------User Login ------------------------------------
  accept(){
    console.log('Login Button Clicked');
    if (this.loginForm.value.email == '' || this.loginForm.value.password == ''){
      console.log(this.loginForm.value);
      let alert = this.alertCtrl.create({
        message: 'Please Input Empty Value',
          buttons: [
            {
              text: "Ok",
              role: 'cancel'
            }
          ]
        });
        alert.present();
       
    }else {
      let userInfo = {
        username: this.loginForm.value.email,
        password: this.loginForm.value.password
      }
      console.log('login Information', userInfo); 
      this.therapService.login(userInfo);
      setTimeout(() => {
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
  register(){
    console.log('Register Button Clicked');
    let nav = this.navCtrl;
    nav.push(SignupPage);
  }
}
