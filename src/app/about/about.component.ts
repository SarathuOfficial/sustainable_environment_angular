import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  name: any;
  constructor( 
    private route : ActivatedRoute,
   ){}
   ngOnInit(){
    this.route.queryParams.subscribe(params =>{
      this.name = params['name'];
    })
   }
}
