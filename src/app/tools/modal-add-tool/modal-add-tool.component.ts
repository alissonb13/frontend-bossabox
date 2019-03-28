import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Tool } from 'src/app/shared/models/tool.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToolsService } from 'src/app/core/services/tools.service';

@Component({
  selector: 'app-modal-add-tool',
  templateUrl: './modal-add-tool.component.html',
  styleUrls: ['./modal-add-tool.component.css']
})
export class ModalAddToolComponent implements OnInit {
  @Output() toolAdded = new EventEmitter<Tool>();

  toolForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private toolsService: ToolsService) { }

  ngOnInit() {
    this.toolForm = this.formBuilder.group({
      title: '',
      link: '',
      description: '',
      tags: new Array<string>()
    });
  }

  addTool() {
    const tool = this.toolForm.getRawValue();

    this.toolsService.addTool(tool)
      .subscribe(
        () => {
          this.toolAdded.emit(tool);
        }
      );
  }

  transform(value: string) {
    let tags: string[] = [];
    let array = value.split(' ');

    array.forEach((value, index) => {
      if(value !== '') {
        tags.push(value);
      } 
    });

    console.log(tags);
  }
}
