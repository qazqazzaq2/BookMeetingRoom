import { Component, OnInit ,Inject} from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';
import { AuthService } from '../auth.service';
import { Observable } from "rxjs";
import {ActivatedRoute} from "@angular/router";
import { ServiceService } from '../Service/service.service';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSidenav} from '@angular/material/sidenav';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { baseUrl } from '../app.component';

export interface DialogData {
roomnames : string;
}


@Component({
  selector: 'app-editroomname',
  templateUrl: './editroomname.component.html',
  styleUrls: ['./editroomname.component.css']
})
export class EditroomnameComponent implements OnInit {
roomnames : string ;
firstname : string;

  constructor(public authService : AuthService, private route:ActivatedRoute, private service : ServiceService,private http: HttpClient,
private router: Router,private _formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: DialogData, public dialogRef: MatDialogRef<EditroomnameComponent>) { }

  ngOnInit() {
   this.roomnames = this.data.roomnames;
    this.firstname = localStorage.getItem('nameid');
  }

ok(){
  if(this.roomnames == '' || this.roomnames == ' '){
    alert("Please check your filled.");
  }else if(this.roomnames == this.data.roomnames){
    this.http.post(baseUrl + '/Editroom/'+this.firstname +'/' + this.data.roomnames+'/' + this.roomnames,{})
                             .subscribe(
                               data => {
                                   console.log('PUT Request is successful');
                                   alert("Edit Success!");
                                   window.location.reload(true);

                               },
                               error => {
                                   console.log('Error', error);
                                    window.location.reload(true);
                               }
                              );
  }else{

    this.service.getAddroomname(this.roomnames).subscribe(data=>{

              if(data != null){
                alert("This room name already exists in the system.");
                this.dialogRef.close();
              }else{
                   this.http.post(baseUrl + '/Editroom/'+this.firstname +'/' + this.data.roomnames+'/' + this.roomnames,{})
                             .subscribe(
                               data => {
                                   console.log('PUT Request is successful');
                                   alert("Edit Success!");
                                   window.location.reload(true);

                               },
                               error => {
                                   console.log('Error', error);
                                    window.location.reload(true);
                               }
                              );

              }

       })

  }
}
cancel(){
  this.dialogRef.close();
}

}
