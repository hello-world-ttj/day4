import { Component } from '@angular/core';
import { DistrictPageService } from 'src/app/district-page.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent {
  constructor(private District: DistrictPageService, private router: Router) { }
  district = this.District.getData();

  gotoPage(id:string) {
    localStorage.setItem('id', id)
    this.router.navigate(['/single'])
  }
}
