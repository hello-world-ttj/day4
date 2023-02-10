import { Injectable } from '@angular/core';
import { district } from 'src/assets/data/data';
@Injectable({
  providedIn: 'root'
})
export class DistrictPageService {

  constructor() { }
  getData() {
    return district
  }

  // getSinglePage(id: string) {
  //   return district
  //  }
}
