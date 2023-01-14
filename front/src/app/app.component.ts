import { Component, OnInit } from '@angular/core';
import { Article } from 'src/contracts/Articles';
import { ResponseClass } from 'src/contracts/ResponseClass';
import { ApiService } from 'src/services/api.service';
import {environment} from '../../env/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  listaArticles?: Article[] = [];

  constructor(public apiService: ApiService) {}

  ngOnInit(): void {
    this.carregarArtigos();
  }

  title = 'front';

  carregarArtigos() {
    this.apiService
    .get(`${environment.apiEndpoint}?q=bitcoin`)
    .subscribe((resp: ResponseClass) => {
      this.listaArticles = resp.articles;
    })
  }


}
