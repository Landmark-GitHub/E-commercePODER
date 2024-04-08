import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HeaderPage = (props) => {
  const stylesHeaderPage = {
    header: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      overflow: "hidden",
      backgroundColor: "#d9d9d9",
    },
    textLogo: {
      fontSize: "36px",
      fontFamily:
        "'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif",
      color: "black",
      padding: "10px",
      overflow: "hidden",
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
        PREORDER
      </motion.h1>
      <div>Profile</div>
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
      fontFamily:
        "'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif",
      color: "black",
      padding: "10px",
      overflow: "hidden",
    },
    listmenu: {
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
        <motion.label whileHover={{ x: 10 }}>Menu</motion.label>
        <motion.label whileHover={{ x: 10 }}>Menu</motion.label>
        <motion.label whileHover={{ x: 10 }}>Menu</motion.label>
        <motion.label whileHover={{ x: 10 }}>Menu</motion.label>
        <motion.label whileHover={{ x: 10 }}>Menu</motion.label>
      </motion.div>
    </motion.div>
  );
};

const HomePage = () => {
  const [menu, setMenu] = useState(false);

  function openMenu() {
    setMenu(!menu);
  }

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
            <div>Content</div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HomePage;
