import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-ng-grid',
  templateUrl: './ng-grid.component.html',
  styleUrls: ['./ng-grid.component.css']
})
export class NgGridComponent implements OnInit {

  columnDefs = [
    {headerName: 'Make', field: 'make', sortable: true, filter: true},
    {headerName: 'Model', field: 'model', sortable: true, filter: true},
    {headerName: 'Price', field: 'price', sortable: true, filter: true}
];

rowData: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.rowData = this.http.get('https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/sample-data/rowData.json').toPromise();
  }

}
