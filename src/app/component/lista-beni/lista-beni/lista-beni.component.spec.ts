import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBeniComponent } from './lista-beni.component';

describe('ListaBeniComponent', () => {
  let component: ListaBeniComponent;
  let fixture: ComponentFixture<ListaBeniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaBeniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaBeniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
