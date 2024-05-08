import React from "react";
import bloodbank from "../assets/bloodbank.png";
import ecom3 from "../assets/ecom3.jpg";
import resort4 from "../assets/resort4.jpg";
import route53 from "../assets/route53.jpg";
import airbnb from "../assets/airbnb.jpg";
import jobsearch from "../assets/jobsearch.jpg";
const Project = () => {
  return (
    <section id="project">
      <div class="bg-black">
        <div class="text-amber-500 text-5xl text-center font-bold italic mb-12">
          Projects
        </div>
        <div class="pb-20">
          <div class=" flex flex-col md:flex-row justify-center mb-4 ">
            <div class="bg-amber-400 rounded-lg mx-5 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 ">
              <div class=" flex justify-center items-center p-2">
                <img
                  src={bloodbank}
                  alt="Project 1"
                  class="h-48 w-48 rounded-lg"
                />
              </div>
              <h2 class="text-2xl font-bold text-center">LifeLine</h2>
              <div class="flex justify-center items-center  md:justify-center md:items-center ">
                <a
                  href="https://github.com/neelamparihar/blood-bank"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    type="button"
                    class="text-black bg-orange-500 m-2 hover:bg-slate-700  font-medium rounded-lg text-sm px-4 py-2 text-center"
                  >
                    Github
                  </button>
                </a>
                <a
                  href="https://github.com/neelamparihar/blood-bank"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    type="button"
                    class="text-black bg-orange-500 m-2 hover:bg-slate-700  font-medium rounded-lg text-sm px-4 py-2 text-center"
                  >
                    Link
                  </button>
                </a>
              </div>
            </div>
            <div class="bg-amber-400 rounded-lg mx-5 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110">
              <div class=" flex justify-center items-center p-2">
                <img
                  src={resort4}
                  alt="Project 2"
                  class="h-48 w-48 rounded-lg"
                />
              </div>
              <h2 class="text-2xl font-bold text-center">Event-Booking</h2>
              <div class="flex justify-center items-center  md:justify-center md:items-center">
                <a
                  href="https://github.com/neelamparihar/Nishkareventbooking"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    type="button"
                    class="text-black bg-orange-500 m-2 hover:bg-slate-700  font-medium rounded-lg text-sm px-4 py-2 text-center"
                  >
                    Github
                  </button>
                </a>
                <a
                  href="https://test-three-chi-49.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    type="button"
                    class="text-black bg-orange-500 m-2 hover:bg-slate-700  font-medium rounded-lg text-sm px-4 py-2 text-center"
                  >
                    Link
                  </button>
                </a>
              </div>
            </div>
            <div class="bg-amber-400 rounded-lg mx-5 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110">
              <div class="p-2 flex justify-center items-center">
                <img src={ecom3} alt="Project 3" class="h-48 w-48 rounded-lg" />
              </div>
              <h2 class="text-2xl font-bold text-center">Shipkart</h2>
              <div class="flex justify-center items-center  md:justify-center md:items-center">
                <a
                  href="https://github.com/neelamparihar/shipkart"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    type="button"
                    class="text-black bg-orange-500 m-2 hover:bg-slate-700  font-medium rounded-lg text-sm px-4 py-2 text-center"
                  >
                    Github
                  </button>
                </a>
                <a
                  href="https://github.com/neelamparihar/shipkart"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    type="button"
                    class="text-black bg-orange-500 m-2 hover:bg-slate-700  font-medium rounded-lg text-sm px-4 py-2 text-center"
                  >
                    Link
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="pb-20">
          <div class=" flex flex-col md:flex-row justify-center mb-4 ">
            <div class="bg-amber-400 rounded-lg mx-5 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 ">
              <div class=" flex justify-center items-center p-2">
                <img
                  src={route53}
                  alt="Project 1"
                  class="h-48 w-48 rounded-lg"
                />
              </div>
              <h2 class="text-2xl font-bold text-center">DNS-Manager</h2>
              <div class="flex justify-center items-center  md:justify-center md:items-center ">
                <a
                  href="https://github.com/neelamparihar/DNSZoneManager"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    type="button"
                    class="text-black bg-orange-500 m-2 hover:bg-slate-700  font-medium rounded-lg text-sm px-4 py-2 text-center"
                  >
                    Github
                  </button>
                </a>
                <a
                  href="https://dns-zone-manager.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    type="button"
                    class="text-black bg-orange-500 m-2 hover:bg-slate-700  font-medium rounded-lg text-sm px-4 py-2 text-center"
                  >
                    Link
                  </button>
                </a>
              </div>
            </div>
            <div class="bg-amber-400 rounded-lg mx-5 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110">
              <div class=" flex justify-center items-center p-2">
                <img
                  src={airbnb}
                  alt="Project 2"
                  class="h-48 w-48 rounded-lg"
                />
              </div>
              <h2 class="text-2xl font-bold text-center">BucketLister</h2>
              <div class="flex justify-center items-center  md:justify-center md:items-center">
                <a
                  href="https://github.com/neelamparihar/airbnb_booking_app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    type="button"
                    class="text-black bg-orange-500 m-2 hover:bg-slate-700  font-medium rounded-lg text-sm px-4 py-2 text-center"
                  >
                    Github
                  </button>
                </a>
                <a
                  href="https://airbnb-booking-app-pi.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    type="button"
                    class="text-black bg-orange-500 m-2 hover:bg-slate-700  font-medium rounded-lg text-sm px-4 py-2 text-center"
                  >
                    Link
                  </button>
                </a>
              </div>
            </div>
            <div class="bg-amber-400 rounded-lg mx-5 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110">
              <div class="p-2 flex justify-center items-center">
                <img
                  src={jobsearch}
                  alt="Project 3"
                  class="h-48 w-48 rounded-lg"
                />
              </div>
              <h2 class="text-2xl font-bold text-center">JobHub</h2>
              <div class="flex justify-center items-center  md:justify-center md:items-center">
                <a
                  href="https://github.com/neelamparihar/blood-bank"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    type="button"
                    class="text-black bg-orange-500 m-2 hover:bg-slate-700  font-medium rounded-lg text-sm px-4 py-2 text-center"
                  >
                    Github
                  </button>
                </a>
                <a
                  href="https://github.com/neelamparihar/blood-bank"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    type="button"
                    class="text-black bg-orange-500 m-2 hover:bg-slate-700  font-medium rounded-lg text-sm px-4 py-2 text-center"
                  >
                    Link
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
