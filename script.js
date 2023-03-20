// Array vacío para pushear los productos agregados
let products = [];

// Función para interactuar con el botón del formulario y agregar productos al array
function addProduct() {
  let name = document.getElementById("name").value;
  let price = document.getElementById("price").value;
  let quantity = document.getElementById("quantity").value;
  let category = document.getElementById("category").value;
  
  let product = {
    name: name,
    price: price,
    quantity: quantity,
    category: category
  };
  
  products.push(product);
  
  showProducts();
}

// Función para mostrar los productos en la tabla
function showProducts() {
  let table = document.getElementById("tableOfProducts").getElementsByTagName("tbody")[0];
  
  table.innerHTML = "";
  
  for(let i = 0; i < products.length; i++) {
    let row = table.insertRow(i);
    
    let nameCell = row.insertCell(0);
    nameCell.innerHTML = products[i].name;
    
    let priceCell = row.insertCell(1);
    priceCell.innerHTML = products[i].price;
    
    let quantityCell = row.insertCell(2);
    quantityCell.innerHTML = products[i].quantity;
    
    let categoryCell = row.insertCell(3);
    categoryCell.innerHTML = products[i].category;
    
    let actionsCell = row.insertCell(4);
    let eraseButton = document.createElement("button");
    eraseButton.innerHTML = "Delete";
    eraseButton.onclick = function() {
      products.splice(i, 1);
      showProducts();
    };
    actionsCell.appendChild(eraseButton);
    
    let updateButton = document.createElement("button");
    updateButton.innerHTML = "Update";
    updateButton.onclick = function() {
      document.getElementById("name").value = products[i].name;
      document.getElementById("price").value = products[i].price;
      document.getElementById("quantity").value = products[i].quantity;
      document.getElementById("category").value = products[i].category;
      
      products.splice(i, 1);
      showProducts();
    };
    actionsCell.appendChild(updateButton);
  }
}
