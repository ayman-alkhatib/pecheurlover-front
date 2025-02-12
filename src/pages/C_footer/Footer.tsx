import {FC} from 'react';
import {Box} from "@mui/material";

const Footer: FC<{}> = ({}) => {
    return (
        <Box
            sx={{
                position: window.location.pathname === "/" ? "fixed" : "relative",
                bottom: window.location.pathname === "/" ? 0 : "auto",
                left: 0,
                right: 0,
                height: "100px",
                marginTop:"20px",
                bgcolor: "#06BEF0",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                border: "1px solid black",
            }}
        >
            <h1>Footer</h1>
        </Box>

    );
};

export default Footer;
