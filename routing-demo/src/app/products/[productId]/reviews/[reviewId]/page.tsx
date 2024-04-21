import NotFound from "@/app/not-found";
import { notFound } from "next/navigation";
import React from "react";

const Review = ({
  params,
}: {
  params: { reviewId: string; productId: string };
}) => {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }

  return (
    <h2>
      Review {params.reviewId} for product {params.productId}
    </h2>
  );
};

export default Review;
