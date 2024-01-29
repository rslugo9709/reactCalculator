import React from "react";
import style from "./screen.module.css";





function Screen(props){

    return(
        <div className={style.pantalla}>
            {props.input}
        </div>
    )

}



export default Screen;