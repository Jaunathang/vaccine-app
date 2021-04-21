import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  indexDiapo: number;

  ngOnInit(): void {
    this.indexDiapo = 1;
    this.afficherDiapos(this.indexDiapo);
  }

  incrementDiapo(n: number): void {
    this.afficherDiapos(this.indexDiapo += n);
  }

  diapoActuelle(n: number): void {
    this.afficherDiapos(this.indexDiapo = n);
  }

  afficherDiapos(n: number): void {
    const diapos: any[] = Array.from(document.getElementsByClassName("diapo"));
    let i;
    let points = document.getElementsByClassName("point");
    if (n > diapos.length) { this.indexDiapo = 1 }
    if (n < 1) { this.indexDiapo = diapos.length }
    for (i = 0; i < diapos.length; i++) {
      diapos[i].style.display = "none";
    }
    for (i = 0; i < points.length; i++) {
      points[i].className = points[i].className.replace(" active", "");
    }
    diapos[this.indexDiapo - 1].style.display = "block";
    points[this.indexDiapo - 1].className += " active";
  }

}
