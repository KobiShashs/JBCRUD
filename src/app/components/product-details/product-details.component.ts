import { DataService } from './../../services/data.service';
import { RestApiService } from './../../services/rest-api.service';
import { Product } from 'src/models/Products';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  public product = new Product();

  public type: string = 'Add';
  public id: number;

  public constructor(
    private activatedRoute: ActivatedRoute,
    private restApiService: RestApiService,
    private router: Router,
    private dataService: DataService) {
    this.id = Number(activatedRoute.snapshot.params.id);
  }

  ngOnInit(): void {
    if (this.id !== 0) {
      this.type = 'Update';
      this.product.id = this.id;

      this.product = this.dataService.getProducts().filter(p => p.id === this.product.id)[0];
    } else {
      this.type = 'Add';
    }

  }


  public addOrUpdateCustomer(): void {

    alert(this.product.name + ' ' + this.product.amount + ' ' + this.product.price);
    alert(JSON.stringify(this.product));
    if (this.id === 0) {
      //Add
      this.restApiService.addProduct(this.product).subscribe(
        (res) => { alert('Product Added'); },
        (err) => { alert(err.message); });
    } else {
      //Update
      this.restApiService.updateProduct(this.product).subscribe(
        (res) => { alert('Product Updated'); },
        (err) => { alert(err.message); });
    }

    this.router.navigateByUrl('/one');

  }

  public isNegative(any: any): boolean {
    return (Number(any) < 0);
  }

  public isAPerfectNumber(any: any): boolean {

  }

}
