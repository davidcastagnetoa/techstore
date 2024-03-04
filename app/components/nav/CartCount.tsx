"use client";
import { useCart } from "@/hooks/useCart";
import { useRouter } from "next/navigation";
import { CiShoppingCart } from "react-icons/ci";

const CartCount = () => {
  const { cartTotalQty } = useCart();
  const router = useRouter();
  return (
    <div className="relative cursor-pointer" onClick={() => router.push("/cart")}>
      <div className="text-3xl">
        <CiShoppingCart />
      </div>
    </div>
  );
};

export default CartCount;
