// src/components/Menu.tsx

import React from "react";
import { menuItems } from "../../data/menuData";

const Home: React.FC = () => {
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {menuItems.map((item: any) => (
        <div
          key={item.id}
          className="bg-white shadow-md rounded-lg overflow-hidden"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
            <p className="text-gray-600 mb-2">
              {item.isVeg ? "Veg" : "Non-Veg"}
            </p>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <p className="text-xl font-semibold">${item.price}</p>
            <button className="bg-blue-500 text-white px-4 py-2 mt-2">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
