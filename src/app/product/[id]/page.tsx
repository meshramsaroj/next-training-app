import Rating from "@/component/Rating/Rating";
import { getProductDataById } from "@/utils/utils";
import Image from "next/image";
import React from "react";

const ProductDetails = async ({ params }: { params: { id: number } }) => {
  const productData = await getProductDataById(params.id);
  return (
    <div>
      <div className="px-5 border py-5 grid grid-cols-2">
        <Image
          src={productData.image}
          alt={productData.title}
          width={400}
          height={200}
        />
        <section>
          <h2 className="text-lg text-slate-950">{productData.title}</h2>

          <div>
            <p>Description</p>
            <p> {productData.description}</p>
            <Rating rating={productData.rating.rate} />
          </div>
        </section>
      </div>
    </div>
  );
};



export default ProductDetails;
