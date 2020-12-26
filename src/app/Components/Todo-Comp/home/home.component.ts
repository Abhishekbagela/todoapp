import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // onscroll = () => {
  //   this.myFunction();
  // }

  // header = document.getElementById('myHeader');
  // sticky = this.header.offsetTop;

  // myFunction() {
  //   if (window.pageYOffset > this.sticky) {
  //     this.header.classList.add('sticky');
  //   } else {
  //     this.header.classList.remove('sticky');
  //   }
  // }
}
