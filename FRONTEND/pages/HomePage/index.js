import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import ListItem from "../component/ListItems";

const list = [
  {
    title: "Apple",
    img: "https://via.placeholder.com/150",
    price: "$2.50",
    rating: 4,
    category: "Fruit",
    inventoryStatus: "INSTOCK",
    id: 1,
  },
  {
    title: "Banana",
    img: "https://via.placeholder.com/150",
    price: "$1.50",
    rating: 3.5,
    category: "Fruit",
    inventoryStatus: "LOWSTOCK",
    id: 2,
  },
  {
    title: "Strawberry",
    img: "https://via.placeholder.com/150",
    price: "$3.00",
    rating: 4.5,
    category: "Fruit",
    inventoryStatus: "INSTOCK",
    id: 3,
  },
  {
    title: "Orange",
    img: "https://via.placeholder.com/150",
    price: "$2.00",
    rating: 4,
    category: "Fruit",
    inventoryStatus: "OUTOFSTOCK",
    id: 4,
  },
  {
    title: "Grape",
    img: "https://via.placeholder.com/150",
    price: "$4.00",
    rating: 4.5,
    category: "Fruit",
    inventoryStatus: "INSTOCK",
    id: 5,
  },
  {
    title: "Watermelon",
    img: "https://via.placeholder.com/150",
    price: "$5.00",
    rating: 4.5,
    category: "Fruit",
    inventoryStatus: "INSTOCK",
    id: 6,
  },
  {
    title: "Pineapple",
    img: "https://via.placeholder.com/150",
    price: "$3.50",
    rating: 4,
    category: "Fruit",
    inventoryStatus: "INSTOCK",
    id: 7,
  },
  {
    title: "Kiwi",
    img: "https://via.placeholder.com/150",
    price: "$2.50",
    rating: 4,
    category: "Fruit",
    inventoryStatus: "INSTOCK",
    id: 8,
  },
  {
    title: "Peach",
    img: "https://via.placeholder.com/150",
    price: "$2.50",
    rating: 3.5,
    category: "Fruit",
    inventoryStatus: "LOWSTOCK",
    id: 9,
  },
  {
    title: "Mango",
    img: "https://via.placeholder.com/150",
    price: "$3.50",
    rating: 4,
    category: "Fruit",
    inventoryStatus: "INSTOCK",
    id: 10,
  },
];

const HeaderPage = (props) => {
  const stylesHeaderPage = {
    header: {
      position: "fixed",
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      overflow: "hidden",
      backgroundColor: "#d9d9d9",
    },
    textLogo: {
      fontSize: "36px",
      fontWeight: "bold",
      color: "black",
      padding: "10px",
      overflow: "hidden",
      cursor: "pointer",
    },
    username: {
      backgroundColor: 'white',
      margin: '10px',
      width: '60px',
      height: '60px',
      borderRadius: '50%' 
    }
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
        PREORDER
      </motion.h1>
      <div style={stylesHeaderPage.username}>.</div>
    </motion.div>
  );
};

const Menu = (props) => {
  const stylesMenu = {
    body: {
      width: "100%",
      overflow: "hidden",
      backgroundColor: "#d9d9d9",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
    },
    textLogo: {
      fontSize: "36px",
      fontWeight: "bold",
      color: "black",
      padding: "10px",
      overflow: "hidden",
      cursor: "pointer",
    },
    listmenu: {
      fontWeight: "bold",
      display: "grid",
      color: "black",
      padding: "10px",
      fontSize: "36px",
    },
  };

  return (
    <motion.div
      style={stylesMenu.body}
      initial={{ height: "0px", opacity: 0 }}
      animate={{ height: "100vh", opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 14,
        ease: (t) => t * (1 - t) * (2 * t - 1),
      }}
    >
      <motion.div style={stylesMenu.header}>
        <motion.h1
          style={stylesMenu.textLogo}
          onClick={props.openMenu}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          PREORDER
        </motion.h1>
        <div>Profile</div>
      </motion.div>
      <motion.div
        style={stylesMenu.listmenu}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div whileHover={{ x: 10 }}>
          <Link href="../Cart">
            <label className="cursor-pointer">บัญชีผู้ใช้</label>
          </Link>
        </motion.div>
        <motion.div whileHover={{ x: 10 }}>
          <Link href="../Cart">
            <label className="cursor-pointer">รายการสินค้าที่เลือก</label>
          </Link>
        </motion.div>
        <motion.div whileHover={{ x: 10 }}>
          <Link href="../Cart">
            <label className="cursor-pointer">รายการสั่งซื้อสินค้า</label>
          </Link>
        </motion.div>
        <motion.div whileHover={{ x: 10 }}>
          <Link href="../Cart">
            <label className="cursor-pointer">ตั้งค่า</label>
          </Link>
        </motion.div>
        <motion.label whileHover={{ x: 10 }}>Menu</motion.label>
      </motion.div>
    </motion.div>
  );
};

const Filter = (props) => {
  const stylesFilter = {
    body: {
      backgroundColor: "#FFFFFF",
      textColor: "black",
      marginTop: "80px",
    },
  };
  return (
    <motion.div
      style={stylesFilter.body}
      onClick={props.openFilter}
      initial={{ height: "40px", opacity: 0 }}
      animate={{ height: "360px", opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 14,
        ease: (t) => t * (1 - t) * (2 * t - 1),
      }}
    >
      <div className=" text-end text-black p-3 font-bold cursor-pointer">X</div>
    </motion.div>
  );
};

const HomePage = () => {
  const [menu, setMenu] = useState(false);
  const [filter, setFilter] = useState(false);
  const [modal, setModal] = useState(false);

  function openMenu() {
    setMenu(!menu);
  }

  function openFilter() {
    setFilter(!filter);
  }

  function openModal(name, pirce) {
    var data = {
      name: name,
      pirce: pirce,
    };
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
    },
  };

  return (
    <div>
      <AnimatePresence>
        {menu ? (
          <div>
            <Menu openMenu={openMenu} />
          </div>
        ) : (
          <div>
            <HeaderPage openMenu={openMenu} />
            <div className="overflow-y-auto">
              {filter ? (
                <div>
                  <Filter openFilter={openFilter} />
                </div>
              ) : (
                <div style={stylesHomePage.areaFilter}>
                  <div className="cursor-pointer" onClick={openFilter}>
                    LOGO Filter
                  </div>
                </div>
              )}
              <div className="text-black">
                <ListItem data={list} openModaled={openModal} />
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HomePage;