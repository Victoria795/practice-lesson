import { Component } from '@angular/core';
import { UsersService } from 'src/app/data/users.service';
import { IUser } from 'src/app/interface/user';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent {
  users: IUser[] = []

  constructor(private _UserService: UsersService) {}

  ngOnInit(): void {
    this._UserService.getList()
    .subscribe(response => {
      this.users = response.data
    })
}

}
