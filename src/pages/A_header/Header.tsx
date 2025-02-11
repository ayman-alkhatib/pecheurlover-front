import {FC} from 'react';
import {Box, Button} from "@mui/material";

const Header: FC<{}> = ({}) => {
    return (
        <Box sx={{width: '100%', height: '100px', bgcolor: "#87CEEB", display:"flex", justifyContent:"space-around", alignItems:"center", border: "1px solid black"}}>
            <img className="logoNavbar" alt="Logo" src="/logo.jpg"/>
            <Button>Mode Admin</Button>
        </Box>
    );
};

export default Header;
