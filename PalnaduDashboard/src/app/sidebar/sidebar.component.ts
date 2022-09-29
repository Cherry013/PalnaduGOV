import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }
  @Input() clicked = "";
  @Output() Senddata = new EventEmitter<{Mandal:string,MandalName:String}>();
  ngOnInit(): void {
  }
  changeClass(value: string,MandalName:String){
    this.Senddata.emit({Mandal:value,MandalName:MandalName});
  }
}
