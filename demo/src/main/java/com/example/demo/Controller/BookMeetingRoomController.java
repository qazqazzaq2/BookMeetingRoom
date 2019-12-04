package com.example.demo.Controller;


import com.example.demo.entity.BookMeetingRoom;
import com.example.demo.entity.Report;
import com.example.demo.entity.Users;
import com.example.demo.repository.BookMeetingRoomRepository;
import com.example.demo.repository.ReportRepository;
import com.example.demo.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.util.Date;


@RestController
@CrossOrigin("*")

public class BookMeetingRoomController {

    @Autowired
    private BookMeetingRoomRepository bookMeetingRoomRepository;
    @Autowired
    private UsersRepository usersRepository;
    @Autowired
    private ReportRepository reportRepository;

    @GetMapping("/BookMeetingRoom/{date}")
    public Iterable<BookMeetingRoom> Bookmaster(@PathVariable String date) {
        return this.bookMeetingRoomRepository.getBookmaster(date);
    }



    @PostMapping(path = "/CancelBooking/{dateBookMeetingRoom}/{roomname}/{starttime}")
    public BookMeetingRoom bookMeetingRoom2(@PathVariable String dateBookMeetingRoom, @PathVariable String roomname, @PathVariable String starttime) {
        BookMeetingRoom bookMeetingRoom = bookMeetingRoomRepository.findByDateBookMeetingRoomAndRoomnameAndStarttimeAndIsActive(dateBookMeetingRoom,roomname,starttime,"1");
        bookMeetingRoom.setIsActive("0");
        bookMeetingRoomRepository.save(bookMeetingRoom);
        Report report = reportRepository.findByBookMeetingRoom(bookMeetingRoom);
        report.setIsActive("0");
        reportRepository.save(report);
        return bookMeetingRoom;
    }


    @PostMapping(path = "/Editbook/{dateBookMeetingRoom}/{roomname}/{starttime}/{newstarttime}/{endtime}/{atten}/{topic}/{remark}/{tel}")
    public BookMeetingRoom bookMeetingRoom3(@PathVariable String dateBookMeetingRoom, @PathVariable String roomname, @PathVariable String starttime,
   @PathVariable String newstarttime,@PathVariable String endtime,@PathVariable String atten,@PathVariable String topic,@PathVariable String remark,@PathVariable String tel ) {
        BookMeetingRoom bookMeetingRoom = bookMeetingRoomRepository.findByDateBookMeetingRoomAndRoomnameAndStarttimeAndIsActive(dateBookMeetingRoom,roomname,starttime,"1");
        bookMeetingRoom.setStarttime(newstarttime);
        bookMeetingRoom.setEndtime(endtime);
        bookMeetingRoom.setAttendees(atten);
        bookMeetingRoom.setTopic(topic);
        bookMeetingRoom.setRemark(remark);
        bookMeetingRoom.setTelbookingby(tel);
        int length = convertLengthTime(newstarttime,endtime);
        bookMeetingRoom.setLengthtime(length);
        bookMeetingRoomRepository.save(bookMeetingRoom);
        return bookMeetingRoom;
    }




    @PostMapping(path = "/{userid}/{fromtime}/{totime}/{tel}/{topic}/{atten}/{remark}/{roomname}/{date}")
    public BookMeetingRoom bookMeetingRoom(@PathVariable String userid, @PathVariable String fromtime, @PathVariable String totime,
                                     @PathVariable String  tel, @PathVariable String topic,@PathVariable String atten,@PathVariable String remark
            ,@PathVariable String roomname ,@PathVariable String date) throws Exception {
        BookMeetingRoom bookMeetingRoom = new BookMeetingRoom();
        bookMeetingRoom.setStarttime(fromtime);
        bookMeetingRoom.setEndtime(totime);
        bookMeetingRoom.setTelbookingby(tel);
        bookMeetingRoom.setTopic(topic);
        bookMeetingRoom.setAttendees(atten);
        bookMeetingRoom.setRemark(remark);

        int length = convertLengthTime(fromtime,totime);

        bookMeetingRoom.setLengthtime(length);
        bookMeetingRoom.setRoomname(roomname);
        bookMeetingRoom.setDateBookMeetingRoom(date);
        bookMeetingRoom.setIsActive("1");
        bookMeetingRoomRepository.save(bookMeetingRoom);

        Users users = usersRepository.findByUsernameAndIsActive(userid,"1");


        Report report = new Report();
        report.setBookMeetingRoom(bookMeetingRoom);
        report.setDate(date);
        report.setUsers(users);
        SimpleDateFormat formatter2=new SimpleDateFormat("dd-MM-yyyy");
        String[] dateSplit;
        dateSplit = date.split("-");
        int yearSplit = Integer.valueOf(dateSplit[2]) + 543 ;
        String fullPatternyear = dateSplit[0] + '-' + dateSplit[1] + '-' + String.valueOf(yearSplit);//dateSplit[2];
        Date date2=formatter2.parse(fullPatternyear);
        report.setDateBook(date2);
        report.setIsActive("1");
        reportRepository.save(report);

        return bookMeetingRoom;
    }



    public static int convertLengthTime(String fromtime, String totime){
        int length = 0 ;

        String from , to ,fromback, toback;
        from = fromtime.substring(0,2);
        to = totime.substring(0,2);
        fromback = fromtime.substring(3,5);
        toback = totime.substring(3,5);


        if(from.equals("08")  && to.equals("08")){
            if(fromback.equals("30") && toback.equals("30")){
                length = 1 ;
            }else if(fromback.equals("00") && toback.equals("00")){
                length = 1 ;
            }else{
                length = 2 ;
            }
        }else if(from.equals("08")  && to.equals("09")){
            if(fromback.equals("00") && toback.equals("00")){
                length = 3 ;
            }else if(fromback.equals("00") && toback.equals("30")){
                length = 4 ;
            }else if(fromback.equals("30") && toback.equals("00")){
                length = 2;
            }else{
                length = 3;
            }
        }else if(from.equals("08")  && to.equals("10")){
            if(fromback.equals("00") && toback.equals("00")){
                length = 5 ;
            }else if(fromback.equals("00") && toback.equals("30")){
                length = 6 ;
            }else if(fromback.equals("30") && toback.equals("00")){
                length = 4;
            }else{
                length = 5;
            }
        }else if(from.equals("08")  && to.equals("11")){
            if(fromback.equals("00") && toback.equals("00")){
                length = 7 ;
            }else if(fromback.equals("00") && toback.equals("30")){
                length = 8 ;
            }else if(fromback.equals("30") && toback.equals("00")){
                length = 6;
            }else{
                length = 7;
            }
        }else if(from.equals("08")  && to.equals("12")){
            if(fromback.equals("00") && toback.equals("00")){
                length = 9 ;
            }else if(fromback.equals("00") && toback.equals("30")){
                length = 10 ;
            }else if(fromback.equals("30") && toback.equals("00")){
                length = 8;
            }else{
                length = 9;
            }
        }else if(from.equals("08")  && to.equals("13")){
            if(fromback.equals("00") && toback.equals("00")){
                length = 11 ;
            }else if(fromback.equals("00") && toback.equals("30")){
                length = 12 ;
            }else if(fromback.equals("30") && toback.equals("00")){
                length = 10;
            }else{
                length = 11;
            }
        }else if(from.equals("08")  && to.equals("14")){
            if(fromback.equals("00") && toback.equals("00")){
                length = 13 ;
            }else if(fromback.equals("00") && toback.equals("30")){
                length = 14 ;
            }else if(fromback.equals("30") && toback.equals("00")){
                length = 12;
            }else{
                length = 13;
            }
        }else if(from.equals("08")  && to.equals("15")){
            if(fromback.equals("00") && toback.equals("00")){
                length = 15 ;
            }else if(fromback.equals("00") && toback.equals("30")){
                length = 16 ;
            }else if(fromback.equals("30") && toback.equals("00")){
                length = 14;
            }else{
                length = 15;
            }
        }else if(from.equals("08")  && to.equals("16")){
            if(fromback.equals("00") && toback.equals("00")){
                length = 17 ;
            }else if(fromback.equals("00") && toback.equals("30")){
                length = 18 ;
            }else if(fromback.equals("30") && toback.equals("00")){
                length = 16;
            }else{
                length = 17;
            }
        }else if(from.equals("08")  && to.equals("17")){
            if(fromback.equals("00") && toback.equals("00")){
                length = 19 ;
            }else if(fromback.equals("30") && toback.equals("00")){
                length = 18 ;
            }
        }else if(from.equals("09")  && to.equals("09")){
            if(fromback.equals("30") && toback.equals("30")){
                length = 1;
            }else if(fromback.equals("00") && toback.equals("00")){
                length = 1 ;
            }else{
                length = 2 ;
            }
        }else if(from.equals("09")  && to.equals("10")){
            if(fromback.equals("00") && toback.equals("00")){
                length = 3 ;
            }else if(fromback.equals("00") && toback.equals("30")){
                length = 4 ;
            }else if(fromback.equals("30") && toback.equals("00")){
                length = 2;
            }else{
                length = 3;
            }
        }else if(from.equals("09")  && to.equals("11")){
            if(fromback.equals("00") && toback.equals("00")){
                length = 5 ;
            }else if(fromback.equals("00") && toback.equals("30")){
                length = 6 ;
            }else if(fromback.equals("30") && toback.equals("00")){
                length = 4;
            }else{
                length = 5;
            }
        }else if(from.equals("09")  && to.equals("12")){
            if(fromback.equals("00") && toback.equals("00")){
                length = 7 ;
            }else if(fromback.equals("00") && toback.equals("30")){
                length = 8 ;
            }else if(fromback.equals("30") && toback.equals("00")){
                length = 6;
            }else{
                length = 7;
            }
        }else if(from.equals("09")  && to.equals("13")){
            if(fromback.equals("00") && toback.equals("00")){
                length = 9 ;
            }else if(fromback.equals("00") && toback.equals("30")){
                length = 10 ;
            }else if(fromback.equals("30") && toback.equals("00")){
                length = 8;
            }else{
                length = 9;
            }
        }else if(from.equals("09")  && to.equals("14")){
            if(fromback.equals("00") && toback.equals("00")){
                length = 11 ;
            }else if(fromback.equals("00") && toback.equals("30")){
                length = 12 ;
            }else if(fromback.equals("30") && toback.equals("00")){
                length = 10;
            }else{
                length = 11;
            }
        }else if(from.equals("09")  && to.equals("15")){
            if(fromback.equals("00") && toback.equals("00")){
                length = 13 ;
            }else if(fromback.equals("00") && toback.equals("30")){
                length = 14 ;
            }else if(fromback.equals("30") && toback.equals("00")){
                length = 12;
            }else{
                length = 13;
            }
        }else if(from.equals("09")  && to.equals("16")){
            if(fromback.equals("00") && toback.equals("00")){
                length = 15 ;
            }else if(fromback.equals("00") && toback.equals("30")){
                length = 16 ;
            }else if(fromback.equals("30") && toback.equals("00")){
                length = 14;
            }else{
                length = 15;
            }
        }else if(from.equals("09")  && to.equals("17")){
            if (fromback.equals("00") && toback.equals("00")) {
                length = 17;
            } else if (fromback.equals("30") && toback.equals("00")) {
                length = 16;
            }
        }else if(from.equals("10")  && to.equals("10")){
            if(fromback.equals("30") && toback.equals("30")){
                length = 1;
            }else if(fromback.equals("00") && toback.equals("00")){
                length = 1 ;
            }else{
                length = 2 ;
            }
        }else if(from.equals("10")  && to.equals("11")){
            if(fromback.equals("00") && toback.equals("00")){
                length = 3 ;
            }else if(fromback.equals("00") && toback.equals("30")){
                length = 4 ;
            }else if(fromback.equals("30") && toback.equals("00")){
                length = 2;
            }else{
                length = 3;
            }
        }else if(from.equals("10")  && to.equals("12")){
            if(fromback.equals("00") && toback.equals("00")){
                length = 5 ;
            }else if(fromback.equals("00") && toback.equals("30")){
                length = 6 ;
            }else if(fromback.equals("30") && toback.equals("00")){
                length = 4;
            }else{
                length = 5;
            }
        }else if(from.equals("10")  && to.equals("13")){
            if(fromback.equals("00") && toback.equals("00")){
                length = 7 ;
            }else if(fromback.equals("00") && toback.equals("30")){
                length = 8 ;
            }else if(fromback.equals("30") && toback.equals("00")){
                length = 6;
            }else{
                length = 7;
            }
        }else if(from.equals("10")  && to.equals("14")){
            if(fromback.equals("00") && toback.equals("00")){
                length = 9 ;
            }else if(fromback.equals("00") && toback.equals("30")){
                length = 10 ;
            }else if(fromback.equals("30") && toback.equals("00")){
                length = 8;
            }else{
                length = 9;
            }
        }else if(from.equals("10")  && to.equals("15")){
            if(fromback.equals("00") && toback.equals("00")){
                length = 11 ;
            }else if(fromback.equals("00") && toback.equals("30")){
                length = 12 ;
            }else if(fromback.equals("30") && toback.equals("00")){
                length = 10;
            }else{
                length = 11;
            }
        }else if(from.equals("10")  && to.equals("16")){
            if(fromback.equals("00") && toback.equals("00")){
                length = 13 ;
            }else if(fromback.equals("00") && toback.equals("30")){
                length = 14 ;
            }else if(fromback.equals("30") && toback.equals("00")){
                length = 12;
            }else{
                length = 13;
            }
        }else if(from.equals("10")  && to.equals("17")){
            if (fromback.equals("00") && toback.equals("00")) {
                length = 15;
            } else if (fromback.equals("30") && toback.equals("00")) {
                length = 14;
            }
        }else if(from.equals("11")  && to.equals("11")){
            if(fromback.equals("30") && toback.equals("30")){
                length = 1;
            }else if(fromback.equals("00") && toback.equals("00")){
                length = 1 ;
            }else{
                length = 2 ;
            }
        }else if(from.equals("11")  && to.equals("12")){
            if(fromback.equals("00") && toback.equals("00")){
                length = 3 ;
            }else if(fromback.equals("00") && toback.equals("30")){
                length = 4 ;
            }else if(fromback.equals("30") && toback.equals("00")){
                length = 2;
            }else{
                length = 3;
            }
        }else if(from.equals("11")  && to.equals("13")){
            if(fromback.equals("00") && toback.equals("00")){
                length = 5 ;
            }else if(fromback.equals("00") && toback.equals("30")){
                length = 6 ;
            }else if(fromback.equals("30") && toback.equals("00")){
                length = 4;
            }else{
                length = 5;
            }
        }else if(from.equals("11")  && to.equals("14")){
            if(fromback.equals("00") && toback.equals("00")){
                length = 7 ;
            }else if(fromback.equals("00") && toback.equals("30")){
                length = 8 ;
            }else if(fromback.equals("30") && toback.equals("00")){
                length = 6;
            }else{
                length = 7;
            }
        }else if(from.equals("11")  && to.equals("15")){
            if(fromback.equals("00") && toback.equals("00")){
                length = 9 ;
            }else if(fromback.equals("00") && toback.equals("30")){
                length = 10 ;
            }else if(fromback.equals("30") && toback.equals("00")){
                length = 8;
            }else{
                length = 9;
            }
        }else if(from.equals("11")  && to.equals("16")){
            if(fromback.equals("00") && toback.equals("00")){
                length = 11 ;
            }else if(fromback.equals("00") && toback.equals("30")){
                length = 12 ;
            }else if(fromback.equals("30") && toback.equals("00")){
                length = 10;
            }else{
                length = 11;
            }
        }else if(from.equals("11")  && to.equals("17")){
            if (fromback.equals("00") && toback.equals("00")) {
                length = 13;
            } else if (fromback.equals("30") && toback.equals("00")) {
                length = 12;
            }
        }else if(from.equals("12")  && to.equals("12")){
            if(fromback.equals("30") && toback.equals("30")){
                length = 1;
            }else if(fromback.equals("00") && toback.equals("00")){
                length = 1 ;
            }else{
                length = 2 ;
            }
        }else if(from.equals("12")  && to.equals("13")){
            if(fromback.equals("00") && toback.equals("00")){
                length = 3 ;
            }else if(fromback.equals("00") && toback.equals("30")){
                length = 4 ;
            }else if(fromback.equals("30") && toback.equals("00")){
                length = 2;
            }else{
                length = 3;
            }
        }else if(from.equals("12")  && to.equals("14")){
            if(fromback.equals("00") && toback.equals("00")){
                length = 5 ;
            }else if(fromback.equals("00") && toback.equals("30")){
                length = 6 ;
            }else if(fromback.equals("30") && toback.equals("00")){
                length = 4;
            }else{
                length = 5;
            }
        }else if(from.equals("12")  && to.equals("15")){
            if(fromback.equals("00") && toback.equals("00")){
                length = 7 ;
            }else if(fromback.equals("00") && toback.equals("30")){
                length = 8 ;
            }else if(fromback.equals("30") && toback.equals("00")){
                length = 6;
            }else{
                length = 7;
            }
        }else if(from.equals("12")  && to.equals("16")){
            if(fromback.equals("00") && toback.equals("00")){
                length = 9 ;
            }else if(fromback.equals("00") && toback.equals("30")){
                length = 10 ;
            }else if(fromback.equals("30") && toback.equals("00")){
                length = 8;
            }else{
                length = 9;
            }
        }else if(from.equals("12")  && to.equals("17")){
            if (fromback.equals("00") && toback.equals("00")) {
                length = 11;
            } else if (fromback.equals("30") && toback.equals("00")) {
                length = 10;
            }
        }else if(from.equals("13")  && to.equals("13")){
            if(fromback.equals("30") && toback.equals("30")){
                length = 1;
            }else if(fromback.equals("00") && toback.equals("00")){
                length = 1 ;
            }else{
                length = 2 ;
            }
        }else if(from.equals("13")  && to.equals("14")){
            if(fromback.equals("00") && toback.equals("00")){
                length = 3 ;
            }else if(fromback.equals("00") && toback.equals("30")){
                length = 4 ;
            }else if(fromback.equals("30") && toback.equals("00")){
                length = 2;
            }else{
                length = 3;
            }
        }else if(from.equals("13")  && to.equals("15")){
            if(fromback.equals("00") && toback.equals("00")){
                length = 5 ;
            }else if(fromback.equals("00") && toback.equals("30")){
                length = 6 ;
            }else if(fromback.equals("30") && toback.equals("00")){
                length = 4;
            }else{
                length = 5;
            }
        }else if(from.equals("13")  && to.equals("16")){
            if(fromback.equals("00") && toback.equals("00")){
                length = 7 ;
            }else if(fromback.equals("00") && toback.equals("30")){
                length = 8 ;
            }else if(fromback.equals("30") && toback.equals("00")){
                length = 6;
            }else{
                length = 7;
            }
        }else if(from.equals("13")  && to.equals("17")){
            if (fromback.equals("00") && toback.equals("00")) {
                length = 9;
            } else if (fromback.equals("30") && toback.equals("00")) {
                length = 8;
            }
        }else if(from.equals("14")  && to.equals("14")){
            if(fromback.equals("30") && toback.equals("30")){
                length = 1;
            }else if(fromback.equals("00") && toback.equals("00")){
                length = 1 ;
            }else{
                length = 2 ;
            }
        }else if(from.equals("14")  && to.equals("15")){
            if(fromback.equals("00") && toback.equals("00")){
                length = 3 ;
            }else if(fromback.equals("00") && toback.equals("30")){
                length = 4 ;
            }else if(fromback.equals("30") && toback.equals("00")){
                length = 2;
            }else{
                length = 3;
            }
        }else if(from.equals("14")  && to.equals("16")){
            if(fromback.equals("00") && toback.equals("00")){
                length = 5 ;
            }else if(fromback.equals("00") && toback.equals("30")){
                length = 6 ;
            }else if(fromback.equals("30") && toback.equals("00")){
                length = 4;
            }else{
                length = 5;
            }
        }else if(from.equals("14")  && to.equals("17")){
            if (fromback.equals("00") && toback.equals("00")) {
                length = 7;
            } else if (fromback.equals("30") && toback.equals("00")) {
                length = 6;
            }
        }else if(from.equals("15")  && to.equals("15")){
            if(fromback.equals("30") && toback.equals("30")){
                length = 1;
            }else if(fromback.equals("00") && toback.equals("00")){
                length = 1 ;
            }else{
                length = 2 ;
            }
        }else if(from.equals("15")  && to.equals("16")){
            if(fromback.equals("00") && toback.equals("00")){
                length = 3 ;
            }else if(fromback.equals("00") && toback.equals("30")){
                length = 4 ;
            }else if(fromback.equals("30") && toback.equals("00")){
                length = 2;
            }else{
                length = 3;
            }
        }else if(from.equals("15")  && to.equals("17")){
            if (fromback.equals("00") && toback.equals("00")) {
                length = 5;
            } else if (fromback.equals("30") && toback.equals("00")) {
                length = 4;
            }
        }else if(from.equals("16")  && to.equals("16")){
            if(fromback.equals("30") && toback.equals("30")){
                length = 1;
            }else if(fromback.equals("00") && toback.equals("00")){
                length = 1 ;
            }else{
                length = 2 ;
            }
        }else if(from.equals("16")  && to.equals("17")){
            if (fromback.equals("00") && toback.equals("00")) {
                length = 3;
            } else if (fromback.equals("30") && toback.equals("00")) {
                length = 2;
            }
        }else if(from.equals("17")  && to.equals("17")){
                length = 1 ;
        }



        return length ;

    }


}
