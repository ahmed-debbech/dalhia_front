import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from 'app/models/products';
import { TouchSequence } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http : HttpClient) { }

  url ="http://localhost:8089/api/v1/products/"

  getProducts() {
    return this.http.get<Products[]>(this.url)
  }

  addProduct(product : Products) {
    return this.http.post<Products>(this.url,product)
  }

  getProductById(id :string) {
    return this.http.get<Products>(this.url+id)
  }

  updateProduct(id : string , product : Products){
    return this.http.put<Products>(this.url+id,product)
  }
  deleteProduct(id : string) {
    return this.http.delete(this.url+id)
  }
}
