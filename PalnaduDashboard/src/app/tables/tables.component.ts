import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { GetvaluesService } from '../getvalues.service';
@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  constructor(private getuser: GetvaluesService) { }
  @Input() Unwantedrecords: boolean = true;
  ngOnInit(): void {

  }
  @Input() items: any;
  @Input() filterddata: any;
  details = {
    SecratariatDetails:{
        SerialNumber:'',
        DISTRICT:'',
        MANDAL:'',
        SECRETARIAT_CODE:'',
        SECRETARIAT_NAME:'',
        Urban_Or_Rural:'',
        MANDAL_Or_ULB:'',
        PASSWORD:'',
        Mandal_Key:'',
    },
    Primraydetails:{
        Connection_to_Work:'',
        Name:'',
        Age:'',
        Father_Name:'',
        Mother_Name:'',
        Guardian:'',
        Gender:'',
        MandalKey:'',
        Date:'',
        Father_Work:'',
        Mother_Work:'',
        Cast:'',
        Religion:'',
        Type_of_Work:'',
        Mandal_Key_work:'',
        SchoolJoined:'',
        StudiedClass:'',
        ClasstobeAdmitted:'',
        Nearest_School:'',
        SchoolAddress:'',
        MentallyRetired:'',
        DeafandDumb:'',
        InheritedDisabilities:'',
        PovertyandMalnutration:'',
        Physicallyhandycapped:'',
        Ration:'',
        Aadhar:'',
        LivingRequirements:'',
    }
}
  Getalldetails(Connection_to_work: any) {
    this.getuser.Getindetail({id:Connection_to_work}).subscribe((data:any)=>{
      if(data){
        this.details = data;
      }
      else{
        console.log("Error Occured");
      }
    })
  }
}
