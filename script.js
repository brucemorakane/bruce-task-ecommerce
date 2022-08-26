// PRODUCTS VARIABLE
var productsState = [
  {
    id: 1,
    name: 'Macbook Pro',
    price: 6000,
    rates: 3,
    image:
      'https://www.istore.co.za/media/catalog/product/m/a/macbook_pro_space_grey-1_2.png?format=jpeg',
     
  },
  {
    id: 2,
    name: 'Iphone 13 Pro',
    price: 20000,
    rates: 2,
    image:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
  },
  {
    id: 1,
    name: 'Iphone 6 C',
    price: 10000,
    rates: 2,
    image:
      'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80',
  },
  {
    id: 1,
    name: 'HP Laptop',
    price: 9000,
    rates: 3,
    image:
      'https://images.unsplash.com/photo-1589561084283-930aa7b1ce50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80',
  },
  {
    id: 1,
    name: 'Dell Laptop',
    price: 4500,
    rates: 2,
    image:
      'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 1,
    name: 'Macbook Pro',
    price: 18000,
    rates: 5,
    image:
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 1,
    name: 'Playstation 5',
    price: 28000,
    rates: 4,
    image:
      'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 1,
    name: 'PS 4 Joystick',
    price: 1500,
    rates: 3,
    image:
      'https://images.unsplash.com/photo-1592840496694-26d035b52b48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=825&q=80',
  },
]

// show var with the banner

// var cartCounter = 0;

// function Addcart() {
  
//   counter = document.getElementById('counter').innerHTML = ++ cartCounter;
//   console.log(cartCounter);
// }

// function approve()




var products = document.getElementById('products')
var banneramount = document.getElementById('banneramount')


function Productapprove() {

 // DISPLAY PRODUCTS IN HOME PAGE
  products.innerHTML = ""
  
  // loop into productsState and display
  for (let i = 0; i < productsState.length; i++) {
    products.innerHTML +=  `
    
    <div class="product">
        <div class="product__img">
            <img
              src=${productsState[i].image}
              alt=""
            />
        </div>
            <div class="product__name">${productsState[i].name}</div>
              <div class="product__rate">
                ${'<span>*</span>'.repeat(productsState[i].rates)}
              </div>
              <div class="product__price">R <span>${productsState[i].price}</span></div> 
                <button>+ ADD TO CART</button> 
          </div>
          
    `
    
    
  }
}

Productapprove()


// remember items of showscreen
/* Set rates + misc */
var taxRate = 0.05;
var shippingRate = 15.00; 
var fadeTime = 300;


/* Assign actions */
$('.product-quantity input').change( function() {
  updateQuantity(this);
});

$('.product-removal button').click( function() {
  removeItem(this);
});


/* Recalculate cart */
function recalculateCart()
{
  var subtotal = 0;
  
  /* Sum up row totals */
  $('.product').each(function () {
    subtotal += parseFloat($(this).children('.product-line-price').text());
  });
  
  /* Calculate totals */
  var tax = subtotal * taxRate;
  var shipping = (subtotal > 0 ? shippingRate : 0);
  var total = subtotal + tax + shipping;
  
  /* Update totals display */
  $('.totals-value').fadeOut(fadeTime, function() {
    $('#cart-subtotal').html(subtotal.toFixed(2));
    $('#cart-tax').html(tax.toFixed(2));
    $('#cart-shipping').html(shipping.toFixed(2));
    $('#cart-total').html(total.toFixed(2));
    if(total == 0){
      $('.checkout').fadeOut(fadeTime);
    }else{
      $('.checkout').fadeIn(fadeTime);
    }
    $('.totals-value').fadeIn(fadeTime);
  });
}


