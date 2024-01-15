import styles from './bins.module.scss';
import React, {useState, useEffect} from 'react';
import binPack from "../../controllers/BinsPacker/binsPacker.ts";
import BinsSidebar from "../binsSidebar/binsSidebar.tsx";
import Sheets from "../../components/Sheets/Sheets.tsx";
//doc: import types
import {BinsProps, Block, PackedSheet} from "./bins.types.ts";


const Bins: React.FC<BinsProps> = ({blocks, sheetWidth, sheetHeight}) => {
    //doc: Стан для зберігання упакованих листів.
    const [packedSheets, setPackedSheets] = useState<PackedSheet[]>([]);

    useEffect(() => {
        //doc: Автоматичне викликання функції упаковки при зміні блоків.
        packBlocks(blocks);
    }, [blocks]);

    //doc: Функція для упаковки блоків на листи.
    const packBlocks = (blocks: Block[]) => {
        let remainingBlocks = [...blocks];
        let sheets = [];
        let currentSheetBlocks: Block[] = [];

        while (remainingBlocks.length > 0) {
            let blockToAdd: any = {...remainingBlocks.shift()};
            currentSheetBlocks.push(blockToAdd);

            let packed = binPack(currentSheetBlocks, sheetWidth, sheetHeight);

            //doc: Перевірка та обробка випадків,
            // коли блоки не можуть бути упаковані на одному листі.
            if (packed.length === currentSheetBlocks.length) {
                currentSheetBlocks = [...packed];
            } else {
                //doc: Якщо останній блок не поміщається,
                // він переміщається на новий лист.
                if (currentSheetBlocks.length > 1) {
                    sheets.push([...currentSheetBlocks.slice(0, -1)]);
                    currentSheetBlocks = [currentSheetBlocks[currentSheetBlocks.length - 1]];
                } else {
                    sheets.push([...currentSheetBlocks]);
                    currentSheetBlocks = [];
                }
            }
        }

        if (currentSheetBlocks.length > 0) {
            sheets.push([...currentSheetBlocks]);
        }

        setPackedSheets(sheets);
    };

    console.log(packedSheets);

    return (

     <div className={styles.binsView}>
         <BinsSidebar packedSheets={packedSheets}/>
         <div className={styles.binsWrapper}>
             {/*//doc: Відображення кожного листа з упакованими блоками.*/}
             <Sheets packedSheets={packedSheets}/>
         </div>
     </div>
    );
};

export default Bins;