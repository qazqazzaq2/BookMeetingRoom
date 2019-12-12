import{Component, OnInit ,ElementRef, ViewChild}from '@angular/core';
import {AuthService}from '../auth.service';
import {Observable}from "rxjs";
import {Router}from '@angular/router';
import {ServiceService}from '../Service/service.service';
import {DashboardService}from './dashboard.service';
import {ActivatedRoute}from "@angular/router";
import {MatSidenav}from '@angular/material/sidenav';
@Component({
selector: 'app-dashboardtable',
templateUrl: './dashboardtable.component.html',
styleUrls: ['./dashboardtable.component.css']
})
export class DashboardtableComponent implements OnInit {
@ViewChild('sidenav', {static: false}) sidenav: MatSidenav;

isLoggedIn : Observable < boolean>;
isLoggedInAdmin : Observable < boolean>;
isLoggedInHR : Observable < boolean>;

dddays : Array <any>;
dateFull:any = {}
report : Array < any>;
dateStart: String;
dateEnd: String;
counting: number ;
dayofmonth30 : boolean;
dayofmonth28 : boolean;
feb28 : boolean = true;
dateSelectMonth: Array < any>;
day1 : String ;
day2 : String ;
day3 : String ;
day4 : String ;
day5 : String ;
day6 : String ;
day7 : String ;
day8 : String ;
day9: String ;
day10 : String ;
day11 : String ;
day12 : String ;
day13 : String ;
day14 : String ;
day15 : String ;
day16 : String ;
day17 : String ;
day18 : String ;
day19 : String ;
day20 : String ;
day21 : String ;
day22 : String ;
day23 : String ;
day24 : String ;
day25 : String ;
day26 : String ;
day27 : String ;
day28 : String ;
day29 : String ;
day30 : String ;
day31 : String ;

events1: any[] = [];
events2: any[] = [];
events3: any[] = [];
events4: any[] = [];
events5: any[] = [];
events6: any[] = [];
events7: any[] = [];
events8: any[] = [];
events9: any[] = [];
events10: any[] = [];
events11: any[] = [];
events12: any[] = [];
events13: any[] = [];
events14: any[] = [];
events15: any[] = [];
events16: any[] = [];
events17: any[] = [];
events18: any[] = [];
events19: any[] = [];
events20: any[] = [];
events21: any[] = [];
events22: any[] = [];
events23: any[] = [];
events24: any[] = [];
events25: any[] = [];
events26: any[] = [];
events27: any[] = [];
events28: any[] = [];
events29: any[] = [];
events30: any[] = [];
events31: any[] = [];
roomnames : Array<any>;
CurrentTime: any;
numroom : number;
constructor(public authService : AuthService , private router: Router, private service : ServiceService,
   private route:ActivatedRoute , private dashboardService : DashboardService) {
        this.isLoggedIn = authService.isLoggedIn();
        this.isLoggedInAdmin = authService.isLoggedInAdmin();
        this.isLoggedInHR = authService.isLoggedInHR();

         setInterval(() => {
      this.CurrentTime = new Date().getHours() + ':' + new Date().getMinutes() + ':'+  new Date().getSeconds()
      }, 1);





   }

close() {
    this.sidenav.close();
  }

  ngOnInit() {

    this.service.getRoomname().subscribe(data => {
                                     this.roomnames = data;
                                   // console.log(this.roomnames);
                                    this.numroom = data.length;
                                     this.dddays = Array(31* this.numroom); // [4,4,4,4,4]

                                    this.appendRoomname();
                                   });


    this.route.params.subscribe(prams=>{
                this.dateFull = prams;
                this.dateStart = this.dateFull.dateStart;
                this.dateEnd = this.dateFull.dateEnd;
                //console.log(this.dateFull);
              })

    this.service.getDateDashBoard(this.dateStart , this.dateEnd).subscribe(data=>{
       this.report = data;
        console.log(data);
       this.appendTime();
    })

this.dateSelectMonth = this.dateFull.dateStart.split("-");

    if( this.dateSelectMonth[1] == '02'){
        if(this.dateSelectMonth[0] == '2019' || this.dateSelectMonth[0] == '2021' || this.dateSelectMonth[0] == '2022' || this.dateSelectMonth[0] == '2025' || this.dateSelectMonth[0] == '2026' || this.dateSelectMonth[0] == '2027' || this.dateSelectMonth[0] == '2029')
        this.feb28 = false;
        this.dayofmonth28 = false;
        this.dayofmonth30 = false;
    }
    else if(this.dateSelectMonth[1] == '01' || this.dateSelectMonth[1] == '03' ||  this.dateSelectMonth[1] == '05' || this.dateSelectMonth[1] == '07' || this.dateSelectMonth[1] == '08' || this.dateSelectMonth[1] == '10' || this.dateSelectMonth[1] == '12'){
        this.dayofmonth30 = true;
        this.dayofmonth28 = false;
    }else{
        this.dayofmonth30 = false;
        this.dayofmonth28 = true;
    }

     const date1 = new Date(this.dateFull.year+'/'+this.dateFull.month+'/01');
     const date2 = new Date(this.dateFull.year+'/'+this.dateFull.month+'/02');
     const date3 = new Date(this.dateFull.year+'/'+this.dateFull.month+'/03');
     const date4 = new Date(this.dateFull.year+'/'+this.dateFull.month+'/04');
     const date5 = new Date(this.dateFull.year+'/'+this.dateFull.month+'/05');
     const date6 = new Date(this.dateFull.year+'/'+this.dateFull.month+'/06');
     const date7 = new Date(this.dateFull.year+'/'+this.dateFull.month+'/07');
     const date8 = new Date(this.dateFull.year+'/'+this.dateFull.month+'/08');
     const date9 = new Date(this.dateFull.year+'/'+this.dateFull.month+'/09');
     const date10 = new Date(this.dateFull.year+'/'+this.dateFull.month+'/10');
     const date11 = new Date(this.dateFull.year+'/'+this.dateFull.month+'/11');
     const date12 = new Date(this.dateFull.year+'/'+this.dateFull.month+'/12');
     const date13 = new Date(this.dateFull.year+'/'+this.dateFull.month+'/13');
     const date14 = new Date(this.dateFull.year+'/'+this.dateFull.month+'/14');
     const date15 = new Date(this.dateFull.year+'/'+this.dateFull.month+'/15');
     const date16 = new Date(this.dateFull.year+'/'+this.dateFull.month+'/16');
     const date17 = new Date(this.dateFull.year+'/'+this.dateFull.month+'/17');
     const date18 = new Date(this.dateFull.year+'/'+this.dateFull.month+'/18');
     const date19 = new Date(this.dateFull.year+'/'+this.dateFull.month+'/19');
     const date20 = new Date(this.dateFull.year+'/'+this.dateFull.month+'/20');
     const date21 = new Date(this.dateFull.year+'/'+this.dateFull.month+'/21');
     const date22 = new Date(this.dateFull.year+'/'+this.dateFull.month+'/22');
     const date23 = new Date(this.dateFull.year+'/'+this.dateFull.month+'/23');
     const date24 = new Date(this.dateFull.year+'/'+this.dateFull.month+'/24');
     const date25 = new Date(this.dateFull.year+'/'+this.dateFull.month+'/25');
     const date26 = new Date(this.dateFull.year+'/'+this.dateFull.month+'/26');
     const date27 = new Date(this.dateFull.year+'/'+this.dateFull.month+'/27');
     const date28 = new Date(this.dateFull.year+'/'+this.dateFull.month+'/28');
     const date29 = new Date(this.dateFull.year+'/'+this.dateFull.month+'/29');
     const date30 = new Date(this.dateFull.year+'/'+this.dateFull.month+'/30');
     const date31 = new Date(this.dateFull.year+'/'+this.dateFull.month+'/31');
      this.day1 = date1.getDay().toString();
      if(this.day1 == '0')this.day1='Sunday';else if(this.day1 == '1')this.day1='Monday';else if(this.day1 == '2')this.day1='Tuesday';else if(this.day1 == '3')this.day1='Wednesday';
      else if(this.day1 == '4')this.day1='Thursday';else if(this.day1 == '5')this.day1='Friday';else this.day1='Saturday';

      this.day2 = date2.getDay().toString();
      if(this.day2 == '0')this.day2='Sunday';else if(this.day2 == '1')this.day2='Monday';else if(this.day2 == '2')this.day2='Tuesday';else if(this.day2 == '3')this.day2='Wednesday';
      else if(this.day2 == '4')this.day2='Thursday';else if(this.day2 == '5')this.day2='Friday';else this.day2='Saturday';

      this.day3 = date3.getDay().toString();
      if(this.day3 == '0')this.day3='Sunday';else if(this.day3 == '1')this.day3='Monday';else if(this.day3 == '2')this.day3='Tuesday';else if(this.day3 == '3')this.day3='Wednesday';
      else if(this.day3 == '4')this.day3='Thursday';else if(this.day3 == '5')this.day3='Friday';else this.day3='Saturday';

      this.day4 = date4.getDay().toString();
      if(this.day4 == '0')this.day4='Sunday';else if(this.day4 == '1')this.day4='Monday';else if(this.day4 == '2')this.day4='Tuesday';else if(this.day4 == '3')this.day4='Wednesday';
      else if(this.day4 == '4')this.day4='Thursday';else if(this.day4 == '5')this.day4='Friday';else this.day4='Saturday';

      this.day5 = date5.getDay().toString();
      if(this.day5 == '0')this.day5='Sunday';else if(this.day5 == '1')this.day5='Monday';else if(this.day5 == '2')this.day5='Tuesday';else if(this.day5 == '3')this.day5='Wednesday';
      else if(this.day5 == '4')this.day5='Thursday';else if(this.day5 == '5')this.day5='Friday';else this.day5='Saturday';

      this.day6 = date6.getDay().toString();
      if(this.day6 == '0')this.day6='Sunday';else if(this.day6 == '1')this.day6='Monday';else if(this.day6 == '2')this.day6='Tuesday';else if(this.day6 == '3')this.day6='Wednesday';
      else if(this.day6 == '4')this.day6='Thursday';else if(this.day6 == '5')this.day6='Friday';else this.day6='Saturday';


      this.day7 = date7.getDay().toString();
      if(this.day7 == '0')this.day7='Sunday';else if(this.day7 == '1')this.day7='Monday';else if(this.day7 == '2')this.day7='Tuesday';else if(this.day7 == '3')this.day7='Wednesday';
      else if(this.day7 == '4')this.day7='Thursday';else if(this.day7 == '5')this.day7='Friday';else this.day7='Saturday';

      this.day8 = date8.getDay().toString();
      if(this.day8 == '0')this.day8='Sunday';else if(this.day8 == '1')this.day8='Monday';else if(this.day8 == '2')this.day8='Tuesday';else if(this.day8 == '3')this.day8='Wednesday';
      else if(this.day8 == '4')this.day8='Thursday';else if(this.day8 == '5')this.day8='Friday';else this.day8='Saturday';

      this.day9 = date9.getDay().toString();
      if(this.day9 == '0')this.day9='Sunday';else if(this.day9 == '1')this.day9='Monday';else if(this.day9 == '2')this.day9='Tuesday';else if(this.day9 == '3')this.day9='Wednesday';
      else if(this.day9 == '4')this.day9='Thursday';else if(this.day9 == '5')this.day9='Friday';else this.day9='Saturday';

      this.day10 = date10.getDay().toString();
      if(this.day10 == '0')this.day10='Sunday';else if(this.day10 == '1')this.day10='Monday';else if(this.day10 == '2')this.day10='Tuesday';else if(this.day10 == '3')this.day10='Wednesday';
      else if(this.day10 == '4')this.day10='Thursday';else if(this.day10 == '5')this.day10='Friday';else this.day10='Saturday';

      this.day11 = date11.getDay().toString();
      if(this.day11 == '0')this.day11='Sunday';else if(this.day11 == '1')this.day11='Monday';else if(this.day11 == '2')this.day11='Tuesday';else if(this.day11 == '3')this.day11='Wednesday';
      else if(this.day11 == '4')this.day11='Thursday';else if(this.day11 == '5')this.day11='Friday';else this.day10='Saturday';

      this.day12 = date12.getDay().toString();
      if(this.day12 == '0')this.day12='Sunday';else if(this.day12 == '1')this.day12='Monday';else if(this.day12 == '2')this.day12='Tuesday';else if(this.day12 == '3')this.day12='Wednesday';
      else if(this.day12 == '4')this.day12='Thursday';else if(this.day12 == '5')this.day12='Friday';else this.day12='Saturday';

      this.day13 = date13.getDay().toString();
      if(this.day13 == '0')this.day13='Sunday';else if(this.day13 == '1')this.day13='Monday';else if(this.day13 == '2')this.day13='Tuesday';else if(this.day13 == '3')this.day13='Wednesday';
      else if(this.day13 == '4')this.day13='Thursday';else if(this.day13 == '5')this.day13='Friday';else this.day13='Saturday';

      this.day14 = date14.getDay().toString();
      if(this.day14 == '0')this.day14='Sunday';else if(this.day14 == '1')this.day14='Monday';else if(this.day14 == '2')this.day14='Tuesday';else if(this.day14 == '3')this.day14='Wednesday';
      else if(this.day14 == '4')this.day14='Thursday';else if(this.day14 == '5')this.day14='Friday';else this.day14='Saturday';

      this.day15 = date15.getDay().toString();
      if(this.day15 == '0')this.day15='Sunday';else if(this.day15 == '1')this.day15='Monday';else if(this.day15 == '2')this.day15='Tuesday';else if(this.day15 == '3')this.day15='Wednesday';
      else if(this.day15 == '4')this.day15='Thursday';else if(this.day15 == '5')this.day15='Friday';else this.day15='Saturday';

      this.day16 = date16.getDay().toString();
      if(this.day16 == '0')this.day16='Sunday';else if(this.day16 == '1')this.day16='Monday';else if(this.day16 == '2')this.day16='Tuesday';else if(this.day16 == '3')this.day16='Wednesday';
      else if(this.day16 == '4')this.day16='Thursday';else if(this.day16 == '5')this.day16='Friday';else this.day16='Saturday';

      this.day17 = date17.getDay().toString();
      if(this.day17 == '0')this.day17='Sunday';else if(this.day17 == '1')this.day17='Monday';else if(this.day17 == '2')this.day17='Tuesday';else if(this.day17 == '3')this.day17='Wednesday';
      else if(this.day17 == '4')this.day17='Thursday';else if(this.day17 == '5')this.day17='Friday';else this.day17='Saturday';

      this.day18 = date18.getDay().toString();
      if(this.day18 == '0')this.day18='Sunday';else if(this.day18 == '1')this.day18='Monday';else if(this.day18 == '2')this.day18='Tuesday';else if(this.day18 == '3')this.day18='Wednesday';
      else if(this.day18 == '4')this.day18='Thursday';else if(this.day18 == '5')this.day18='Friday';else this.day18='Saturday';

      this.day19 = date19.getDay().toString();
      if(this.day19 == '0')this.day19='Sunday';else if(this.day19 == '1')this.day19='Monday';else if(this.day19 == '2')this.day19='Tuesday';else if(this.day19 == '3')this.day19='Wednesday';
      else if(this.day19 == '4')this.day19='Thursday';else if(this.day19 == '5')this.day19='Friday';else this.day19='Saturday';

      this.day20 = date20.getDay().toString();
      if(this.day20 == '0')this.day20='Sunday';else if(this.day20 == '1')this.day20='Monday';else if(this.day20 == '2')this.day20='Tuesday';else if(this.day20 == '3')this.day20='Wednesday';
      else if(this.day20 == '4')this.day20='Thursday';else if(this.day20 == '5')this.day20='Friday';else this.day20='Saturday';

      this.day21 = date21.getDay().toString();
      if(this.day21 == '0')this.day21='Sunday';else if(this.day21 == '1')this.day21='Monday';
      else if(this.day21 == '2')this.day21='Tuesday';else if(this.day21 == '3')this.day21='Wednesday';
      else if(this.day21 == '4')this.day21='Thursday';else if(this.day21 == '5')this.day21='Friday';else this.day21='Saturday';

      this.day22 = date22.getDay().toString();
      if(this.day22 == '0')this.day22='Sunday';else if(this.day22 == '1')this.day22='Monday';
      else if(this.day22 == '2')this.day22='Tuesday';else if(this.day22 == '3')this.day22='Wednesday';
      else if(this.day22 == '4')this.day22='Thursday';else if(this.day22 == '5')this.day22='Friday';else this.day22='Saturday';

      this.day23 = date23.getDay().toString();
      if(this.day23 == '0')this.day23='Sunday';else if(this.day23 == '1')this.day23='Monday';
      else if(this.day23 == '2')this.day23='Tuesday';else if(this.day23 == '3')this.day23='Wednesday';
      else if(this.day23 == '4')this.day23='Thursday';else if(this.day23 == '5')this.day23='Friday';else this.day23='Saturday';

      this.day24 = date24.getDay().toString();
      if(this.day24 == '0')this.day24='Sunday';else if(this.day24 == '1')this.day24='Monday';
      else if(this.day24 == '2')this.day24='Tuesday';else if(this.day24 == '3')this.day24='Wednesday';
      else if(this.day24 == '4')this.day24='Thursday';else if(this.day24 == '5')this.day24='Friday';else this.day24='Saturday';

      this.day25 = date25.getDay().toString();
      if(this.day25 == '0')this.day25='Sunday';else if(this.day25 == '1')this.day25='Monday';
      else if(this.day25 == '2')this.day25='Tuesday';else if(this.day25 == '3')this.day25='Wednesday';
      else if(this.day25 == '4')this.day25='Thursday';else if(this.day25 == '5')this.day25='Friday';else this.day25='Saturday';

      this.day26 = date26.getDay().toString();
      if(this.day26 == '0')this.day26='Sunday';else if(this.day26 == '1')this.day26='Monday';
      else if(this.day26 == '2')this.day26='Tuesday';else if(this.day26 == '3')this.day26='Wednesday';
      else if(this.day26 == '4')this.day26='Thursday';else if(this.day26 == '5')this.day26='Friday';else this.day26='Saturday';

      this.day27 = date27.getDay().toString();
      if(this.day27 == '0')this.day27='Sunday';else if(this.day27 == '1')this.day27='Monday';
      else if(this.day27 == '2')this.day27='Tuesday';else if(this.day27 == '3')this.day27='Wednesday';
      else if(this.day27 == '4')this.day27='Thursday';else if(this.day27 == '5')this.day27='Friday';else this.day27='Saturday';

      this.day28 = date28.getDay().toString();
      if(this.day28 == '0')this.day28='Sunday';else if(this.day28 == '1')this.day28='Monday';
      else if(this.day28 == '2')this.day28='Tuesday';else if(this.day28 == '3')this.day28='Wednesday';
      else if(this.day28 == '4')this.day28='Thursday';else if(this.day28 == '5')this.day28='Friday';else this.day28='Saturday';

      this.day29 = date29.getDay().toString();
      if(this.day29 == '0')this.day29='Sunday';else if(this.day29 == '1')this.day29='Monday';
      else if(this.day29 == '2')this.day29='Tuesday';else if(this.day29 == '3')this.day29='Wednesday';
      else if(this.day29 == '4')this.day29='Thursday';else if(this.day29 == '5')this.day29='Friday';else this.day29='Saturday';

      this.day30 = date30.getDay().toString();
      if(this.day30 == '0')this.day30='Sunday';else if(this.day30 == '1')this.day30='Monday';
      else if(this.day30 == '2')this.day30='Tuesday';else if(this.day30 == '3')this.day30='Wednesday';
      else if(this.day30 == '4')this.day30='Thursday';else if(this.day30 == '5')this.day30='Friday';else this.day30='Saturday';

      this.day31 = date31.getDay().toString();
      if(this.day31 == '0')this.day31='Sunday';else if(this.day31 == '1')this.day31='Monday';
      else if(this.day31 == '2')this.day31='Tuesday';else if(this.day31 == '3')this.day31='Wednesday';
      else if(this.day31 == '4')this.day31='Thursday';else if(this.day31 == '5')this.day31='Friday';else this.day31='Saturday';

  }


  appendRoomname(){
    for(let i = 0 ; i < this.roomnames.length ; i++){
        this.events1.push(new Array());
        this.events2.push(new Array());
        this.events3.push(new Array());
        this.events4.push(new Array());
        this.events5.push(new Array());
        this.events6.push(new Array());
        this.events7.push(new Array());
        this.events8.push(new Array());
        this.events9.push(new Array());
        this.events10.push(new Array());
        this.events11.push(new Array());
        this.events12.push(new Array());
        this.events13.push(new Array());
        this.events14.push(new Array());
        this.events15.push(new Array());
        this.events16.push(new Array());
        this.events17.push(new Array());
        this.events18.push(new Array());
        this.events19.push(new Array());
        this.events20.push(new Array());
        this.events21.push(new Array());
        this.events22.push(new Array());
        this.events23.push(new Array());
        this.events24.push(new Array());
        this.events25.push(new Array());
        this.events26.push(new Array());
        this.events27.push(new Array());
        this.events28.push(new Array());
        this.events29.push(new Array());
        this.events30.push(new Array());
        this.events31.push(new Array());

      for(let j = 0 ; j < 19 ; j++){

        if(j == 0){
          this.events1[i].push([j,'08.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events2[i].push([j,'08.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events3[i].push([j,'08.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events4[i].push([j,'08.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events5[i].push([j,'08.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events6[i].push([j,'08.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events7[i].push([j,'08.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events8[i].push([j,'08.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events9[i].push([j,'08.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events10[i].push([j,'08.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events11[i].push([j,'08.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events12[i].push([j,'08.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events13[i].push([j,'08.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events14[i].push([j,'08.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events15[i].push([j,'08.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events16[i].push([j,'08.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events17[i].push([j,'08.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events18[i].push([j,'08.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events19[i].push([j,'08.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events20[i].push([j,'08.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events21[i].push([j,'08.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events22[i].push([j,'08.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events23[i].push([j,'08.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events24[i].push([j,'08.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events25[i].push([j,'08.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events26[i].push([j,'08.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events27[i].push([j,'08.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events28[i].push([j,'08.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events29[i].push([j,'08.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events30[i].push([j,'08.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events31[i].push([j,'08.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);

        }else if(j == 1){
          this.events1[i].push([j,'08.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events2[i].push([j,'08.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events3[i].push([j,'08.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events4[i].push([j,'08.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events5[i].push([j,'08.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events6[i].push([j,'08.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events7[i].push([j,'08.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events8[i].push([j,'08.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events9[i].push([j,'08.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events10[i].push([j,'08.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events11[i].push([j,'08.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events12[i].push([j,'08.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events13[i].push([j,'08.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events14[i].push([j,'08.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events15[i].push([j,'08.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events16[i].push([j,'08.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events17[i].push([j,'08.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events18[i].push([j,'08.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events19[i].push([j,'08.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events20[i].push([j,'08.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events21[i].push([j,'08.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events22[i].push([j,'08.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events23[i].push([j,'08.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events24[i].push([j,'08.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events25[i].push([j,'08.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events26[i].push([j,'08.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events27[i].push([j,'08.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events28[i].push([j,'08.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events29[i].push([j,'08.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events30[i].push([j,'08.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events31[i].push([j,'08.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);

        }else if(j == 2){
          this.events1[i].push([j,'09.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events2[i].push([j,'09.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events3[i].push([j,'09.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events4[i].push([j,'09.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events5[i].push([j,'09.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events6[i].push([j,'09.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events7[i].push([j,'09.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events8[i].push([j,'09.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events9[i].push([j,'09.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events10[i].push([j,'09.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events11[i].push([j,'09.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events12[i].push([j,'09.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events13[i].push([j,'09.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events14[i].push([j,'09.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events15[i].push([j,'09.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events16[i].push([j,'09.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events17[i].push([j,'09.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events18[i].push([j,'09.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events19[i].push([j,'09.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events20[i].push([j,'09.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events21[i].push([j,'09.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events22[i].push([j,'09.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events23[i].push([j,'09.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events24[i].push([j,'09.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events25[i].push([j,'09.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events26[i].push([j,'09.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events27[i].push([j,'09.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events28[i].push([j,'09.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events29[i].push([j,'09.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events30[i].push([j,'09.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events31[i].push([j,'09.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
        }else if(j == 3){
          this.events1[i].push([j,'09.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events2[i].push([j,'09.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events3[i].push([j,'09.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events4[i].push([j,'09.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events5[i].push([j,'09.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events6[i].push([j,'09.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events7[i].push([j,'09.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events8[i].push([j,'09.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events9[i].push([j,'09.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events10[i].push([j,'09.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events11[i].push([j,'09.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events12[i].push([j,'09.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events13[i].push([j,'09.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events14[i].push([j,'09.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events15[i].push([j,'09.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events16[i].push([j,'09.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events17[i].push([j,'09.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events18[i].push([j,'09.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events19[i].push([j,'09.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events20[i].push([j,'09.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events21[i].push([j,'09.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events22[i].push([j,'09.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events23[i].push([j,'09.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events24[i].push([j,'09.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events25[i].push([j,'09.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events26[i].push([j,'09.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events27[i].push([j,'09.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events28[i].push([j,'09.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events29[i].push([j,'09.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events30[i].push([j,'09.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events31[i].push([j,'09.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
        }else if(j == 4){
          this.events1[i].push([j,'10.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events2[i].push([j,'10.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events3[i].push([j,'10.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events4[i].push([j,'10.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events5[i].push([j,'10.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events6[i].push([j,'10.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events7[i].push([j,'10.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events8[i].push([j,'10.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events9[i].push([j,'10.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events10[i].push([j,'10.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events11[i].push([j,'10.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events12[i].push([j,'10.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events13[i].push([j,'10.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events14[i].push([j,'10.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events15[i].push([j,'10.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events16[i].push([j,'10.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events17[i].push([j,'10.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events18[i].push([j,'10.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events19[i].push([j,'10.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events20[i].push([j,'10.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events21[i].push([j,'10.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events22[i].push([j,'10.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events23[i].push([j,'10.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events24[i].push([j,'10.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events25[i].push([j,'10.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events26[i].push([j,'10.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events27[i].push([j,'10.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events28[i].push([j,'10.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events29[i].push([j,'10.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events30[i].push([j,'10.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events31[i].push([j,'10.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
        }else if(j == 5){
          this.events1[i].push([j,'10.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events2[i].push([j,'10.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events3[i].push([j,'10.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events4[i].push([j,'10.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events5[i].push([j,'10.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events6[i].push([j,'10.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events7[i].push([j,'10.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events8[i].push([j,'10.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events9[i].push([j,'10.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events10[i].push([j,'10.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events11[i].push([j,'10.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events12[i].push([j,'10.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events13[i].push([j,'10.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events14[i].push([j,'10.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events15[i].push([j,'10.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events16[i].push([j,'10.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events17[i].push([j,'10.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events18[i].push([j,'10.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events19[i].push([j,'10.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events20[i].push([j,'10.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events21[i].push([j,'10.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events22[i].push([j,'10.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events23[i].push([j,'10.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events24[i].push([j,'10.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events25[i].push([j,'10.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events26[i].push([j,'10.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events27[i].push([j,'10.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events28[i].push([j,'10.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events29[i].push([j,'10.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events30[i].push([j,'10.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events31[i].push([j,'10.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
        }else if(j == 6){
          this.events1[i].push([j,'11.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events2[i].push([j,'11.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events3[i].push([j,'11.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events4[i].push([j,'11.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events5[i].push([j,'11.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events6[i].push([j,'11.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events7[i].push([j,'11.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events8[i].push([j,'11.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events9[i].push([j,'11.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events10[i].push([j,'11.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events11[i].push([j,'11.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events12[i].push([j,'11.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events13[i].push([j,'11.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events14[i].push([j,'11.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events15[i].push([j,'11.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events16[i].push([j,'11.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events17[i].push([j,'11.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events18[i].push([j,'11.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events19[i].push([j,'11.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events20[i].push([j,'11.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events21[i].push([j,'11.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events22[i].push([j,'11.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events23[i].push([j,'11.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events24[i].push([j,'11.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events25[i].push([j,'11.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events26[i].push([j,'11.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events27[i].push([j,'11.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events28[i].push([j,'11.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events29[i].push([j,'11.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events30[i].push([j,'11.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events31[i].push([j,'11.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
        }else if(j == 7){
          this.events1[i].push([j,'11.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events2[i].push([j,'11.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events3[i].push([j,'11.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events4[i].push([j,'11.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events5[i].push([j,'11.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events6[i].push([j,'11.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events7[i].push([j,'11.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events8[i].push([j,'11.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events9[i].push([j,'11.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events10[i].push([j,'11.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events11[i].push([j,'11.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events12[i].push([j,'11.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events13[i].push([j,'11.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events14[i].push([j,'11.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events15[i].push([j,'11.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events16[i].push([j,'11.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events17[i].push([j,'11.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events18[i].push([j,'11.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events19[i].push([j,'11.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events20[i].push([j,'11.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events21[i].push([j,'11.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events22[i].push([j,'11.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events23[i].push([j,'11.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events24[i].push([j,'11.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events25[i].push([j,'11.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events26[i].push([j,'11.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events27[i].push([j,'11.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events28[i].push([j,'11.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events29[i].push([j,'11.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events30[i].push([j,'11.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events31[i].push([j,'11.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
        }else if(j == 8){
          this.events1[i].push([j,'12.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events2[i].push([j,'12.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events3[i].push([j,'12.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events4[i].push([j,'12.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events5[i].push([j,'12.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events6[i].push([j,'12.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events7[i].push([j,'12.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events8[i].push([j,'12.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events9[i].push([j,'12.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events10[i].push([j,'12.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events11[i].push([j,'12.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events12[i].push([j,'12.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events13[i].push([j,'12.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events14[i].push([j,'12.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events15[i].push([j,'12.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events16[i].push([j,'12.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events17[i].push([j,'12.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events18[i].push([j,'12.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events19[i].push([j,'12.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events20[i].push([j,'12.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events21[i].push([j,'12.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events22[i].push([j,'12.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events23[i].push([j,'12.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events24[i].push([j,'12.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events25[i].push([j,'12.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events26[i].push([j,'12.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events27[i].push([j,'12.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events28[i].push([j,'12.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events29[i].push([j,'12.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events30[i].push([j,'12.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events31[i].push([j,'12.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
        }else if(j == 9){
          this.events1[i].push([j,'12.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events2[i].push([j,'12.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events3[i].push([j,'12.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events4[i].push([j,'12.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events5[i].push([j,'12.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events6[i].push([j,'12.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events7[i].push([j,'12.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events8[i].push([j,'12.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events9[i].push([j,'12.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events10[i].push([j,'12.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events11[i].push([j,'12.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events12[i].push([j,'12.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events13[i].push([j,'12.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events14[i].push([j,'12.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events15[i].push([j,'12.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events16[i].push([j,'12.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events17[i].push([j,'12.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events18[i].push([j,'12.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events19[i].push([j,'12.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events20[i].push([j,'12.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events21[i].push([j,'12.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events22[i].push([j,'12.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events23[i].push([j,'12.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events24[i].push([j,'12.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events25[i].push([j,'12.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events26[i].push([j,'12.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events27[i].push([j,'12.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events28[i].push([j,'12.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events29[i].push([j,'12.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events30[i].push([j,'12.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events31[i].push([j,'12.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
        }else if(j == 10){
          this.events1[i].push([j,'13.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events2[i].push([j,'13.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events3[i].push([j,'13.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events4[i].push([j,'13.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events5[i].push([j,'13.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events6[i].push([j,'13.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events7[i].push([j,'13.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events8[i].push([j,'13.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events9[i].push([j,'13.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events10[i].push([j,'13.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events11[i].push([j,'13.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events12[i].push([j,'13.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events13[i].push([j,'13.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events14[i].push([j,'13.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events15[i].push([j,'13.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events16[i].push([j,'13.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events17[i].push([j,'13.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events18[i].push([j,'13.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events19[i].push([j,'13.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events20[i].push([j,'13.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events21[i].push([j,'13.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events22[i].push([j,'13.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events23[i].push([j,'13.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events24[i].push([j,'13.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events25[i].push([j,'13.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events26[i].push([j,'13.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events27[i].push([j,'13.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events28[i].push([j,'13.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events29[i].push([j,'13.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events30[i].push([j,'13.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events31[i].push([j,'13.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
        }else if(j == 11){
          this.events1[i].push([j,'13.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events2[i].push([j,'13.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events3[i].push([j,'13.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events4[i].push([j,'13.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events5[i].push([j,'13.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events6[i].push([j,'13.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events7[i].push([j,'13.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events8[i].push([j,'13.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events9[i].push([j,'13.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events10[i].push([j,'13.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events11[i].push([j,'13.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events12[i].push([j,'13.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events13[i].push([j,'13.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events14[i].push([j,'13.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events15[i].push([j,'13.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events16[i].push([j,'13.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events17[i].push([j,'13.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events18[i].push([j,'13.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events19[i].push([j,'13.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events20[i].push([j,'13.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events21[i].push([j,'13.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events22[i].push([j,'13.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events23[i].push([j,'13.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events24[i].push([j,'13.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events25[i].push([j,'13.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events26[i].push([j,'13.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events27[i].push([j,'13.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events28[i].push([j,'13.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events29[i].push([j,'13.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events30[i].push([j,'13.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events31[i].push([j,'13.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
        }else if(j == 12){
          this.events1[i].push([j,'14.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events2[i].push([j,'14.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events3[i].push([j,'14.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events4[i].push([j,'14.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events5[i].push([j,'14.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events6[i].push([j,'14.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events7[i].push([j,'14.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events8[i].push([j,'14.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events9[i].push([j,'14.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events10[i].push([j,'14.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events11[i].push([j,'14.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events12[i].push([j,'14.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events13[i].push([j,'14.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events14[i].push([j,'14.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events15[i].push([j,'14.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events16[i].push([j,'14.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events17[i].push([j,'14.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events18[i].push([j,'14.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events19[i].push([j,'14.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events20[i].push([j,'14.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events21[i].push([j,'14.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events22[i].push([j,'14.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events23[i].push([j,'14.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events24[i].push([j,'14.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events25[i].push([j,'14.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events26[i].push([j,'14.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events27[i].push([j,'14.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events28[i].push([j,'14.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events29[i].push([j,'14.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events30[i].push([j,'14.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events31[i].push([j,'14.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
        }else if(j == 13){
          this.events1[i].push([j,'14.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events2[i].push([j,'14.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events3[i].push([j,'14.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events4[i].push([j,'14.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events5[i].push([j,'14.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events6[i].push([j,'14.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events7[i].push([j,'14.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events8[i].push([j,'14.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events9[i].push([j,'14.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events10[i].push([j,'14.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events11[i].push([j,'14.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events12[i].push([j,'14.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events13[i].push([j,'14.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events14[i].push([j,'14.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events15[i].push([j,'14.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events16[i].push([j,'14.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events17[i].push([j,'14.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events18[i].push([j,'14.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events19[i].push([j,'14.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events20[i].push([j,'14.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events21[i].push([j,'14.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events22[i].push([j,'14.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events23[i].push([j,'14.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events24[i].push([j,'14.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events25[i].push([j,'14.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events26[i].push([j,'14.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events27[i].push([j,'14.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events28[i].push([j,'14.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events29[i].push([j,'14.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events30[i].push([j,'14.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events31[i].push([j,'14.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
        }else if(j == 14){
          this.events1[i].push([j,'15.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events2[i].push([j,'15.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events3[i].push([j,'15.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events4[i].push([j,'15.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events5[i].push([j,'15.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events6[i].push([j,'15.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events7[i].push([j,'15.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events8[i].push([j,'15.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events9[i].push([j,'15.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events10[i].push([j,'15.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events11[i].push([j,'15.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events12[i].push([j,'15.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events13[i].push([j,'15.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events14[i].push([j,'15.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events15[i].push([j,'15.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events16[i].push([j,'15.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events17[i].push([j,'15.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events18[i].push([j,'15.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events19[i].push([j,'15.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events20[i].push([j,'15.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events21[i].push([j,'15.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events22[i].push([j,'15.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events23[i].push([j,'15.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events24[i].push([j,'15.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events25[i].push([j,'15.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events26[i].push([j,'15.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events27[i].push([j,'15.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events28[i].push([j,'15.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events29[i].push([j,'15.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events30[i].push([j,'15.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events31[i].push([j,'15.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
        }else if(j == 15){
          this.events1[i].push([j,'15.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events2[i].push([j,'15.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events3[i].push([j,'15.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events4[i].push([j,'15.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events5[i].push([j,'15.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events6[i].push([j,'15.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events7[i].push([j,'15.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events8[i].push([j,'15.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events9[i].push([j,'15.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events10[i].push([j,'15.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events11[i].push([j,'15.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events12[i].push([j,'15.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events13[i].push([j,'15.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events14[i].push([j,'15.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events15[i].push([j,'15.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events16[i].push([j,'15.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events17[i].push([j,'15.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events18[i].push([j,'15.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events19[i].push([j,'15.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events20[i].push([j,'15.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events21[i].push([j,'15.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events22[i].push([j,'15.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events23[i].push([j,'15.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events24[i].push([j,'15.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events25[i].push([j,'15.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events26[i].push([j,'15.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events27[i].push([j,'15.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events28[i].push([j,'15.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events29[i].push([j,'15.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events30[i].push([j,'15.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events31[i].push([j,'15.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
        }else if(j == 16){
          this.events1[i].push([j,'16.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events2[i].push([j,'16.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events3[i].push([j,'16.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events4[i].push([j,'16.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events5[i].push([j,'16.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events6[i].push([j,'16.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events7[i].push([j,'16.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events8[i].push([j,'16.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events9[i].push([j,'16.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events10[i].push([j,'16.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events11[i].push([j,'16.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events12[i].push([j,'16.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events13[i].push([j,'16.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events14[i].push([j,'16.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events15[i].push([j,'16.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events16[i].push([j,'16.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events17[i].push([j,'16.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events18[i].push([j,'16.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events19[i].push([j,'16.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events20[i].push([j,'16.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events21[i].push([j,'16.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events22[i].push([j,'16.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events23[i].push([j,'16.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events24[i].push([j,'16.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events25[i].push([j,'16.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events26[i].push([j,'16.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events27[i].push([j,'16.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events28[i].push([j,'16.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events29[i].push([j,'16.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events30[i].push([j,'16.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events31[i].push([j,'16.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
        }else if(j == 17){
          this.events1[i].push([j,'16.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events2[i].push([j,'16.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events3[i].push([j,'16.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events4[i].push([j,'16.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events5[i].push([j,'16.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events6[i].push([j,'16.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events7[i].push([j,'16.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events8[i].push([j,'16.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events9[i].push([j,'16.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events10[i].push([j,'16.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events11[i].push([j,'16.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events12[i].push([j,'16.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events13[i].push([j,'16.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events14[i].push([j,'16.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events15[i].push([j,'16.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events16[i].push([j,'16.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events17[i].push([j,'16.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events18[i].push([j,'16.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events19[i].push([j,'16.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events20[i].push([j,'16.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events21[i].push([j,'16.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events22[i].push([j,'16.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events23[i].push([j,'16.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events24[i].push([j,'16.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events25[i].push([j,'16.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events26[i].push([j,'16.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events27[i].push([j,'16.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events28[i].push([j,'16.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events29[i].push([j,'16.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events30[i].push([j,'16.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events31[i].push([j,'16.30',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
        }else if(j == 18){
          this.events1[i].push([j,'17.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events2[i].push([j,'17.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events3[i].push([j,'17.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events4[i].push([j,'17.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events5[i].push([j,'17.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events6[i].push([j,'17.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events7[i].push([j,'17.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events8[i].push([j,'17.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events9[i].push([j,'17.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events10[i].push([j,'17.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events11[i].push([j,'17.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events12[i].push([j,'17.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events13[i].push([j,'17.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events14[i].push([j,'17.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events15[i].push([j,'17.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events16[i].push([j,'17.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events17[i].push([j,'17.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events18[i].push([j,'17.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events19[i].push([j,'17.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events20[i].push([j,'17.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events21[i].push([j,'17.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events22[i].push([j,'17.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events23[i].push([j,'17.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events24[i].push([j,'17.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events25[i].push([j,'17.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events26[i].push([j,'17.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events27[i].push([j,'17.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events28[i].push([j,'17.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events29[i].push([j,'17.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events30[i].push([j,'17.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
          this.events31[i].push([j,'17.00',1,'white',this.roomnames[i].roomnames,false,'',0,'','',false,false,'','','']);
        }

      }
    }
  console.log(this.events1);
  }

  public appendTime(){
    /*console.log('01-'+this.dateSelectMonth[1]+'-'+this.dateFull.year);
    for(let i = 0 ; i < this.report.length ; i++){

        if(this.report[i].isActive == "1"){

            for(let j = 0 ; j < this.roomnames.length ; j++){ //หาห้อง


              for(let k = 0 ; k < 31 ; k++){
                  if(this.report[i].bookMeetingRoom.roomname == this.roomnames[j].roomnames && this.report[i].bookMeetingRoom.starttime == '08.00' &&
                  this.report[i].date == '01-'+this.dateSelectMonth[1]+'-'+this.dateFull.year){

                      console.log(1);
                   }
              }



            }// หาห้อง
        } //if active
    } //for report*/



  } // appendtime



} // class




