import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MaterializeAction } from 'angular2-materialize';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  form: FormGroup;
  termsModalAction: EventEmitter<string|MaterializeAction>;

  constructor(private fb: FormBuilder, private router: Router) {
    this.termsModalAction = new EventEmitter();
  }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.form = this.fb.group({
      name: null,
      email: null,
      phone: null,
      tellUs: '',
      agree: [false, Validators.requiredTrue],
    });
  }

  submitForm() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.router.navigate(['submitted']);
    } else {
      const formControls = this.form.controls;
      for (const key in formControls) {
        if (formControls.hasOwnProperty(key)) {
          formControls[key].markAsDirty();
          formControls[key].markAsTouched();
        }
      }
    }
  }

  openTerms() {
    this.termsModalAction.emit({action: 'modal', params: ['open']});
  }

  get name() { return this.form.controls['name']; }
  get email() { return this.form.controls['email']; }
  get phone() { return this.form.controls['phone']; }
  get agree() { return this.form.controls['agree']; }

}
