import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tool } from 'src/app/shared/models/tool.model';
import { ToolsService } from 'src/app/core/services/tools.service';

@Component({
  selector: 'app-modal-remove-tool',
  templateUrl: './modal-remove-tool.component.html',
  styleUrls: ['./modal-remove-tool.component.css']
})
export class ModalRemoveToolComponent implements OnInit {
  @Input() tool: Tool;
  @Output() closeModal = new EventEmitter<boolean>();
  @Output() toolRemoved = new EventEmitter<boolean>();

  constructor(private toolsService: ToolsService) { }

  ngOnInit() {
  }

  removeTool() {
    this.toolsService.deleteTool(this.tool.id)
      .subscribe(() => {
        this.toolRemoved.emit(true);
      });
  }

  cancel() {
    this.closeModal.emit(true);
  }
}
