import { IoIosClose } from "react-icons/io";
import type { ICard } from "../../type";
import type { Dispatch, SetStateAction } from "react";

interface IStackProps {
  isSelected: ICard[];
  setIsSelected: Dispatch<SetStateAction<ICard[]>>;
}

const YourStack = ({
  isSelected,
  setIsSelected,
}: IStackProps) => {
  const handleRemove = (id: number) => {
    setIsSelected((previousStack) =>
      previousStack.filter((item) => item.id !== id)
    );
  };

  return (
    <div className="border border-gray-200 rounded-2xl p-5">
      <h2 className="text-2xl font-bold">Your Stack</h2>

      {isSelected.length === 0 ? (
        <>
          <p className="text-gray-400">
            
            No technologies selected yet.
          </p>
          <div className="border border-dotted border-gray-400 mt-4 text-center p-8 rounded-3xl">
            <p className="text-gray-300">Your stack is empty.</p>
          </div>
        </>

      ) : (
        <div>
          {
            isSelected.map((card) => (
              <div
                key={card.id}
                className="border  flex justify-between gap-4 mt-4 border-gray-300 p-3 rounded-2xl mb-4"
              >
                <div className="flex gap-5">
                  <img
                    src={card.icon}
                    alt={card.name}
                    className="w-9"
                  />

                  <div>
                    <p className="font-bold text-md">
                      {card.name}
                    </p>

                    <p>{card.category}</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleRemove(card.id)}
                  className="text-gray-400 hover:text-red-500 text-xl"
                >
                  <IoIosClose size={25} />
                </button>
              </div>

            ))
          }
          <div className="text-center cursor-pointer border border-red-200 font-semibold px-16 py-1 text-xl rounded-lg text-red-600">
            <button onClick={() => setIsSelected([])} >Remove All</button>
          </div>
        </div>
        
      )}
    </div>

  );
};

export default YourStack;