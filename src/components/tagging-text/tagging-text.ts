import { Component, Input} from '@angular/core';
import { NavParams, 
  PopoverController, 
  ViewController} from 'ionic-angular';
import { TherapService } from '../../providers/therap.service';
/*
  Generated class for the TaggingText component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'tagging-text',
  templateUrl: 'tagging-text.html'
})
export class TaggingTextComponent {

@Input('myText') textToUse: any = [];
  text: string;
  values = '';
  optionList = [
    {name:'All Days', state:true},
    {name:'Monday', state:false},
    {name:'Tuesday', state:false},
    {name:'Wednesday', state:false},
    {name:'Thuesday', state:false},
    {name:'Friday', state:false},
    {name:'Saturday', state:false},
    {name:'Sunday', state:false}
  ];
  weekArray:any[];
  constructor(public popoverCtrl: PopoverController,public therapService: TherapService) {
    this.weekArray = [];
    console.log('Taggin Text HomePage');
  }
  ngAfterViewInit(){
    console.log('adsfasdf',this.textToUse);

    if(this.textToUse === []){
      console.log('All Days');
      setTimeout(() => {
        this.initData(0);
      }, 1000);
    }else if(this.textToUse.mon && this.textToUse.tue && this.textToUse.wed && this.textToUse.thu && this.textToUse.fri && this.textToUse.sat && this.textToUse.sun){
      console.log('All Days Not');
      setTimeout(() => {
        this.initData(0);
      }, 1000);
    } 
  }
  public initData(data){
    if(this.checkWeekData(this.optionList[data].name) == false){
      console.log('TagginText Init Data');
      let el = document.querySelector("#textarea #input-txt");
      var refenceNode = el.parentNode;
      var button = document.createElement("daysbutton");
      button.className="mybutton"
      //inserir no button o texto digitado antes da vírgula(-1)
      button.innerText = this.optionList[data].name;
      
      this.optionList[data].state = true;
      this.weekArray.push({
        name: this.optionList[data].name,
        set: true
      });

      this.therapService.activeWeekDays(this.optionList[data].name);
      refenceNode.insertBefore(button, el);
      this.delegate(document, "click", "daysbutton", (event) => {
           
        var weekValue = event.srcElement.innerText
            this.removeWeekData(weekValue);
            this.therapService.deActiveWeekDays(weekValue);
            event.target.style.display = 'none';
      });
    }          
  }
  removeButton(event){

  }
  showOptions($event){
    console.log('Show Option');
    let popover = this.popoverCtrl.create(weeklyPopoverPage, {optList: this.optionList});
    popover.present({
      ev: event
    });
    popover.onDidDismiss(
        data=>{
          this.initData(data);
    });
  }
  checkWeekData(data:any){
    let value = false;
    for(let i = 0; i< this.weekArray.length; i++){
      if(this.weekArray[i].name == data){
        value = true;
      }
    }

    return value;
  }
  removeWeekData(data:any){ 
    console.log('before data', this.weekArray);
    if(this.checkWeekData(data)){
      for(let i = 0; i < this.weekArray.length; i++){
        if(this.weekArray[i].name == data){
          this.weekArray.splice(i, 1);
          console.log('removed Item');
        }
      }
    }
    console.log('after data', this.weekArray);
  }
  delegate(el, evt, sel, handler) {
      el.addEventListener(evt, (event) => {
        var t = event.target.localName;
          while (t && t !== this) {
          if (t==sel) {
            handler.call(t, event);
          }
          t = t.parentNode;
        }
      });
 }

}
@Component({
  selector: 'tagging-text-pop',
  template:`<ion-list >
              <ion-item class="feedback-item"  *ngFor="let item of optionList; let i = index">
                <ion-label (click)="selectItem(item)">{{item.name}}</ion-label>
                <ion-radio value="item.name" [checked]="item.state" (ionSelect)="selectItem(i)"></ion-radio>
              </ion-item>         
            </ion-list>` 
})

export class weeklyPopoverPage {
  m_selectItem:any;
  days: string = "all"; 
  optionList:any;
  constructor(public params:NavParams, public viewCtrl: ViewController){
    this.optionList = this.params.get('optList')
    this.m_selectItem = this.params.get('item');
    // this.m_selectItem = 'All Days';
    // console.log('adfasdfasdfasdfasd', this.m_selectItem);
  }
  selectItem(index:any){
     
    for(let i = 0; i< this.optionList.length; i++){
      this.optionList[i].state = false;
    }
    this.m_selectItem = this.optionList[index];
    this.viewCtrl.dismiss(index);
  }
}

