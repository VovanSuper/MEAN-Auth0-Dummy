import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from './../auth/auth.service';
import { ApiService } from '../app/api.service';
import { dataModel } from '../helpers/types';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  model;
  data: dataModel[] = [];
  csv: any;

  constructor(public auth: AuthService, public apiSvc: ApiService) { }

  ngOnInit() {
  }

  selectToday() {
    const now = new Date();

    this.model = this.fromModel(now);

  }

  getData() {
    if (!this.model)
      throw 'Please select date';

    console.log(this.model)
    console.log(this.toModel(this.model));

    if (this.auth.isAuthenticated()) {
      this.apiSvc.getData(this.toModel(this.model)).subscribe(
        resp => {
          if (resp.opStatus !== 'Ok')
            throw `Bad operation Status:: ${resp.opStatus}`
          this.data = resp.data;
        },
        err => {
          console.error(err)
        }
      );
    }
  }

  private fromModel(date?: Date): NgbDateStruct {
    return (date && date.getFullYear) ? { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() } : null;
  }

  private toModel(date?: NgbDateStruct): Date {
    return date ? (new Date(date.year, date.month - 1, date.day)) : null;
  }
}
