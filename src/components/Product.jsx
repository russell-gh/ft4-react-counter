import { useParams } from "react-router-dom";

const Product = (props) => {
  const { id } = useParams();

  const products = [
    { id: 1, title: "PS3" },
    { id: 2, title: "PS4" },
    { id: 3, title: "XBOX 360" },
    { id: 4, title: "PS 5" },
  ];

  const product = products.find((product) => product.title == id);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <>
      <p>{product.title}</p>
    </>
  );
};

export default Product;
