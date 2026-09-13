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
      <div className="grid grid-cols-12 container mx-auto gap-4">
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
