import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NumbersService } from '../../services/numbers.service';
import { RestApiService } from '../../services/rest-api.service';
import { Product } from 'src/models/Products';
@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  public products: Product[];

  public constructor(
    private title: Title,
    private numbersService: NumbersService,
    private restApiService: RestApiService,
    private dataService: DataService) {

  }

  ngOnInit(): void {
    this.title.setTitle('One');
    this.numbersService.setNum(17);
    this.restApiService.getProducts().subscribe(
      (products) => { this.products = products;
                      this.dataService.setProducts(products);
      },
      (err) => { alert(err.message); }
    );
  }

  // public updateProduct(): void {
  //   alert('Update Product');
  // }

  public deleteProduct(id: number): void {
    const action = confirm('are you sure you want to delete ' + id + '?');
    if (action) {
      this.restApiService.deleteProduct(id).subscribe(

        // (res) => { this.products = this.products.filter(product => product.id !== id); },
        // (err) => { alert(err.message); });

        (res) => { this.products = this.products.filter(product => product.id !== id); },
        (err) => {
          alert(err.message);
          this.products = this.products.filter(product => product.id !== id);
        });
    }

  }

  



}
