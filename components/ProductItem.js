import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export default function ProductItem({ product, addToCartHandler }) {
  return (
    <div className="card">
      <Link href={`/product/${product.slug}`}>
        <Image
          width={376}
          height={190}
          src={product.image}
          alt={product.name}
          className="rounded shadow object-cover h-48 w-full"
        />
      </Link>
      <div className="flex flex-col items-center justify-center pb-2">
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-lg">{product.name}</h2>
        </Link>
        <p className="mb-2">{product.categoy}</p>
        <p>${product.price}</p>
        <button
          className="primary-button"
          type="button"
          onClick={() => addToCartHandler(product)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
