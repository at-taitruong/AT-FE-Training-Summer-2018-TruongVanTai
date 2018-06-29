window.onload = function() {
  var product = [
    {
      id : 1,
      name : 'Iphone X',
      price : 15000000,
      img : 'images/product-iphonex.png'
    },
    {
      id : 2,
      name : 'Iphone 6s',
      price : 17000000,
      img : 'images/product-iphone-6s.png'
    },
    {
      id : 3,
      name : 'Iphone 8s',
      price : 14000000,
      img : 'images/product-iphone-8s.png'
    },
    {
      id : 4,
      name : 'Iphone red',
      price : 16000000,
      img : 'images/product-iphone-red.png'
    },
    {
      id : 5,
      name : 'Samsung-note',
      price : 12000000,
      img : 'images/product-samsung-note.png'
    },
    {
      id : 6,
      name : 'Samsung-s8',
      price : 11000000,
      img : 'images/product-samsung-s8.png'
    },
    {
      id : 7,
      name : 'Iphone X',
      price : 16000000,
      img : 'images/product-iphonex.png'
    },
    {
      id : 8,
      name : 'Iphone-red',
      price : 10000000,
      img : 'images/product-iphone-red.png'
    }
  ]
  var productList = document.getElementById("product-list");
  function showProducts() {
    var html = '';
    for (var i = 0; i < product.length; i++) {
      html = html+
        '<li class="product-item">'+
          '<img src="'+product[i].img+'" alt="iphone">'+
          '<h3>'+product[i].name+'</h3>'+
          '<p>price: '+product[i].price+'</p>'+
          '<center><button type="button" id="'+product[i].id+'">Add To Cart</button></center>'+
        '</li>';
    }
    productList.innerHTML = html;
  }
  if (productList) {
    showProducts();
  }
  var btnList = document.getElementsByTagName('button');
  var carts = (localStorage.getItem('product-list')=== null) ? [] : JSON.parse(localStorage.getItem('product-list'));
  var productId;
  function addEventButton() {
    for (var i = 0; i < btnList.length; i++) {
      productId = btnList[i].id;
      if (carts.indexOf(productId) !== -1){
        btnList[i].disabled = true;
      }else {
        btnList[i].addEventListener('click', addEvenClick);
      }
    }
  }
  function addEvenClick(){
    this.disabled = true;
    this.innerText = 'added to cart';
    carts.push(this.id);
    localStorage.setItem('product-list',JSON.stringify(carts)); 
    countProductCart();
  }
  addEventButton();
  var cartItem = document.getElementById('table-body');
  function viewCart() {
    var html1 ='';
    for (var i = 0; i < carts.length; i++) {
      var productId =+ carts[i];
      var itemCart = null;
      itemCart = getProduct(productId);
      html1 = html1 +
       '<tr id="'+itemCart.id+'">'+
          '<td><img src="'+itemCart.img+'" alt="product" width="100" height="100"></td>'+
          '<td>'+itemCart.name+'</td>'+
          '<td>'+itemCart.price+'</td>'+
          '<td>1</td>'+
          '<td><button id="'+itemCart.id+'" class="btn-remove">x</button></td>'+
        '</tr>';
        cartItem.innerHTML = html1;
    }
  }
  function getProduct(productId) {
    for (var i = 0; i < product.length; i++) {
      if (product[i].id === productId) {
        return product[i];
      }
    }  
  }
  if (cartItem) {
    viewCart();
  }
  var countHTML = document.getElementById("header-icon-cart");
  function countProductCart() {
    var count = carts.length;
    countHTML.innerText= count;
    countHTML.style.color= 'red';
    countHTML.style.borderRadius = '50%';
    countHTML.addEventListener('click',url);
  }
  countProductCart();

  function url() {
    window.location.href = 'viewcart.html';
  }
  var removeItems = document.getElementsByClassName("btn-remove");
  function removeEventButton() {
    for (var i = 0; i < removeItems.length; i++) {
      productId = removeItems[i].id;
      console.log(removeItems[i].id);
      removeItems[i].addEventListener('click', removeItem(productId));
    }
  }
  removeEventButton();
  function removeItem(productId) {
      return function() {
      var index = carts.indexOf(productId);
      carts.splice(index,1);
      localStorage.setItem('product-list',JSON.stringify(carts));
      location.reload();
    }
  }
}
// count.style.visibitily = if (storedProduct.length) { return visible} hidden