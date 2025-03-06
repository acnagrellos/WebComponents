import styles from "./features.css" with { type: "css" };

class Features extends HTMLElement {
    static get observedAttributes() {
        return ["prop1"];
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.prop1 = this.getAttribute("prop1") || "prop1";
        this.render();
    }

    render() {
        this.shadowRoot.adoptedStyleSheets.push(styles);    
        this.shadowRoot.innerHTML = /* html */ `
            <section>
                <section-title>
                    ¿QUE OFRECEMOS?
                </section-title>
                <div class="description">
                    <my-text size="body" color="#222" alignCenter="true">
                        Somos especialistas en hamburguesas de tipo Smash. Además tenemos postres caseros para que disfrutes de una comida o cena redonda.
                    </my-text>
                </div>
                <div class="features-container">
                    <my-feature title="Hamburguesas" body="Nuestra especialidad son las burguer smash. Ven a probar la Chess Lover o la Delirios del Quijote, hamburguesas que han quedado muy bien en concursos nacionales."></my-feature>
                    <my-feature title="Entrantes" body="Nuestros nachos o las patatas con salsa ranchera son otra de nuestras especialidades. ¡Átrevete a probarlos!"></my-feature>
                    <my-feature title="Postres caseros" body="Nuestros postres caseros darán ese toque dulce al final de tu pedido."></my-feature>
                </div>
            </section>
        `;
    }

    attributeChangedCallback() {
        this.render();
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define("my-features", Features);