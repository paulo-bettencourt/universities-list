import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {MatSelect} from "@angular/material/select";
import {MatPaginator } from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild('paginatorPageSize') paginatorPageSize!: MatPaginator;
  @ViewChild('countryName') countryName: MatSelect | undefined;

  countries!: any;
  universities!: any;
  universities$!: any;
  elseVariable = 'Welcome to your search';
  dataSource = new MatTableDataSource(this.universities);
  dataSourceWithPageSize = new MatTableDataSource(this.universities);
  displayedColumns: string[] = [
    "name",
    "web_pages"
  ];
  welcome = false;
  hidePaginator = true;
  noResults = true;

  constructor(private service: ApiService) {
    this.service.getCountries().subscribe(async (data: any) => {
      this.countries = await data
    })
  }

  getUniversity() {
    this.service.getUniversity(this.countryName?.value).subscribe({
      next: (data) => {
        this.universities = data;
        this.welcome = true;
        if(this.universities.length === 0) {
          this.hidePaginator = true;
          this.noResults = false;
        } else {
          this.hidePaginator = false;
          this.noResults = true;
        }
        this.dataSource = new MatTableDataSource(this.universities);
        this.dataSource.paginator = this.paginator;
        this.dataSourceWithPageSize.paginator = this.paginatorPageSize;
      },
      error: (err) => {
        console.log("Error: ", err)
      }
    })
  }

  visitUniversityWebsite(web_pages: any) {
    window.open(web_pages, "mywindow","menubar=1,resizable=1,width=600,height=300");
  }

  clearData() {
    // @ts-ignore
    this.hidePaginator = true;
    this.welcome = false;
    this.noResults = true;
    this.dataSource = new MatTableDataSource();
  }

}
