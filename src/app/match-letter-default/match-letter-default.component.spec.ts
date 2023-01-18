import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchLetterDefaultComponent } from './match-letter-default.component';

describe('MatchLetterDefaultComponent', () => {
  let component: MatchLetterDefaultComponent;
  let fixture: ComponentFixture<MatchLetterDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchLetterDefaultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchLetterDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
