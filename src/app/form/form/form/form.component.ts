import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServerService } from 'src/app/autenticazione/server.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @ViewChild('f') form!: NgForm;
  erroreserver = undefined;
  constructor(private serverservice: ServerService) {}

  ngOnInit(): void {}
  onSubmit() {
    console.log(this.form.value);
    this.serverservice.postEroi(this.form.value).subscribe(
      (resp) => {
        console.log(resp);
        this.erroreserver = undefined;
      },
      (err) => {
        console.log(err.error);
        this.erroreserver = err.error;
      }
    );
    this.form.resetForm;
  }
}
