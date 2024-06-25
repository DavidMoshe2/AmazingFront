import { useState } from "react";
import React from "react";
import ShareLogo from "../svg/ShareLogo";
import "./card.css";
import HeartLogo from "../svg/HeartLogo";
import HeartFillLogo from "../svg/HeartFillLogo";

const Card = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="bg-gray-100 p-6 flex justify-center items-center min-h-screen">
      <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white ">
        <img
          className="w-full h-48 object-cover"
          src="https://via.placeholder.com/400x300"
          alt="Sample Image"
        />
        <div className="px-6 py-4">
          <div className="font-semibold text-xl mb-2 text-gray-800">
            Card Title
          </div>
          <p className="text-gray-600 text-base">
            Here is a brief description of the card. This section can hold any
            relevant information.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2 flex justify-between items-center">
          <div className="flex items-center">
            <button>
              <img
                className="w-10 h-10 rounded-full border-2 border-gray-300"
                src="https://via.placeholder.com/40"
                alt="Profile Image"
              />
            </button>

            <div className="ml-4 text-sm">
              <p className="text-gray-900 leading-none font-semibold">
                John Doe
              </p>
              <p className="text-gray-500">Aug 18</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <button className="icons">
              <ShareLogo />
            </button>
            <button
              onClick={() => setClicked(!clicked)}
              className={clicked ? "heart-in" : "icons"}
            >
              {clicked ? <HeartFillLogo /> : <HeartLogo />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
