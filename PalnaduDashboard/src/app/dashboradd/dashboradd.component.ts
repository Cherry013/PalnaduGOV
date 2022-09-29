import { Component, Input, OnInit } from '@angular/core';
import { GetvaluesService } from '../getvalues.service';

@Component({
  selector: 'app-dashboradd',
  templateUrl: './dashboradd.component.html',
  styleUrls: ['./dashboradd.component.css']
})
export class DashboraddComponent implements OnInit {
  Right = "fa-solid fa-arrow-right";
  Begging = 0;
  Hotels = 0;
  pvt = 0;
  rail = 0;
  brick = 0;
  Factories = 0;
  Construction = 0;
  other = 0;
  childvariable = "";
  Palnadu = false;
  Total_Count = 0;
  Work: any;
  items: any;
  filtereddata = '';
  MandalName!:String;
  Todays_Count = 0;
  constructor(private getvales: GetvaluesService) { }

  ngOnInit(): void {
    this.Palnadu = true;
    this.childvariable = 'palnadu';
    this.MandalName = 'Palnadu'
    this.getvales.Getallvalues('palnadu').subscribe((data: any) => {
      if (data) {
        this.items = data[0];
        this.Total_Count = data[1];
        this.Work = data[2];
        this.Begging = this.Work.Begging;
        this.brick = this.Work.Brick_Klins;
        this.Construction = this.Work.Construction_Works;
        this.Factories = this.Work.Factories;
        this.Hotels = this.Work.Hotels;
        this.rail = this.Work.Railway_Station;
        this.pvt = this.Work.Shop_Pvt;
        this.other = this.Work.others;
      }
      else {
        console.log("Not Found!")
      }
    })
  }



  Toggle() {
    if (this.Right == 'fa-solid fa-arrow-left text-danger') {
      this.Right = 'fa-solid fa-arrow-right';
    }
    else {
      this.Right = 'fa-solid fa-arrow-left text-danger';
    }
  }




  filterdata(Value: string) {
    this.getvales.getPresisedvalues({ Value: Value, Mandal: this.childvariable }).subscribe((data: any) => {
      if (data) {
        this.items = data;
      } else {
        console.log("Error");
      }
    });
  }




  taking(eventData: { Mandal: string ,MandalName:String}) {  //ChildEvent
    this.Palnadu = true;
    this.childvariable = eventData.Mandal;
    this.MandalName = eventData.MandalName;
    if (this.childvariable.toLowerCase() == "palnadu") {
      this.getvales.Getallvalues(this.childvariable).subscribe((data: any) => {
        if (data) {
          this.Work = data[2];
          this.Total_Count = data[1];
          this.items = data[0];
          this.Begging = this.Work.Begging;
          this.brick = this.Work.Brick_Klins;
          this.Construction = this.Work.Construction_Works;
          this.Factories = this.Work.Factories;
          this.Hotels = this.Work.Hotels;
          this.rail = this.Work.Railway_Station;
          this.pvt = this.Work.Shop_Pvt;
          this.other = this.Work.others;
        }
        else {
          console.log("Not Found!")
        }
      })
    }
    else {
      this.Palnadu = false;
      this.getvales.Getallvalues(this.childvariable).subscribe((data: any) => {
        if (data) {
          this.Work = data.Work;
          this.items = data.Result;
          this.Begging = this.Work.Begging;
          this.brick = this.Work.Brick_Klins;
          this.Construction = this.Work.Construction_Works;
          this.Factories = this.Work.Factories;
          this.Hotels = this.Work.Hotels;
          this.rail = this.Work.Railway_Station;
          this.pvt = this.Work.Shop_Pvt;
          this.other = this.Work.others;
        }
        else {
          console.log("Not found", this.childvariable)
        }
      })
    }
  }
}
