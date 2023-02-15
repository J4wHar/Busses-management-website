import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  NgxMatTimepickerModule,
  NgxMatTimepickerDirective,
  NgxMatTimepickerComponent,
} from 'ngx-mat-timepicker';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
})
export class SearchPageComponent {
  showInput: boolean = true;
  states = ['Ariana', 'Tunis'];
  cities = ['Ghazela', 'Raoued', 'Charguia', 'Tunis'];
  stations = ['technopole1', 'RaouedZohour1', 'Charguia2-1'];
  busses = [
    {
      bus_name: 'bus1',
      bus_plate: 'matricule1',
      rate: 'rate1',
      mappath:
        'https://img.freepik.com/free-vector/double-decker-bus-concept-illustration_114360-11580.jpg?w=2000',
      reviews: {},
      capacity: 'capacity1',
    },
    {
      bus_name: 'bus2',
      bus_plate: 'matricule2',
      rate: 'rate2',
      mappath:
        'https://img.freepik.com/free-vector/double-decker-bus-concept-illustration_114360-11580.jpg?w=2000',
      reviews: {},
      capacity: 'capacity2',
    },
    {
      bus_name: 'bus3',
      bus_plate: 'matricule3',
      rate: 'rate3',
      mappath:
        'https://img.freepik.com/free-vector/double-decker-bus-concept-illustration_114360-11580.jpg?w=2000',
      reviews: {},
      capacity: 'capacity3',
    },
    {
      bus_name: 'bus3',
      bus_plate: 'matricule4',
      rate: 'rate4',
      mappath:
        'https://img.freepik.com/free-vector/double-decker-bus-concept-illustration_114360-11580.jpg?w=2000',
      reviews: {},
      capacity: 'capacity4',
    },
    {
      bus_name: 'bus3',
      bus_plate: 'matricule4',
      rate: 'rate4',
      mappath:
        'https://img.freepik.com/free-vector/double-decker-bus-concept-illustration_114360-11580.jpg?w=2000',
      reviews: {},
      capacity: 'capacity4',
    },
    {
      bus_name: 'bus3',
      bus_plate: 'matricule4',
      rate: 'rate4',
      mappath:
        'https://img.freepik.com/free-vector/double-decker-bus-concept-illustration_114360-11580.jpg?w=2000',
      reviews: {},
      capacity: 'capacity4',
    },
    {
      bus_name: 'bus3',
      bus_plate: 'matricule4',
      rate: 'rate4',
      mappath:
        'https://img.freepik.com/free-vector/double-decker-bus-concept-illustration_114360-11580.jpg?w=2000',
      reviews: {},
      capacity: 'capacity4',
    },
    {
      bus_name: 'bus3',
      bus_plate: 'matricule4',
      rate: 'rate4',
      mappath:
        'https://img.freepik.com/free-vector/double-decker-bus-concept-illustration_114360-11580.jpg?w=2000',
      reviews: {},
      capacity: 'capacity4',
    },
    {
      bus_name: 'bus3',
      bus_plate: 'matricule4',
      rate: 'rate4',
      mappath:
        'https://img.freepik.com/free-vector/double-decker-bus-concept-illustration_114360-11580.jpg?w=2000',
      reviews: {},
      capacity: 'capacity4',
    },
    {
      bus_name: 'bus3',
      bus_plate: 'matricule4',
      rate: 'rate4',
      mappath:
        'https://img.freepik.com/free-vector/double-decker-bus-concept-illustration_114360-11580.jpg?w=2000',
      reviews: {},
      capacity: 'capacity4',
    },
    {
      bus_name: 'bus3',
      bus_plate: 'matricule4',
      rate: 'rate4',
      mappath:
        'https://img.freepik.com/free-vector/double-decker-bus-concept-illustration_114360-11580.jpg?w=2000',
      reviews: {},
      capacity: 'capacity4',
    },
    {
      bus_name: 'bus3',
      bus_plate: 'matricule4',
      rate: 'rate4',
      mappath:
        'https://img.freepik.com/free-vector/double-decker-bus-concept-illustration_114360-11580.jpg?w=2000',
      reviews: {},
      capacity: 'capacity4',
    },
  ];

  selectedField1 = '';
  breakpoint: number | undefined;
  form!: FormGroup;
  constructor(
    private breakpointObserver: BreakpointObserver,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      startState: new FormControl('', Validators.required),
      startCity: new FormControl('', Validators.required),
      startStation: new FormControl('', Validators.required),
      endState: new FormControl('', Validators.required),
      endCity: new FormControl('', Validators.required),
      endStation: new FormControl('', Validators.required),
      time: new FormControl('09:00', Validators.required),
    });
    this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .subscribe((result) => {
        if (result.breakpoints[Breakpoints.XSmall]) {
          this.breakpoint = 1;
        } else if (result.breakpoints[Breakpoints.Small]) {
          this.breakpoint = 2;
        } else if (result.breakpoints[Breakpoints.Medium]) {
          this.breakpoint = 3;
        } else if (result.breakpoints[Breakpoints.Large]) {
          this.breakpoint = 4;
        } else if (result.breakpoints[Breakpoints.XLarge]) {
          this.breakpoint = 4;
        }
      });
  }

  onSubmit() {
    if (this.form.valid) {
      this.http
        .post('http://localhost:8080/searchFormData', this.form.value, {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
          }),
        })
        .subscribe((res) => {
          console.log(res);
        });
    } else {
      console.log('empty' + this.form.valid);
    }
  }
}
