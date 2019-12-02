import { Component, OnInit } from '@angular/core';
import { ProvidersService } from '../providers.service';//plug in auto imports

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css']
})
export class ProvidersComponent implements OnInit 
{

	title = "List of Providers";
	providersList; //will get values from constructor

	constructor(service: ProvidersService) //create an instance of our providers service with dependency injection w/o using new keyword
	{ 
		this.providersList = service.getProviders(); //initializes the providersList
  	}

	ngOnInit() 
	{

	}

}
