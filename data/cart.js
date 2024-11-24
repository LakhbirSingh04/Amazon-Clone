export const cart = [];

export function addToCart (productId) {

  let matchingItem;

  cart.forEach((cartItem) => {                                   //checking if the product is already in the cart 
  if (productId === cartItem.productId)
  matchingItem = cartItem;
  })

  if(matchingItem) {                                         //If it is, +1 the quantity of it
  matchingItem.quantity +=1;
  }  else {                                                   //else

  cart.push({                                               //adding it in the cart object
    productId: productId,                    
    quantity: 1
    });
  }
}