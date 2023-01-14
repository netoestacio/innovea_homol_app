import { Injectable } from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {environment} from '../../env/environment';
import { ResponseClass } from "src/contracts/ResponseClass";

@Injectable()
export class ApiService {
  
  constructor(public http: HttpClient){}

  get(url: string): Observable<any> {
      return this.http.get<ResponseClass[]>(url, 
              {headers: {
                  'X-Api-Key': environment.apiKey
                }
              })
              .pipe(
                catchError(this.gerenciarErros)
              )
  }

  public gerenciarErros(error: HttpErrorResponse) {

    /* Gerencia erros do lado do cliente (angular) e/ou de rede, ou seja,
    quando a requisição não chega até o webservice. */
    if (error.error instanceof ErrorEvent) {
        console.error('Falha na aplicação do lado do cliente:', error.error.message);
    } else {
       console.error(
            `Status code: ${error.status}, ` +
            `Erros: ${error.error.valueOf()}`);

    }

      return throwError(error.error);
}

}