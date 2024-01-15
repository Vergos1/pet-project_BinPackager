import styles from "./homePage.module.scss"
import {useSelector} from "react-redux";
import Bins from "../../containers/Bins/Bins.tsx";
//doc: import types
import {RootState} from '../../store/store.ts';

const HomePage = () => {
    const binsBlock = useSelector((state: RootState) => state.bins);

    return (
     <div className={styles.homePage}>
         <div className="container">
             <div className={styles.homePageWrapper}>
                 <Bins blocks={binsBlock} sheetWidth={500} sheetHeight={500}/>
             </div>
         </div>
     </div>
    );
};

export default HomePage;
