import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

	title: string = "Get a Quote"; //title field to use in quote.component.html

  constructor() { }

  ngOnInit() {
  }

}
