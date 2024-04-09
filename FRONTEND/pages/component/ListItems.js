import React, { useState, useEffect } from "react";

export default function ListItem(props) {
    const { data, openModaled } = props;
    const [products, setProducts] = useState([]);
  
    const getSeverity = (product) => {
      switch (product.inventoryStatus) {
        case "INSTOCK":
          return "success";
  
        case "LOWSTOCK":
          return "warning";
  
        case "OUTOFSTOCK":
          return "danger";
  
        default:
          return null;
      }
    };

    useEffect(() => {
      setProducts(data)
    },[data]);
  
    return (
      <div className=" bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6  gap-4 p-2 pb-4">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 p-2 rounded-lg shadow-md cursor-pointer"
              onClick={() => 
                openModaled(item.title, item.price)
              }
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-40 object-cover mb-4 rounded-lg"
              />
              <div className="flex justify-between p-1">
                <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                <p className="bg-green-400 p-2 rounded-lg">Stork</p>
              </div>
              <p className="text-gray-700 mb-2">{item.price}</p>
              <button className="bg-red-300 hover:bg-red-400 text-white font-bold py-2 px-4 rounded-md">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
