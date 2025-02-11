import {FC} from 'react';
import {Box} from "@mui/material";

const ProductSelection: FC<{}> = ({}) => {
    return (
        <>
            <Box sx={{width: "80%", display:"flex", flexDirection:"row", justifyContent:"center"}}>
                <img src="/images/produit.jpg" alt="produit"/>
                <p>Lorem ipsum nfeubveb</p>
            </Box>
            <hr/>
        </>
    );
};

export default ProductSelection;
