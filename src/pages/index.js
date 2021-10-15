import React, { useEffect, useRef, useState } from "react";
import HeaderCompoent from "../components/HeaderCompoent";
import NavMenuComponent from "../components/NavMenuComponent";
import ProfileCardComponent from "../components/ProfileCardComponent";
import IndexPageComponent from "../sections/IndexPageComponent";
import WorkExperienceComponent from "../sections/WorkExperienceComponent";
import ContactMeComponent from "../sections/ContactMeComponent";
import { motion } from "framer-motion";

const initialState = {
  scroll: false,
  navToggle: false,
};

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function IndexPage() {
  const [state, setstate] = useState(initialState);
  const inputEl = useRef(null);

  const handleScroll = (e) => {
    // console.log("e", window.pageYOffset);
    if (window.pageYOffset >= 100) {
      setstate({ ...state, scroll: true });
    } else {
      setstate({ ...state, scroll: false });
    }
  };

  useEffect((e) => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const toggleNav = () => {
    setstate({ ...state, navToggle: !state.navToggle });
  };

  return (
    <main
      className="w-full h-full flex overflow-auto absolute top-0 left-0 "
      style={{
        backgroundImage: `url(assets/img/background.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <motion.div
        className={`sticky self-start  mx-10 left-5 w-1/5 hidden md:block transition-all delay-200 ${
          state.scroll ? "top-5 " : "top-20 "
        }`}
      >
        <ProfileCardComponent />
      </motion.div>
      <div
        className="w-full h-full md:w-8/12 md:mx-5 self-center overflow-auto flex flex-col"
        ref={inputEl}
        onScroll={handleScroll}
      >
        <HeaderCompoent nav={state.navToggle} toggleNav={toggleNav} />
        <div className="px-2 md:px-0">
          <IndexPageComponent />
          <WorkExperienceComponent />
          <ContactMeComponent />
        </div>
      </div>
      <div className="fixed right-0 top-5 mx-10 w-1/12 md:hidden">
        <NavMenuComponent toggleNav={toggleNav} />
      </div>
    </main>
  );
}

export default IndexPage;
