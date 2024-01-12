import styles from "./binsSidebar.module.scss";
import {useEffect, useRef, useState} from "react";
import {useDispatch} from "react-redux";


const BinsSidebar = ({packedSheets, blocks, sheetWidth, sheetHeight}) => {
    const dispatch = useDispatch()
    const [inputValues, setInputValues] = useState({})
    console.log(inputValues);

    useEffect(() => {

    }, [inputValues]);


    //doc: обмеження по ширині і висоті, кількості блоків доданих за один раз
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setInputValues(prevState => ({
            ...prevState,
            [name]: Math.min(Number(value), name === "quantity" ? 100 : sheetWidth)
        }));
    };

    return (
     <div className={styles.binsSidebar}>

         <div className={styles.binsControllers}>
             <div className={styles.binsInputWrapper}>
                 <label htmlFor="width">Ширина</label>
                 <input
                  className={styles.binsInput}
                  name="width"
                  id="width"
                  value={inputValues.width}
                  onChange={handleInputChange}
                  type="number"
                  placeholder="Ширина"
                 />
             </div>
             <div className={styles.binsInputWrapper}>
                 <label htmlFor="height">Висота</label>
                 <input
                  className={styles.binsInput}
                  name="height"
                  id="height"
                  value={inputValues.height}
                  onChange={handleInputChange}
                  type="number"
                  placeholder="Висота"
                 />
             </div>

             <div className={styles.binsInputWrapper}>
                 <label htmlFor="quantity">Кількість</label>
                 <input
                  className={styles.binsInput}
                  name="quantity"
                  id="quantity"
                  min="1"
                  value={inputValues.quantity}
                  onChange={handleInputChange}
                  type="number"
                  placeholder="Кількість"
                 />
             </div>

             <button className={styles.binsCreateButton}>Створити</button>
         </div>

         <div className={styles.binsInformation}>
             <h3 className={styles.binsInformationTitle}>Загальна інформація</h3>
             <p className={styles.binsText}>
                 Розмір одного аркушу в пікселях: {" "}
                 <span className={styles.binsSelectedElements}>
                 {sheetWidth}x{sheetHeight}
             </span>
                 (px)
             </p>

             <p className={styles.binsText}>
                 Використано: {" "}
                 <span className={styles.binsSelectedElements}>
                 {packedSheets.length}
                 </span>
                 {" "}
                 лист{packedSheets.length > 1 ? "и" : ""}
             </p>

             <p className={styles.binsText}>
                 Загальна кількість блоків:{" "}
                 <span className={styles.binsSelectedElements}>
                 {blocks.length}
             </span>
             </p>
         </div>
     </div>
    );
};

export default BinsSidebar;