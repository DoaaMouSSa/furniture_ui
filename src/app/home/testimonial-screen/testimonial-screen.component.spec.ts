import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialScreenComponent } from './testimonial-screen.component';

describe('TestimonialScreenComponent', () => {
  let component: TestimonialScreenComponent;
  let fixture: ComponentFixture<TestimonialScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestimonialScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestimonialScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
