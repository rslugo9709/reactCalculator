import React from "react";
import style from "./delete.module.css";




function Delete(props){

    return(
        <div className={style.delete} onClick={() => props.borrar()}>
            {props.valor}
        </div>
    )
}


export default Delete;