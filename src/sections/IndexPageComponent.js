import React from "react";
import { FaShareAlt } from "react-icons/fa";
import StarRatingComponent from "../components/StarRatingComponent";

import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

function IndexPageComponent() {
  return (
    <div
      className="bg-white w-full px-5 md:px-10 py-5  border border-gray-300 overflow-x-hidden  "
      id="home_section"
    >
      <h1 className="font-bold uppercase tracking-normal text-2xl mb-5">
        ABOUT ME
      </h1>
      <p className="text-justify tracking-wider font-medium leading-7 ">
        <span className="font-bold mb-5 ">Helo, I’m Gautam Paladiya!</span>
        <br /> I have more than 2 years of experience in Full stack web
        development with React as frontend and Node.js, Laravel as backend and
        continues integration, deployment CI/CD, Docker, Kubernetes with Aws
        cloud hosting. Developed ecommerce to Blogging and utility web apps with
        latest technology like Socket.io, Webrtc, TypeORM, GraphQL, social media
        integration and yes also secure authentication and authorisation for
        frontend and backend. Like to work with Team and handy experience with
        Jira, etc.
      </p>
      <div className="my-10 flex space-x-4 ">
        <button className="flex items-center border-2 rounded-full px-4 py-1 border-blue-300">
          <FaShareAlt />
          <span className="text-base font-semibold ml-3 cursor-pointer">
            SHARE
          </span>
        </button>
        <motion.div className="flex space-x-2">
          <SocialIcon url="https://www.facebook.com/dev.gautampaladiya" />
          <SocialIcon url="https://twitter.com/paladiya_gautam" />
          <SocialIcon url="https://medium.com/@mrpaladiyagautam" />
          <SocialIcon url="https://github.com/gautam-paladiya" />
        </motion.div>
      </div>
      <div className="w-full h-1 border-b-2 my-10" />
      <div className="flex flex-col items-start md:flex-row md:space-x-10 ">
        <div className="flex flex-col items-start w-full ">
          <h1 className=" text-2xl font-bold my-5 uppercase">
            Personal Information
          </h1>
          <table className="space-y-2 border-collapse ">
            <tbody>
              <tr className="border-transparent border-b-8">
                <td className="font-bold text-md ">FULL NAME</td>
                <td className="pl-2 font-normal tracking-widest text-base ">
                  Paladiya Gautam Rajubhai
                </td>
              </tr>
              <tr className="border-transparent border-b-8">
                <td className="font-bold text-md ">D.O.B.</td>
                <td className="pl-2 font-normal tracking-widest text-base ">
                  31 Aug 1996
                </td>
              </tr>
              <tr className="border-transparent border-b-8">
                <td className="font-bold text-md ">ADDRESS</td>
                <td className="pl-2 font-normal tracking-widest text-base ">
                  Lublin, 20-400,
                </td>
              </tr>
              <tr className="border-transparent border-b-8">
                <td className="font-bold text-md ">E-MAIL</td>
                <td className="pl-2 font-normal tracking-widest text-base ">
                  Mrpaladiyagautam@gmail.com
                </td>
              </tr>
              <tr className="border-transparent border-b-8">
                <td className="font-bold text-md ">PHONE</td>
                <td className="pl-2 font-normal tracking-widest text-base ">
                  +48 729213040
                </td>
              </tr>
              <tr className="border-transparent border-b-8">
                <td className="font-bold text-md ">FREELANCE</td>
                <td className="pl-2 font-normal tracking-widest text-base ">
                  Available
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex flex-col items-start w-full ">
          <h1 className=" text-2xl font-bold my-5 uppercase ">languages</h1>
          <div className="flex flex-col my-1">
            <h1 className="font-semibold">English</h1>
            <div className="flex justify-between space-x-5">
              <StarRatingComponent star={9} />
              <div className="font-light ">native</div>
            </div>
          </div>
          <div className="flex flex-col my-1">
            <h1 className="font-semibold">Polish</h1>
            <div className="flex justify-between space-x-5">
              <StarRatingComponent star={5} />
              <div className="font-light ">intermediate</div>
            </div>
          </div>
          <div className="flex flex-col my-1">
            <h1 className="font-semibold">German</h1>
            <div className="flex justify-between space-x-5">
              <StarRatingComponent star={3} />
              <div className="font-light ">begginer</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexPageComponent;
