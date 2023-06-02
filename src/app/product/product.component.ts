import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  constructor(private route: ActivatedRoute, private api: ApiService) {}
  productDetails: any;
  ngOnInit() {
    // subscribe to the parameters observable
    this.route.paramMap.subscribe((params) => {
      let id = params.get('id');
      this.api.getById(id).subscribe((res) => {
        console.log('data response', res);
        this.productDetails = res;
      });
    });
  }

  // https://fakestoreapi.com/products/1
}
