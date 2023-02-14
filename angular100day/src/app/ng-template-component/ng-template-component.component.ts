import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-template-component',
  templateUrl: './ng-template-component.component.html',
  styleUrls: ['./ng-template-component.component.css']
})
export class NgTemplateComponentComponent implements OnInit {
/*
  We will learn about ng-template, ng-container, ng-outletTemplate
*/
  public counter!:number;

  ngOnInit(): void {
    this.counter = 10;
    throw new Error('Method not implemented.');
  }



}
