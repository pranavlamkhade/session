import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let obj = {fname: 'Pranav', lname: 'Lamkhade'};
    localStorage.setItem('Userid', JSON.stringify(obj));
    localStorage.setItem('localData', 'localstorage-Pranav');
    sessionStorage.setItem('sessionData', 'sessionstorage-Arnav');

    console.log (JSON.parse(localStorage.getItem('Userid')));
    console.log(localStorage.getItem('localData'));
    console.log(sessionStorage.getItem('sessionData'));

  }

}
