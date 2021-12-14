import { Component } from '@angular/core';

export interface exampleTopic {
  title: string;
  root: string
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent {

  public examples: exampleTopic[] = [
    {
      title: "ViewChild",
      root: "/view-child"
    },
    {
      title: "Lazy-loading",
      root: "/lazy-loading"
    }
  ]

}
