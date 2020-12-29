import { Router } from '@angular/router';
import { Component, Injectable, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-main-interface',
  templateUrl: './main-interface.component.html',
  styleUrls: ['./main-interface.component.css'],
})
@Injectable({ providedIn: 'root' })
export class MainInterfaceComponent implements OnInit {
  /*
  variable to detrmaine the display type

*/
  displayType: string = 'vertical';

  constructor(private router: Router) {}

  ngOnInit(): void {}
  /**
   *choose between vertical board and flashes
   **/
  login() {
    if (this.displayType == 'vertical') this.router.navigateByUrl('vertical');
    else if (this.displayType == 'flashes')
      this.router.navigateByUrl('flashes');
  }
}
