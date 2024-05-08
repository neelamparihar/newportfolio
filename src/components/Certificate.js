import React from "react";
import wipro from "../assets/wipro.png";
import persistent from "../assets/persistent.png";
import COA from "../assets/COA.png";
import infosys from "../assets/infosys.png";
import aws from "../assets/aws.png";
import codingninja from "../assets/codingninja.png";
const Certificate = () => {
  return (
    <section id="certificate">
      <div class="bg-black pb-24">
        <div class="text-amber-500 text-5xl text-center font-bold italic pb-8">
          Certification
        </div>
        <div class="flex flex-col md:flex-row justify-center mb-12">
          <div class="flex flex-row justify-center items-center mx-1">
            <div class="">
              <div>
                <img src={wipro} alt="Project 1" class="h-80 w-96 rounded-lg" />
              </div>
              <div class="text-xl text-white ml-4">
                Wipro talentnext - Java Full-Stack
              </div>
            </div>
          </div>
          <div class="flex flex-row justify-center items-center mx-1">
            <div class="">
              <div>
                <img
                  src={persistent}
                  alt="Project 1"
                  class="h-80 w-96 rounded-lg"
                />
              </div>
              <div class="text-xl text-white ml-4">Persistent Martian</div>
            </div>
          </div>

          <div class="flex flex-row justify-center items-center mx-1">
            <div class="">
              <div>
                <img src={COA} alt="Project 1" class="h-80 w-96 rounded-lg" />
              </div>
              <div class="text-xl text-white ml-4">
                Cisco Networking Academy-COA
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col md:flex-row justify-center">
          <div class="flex flex-row justify-center items-center mx-1">
            <div class="">
              <div>
                <img src={aws} alt="Project 1" class="h-80 w-96 rounded-lg" />
              </div>
              <div class="text-xl text-white ml-4">
                AWS - AWS Academy cloud foundation
              </div>
            </div>
          </div>
          <div class="flex flex-row justify-center items-center mx-1">
            <div class="">
              <div>
                <img
                  src={infosys}
                  alt="Project 1"
                  class="h-80 w-96 rounded-lg"
                />
              </div>
              <div class="text-xl text-white ml-4">
                Infosys - Programming using Java
              </div>
            </div>
          </div>

          <div class="flex flex-row justify-center items-center mx-1">
            <div class="">
              <div>
                <img
                  src={codingninja}
                  alt="Project 1"
                  class="h-80 w-96 rounded-lg"
                />
              </div>
              <div class="text-xl text-white ml-4">
                Coding Ninja - Data Structure and Algorithm
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificate;
