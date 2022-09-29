import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { InsertService } from '../insert.service';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {

  constructor(private Insert: InsertService, private router: Router) { }
  Details: any;
  Child: any;
  aadhar: any;
  AAdhar: any;
  School: any;
  SavedLogin: any;
  fatherwork = "Labour";
  StudiedClass = "";
  Aadharno = "";
  RationCardNumber = false;
  reset = false;
  Uniqueid ="";
  InsertErr = false;
    Yes() {
  this.Child = true;
}
No() {
  this.Child = false;
}
AAdharYes() {
  this.aadhar = true;
}
AAdharNo() {
  this.aadhar = false;
}
RationYes() {
  this.RationCardNumber = true;
}
RationNo() {
  this.RationCardNumber = false;
}
Reset(form: any){
  form.reset();
  this.reset = false;
}
onSubmit(form: any) {
  console.log(form);
  if (form.StudiedClass == undefined) {
    form.StudiedClass = "Not Joined";
  }
  console.log(Object.keys(form).length);
  this.reset = false;
  form = this.Insert.SaveData(form);
  this.Insert.SubmitData(form).subscribe((data:any) => {
    if (data) {
      if(data.err){
        this.reset = false;
        this.InsertErr = true;
        console.log(data.err,data.Message);
      }
      else{
      this.reset = true;
      this.InsertErr = false;
      this.Uniqueid = data.UniqueIdOfthePerson + " Successfully Registerd.....";

      }
    }
    else {
      console.log("Failed to Insert",form.value.Name);
    }
  })
}

ngOnInit(): void {
  this.SavedLogin = this.Insert.SaveData({ form: "_" });
  if(this.SavedLogin.SECRETARIAT_CODE == undefined){
  this.router.navigate(['/Login']);
}
  }
}
