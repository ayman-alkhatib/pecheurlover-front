import {FC} from 'react';
import {Box} from "@mui/material";

const Footer: FC<{}> = ({}) => {
    return (
        <Box sx={{height: '100px', bgcolor: "#87CEEB", display:"flex", justifyContent:'space-around', alignItems:'center', border: "1px solid black"}}>
            <h1>Footer</h1>
        </Box>
    );
};

export default Footer;
