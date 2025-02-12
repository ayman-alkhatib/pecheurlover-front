import {createContext, useState, ReactNode} from "react";
import {ProductItem} from "../../../@types/ProductItem";

interface CartItem extends ProductItem {
    quantity: number;
    totalPrice: number;
}

interface ShoppingCartContextType {
    shoppingCart: CartItem[];
    addShoppingCart: (product: ProductItem) => void;
    removeShoppingCart: (productId: number) => void;
    updateQuantity: (productId: number, action: "increase" | "decrease") => void;
    clearShoppingCart: () => void;
}


export const ShoppingCartContext = createContext<ShoppingCartContextType | undefined>(undefined);

export const ShoppingCartProvider = ({children}: { children: ReactNode }) => {
    const [shoppingCart, setShoppingCart] = useState<CartItem[]>([]);

    // Ajoute un produit au panier
    const addShoppingCart = (product: ProductItem) => {
        setShoppingCart((prevCart) => {
            const productExist = prevCart.find((item) => item.id_product === product.id_product);

            if (productExist) {
                return prevCart.map((item) =>
                    item.id_product === product.id_product
                        ? {...item, quantity: item.quantity + 1, totalPrice: (item.quantity + 1) * item.price}
                        : item
                );
            } else {
                return [...prevCart, {...product, quantity: 1, totalPrice: product.price}];
            }
        });
    };

    // Supprime un produit du panier
    const removeShoppingCart = (productId: number) => {
        setShoppingCart((prevCart) =>
            prevCart.filter((item) => item.id_product !== productId)
        );
    };

    // Met à jour la quantité d'un produit dans le panier
    const updateQuantity = (productId: number, action: "increase" | "decrease") => {
        setShoppingCart((prevCart) =>
            prevCart.map((item) =>
                item.id_product === productId
                    ? {
                        ...item,
                        quantity: action === "increase" ? item.quantity + 1 : Math.max(1, item.quantity - 1),
                        totalPrice:
                            action === "increase"
                                ? (item.quantity + 1) * item.price
                                : Math.max(1, item.quantity - 1) * item.price
                    }
                    : item
            )
        );
    };

    const clearShoppingCart = () => {
        setShoppingCart([]);
    };


    return (
        <ShoppingCartContext.Provider value={{shoppingCart, addShoppingCart, removeShoppingCart, updateQuantity,
            clearShoppingCart}}>
        {children}
        </ShoppingCartContext.Provider>
    );
};
