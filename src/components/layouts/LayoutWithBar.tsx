import {FC} from 'react';
import {Outlet} from "react-router-dom";
import Header from "../../pages/A_header/Header";
import Footer from "../../pages/C_footer/Footer";

const LayoutWithBar: FC<{}> = ({}) => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default LayoutWithBar;
