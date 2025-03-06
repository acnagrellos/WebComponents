class Page extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = /* html */ `
            <style>
                main {
                    min-height: calc(100vh - 60px - 156px);
                }
            </style>
            <custom-header></custom-header>
            <main>
                <slot></slot>
            </main>
            <my-footer></my-footer>
        `;
    }

    attributeChangedCallback() {
        this.render();
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define("my-page", Page);