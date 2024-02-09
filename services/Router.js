const Router = {
    init: () => {
        document.querySelectorAll("a.navlink").forEach(a=>{
            a.addEventListener("click",event=>{
                event.preventDefault();
                const url = event.target.getAttribute("href")
                Router.go(url)
            });
        });
        window.addEventListener("popstate",event=>{
            Router.go(event.state.route, false)
        })
    },
    
    go: (route,addToHistory=true) => {
        console.log(`going to ${route}`);
        if (addToHistory)
        {
            history.pushState({route},'',route)
        }
        let pageElement = null;
        switch(route){
            case "/":
                pageElement = document.createElement("menu-page");
                break
            case "/order":
                pageElement = document.createElement("order-page")
                pageElement.textContent = "Order"
                break
            default:
                if (route.startsWith("/product/-")){
                    pageElement = document.createElement("details-page")
                    pageElement.textContent = "Details";
                    const paramID = route.substring(route.lastIndexof("-")+1)
                    console.log("paramID",paramID);
                    pageElement.productId = paramID;
                }
        }

        document.querySelector("main").innerHTML = ""
        document.querySelector("main").appendChild(pageElement)
    }
}

export default Router;