import styles from "./controllers.module.scss";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {addBins, clearBins} from "../../store/slices/bins.slice.ts";


const Controllers = () => {
    const dispatch = useDispatch()
    const [inputValues, setInputValues] = useState({
        width: 10,
        height: 10,
        quantity: 1
    });

    //doc: обмеження по ширині і висоті, кількості блоків доданих за один раз
    const handleInputChange = (e: any) => {
        const {name, value} = e.target;
        setInputValues(prevState => ({
            ...prevState,
            [name]: Math.min(value, name === "quantity" ? 100 : 500)
        }));
    };

    const handleAddBins = () => {
        if (!inputValues.width || !inputValues.height || !inputValues.quantity) {
            return
        }
        dispatch(addBins(
         {
             width: inputValues.width,
             height: inputValues.height,
             quantity: inputValues.quantity
         }
        ))
    }
    const handleClearBins = () => {
        dispatch(clearBins())
    }
    return (
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

         <div className={styles.binsButtonsWrapper}>
             <button
              onClick={handleAddBins}
              className={styles.binsCreateButton}
             >
                 Створити
             </button>
             <button
              onClick={handleClearBins}
              className={styles.binsCreateButton}
             >
                 Очистити сторінки
             </button>
         </div>
     </div>
    );
};
export default Controllers;