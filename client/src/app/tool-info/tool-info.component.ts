import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Tool } from '../models/tool.model';
import { ToolService } from '../tool.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-tool-info',
  templateUrl: './tool-info.component.html',
  styleUrls: ['./tool-info.component.css'],
  providers: [ToolService]
})
export class ToolInfoComponent implements OnInit {
private req: any;
tools: Tool[]=[];
  constructor( private toolService: ToolService ) { }

  ngOnInit() {
    this.req = this.toolService.getTools().subscribe(data=>{
    let toolsData=data.json();
    toolsData.forEach((item)=>{
      let newTool = new Tool(
        item.pk,
        item.title,
        item.createDate,
        item.status,
        item.description,
        item.brand,
        item.lateFee,
        item.active,
        item.featured,
        item.dueDate,
        item.imgUrl
      );
      this.tools.push(newTool);
    });
  })
}
}
