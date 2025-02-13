import {FC} from 'react';
import AccordionOrders from "../../components/DashbaordBody/AccordionOrders";

const AdminListOrders: FC<{}> = ({}) => {
    return (
        <>
            <h1>Liste de toutes les commandes</h1>
            <AccordionOrders/>
        </>
    );
};

export default AdminListOrders;
