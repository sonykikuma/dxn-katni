import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-200  bottom-0  w-full p-6 text-sm text-gray-600">
      <p className="justify-center px-10">
        Copyright &copy; {new Date().getFullYear()} D.R. Soni
      </p>
    </footer>
  );
};

export default Footer;
