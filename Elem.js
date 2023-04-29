class Elem {
  #index;
  constructor(szuloElem, index) {
    this.#index = index;
    szuloElem.append(`<div class=elem>
                        <p></p>
                        </div>`);
    this.divElem = $(".elem:last-child");
    //megfogom a html elemet
    this.pELem = $(".elem:last-child p");

    this.divElem.click(() => {
      this.setElem("")
      //létrehozunk egy saját eseményt: elemKattintas
      this.kattintasTrigger();
    });
  }
  getIndex() {
    return this.#index;
  }
  setElem(adat) {
    this.pELem.html(adat);
  }
  kattintasTrigger() {
    //létrehozza a saját eseményünket
    const esemeny = new CustomEvent("elemKattintas", {detail:this});
    window.dispatchEvent(esemeny);
  }
}

export default Elem;
