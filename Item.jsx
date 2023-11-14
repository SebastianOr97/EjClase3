import React from "react";
import "./Item.css";
export default function Item({ title, description, price, sku, stock, imagen }) {
    return (
        <div className="card espacio customCard" style={{ width: "10rem" }}>
            <img className="card-img-top"src={imagen}height="100" width="100"alt="Card image cap"
            />
            <div className="recuadro">
                <div className="card-body">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-text">
                        Descripcion:
                        {description}
                    </p>
                    <p>Precio: {price}</p>
                    <img className="card-img-top"src={sku}height="30" width="75"alt="Card image cap"/>
                    <p>Stock: {stock}</p>
                    <a href="#" className="btn btn-primary">
                        Comprar
                    </a>
                </div>
            </div>
        </div>
    );
}
