import {FC} from 'react';
import SearchBar from "./SearchBar";
import {Box} from "@mui/material";

const ProductList: FC<{}> = ({}) => {
    return (
        //Dans cette div, il faudrait mettre le .map avec tous les articles (après le SearchBar)
        <Box>
            <h1>Nos produits</h1>
            <SearchBar/>
        </Box>
    );
};

export default ProductList;
