import Container from "@/app/components/Container";
import ProductDetails from "./ProductDetails";
import ListRating from "./ListRating";
import { products } from "@/utils/products";

interface iPrams {
  productId?: string;
}

const Product = ({ params }: { params: iPrams }) => {
  console.log("params: ", params);

  const product = products.find((item) => item.id === params.productId);

  product;
  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={product} />
        <div className="flex flex-col mt-12 gap-4">
          <div>Add Rating</div>
          <ListRating product={product} />
        </div>
      </Container>
    </div>
  );
};

export default Product;
