import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsaTableComponent } from './psa-table.component';

describe('PsaTableComponent', () => {
  let component: PsaTableComponent;
  let fixture: ComponentFixture<PsaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsaTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
