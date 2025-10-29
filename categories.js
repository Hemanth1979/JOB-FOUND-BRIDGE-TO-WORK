document.addEventListener("DOMContentLoaded", () => {
  const categoryItems = document.querySelectorAll(".category-item");

  categoryItems.forEach(item => {
    item.addEventListener("click", () => {
      const category = item.getAttribute("data-category");
      window.location.href = `category-details.html?category=${encodeURIComponent(category)}`;
    });
  });
});
