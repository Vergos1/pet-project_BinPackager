import styles from "./sheets.module.scss";
import React from "react";
//doc: import types
import {SheetsProps} from "./sheets.types.ts";

const Sheets: React.FC<SheetsProps> = ({packedSheets}) => {
    return (
     packedSheets.map((sheetBlocks, sheetIndex) => (
      <div
       key={sheetIndex}
       className={styles.binsSheetWrapper}
       style={{position: 'relative'}}
      >
          <span className={styles.binsSheetCount}>#{sheetIndex + 1}</span>
          <div
           className={styles.binsSheet}
          >
              <div style={{
                  position: 'relative'
              }}>
                  {sheetBlocks.map((block, blockIndex) => (
                   <div
                    key={blockIndex}
                    className={styles.binsBlock}
                    style={{
                        width: `${block.w}px`,
                        height: `${block.h}px`,
                        position: 'absolute',
                        top: `${block.y}px`,
                        left: `${block.x}px`,
                        display: 'flex',
                        backgroundColor: ' #1d1c28',
                        border: '1px solid #646464',
                        boxSizing: 'border-box'
                    }}/>
                  ))}
              </div>
          </div>
      </div>
     ))
    );
};
export default Sheets;
