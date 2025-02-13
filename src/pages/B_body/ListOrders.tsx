import {FC} from 'react';
import {Box} from "@mui/material";
import AccordionOrders from "../../components/DashbaordBody/AccordionOrders";

const ListOrders: FC<{}> = ({}) => {
    return (
        <Box sx={{textAlign:"center"}}>
            <h1>Mes précédentes commandes</h1>
            <AccordionOrders/>
        </Box>
    );
};

export default ListOrders;
