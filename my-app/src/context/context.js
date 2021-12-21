// import React, { useContext, useReducer, useEffect } from "react";
// import reducer from "./productReducer";
// import axios from "axios";

// const url = "https://wine-back-test.herokuapp.com/products";

// export const AppContext = React.createContext();
// const initialState = {
//   loading: false,
//   cart: [
//     {
//       id: 0,
//       image: "",
//       name: "",
//       price: 0,
//       discount: 0,
//       priceMember: 0,
//       priceNonMember: 0,
//       type: "",
//       classification: "",
//       size: "",
//       rating: 0,
//       avaliations: 0,
//       country: "",
//       region: "",
//       flag: "",
//       sommelierComment: "",
//     },
//   ],
//   total: 0,
//   amount: 0,
// };

// const AppProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const clearCart = () => {
//     dispatch({ type: "CLEAR_CART" });
//   };

//   const remove = (id) => {
//     dispatch({ type: "REMOVE", payload: id });
//   };

//   const increase = (id) => {
//     dispatch({ type: "INCREASE", payload: id });
//   };

//   const decrease = (id) => {
//     dispatch({ type: "DECREASE", payload: id });
//   };

//   // Refactor Increase and decrease function using toggle function

//   useEffect(() => {
//     const fetchData = async () => {
//       dispatch({ type: "LOADING" });
//       const response = await fetch(url);
//       const cart = axios
//       .get(`https://wine-back-test.herokuapp.com/products`)
      
//       dispatch({ type: "DISPLAY_ITEMS", payload: cart });
//     };
//     fetchData();
//   }, []);

//   useEffect(() => {
//     dispatch({ type: "GET_TOTALS" });
//   }, [state.cart]);

//   return (
//     <AppContext.Provider
//       value={{
//         ...state,
//         clearCart,
//         remove,
//         increase,
//         decrease,
//       }}
//     >
//       {children}
//     </AppContext.Provider>
//   );
// };

// // make sure use
// export const useGlobalContext = () => {
//   return useContext(AppContext);
// };

// export { AppProvider };
