import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpScreenComponent } from './help-screen.component';

describe('HelpScreenComponent', () => {
  let component: HelpScreenComponent;
  let fixture: ComponentFixture<HelpScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HelpScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
