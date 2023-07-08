import Image from "next/image";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Player from "./components/Player";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <h1 className="text-center pt-10 font-bold text-xl hover:text-cyan-400">
          DXN katni
        </h1>
        <Navbar />

        <Main />
        <Player />
        <Footer />
      </main>
    </>
  );
}
