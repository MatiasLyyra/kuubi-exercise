import { Component, OnInit, EventEmitter, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MaterializeAction } from 'angular2-materialize';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../form.service';
import { AvatarSelectorComponent } from './avatar-selector/avatar-selector.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  form: FormGroup;
  termsModalAction: EventEmitter<string|MaterializeAction>;

  @ViewChild(AvatarSelectorComponent)
  avatarSelector: AvatarSelectorComponent;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private formService: FormService,
  ) {
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
      const formEntry = Object.assign({}, this.form.value);
      delete formEntry.agree;
      formEntry['avatar'] = this.avatarSelector.currentSelection;
      this.formService.sendForm(formEntry)
      .subscribe(
        val => this.router.navigate(['submitted']),
        error => this.formService.displayNotification('Error occured while submitting the form', 3000, 'red')
      );
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
