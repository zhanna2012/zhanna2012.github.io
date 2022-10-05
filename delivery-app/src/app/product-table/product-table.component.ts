import { Component, OnInit } from '@angular/core';
export interface ProductBacklogModel {
  priority: number,
  task: string,
  storyPoints: number,
  tag: string,
  sprint: string
}

const ELEMENT_DATA: ProductBacklogModel[] = [
  {
    priority: 1,
    task: 'Розподіл обов\'язків серед учасників',
    storyPoints: 5,
    tag: 'preparation',
    sprint: '1'
  },
  {
    priority: 2,
    task: 'Планування функціоналу застосунку',
    storyPoints: 8,
    tag: 'preparation',
    sprint: '2'
  },
  {
    priority: 2,
    task: 'Розробка макету графічного інтерфейсу',
    storyPoints: 6,
    tag: 'UI',
    sprint: '3'
  },
  {
    priority: 1,
    task: 'Розробка застосунку',
    storyPoints: 10,
    tag: 'functional',
    sprint: '4-11'
  },
  {
    priority: 3,
    task: 'Тестування застосунку',
    storyPoints: 8,
    tag: 'testing',
    sprint: '12'
  },
]


export interface ProductBacklogModel {
  priority: number;
  task: string;
  storyPoints: number;
  tag: string;
  sprint: string
}



@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['priority', 'task', 'storyPoints', 'tag', 'sprint'];
  dataSource = ELEMENT_DATA;


  ngOnInit(): void {
  }

}
