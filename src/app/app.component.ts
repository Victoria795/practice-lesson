import { Component, OnInit } from '@angular/core';
import { IUser } from './interface/user';
import { UsersService } from './data/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'practice-lesson';

  users: IUser[] = []

  constructor(private _UserService: UsersService) {}

  ngOnInit(): void {
    this._UserService.getList()
    .subscribe(response => {
      this.users = response.data
    })
  }
}
