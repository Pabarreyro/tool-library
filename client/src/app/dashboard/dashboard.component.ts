import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../user.service';
import { ToolService } from '../tool.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [UserService, ToolService]
})
export class DashboardComponent implements OnInit {
  user: User;
  tools: any[] = [];

  constructor(private userService: UserService, private toolService: ToolService) { }

  ngOnInit() {
    this.user = this.userService.getUser();
    this.toolService.getTools().subscribe(response => {
      console.log(response);
    });
  }
}
