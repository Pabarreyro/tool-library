import { Component, OnInit } from '@angular/core';
import { ToolService } from '../tool.service'

@Component({
  selector: 'app-tool-list',
  templateUrl: './tool-list.component.html',
  styleUrls: ['./tool-list.component.css'],
  providers: [ToolService]
})
export class ToolListComponent implements OnInit {

  // tools: ??

  constructor ( private toolService: ToolService ) { }

  ngOnInit() {
    // this.tools = this.toolService.
  }

}
