import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public registerForm!: FormGroup;
  public loginForm!: FormGroup;
  


  constructor(
    private toastr: ToastrService,
    private fb: FormBuilder,
    private auth: AngularFireAuth,
    private db: AngularFirestore

  ) { }

  ngOnInit(): void {
    this.initRegisterForm();
  }

  initRegisterForm(): void {
    this.registerForm = this.fb.group({

      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    })
  }

  register(): void {
    const { email, password } = this.registerForm.value;
    this.auth.createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        console.log(userCredential);
        const user = {
          email: userCredential.user!.email,
          firstName: '',
          lastName: '',
          phoneNumber: '',
          address: [],
          orders: [],
          role: 'USER',
        };
        this.db.collection('users').doc(userCredential.user?.uid).set(user)
          .then(() => {
            this.toastr.success('User register successfully', '');
            this.registerForm.reset();
          })
          .catch(err => {
            this.toastr.error(err.massage, err.title);
          })
      })
      .catch(err => {
        console.log(err);
        this.toastr.error(err.massage, err.title);
      })

  }
  // login(): void {
  //   const { email, password } = this.loginForm.value;
  //   this.auth.signInWithEmailAndPassword(email, password)
  //     .then(userCredential => {
  //       this.db.collection("users").doc(userCredential.user?.uid).ref.get()
  //         .then(doc => {
  //           if (doc.exists) {
  //             const user = {
  //               id: doc.id,
  //               ...doc.data() as any
  //             };
  //             localStorage.setItem('user', JSON.stringify(user));
  //             this.toastr.success(`Welcome user`);
  //           }
  //         })
  //         .catch(err => {
  //           this.toastr.error(err.message, err.title);
  //         })
  //     })
  //     .catch(err => {
  //       this.toastr.error(err.message, err.title);
  //     })
  // }





}
