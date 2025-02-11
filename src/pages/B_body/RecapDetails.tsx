import {FC} from 'react';
import {Box, Button} from "@mui/material";

const RecapDetails: FC<{}> = ({}) => {
    return (
        <>
            <h1>Récapitulatif de votre commande</h1>
            <Box sx={{display:"flex", justifyContent:"center", border: "1px solid black", width:"50%", margin:"auto", flexDirection:"column"}}>
                <Box sx={{display: "flex", flexDirection: "row", justifyContent: "flex-start"}}>
                    <img src={"/images/produit.jpg"} alt="produit"/>
                    <p>nom du poisson</p>
                    <p>xQuantité</p>
                    <p>prix €</p>
                </Box>
                <hr/>
                <Box sx={{display:"flex", justifyContent:"center", alignItems:"flex-end"}}>
                    <p>Total : </p>
                    <p> prix €</p>
                </Box>
                <Box>
                    <h3>Saisir votre adresse email :</h3>
                    <input/>
                </Box>
                <Box sx={{display:"flex", justifyContent:"center", flexDirection:"row"}}>
                    <Button>Continuer mes achats</Button>
                    <Button>Payer</Button>
                </Box>
            </Box>

        </>
    );
};

export default RecapDetails;
