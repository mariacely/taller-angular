import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {

  series: Array<Serie> = [];

  seasonsAvg: number = 0;

  constructor(public serieService: SerieService) {}

  getSeries() {
    this.serieService.getSeries().subscribe((series: Serie[]) => {
      this.series = series;
      this.getAvg();
    });
  }

  getAvg() {
    let sum: number = 0;
    this.series.forEach(serie => {
      sum += serie.seasons;
    });
    this.seasonsAvg = sum / this.series.length;
  }

  ngOnInit() {
    this.getSeries();
  }

}
