import React from "react";
import { FaMeta, FaTiktok, FaGoogle } from "react-icons/fa6";
import { FaSnapchatGhost } from "react-icons/fa";

function Cards() {
  const allCards = [
    {
      logo: <FaMeta color="blue" size="30px"/>,
      name: "Meta",
      title: "Meta Agency Accounts",
      description:
        "Unlock the full potential of your brand wiht Meta advertising, reaching billions of people across Facebook, Instagram, Whatsapp and more.",
    },
    {
      logo: <FaTiktok className="text-black bg-red-500 rounded-md " size="30px"/>,
      name: "TikTok",
      title: "TikTok Agency Accounts",
      description:
        "Captivate and engage a global audience with our cutting-edge advertising solutions on the vibrant and dynamic platform of TikTok.",
    },
    {
      logo: <FaGoogle color="blue" />,
      name: "Google",
      title: "Google Agency Accounts",
      description:
        "Harness the power of Google's vast network and maximize your brands online visibility with our expertly crafted advertising campaigns, tailored to reach your target audience effectively.",
    },
    {
      logo: <FaSnapchatGhost className="text-white bg-yellow-300 rounded-md " size="30px"/>,
      name: "Snapchat",
      title: "Snapchat Agency Accounts",
      description:
        "Elevate your brand's presence and connect with a diverse, youthfull audience through our innovative advertising strategies on SnapChat.",
    },
  ];

  return (
    <div className="max-w-6xl my-10 lg:mx-auto sm:mx-4 grid md:grid-cols-2 gap-10 sm:grid-cols-1">
      {allCards.map((card) => (
        <div
          className="shadow-xl rounded-lg p-5"
          key={card.name}
        >
          <div className="flex text-xl font-bold gap-2">
            <div className="flex justify-center items-center">{card.logo} </div>
            <div>{card.name}</div>
          </div>
          <h1 className="text-xl my-5 text-gray-800 font-medium">{card.title}</h1>
          <p className="text-gray-600"> {card.description} </p>
        </div>
      ))}
    </div>
  );
}

export default Cards;
