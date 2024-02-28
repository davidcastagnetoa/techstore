"use client";

import { useCart } from "@/hooks/useCart";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import Heading from "../components/Heading";
import Button from "../components/Button";

const CartClient = () => {
  const { cartProducts } = useCart();

  if (!cartProducts || cartProducts.length === 0) {
    return (
      <div className="flex flex-col items-center">
        <div className="text-2xl">Your cart is empty</div>
        <div>
          <Link href={"/"} className="text-slate-500 flex items-center gap-1 mt-2">
            <MdArrowBack />
            <span>Start Shopping</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Heading title="Shopping Cart" center />
      <div className="grid grid-cols-5 text-xs gap-4 pb-2 items-center mt-8">
        <div className="col-span-2 justify-self-start">PRODUCT</div>
        <div className="col-span-2 justify-self-center">PRICE</div>
        <div className="col-span-2 justify-self-center">QUANTITY</div>
        <div className="col-span-2 justify-self-end">TOTAL</div>
      </div>
      <div>
        {cartProducts &&
          cartProducts.map((item) => {
            return <div key={item.id}>{item.name}</div>;
          })}
      </div>
      <div className="border-t-[1.5px] border-slate-200 py-4 flex justify-between gap-4">
        <div className="w-[90px] ">
          <Button label="Clear Cart" onClick={() => {}} small outlined />
        </div>
        <div className="text-sm flex flex-col gap-1 items-center">
          <div className="flex justify-center w-full text-base font-semibold">
            <span>Subtotal</span>
            <span>$1000</span>
          </div>
          <p>Taxes and shipping calculate at checkout</p>
        </div>
      </div>
    </div>
  );
};

export default CartClient;
