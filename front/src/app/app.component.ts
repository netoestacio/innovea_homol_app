import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';
import {environment} from '../../env/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(public apiService: ApiService) {}

  ngOnInit(): void {
    this.carregarArtigos();
  }

  title = 'front';

  carregarArtigos() {
    this.apiService
    .get(`${environment.apiEndpoint}?q=bitcoin`)
    .subscribe(resp => {
      console.log(resp);
    })
  }


}
