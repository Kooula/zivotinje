import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss'],
})
export class DogsComponent {
  dogFact: any;

  constructor(private api: ApiService) {
    this.api.getRandomDogFacts().subscribe((response) => {
      this.dogFact = response;
    });
  }
}
