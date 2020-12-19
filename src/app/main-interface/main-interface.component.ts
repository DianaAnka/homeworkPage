import { Router } from '@angular/router';
import { Component, Injectable, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-interface',
  templateUrl: './main-interface.component.html',
  styleUrls: ['./main-interface.component.css'],
})
@Injectable({ providedIn: 'root' })
export class MainInterfaceComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  login() {
    this.router.navigateByUrl('home');
  }
}
