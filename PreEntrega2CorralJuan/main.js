
function getHamburgerIngredients() {
    let name = document.getElementById("burger-name").value;
    let ingredients = [];
  
    let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    for (let i = 0; i < checkboxes.length; i++) {
      ingredients.push(checkboxes[i].value);
    }
  
    if (name === "" || ingredients.length === 0) {
      alert("Seleccione sus ingredientes y nombre su hamburguesa.");
    } else {
      let ingredientsString = ingredients.join(", ");
      alert("Tu hamburguesa es \"" + name + "\" y sus ingredientes son: " + ingredientsString + ".");
    }
  }let hamburguesas = [];

  function getHamburgerIngredients() {
    let name = document.getElementById("burger-name").value;
    let ingredients = [];
  
    let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    for (let i = 0; i < checkboxes.length; i++) {
      ingredients.push(checkboxes[i].value);
    }
  
    if (name === "" || ingredients.length === 0) {
      alert("Seleccione sus ingredientes y nombre su hamburguesa.");
    } else {
      let hamburger = {
        nombre: name,
        ingredientes: ingredients
      };
      hamburguesas.push(hamburger);
  
      let ingredientsString = ingredients.join(", ");
      alert("Tu hamburguesa es \"" + name + "\" y sus ingredientes son: " + ingredientsString + ".");
    }
  
    mostrarHamburguesas(); // llama a la función para mostrar las hamburguesas creadas
  }
  
  function mostrarHamburguesas() {
    let listaHamburguesas = document.getElementById("listaHamburguesas");
    listaHamburguesas.innerHTML = "";
    for (let i = 0; i < hamburguesas.length; i++) {
      let hamburguesa = hamburguesas[i];
      let li = document.createElement("li");
      li.textContent = hamburguesa.nombre + " - " + hamburguesa.ingredientes.join(", ");
      listaHamburguesas.appendChild(li);
    }
  }
  