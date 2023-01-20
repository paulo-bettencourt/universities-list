import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {MatSelect} from "@angular/material/select";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {

  @ViewChild('countryName') countryName: MatSelect | undefined;
  countries!: any;
  universities!: any;
  universities$!: any;

  constructor(private service: ApiService) {
    this.service.getCountries().subscribe(async (data: any) => {
      this.countries = await data
    })
    console.log("ahh", this.countries)

  }

  async getUniversity() {

    this.service.getUniversity(this.countryName?.value).subscribe(async data => {
      {
        this.universities = await data;
        console.log("univ", this.universities);
        this.dataSource = new MatTableDataSource(this.universities);
      }
    })

    console.log("nova variavel", this.universities)

  // this.universities$ = this.service.getUniversity(this.countryName?.value);

  this.EmpData2 = [
    {
      "web_pages": [
        "http://www.aabfs.org/"
      ],
      "state-province": 'null',
      "alpha_two_code": "JO",
      "name": "LOREM ISPUM!!!!!!",
      "country": "Jordan",
      "domains": [
        "aabfs.org"
      ]
    }
  ]
    this.dataSource = new MatTableDataSource(this.EmpData2);
  }

  displayedColumns: string[] = [
    "web_pages",
  "state-province",
  "alpha_two_code",
  "name",
  "country",
  "domains"
  ];

  EmpData: any[] = [
    {
      countries: 'UK'
    },
    {
      countries: 'Portugal'
    },
  ];

  EmpData1: any[] = [
    {
      id: 1,
      firstname: 'Mellie',
      lastname: 'Gabbott',
      email: 'mgabbott0@indiatimes.com',
      gender: 'Female',
      department: 'Support',
      jobtitle: 'Support Analyst',
      project: { name: 'project1', id: 1 },
    },
    {
      id: 2,
      firstname: 'Yehudi',
      lastname: 'Ainsby',
      email: 'yainsby1@w3.org',
      gender: 'Female',
      department: 'Support',
      jobtitle: 'Support Analyst',
      project: { name: 'project2', id: 2 },
    },
    {
      id: 3,
      firstname: 'Noellyn',
      lastname: 'Primett',
      email: 'nprimett2@ning.com',
      gender: 'Female',
      department: 'Human Resources',
      jobtitle: 'Project Manager',
      project: { name: 'project3', id: 3 },
    },
    {
      id: 4,
      firstname: 'Stefanie',
      lastname: 'Yurenin',
      email: 'syurenin3@boston.com',
      gender: 'Female',
      department: 'Marketing',
      jobtitle: 'Senior officer',
      project: { name: 'project4', id: 4 },
    },
    {
      id: 5,
      firstname: 'Stormi',
      lastname: "O'Lunny",
      email: 'solunny4@patch.com',
      gender: 'Female',
      department: 'Engineering',
      jobtitle: 'Software Engineer',
      project: { name: 'project5', id: 5 },
    },
    {
      id: 6,
      firstname: 'Keelia',
      lastname: 'Giraudy',
      email: 'kgiraudy5@nba.com',
      gender: 'Male',
      department: 'Marketing',
      jobtitle: 'Senior officer',
      project: { name: 'project6', id: 6 },
    },
    {
      id: 7,
      firstname: 'Ikey',
      lastname: 'Laight',
      email: 'ilaight6@wiley.com',
      gender: 'Male',
      department: 'Support',
      jobtitle: 'Support Analyst',
      project: { name: 'project7', id: 7 },
    },
    {
      id: 8,
      firstname: 'Adrianna',
      lastname: 'Ruddom',
      email: 'aruddom7@seattletimes.com',
      gender: 'Male',
      department: 'Marketing',
      jobtitle: 'Senior officer',
      project: { name: 'project8', id: 8 },
    },
    {
      id: 9,
      firstname: 'Dionysus',
      lastname: 'McCory',
      email: 'dmccory8@ox.ac.uk',
      gender: 'Male',
      department: 'Engineering',
      jobtitle: 'Software Engineer',
      project: { name: 'project9', id: 9 },
    },
    {
      id: 10,
      firstname: 'Claybourne',
      lastname: 'Shellard',
      email: 'cshellard9@rediff.com',
      gender: 'Male',
      department: 'Engineering',
      jobtitle: 'Software Engineer',
      project: { name: 'project10', id: 10 },
    },
  ];

  EmpData2 = [
    {
      "web_pages": [
        "http://www.aabfs.org/"
      ],
      "state-province": 'null',
      "alpha_two_code": "JO",
      "name": "Arab Academy for Banking and Financial Sciences",
      "country": "Jordan",
      "domains": [
        "aabfs.org"
      ]
    }
  ]

  dataSource = new MatTableDataSource(this.EmpData2);
  dataSourceWithPageSize = new MatTableDataSource(this.EmpData2)

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild('paginatorPageSize') paginatorPageSize!: MatPaginator;

  pageSizes = [3, 5, 7];

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSourceWithPageSize.paginator = this.paginatorPageSize;
  }



}
