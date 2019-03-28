import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { Tool } from 'src/app/shared/models/tool.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ListManagerService } from 'src/app/core/services/list-manager.service';

@Component({
  selector: 'app-card-tool',
  templateUrl: './card-tool.component.html',
  styleUrls: ['./card-tool.component.css']
})
export class CardToolComponent {
  modalRemoveTool: BsModalRef;
  @Input() tool: Tool;
  
  constructor(private modalService: BsModalService,
              private listManageService: ListManagerService) { }


  openModalRemoveTool(template: TemplateRef<any>) {
    this.modalRemoveTool = this.modalService.show(template);
  }

  toolRemoved(removed) {
    if(removed) {
      this.modalRemoveTool.hide();
      this.listManageService.update.next(true);
    }
  }

  closeModal(close) {
    if(close) this.modalRemoveTool.hide();
  }
}
