import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymLoginRegistrationComponent } from './gym-login-registration.component';

describe('GymLoginRegistrationComponent', () => {
  let component: GymLoginRegistrationComponent;
  let fixture: ComponentFixture<GymLoginRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GymLoginRegistrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GymLoginRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
