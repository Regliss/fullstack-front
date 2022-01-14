import React from "react";
import Link from "next/link";

const ProductCard = (props) => {
  return (
    <div className="product__card" key={props.product.id}>
          <h2>{props.product.title}</h2>
          <p>
            {props.product.price}
          </p>
      <Link href={`/shop/${props.product.id}`}>
        <a className="btn btn-white">Voir le produit</a>
      </Link>
    </div>
  );
};

export default ProductCard;