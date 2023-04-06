import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  ngOnInit() {

  }

  fruitsData = [
    { name: 'gauva', quantity: 2, img: 'bbbbb' },
    { name: 'mango', quantity: 3, img: 'bbbbb' },
    { name: 'papaya', quantity: 4, img: 'bbbbb' },
    { name: 'papaya', quantity: 4, img: 'bbbbb' },
  ];

  showCard : any;

  showDetails(button) {
    this.showCard = button ;
    console.log(this.showCard)
  }
}
