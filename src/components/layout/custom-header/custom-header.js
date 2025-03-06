import styles from "./custom-header.css" with { type: "css" };

class CustomHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.menuItems = [];
  }

  set items(data) {
    this.menuItems = data;
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.adoptedStyleSheets.push(styles);
    this.shadowRoot.innerHTML = /* html */ `
      <header>
        <div>
          <img alt="logo" src="/src/img/logo.jpg" height="96" width="96" />
        </div>
        <div class="container">
          ${this.menuItems
            .map((item) => /* html */ `<my-button link="${item.link}" label="${item.texto}"></my-button>`)
            .join(" ")}
        </div>
      </header>
    `;
  }
}

customElements.define("custom-header", CustomHeader);