import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PierwiastekComponent } from './pierwiastek.component';

describe('PierwiastekComponent', () => {
  let component: PierwiastekComponent;
  let fixture: ComponentFixture<PierwiastekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PierwiastekComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PierwiastekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
