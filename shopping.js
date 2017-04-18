

var shoppingList = [
  {
    name: "milk",
    price: 2.00
  },

  {
    name: "bread",
    price: 1.00
  },

  {
    name: "eggs",
    price: 2.00
  },

  {
    name: "tomatoes",
    price: 3.00
  },

  {
    name: "avacado",
    price: 1.50
  },

  {
    name: "onions",
    price: 4.00
  },

  {
    name: "water",
    price: 2.00
  },

  {
    name: "chicken",
    price: 10.00
  },

  {
    name: "chorizo",
    price: 1.00
  },

  {
    name: "wine",
    price: 10.00
  },

  ];

  // End of Shopping List

  var total= 0;

  shoppingList.forEach( function(item){
    total += (item.price);
    console.log(item.name + " - " + "$" + item.price);
  });

  // console.log(shoppingList);
  var taxTotal = (total * 0.06);
  var totalPlusTax = (total * 1.06);
  var totalRounded = totalPlusTax.toFixed(2);

//Output//////////////
  console.log("Your total is" + " $" + total + " " + "(plus tax)");
  console.log("Your tax is" + " $" + taxTotal);
  console.log("Your Bill Total is" + " $" + totalRounded);
