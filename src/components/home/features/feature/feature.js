class Feature extends HTMLElement {
    static get observedAttributes() {
        return ["title"];
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.title = this.getAttribute("title") || "Title";
        this.body = this.getAttribute("body") || "...";
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = /* html */ `
            <article>
                <my-text size="subtitle" color="#000" alignCenter="true">
                    ${this.title}
                </my-text>
                <my-text size="body" color="#222" alignCenter="true">
                    ${this.body}
                </my-text>
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

customElements.define("my-feature", Feature);