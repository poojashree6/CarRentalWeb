import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentrecordComponent } from './rentrecord.component';

describe('RentrecordComponent', () => {
  let component: RentrecordComponent;
  let fixture: ComponentFixture<RentrecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentrecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
