import { Component, OnInit } from '@angular/core';
import { ResultatService } from '../resultat.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(private resultatService: ResultatService) { }

  columnsToDisplay = ['localite', 'enfant', 'adulte', 'aine', 'total'];

  ngOnInit(): void {
    
  }

  getAll(): any[] {
    return this.resultatService.getAll();
  }

  getTopEnfant(): any[] {
    return this.resultatService.getTopEnfant();
  }

}
