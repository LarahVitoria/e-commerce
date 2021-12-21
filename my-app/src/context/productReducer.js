// const reducer = (state, action) => {
//   if (action.type === "CLEAR_CART") {
//     return { ...state, cart: [] };
//   }
//   if (action.type === "REMOVE") {
//     return {
//       ...state,
//       cart: state.cart.filter((cartItem) => cartItem.id !== action.payload)
//     };
//   }
//   if (action.type === "INCREASE") {
//     let tempCart = state.cart.map((item) => {
//       if (item.id === action.payload) {
//         return { ...item, item: item + 1 };
//       }
//       return item;
//     });
//     return { ...state, cart: tempCart };
//   }
//   if (action.type === "DECREASE") {
//     let tempCart = state.cart
//       .map((item) => {
//         if (item.id === action.payload) {
//           return { ...item, item: item - 1};
//         }
//         return item;
//       })
//       .filter((item) => item !== 0);
//     return { ...state, cart: tempCart };
//   }
//   // if (action.type === "GET_TOTALS") {
//   //   const { total } = state.cart.reduce(
//   //     (cartTotal, item) => {
//   //       const { price } = item;
//   //       const itemTotal = price * item;
//   //       cartTotal.total += itemTotal;
//   //       cartTotal.item += item;
//   //       return cartTotal;
//   //     },
//   //     {
//   //       total: 0,
//   //     }
//   //   );
//   //   return { ...state, total };
//   // }
//   if (action.type === "LOADING") {
//     return { ...state, loading: true };
//   }
//   if (action.type === "DISPLAY_ITEMS") {
//     return { ...state, cart: action.payload, loading: false };
//   }

//   // throw new Error("no matching action type");
// };

// export default reducer;
