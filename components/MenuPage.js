// import { loadData } from "/services/Menu.js";

export class MenuPage extends HTMLElement{
    
    constructor(){
        super();

        this.root = this.attachShadow({mode:'open'})
        const styles = document.createElement("style")
        this.root.appendChild(styles)
        async function  loadCSS() {
            console.log("load the css");
            const request =  await fetch('/components/MenuPage.css')
            const css = await request.text()
            styles.textContent = css;
        }
        loadCSS();
    }
    connectedCallback(){
        const template = document.getElementById("menu-page-template")
        const content = template.content.cloneNode(true)
        this.root.appendChild(content)
        console.log("in the connectedCallback");

        window.addEventListener("appmenuchange", () => {
            this.render();
        });
        this.render();
    }

    render(){
        console.log("inside the render");
        if (app.store.menu){
            console.log("hello ",app.store.menu);
            for (let category of app.store.menu){
                console.log("inside for loop");
                const liCategory = document.createElement("li");
                liCategory.innerHTML = `
                <h3>${category.name}</h3>
                <ul class="category"></ul> 
                `;
                this.root.querySelector("#menu").appendChild(liCategory)
                category.products.forEach(product => {
                    const item = document.createElement("product-item")
                    item.dataset.product = JSON.stringify(product)
                    liCategory.querySelector("ul").appendChild(item) 
                });
            }
        }
        else
        {
            console.log("inside else");
            this.root.querySelector("#menu").innerHTML = "Loading .." 
        }
    }
   
    
}
customElements.define("menu-page",MenuPage);