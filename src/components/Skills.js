import React from "react";
import checkmark from "../assets/checkmark.png";
const Skills = () => {
  return (
    <section id="skills">
      <div class="bg-black py-28">
        <div class="text-amber-500 text-5xl text-center font-bold italic mb-10 ">
          Skills
        </div>
        <div class="flex flex-col md:flex-row mx-0 md:mx-56">
          <div class="bg-amber-400 md:w-1/2">
            <div class=" text-2xl font-bold text-center m-4 ">
              Full Stack Development
            </div>
            <div class="flex flex-row">
              <img src={checkmark} alt="Experience icon" class="w-5 h-5 mx-5" />
              <div>
                <h3 class="font-bold ">HTML</h3>
                <p class="text-xs text-slate-600">Experienced</p>
              </div>
            </div>
            <div class="flex flex-row">
              <img
                src={checkmark}
                alt="Experience icon"
                class="w-5 h-5 mx-5 "
              />
              <div>
                <h3 class="font-bold">CSS</h3>
                <p class="text-xs text-slate-600">Experienced</p>
              </div>
            </div>
            <div class="flex flex-row">
              <img src={checkmark} alt="Experience icon" class="w-5 h-5 mx-5" />
              <div>
                <h3 class="font-bold">ReactJs</h3>
                <p class="text-xs text-slate-600">Intermediate</p>
              </div>
            </div>
            <div class="flex flex-row">
              <img src={checkmark} alt="Experience icon" class="w-5 h-5 mx-5" />
              <div>
                <h3 class="font-bold">JavaScript</h3>
                <p class="text-xs text-slate-600">Intermediate</p>
              </div>
            </div>
            <div class="flex flex-row">
              <img src={checkmark} alt="Experience icon" class="w-5 h-5 mx-5" />
              <div>
                <h3 class="font-bold">NodeJs</h3>
                <p class="text-xs text-slate-600">Intermediate</p>
              </div>
            </div>
            <div class="flex flex-row">
              <img src={checkmark} alt="Experience icon" class="w-5 h-5 mx-5" />
              <div>
                <h3 class="font-bold">MongoDB</h3>
                <p class="text-xs text-slate-600">Basic</p>
              </div>
            </div>
          </div>
          <div class="bg-amber-300 md:w-1/2">
            <h2 class="text-2xl font-bold text-center m-4">
              Languages & technologies
            </h2>
            <div class="">
              <div class="flex flex-row">
                <img
                  src={checkmark}
                  alt="Experience icon"
                  class="w-5 h-5 mx-5 "
                />
                <div>
                  <h3 class="font-bold">Java</h3>
                  <p class="text-xs text-slate-600">Experienced</p>
                </div>
              </div>
              <div class="flex flex-row">
                <img
                  src={checkmark}
                  alt="Experience icon"
                  class="w-5 h-5 mx-5"
                />
                <div>
                  <h3 class="font-bold">C/C++</h3>
                  <p class="text-xs text-slate-600">Intermediate</p>
                </div>
              </div>
              <div class="flex flex-row">
                <img
                  src={checkmark}
                  alt="Experience icon"
                  class="w-5 h-5 mx-5"
                />
                <div>
                  <h3 class="font-bold">SQL</h3>
                  <p class="text-xs text-slate-600">Intermediate</p>
                </div>
              </div>
              <div class="flex flex-row">
                <img
                  src={checkmark}
                  alt="Experience icon"
                  class="w-5 h-5 mx-5"
                />
                <div>
                  <h3 class="font-bold">Git/Github</h3>
                  <p class="text-xs text-slate-600">Experienced</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
