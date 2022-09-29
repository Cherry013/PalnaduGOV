import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts-c',
  templateUrl: './charts-c.component.html',
  styleUrls: ['./charts-c.component.css']
})
export class ChartsCComponent implements OnInit {

  // public piedata: object[] = [];
  // public legendSettings: object | undefined;
  ngOnInit(): void {
    // this.piedata = [
    //   { x: 'Begging', y: 25 },
    //   { x: 'Hotel', y: 10 },
    //   { x: 'shop/pvt-Sector', y: 15 }, 
    //   { x: 'Railway Station', y: 15 },
    //   { x: 'Brick klins', y: 25 }, 
    //   { x: 'Factories', y: 10 }, 
    //   { x: 'Constrction Workers', y: 20 },
    //   { x: 'Others', y: 30 }
    // ];
    // this.legendSettings = {
    //   vsible: true
    // };
  }
}