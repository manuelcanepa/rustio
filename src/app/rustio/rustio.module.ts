import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RustioRoutingModule } from './rustio-routing.module';
import { RustioComponent } from './rustio.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ServiceModule } from '../core/services/service.module';
import { HttpModule } from '@angular/http';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { I18nModule } from '../shared/i18n/i18n.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [RustioComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatTabsModule,
    RustioRoutingModule,
    HttpModule,
    FormsModule,
    ServiceModule,
    MatButtonModule,
    I18nModule
  ],
  providers: []
})
export class RustioModule { }
