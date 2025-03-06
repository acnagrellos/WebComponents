import styles from "./button-cta.css" with { type: "css" };

class ButtonCta extends HTMLElement {
    static get observedAttributes() {
        return ["label", "type"];
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.label = this.getAttribute("label") || "label";
        this.type = this.getAttribute("type") || "button";

        this.render();
    }

    render() {
        this.shadowRoot.adoptedStyleSheets.push(styles);
        this.shadowRoot.innerHTML = /* html */ `
            <button type="${this.type}">
                ${this.label}
            </button>
        `;
    }

    attributeChangedCallback() {
        this.render();
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define("button-cta", ButtonCta);