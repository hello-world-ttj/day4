import { Component } from '@angular/core';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.css']
})
export class HomeCardComponent {
  cardData = [
    {
      "name": "Artforms",
      "imgUrl": "https://www.keralatourism.org/images/homecontentimage/mobile/art-form.jpg"
    },
    {
      "name": "Festivals",
      "imgUrl": "https://www.keralatourism.org/images/homecontentimage/mobile/pooram.jpg"
    },
    {
      "name": "village life",
      "imgUrl": "https://www.keralatourism.org/images/homecontentimage/mobile/cocnut-climbing-2.jpg"
    },
    {
      "name": "Kerala cuisine",
      "imgUrl": "https://www.keralatourism.org/images/homecontentimage/mobile/cusine3.jpg"
    },
    {
      "name": "Ayurveda",
      "imgUrl": "https://www.keralatourism.org/images/homecontentimage/mobile/ayurveda3.jpg"
    },
    {
      "name": "Backwaters",
      "imgUrl": "https://www.keralatourism.org/images/homecontentimage/desktop/kayakking-01.jpg"
    }
  ]
}
