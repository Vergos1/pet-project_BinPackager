import './styles/style.scss';
import {lazy, Suspense} from "react";
import {Route, Routes} from 'react-router-dom';
import Layout from './Layout.tsx';
import Preloader from "./components/Preloader/Preloader.tsx";


const HomePage = lazy(() => import('./pages/HomePage/HomePage.tsx'));
function App() {

    return (
     <>
         <Suspense fallback={<Preloader/>}>
             <Routes>
                 <Route path='/' element={<Layout />}>
                     <Route index element={<HomePage />} />
                 </Route>
             </Routes>
         </Suspense>
     </>
    );
}

export default App;
