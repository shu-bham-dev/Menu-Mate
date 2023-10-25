import React from "react";
import { menuItems } from "../../data/menuData";

const Home: React.FC = () => {
  return (
    <div className="p-4">
      {menuItems.map((item: any) => (
        <div
          key={item.id}
          className="flex items-center border-b border-gray-300 py-2"
        >
          <div className="w-1/4">
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-cover rounded"
            />
          </div>
          <div className="w-3/4 pl-4">
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p className="text-sm text-gray-600 mb-2">
              {item.isVeg ? "Veg" : "Non-Veg"}
            </p>
            <p className="text-sm text-gray-600 mb-2">{item.description}</p>
            <p className="text-lg font-semibold">${item.price}</p>
            <button className="bg-blue-500 text-white px-2 py-1 mt-2">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
