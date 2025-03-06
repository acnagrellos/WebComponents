import styles from "./input.css" with { type: "css" };

class Input extends HTMLElement {
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
            <div class="form-control">
                <label>Mi input</label>
                <input />
            </div>
        `;
    }

    attributeChangedCallback() {
        this.render();
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define("my-input", Input);