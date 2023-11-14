import React from 'react';
import Item from '../Item/Item';
import "./ItemContainer.css";

export default function ItemContainer() {
  const productArray = [
    { title: "Silla de oficina", description: "Silla Oficina Sillon Ejecutivo Respaldo Alto Comodo Reforzado", price: "$53.742",sku:"https://tar.mx/apps/barras/barras.png", stock: "60",thumbnail:"https://http2.mlstatic.com/D_NQ_NP_960091-MLA44351978296_122020-O.webp" },
    { title: "Silla de playa", description: "Silla plegable de playa o camping", price: "$21.989", sku:"https://tar.mx/apps/barras/barras.png", stock: "40",thumbnail:"https://www.spinit.com.ar/cdn/shop/products/SPINIT_FOTO-PRODUCTO_52302-SILLON-SPINIT-1-POS-CINTA-POL-A-BRAZO-GRIS-AZUL-FRENTE-BAJA_d6eceed6-9130-4362-a3b2-cef542fad3d7_720x.jpg?v=1676667228" },
    { title: "Silla para auto", description: "Sillita Para Auto Butaca Para Niños Bebes 0-25kg Reclinable", price: "$114.350", sku:"https://tar.mx/apps/barras/barras.png", stock: "40",thumbnail:"https://http2.mlstatic.com/D_NQ_NP_826112-MLA71313653486_082023-O.webp" }
  ];

  return (
    
    <div className="div">
      <h1>Catalogo de sillas</h1>
      <div className="division">
      {productArray.map((product) => (
      <div className="division1">
        <Item key={product.title} title={product.title} description={product.description} price={product.price} sku={product.sku} stock={product.stock} imagen={product.thumbnail} />
        </div>
))}
    </div>
    </div>
  );
}