import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menu = [
    {
      name: 'home',
      link: '/home',
      disable: false,
      color: 'accent'
    },
    {
      name: 'blog',
      link: '/video',
      disable: false,
      color: 'accent'
    },
    {
      name: 'video',
      link: '/blog',
      disable: false,
      color: 'accent'
    },
    {
      name: 'cfp',
      link: '/cfp',
      disable: false,
      color: 'accent'
    },
  ];
  url: string = '/home';

  constructor(private router: Router) {
    // this.route.data.forEach((data) => {
    //   this.evento = data['event'];
    //   this.addMode = false;
    // });
  }

  ngOnInit() {
    this.router.events
      .subscribe(url => {
        const urlaux = (<any>url).url;
        if (urlaux !== undefined) {
          console.log(url);
          this.url = urlaux;
          // if (this.url === '/' || this.url === '/') {
          //   console.log(this.url);
          // }
        }
      });
  }

}
