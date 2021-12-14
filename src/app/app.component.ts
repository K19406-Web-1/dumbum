import { AfterContentInit, Component } from '@angular/core';
import { Product } from 'src/models/product';

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
export class AppComponent implements AfterContentInit {
  ngAfterContentInit(): void {
    isLoading = false;
  }

  title = 'dumbum';

  get loading() {
    return isLoading;
  }

  loadComChay() {
    fetch('assets/data/comChay.json')
      .then(response => {
        if (response.ok) {
          response.json()
            .then(data => console.log(data as Product[]));
        }
      })
  }
}
