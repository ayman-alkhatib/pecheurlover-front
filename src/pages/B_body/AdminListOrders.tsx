import {FC} from 'react';
import AccordionOrders from "../../components/adminBody/AccordionOrders";

const AdminListOrders: FC<{}> = ({}) => {
    return (
        <>
            <h1>Liste de toutes les Factures</h1>
            <AccordionOrders/>
        </>
    );
};

export default AdminListOrders;