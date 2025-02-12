import {FC} from 'react';
import {Box, Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

const Header: FC<{}> = ({}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/adminListOrders");
    }

    const handleDashboard = () => {
        navigate("/dashboard");
    }

    return (
        <Box sx={{marginBottom:"20px", height: '100px', bgcolor: "#06BEF0", display:"flex", justifyContent:"space-around", alignItems:"center", border: "1px solid black"}}>
            <img className="logoNavbar" alt="Logo" src="/logo.png" onClick={handleDashboard}/>
            <Button onClick={handleClick}>Mode Admin</Button>
        </Box>
    );
};

export default Header;
