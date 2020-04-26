import { Injectable } from '@angular/core';
import { Http, } from "@angular/http";

@Injectable()
export class RustioService {

  constructor(private http: Http) { }

  parseMapUrl(event: any): string {
    var url = event;
    var match = url.match(/(([0-9]{1,3}\.?){4}\:[0-9]+)/);
    if (!match) {
      return null;
    }
    return match[1];
  }

  // loadMonuments(urlServer: string): Promise<any> {
  //   return new Promise((resolve) => {
  //     this.http.post(environment.WEBAPI_URL + '/rustio/monuments', {
  //       'url': urlServer
  //     }).subscribe((res: Response) => {
  //       console.log(res)
  //       let body = res.json();
  //       if (!body) {
  //         body = {}
  //       }
  //       resolve(body)
  //     })
  //   }).catch(this.handleError);
  // }

  private handleError(err) {
    console.log(`Error: ${JSON.stringify(err)}`);
    return 'Server error';
  }

  obtenerTransacciones(json) {
    return json.filter(item => item['goods'] !== undefined);
    // var ofertas = [];
    // var nombres = [];
    // for (var i in json) {
    //   var item = json[i];
    //   if (['shopkeeper_vm_invis', 'vendingmachine.deployed'].indexOf(item['name']) >= 0) {
    //     for (var gi in item['goods']) {
    //       // Cada good es un item de la vending
    //       var good = item['goods'][gi];
    //       nombres.push(good['item'])
    //       nombres.push(good['currency'])

    //       var oferta = null;
    //       if (compra) {
    //         if (good['currency'] == buscar) {
    //           oferta = {
    //             'qty': good['currencyAmount'],
    //             'da': good['itemAmount'] + ' de ' + good['item'],
    //           };
    //         }
    //       } else {
    //         if (good['item'] == buscar) {
    //           oferta = {
    //             'qty': good['itemAmount'],
    //             'pide': good['currencyAmount'] + ' de ' + good['currency'],
    //           };
    //         }
    //       }

    //       if (oferta != null) {
    //         ofertas.push({ ...oferta, ...{ 'pos': item['position']['x'] + ' ' + item['position']['z'] } });
    //       }
    //     }
    //   }
    // }
    // ofertas = ofertas.sort(function (a, b) {
    //   return a['qty'] - b['qty'];
    // });

    // for (var i in ofertas) {
    //   var oferta = ofertas[i];
    //   console.log(oferta)
    // }
  }
}
