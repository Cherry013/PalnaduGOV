import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  constructor() { }
  @Input() Unwantedrecords: boolean = true;
  ngOnInit(): void {
  }
  @Input() items: any;
  @Input() filterddata: any;
  details={
    Name : "",
    Connection_to_Work: ""
  };
  Getalldetails(Connection_to_work:any){
    console.log(Connection_to_work)
    this.details = {
      Name : "Mark Nicholas",
      Connection_to_Work: Connection_to_work
    }
  }
}
