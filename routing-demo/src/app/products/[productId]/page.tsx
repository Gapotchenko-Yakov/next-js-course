import { Metadata } from "next";
import React from "react";

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve, reject) =>
    setTimeout(() => resolve(`iPhone ${params.productId}`), 100)
  );

  return {
    title: `Product ${title}`,
  };
};

type Props = { params: { productId: string } };

const ProductDetails = ({ params }: Props) => {
  return <h2>Details about product {params.productId}</h2>;
};

export default ProductDetails;
