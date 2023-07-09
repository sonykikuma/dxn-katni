//"use client";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-200  bottom-0  w-full p-4 text-sm text-gray-600">
      <p className="justify-center px-10">
        Copyright &copy; {new Date().getFullYear()} D.R. Soni
      </p>
    </div>
  );
};

export default Footer;
