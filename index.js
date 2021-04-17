class tarjetaProductos extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        return ["img", "title", "description", 'test'];
    }
    attributeChangedCallback(attr, oldVal, newVal) {
        if (attr === "img") {
            this.img = newVal;
        }
        if (attr === "title") {
            this.title = newVal;
        }
        if (attr === "description") {
            this.description = newVal;
        }
        if (attr === "test") {
            this.test = newVal;
        }
    }

    getTemplate() {
        const template = document.createElement("template");
        template.innerHTML = `
        <section class = "product-cards-container">
            <article class ="product-detail-card">
                <span class ="${this.img}">
                    <p class = "product-card-title">${this.title}</p>
                    <p class ="product-card-body">${this.description}</p>
                </span>
            </article>
        </section>
        ${this.getStyles()}
        `;
        return template;
    }
    getStyles() {
        return `
        <style>
            .product-detail-card{
                width:100%;
                min-width: 288px;
                max-width: 400px;
                height: 150px;
                margin: 15px auto;
            }
        </style>
        `;
    }
    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback() {
        this.render();
    }
}
customElements.define("product-card", tarjetaProductos);