import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSocialComponent } from './header-social.component';

describe('HeaderSocialComponent', () => {
  let component: HeaderSocialComponent;
  let fixture: ComponentFixture<HeaderSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderSocialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
