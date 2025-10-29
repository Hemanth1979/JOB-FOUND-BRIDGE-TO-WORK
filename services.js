// === Scroll Animation for Service Cards ===
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".service-card");

  const revealCards = () => {
    const triggerBottom = window.innerHeight * 0.85;
    cards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      if (cardTop < triggerBottom) {
        card.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", revealCards);
  revealCards();

  // === Redirects for Each Category ===
  cards.forEach(card => {
    card.addEventListener("click", () => {
      const category = card.getAttribute("data-category");
      switch (category) {
        case "health":
          window.location.href = "health.html";
          break;
        case "technical":
          window.location.href = "technical.html";
          break;
        case "food":
          window.location.href = "food.html";
          break;
        case "delivery":
          window.location.href = "delivery.html";
          break;
        case "housekeeping":
          window.location.href = "housekeeping.html";
          break;
        case "construction":
          window.location.href = "construction.html";
          break;
        default:
          alert("This category is under development!");
      }
    });
  });
});
