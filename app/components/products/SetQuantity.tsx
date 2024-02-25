"use client";

import { CartProductType } from "@/app/product/ProductDetails";

interface SetQtyProps {
  cartCounter?: boolean;
  cartProduct: CartProductType;
  handleQtyIncrease: () => void;
  handleQtyDecrease: () => void;
}
const btnStyles = "border-[2px] border-slate-300 px-2 rounded";

const SetQuantity: React.FC<SetQtyProps> = ({ cartCounter, cartProduct, handleQtyDecrease, handleQtyIncrease }) => {
  return (
    <div className="flex gap-8 items-center ">
      {cartCounter ? null : <div className="font-semibold">Quantity: </div>}
      <div className="flex gap-4 items-center text-base">
        <button className={btnStyles} onClick={handleQtyDecrease}>
          -
        </button>
        <div>{cartProduct.quantity}</div>
        <button className={btnStyles} onClick={handleQtyIncrease}>
          +
        </button>
      </div>
    </div>
  );
};

export default SetQuantity;
