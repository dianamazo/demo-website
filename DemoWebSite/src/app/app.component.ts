import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // photos = [
  //     { href: '/home', alt: 'hola soy un alt', src: 'https://angular.io/assets/images/logos/angular/angular.svg'},
  //     { href: '/home', alt: 'hola soy un alt', src: 'http://placeimg.com/640/480/any'},
  //     { href: '/home', alt: 'hola soy un alt', src: 'http://lorempixel.com/400/200/animals'},
  //     { href: '/home', alt: 'hola soy un alt', src: 'http://lorempixel.com/400/200/sports/2'},
  //     { href: '/home', alt: 'hola soy un alt', src: 'http://lorempixel.com/400/200/animals'},
  //     { href: '/home', alt: 'hola soy un alt', src: 'http://lorempixel.com/400/200/sports/2'},
  //     { href: '/home', alt: 'hola soy un alt', src: 'http://lorempixel.com/400/200/animals'},
  //   ];
  photos =  [
    {href: '/home', alt: 'hola soy un alt',
    src: 'https://angular.io/assets/images/logos/angular/angular.svg'},
    {href: '/home', alt: 'hola soy un alt',
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNjEOlXi2u1hdP0VPf0i3FQqE7S2y8qULWHp23HMscbDer2u8C'},
    {href: '/home', alt: 'hola soy un alt',
    src: 'https://angular.io/assets/images/logos/angular/angular.svg'},
    {href: '/home', alt: 'hola soy un alt',
    src: 'https://angular.io/assets/images/logos/angular/angular.svg'},
    {href: '/home', alt: 'hola soy un alt',
    src: 'https://angular.io/assets/images/logos/angular/angular.svg'},
    {href: '/home', alt: 'hola soy un alt',
    src: 'https://angular.io/assets/images/logos/angular/angular.svg'}
  ];
}
