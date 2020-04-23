import { Directive, ElementRef } from '@angular/core';
import { I18nService } from "./i18n.service";

@Directive({
  selector: 'i18n'
})
export class I18nDirective {

  constructor(
    public i18nService: I18nService,
    el: ElementRef
  ) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }

  transform(phrase: any, args?: any): any {
    return this.i18nService.getTranslation(phrase, args);
  }

}
