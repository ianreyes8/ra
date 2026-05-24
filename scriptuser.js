//carrusel principal
$('.home-carousel').owlCarousel({
    loop:true,
    margin:0,
    dots: true,
    autoplay:true,
    autoplayTimeout: 7000,
    animateOut:'fadeOut',

    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

//navbar
window.addEventListener('scroll', function(){
    let navbar = document.getElementById("navbar");
    navbar.classList.toggle('fixed', this.window.scrollY > 0)
})

//FUNCIONES DEL NAV
let menuBtn = document.querySelector('.menu-btn');
let searchBtn = document.querySelector('.searchbtn');
let cartBtn = document.querySelector('.cartbtn');
let darkBtn = document.querySelector('.darkbtn');

menuBtn.onclick = function(){
    document.getElementById("nav-items").classList.toggle('active');

    if(document.getElementById("nav-items").classList.contains('active')){
        menuBtn.classList.remove("bx-menu");
        menuBtn.classList.add("bx-x");
    }
    else{
        menuBtn.classList.remove("bx-x");
        menuBtn.classList.add("bx-menu");
    }
}

searchBtn.onclick = function(){
    document.getElementById("search-form").classList.toggle('active');

    if(document.getElementById("search-form").classList.contains('active')){
        searchBtn.classList.remove("bx-search-alt-2");
        searchBtn.classList.add("bx-x");
    }
    else{
        searchBtn.classList.remove("bx-x");
        searchBtn.classList.add("bx-search-alt-2");
    }
}

cartBtn.onclick = function(){
    document.getElementById("cart").classList.toggle('active');

    if(document.getElementById("cart").classList.contains('active')){
        cartBtn.classList.remove("bx-cart");
        cartBtn.classList.add("bx-x");
    }
    else{
        cartBtn.classList.remove("bx-x");
        cartBtn.classList.add("bx-cart");
    }
}

darkBtn.onclick = function(){
    document.body.classList.toggle('dark-mode');

    if(document.body.classList.contains('dark-mode')){
        darkBtn.classList.remove("bx-moon");
        darkBtn.classList.add("bx-sun");
    }
    else{
        darkBtn.classList.remove("bx-sun");
        darkBtn.classList.add("bx-moon");
    }
}

let menuTabs = document.querySelector('.menu-tabs');
menuTabs.addEventListener('click', function(e){
    if(e.target.classList.contains('menu-tab-item') && !e.target.classList.contains('active')){

        const target = e.target.getAttribute("data-target");


        menuTabs.querySelector('.active').classList.remove('active');

        e.target.classList.add("active");

        let menuSection = document.querySelector(".menu-section");

        menuSection.querySelector(".menu-tab-content.show").classList.remove("show");

        menuSection.querySelector(target).classList.add("show");

    }

    else{
        return
    }
})

// Obtén el elemento del icono por su ID
let userIcon = document.getElementById("user-icon");
userIcon.addEventListener("click", function() {
    window.location.href = "index3.html";
});

// Obtén el elemento del enlace por su ID
let loginLink = document.getElementById("login-link");
loginLink.addEventListener("click", function() {
    window.location.href = "index3.html";
});

var enlace = document.getElementById("reservation-event");

    // Agrega un evento de clic al enlace
    enlace.addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "indexreservas.html";
    });

function highlightItem(item) {
    item.style.transform = 'scale(1.1)';
    item.style.transition = 'transform 0.3s ease-in-out';
}

function unhighlightItem(item) {
    item.style.transform = 'scale(1)';
}

const searchForm = document.getElementById('search-form-inner');

searchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log("Formulario enviado");
    const searchTerm = document.querySelector('.search-data').value.toLowerCase();
    const categories = document.querySelectorAll('.menu-tab-content'); // Obtener todas las categorías
    categories.forEach((category) => {
        const itemsToSearch = category.querySelectorAll('.menu-item'); // Obtener todos los elementos en la categoría
        
        itemsToSearch.forEach((item) => {
            const itemId = item.getAttribute('id').toLowerCase(); // Obtener el id del elemento y convertirlo a minúsculas
            
            if (itemId.includes(searchTerm)) {
                // Resalta el elemento coincidente con la animación y el marco rojo
                highlightItem(item);
                // Desplázate hacia el elemento coincidente
                item.scrollIntoView({ behavior: 'smooth' });
            } else {
                // Restaura el estilo de otros elementos y la clase CSS del marco rojo
                unhighlightItem(item);
            }
        });
    });
});


//carrusel de eventos
$('.events-carousel').owlCarousel({
    loop:true,
    margin:30,
    dots: true,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})

// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Verifica si el elemento con id "login-link" existe en el DOM
    var loginLink = document.getElementById("login-link");

    // Si el elemento existe, elimínalo
    if (loginLink) {
        loginLink.remove();
    }
});

let cartItems = [];

function addToCart(itemName, itemPrice, itemImage) {
    const newItem = {
        name: itemName,
        price: itemPrice,
        image: itemImage,
    };

    cartItems.push(newItem);

    updateCartDisplay();
}

function calculateTotalPrice() {
    let totalPrice = 0;
    for (const item of cartItems) {
        totalPrice += item.price;
    }
    return totalPrice;
}


function updateCartDisplay() {
    const cartContainer = document.getElementById("cart");
    const totalContainer = document.getElementById("total");
    const cartCount = document.getElementById("cart-count");

    cartCount.textContent = cartItems.length;
    cartContainer.innerHTML = "";

    if (cartItems.length === 0) {
        cartContainer.innerHTML = '<span>No tienes productos en el carrito</span>';
        cartContainer.style.height = "auto";
    } else {
        const cartHeight = 110 * cartItems.length + 40;

        // Establecer la altura del contenedor del carrito
        cartContainer.style.height = cartHeight + "px";
        
        let totalPrice = 0;

        cartItems.forEach((item, index) => {
            const cartItemElement = document.createElement("div");
            cartItemElement.classList.add("cart-item");

            // Agrega la imagen del artículo
            const itemImage = document.createElement("img");
            itemImage.src = item.image;
            itemImage.style.maxWidth = "50px"; // Establece el ancho máximo de la imagen
            itemImage.style.marginRight = "10px"; // Ajusta los márgenes
            cartItemElement.appendChild(itemImage);

            // Agrega el nombre, precio y descripción del artículo
            const itemNameElement = document.createElement("span");
            itemNameElement.textContent = item.name;
            cartItemElement.appendChild(itemNameElement);

            const itemPriceElement = document.createElement("span");
            itemPriceElement.textContent = `$${item.price.toFixed(2)}`;
            cartItemElement.appendChild(itemPriceElement);

            const removeButton = document.createElement("button");
            removeButton.classList.add("remove-button");
            removeButton.innerHTML = "X";
            removeButton.onclick = () => removeFromCart(item);
            cartItemElement.appendChild(removeButton);

            cartContainer.appendChild(cartItemElement);

            totalPrice += item.price;
        });

        const additionalPayment = totalPrice * 0.3;
        const totalPriceWithAdditionalPayment = totalPrice + additionalPayment;
        // Crear un elemento para mostrar el precio total
        const totalPriceElement = document.createElement("div");
        totalPriceElement.classList.add("total-price");

        // Obtener el precio total calculando la suma
        const total = calculateTotalPrice();
        totalPriceElement.innerHTML = `Total: $${totalPriceWithAdditionalPayment.toFixed(2)}`;

        const additionalPaymentText = document.createElement("div");
        additionalPaymentText.style.fontSize = "12px";
        additionalPaymentText.style.textAlign = "right";
        totalPriceElement.appendChild(additionalPaymentText);
        
        // Agregar el precio total al contenedor del carrito
        cartContainer.appendChild(totalPriceElement);

        // Crear el botón de "Comprar" solo si hay elementos en el carrito
    // Crear el botón de "Comprar" solo si hay elementos en el carrito
    const buyButton = document.createElement("button");
buyButton.textContent = "Comprar";
buyButton.classList.add("buy-button");

// Obtén el modal y el botón de cierre
const paymentModal = document.getElementById("payment-modal");
const closeButton = document.getElementById("close-button");

// Agregar un manejador de eventos al botón de "Comprar"
buyButton.onclick = function () {
    // Muestra la ventana modal cuando se hace clic en el botón de "Comprar"
    paymentModal.style.display = "block";
};

// Agregar el botón de "Comprar" al contenedor del carrito (cartContainer)
cartContainer.appendChild(buyButton);

// Cuando se hace clic en el botón de cierre, cierra el modal
closeButton.onclick = function() {
    paymentModal.style.display = "none";
}

// También puedes cerrar el modal haciendo clic fuera del área del modal
window.onclick = function(event) {
    if (event.target == paymentModal) {
        paymentModal.style.display = "none";
    }
}
}
    }

function removeFromCart(item) {
    const index = cartItems.findIndex((cartItem) => cartItem === item);
    if (index !== -1) {
        cartItems.splice(index, 1);
        updateCartDisplay();
    }
}

// Función para mostrar la ventana modal
function openModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "block";
  }
  
  // Función para ocultar la ventana modal
  function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
  }
  function submitReservationForm() {
    var form = document.getElementById("reservation-form");
    if (form.checkValidity()) {
        openModal(); 
    } else {
        alert("Por favor, completa todos los campos obligatorios.");
    }
}