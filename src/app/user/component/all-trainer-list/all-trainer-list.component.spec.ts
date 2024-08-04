import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTrainerListComponent } from './all-trainer-list.component';

describe('AllTrainerListComponent', () => {
  let component: AllTrainerListComponent;
  let fixture: ComponentFixture<AllTrainerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllTrainerListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllTrainerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
