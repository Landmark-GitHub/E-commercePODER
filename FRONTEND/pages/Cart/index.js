import React, { useState } from "react";

const Cart = () => {
    const [menu, setMenu] = useState(false);
    const [filter, setFilter] = useState(false);
    const [modal, setModal] = useState(false);
  
    function openMenu() {
      setMenu(!menu);
    }
  
    function openFilter() {
      setFilter(!filter)
    }
  
    function openModal(name ,pirce) {
      var data = {
        name: name,
        pirce: pirce,
      }
      console.table(data);
    }
  
    const stylesHomePage = {
      areaFilter: {
        height: "40px",
        backgroundColor: "#FFFFFF",
        display: "flex",
        justifyContent: "end",
        color: "black",
        padding: "10px",
        marginTop: "80px",
      }
    }
  
    return (
      <div>
        Cart
      </div>
    );
  };
  
  export default Cart;
  