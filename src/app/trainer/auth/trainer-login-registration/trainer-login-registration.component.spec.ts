import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerLoginRegistrationComponent } from './trainer-login-registration.component';

describe('TrainerLoginRegistrationComponent', () => {
  let component: TrainerLoginRegistrationComponent;
  let fixture: ComponentFixture<TrainerLoginRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrainerLoginRegistrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrainerLoginRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
