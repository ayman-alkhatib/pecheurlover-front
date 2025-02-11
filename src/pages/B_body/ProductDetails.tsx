import { Box } from '@mui/material';
import {FC} from 'react';

const ProductDetails: FC<{}> = ({}) => {
    return (
        <>
            <h1>Nom du produit</h1>
            <Box sx={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                <img src="/images/produit.jpg" alt="produit"/>
                <Box>
                    <ul>
                        <li>Provenance : </li>
                        <li>Appât :</li>
                        <li>Prix : </li>
                        <li>Quantité en stock : </li>
                    </ul>
                </Box>
            </Box>
            <p>Lorem Ipsum beucencuefbe beucnebeu ence ubinde enbidend</p>
            <Box>
            <h3>Côté cuisine : </h3>
                <ul>
                    <li>Conseil cuisson : </li>
                    <li>Conseil accompagnement : </li>
                </ul>
            </Box>
        </>
    );
};

export default ProductDetails;
