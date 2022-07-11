import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServerService } from '../server.service';

@Component({
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  hide = true;
  @ViewChild('f') form!: NgForm;
  erroreserver = undefined;
  constructor(
    private http: HttpClient,
    private router: Router,
    private serverservice: ServerService
  ) {}

  ngOnInit(): void {
    this.serverservice.authSubject.subscribe((val) => console.log(val?.user));
  }
  reg() {
    this.router.navigate(['registrazione']);
  }
  onSubmit() {
    this.serverservice.login(this.form.value).subscribe(
      (resp) => {
        this.erroreserver = undefined;
        this.router.navigate(['homepage']);
      },
      (err) => {
        console.log(err);
        this.erroreserver = err.error;
      }
    );
  }
}
