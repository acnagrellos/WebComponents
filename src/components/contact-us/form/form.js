import styles from "./form.css" with { type: "css" };

class Form extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.render();
    }

    render() {
        this.shadowRoot.adoptedStyleSheets.push(styles);
        this.shadowRoot.innerHTML = /* html */ `
            <form>
                <my-input></my-input>
                <my-input></my-input>
                <my-input></my-input>
                <button-cta type="submit" label="Submit"></button-cta>
            </form>
        `;
    }

    attributeChangedCallback() {
        this.render();
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define("my-form", Form);