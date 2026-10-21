const animalsForSale = [
  // Domestic & Farm
  { name: "Golden Retriever Puppy", category: "Domestic", price: 800 },
  { name: "Calico Kitten", category: "Domestic", price: 150 },
  { name: "Miniature Pygmy Goat", category: "Farm", price: 250 },
  { name: "Holland Lop Rabbit", category: "Domestic", price: 75 },
  { name: "Alpaca (Fluffy)", category: "Farm", price: 1200 },

  // Exotic & Reptiles
  { name: "Axolotl (Leucistic Pink)", category: "Exotic", price: 60 },
  { name: "Bearded Dragon", category: "Exotic", price: 120 },
  { name: "Panther Chameleon", category: "Exotic", price: 350 },
  { name: "Capybara", category: "Exotic", price: 2500, stock: 1 },
  { name: "Sugar Glider Pair", category: "Exotic", price: 400 },

  // Birds & Aquatic
  { name: "Scarlet Macaw", category: "Birds", price: 1800 },
  { name: "Barn Owl", category: "Birds", price: 900 },
  { name: "Emperor Penguin Chick", category: "Aquatic", price: 5000 },
  { name: "Clownfish", category: "Aquatic", price: 25 },
  { name: "Giant Pacific Octopus", category: "Aquatic", price: 1500 },

  // Mythical & Rare (For fun sorting/filtering later!)
  { name: "Red Panda", category: "Rare", price: 4500 },
  { name: "Baby Grumpy Wombat", category: "Rare", price: 650 },
  { name: "Miniature Unicorn", category: "Mythical", price: 9999 },
  { name: "Baby Phoenix", category: "Mythical", price: 7500 },
  { name: "Pygmy Gryphon", category: "Mythical", price: 8800 },
];

let cart = {};

function removefromCart(item) {
  if (cart[item]) {
    delete cart[item];
    console.log("removed " + item);
  }
}

function totalofCart() {
  let price = 0;
  cart.forEach((animal) => {
    price += animal.price * animal.quantity;
  });
  return price;
}

function filter(category) {
  let filteredlist = [];
  for (let animal of animalsForSale) {
    if (animal.category === category) {
      const matchedAnimal = animal;
      filteredlist.push(matchedAnimal);
    }
  }
  return filteredlist;
}

function addToCart(item) {
  const x = item.name;
  if (cart[x]) {
    cart[x].quantity += 1;
    console.log("increase qty");
  } else {
    cart[x] = item;
    cart[x].quantity = 1;
  }
}
