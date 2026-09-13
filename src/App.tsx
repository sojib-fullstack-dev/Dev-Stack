import { Suspense, useState } from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import CardRecive from "./components/devCard/CardRecive";
import type { ICard } from "./type";
import Footer from "./components/Footer";

const cardfetch = async ():Promise<ICard[]> => {
  const res = await fetch("/Dev-Stack/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const [cardPromise] = useState(() => cardfetch())
  const [isSelected, setIsSelected] = useState<ICard[]>([]);
  return (
    <>
      <Navbar />
      <Banner />
      <Suspense fallback={<h1>Lodding......</h1>}>
        <CardRecive isSelected={isSelected} setIsSelected={setIsSelected} cardPromise ={cardPromise} />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
