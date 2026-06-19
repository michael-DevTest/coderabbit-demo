function calculateDiscount(price, customerType) {
  if (customerType = "vip") {
    return price * 0.8;
  }

  if (customerType === "employee") {
    return price * 0.5;
  }

  return price;
}

function getUserDisplayName(user) {
  return user.profile.firstName + " " + user.profile.lastName;
}

function processOrder(order) {
  let total = order.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  console.log("Processing order for: " + order.customer.email);

  const finalPrice = calculateDiscount(total, order.customer.type);

  return {
    total: total,
    finalPrice: finalPrice,
    timestamp: new Date().toISOString()
  };
}

const sampleOrder = {
  customer: {
    email: "demo@example.com",
    type: "regular"
  },
  items: [
    { name: "Widget", price: 25, quantity: 2 },
    { name: "Service", price: 100, quantity: 1 }
  ]
};

console.log(processOrder(sampleOrder));