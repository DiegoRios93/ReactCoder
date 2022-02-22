import { createContext, useState, useContext, useEffect } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({children}) => {

	const [cart, setCart] = useState([]);

    const [cartQuantity, setCartQuantity] = useState(0);


   useEffect(() => {
	 		const cantidadTotalProductos = cart.reduce(
    		(total, { cantidad }) => total + Number(cantidad),
    		0
  			);
  		setCartQuantity(cantidadTotalProductos);
	}, [cart]);



	const addItem = (item, cantidad) => {
		const newItem = { item, cantidad };
		const itemEsta = cart.find((order) => order.item.id === item.id);

		if(itemEsta){
			const actualizarCarrito = cart.map((order) => {
				if(order.item.id === item.id){
					return {...order, cantidad: cantidad + order.cantidad};
				}else{
					return order;
				}
			});
			setCart(actualizarCarrito);
		}else{
			setCart((prevState) => [...prevState, newItem]);
		}
	};

	const removeItem = (id) => {
		setCart((prev) => prev.filter((element) => element.item.id !== id));
	};

	const clearAll = () => {
		setCart([]);
	};


	return (
		<CartContext.Provider value={{ cart, addItem, removeItem, clearAll, cartQuantity }}>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => useContext(CartContext);

