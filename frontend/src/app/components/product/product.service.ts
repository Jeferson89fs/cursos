import { catchError, map } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Product } from './Product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  base_url = 'http://localhost:3001/products';

  constructor(
    private SnackBar: MatSnackBar,
    private http: HttpClient
  ) {

  }

  showMessage(msg: string, type: string = 'success'): void {
    let classe = 'msg-'+type;
    
    this.SnackBar.open(msg, 'x', {
      duration: 113000,
      horizontalPosition: 'right',      
      verticalPosition: 'top',    
      panelClass: [classe],  
    })
    
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.base_url, product).pipe(
      map(obj => obj), 
      catchError(e => this.errorHandler(e))
    );
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.base_url).pipe(
      map(obj => obj), 
      catchError(e => this.errorHandler(e))
    );
    
  }
  errorHandler(e: any): Observable<any> {
    alert('XXX')
    this.showMessage('Ocorreu um erro' , 'error');
    return EMPTY;
  }

  find(id: string): Observable<Product> {
    return this.http.get<Product>(this.base_url + '/' + id).pipe(
      map(obj => obj), 
      catchError(e => this.errorHandler(e))
    );
  }

  update(product: Product): Observable<Product[]> {
    let url = `${this.base_url}/${product.id}`;
    return this.http.put<Product[]>(url, product).pipe(
      map(obj => obj), 
      catchError(e => this.errorHandler(e))
    );
  }

  delete(id: string): Observable<Product> {
    let url = `${this.base_url}/${id}`;
    return this.http.delete<Product>(url).pipe(
      map(obj => obj), 
      catchError(e => this.errorHandler(e))
    );
  }

}
