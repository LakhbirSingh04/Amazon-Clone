import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";

//import '../data/cart-class.js';
//import '../data/backend-practice.js'

async function loadPage () {
  try {
   // throw 'error 10'
    await loadProductsFetch();

    await new Promise((resolve)=>{
     loadCart(()=>{
       resolve();
     });
   });

  } catch (error) {
    console.log('unexpected error 2. Please try again later');
  }

renderOrderSummary();
renderPaymentSummary();

}
loadPage();


/*
Promise.all([
  loadProductsFetch(),
  new Promise((resolve)=>{
    loadCart(()=>{
      resolve();
    });
  })

]).then((values) => {
  renderOrderSummary();
  renderPaymentSummary();
});
*/

/*
new Promise((resolve)=>{
  loadProducts(()=>{
    resolve('value1');
  });

}).then((value)=> {
  console.log(value);

  return new Promise((resolve)=>{
    loadCart(()=>{
      resolve();
    });
  });

}).then(()=>{
  renderOrderSummary();
  renderPaymentSummary();
});
*/

/*
loadProducts(()=> {
  loadCart(()=>{
    renderOrderSummary();
    renderPaymentSummary();
  }); 
}); */
