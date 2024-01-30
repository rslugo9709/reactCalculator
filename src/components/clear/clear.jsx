import React from "react";
import style from "./clear.module.css";




function Clear(props){

    return(
        <div className={style.clear} onClick={() => props.limpiar()}>
            {props.valor}
        </div>
    )
}


export default Clear;