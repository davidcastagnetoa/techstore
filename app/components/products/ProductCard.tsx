"use client";

import { truncateText } from "@/utils/truncateText";
import { formatPrice } from "@/utils/formatPrices";
import Image from "next/image";
import { Rating } from "@mui/material";
import { useRouter } from "next/navigation";

interface ProductsCardProps {
  data: any;
}

const ProductCard: React.FC<ProductsCardProps> = ({ data }) => {
  const productRating = data.reviews.reduce((acc: any, item: any) => item.rating + acc, 0) / data.reviews.length;
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/product${"/" + data?.id}`)}
      className="col-span-1 cursor-pointer border-[1.2px] border-slate-200 bg-slate-50 rounded-sm p-2 transition hover:scale-105 text-center text-sm"
    >
      <div className="flex flex-col items-center w-full gap-1">
        <div className="aspect-square overflow-hidden relative w-full">
          <Image className="w-full h-full object-contain" src={data.images[0].image} alt={data.name} fill />
        </div>
        <div>{truncateText(data.name)}</div>
        <div>
          <Rating value={productRating} readOnly />
        </div>
        <div>{data.reviews.length} reviews</div>
        <div className="font-semibold">{formatPrice(data.price)}</div>
      </div>
    </div>
  );
};

export default ProductCard;
