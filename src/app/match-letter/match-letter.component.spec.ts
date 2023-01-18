import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchLetterComponent } from './match-letter.component';

describe('MatchLetterComponent', () => {
  let component: MatchLetterComponent;
  let fixture: ComponentFixture<MatchLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchLetterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
