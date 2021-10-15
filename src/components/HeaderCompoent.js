import React from "react";
import { MdOutlineClose } from "react-icons/md";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const variantList = {
  hide: {
    y: "-30px",
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};
const variantListItem = {
  hide: {
    x: "-10px",
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

function HeaderCompoent(props) {
  return (
    <motion.div
      className="flex justify-between items-center h-24 "
      variants={variantList}
      initial="hide"
      animate="show"
    >
      <Image
        src="/assets/img/logo.png"
        className="w-52 h-20 object-contain"
        alt="Gautam Paladiya"
        width={208}
        height={80}
      />
      <div
        className={`${
          props.nav
            ? "block absolute top-0 left-0 right-0 bottom-0 z-50"
            : "hidden"
        } md:block z-50`}
      >
        <motion.ul
          variants={variantList}
          className=" md:relative md:bg-transparent bg-gray-300   flex flex-col md:flex-row items-center justify-between space-x-4"
        >
          <motion.li
            variants={variantListItem}
            className="p-2 rounded-full  text-gray-800 hover:text-gray-400 text-xl font-semibold cursor-pointer transition-colors delay-200"
          >
            <Link href="#home_section">home</Link>
          </motion.li>
          <motion.li
            variants={variantListItem}
            className="p-2 rounded-full text-gray-800 hover:text-gray-400 text-xl font-semibold cursor-pointer transition-colors delay-200"
          >
            portfolio
          </motion.li>
          <motion.li
            variants={variantListItem}
            className="p-2 rounded-full text-gray-800 hover:text-gray-400 text-xl font-semibold cursor-pointer transition-colors delay-200"
          >
            pages
          </motion.li>
          <motion.li
            variants={variantListItem}
            className="p-2 rounded-full text-gray-800 hover:text-gray-400 text-xl font-semibold cursor-pointer transition-colors delay-200"
          >
            blog
          </motion.li>
          <motion.li
            variants={variantListItem}
            className="p-2 pr-0 rounded-full text-gray-800 hover:text-gray-400 text-xl font-semibold cursor-pointer transition-colors delay-200"
          >
            <Link href="#contact_section">contact</Link>
          </motion.li>
          <motion.li
            variants={variantListItem}
            className="md:hidden p-2 pr-0 rounded-full text-gray-800 hover:text-gray-400 text-xl font-semibold cursor-pointer transition-colors delay-200"
          >
            <MdOutlineClose size={40} onClick={props.toggleNav} />
          </motion.li>
        </motion.ul>
      </div>
    </motion.div>
  );
}

export default HeaderCompoent;
