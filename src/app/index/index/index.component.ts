import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {MatSelect} from "@angular/material/select";
import {MatPaginator } from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {ThemePalette} from "@angular/material/core";
import {FormBuilder} from "@angular/forms";
import {Title} from "@angular/platform-browser";
import {filter} from "rxjs";

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
  isLoading = false;
  form = this.fb.group({
      dropdown: ['']
  })

  constructor(private service: ApiService, private fb: FormBuilder) {
    this.getCountries();
  }

  getCountries() {
    this.isLoading = true;
    this.service.getCountries().subscribe(async (data: any) => {
      this.countries = await data;
      this.isLoading = false;
      this.countries.sort(function (a: any, b: any) {
        if (a.name.common < b.name.common) {
          return -1;
        }
        if (a.name.common > b.name.common) {
          return 1;
        }
        return 0;
      });
    })
  }

  getUniversities() {
    this.isLoading = true;
    this.service.getUniversity(this.countryName?.value).subscribe({
      next: (data) => {
        this.universities = data;
        this.universities.sort(function (a: any, b: any) {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
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
        this.isLoading = false;
      },
      error: (err) => {
        console.log("Error: ", err)
      }
    })
  }



  visitUniversityWebsiteOnClick(web_pages: any) {
    window.open(web_pages, "mywindow","menubar=1,resizable=1,width=600,height=300");
  }

  clearData() {
    // @ts-ignore
    this.hidePaginator = true;
    this.welcome = false;
    this.noResults = true;
    this.dataSource = new MatTableDataSource();
    this.form.controls['dropdown'].setValue(null)
  }


}
