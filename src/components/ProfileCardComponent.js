import React, { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaGithub,
  FaMediumM,
} from "react-icons/fa";
import { motion } from "framer-motion";
import FileSaver from "file-saver";
import Image from "next/image";

function ProfileCardComponent() {
  const [state, setstate] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setstate(1);
    }, 3000);
  }, []);

  const downloadFile = () => {
    FileSaver.saveAs(
      process.env.PUBLIC_URL + "/assets/GAUTAM's_Resume.pdf",
      "GAUTAM's_Resume.pdf"
    );
  };

  return (
    <motion.div
      className=" rounded-lg shadow-lg w-full flex flex-col bg-gray-100"
      initial={{ y: "-100vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, stiffness: 50 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className=" flex flex-col p-5  items-center bg-blue-200">
        <Image
          width={200}
          height={200}
          src="/assets/img/profile.jpg"
          alt=""
          className="rounded-full w-52 h-52"
        />
        <h1 className="text-2xl font-semibold  mt-5 text-center cursor-pointer">
          Gautam Paladiya
        </h1>
        <h2 className="text-lg font-normal mt-5 text-center text-gray-400">
          Full stack developer
        </h2>
        <div className="flex items-center mt-5 mb-5 w-full justify-between">
          <FaFacebookF size={22} className="cursor-pointer" />
          <FaTwitter size={22} className="cursor-pointer" />
          <FaMediumM size={22} className="cursor-pointer" />
          <FaGithub size={22} className="cursor-pointer" />
        </div>
      </div>
      <motion.button
        whileTap={{ scale: 0.8 }}
        onClick={downloadFile}
        className="px-8 py-2 uppercase mx-auto text-base bg-black text-gray-200 my-6 rounded-full self-center "
      >
        download resume
      </motion.button>
    </motion.div>
  );
}

export default ProfileCardComponent;
