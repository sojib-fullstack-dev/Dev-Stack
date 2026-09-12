import type { ICard } from "../../type";

interface IStackProps {
  isSelected: ICard[];
}

const YourStack = ({ isSelected }: IStackProps) => {
  return (
    <div className="border border-gray-200 rounded-2xl  p-5">
      <h2 className="text-2xl font-bold">Your Stack</h2>
      <p className="text-gray-400">No technologies selected yet.</p>
      {isSelected.map((card) => (
        <div className="space-x-4">
          <div
            key={card.id}
            className="border flex gap-4 mt-4 border-gray-400 p-3 rounded-2xl mb-4 "
          >
            <img src={card.icon} alt="" className="w-9" />
            <div>
              <p className="font-bold text-md">{card.name}</p>
              <p>{card.category}</p>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default YourStack;
