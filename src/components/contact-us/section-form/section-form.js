import styles from "./section-form.css" with { type: "css" };

class SectionForm extends HTMLElement {
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
            <style>
                @import "/src/components/section-form/section-form.css";
            </style>
            <article>
                <my-form></my-form>
                <div>hola</div>
            </article>
        `;
    }

    attributeChangedCallback() {
        this.render();
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define("section-form", SectionForm);