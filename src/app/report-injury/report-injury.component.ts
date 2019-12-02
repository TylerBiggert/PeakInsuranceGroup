import { Component, OnInit } from '@angular/core'; // imports Component decorator from the core library

@Component({
  selector: 'app-report-injury', // custom HTML tag
  templateUrl: './report-injury.component.html',
  styleUrls: ['./report-injury.component.css']
})
export class ReportInjuryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
