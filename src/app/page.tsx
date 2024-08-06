import ProductCard from "@/component/ProductCard/ProductCard";
import { getProductData } from "@/utils/utils";

export default async function Home() {
    const productData = await getProductData();

  return (
    <div>
      <div className="bg-white py-24 sm:py-32">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
            {productData.map((product: any) => (
              <ProductCard product={product} />
            ))}
          </dl>
        </div>
      </div>

    </div>
     );
}
