function solve() {
      let textArea = document.getElementsByTagName('textarea')[0];
      let addButtons = document.getElementsByClassName('add-product');
      let checkoutButton = document.getElementsByClassName('checkout')[0];
      let cart = new Set();
      let totalPrice = 0;
      let totalProducts = 0;
   
      for (let i = 0; i < addButtons.length; i++) {
         addButtons[i].addEventListener('click', addProduct);
      }
   
      checkoutButton.addEventListener('click', checkout);
   
      function addProduct(e) {
         let product = e.target.parentElement.parentElement;
         let productName = product.getElementsByClassName('product-title')[0].textContent;
         let productPrice = Number(product.getElementsByClassName('product-line-price')[0].textContent);
   
         textArea.value += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
   
         cart.add(productName);
         totalPrice += productPrice;
         totalProducts++;
      }
   
      function checkout() {
         textArea.value += `You bought ${Array.from(cart).join(', ')} for ${totalPrice.toFixed(2)}.`;
   
         for (let i = 0; i < addButtons.length; i++) {
               addButtons[i].removeEventListener('click', addProduct);
         }
   
         checkoutButton.removeEventListener('click', checkout);
      }
}