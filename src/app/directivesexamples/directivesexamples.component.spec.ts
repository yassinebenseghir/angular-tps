import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesexamplesComponent } from './directivesexamples.component';

describe('DirectivesexamplesComponent', () => {
  let component: DirectivesexamplesComponent;
  let fixture: ComponentFixture<DirectivesexamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectivesexamplesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivesexamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
