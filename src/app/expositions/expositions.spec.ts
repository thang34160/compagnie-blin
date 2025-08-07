import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Expositions } from './expositions';

describe('Expositions', () => {
  let component: Expositions;
  let fixture: ComponentFixture<Expositions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Expositions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Expositions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
