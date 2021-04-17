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
    }

    getTemplate() {
        const template = document.createElement("template");
        template.innerHTML = `
        <section class = "product-cards-container">
            <article class ="product-detail-card">
                <img src ="${this.img}" alt = "icon"/>
                <p class = "product-card-title">${this.title}</p>
                <p class ="product-card-body">${this.description}</p>
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
                width:90%;
                min-width: 288px;
                max-width: 400px;
                height: 150px;
                margin: 15px auto;
                padding: 15px;
                background-color: #282623;
                border-radius: 5px;
                box-shadow: 0 4px 8px rgba(0,0,0,0.16);
            }
            .product-detail-card .${this.img}{
                display: inline-block;
                width: 20px;
                height: 20px;
                margin-bottom: 10px;
            }
            .product-card-title{
                margin-bottom: 15px;
                font-size: 1.8rem;
                font-weight: bold;
                line-height: 1.8rem;
                color: #fff;
            }
            .product-card-body{
                font-size: 1.4rem;
                font-weight: 500;
                line-height: 1.8rem;
                color: #808080;
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

class productPlans extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        return ["img", "title", "description", 'price', 'plan'];
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
        if (attr === "price") {
            this.price = newVal;
        }
        if (attr === "plan") {
            this.plan = newVal;
        }
    }

    getTemplate() {
        const template = document.createElement("template");
        template.innerHTML = `
        <section class = "center-cards">
            <article class = "plans-container-card">
                <p class ="recommended">${this.plan}</p>
                <div class ="plan-info-container">
                    <h3 class ="plan-card-title">${this.title}</h3>
                    <p class ="plan-card-price"><span>$</span>${this.price}</p>
                    <p class ="plan-card-saving">${this.description}</p>
                    <button class ="plan-card-call">Escoger este <img src ="${this.img}" alt = "arrow"/></button>
                </div>
            </article>
        </section>
        ${this.getStyles()}
        `;
        return template;
    }
    getStyles() {
        return `
        <style>
            .plan-info-container{
                position: relative;
                scroll-snap-align: center;
                width: 70%;
                min-width: 170px;
                max-width: 300px;
                height: 250px;
                margin: 50px 28px 0;
                padding: 0 15px;
                background-color: #fff;
                border-radius: 15px;
                box-shadow: 0 4px 8px rgba(89,73,30,0.16);
            }
            .recommended{
                position: absolute;
                width: 120px;
                height: 31px;
                padding: 6px;
                font-size: 1.2rem;
                left: calc(50% - 60px);
            }
            .plan-card-title{
                padding-top: 30px;
                font-size: 1.4rem;
                font-weight: 500;
                line-height: 1.8rem;
                color: black;
            }
            .plan-card-price{
                font-size: 5rem;
                font-weight: bold;
                color: black;
                margin: 0;
            }
            .plan-card-price span{
                font-size: 1.2rem;
                font-weight: 300;
                vertical-align: 25px;
            }
            .plan-card-saving{
                font-size: 1.2rem;
                color: #757575;
            }
            .plan-card-call{
                width: 150px;
                height: 40px;
                margin-top: 20px;
                background-color:#faf8f7;
                border: 2px solid #FFE9D5;
                border-radius: 4px;
                font-size: 1.4rem;
                font-weight: bold;
                line-height: 1.8rem;
                color: black;
                font-family: 'DM Sans', sans-serif;
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
customElements.define("product-price", productPlans);