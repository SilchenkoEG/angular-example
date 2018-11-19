import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Input() name;
  @Input() arr;
  private dataMain: any[];

  constructor() {
  }
  async ngOnInit() {
    this.dataMain = await fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json());
  }

}
