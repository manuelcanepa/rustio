import { Good } from './good'

export class Oferta {
  qty: number
  price: number
  item: Good
  itemTitle: string
  compra: boolean
  posicion: any

  constructor(data: any) {
    this.qty = data.qty
    this.item = data.item
    this.price = data.price
    this.compra = data.compra
    this.itemTitle = data.itemTitle
    this.posicion = data.posicion
  }
}
