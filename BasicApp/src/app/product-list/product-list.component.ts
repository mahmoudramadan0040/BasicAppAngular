import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  filterList ="cart";
  products: any[]=[
    {
      "productid":2, 
      "productname":"Product 2",
      "productCode":"GNU",
      "releaseDate":"2019-01-01",
      "description":"This is product 2",
      "price":100,
      "starRating":3.2,
      "imageUrl":"https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    },
    {
      "productid":3,
      "productname":"Product 3",
      "productCode":"GNU",
      "releaseDate":"2019-01-01",
      "description":"This is product 3",
      "price":100,
      "starRating":3.2,
      "imageUrl":"https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"

    }
  ]
  toggleImage(): void{
    this.showImage = !this.showImage;
  }
    
  
  ngOnInit(): void {
  }

}
