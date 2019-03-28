import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddToolComponent } from './modal-add-tool.component';

describe('ModalAddToolComponent', () => {
  let component: ModalAddToolComponent;
  let fixture: ComponentFixture<ModalAddToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAddToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
