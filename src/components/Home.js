import React from "react";
import neelamphoto04 from "../assets/neelamphoto04.png";
import github from "../assets/github.png";
import linkedIn from "../assets/linkedIn.png";
import shape1 from "../assets/shape1.png";

const About = () => {
  return (
    <div class="flex flex-col md:flex-row  ">
      <div class="md:w-1/2 bg-black p-48">
        <div class="font-semibold text-4xl italic text-white">Hello,</div>
        <div class="font-bold text-6xl italic text-white">
          I'm <span class="text-amber-500">Neelam</span>
        </div>
        <div class="font-bold text-6xl italic text-amber-500">
          MERN developer
        </div>
        <div class="font-normal text-xl pt-5 text-white">
          I am skilled and passionate MERN stack developer with a strong love
          for creating web applications that makes a difference.
        </div>

        <a
          href="https://drive.google.com/file/d/1TBChYqqRRpM1Hi3tQOBnyjTjX-8yICdU/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            type="button"
            class="text-black bg-amber-500 m-10 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-amber-500 dark:text-black dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Download CV
          </button>
        </a>
      </div>
      <div class="md:w-1/2 bg-black">
        <div className="relative mt-10">
          <img src={shape1} alt="profile" class=" h-96 w-auto" />
          <img
            src={neelamphoto04}
            alt="profile"
            class=" absolute top-8 left-20  h-3/4 z-10 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110"
          />
        </div>

        <div className="flex flex-row">
          <a href="https://linkedin.com/in/neelamparihar/">
            <img
              src={linkedIn}
              alt="My LinkedIn profile"
              class="h-5 w-5 ml-64 mt-10"
              target="_blank"
              rel="noopener noreferrer"
            />
          </a>
          <a href="https://github.com/neelamparihar/">
            <img
              src={github}
              alt="My Github profile"
              class="h-5 w-5 ml-4 mt-10"
              target="_blank"
              rel="noopener noreferrer"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
