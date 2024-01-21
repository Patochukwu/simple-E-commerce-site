function welcomeUser() {
  console.log("WELCOME TO SHOP AS YOU LIKE");
}

const wears = [
  { id: 1, name: "face cap", price: 120 },
  { id: 2, name: "crop top", price: 200 },
  { id: 3, name: "hoody", price: 150 },
  { id: 4, name: "palazo", price: 550 },
  { id: 5, name: "iwatch", price: 1000 },
];

const cart = [];

function displayItems() {
  console.log("shop wears");

  let i = 0;
  while (i < wears.length) {
    console.log(`${wears[i].id}. ${wears[i].name} - $${wears[i].price}`);
    i++;
  }
}

function selectItems() {
  const selected = Number(prompt("enter ID to add to cart or 0 to buy"));
  if (selected == 0) {
    displaySelected();

    const action = prompt("Proceed to payment? (yes/no)").toLowerCase().trim();

    if (action === "yes") {
      // User wants to proceed to payment
      console.log("Processing payment...");

      const action = alert("thank you for shopping");
    } else if (action === "no") {
      // User doesn't want to proceed to payment
      console.log("Payment canceled.");
    } else {
      // Handle invalid input
      console.log('Invalid input. Please enter "yes" or "no".');
    }
  } else {
    addToCart(selected);
    startShopping();
  }
}

function displaySelected() {
  console.log("Your wears");

  for (let i = 0; i < cart.length; i++) {
    console.log(`${cart[i].name} - $${cart[i].price}`);
  }
  console.log(`Total: $${calculateTotal()}`);
}

function calculateTotal() {
  let total = 0;

  cart.forEach((item) => {
    total += wear.price;
  });

  return total;
}

function startShopping() {
  welcomeUser();
  displayItems();
  selectItems();
}

startShopping();
