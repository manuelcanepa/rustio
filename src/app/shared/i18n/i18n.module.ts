import { NgModule } from "@angular/core";

import { I18nPipe } from "./i18n.pipe";
import { I18nService } from "./i18n.service";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    I18nPipe
  ],
  exports: [I18nPipe],
  providers: [I18nService]

})
export class I18nModule { }
