import {useLocation, useNavigate} from "react-router-dom";
import {Box, Button, Typography} from "@mui/material";
import React, {useState, useContext} from "react";
import {ShoppingCartContext} from "../../components/DashbaordBody/shoppingCart/ShoppingCartContext";

const RecapDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const produits = location.state?.produits || [];
    // @ts-ignore
    const {clearShoppingCart} = useContext(ShoppingCartContext);

    // Ajouter un état pour l'email
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false); // Défini comme un booléen

    // Gérer la modification de l'email
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setEmail(value);

        // Vérification simple de l'email
        // Si l'email est vide ou invalide, alors emailError = true
        const isValidEmail = value && /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+/.test(value);
        setEmailError(!isValidEmail); 
    };

    const handleContinueShopping = () => {
        navigate("/dashboard");
    };

    const handlePay = () => {
        clearShoppingCart();
        navigate("/dashboard");
    };

    return (
        <>
            <Typography variant="h4" sx={{textAlign: "center", margin: "20px"}}>
                Récapitulatif de votre commande
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    border: "1px solid black",
                    borderRadius: "20px",
                    width: "50%",
                    margin: "auto",
                    flexDirection: "column",
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                    background: "#86c0d8",
                }}
            >
                {produits.length === 0 ? (
                    <Typography>Aucun produit dans votre panier.</Typography>
                ) : (
                    <ul style={{listStyleType: "none", padding: 0}}>
                        {produits.map((produit: any) => (
                            <li
                                key={produit.id_product}
                                className="cart-item"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    margin: "10px",
                                }}
                            >
                                <img
                                    className="cart-img"
                                    src={produit.imageUrl}
                                    alt={produit.name}
                                    style={{width: 50, height: 50, borderRadius: "8px"}}
                                />
                                <Typography
                                    variant="body1"
                                    sx={{
                                        flex: 1,
                                        textAlign: "left",
                                        marginLeft: "10px",
                                    }}
                                >
                                    {produit.quantity} x {produit.name} - {produit.price}€/pu
                                    = <strong>{produit.totalPrice}€</strong>
                                </Typography>
                            </li>
                        ))}
                    </ul>
                )}
                <Typography variant="h5" sx={{textAlign: "right", m: 2}}>
                    Total :{" "}
                    <strong>
                        {produits.reduce(
                            (total: any, produit: any) => total + produit.totalPrice,
                            0
                        )}
                        €
                    </strong>
                </Typography>
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "row",
                        alignItems: "center",
                        margin: "10px",
                    }}
                >
                    <Typography variant="h6" sx={{marginRight: "5px"}}>
                        Saisir votre adresse email :
                    </Typography>
                    <input
                        type="email"
                        placeholder="Entre ton email"
                        required
                        value={email}
                        onChange={handleEmailChange}
                        style={{borderColor: emailError ? "red" : "#ccc"}}
                    />
                </Box>
                {emailError && (
                    <Typography sx={{color: "red", textAlign: "center"}}>
                        L'email est invalide
                    </Typography>
                )}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "row",
                        gap: 2,
                        margin: 2,
                    }}
                >
                    <Button
                        onClick={handleContinueShopping}
                        sx={{
                            backgroundColor: "#66b3ff",
                            color: "#fff",
                            borderRadius: "10px",
                            padding: "10px 20px",
                            textTransform: "none",
                            "&:hover": {
                                backgroundColor: "#4da6e6",
                            },
                        }}
                    >
                        Continuer mes achats
                    </Button>
                    <Button
                        onClick={handlePay}
                        disabled={emailError || !email}
                        sx={{
                            backgroundColor: "#3399ff",
                            color: "#fff",
                            borderRadius: "10px",
                            padding: "10px 20px",
                            textTransform: "none",
                            "&:hover": {
                                backgroundColor: "#2672cc",
                            },
                        }}
                    >
                        Payer
                    </Button>
                </Box>
            </Box>
        </>
    );
};

export default RecapDetails;
