import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  Renderer2,
} from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { takeWhile, tap, map, mergeMap, take } from 'rxjs/operators';

/**
 * a component to render a list of numbers
 * with flash animation between them
 */

@Component({
  selector: 'app-numbers-board-flashes-list',
  templateUrl: './numbers-board-flashes-list.component.html',
  styleUrls: ['./numbers-board-flashes-list.component.css'],
  animations: [
    trigger('fadeInOut', [
      state(
        'in',
        style({
          opacity: '1',
        })
      ),
      transition(':enter', [
        style({
          opacity: '0',
        }),
        animate(300),
      ]),
      transition(':leave', [
        animate(
          300,
          style({
            opacity: '0',
          })
        ),
      ]),
    ]),
  ],
})
export class NumbersBoardFlashesListComponent implements OnInit {
  /**
   * holder for rxjs subscriptions
   *
   * used mainly to unsubscribe from this subscriptions
   */
  subscription$: Subscription = new Subscription();

  /**
   * list of numbers to show
   */
  list: number[] = [20, 30, -60, 45, -7, 99];

  /**
   * the total time to render the list of numbers
   */
  time: number = 10000;

  /**
   * event fired after finish rendering all the list of numbers
   */
  @Output() onFinish = new EventEmitter<any>();

  /**
   * the current number from the list needed to be rendered
   */
  viewedValue: string;

  currentIndex = 0;

  constructor(private renderer: Renderer2) {}

  /**
   * here we building timer observable that:
   * emits the values to render from the list
   * emits on finish event after rendering all the list
   */

  ngOnInit(): void {
    this.subscription$.add(this.exerciseTimerSub());
  }
  exerciseTimerSub = () =>
    timer(0, this.timePerItem)
      .pipe(
        takeWhile((index) => index < this.list.length),
        tap((index) => (this.currentIndex = index + 1)),
        map((index) => '' + this.list[index]),
        // merge two time spans for each number for animation
        mergeMap((item) =>
          timer(0, this.timePerItem - 300).pipe(
            take(2),
            map((index) => (index == 0 ? item : null))
          )
        )
      )
      .subscribe({
        next: (item) => (this.viewedValue = item),
        complete: () => this.onFinish.emit(),
      });

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  /**
   * getter that calculate and return time span between each item in the list for the givin time
   */
  get timePerItem() {
    return this.time / this.list.length;
  }

  /**
   * getter that dynamically calculate a font size depend on viewed value number length
   *
   * its return value in range [10,30]
   */
  get valueFontSize() {
    if (!this.viewedValue) return 0;
    return Math.max(10, Math.min(30, (100 * 1.5) / this.viewedValue.length));
  }
}
