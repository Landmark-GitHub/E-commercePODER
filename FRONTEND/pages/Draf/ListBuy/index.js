import React, { useState } from "react";
import Tap from "../../component/tap";
import ListItems from "../../component/ListItems";

function Home() {
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

  return (
    <div className="xl:h-screen lg:h-screen md:h-screen sm:h-screen grid xl:grid-rows-8 lg:grid-rows-8 md:grid-rows-8 sm:grid-rows-8 bg-white text-black">
      {/* Header */}
      <header
        className={`bg-green-700 grid grid-cols-2 items-center justify-between`}
      >
        <div>Name</div>
      </header>

      <main class="bg-white row-span-6 sm:row-span-6 items-center overflow-y-auto">
  <ul class="grid grid-cols-3 gap-4">
    <li class="bg-gray-100 p-4 rounded-lg shadow-md">
      <h2>ประวัติสั่งซื้อ</h2>
      <ul class="mt-4">
        <li class="mb-2"><a href="#">กำลังส่ง</a></li>
        <li class="mb-2"><a href="#">สำเร็จ</a></li>
        <li><a href="#">ยกเลิก</a></li>
      </ul>
    </li>
    <li class="bg-gray-100 p-4 rounded-lg shadow-md">
      <h2>บัญชี</h2>
      <ul class="mt-4">
        <li class="mb-2"><a href="#">ข้อมูลส่วนตัว</a></li>
        <li class="mb-2"><a href="#">การตั้งค่าบัญชี</a></li>
        <li class="mb-2"><a href="#">ประวัติการสั่งซื้อ</a></li>
        <li><a href="#">รายการโปรด</a></li>
      </ul>
    </li>
    <li class="bg-gray-100 p-4 rounded-lg shadow-md">
      <h2>ที่อยู่</h2>
      <ul class="mt-4">
        <li class="mb-2"><a href="#">จัดการที่อยู่สำหรับจัดส่ง</a></li>
        <li class="mb-2"><a href="#">เพิ่มที่อยู่ใหม่</a></li>
        <li><a href="#">แก้ไขที่อยู่</a></li>
      </ul>
    </li>
  </ul>
</main>


      {/* Footer */}
      <footer className="bg-green-700">3</footer>
    </div>
  );
}

export default Home;
