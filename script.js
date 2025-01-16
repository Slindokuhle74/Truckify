const truckOrderForm = document.getElementById('truck-order-form');
const orderTruckBtn = document.getElementById('order-truck-btn');
const orderSummaryModal = document.getElementById('order-summary-modal');
const orderSummary = document.getElementById('order-summary');

orderTruckBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const truckType = document.getElementById("truck-type").value;
  const cargoType = document.getElementById("cargo-type").value;
  const pickupLocation = document.getElementById("pickup-location").value;
  const deliveryLocation = document.getElementById("delivery-location").value;
  const pickupDate = document.getElementById("pickup-date").value;
  const deliveryDate = document.getElementById("delivery-date").value;

  const orderSummaryText = `
    Truck Type: ${truckType}
    Cargo Type: ${cargoType}
    Pickup Location: ${pickupLocation}
    Delivery Location: ${deliveryLocation}
    Pickup Date: ${pickupDate}
    Delivery Date: ${deliveryDate}
  `;

  orderSummary.innerText = orderSummaryText;
  orderSummaryModal.style.display = "block";
});

const closeModal = () => {
  orderSummaryModal.style.display = "none";
};

document.querySelector(".close").addEventListener("click", closeModal);
window.addEventListener("click", (e) => {
  if (e.target === orderSummaryModal) {
    closeModal();
  }
});
