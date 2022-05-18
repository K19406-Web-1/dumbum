import { AfterContentInit, Component, OnInit } from '@angular/core';

let isLoading = true;

export function enableLoading() {
  isLoading = true;
}

export function disableLoading() {
  isLoading = false;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterContentInit {
  title = 'dumbum';
  isAdmin = false;

  ngOnInit(): void {
    this.isAdmin = location.pathname.startsWith('/admin/');
  }

  ngAfterContentInit(): void {
    isLoading = false;
  }

  get loading() {
    return isLoading;
  }
}
