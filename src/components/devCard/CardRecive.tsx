import {type Dispatch, type SetStateAction } from "react";
import type { ICard } from "../../type";
import CardSection from "./CardSection";
import YourStack from "./YourStack";

interface ICardRecivePorps {
  cardPromise: Promise<ICard[]>;
    isSelected:ICard[]
 setIsSelected:Dispatch<SetStateAction<ICard[]>>
}

const CardRecive = ({  cardPromise ,isSelected , setIsSelected }: ICardRecivePorps) => {



  return (
    <>


         <div className="container mx-auto space-y-2 mb-10">
            <h2 className="text-3xl font-bold">Explore the <span className="bg-gradient-to-r from-[#EC4899]  to-[#D81B7E] bg-clip-text text-transparent">Technologies</span></h2>
            <p className="text-gray-500">Pick one technology per category to build your ideal stack.</p>
         </div>



      <div className="grid grid-cols-1 lg:grid-cols-12 container mx-auto gap-4">
        <div className="col-span-9">
          <CardSection isSelected={isSelected} setIsSelected={setIsSelected} cardPromise={cardPromise}></CardSection>
        </div>
        {/* side  */}
        <div className="col-span-3">
          <YourStack  isSelected={isSelected} setIsSelected={setIsSelected} />
        </div>
      </div>
    </>
  );
};

export default CardRecive;
