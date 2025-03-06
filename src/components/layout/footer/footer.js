import styles from "./footer.css" with { type: "css" };

class Footer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.render();
    }

    render() {
        this.shadowRoot.adoptedStyleSheets.push(styles);
        this.shadowRoot.innerHTML = /* html */ `
            <style>
                i {
                    width: 64px;
                    height: 64px; 
                }
            </style>
            <footer>
                <div>
                    <my-text size="body" color="#888">Copyright © 2015. Design by DAW Team</my-text>
                </div>
                <div class="icons-container">
                    <a target="_blank" href="https://www.instagram.com/theparadiseburgers">
                        ${feather.toSvg('instagram', { 'stroke-width': 1, color: 'white' })}
                    </a>
                    <a target="_blank" href="https://www.ubereats.com/es/store/the-paradise-burgers/ImQhxb1WWm2AZc8ihXb87w">
                        ${feather.toSvg('truck', { 'stroke-width': 1, color: 'white' })}
                    </a>
                    <a target="_blank" href="https://glovoapp.com/es/es/ciudad-real/the-paradise-burgers-ciudad-real/">
                        ${feather.toSvg('globe', { 'stroke-width': 1, color: 'white' })}
                    </a>
                </div>
            </footer>
        `;
    }

    attributeChangedCallback() {
        this.render();
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define("my-footer", Footer);