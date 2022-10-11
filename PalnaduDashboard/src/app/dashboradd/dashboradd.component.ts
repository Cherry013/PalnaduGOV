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
  Count = 0;
  Work: any;
  items: any;
  filtereddata = '';
  MandalName!: String;
  Date = '';
  TotalCountClass = 'card mx-1 center TotalCount border border-success text-white my-2 bg-success';
  EnableTodaysCount = false;
  constructor(private getvales: GetvaluesService) { }

  ngOnInit(): void {
  }
  TodaysCount() {
    if (!this.EnableTodaysCount) {
      this.EnableTodaysCount = true;
      this.TotalCountClass = 'card mx-1 center TotalCount border border-danger text-white my-2 bg-danger';
      this.taking({ Mandal: this.childvariable, MandalName: this.MandalName });
    }
    else {
      this.EnableTodaysCount = false;
      this.TotalCountClass = 'card mx-1 center TotalCount border border-success text-white my-2 bg-success';
      this.taking({ Mandal: this.childvariable, MandalName: this.MandalName });
    }
  }
  filterdata(Value: string) {
    if (!this.EnableTodaysCount) {
      this.getvales.getPresisedvalues({ Value: Value, Mandal: this.childvariable }).subscribe((data: any) => {
        if (data) {
          this.items = data;
          console.log(this.childvariable,Value);
          console.log(data);
        } else {
          console.log("Error");
        }
      });
    }
    else {
      this.getvales.getPresisedvaluesBydate({ Value: Value, Mandal: this.childvariable }).subscribe((data: any) => {
        if (data) {
          console.log(this.childvariable,Value);
          console.log(data);
          
          this.items = data;
        } else {
          console.log("Error");
        }
      });
    }
  }
  taking(eventData: { Mandal: string, MandalName: String }) {
    if (!this.EnableTodaysCount) {
      this.childvariable = eventData.Mandal;
      this.MandalName = eventData.MandalName;
      if (this.childvariable.toLowerCase() == "palnadu") {
        this.getvales.Getallvalues(this.childvariable).subscribe((data: any) => {
          if (data) {
            this.Work = data[2];
            this.Count = data[1];
            this.items = data[0];
            console.log(this.items.length);
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
            console.log("Not Found!");
          }
        })
      }
      else {
        this.getvales.Getallvalues(this.childvariable).subscribe((data: any) => {
          if (data) {
            this.Work = data.Work;
            this.items = data.Result;
            this.Count = this.items.length;
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
    else {
      this.childvariable = eventData.Mandal;
      this.MandalName = eventData.MandalName;
      if (this.childvariable.toLowerCase() == "palnadu") {
        this.getvales.GetallvaluesBydate(this.childvariable).subscribe((data: any) => {
          if (data) {
            this.Work = data[2];
            this.Count = data[1];
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
        this.getvales.GetallvaluesBydate(this.childvariable).subscribe((data: any) => {
          if (data) {
            this.Work = data.Work;
            this.items = data.Result;
            this.Count = this.items.length;
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
  Toggle() {
    if (this.Right == 'fa-solid fa-arrow-left text-danger') {
      this.Right = 'fa-solid fa-arrow-right';
    }
    else {
      this.Right = 'fa-solid fa-arrow-left text-danger';
    }
  }
}
