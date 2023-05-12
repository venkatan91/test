import { DatePipe, formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  selectedDate!: Date;
  today!: Date;
  yesterday!: Date;
  tenDaysAgo!: Date;
  oneYearAgo!: Date;
  showList: boolean = false;
  maxDate:any;
  minDate:any;
  submitted:boolean = false;
  constructor(private modalController: ModalController, private datePipe: DatePipe) {
    this.maxDate =  new Date(new Date().setFullYear(new Date().getFullYear() + 5)).toISOString();
    this.minDate =  new Date(new Date().setDate(new Date().getDate() + 1)).toISOString();
  }

  ionViewDidEnter() {
    
  }
 
  submitForm(){
    this.submitted = true;
    this.today = new Date(); 
    this.yesterday = new Date(new Date().setDate(new Date().getDate() - 1)); 
    this.tenDaysAgo = (this.selectedDate) && this.canculateBeforeDateByDay(new Date(this.selectedDate), 10);
    this.oneYearAgo = (this.selectedDate) && this.canculateBeforeYearByDay(new Date(this.selectedDate), 1); 
  }

  canculateBeforeDateByDay(date:Date,day:number):Date{
      date.setDate(date.getDate() - day);
      return date;
  }

  canculateBeforeYearByDay(date:Date, num:number){
    date.setFullYear(date.getFullYear() - num);
    return date;
  }

  
}
