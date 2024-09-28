import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

function ProductCard({ title, price, category, image }) {
  const { cart, addToCart } = useContext(ProductContext);

  // Find the product in the cart to show its current quantity
  const productInCart = cart.find((item) => item.name === title);
  const quantity = productInCart ? productInCart.quantity : 0;

  return (
    <div className="flex flex-col gap-4 relative">
      <div className="rounded-md">
        <picture>
          <source srcSet={image.desktop} media="(min-width: 1000px)" />
          <source srcSet={image.tablet} media="(min-width: 768px)" />
          <img
            src={image.mobile}
            alt={category}
            className="w-full h-full object-cover rounded-md"
          />
        </picture>
      </div>
      <div className="relative flex items-center justify-center">
        {quantity > 0 ? (
          <div className="w-2/3 border border-red absolute -top-8 flex items-center justify-between px-4 py-2 rounded-full gap-2 text-sm bg-red transition-all duration-300">
            <button
              onClick={() => addToCart({ name: title, price, image })}
              className="group hover:bg-white rounded-full border h-4 w-4 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="2"
                fill="none"
                viewBox="0 0 10 2"
                className="text-white group-hover:text-red"
              >
                <path
                  className="fill-current"
                  fill="#fff"
                  d="M0 .375h10v1.25H0V.375Z"
                />
              </svg>
            </button>
            <span className="font-semibold text-white">{quantity}</span>
            <button
              onClick={() => addToCart({ name: title, price, image })}
              className="group hover:bg-white rounded-full border h-4 w-4 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                fill="none"
                viewBox="0 0 10 10"
                className="text-white group-hover:text-red"
              >
                <path
                  className="fill-current"
                  fill="#fff"
                  d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
                />
              </svg>
            </button>
          </div>
        ) : (
          <button
            className="w-2/3 absolute -top-8 flex items-center justify-center px-4 py-2 rounded-full bg-white gap-2 text-sm border border-rose-500 group hover:text-red hover:border-red transition-all duration-300"
            onClick={() => addToCart({ name: title, price, image })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              fill="none"
              viewBox="0 0 21 20"
            >
              <g fill="#C73B0F" clipPath="url(#a)">
                <path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z" />
                <path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z" />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M.333 0h20v20h-20z" />
                </clipPath>
              </defs>
            </svg>
            <span className="font-semibold">Add to cart</span>
          </button>
        )}
      </div>
      <div>
        <span className="text-xs text-rose-400">{category}</span>
        <p className="text-rose-900 font-bold text-sm">{title}</p>
        <p className="text-red font-bold">${price.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default ProductCard;
