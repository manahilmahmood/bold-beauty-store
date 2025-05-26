export function sortProducts(products, sortBy) {
  const sorted = [...products];

  switch (sortBy) {
    case "latest":
      return sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price);
    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price);
    case "title-asc":
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
    case "title-desc":
      return sorted.sort((a, b) => b.title.localeCompare(a.title));
    default:
      return sorted;
  }
}
