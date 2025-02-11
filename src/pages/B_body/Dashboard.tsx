import {FC} from 'react';
import {Box} from "@mui/material";
import ProductSelection from "../../components/ProductSelection";
import ListProductInOrder from "../../components/aside/ListProductInOrder";
import ProductsList from "../../components/DashbaordBody/ProductsList";
import Footer from "../C_footer/Footer";

const Dashboard: FC<{}> = ({}) => {
    return (
        <>
            <Box sx={{display: "flex", flexDirection: "row"}}>
                <Box sx={{width: "80%", backgroundColor: "blue"}}>
                    <h1>Notre produit phare</h1>
                    <ProductSelection/>
                    <ProductsList/>
                </Box>
                <Box sx={{width: "20%", backgroundColor: "red"}}>
                    <ListProductInOrder/>
                </Box>
            </Box>
        </>

    );
};

export default Dashboard;
