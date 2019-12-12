import { Component, OnInit ,ViewChild ,Inject} from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';
import { AuthService } from '../auth.service';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { NativeDateAdapter, DateAdapter, MAT_DATE_FORMATS } from "@angular/material";
import { ServiceService } from '../Service/service.service';
import {FormControl} from '@angular/forms';
import {MatSidenav} from '@angular/material/sidenav';
import {  MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpClient} from '@angular/common/http';

export interface DialogData {
room: string;
time : string;
date : String;
atten : String;
topic : String;
remark : String;
totime : String;
tel : String;
}


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
public API = '//localhost:8080/';   //for test
//public API = 'http://192.168.1.47:8080/BookMeetingRoom';  //for build
  constructor(public authService : AuthService , private router: Router , private service : ServiceService,public dialog: MatDialog,
  @Inject(MAT_DIALOG_DATA) public data: DialogData, public dialogRef: MatDialogRef<CheckoutComponent>, private http: HttpClient) { }

  ngOnInit() {

  }

closed(){
    this.dialogRef.close();
}

checkOut(){

   this.http.post(this.API + '/Checkout/'+this.data.date+'/'+this.data.room+'/'+this.data.time+'/'+new Date().getHours()+'/'+new Date().getMinutes(),{})
                             .subscribe(
                               data => {
                                   console.log('PUT Request is successful');
                                   alert("Checkout Success!");
                                   window.location.reload(true);
                               },
                               error => {
                                   console.log('Error', error);
                               }
                              );
}

}