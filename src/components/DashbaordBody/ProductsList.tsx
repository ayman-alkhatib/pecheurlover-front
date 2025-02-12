import {FC} from 'react';
import SearchBar from "./SearchBar";
import {Box} from "@mui/material";
import Cards from "../Cards";

const ProductList: FC<{}> = ({}) => {
    return (
        <Box>
            <h1>Nos produits</h1>
            <SearchBar/>
            <Cards products={[]}/>
        </Box>
    );
};

export default ProductList;
