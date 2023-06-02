import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private api: ApiService) {}
  productData: any[] = [];

  ngOnInit() {
    this.api.get().subscribe((res) => {
      this.productData = res;
      console.log('data response', res);
    });
  }
}
