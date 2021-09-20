import { Component, OnInit } from '@angular/core';
import { IDiscount } from 'src/app/shared/models/discount/discount.model';
import { DiscountService } from 'src/app/shared/services/discount/discount.service';
import { transliterate as tr, slugify } from 'transliteration';

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
    this.discountService.getJSONDiscount().subscribe(
      data => {
        this.userDiscounts = data;
      }, err => {
        console.log(err);
        
      }
    )
  }

  transliterateTitle(title:string): string {
    return slugify(title);
  }






}
