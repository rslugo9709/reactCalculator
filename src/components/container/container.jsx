import React from "react";
import style from "./container.module.css";
import Screen from "../screen/screen";
import Number from "../number/number";
import Operator from "../operator/operator";
import Result from "../result/result";
import Clear from "../clear/clear";
import Delete from "../delete/delete";

function Container(props){

    return(
        <div className={style.container}>
            
            <Screen input= {props.input} />

            <div className={style.row}>
                <Clear valor="limpiar" limpiar={props.limpiar}/>
                <Delete valor="C" borrar={props.borrar}/>
            </div>
            <div className={style.row}>
                <Number valor="1" agregar={props.agregar}/>
                <Number valor="2" agregar={props.agregar}/>
                <Number valor="3" agregar={props.agregar}/>
                <Operator valor="+" agregar={props.agregar}/>
            </div>
            <div className={style.row}>
                <Number valor="4" agregar={props.agregar}/>
                <Number valor="5" agregar={props.agregar}/>
                <Number valor="6" agregar={props.agregar}/>
                <Operator valor="-" agregar={props.agregar}/>
            </div>
            <div className={style.row}>
                <Number valor="7" agregar={props.agregar}/>
                <Number valor="8" agregar={props.agregar}/>
                <Number valor="9" agregar={props.agregar}/>
                <Operator valor="/" agregar={props.agregar}/>
            </div>
            <div className={style.row}>
                <Number valor="." agregar={props.agregar}/>
                <Number valor="0" agregar={props.agregar}/>
                <Result valor="=" calcular={props.calcular}/>
                <Operator valor="*" agregar={props.agregar}/>

            </div>
                
        </div>
    )


}

export default Container;
