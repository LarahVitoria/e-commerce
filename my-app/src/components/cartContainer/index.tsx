import React, { Fragment } from "react";
// import { useGlobalContext } from "../../context/context";
// import CartItem from "../cartItem";

const CartContainer = () => {
  // const { cart, total, clearCart } = useGlobalContext();

  // if (cart.length === 0) {
  //   return (
  //     <section className="cart">
  //       <header>
  //         <h2>your bag</h2>
  //         <h4 className="empty-cart">your cart is empty</h4>
  //       </header>
  //     </section>
  //   );
  // }

  return (
    <Fragment>
      {/* <section className="cart">
        <header>
          <h2>your bag</h2>
        </header>
        <div>
          {cart.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
        </div>
        <footer>
          <hr />
          <div className="cart-total">
            <h4>
              total <span>${total}</span>
            </h4>
          </div>
        </footer>
        <button onClick={clearCart} className="btn clear-btn">
          clear cart
        </button>
      </section> */}
    </Fragment>
  );
};

export default CartContainer;
