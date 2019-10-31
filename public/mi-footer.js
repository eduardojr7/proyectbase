customElements.define("mi-footer", class extends HTMLElement {
  connectedCallback() {
    this.innerText = "Copyright © 2019 Jimenez Ramirez Eduardo.";
  }
}, { extends: "footer" });