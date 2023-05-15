import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisTrabajosComponent } from './misTrabajos.component';

describe('MisTrabajosComponent', () => {
  let component: MisTrabajosComponent;
  let fixture: ComponentFixture<MisTrabajosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisTrabajosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisTrabajosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
