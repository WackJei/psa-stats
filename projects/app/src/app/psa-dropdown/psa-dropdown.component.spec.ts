import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsaDropdownComponent } from './psa-dropdown.component';

describe('PsaDropdownComponent', () => {
  let component: PsaDropdownComponent;
  let fixture: ComponentFixture<PsaDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsaDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsaDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
