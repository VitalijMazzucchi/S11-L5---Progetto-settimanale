import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServerService } from '../server.service';

@Component({
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  @ViewChild('f') form!: NgForm;
  erroreserver = undefined;
  constructor(private serverservice: ServerService, private router: Router) {}

  ngOnInit(): void {}
  onSubmit() {
    //console.log(this.form.value)
    this.serverservice.signup(this.form.value).subscribe(
      (resp) => {
        console.log(resp);
        this.erroreserver = undefined;
        this.router.navigate(['/login']);
      },
      (err) => {
        console.log(err.error);
        this.erroreserver = err.error;
      }
    );
  }
}
