import { Component } from '@angular/core';
import { DistrictPageService } from 'src/app/district-page.service';

  
@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.css']
})
  
export class SinglePageComponent {
  single: any
  constructor(private District: DistrictPageService) { }
  ngOnInit():void { 
    let pageId = localStorage.getItem('id');
    let singleDataArray = this.District.getData();
    // console.log(singleDataArray);
    
    this.single = singleDataArray.filter(d => d.name === pageId)
    console.log(this.single); 
  }
}
