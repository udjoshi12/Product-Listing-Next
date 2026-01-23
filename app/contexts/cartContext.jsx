"use client";

import { createContext, useContext, useEffect, useReducer } from "react";

const CartContext = createContext(null);

function cartReducer(state, action) {
  switch (action.type) {
    case "INIT_CART":
      return { items: action.payload };

    case "ADD_TO_CART": {
      const existing = state.items.find(
        (item) => item.id === action.payload.id,
      );

      if (existing) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === existing.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      }

      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };
    }

    case "REMOVE_FROM_CART":
  return {
    ...state,
    items: state.items
      .map((item) => {
        if (item.id === action.payload) {
          if (item.quantity > 1) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
          return null;
        }
        return item;
      })
      .filter(Boolean), 
  };


    case "CLEAR_CART":
      return { items: [] };

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      dispatch({
        type: "INIT_CART",
        payload: JSON.parse(storedCart),
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.items));
  }, [state.items]);

  const addToCart = (product) =>
    dispatch({ type: "ADD_TO_CART", payload: product });

  const removeFromCart = (id) =>
    dispatch({ type: "REMOVE_FROM_CART", payload: id });

  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
