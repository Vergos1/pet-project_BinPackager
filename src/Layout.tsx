import {Outlet} from "react-router-dom";
import Header from "./components/Header/Header.tsx";

const Layout = () => {
    return (
     <>
         <Header/>
         <main>
             <Outlet/>
         </main>
     </>
    )
}
export default Layout;