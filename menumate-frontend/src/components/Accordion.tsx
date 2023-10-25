import React, { useState } from "react";
import {
  AiOutlinePlusCircle,
  AiOutlineDown,
  AiOutlineUp,
} from "react-icons/ai";
import { BiSolidRectangle } from "react-icons/bi";

interface AccordionProps {
  title: string;
  items: { name: string; description: string; isVeg: boolean; price: number }[];
}

const Accordion: React.FC<AccordionProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4">
      <button
        className="w-full bg-gray-200 p-2 text-left font-semibold"
        onClick={toggleAccordion}
      >
        <div className="flex justify-between items-center">
          {title}
          {isOpen ? <AiOutlineUp /> : <AiOutlineDown />}
        </div>
      </button>
      {isOpen && (
        <div className="border border-gray-300 p-2">
          {items.map((item, index) => (
            <div key={index} className="flex justify-between my-3">
              <div>
                <p className="text-sm flex align-center">
                  <BiSolidRectangle
                    color={item.isVeg ? "green" : "red"}
                    className="mt-1 mr-1 border border-black p-[1px]"
                  />
                  {item.name}
                  {" -"}
                  <div className="font-medium ml-1"> Rs. {item.price}</div>
                </p>
                <p className="text-xs text-gray-600">{item.description}</p>
              </div>
              <button>
                <AiOutlinePlusCircle color="green" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Accordion;
