import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Tool } from 'src/app/shared/models/tool.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToolsService } from 'src/app/core/services/tools.service';

@Component({
  selector: 'app-modal-add-tool',
  templateUrl: './modal-add-tool.component.html',
  styleUrls: ['./modal-add-tool.component.css']
})
export class ModalAddToolComponent implements OnInit {
  @Output() toolAdded = new EventEmitter<Tool>();

  toolForm: FormGroup;
  tags: string[] = [];
  constructor(private formBuilder: FormBuilder,
              private toolsService: ToolsService) { }

  ngOnInit() {
    this.toolForm = this.formBuilder.group({
      title: ['', Validators.required],
      link: ['', Validators.required],
      description: ['', Validators.required],
      tags: [new Array<string>(), Validators.required]
    });
  }

  addTool() {
    const tool = this.toolForm.getRawValue();
    tool.tags =  this.tags;
    console.log(tool);

    if(tool && this.tags) {
      this.toolsService.addTool(tool)
        .subscribe(
          () => {
            this.toolAdded.emit(tool);
          }
        );
    }
  }

  includeTag(tag: string) {
    let findSpace = tag.indexOf(' ') >= 0;

    if(findSpace) {
      this.tags.push(tag.trim());
      console.log(this.tags);

      this.toolForm.get('tags').setValue('');
    }
  }

  removeTag(tag: string) {
    this.tags = this.tags.filter((value) => {
      return value !== tag;
    });
  }
}
