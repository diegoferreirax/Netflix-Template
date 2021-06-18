import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilesSelectionComponent } from './profiles-selection.component';

describe('ProfilesSelectionComponent', () => {
  let component: ProfilesSelectionComponent;
  let fixture: ComponentFixture<ProfilesSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilesSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilesSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
