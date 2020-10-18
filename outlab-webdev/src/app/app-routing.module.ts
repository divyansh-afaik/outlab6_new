import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';

import { FormComponent } from './form/form.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'form', component: FormComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
