import { createContext, useState, useContext } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({children}) => {

	const [cart, setCart] = useState([]);
	const cantidadProductos = cart.length;


	const addItem = (item, cantidad) => {
		const newItem = { item, cantidad };
		console.log("Se agregó al carrito: ", newItem)
		setCart((prevState) => [...prevState, newItem]);
	};

	const removeItem = (id) => {
		setCart((prev) => prev.filter((element) => element.item.id !== id));
	};

	const clearAll = () => {
		setCart([]);
	};


	return (
		<CartContext.Provider value={{ cart, addItem, removeItem, clearAll, cantidadProductos }}>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => useContext(CartContext);

