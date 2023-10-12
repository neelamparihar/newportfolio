import React from "react";
import bloodbank from "../assets/bloodbank.png";
import ecommerce from "../assets/ecommerce.jpg";
import resort4 from "../assets/resort4.jpg";
const Project = () => {
  return (
    <section id="project">
      <div class="bg-black">
        <div class="text-amber-500 text-5xl text-center font-bold italic mb-12">
          Projects
        </div>
        <div class="pb-20">
          <div class=" flex flex-col md:flex-row justify-center mb-4 ">
            <div class="bg-amber-400 rounded-lg mb:5 mx-5 md:mb-4 ">
              <div class=" flex justify-center items-center p-2">
                <img
                  src={bloodbank}
                  alt="Project 1"
                  class="h-48 w-48 rounded-lg"
                />
              </div>
              <h2 class="text-2xl font-bold text-center">Blood Bank</h2>
              <div class="flex justify-center items-center  md:justify-center md:items-center ">
                <button
                  type="button"
                  class="text-black bg-orange-500 m-2 hover:bg-slate-700  font-medium rounded-lg text-sm px-4 py-2 text-center"
                >
                  Github
                </button>
                <button
                  type="button"
                  class="text-black bg-orange-500 m-2 hover:bg-slate-700  font-medium rounded-lg text-sm px-4 py-2 text-center "
                >
                  Live Demo
                </button>
              </div>
            </div>
            <div class="bg-amber-400 rounded-lg mx-5">
              <div class=" flex justify-center items-center p-3">
                <img
                  src={resort4}
                  alt="Project 2"
                  class="h-48 w-48 rounded-lg"
                />
              </div>
              <h2 class="text-2xl font-bold text-center">Event-Booking</h2>
              <div class="flex justify-center items-center  md:justify-center md:items-center">
                <button
                  type="button"
                  class="text-black bg-orange-500 m-2 hover:bg-slate-700  font-medium rounded-lg text-sm px-4 py-2 text-center"
                >
                  Github
                </button>
                <button
                  type="button"
                  class="text-black bg-orange-500 m-2 hover:bg-slate-700  font-medium rounded-lg text-sm px-4 py-2 text-center"
                >
                  Live Demo
                </button>
              </div>
            </div>
            <div class="bg-amber-400 rounded-lg mx-5 ">
              <div class="p-2 flex justify-center items-center">
                <img
                  src={ecommerce}
                  alt="Project 3"
                  class="h-48 w-48 rounded-lg"
                />
              </div>
              <h2 class="text-2xl font-bold text-center">Shipkart</h2>
              <div class="flex justify-center items-center  md:justify-center md:items-center">
                <button
                  type="button"
                  class="text-black bg-orange-500 m-2 hover:bg-slate-700  font-medium rounded-lg text-sm px-4 py-2 text-center"
                >
                  Github
                </button>
                <button
                  type="button"
                  class="text-black bg-orange-500 m-2 hover:bg-slate-700  font-medium rounded-lg text-sm px-4 py-2 text-center"
                >
                  Live Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
