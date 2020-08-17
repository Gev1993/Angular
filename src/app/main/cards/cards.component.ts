import { Product } from '../../core/models/product';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/service/data.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  public product: Product[] = [];
  public search: string;
  public cachedProduct: Product[] = [];
  public isLoading: boolean = true;
  public isEdit: boolean = false;
  registrationForm: FormGroup;
  price: FormControl;
  title: FormControl;
  description: FormControl;

  // tslint:disable-next-line:variable-name
  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    setTimeout(this._getProducts.bind(this), 1000);

    this._dataService.getTodos().subscribe( (res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
      });
    this.createFormControl();
    this.createControl();
  }

  // tslint:disable-next-line:typedef
    createFormControl() {
    this.price = new FormControl('', [
      Validators.minLength(4), Validators.maxLength(10)
    ]);
    this.title = new FormControl('', [
      Validators.minLength(5), Validators.maxLength(50)
    ]);
    this.description = new FormControl('', [
      Validators.minLength(10), Validators.maxLength(250)
    ]);
    }

  // tslint:disable-next-line:typedef
    createControl() {
    this.registrationForm = new FormGroup({
      price: this.price,
      title: this.title,
      description: this.description
    });
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    if (this.registrationForm.valid) {
      console.log('submit');
      console.log(this.registrationForm.value);
    }
  }

  private _getProducts(): void {
     // this.cachedProduct = this.product = [
      // new Product(
      //   1,
      //   'ADILETTE BOOST SLIDES',
      //   'or pay over time in interest-free installments with Affirm or Klarna.',
      //   180,
    // tslint:disable-next-line:max-line-length
      //   'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/104cccdd859f489191c5ab0b00bb7ca1_9366/Ultraboost_20_Shoes_Black_EG0714_01_standard.jpg'
      // ),
      // new Product(
      //   2,
      //   'ASTRARUN SHOES',
      //   'HIGH-PERFORMANCE RUNNING SHOES WITH A MESSAGE OF STRENGTH AND UNITY.',
      //   200,
      //   'https://assets.adidas.com/images/w_600,f_auto,q_auto/3803313dd8b94f27ad66ab5800e60611_9366/Ultraboost_20_Shoes_Black_FV8340.jpg'
      // ),
      // new Product(
      //   3,
      //   'ULTRABOOST 20 SHOES',
      //   'HIGH-PERFORMANCE RUNNING SHOES WITH A PRECISE FIT.',
      //   280,
    // tslint:disable-next-line:max-line-length
      //   'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/d68dfa42a7064a9b9fceabdc014f3727_9366/Ultraboost_20_Shoes_White_FV8336_01_standard.jpg'
      // )
    // ];

    this._dataService.getProductsFromDb().subscribe(users => this.product = this.cachedProduct  = users.products);

    this.isLoading = !this.isLoading;
  }

  public searchProduct(searchText: string): void {
    this.isLoading = true;
    this.search = searchText;
    setTimeout(() => {
      this.product = this.cachedProduct.filter((product: Product) => {
        return product.title.toLowerCase().includes(this.search.toLowerCase());
      });
      this.isLoading = false;
    }, 200 );
  }

  public sort($event: boolean): void {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.product.length; i++) {
      for (let k = 0; k < this.product.length - 1; k++) {
        if (this.product[k].price > this.product[k + 1].price) {
          const tmp = this.product[k];
          this.product[k] = this.product[k + 1];
          this.product[k + 1] = tmp;
        }
      }
    }
    if ($event === true){
      this.product = this.product.reverse();
    }
  }

  // tslint:disable-next-line:typedef
  showEdit() {
    this.isLoading = true;
    setTimeout(() => {
      this.isEdit = !this.isEdit;
      this.isLoading = false;
    }, 300);
  }

}
