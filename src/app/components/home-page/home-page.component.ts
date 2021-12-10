import { Component, OnInit } from '@angular/core';

interface exampleTopic {
  title: string;
  root: string
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent implements OnInit {

  public examples: exampleTopic[] = [
    {
      title: "ViewChild",
      root: "/view-child"
    },
    {
      title: "test",
      root: "test"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
