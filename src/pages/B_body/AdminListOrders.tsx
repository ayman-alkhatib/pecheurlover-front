import {FC, useEffect, useState} from "react";
import {Box, Typography} from "@mui/material";
import {getData} from "../../api/apiSpringBoot";
import AdminSearchBar from "../../components/adminBody/AdminSearchBar";
import AccordionOrders from "../../components/adminBody/AccordionOrders";


const AdminListOrders: FC = () => {
    const [orders, setOrders] = useState<any[]>([]); // Toutes les commandes
    const [filteredOrders, setFilteredOrders] = useState<any[]>([]); // Commandes filtrées
    const [searchEmail, setSearchEmail] = useState<string>(""); // ✅ Vérifie bien que c'est déclaré

    // Charger toutes les commandes au début
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await getData("/orders/all");
                if (Array.isArray(response)) {
                    setOrders(response);
                    setFilteredOrders(response);
                } else {
                    console.error("Données inattendues:", response);
                }
            } catch (error) {
                console.error("Erreur lors de la récupération des commandes :", error);
            }
        };
        fetchOrders();
    }, []);

    // Fonction de recherche automatique des mails
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (searchEmail.trim() === "") {
                setFilteredOrders(orders); // ✅ Si champ vide, afficher tout
                return;
            }
            const filtered = orders.filter((order) =>
                order.email.toLowerCase().includes(searchEmail.toLowerCase())
            );

            console.log("🎯 Commandes filtrées :", filtered);
            setFilteredOrders(filtered);
        }, 300);

        return () => clearTimeout(timeoutId);
    }, [searchEmail, orders]);

    return (
        <Box sx={{width: "80%", margin: "auto", textAlign: "center"}}>
            <Typography variant="h4" sx={{my: 2}}>📜 Liste des commandes</Typography>

            <AdminSearchBar
                searchEmail={searchEmail}
                setSearchEmail={setSearchEmail}
            />

            {filteredOrders.length > 0 ? (
                filteredOrders.map((orders) => <AccordionOrders key={orders.id_invoice} orders={orders}/>)
            ) : (
                <Typography sx={{mt: 2}}>Aucune commande trouvée.</Typography>
            )}
        </Box>
    );
};

export default AdminListOrders;
