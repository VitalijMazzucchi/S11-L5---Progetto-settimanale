import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/autenticazione/server.service';
import { Supereroi } from 'src/app/interfacce/supereroi';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent implements OnInit {
  post!: Supereroi[];
  erroreserver = undefined;
  constructor(private serverservice: ServerService) {}

  ngOnInit(): void {
    this.getAllPost();
  }

  getAllPost() {
    this.serverservice.getPostEroi().subscribe((Response) => {
      this.post = Response;
    });
  }
  deletePost(i: Supereroi) {
    this.serverservice.delPostEroi(i);
    this.getAllPost();
  }
}
