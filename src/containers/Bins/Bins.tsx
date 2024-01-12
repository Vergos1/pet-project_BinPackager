import styles from './bins.module.scss';
import React, {useState, useEffect} from 'react';
import binpack from "../../controllers/BinsPacker/binsPacker.ts";
import BinsSidebar from "../../components/binsSidebar/binsSidebar.tsx";

//doc: import types
import {BinsProps, PackedSheet} from "./bins.types.ts";


const Bins: React.FC<BinsProps> = ({blocks, sheetWidth, sheetHeight}) => {

    const [packedSheets, setPackedSheets] = useState<PackedSheet[]>([]);
    console.log(packedSheets);

    useEffect(() => {
        packBlocks();
    }, [blocks]);

    const packBlocks = () => {
        let remainingBlocks = [...blocks];
        let sheets = [];
        let currentSheetBlocks = [];

        while (remainingBlocks.length > 0) {
            let blockToAdd = remainingBlocks.shift();
            if (!blockToAdd) break;

            currentSheetBlocks.push(blockToAdd);
            let packed = binpack(currentSheetBlocks);

            if (packed.w <= sheetWidth && packed.h <= sheetHeight) {
                currentSheetBlocks = currentSheetBlocks.map(block => ({
                    ...block,
                    x: block.x,
                    y: block.y,
                    w: block.w,
                    h: block.h
                }));
            } else {
                remainingBlocks.unshift(blockToAdd);
                currentSheetBlocks.pop();

                if (currentSheetBlocks.length === 0) {
                    console.error('Блок занадто великий для будь-якого аркуша:', blockToAdd);
                    continue;
                }

                sheets.push(currentSheetBlocks);
                currentSheetBlocks = [];
            }
        }

        if (currentSheetBlocks.length > 0) {
            sheets.push(currentSheetBlocks);
        }

        setPackedSheets(sheets);
    };

    return (

     <div className={styles.binsView}>
         <BinsSidebar packedSheets={packedSheets} blocks={blocks} sheetWidth={sheetWidth} sheetHeight={sheetHeight}/>
         <div className={styles.binsWrapper}>
             {packedSheets.map((sheetBlocks, sheetIndex) => (
              <div
               key={sheetIndex}
               style={{position: 'relative'}}
              >
                  <span className={styles.binsSheetCount}>#{sheetIndex + 1}</span>
                  <div
                   className={styles.binsSheet}
                   style={{
                       width: `${sheetWidth}px`,
                       height: `${sheetHeight}px`,
                   }}
                  >
                      <div style={{
                          position: 'relative'
                      }}>
                          {sheetBlocks.map((block, blockIndex) => (
                           <div
                            key={blockIndex}
                            style={{
                                width: `${block.w}px`,
                                height: `${block.h}px`,
                                position: 'absolute',
                                top: `${block.y}px`,
                                left: `${block.x}px`,
                                backgroundColor: ' #1d1c28',
                                border: '1px solid #646464',
                                boxSizing: 'border-box'
                            }}/>
                          ))}
                      </div>
                  </div>
              </div>
             ))}
         </div>
     </div>
    );
};

export default Bins;