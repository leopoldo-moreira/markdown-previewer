import styles from "./Field.module.css"
import { FaMarker, FaExpandArrowsAlt, FaCompressAlt } from "react-icons/fa";

function Field({height, type, generateMarkdown, headerName, funcOnChange, defaultValue, funcOnClick, windowIcon}){

        
    return(
        <div className={`${styles.mainContainer} ${styles[type]}`}>
           <div className={styles.header}>            
                <FaMarker/>
                <span>{headerName}</span>
                
                 {windowIcon === "toExpand" ? <FaExpandArrowsAlt onClick={funcOnClick}/> :<FaCompressAlt onClick={funcOnClick}/> }
                
            </div>

                {type=== "editor" ?

                <textarea id="editor" style={{height: `${height}`}} value={defaultValue} onChange={funcOnChange}> </textarea> 
                
                :

                <div id="preview" className={styles.previewerContainer}>{generateMarkdown}</div> 

                }
            
        </div>
    )
}

export default Field