const btnSingIn = document.getElementById("sing-in"),
      btnSingUp = document.getElementById("sing-up"),
      formRegister = document.querySelector(".register"),
      formLogin = document.querySelector(".login");

btnSingIn.addEventListener("click", e => {
    formRegister.classList.add("hide");
    formLogin.classList.remove("hide")
})

btnSingUp.addEventListener("click", e => {
    formLogin.classList.add("hide");
    formRegister.classList.remove("hide")
})
                                        
const form = document.querySelector(".form2");
form.addEventListener("submit", function(event) {
    // Previene el envío del formulario al servidor
    event.preventDefault();
    
    // Realiza la redirección a la página deseada (por ejemplo, "segundo.html")
    window.location.href = "index.html";
});

// Selecciona el formulario por su ID
const registrationForm = document.getElementById('registrationForm');

// Agrega un evento de escucha para el evento "submit" del formulario
registrationForm.addEventListener('submit', function (e) {
    // Previene el comportamiento predeterminado del formulario (envío)
    e.preventDefault();
    
    // Realiza la redirección a "index4.html"
    window.location.href = 'index4.html';
});

function checkOtroOption() {
    var tipoEventoSelect = document.getElementById("tipoEvento");
    var otroEventoContainer = document.getElementById("otroEventoContainer");

    if (tipoEventoSelect.value === "Otro") {
        otroEventoContainer.style.display = "block";
    } else {
        otroEventoContainer.style.display = "none";
    }   
}

function openModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "block";
  }
  
  // Función para ocultar la ventana modal
  function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
  }
  function submitReservation() {
    var form = document.getElementById("reservation");
    if (form.checkValidity()) {
        openModal(); 
    } else {
        alert("Por favor, completa todos los campos obligatorios.");
    }
}

