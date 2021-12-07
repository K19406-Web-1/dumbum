import { Component, OnInit } from '@angular/core';
import { signInWithPopup } from '@firebase/auth';
import { googleProvider, auth } from 'src/firebase';
import { disableLoading, enableLoading } from '../app.component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClickGoogle() {
    enableLoading();
    signInWithPopup(auth, googleProvider)
      .finally(disableLoading);
  }

}
