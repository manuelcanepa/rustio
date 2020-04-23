import { Oferta } from './oferta';

export class Good {
  name: string;
  title: string
  ofertas: Array<Oferta>;

  constructor(data: any) {
    this.name = data.name;
    this.title = data.title;

    if (data.ofertas) {
      this.ofertas = data.ofertas;
    } else {
      this.ofertas = new Array<Oferta>();
    }
  }
  // static names: {
  //   "corn": "corn",
  //   "scrap": "scrap",
  //   "clone.hemp": "clone.hemp",
  //   "clone.corn": "clone.corn",
  //   "clone.potato": "clone.potato",
  //   "clone.pumpkin": "clone.pumpkin",
  //   "metal.fragments": "metal.fragments",
  //   "metal.refined": "metal.refined",
  //   "metalpipe": "metalpipe",
  //   "metalspring": "metalspring",
  //   "gears": "gears",
  //   "wood": "wood",
  //   "researchpaper": "researchpaper",
  //   "diesel_barrel": "diesel_barrel",
  //   "lowgradefuel": "lowgradefuel",
  //   "glue": "glue",
  //   "blood": "blood",
  //   "geiger.counter": "geiger.counter",
  //   "paper": "paper",
  //   "ducttape": "ducttape",
  //   "flare": "flare",
  //   "chicken.raw": "chicken.raw",
  //   "meat.boar": "meat.boar",
  //   "wolfmeat.raw": "wolfmeat.raw",
  //   "fish.raw": "fish.raw",
  //   "bearmeat": "bearmeat",
  //   "deermeat.raw": "deermeat.raw",
  //   "fish.minnows": "fish.minnows",
  //   "apple.spoiled": "apple.spoiled",
  //   "chicken.spoiled": "chicken.spoiled",
  //   "wolfmeat.spoiled": "wolfmeat.spoiled",
  //   "humanmeat.spoiled": "humanmeat.spoiled",
  //   "humanmeat.raw": "humanmeat.raw",
  //   "horsemeat.raw": "horsemeat.raw",
  //   "skull.human": "skull.human",
  //   "sticks": "sticks",
  //   "bleach": "bleach",
  //   "coal": "coal",
  //   "tool.camera": "tool.camera",
  //   "battery.small": "battery.small",
  //   "candycane": "candycane",
  //   "candycaneclub": "candycaneclub",
  //   "halloween.candy": "halloween.candy",
  //   "chocholate": "chocholate",
  //   "apple": "apple",
  //   "blueberries": "blueberries",
  //   "black.raspberries": "black.raspberries",
  //   "crude.oil": "crude.oil",
  //   "antiradpills": "antiradpills",
  //   "keycard_green": "keycard_green",
  //   "keycard_blue": "keycard_blue",
  //   "keycard_red": "keycard_red",
  //   "cloth": "cloth",
  //   "fish.troutsmall": "fish.troutsmall",
  //   "fertilizer": "fertilizer"
  // }
}
