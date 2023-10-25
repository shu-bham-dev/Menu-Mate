// In your menu component

import React from "react";
import { menuItems } from "../../data/menuData";
import Accordion from "../../components/Accordion";

const Home: React.FC = () => {
  const groupedMenuItems: { [key: string]: typeof menuItems } = {};

  menuItems.forEach((item: any) => {
    if (!groupedMenuItems[item.category]) {
      groupedMenuItems[item.category] = [];
    }
    groupedMenuItems[item.category].push(item);
  });

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="bg-white w-full max-w-md p-4">
        {Object.entries(groupedMenuItems).map(([category, items]) => (
          <Accordion key={category} title={category} items={items} />
        ))}
      </div>
    </div>
  );
};

export default Home;
