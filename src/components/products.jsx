const Products = () => {
  const product = {
    name: "laptop",
    price: 1200,
    available: "in stock",
  };

  return (
    <div>
      <h1>the product name is : {product.name}</h1>
      <h2>the product price is : ${product.price}</h2>
      <h3>the product available is : {product.available}</h3>
    </div>
  );
};
export default Products;
