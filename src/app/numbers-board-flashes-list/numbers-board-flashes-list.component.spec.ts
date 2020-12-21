import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbersBoardFlashesListComponent } from './numbers-board-flashes-list.component';

describe('NumbersBoardFlashesListComponent', () => {
  let component: NumbersBoardFlashesListComponent;
  let fixture: ComponentFixture<NumbersBoardFlashesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumbersBoardFlashesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumbersBoardFlashesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
