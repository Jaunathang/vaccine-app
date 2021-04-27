import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort'; 
import { MatPaginator } from '@angular/material/paginator'; 
import { ResultatService } from '../resultat.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private resultatService: ResultatService) { }

  columnsToDisplay: string[];
  dataSource: MatTableDataSource<[]>;

  ngOnInit(): void {
    this.columnsToDisplay = ['localite', 'enfant', 'adulte', 'aine', 'total'];
    this.dataSource = new MatTableDataSource(this.resultatService.getAll());
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getAll(): any[] {
    return this.resultatService.getAll();
  }

  filtrerData(valeurFiltre: string): void {
    //alert(valeurFiltre);
    this.dataSource.filter = valeurFiltre.trim().toLocaleLowerCase();
  }

  getTopEnfant(): any[] {
    return this.resultatService.getTopEnfant();
  }

}
