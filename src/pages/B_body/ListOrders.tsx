import {FC} from 'react';
import AccordionOrders from "../../components/DashbaordBody/AccordionOrders";

const ListOrders: FC<{}> = ({}) => {
    return (
        <>
            <h1>Liste des commandes</h1>
            <AccordionOrders/>
        </>
    );
};

export default ListOrders;
