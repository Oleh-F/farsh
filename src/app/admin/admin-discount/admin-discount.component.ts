import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IDiscount } from 'src/app/shared/models/discount/discount.model';
import { DiscountService } from 'src/app/shared/services/discount/discount.service';

@Component({
  selector: 'app-admin-discount',
  templateUrl: './admin-discount.component.html',
  styleUrls: ['./admin-discount.component.scss']
})
export class AdminDiscountComponent implements OnInit {

  public adminDiscounts: Array<IDiscount> = [];
  public discountForm!: FormGroup;
  public customImage = 'https://farsh.in.ua/wp-content/uploads/2020/12/DSC04807-scaled-e1608636715892-655x400.jpg';

  constructor(
    private discountService: DiscountService,
    private toastr: ToastrService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initDiscountForm();
    this.loadDiscounts();
  }

  initDiscountForm():void {
    this.discountForm = this.fb.group({
      title: [null, Validators.required],
      text:  [null, Validators.required],
      image: this.customImage
    })
  }

  loadDiscounts(): void {
    this.adminDiscounts = this.discountService.getDiscounts();
  }

  createDiscount():void {
    this.discountService.addDiscount(this.discountForm.value);
    this.discountForm.reset();
    
  }

}
