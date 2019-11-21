import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaPersonaComponent } from './crea-persona.component';

describe('CreaPersonaComponent', () => {
  let component: CreaPersonaComponent;
  let fixture: ComponentFixture<CreaPersonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreaPersonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
