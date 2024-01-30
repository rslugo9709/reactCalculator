import React from "react";
import style from "./result.module.css";




function Result(props){

    return(
        <div className={style.result} onClick={() => props.calcular(props.valor)}>
            {props.valor}
        </div>
    )
}


export default Result;