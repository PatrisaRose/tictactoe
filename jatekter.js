import Elem from "./elem.js";

class Jatekter {
  #lepes;
  #lista = [];
  constructor() {
    this.#lepes = 0;
    this.#lista = ["", "", "", "", "", "", "", "", ""];
    let article = $("article");
    for (let index = 0; index < 9; index++) {
      const elem = new Elem(article, index);
    }
    //vezérli a játékot
    //ő látja a 9 elemet
    //ő látja, hogy hányadik lépésnél tartunk
    //Ő tudja megmondani, hogy ki következik
    //Mikor kell növelni a lépésszámlalót?
    //akkor, amikor rákattintunk az elemre
    //feliratkozunk egy saját eseményre - elemKattintas

    $(window).on("elemKattintas", (event) => {
      const aktElem = event.detail;

      if (this.#lepes % 2 === 0) {
        aktElem.setElem("O");
        this.#lista[aktElem.getIndex()] = "O";
      } else {
        aktElem.setElem("X");
        this.#lista[aktElem.getIndex()] = "X";
      }
      this.#lepes++;
      this.ellenorzes();
    });
  }
  ellenorzes() {
    console.log(this.#lista);
  }
}

export default Jatekter;
