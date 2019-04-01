import { ToolsService } from '../core/services/tools.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Tool } from '../shared/models/tool.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ListManagerService } from '../core/services/list-manager.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {
  modalAddTool: BsModalRef;

  filter: string;
  onlyTags: boolean;  
  query: any;

  tools$: Observable<Array<Tool>>;

  constructor(private toolsService: ToolsService,
              private modalService: BsModalService,
              private listManagerService: ListManagerService) { }

  ngOnInit() {
    this.tools$ = this.toolsService.getTools();
    this.updateList();
  }

  openModalAddTool(template: TemplateRef<any>) {
    this.modalAddTool = this.modalService.show(template);
  }

  updateList() {
    this.listManagerService.update.subscribe(() => this.tools$ = this.toolsService.getTools());
  }

  searchFilter(term: string) {
    this.filter = term;
    if(this.filter !== '') {
      this.buildQueryParams();
      this.tools$ = this.toolsService.getTools(this.query);
    } else {
      this.tools$ = this.toolsService.getTools();
    }

    return this.filter;
  }
  
  buildQueryParams() {
    if(this.onlyTags) {
      this.query = { tags_like: this.filter };
    } else {
      this.query = { q: this.filter };
    }

    console.log(this.query);
  }

  searchOnlyTags(onlyTags: boolean) {
    this.onlyTags = onlyTags;
  }

  toolAdded(added) {
    if(added) {
      this.modalAddTool.hide();
      this.listManagerService.update.next(true);
    }
  }
}
