import { Component } from '@angular/core';

interface User {
  name: string;
  surname: string;
  age: number;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less']
})
export class UsersComponent {

  public users: User[] = [
    {
      name: 'Jhon',
      surname: 'Smith',
      age: 33
    },
    {
      name: 'Marcus',
      surname: 'Smith',
      age: 33
    }
  ];

}
