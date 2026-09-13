import { use, type Dispatch, type SetStateAction } from "react";
import { Bounce, toast } from "react-toastify";
import type { ICard } from "../../type";
import { AiOutlineCheck } from "react-icons/ai";

export interface IcardType {
  cardPromise: Promise<ICard[]>;
  isSelected: ICard[];
  setIsSelected: Dispatch<SetStateAction<ICard[]>>;
}

const CardSection = ({ isSelected, setIsSelected, cardPromise }: IcardType) => {
  // console.log(cardPromise);
  const cards = use(cardPromise);      
  
  const handleSelectedProps = (card: ICard) => {
    setIsSelected([...isSelected, card]);
    toast.success("selected the card", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 container mx-auto gap-4">
      {cards.map((card: ICard) => {
        return (
          <div
            key={card.id}
            className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm hover:shadow-md hover:scale-105 transition duration-300"
          >
            {/* Icon */}
            <div className="mb-4 flex justify-between">
              <img
                src={card.icon}
                alt={card.name}
                className="w-10 h-10 object-contain"
              />
              <p
                className={`
                                ${card.badge == "Popular" && "border border-gray-300  rounded-4xl p-2 bg-red-50 px-6 text-red-600"}
                                ${card.badge == "Essential" && " border border-gray-400 rounded-4xl p-2 bg-green-50 px-6 text-green-600"}
                                ${card.badge == "Recommended" && "border border-gray-400 rounded-4xl p-2 bg-blue-100 px-6 text-blue-600"}
                                ${card.badge == "Trending" && "border border-gray-400 rounded-4xl bg-[#deecf3] p-2 bg-[] px-6 text-[#0284C7]"}
                                ${card.badge == "Powerful" && "border border-gray-400 rounded-4xl p-2 bg-[] px-6 text-[#0891B2]"}
                                ${card.badge == "Lightweight" && "border border-gray-400 rounded-4xl bg-[#cfdfe4] p-2  px-6 text-[#0891B2]"}
                                ${card.badge == "Professional" && "border border-gray-400 rounded-4xl bg-[#cfdfe4] p-2  px-6 text-black"}
                                `}
              >
                {card.badge}
              </p>
            </div>

            {/* Name */}
            <h2 className="text-lg font-bold text-gray-900 mb-2">
              {card.name}
            </h2>

            {/* Description */}
            <p className="text-xs text-gray-500 leading-5 mb-4">
              {card.description}
            </p>

            <div className="flex justify-between items-center text-xs mb-4">
              <span className="bg-gray-100 px-2 py-1 rounded-md">
                {card.category}
              </span>

              <span className="text-gray-500">{card.difficulty}</span>

              <span className="font-medium">⭐ {card.rating}</span>
            </div>

            {/* Button */}
            <button
              onClick={() => handleSelectedProps(card)}
              disabled={isSelected.filter((item)=>item.id===card.id).length>0}
              className="w-full bg-[#111827] text-white cursor-pointer py-2  rounded-lg
                             border border-transparent
                            hover:bg-gray-800 transition
                            disabled:bg-red-600"  >
          
              {isSelected.filter((item) => item.id === card.id).length>0
                ? (<div className="flex justify-center gap-1 items-center">
                       <AiOutlineCheck/>
                  Add to Stack
                  </div> )
                : "Add to Stack"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default CardSection;
