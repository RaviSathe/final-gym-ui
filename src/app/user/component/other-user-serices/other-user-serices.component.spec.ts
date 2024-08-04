import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherUserSericesComponent } from './other-user-serices.component';

describe('OtherUserSericesComponent', () => {
  let component: OtherUserSericesComponent;
  let fixture: ComponentFixture<OtherUserSericesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OtherUserSericesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OtherUserSericesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
