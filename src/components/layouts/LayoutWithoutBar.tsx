import {FC} from 'react';
import {Outlet} from "react-router-dom";
import Footer from "../../pages/C_footer/Footer";

const LayoutWithoutBar: FC<{}> = ({}) => {
    return (
        <div>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default LayoutWithoutBar;
