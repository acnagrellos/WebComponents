import styles from "./jumbotron.css" with { type: "css" };

class Jumbotron extends HTMLElement {
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
            <div class="container" >
                <div class="text-container">
                    <my-text size="jumbotitle" color="#fff">Paradise Burguer</my-text>
                    <my-text size="jumbosubtitle" color="#fff">Las mejores hamburguesas de Ciudad Real</my-text>
                    <a href="https://www.ubereats.com/es/store/the-paradise-burgers/ImQhxb1WWm2AZc8ihXb87w" target="_blank">
                        <button-cta label="Ver Menu"></button-cta>
                    </a>
                </div>
            </header>
        `;
    }

    attributeChangedCallback() {
        this.render();
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define("my-jumbotron", Jumbotron);