import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerComponentHolderComponent } from './trainer-component-holder.component';

describe('TrainerComponentHolderComponent', () => {
  let component: TrainerComponentHolderComponent;
  let fixture: ComponentFixture<TrainerComponentHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrainerComponentHolderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrainerComponentHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
