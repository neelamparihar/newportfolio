import React from "react";

const About = () => {
  return (
    <section id="about">
      <div class="bg-black pb-32">
        <div class=" text-amber-500 text-5xl text-center font-bold italic mb-24">
          About Me
        </div>
        <div class="flex flex-col md:flex-row">
          <div class="md:w-1/2">
            <div class=" text-white text-center text-2xl font-semibold italic my-5">
              Get To Know More
            </div>
            <div class=" bg-amber-500 text-center mx-24 rounded-full py-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110">
              <div class="font-bold text-xl">Interest</div>
              <div class="">
                Problem Solving And Data <br />
                Structure And Algorithm
              </div>
            </div>
            <div class=" bg-amber-500 text-center mx-24 rounded-full py-2 mt-5 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110">
              <div class="font-bold text-xl">Education</div>
              <div class="">
                B.tech in Computer Science
                <br />
                Final year Undergraduate
              </div>
            </div>
            <div class=" bg-amber-500 text-center mx-24 rounded-full py-2 mt-5 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110">
              <div class="font-bold text-xl">What's Special about me ?</div>
              <div class="">
                Ability to quickly Learn and Master a new skill and to implement
                it to solve a realtime problems
              </div>
            </div>
          </div>

          <div class="md:w-1/2 ">
            <div class="text-white text-center text-2xl font-semibold italic my-5">
              What I Do
            </div>
            <div class="">
              <div class="bg-amber-500 text-center mx-24 rounded-full py-2 px-2 mt-6 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110">
                <div class="font-bold text-xl">UI/UX Design</div>
                <div class="">
                  Create intuitive, visually pleasing, and <br /> highly
                  functional digital experiences
                </div>
              </div>
              <div class="bg-amber-500 text-center mx-24 rounded-full py-2 px-2 mt-6 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110">
                <div class="font-bold text-xl">Website Design</div>
                <div class="">
                  Transforming creative visions into stunning, user-friendly
                  websites that captivate, engage, and leave a lasting
                  impression.
                </div>
              </div>
              <div class="bg-amber-500 text-center mx-24 rounded-full py-2 px-2 mt-6 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110">
                <div class="font-bold text-xl">Web Application</div>
                <div class="">
                  With a blend of creativity and technical expertise, I build
                  digital platforms that empower businesses and individuals.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
