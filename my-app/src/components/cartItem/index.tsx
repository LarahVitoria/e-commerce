import React, { Fragment } from "react";
// import { useGlobalContext } from "../../context/context";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

function CartItem({ id, name, price, image, amount }) {
  // const { remove, increase, decrease } = useGlobalContext();
  return (
    <Fragment>
      <article className="cart-item">
        <img src={image} alt={name} />
        <div>
          <h4>{name}</h4>
          <h4 className="item-price">${price}</h4>
          {/* <button onClick={() => remove(id)} className="remove-btn">
            remove
          </button> */}
        </div>
        <div>
          {/* <button onClick={() => increase(id)} className="amount-btn">
            <FaAngleUp className="up-down-btn" />
          </button> */}
          <p className="amount">{amount}</p>
          {/* <button onClick={() => decrease(id)} className="amount-btn">
            <FaAngleDown className="up-down-btn" />
          </button> */}
        </div>
      </article>
    </Fragment>
  );
}

export default CartItem;
