import React from "react";
import './styles.css';

export default function ItemListContainer({greeting}) {

    return(
        <div className="itemList">
            <h1>{greeting}</h1>
        </div>
    )

}