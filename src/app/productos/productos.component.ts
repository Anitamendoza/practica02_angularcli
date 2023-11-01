import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  products: Product[] = [];
  newProduct: Product = new Product();
  editMode = false;
  editedProductIndex = -1;

  addProduct() {
    if (this.editMode) {
      this.products[this.editedProductIndex] = { ...this.newProduct };
      this.editMode = false;
    } else {
      this.products.push({ ...this.newProduct });
    }
    this.newProduct = new Product();
  }

  deleteProduct(index: number) {
    this.products.splice(index, 1);
  }

  editProduct(index: number) {
    this.editMode = true;
    this.editedProductIndex = index;
    this.newProduct = { ...this.products[index] };
  }

  cancelEdit() {
    this.editMode = false;
    this.newProduct = new Product();
  }
}

export class Product {
  codigo: string ='';
  descripcion: string='';
  precio: number=0;
}

