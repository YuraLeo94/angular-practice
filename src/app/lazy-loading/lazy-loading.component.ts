import { Component } from '@angular/core';
import { exampleTopic } from '../components/home-page/home-page.component';

interface Menu extends exampleTopic { }
@Component({
  selector: 'app-lazy-loading',
  templateUrl: './lazy-loading.component.html',
  styleUrls: ['./lazy-loading.component.less']
})
export class LazyLoadingComponent {

  public menu: Menu[] = [
    {
      title: 'Users',
      root: '/lazy-loading/users'
    }
  ];

}
