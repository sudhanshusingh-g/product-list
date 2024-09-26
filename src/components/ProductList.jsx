import ProductCard from "./ProductCard";

function ProductList({products}) {
  return (
    <div className="flex-flex-col space-y-4">
      <h1 className=" font-black text-2xl">Desserts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.category}
            title={product.name}
            price={product.price}
            category={product.category}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList