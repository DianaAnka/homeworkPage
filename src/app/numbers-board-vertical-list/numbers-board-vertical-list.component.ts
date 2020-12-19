import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable, Subscription, timer } from 'rxjs';
import { map, scan, takeWhile, tap } from 'rxjs/operators';

@Component({
  selector: 'app-numbers-board-vertical-list',
  templateUrl: './numbers-board-vertical-list.component.html',
  styleUrls: ['./numbers-board-vertical-list.component.css'],
  //TODO animation problem
  animations: [
    trigger('itemsAnimation', [
      transition(
        '* => *',
        [
          query('.item', style({ transform: 'translateY(-1000%)' })),
          query(
            '.item',
            stagger('6000ms', [
              animate(
                '{{duration}}ms',
                style({ transform: 'translateY(1000%)' })
              ),
            ])
          ),
        ],
        { params: { duration: 10000 } }
      ),
    ]),
  ],
})
export class NumbersBoardVerticalListComponent implements OnInit {
  /**
   * holder for rxjs subscriptions
   *
   * used mainly to unsubscribe from this subscriptions
   */
  subscription$: Subscription = new Subscription();

  /**
   * list of numbers to show
   */
  list: any[] = [
    '31',
    '63',
    '-4',
    '7',
    '-3',
    '-60',
    '10',
    '20',
    '-60',
    '3',
    '-63',
  ];

  /**
   * the total time to render the list of numbers
   */
  time: number = 20000;
  timeAsString: string = this.time.toString();

  /**
   * event fired after finish rendering all the list of numbers
   */
  @Output() onFinish = new EventEmitter<any>();

  currentIndex = 0;
  backMovement = false;

  /**
   * the current viewed list of numbers from the numbers list needed to be rendered
   */
  viewedList: any[];

  constructor() {}

  /**
   * here we building timer observable that:
   * emits the values to render from the list
   * emits on finish event after rendering all the list
   */
  ngOnInit(): void {
    this.subscription$.add(
      this.initValuesController(timer(0, this.timePerItem))
    );
  }
  initValuesController(obs: Observable<any>) {
    return obs
      .pipe(
        takeWhile((index) => index < this.list.length),

        tap((index) => (this.currentIndex = index + 1)),

        map((index) => this.list[index]),

        map((item, index) => ({
          value: Math.abs(item),
          sign: index ? (item > 0 ? '' : '-') : '',
        })),

        /**
         * building a list with max length of (3)
         * if more than (3) items then when any new item come we remove thee first one
         */
        scan(
          ({ list, previousLists }: any, current) => {
            if (!this.backMovement) {
              list.push(current);
              if (list.length > 3) list.shift();
              previousLists.push([...list]);
            } else {
              if (previousLists.length) {
                previousLists.pop();
                list = [...previousLists[previousLists.length - 1]];
              }
            }

            return { list, previousLists };
          },
          { list: [], previousLists: [] }
        )
      )
      .subscribe({
        next: ({ list }) => (this.viewedList = list),
        complete: () => this.onFinish.emit(),
      });
  }

  /**
   * getter that dynamically calculate a font size depend on viewed numbers list length
   *
   * its return value in range [10,20]
   */
  get valueFontSize() {
    if (!this.list || !this.list.length) return 0;

    let len = this.list.length;

    return Math.max(10, Math.min(10, 50 / len));
  }

  /**
   * getter that calculate and return time span between each item in the list for the givin time
   */
  get timePerItem() {
    return this.time / this.list.length;
  }
}
