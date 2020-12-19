import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbersBoardVerticalListComponent } from './numbers-board-vertical-list.component';

describe('NumbersBoardVerticalListComponent', () => {
  let component: NumbersBoardVerticalListComponent;
  let fixture: ComponentFixture<NumbersBoardVerticalListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumbersBoardVerticalListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumbersBoardVerticalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
