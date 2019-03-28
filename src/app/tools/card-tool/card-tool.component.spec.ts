import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardToolComponent } from './card-tool.component';

describe('CardToolComponent', () => {
  let component: CardToolComponent;
  let fixture: ComponentFixture<CardToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
