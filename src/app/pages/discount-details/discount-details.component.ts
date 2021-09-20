import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDiscount } from 'src/app/shared/models/discount/discount.model';
import { DiscountService } from 'src/app/shared/services/discount/discount.service';

@Component({
  selector: 'app-discount-details',
  templateUrl: './discount-details.component.html',
  styleUrls: ['./discount-details.component.scss']
})
export class DiscountDetailsComponent implements OnInit {

  discount!: IDiscount;

  constructor(
    private discountService: DiscountService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loadDiscount();
  }

  loadDiscount(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get("id"));
    this.discountService.getOneJSONDiscount(id).subscribe(data => {
      this.discount = data;
    })
  }

}
