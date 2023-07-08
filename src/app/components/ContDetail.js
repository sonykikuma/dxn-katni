import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaMobile, FaAddressCard } from "react-icons/fa";

const ContDetail = () => {
  return (
    <div className="relative h-40 w-[70%] justify-center">
      {" "}
      <div className="absolute left-[50%] top-[90%] max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <Image src="/image-1.jpg" alt="" width="1000" height="100" />

        <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          D.R.SONI
        </h4>
        <p className="italic font-bold text-gray-700 dark:text-gray-400">
          Stockist Katni{" "}
        </p>
        <p className="flex mt-10">
          {" "}
          <span>
            <FaMobile size={30} className="text-blue-400 cursor-pointer" />
          </span>
          9329452338
        </p>
        <p className="flex items-center mt-10">
          {" "}
          <span>
            <FaAddressCard
              size={30}
              className="text-blue-400 mr-2 cursor-pointer"
            />
          </span>
          Mansarowar colony, Katni-483504
        </p>
      </div>
    </div>
  );
};

export default ContDetail;
