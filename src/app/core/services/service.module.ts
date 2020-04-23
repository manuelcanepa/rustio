import { NgModule } from '@angular/core';
import { JsonApiService } from './json-api.service';
import { RustioService } from './rustio.service';

@NgModule({
  providers: [
    // WebApis
    JsonApiService,
    RustioService
  ]
})
export class ServiceModule { }
