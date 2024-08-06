import { addProductToCart } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CartButton from "../CartButton/CartButton";

const ProductCard = ({ product }: any) => {
  const { title, category, price, image } = product;
  return (
    <div className="border rounded-lg px-4 py-5 bg-slate-900 text-white hover:bg-slate-700">
      <div className="mx-auto flex max-w-xs flex-col gap-y-4">
        <div className="flex justify-between h-12">
          <Image src={image} alt={category} width={100} height={100} />
          <div className="p-6 px-5">
            <h4>{title}</h4>
            <p>{price}$ </p>
          </div>
        </div>
        <div className="flex justify-between">
          <Link href={`product/${product.id}`}>
            <button className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700">
              Description
            </button>
          </Link>
          <CartButton product={product} />
        </div>
      </div>
    </div>

  );
};

export default ProductCard;
