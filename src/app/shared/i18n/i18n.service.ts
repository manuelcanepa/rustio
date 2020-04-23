import { Injectable, ApplicationRef } from '@angular/core';
import { Subject } from "rxjs/Rx";
import { languages } from './languages.model';
import { JsonApiService } from 'src/app/core/services';

@Injectable()
export class I18nService {
  public state;
  public defaultLocale;
  public data: {};
  public currentLanguage: any;

  constructor(
    private jsonApiService: JsonApiService,
    private ref: ApplicationRef
  ) {
    this.state = new Subject();
    this.defaultLocale = localStorage.getItem('default_locale');

    if (this.defaultLocale == null)
      this.defaultLocale = 'es';

    this.initLanguage(this.defaultLocale || 'us');
    this.fetch(this.currentLanguage.key)
  }

  private fetch(locale: any, done: any = null) {
    this.jsonApiService.fetch(`/langs/${locale}.json`)
      .subscribe((data: any) => {
        this.data = data;
        this.state.next(data);
        this.ref.tick()
        if (done != null)
          done(data)
      })
  }

  private initLanguage(locale: string) {
    let language = languages.find((it) => {
      return it.key == locale
    });
    if (language) {
      this.currentLanguage = language
    } else {
      this.currentLanguage = this.defaultLocale
    }
  }

  setLanguage(language) {
    localStorage.setItem('default_locale', language.key);

    this.currentLanguage = language;
    this.fetch(language.key)
  }

  subscribe(sub: any, err: any) {
    return this.state.subscribe(sub, err)
  }

  public __(phrase: string, args?: any): string {
    return this.getTranslation(phrase, args);
  }

  public getTranslation(phrase: string, args?: any): string {
    return this.format(this.data && this.data[phrase] ? this.data[phrase] : phrase, args)
  }

  format(traducido, args?: any) {
    if (args == null || args.length == 0)
      return traducido;

    if (args instanceof Array == false)
      args = [args];

    return traducido.replace(/{(\d+)}/g, function (match, number) {
      return typeof args[number] != 'undefined' ? args[number] : match;
    });
  }
}
