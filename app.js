import CartItem from "./components/CartItem.js";
import { DetailsPage } from "./components/DetailsPage.js";
import { MenuPage } from "./components/MenuPage.js";
import { OrderPage } from "./components/OrderPage.js";
import ProductItem from "./components/ProductItem.js";
import { loadData } from "./services/Menu.js";
import Router from "./services/Router.js";
import Store from "./services/Store.js";



customElements.define("order-page",OrderPage)



window.app = {};
app.store = Store;
app.router = Router;
 
const init = async () => {
  await loadData();
  app.router.init();
  
};

window.addEventListener("DOMContentLoaded", init);
