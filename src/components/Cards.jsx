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
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit reiciendis veniam hic, alias commodi praesentium minus in assumenda,animi repellat neque adipisci nostrum consequatur earum deserunt  voluptatibus accusantium omnis quos",
    },
    {
      logo: <FaTiktok className="text-black bg-red-500 rounded-md " size="30px"/>,
      name: "TikTok",
      title: "TikTok Agency Accounts",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit reiciendis veniam hic, alias commodi praesentium minus in assumenda,animi repellat neque adipisci nostrum consequatur earum deserunt  voluptatibus accusantium omnis quos",
    },
    {
      logo: <FaGoogle color="blue" />,
      name: "Google",
      title: "Google Agency Accounts",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit reiciendis veniam hic, alias commodi praesentium minus in assumenda,animi repellat neque adipisci nostrum consequatur earum deserunt  voluptatibus accusantium omnis quos",
    },
    {
      logo: <FaSnapchatGhost className="text-white bg-yellow-300 rounded-md " size="30px"/>,
      name: "Snapchat",
      title: "Snapchat Agency Accounts",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit reiciendis veniam hic, alias commodi praesentium minus in assumenda,animi repellat neque adipisci nostrum consequatur earum deserunt  voluptatibus accusantium omnis quos",
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
