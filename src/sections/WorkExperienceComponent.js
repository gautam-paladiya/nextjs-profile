import React from "react";
import Image from "next/image";

function WorkExperienceComponent() {
  return (
    <div className="bg-white w-full  px-5 md:px-10 py-5 md:py-10 border-1 border-gray-300 my-10">
      <h1 className="text-2xl font-bold my-5">WORK EXPERIENCE</h1>
      <div>
        <div className="flex flex-col md:flex-row items-stretch md:space-x-5 space-y-5 md:space-y-0  ">
          <h1 className="bg-blue-200 whitespace-nowrap px-7 py-1 rounded-r-full font-semibold self-start">
            jan 2014 - Mar 2016
          </h1>
          <div className="work-line hidden md:block items-stretch">*</div>
          <div className="flex flex-col space-y-4 items-start">
            <h1 className="text-lg font-bold bg-blue-200 inline-block p-2 md:inline-block rounded-r-full mb-5">
              Full Stack Developer
            </h1>
            <Image
              src="/assets/img/opstalent.png"
              alt="opstalent"
              className=" object-contain bg-gray-300 "
              width={200}
              height={50}
            />
            <h1 className="font-semibold">OpsTalent.com</h1>
            <p className="text-gray-700 text-justify">
              I have more than 2 years of experience in Full stack web
              development with React as frontend and Node.js, Laravel as backend
              and continues integration, deployment CI/CD, Docker, Kubernetes
              with Aws cloud hosting. Developed ecommerce to Blogging and
              utility web apps with latest technology like Socket.io, Webrtc,
              TypeORM, GraphQL, social media integration and yes also secure
              authentication and authorisation for frontend and backend. Like to
              work with Team and handy experience with Jira, etc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkExperienceComponent;
