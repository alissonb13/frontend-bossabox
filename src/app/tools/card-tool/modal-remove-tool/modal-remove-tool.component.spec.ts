import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRemoveToolComponent } from './modal-remove-tool.component';

describe('ModalRemoveToolComponent', () => {
  let component: ModalRemoveToolComponent;
  let fixture: ComponentFixture<ModalRemoveToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalRemoveToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRemoveToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
