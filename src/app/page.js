"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Player from "./components/Player";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <h1 className="text-right pt-10 font-bold text-4xl  ">
          <span className="text-red-600 hover:border-b border-cyan-600">
            {" "}
            DXN{" "}
          </span>{" "}
          <span className="text-blue-600">katni</span>
        </h1>

        <Main />
        <Player />
        <Footer />
      </main>
    </>
  );
}
