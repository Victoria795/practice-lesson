import { Component, Input } from '@angular/core';
import { IUser } from 'src/app/interface/user';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input() user!: IUser

  isVisible = false
  
}
