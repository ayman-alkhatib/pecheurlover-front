import {FC} from 'react';
import {Box, Button} from "@mui/material";

const ListProductInOrder: FC<{}> = ({}) => {
    return (
        <>
            <h3>Mon panier :</h3>
            <Box sx={{display:"flex", justifyContent:"center", flexDirection:"row"}}>
                <img src="/images/produit.jpg" alt="produit"/>
                <p> blablabla </p>
                <p> xQuantité </p>
                <p> Prix € </p>
            </Box>
            <hr/>
            <Box sx={{display:"flex", justifyContent:"center", alignItems:"flex-end", flexDirection:"row"}}>
                <p>Total : </p>
                <p>Prix €</p>
            </Box>
            <Button>Payer</Button>
        </>
    );
};

export default ListProductInOrder;
