import Api from "./Api.js";



export async function loadData() {
    app.store.menu = await  Api.fetchMenu();
}

export async function getProductById() {
    if (app.store.menu == null){
        await loadData()
    }
    for (let c of app.store.menu){
        for (let p of c.products){
            if (p.id==id){
                return p;
            }
        }
    }
    return null
}