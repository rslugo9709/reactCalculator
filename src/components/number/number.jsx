import React from "react";
import style from "./number.module.css";




function Number(props){

    return(
        <div className={style.number} onClick= {() =>props.agregar(props.valor)}>
            {props.valor}
        </div>
    )

}



export default Number;