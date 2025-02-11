import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Box} from "@mui/material";

export default function ControlledAccordions() {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <Box sx={{width: '80%', display:"flex", justifyContent:"center", flexDirection:"column", margin:"auto"}}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography component="span" sx={{width: '25%'}}>
                        Date
                    </Typography>
                    <Typography component="span" sx={{width: '25%', color: 'text.secondary'}}>
                        N° Commande
                    </Typography>
                    <Typography component="span" sx={{width: '25%', color: 'text.secondary'}}>
                        email
                    </Typography>
                    <Typography component="span" sx={{width: '25%', color: 'text.secondary'}}>
                        Total €
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                        <img src={"/images/produit.jpg"} alt="produit"/>
                        <Typography>
                            Nom du produit
                        </Typography>
                        <Typography>
                            xQuantité
                        </Typography>
                        <Typography>
                            Prix €
                        </Typography>
                    </Box>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography component="span" sx={{width: '25%'}}>
                        Date
                    </Typography>
                    <Typography component="span" sx={{width: '25%', color: 'text.secondary'}}>
                        N° Commande
                    </Typography>
                    <Typography component="span" sx={{width: '25%', color: 'text.secondary'}}>
                        email
                    </Typography>
                    <Typography component="span" sx={{width: '25%', color: 'text.secondary'}}>
                        Total €
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                        <img src={"/images/produit.jpg"} alt="produit"/>
                        <Typography>
                            Nom du produit
                        </Typography>
                        <Typography>
                            xQuantité
                        </Typography>
                        <Typography>
                            Prix €
                        </Typography>
                    </Box>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography component="span" sx={{width: '25%'}}>
                        Date
                    </Typography>
                    <Typography component="span" sx={{width: '25%', color: 'text.secondary'}}>
                        N° Commande
                    </Typography>
                    <Typography component="span" sx={{width: '25%', color: 'text.secondary'}}>
                        email
                    </Typography>
                    <Typography component="span" sx={{width: '25%', color: 'text.secondary'}}>
                        Total €
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                        <img src={"/images/produit.jpg"} alt="produit"/>
                        <Typography>
                            Nom du produit
                        </Typography>
                        <Typography>
                            xQuantité
                        </Typography>
                        <Typography>
                            Prix €
                        </Typography>
                    </Box>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography component="span" sx={{width: '25%'}}>
                        Date
                    </Typography>
                    <Typography component="span" sx={{width: '25%', color: 'text.secondary'}}>
                        N° Commande
                    </Typography>
                    <Typography component="span" sx={{width: '25%', color: 'text.secondary'}}>
                        email
                    </Typography>
                    <Typography component="span" sx={{width: '25%', color: 'text.secondary'}}>
                        Total €
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                        <img src={"/images/produit.jpg"} alt="produit"/>
                        <Typography>
                            Nom du produit
                        </Typography>
                        <Typography>
                            xQuantité
                        </Typography>
                        <Typography>
                            Prix €
                        </Typography>
                    </Box>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
}
