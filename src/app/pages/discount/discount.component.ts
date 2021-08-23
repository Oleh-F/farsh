import { Component, OnInit } from '@angular/core';
import { IDiscount } from 'src/app/shared/models/discount/discount.model';
import { DiscountService } from 'src/app/shared/services/discount/discount.service';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.scss']
})
export class DiscountComponent implements OnInit {
 public userDiscounts: Array<IDiscount> = []; 
  
  constructor(
    private discountService: DiscountService 
  ) { }

  ngOnInit(): void {
    this.loadDiscounts();
  }
loadDiscounts(): void {
  this.userDiscounts = this.discountService.getDiscounts();
  console.log(this.userDiscounts);
  
}
}
