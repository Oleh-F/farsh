import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ICategory } from 'src/app/shared/models/category/category.model';
import { IProduct } from 'src/app/shared/models/product/product.model';
import { CategoryService } from 'src/app/shared/services/category/category.service';
import { ProductService } from 'src/app/shared/services/product/product.service';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.scss']
})
export class AdminProductComponent implements OnInit {

  public adminProducts: Array<IProduct> = [];
  public adminCategories: Array<ICategory> = [];
  public productForm!: FormGroup;
  private editProductID = 0;
  public editStatus = false;
  public uploadPercent: Observable<number> | undefined | null;
  public image: string = '';
  public imageStatus: boolean = false;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private storage: AngularFireStorage
  ) { }

  ngOnInit(): void {
    this.initProductForm();
    this.loadCategories();
    this.loadProducts();
  }

  initProductForm(): void {
    this.productForm = this.fb.group({
      category: ['Select category', Validators.required],
      name: [null, Validators.required],
      path: [null, Validators.required],
      description: [null, Validators.required],
      weight: [null, Validators.required],
      price: [null, Validators.required],
      image: [null],
      count: [1]
    })
  }

  loadCategories(): void {
    this.categoryService.get().subscribe(
      data => {
        this.adminCategories = data;
      }, err => {
        console.log(err);
      }
    )
  }

  loadProducts(): void {
    this.productService.get().subscribe(
      data => {
        this.adminProducts = data;
      }, err => {
        console.log(err);
      }
    )
  }

  createProduct(): void {
    const product = this.productForm.value;
    this.productService.create(product).subscribe(
      () => {
        this.loadProducts();
      }, err => {
        console.log(err);
      }
    )
    this.initProductForm();
    this.imageStatus = false;
  }

  deleteProduct(product: IProduct): void {
    this.productService.delete(product.id as number).subscribe(
      () => {
        this.loadProducts();
      }, err => {
        console.log(err);
      }
    )
  }

  editProduct(product: IProduct): void {
    this.productForm.patchValue({
      category: [product.category.name],
      name: [product.name],
      path: [product.path],
      description: [product.description],
      weight: [product.weight],
      price: [product.price],
      image: [product.image]
    });
    this.editProductID = product.id as number;
    this.editStatus = true;
    this.imageStatus = true;
    this.image = product.image;
  }

  updateProduct(): void {
    const product = this.productForm.value;
    this.productService.update(product, this.editProductID).subscribe(
      () => {
        this.loadProducts();
      }, err => {
        console.log(err);
      }
    );
    this.initProductForm();
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
        this.productForm.patchValue({
          image: this.image
        })
        this.imageStatus = true;
        this.uploadPercent = null;
      });
    });
  }

  deleteFile(product?: IProduct): void {
    const pathImage = product?.image || this.image;
    this.productForm.patchValue({
      image: [null]
    })
    this.storage.storage.refFromURL(pathImage).delete().then(
      () => {
        console.log('Image deleted!');
        this.image = '';
        this.imageStatus = false;
      }
    ).catch(err => console.log(err));
  }

}

