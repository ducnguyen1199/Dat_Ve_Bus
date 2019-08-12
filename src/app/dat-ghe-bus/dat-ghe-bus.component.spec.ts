import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatGheBusComponent } from './dat-ghe-bus.component';

describe('DatGheBusComponent', () => {
  let component: DatGheBusComponent;
  let fixture: ComponentFixture<DatGheBusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatGheBusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatGheBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
