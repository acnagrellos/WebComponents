import styles from "./section-title.css" with { type: "css" };

class SectionTitle extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.render();
    }

    render() {
        this.shadowRoot.adoptedStyleSheets.push(styles);
        this.shadowRoot.innerHTML = /* html */ `
            <div class="container">
                <my-text size="title" color="#E89A2F">
                    <slot></slot>
                </my-text>
                <hr />
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

customElements.define("section-title", SectionTitle);