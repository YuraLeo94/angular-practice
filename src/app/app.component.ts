import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'angular-practice';

  constructor(private location: Location, private router: Router) { }

  public onBack(): void {
    this.location.back()
  }
  
  public get showBackButton(): boolean {
    return this.router.url !== '/';
  }
}
