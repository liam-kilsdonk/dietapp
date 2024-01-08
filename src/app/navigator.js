import React from "react";
import styles from "./page.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faFile, faPlus, faArrowRightArrowLeft, faUser } from "@fortawesome/free-solid-svg-icons";


function Navigator() {
    return (
       <div className={styles.Navigator}>
         <div className={styles.Navigator_wrap}>
            
              <FontAwesomeIcon icon={faHouse} />
             
              <FontAwesomeIcon icon={faFile} />

              <FontAwesomeIcon icon={faPlus} />

              <FontAwesomeIcon icon={faArrowRightArrowLeft} />

              <FontAwesomeIcon icon={faUser} />
         </div>
       </div>

       
    );
}

export default Navigator;