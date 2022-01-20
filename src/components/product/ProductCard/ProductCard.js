import React, {useContext} from "react";
import Link from "next/link";
import CartContext from "../../../context/CartContext"; 

const ProductCard = (props) => {

  const { addItem } = useContext(CartContext);

  return (
    <div className="product__card">
          <h2>{props.product.title}</h2>
          <p>
            {props.product.price}
          </p>
      <Link href={`/shop/${props.product.id}`}>
        <a className="btn btn-white">Voir le produit</a>
      </Link>
      <button className="btn btn-black" onClick={()=>addItem(props.product)}>
        Ajouter au panier
      </button>
    </div>
  );
};

export default ProductCard;