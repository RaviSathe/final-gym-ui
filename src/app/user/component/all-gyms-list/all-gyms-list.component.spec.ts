import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllGymsListComponent } from './all-gyms-list.component';

describe('AllGymsListComponent', () => {
  let component: AllGymsListComponent;
  let fixture: ComponentFixture<AllGymsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllGymsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllGymsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
