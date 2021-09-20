import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
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
  private editDiscountID = 0;
  public editStatus = false;
  public uploadPercent: Observable<number> | undefined | null;
  public image: string = '';
  public imageStatus:boolean = false;

  constructor(
    private discountService: DiscountService,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private storage: AngularFireStorage
  ) { }

  ngOnInit(): void {
    this.initDiscountForm();
    this.loadDiscounts();
  }

  initDiscountForm(): void {
    this.discountForm = this.fb.group({
      title: [null, Validators.required],
      text: [null, Validators.required],
      image: this.customImage
    })
  }
  //-------integration with fake rest api--------//


  loadDiscounts(): void {
    // this.adminDiscounts = this.discountService.getDiscounts();
    this.discountService.getJSONDiscount().subscribe(
      data => {
      this.adminDiscounts = data;
      }, err => {
        console.log(err);
      }
    )
  }

  createDiscount(): void {
    const newDiscount = this.discountForm.value;
    this.discountService.createJSONDiscount(newDiscount).subscribe(
      () => {
        this.loadDiscounts();
      }, err => {
        console.log(err);

      }
    )
    this.initDiscountForm();
    this.imageStatus = false;
    
  }

  deleteDiscount(discount: IDiscount): void {
    this.discountService.deleteJSONDiscount(discount.id as number).subscribe(
      () => {
        this.loadDiscounts();
      }, err => {
        console.log(err);
      } 
    )
  }

  editDiscount(discount: IDiscount): void {
    this.discountForm.patchValue({
      title: discount.title,
      text: discount.text,
      image: discount.image
    });
    this.editDiscountID = discount.id as number;
    this.editStatus = true;
  }

  updateDiscount(): void {
    const discount = this.discountForm.value;
    this.discountService.updateJSONDiscount(discount, this.editDiscountID).subscribe(
      () => {
        this.loadDiscounts();
      }, err => {
        console.log(err);
      }
    );
    this.initDiscountForm();
    this.editStatus = false;
  }

  uploadFile(event: any): void {
    const file = event.target.files[0];
    const filePath = `images/${file.name}`;
    const task = this.storage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges() as Observable<number>;
    task.then(image => {
      this.storage.ref(`images/${image.metadata.name}`).getDownloadURL().subscribe(url => {
        this.image = url;
        this.discountForm.patchValue({
          image: this.image
        })
        this.imageStatus = true;
        this.uploadPercent = null;
      });
    });
  }

  deleteFile(discount?: IDiscount): void {
    const pathImage = discount?.image || this.image;
    this.storage.storage.refFromURL(pathImage).delete().then(
      () => {
        console.log('Image deleted!');
        this.image = '';
        this.imageStatus = false;
      }
    ).catch(err => console.log(err));
  }





}
