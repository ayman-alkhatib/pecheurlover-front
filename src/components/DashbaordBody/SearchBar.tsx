import {FC} from 'react';
import {Box} from "@mui/material";

const SearchBar: FC<{}> = ({}) => {
    return (
        <Box sx={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
            <input type="text" placeholder="Rechercher un produit"/>
            <button>Rechercher</button>
        </Box>
    );
};

export default SearchBar;
