import React, { useState } from "react";
import Tap from "../../component/tap";
import Link from 'next/link'; 

function ShoeStore() {
  const [openModal, setOpenModal] = useState(false); // Initialize openModal as a boolean
  const [dataSerect, setDataSerect] = useState([]);

  const openModaled = (name, piece) => {
    setDataSerect([
      {
        name: name,
        piece: piece,
      },
    ]);
    console.table(dataSerect);
    setOpenModal(!openModal);
  };

  const list = [
    {
      title: "Apple",
      img: "https://via.placeholder.com/150",
      price: "$2.50",
      rating: 4,
      category: "Fruit",
      inventoryStatus: "INSTOCK",
      id: 1
    },
    {
      title: "Banana",
      img: "https://via.placeholder.com/150",
      price: "$1.50",
      rating: 3.5,
      category: "Fruit",
      inventoryStatus: "LOWSTOCK",
      id: 2
    },
    {
      title: "Strawberry",
      img: "https://via.placeholder.com/150",
      price: "$3.00",
      rating: 4.5,
      category: "Fruit",
      inventoryStatus: "INSTOCK",
      id: 3
    },
    {
      title: "Orange",
      img: "https://via.placeholder.com/150",
      price: "$2.00",
      rating: 4,
      category: "Fruit",
      inventoryStatus: "OUTOFSTOCK",
      id: 4
    },
    {
      title: "Grape",
      img: "https://via.placeholder.com/150",
      price: "$4.00",
      rating: 4.5,
      category: "Fruit",
      inventoryStatus: "INSTOCK",
      id: 5
    },
    {
      title: "Watermelon",
      img: "https://via.placeholder.com/150",
      price: "$5.00",
      rating: 4.5,
      category: "Fruit",
      inventoryStatus: "INSTOCK",
      id: 6
    },
    {
      title: "Pineapple",
      img: "https://via.placeholder.com/150",
      price: "$3.50",
      rating: 4,
      category: "Fruit",
      inventoryStatus: "INSTOCK",
      id: 7
    },
    {
      title: "Kiwi",
      img: "https://via.placeholder.com/150",
      price: "$2.50",
      rating: 4,
      category: "Fruit",
      inventoryStatus: "INSTOCK",
      id: 8
    },
    {
      title: "Peach",
      img: "https://via.placeholder.com/150",
      price: "$2.50",
      rating: 3.5,
      category: "Fruit",
      inventoryStatus: "LOWSTOCK",
      id: 9
    },
    {
      title: "Mango",
      img: "https://via.placeholder.com/150",
      price: "$3.50",
      rating: 4,
      category: "Fruit",
      inventoryStatus: "INSTOCK",
      id: 10
    }
  ];

  return (
    <div className="xl:h-screen lg:h-screen md:h-screen sm:h-screen grid xl:grid-rows-8 lg:grid-rows-8 md:grid-rows-8 sm:grid-rows-8 bg-white text-black">
      {/* Header */}
      <header className="bg-green-700 grid grid-cols-2 items-center justify-between ">
        <Link href="/Home" className="text-white text-xl">
            STORESHOP
        </Link>
        <div className="flex justify-end p-10">
          <input
            type="text"
            className="border rounded px-2 py-1 mr-2"
            placeholder="Search"
          />
          <button className="bg-white hover:bg-gray-200 text-green-700 font-bold py-2 px-4 rounded">
            Search
          </button>
          <div className="ml-4">
            <span className="text-white">Profile</span>
          </div>
        </div>
      </header>

      <main className="bg-white row-span-6 sm:row-span-6 p-4 overflow-y-auto">
        <table className="w-full border-collapse" style={{ width: "100%" }}>
          <thead>
            <tr
              className="bg-gray-200"
            >
              <th style={{ width: "20%", textAlign: "center" }}>รายการ</th>
              <th style={{ width: "15%", textAlign: "center" }}>ราคา</th>
              <th style={{ width: "15%", textAlign: "center" }}>จำนวน</th>
              <th style={{ width: "15%", textAlign: "center" }}>รวม</th>
              <th style={{ width: "15%", textAlign: "center" }}>แก้</th>
              <th style={{ width: "15%", textAlign: "center" }}>ลบ</th>
              <th style={{ width: "15%", textAlign: "center" }}>เลือก</th>
            </tr>
          </thead>
          <tbody
          >
            {list.map((item, index) => (
              <tr key={index}           style={{
                width: "100%",
                maxHeight: "610px",
                overflowY: "auto",
              }}>
                <td className="py-2 px-4 border " style={{ width: "20%" }}>
                  {item.title}
                </td>
                <td className="py-2 px-4 border " style={{ width: "15%" }}>
                  {item.price}
                </td>
                <td className="py-2 px-4 border " style={{ width: "15%" }}>
                  ข้อมูล 1,3
                </td>
                <td className="py-2 px-4 border " style={{ width: "15%" }}>
                  ข้อมูล 1,4
                </td>
                <td className="py-2 px-4 border " style={{ width: "15%" }}>
                  แก้
                </td>
                <td className="py-2 px-4 border " style={{ width: "15%" }}>
                  ข้อมูล 1,6
                </td>
                <td className="p-4 items-center">
                    <input type='checkbox'></input>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      {/* Footer */}
      <footer className="bg-green-700 flex">f</footer>
    </div>
  );
}

export default ShoeStore;
