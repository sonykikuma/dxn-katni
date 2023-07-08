import React from "react";
import Navbar from "../components/Navbar";
import ContDetail from "../components/ContDetail";
import Footer from "../components/Footer";
const page = () => {
  return (
    <>
      {" "}
      <Navbar />
      <section>
        <ContDetail />
      </section>
    </>
  );
};

export default page;
