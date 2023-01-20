import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {MatSelect} from "@angular/material/select";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent  {

  @ViewChild('countryName') countryName: MatSelect | undefined;
  countries!: any;

  constructor(private service: ApiService) {
    this.service.getCountries().subscribe((data: any) => {
      this.countries = data})
  }

  getUniversity() {
    this.service.getUniversity(this.countryName?.value).subscribe(data => {
      console.log("univ", data)
    })
  }
}
