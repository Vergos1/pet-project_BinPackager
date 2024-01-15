import styles from "./binsSidebar.module.scss";
import React from "react";
import Controllers from "../../components/Controllers/Controllers.tsx";
//doc import types
import {BinsSidebarProps} from "./binsSidebar.types.ts";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store.ts";


const BinsSidebar: React.FC<BinsSidebarProps> = ({packedSheets}) => {
    const binsBlock = useSelector((state: RootState) => state.bins);

    return (
     <div className={styles.binsSidebar}>
         <div className={styles.binsInformation}>
             <h3 className={styles.binsInformationTitle}>Загальна інформація</h3>
             <p className={styles.binsText}>
                 Розмір одного аркушу в пікселях: {" "}
                 <span className={styles.binsSelectedElements}>
                 500x500
             </span>
                 (px)
             </p>
             <p className={styles.binsText}>
                 Використано: {" "}
                 <span className={styles.binsSelectedElements}>
                 {packedSheets.length}
                 </span>
                 {" "}
                 {packedSheets.length === 1 ? 'лист' :
                  packedSheets.length >= 2 && packedSheets.length <= 4 ? 'листи' :
                   'листів'}
             </p>
             <p className={styles.binsText}>
                 Загальна кількість блоків:{" "}
                 <span className={styles.binsSelectedElements}>
                 {binsBlock.length}
             </span>
             </p>
         </div>

         <Controllers/>
     </div>
    );
};

export default BinsSidebar;