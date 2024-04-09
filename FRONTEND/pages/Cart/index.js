import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

var data = [
  {
    id: 1,
    name: "test",
    address: "Home",
    number: "123",
  },
  {
    id: 2,
    name: "test",
    address: "Home",
    number: "123",
  },
];

const data2 = [
  {
    id: 1,
    name: "test",
    address: "Home",
    number: "123",
  },
  {
    id: 2,
    name: "test",
    address: "Home",
    number: "123",
  },
  {
    id: 3,
    name: "test",
    address: "Home",
    number: "123",
  },
];

const HeaderPage = (props) => {
  const stylesHeaderPage = {
    header: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      overflow: "hidden",
      backgroundColor: "#FFFFFF",
    },
    textLogo: {
      fontSize: "36px",
      fontWeight: "bold",
      color: "black",
      padding: "10px",
      overflow: "hidden",
      cursor: "pointer",
    },
  };

  return (
    <motion.div
      style={stylesHeaderPage.header}
      initial={{ height: "100vh", opacity: 0 }}
      animate={{ height: "80px", opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 20,
        ease: (t) => t * (1 - t) * (2 * t - 1),
      }}
    >
      <motion.h1
        style={stylesHeaderPage.textLogo}
        onClick={props.openMenu}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link href={"../"}>
          <label>PREORDER</label>
        </Link>
      </motion.h1>
      <div>Profile</div>
    </motion.div>
  );
};

const ListAddresses = () => {
  const stylesListAddresses = {
    box: {
      height: "150px",
      borderRadius: "5px",
      backgroundColor: "#d9d9d9",
      marginBottom: "10px",
      padding: "5px",
    },
  };
  return (
    <div>
      {data.map((data, index) => (
        <div key={index} style={stylesListAddresses.box}>
          <h1>{data.name}</h1>
          <p>{data.address}</p>
          <p>{data.number}</p>
        </div>
      ))}
      <label className=" text-black p-2 text-center"> + เพิ่มที่อยู๋</label>
    </div>
  );
};

const ListProduct = () => {
  const stylesListProduct = {
    box: {
      height: "150px",
      display: "grid",
      gridTemplateColumns: "150px auto",
      marginBottom: "10px",
    },
    picture: {
      backgroundColor: "#d9d9d9",
      width: "150px",
      height: "150px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    areaDetail: {
      display: "flex",
      justifyContent: "space-between",
      padding: "10px",
      color: "black",
    },
  };

  return (
    <div>
      {data2.map((product, index) => (
        <div key={index} style={stylesListProduct.box}>
          <div style={stylesListProduct.picture}>
            <span>150px * 150px</span>
          </div>
          <div style={stylesListProduct.areaDetail}>
            <div>
              <h1>{product.name}</h1>
              <h1>{product.address}</h1>
              <h1>{product.number}</h1>
            </div>
            <div className="flex justify-between gap-2 text-black">
              <div>แก้ไข</div>
              <div>ลบ</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default function Cart(){
  const stylesCart = {
    content: {
      display: "grid",
      gridTemplateColumns: "1.5fr 6fr", // Removed comma between values
      height: "calc(100vh - 80px)",
      backgroundColor: "#FFFFFF",
    },
    listaddress: {
      padding: "5px",
    },
    listproduct: {
      padding: "5px",
    },
  };

  return (
    <div>
      <HeaderPage />
      <div style={stylesCart.content}>
        {" "}
        {/* Corrected styesCart to stylesCart */}
        <div className="overflow-y-auto" style={stylesCart.listaddress}>
          <ListAddresses />
        </div>
        <div className="overflow-y-auto" style={stylesCart.listproduct}>
          <ListProduct />
        </div>
      </div>
    </div>
  );
};