import { Component } from '@angular/core';

interface exampleTopic {
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
    }
  ]

}
