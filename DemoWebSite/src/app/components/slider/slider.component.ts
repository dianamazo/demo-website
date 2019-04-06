import { Component, OnInit, OnDestroy, Output, Input } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { IPhoto } from 'src/app/interfaces/iphoto';
import { Subscriber, interval } from 'rxjs';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  animations: [
    trigger('slider', [
      state('show',
        style( {
          opacity: 1,
          transform: 'rotate(0deg)'
        })
      ),
      state('hide',
        style( {
          opacity: 0,
          transform: 'rotate(180deg)'
        })
      ),
      transition('show => hide', animate('1000ms ease-out')),
      transition('hide => show', animate('1000ms ease-in'))
    ])
  ]
})


export class SliderComponent implements OnInit, OnDestroy {
  // Lógica del componente
  sliderShow = 'show';
  photosShow = [];
  selected: number = 0;
  sliderInterval: any;

  // Lógica de datos y muestras
  @Input() photos: Array<IPhoto> = [];
  @Input() cantOfImageShow: number = 1;

  constructor() { }

  ngOnInit() {
    this.sliderChange(this.selected, false);
    this._sliderInterval();
  }

  ngOnDestroy() {
    this.sliderInterval.complete();
  }

  private _sliderInterval() {
    const sliderInterval = interval(6000);
    this.sliderInterval = sliderInterval.subscribe(
      () => {
        // this.selected++;
        // const paginator = this.photos.length;
        // if (this.selected === paginator) {
        //   this.selected = 0;
        // }
        this.selected++;
        this.sliderChange(this.selected, false);
      });
  }

  sliderChange(selected: number, byClick: boolean) {
    if (byClick) {
      this.sliderInterval.complete();
      setTimeout(() => {
        this._sliderInterval();
      }, 5000);
    }
    this.sliderShow = 'hide';
    // this.selected++;
    const _selectect = selected * this.cantOfImageShow;
    const paginator = this.photos.length / this.cantOfImageShow;
    if (_selectect === paginator) {
      this.selected = 0;
    }
    this.photosShow = [];
    for (let i = 0; i < this.cantOfImageShow; i++) {
      const pointer = selected + 1;
      this.photosShow.push(this.photos[pointer]);
    }
    setTimeout(() => {
      this.sliderShow = 'show';
    }, 500);
  }
}
