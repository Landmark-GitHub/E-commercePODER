import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import ListItem from "../component/ListItems";

import { MdOutlineTune } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";

const HomePage = () => {
    const [menu, setMenu] = useState(false);
    const [filter, setFilter] = useState(false);
    const [modal, setModal] = useState(false);
  
    const [data, setData] = useState(null);
    const [productID, setProductID] = useState(null);
    const [dataFilter, setDataFilter] = useState(null);
  
    function openMenu() {
      setMenu(!menu);
    }
  
    function openFilter() {
      setFilter(!filter);
    }
  
    async function openModal(id) {
      if (id != null) {
        try {
          const response = await fetch(`http://127.0.0.1:8000/ecommerce/${id}`);
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const jsonData = await response.json();
          setProductID(jsonData);
          console.table(productID);
          console.table(productID.stock);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
        setModal(!modal);
      } else {
        setModal(!modal);
      }
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
  
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/ecommerce/");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData);
        console.log(data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    const loadProducts = () => {
      if (!dataFilter || dataFilter === "ALL") {
        fetchData();
      } else {
        const filteredData = data.filter(
          (product) => product.brand === dataFilter
        );
        setDataFilter(filteredData)
      }
    };
  
    useEffect(() => {
      fetchData();
      // loadProducts();
    }, [dataFilter]);
  
    return (
      <div className=" bg-white">
        <AnimatePresence>
          {menu ? (
            <div className=" bg-white">
              <Menu openMenu={openMenu} />
            </div>
          ) : (
            <div className=" bg-white">
              <HeaderPage openMenu={openMenu} />
              <div className="overflow-y-auto">
                {filter ? (
                  <div>
                    <Filter
                      openFilter={openFilter}
                      data={data}
                      setDataFilter={setDataFilter}
                    />
                  </div>
                ) : (
                  <div style={stylesHomePage.areaFilter}>
                    <div className="cursor-pointer" onClick={openFilter}>
                      <MdOutlineTune style={{ fontSize: "32px" }} />
                    </div>
                  </div>
                )}
                <ListItem data={data} openModaled={openModal} />
              </div>
            </div>
          )}
          {modal ? (
            <ShowProduct openModal={openModal} productID={productID} />
          ) : (
            <></>
          )}
        </AnimatePresence>
      </div>
    );
  };
  
  export default HomePage;
  