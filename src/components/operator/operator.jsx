import React from "react";
import style from "./operator.module.css";


function Operator(props){

    return(
        <div className={style.operator} onClick={() => props.agregar(props.valor)}>
            {props.valor}
        </div>
    )
}


export default Operator;