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
      <header className={`bg-green-700 grid grid-cols-2 items-center justify-between` }>
        <h1 className="text-white text-xl">STORESHOP</h1>
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

      <main className="bg-white row-span-6 sm:row-span-6 items-center overflow-y-auto">
        <ListItems data={list} openModaled={openModaled} setDataSerect={setDataSerect}/>
      </main>

      {/* Footer */}
      <footer className="bg-green-700 flex justify-end">
        <div>
            <h1 >1</h1>
            <img
            src="https://png.pngtree.com/png-clipart/20231020/original/pngtree-d-shopping-cart-with-empty-space-isolated-concept-3d-render-illustration-png-image_13380805.png"
            alt="Product"
            width={200}
            className="rounded-lg object-cover fixed z-10 bottom-0 right-2"
            />
        </div>
      </footer>

      {/* Modal */}
      {openModal && (
        <div className="fixed top-0 left-0 w-full h-full overflow-auto bg-gray-900 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-md p-3 sm:max-w-md md:max-w-lg lg:max-w-4xl xl:max-w-7xl">
            <div className="grid top-0 lg:grid-cols-2 gap-3">
              <div className="">
                <img
                  src="https://i.weed.th/ii/9360054bc6a837bf421d3dab2a49bfa6/800x800"
                  alt="Product"
                  className="rounded-lg object-cover w-full"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div className="space-y-4">
                  <h1 className="text-2xl font-bold text-gray-800">
                    {dataSerect[0].name}
                  </h1>
                  <h2 className="text-xl font-semibold text-gray-700">
                    Product Name
                  </h2>
                  <p className="text-gray-600">
                    Description Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Nam efficitur laoreet.
                  </p>
                  <Tap />{" "}
                  <span className="text-lg font-bold text-gray-800 ml-4">
                    {dataSerect[0].piece}
                  </span>
                </div>
                <div className="flex gap-2 justify-end">
                  <button
                    className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 self-start mt-4"
                    onClick={() => setOpenModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-green-700 self-start mt-4"
                    onClick={() => setOpenModal(false)}
                  >
                    Close
                  </button>
                </div>
                {/* Close Button */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
