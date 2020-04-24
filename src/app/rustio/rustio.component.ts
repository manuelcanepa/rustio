import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { RustioService } from '../core/services/rustio.service';
import { DataService } from '../nav-bar/data.service';
import { Good } from './data/good';
import { I18nService } from '../shared/i18n';
import { Oferta } from './data/oferta';

@Component({
  selector: 'app-rustio',
  templateUrl: './rustio.component.html',
  styleUrls: ['./rustio.component.less']
})
export class RustioComponent implements OnInit, AfterViewInit {

  @Input()
  mapa: string

  @Input()
  datosJson = '';

  urlMonuments: string;
  itemBuscado: string;
  listadoTransacciones = [];
  itemActual: Good;
  listadoItems = new Array<Good>();
  itemsFiltrados = new Array<Good>();
  ofertasActuales = new Array<Oferta>();
  comprasActuales = new Array<Oferta>();
  ventasActuales = new Array<Oferta>();
  ofertas = 0
  cantidadTransacciones = 0

  private navTitleToSet: string = 'RustIO';

  constructor(
    private service: RustioService,
    private i18n: I18nService,
    private _dataService: DataService
  ) { }

  ngOnInit(): void {
    this.resetElements();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this._dataService.setNavTitle(this.navTitleToSet);
    }, 0);
  }

  resetElements() {
    this.urlMonuments = '';
    this.datosJson = '';
    this.listadoItems = new Array<Good>();
    this.listadoTransacciones = [];
    this.itemsFiltrados = new Array<Good>();
    this.itemActual = null;
    this.ofertasActuales = new Array<Oferta>();
    this.comprasActuales = new Array<Oferta>();
    this.ventasActuales = new Array<Oferta>();
  }

  cambioMapa(event): void {
    this.resetElements();
    this.mapa = this.service.parseMapUrl(event);
    if (this.mapa !== null) {
      this.urlMonuments = 'http://' + this.mapa + '/monuments.json';
    }
  }

  cambioDatosJson(event): void {
    var datosEval = eval(event);
    if (datosEval) {
      this.obtenerTransacciones(datosEval);
    } else {
      this.datosJson = '';
    }
  }

  obtenerTransacciones(datosEval) {
    this.listadoTransacciones = this.service.obtenerTransacciones(datosEval);
    this.cantidadTransacciones = this.listadoTransacciones.length;
    this.ofertas = 0;
    this.listadoItems = new Array<Good>();
    this.listadoTransacciones.forEach((item) => {
      this.ofertas += item['goods'].length;

      item['goods'].forEach((good) => {
        //
        // Compra
        //
        var itemGood = this.listadoItems.find(li => li.name == good['item'])
        if (itemGood == undefined) {
          itemGood = new Good({
            name: good['item'],
            title: this.i18n.__(good['item'])
          });
          this.listadoItems.push(itemGood);
        }

        itemGood.ofertas.push(new Oferta({
          qty: good['itemAmount'],
          price: good['currencyAmount'],
          item: good['currency'],
          itemTitle: this.i18n.__(good['currency']),
          posicion: item['position'],
          compra: false
        }));

        //
        // Venta
        //
        itemGood = this.listadoItems.find(li => li.name == good['currency'])
        if (itemGood == undefined) {
          itemGood = new Good({
            name: good['currency'],
            title: this.i18n.__(good['currency'])
          });
          this.listadoItems.push(itemGood);
        }

        itemGood.ofertas.push(new Oferta({
          qty: good['currencyAmount'],
          price: good['itemAmount'],
          item: good['item'],
          itemTitle: this.i18n.__(good['item']),
          posicion: item['position'],
          compra: true
        }));
      })
    })

    // console.log(this.listadoItems.map(g=>g.name))
  }

  cambioItem(item) {
    if (item == '') {
      this.itemsFiltrados = new Array<Good>();
      return;
    }
    this.itemsFiltrados = this.listadoItems.filter(d =>
      d.name.toLowerCase().indexOf(item.toLowerCase()) > -1 ||
      d.title.toLowerCase().indexOf(item.toLowerCase()) > -1
    );
  }

  verOfertas(item: Good) {
    if (item == undefined) {
      this.itemActual = null;
      this.ofertasActuales = new Array<Oferta>();
      this.comprasActuales = new Array<Oferta>();
      this.ventasActuales = new Array<Oferta>();
      return;
    }
    this.itemActual = item;
    this.ofertasActuales = item.ofertas;

    this.comprasActuales = item.ofertas
      .filter(o => o.compra == true)
      .sort((a, b) => a.qty - b.qty || a.price - b.price);

    this.ventasActuales = item.ofertas
      .filter(o => o.compra == false)
      .sort((a, b) => a.qty - b.qty || a.price - b.price);
  }

}
