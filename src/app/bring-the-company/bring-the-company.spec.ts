import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BringTheCompany } from './bring-the-company';

describe('BringTheCompany', () => {
  let component: BringTheCompany;
  let fixture: ComponentFixture<BringTheCompany>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BringTheCompany]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BringTheCompany);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
