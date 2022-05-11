import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Products } from 'app/models/products';
import { Subscription } from 'rxjs';
import { ProductsService } from './products.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private productService : ProductsService) { }

  products : Products[]
  product : Products
  error = null 
  check = false;
  isFetching = true;
  productForm : FormGroup
  disabled=true;
editMode = false;
subscription : Subscription
  ngOnInit(): void {
    this.productService.getProducts().subscribe((data)=> {
      this.products=data
      this.isFetching=false
      console.log(data)
    } , error => {
      this.isFetching=false
        console.log(error)
      this.error = error.message;
    })

    this.productForm = new FormGroup({
      'photo' : new FormControl(null , Validators.required),
      'title' : new FormControl(null , Validators.required),
      'description' : new FormControl(null , Validators.required),
      'quantity' : new FormControl(null , [Validators.required ,Validators.pattern(/^[0-9]+[0-9]*$/)]),
      'price' : new FormControl(null , [Validators.required ,Validators.pattern(/^[1-9]+[0-9]*$/)])
    })
  }


  unsubscribe() {
    this.editMode=false;
    this.disabled=true
    this.ngOnInit();
  }

  onSubmit() {
    this.check=true
    if (this.editMode){

      this.productService.updateProduct(this.product.productId,this.productForm.value).subscribe(() => {
        this.check= false;
      } , error => {
        this.error.next(error.message)
      });
      this.productForm.reset();
    } else {
      this.productService.addProduct(this.productForm.value).subscribe(() => {
        this.check =false;
      }, error => {
       this.error.next(error.message)
     });
      this.productForm.reset();
       }
    
  }

  onUpdate(id : string) {
    this.editMode=true
    this.disabled=false;
    this.subscription = this.productService.getProductById(id).subscribe((data) => {
      this.product = data
      console.log(this.product)
      this.productForm = new FormGroup({
        'photo' : new FormControl(this.product.photo , Validators.required),
        'title' : new FormControl(this.product.title , Validators.required),
        'description' : new FormControl(this.product.description , Validators.required),
        'quantity' : new FormControl(this.product.quantity , [Validators.required ,Validators.pattern(/^[0-9]+[0-9]*$/)]),
        'price' : new FormControl(this.product.price , [Validators.required ,Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    })
  }


  onDelete(id : string){
    this.check=true
    this.productService.deleteProduct(id).subscribe(()=> {
      this.check=false;
    }, error => {
      this.error = error.message
    });
  }
  onHandleError(){
    this.error = null
  }
}
