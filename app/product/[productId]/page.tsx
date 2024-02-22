import Container from "@/app/components/Container";
import { product } from "@/utils/product";
import ProductDetails from "../ProductDetails";

interface iPrams {
  productId?: string;
}

const Product = ({ params }: { params: iPrams }) => {
  console.log("params: ", params);
  product;
  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={product} />
      </Container>
    </div>
  );
};

export default Product;
