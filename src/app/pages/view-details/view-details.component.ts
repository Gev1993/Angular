import { Component, OnInit } from '@angular/core';
import {Product} from '../../core/models/product';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../core/service/data.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

  public product: Product;

  constructor(private activateRoute: ActivatedRoute, private _dataService: DataService) { }

  ngOnInit(): void {
    this.activateRoute.params
      .subscribe(({ id }) => {
        this._dataService.getProductsFromDb()
          .subscribe(({ products }) => {
            this.product = products.filter((product) => product.id === +id)[0];
          });
      });

    this.activateRoute.queryParams
      .subscribe((queryParams) => {
        console.log(queryParams);
      });
  }

}
