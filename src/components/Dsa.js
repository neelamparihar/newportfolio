import React from "react";
import checkmark from "../assets/checkmark.png";
const Dsa = () => {
  return (
    <section id="dsa">
      <div class="bg-black">
        <div class="text-amber-500 text-5xl text-center font-bold italic pb-12 ">
          DSA-Zone
        </div>
        <div class="bg-amber-300 w-1/2 mx-auto p-5 rounded-lg">
          <div class="flex py-1">
            <div class="flex flex-row bg-amber-300 ">
              <div class="">
                <img
                  src={checkmark}
                  alt="Experience icon"
                  class="w-5 h-5 mx-5 "
                />
              </div>
              <div class="">
                I have solved almost 1000+ DSA Problems on, Different-Different
                Coding Platforms.
              </div>
            </div>
          </div>
          <div class="flex py-1">
            <div class="flex flex-row bg-amber-300 ">
              <div class="">
                <img
                  src={checkmark}
                  alt="Experience icon"
                  class="w-5 h-5 mx-5 "
                />
              </div>
              <div class="">
                LeetCode 500+ Problem Solved || Max Rating 1500+ || Under 70k
                Rank
              </div>
            </div>
          </div>
          <div class="flex py-1">
            <div class="flex flex-row bg-amber-300 ">
              <div class="">
                <img
                  src={checkmark}
                  alt="Experience icon"
                  class="w-5 h-5 mx-5 "
                />
              </div>
              <div class="">
                GeeksForGeeks 500+ Problem Solved || 2000+ Score || top 30 Rank
                in Institue ||
              </div>
            </div>
          </div>
          <div class="flex ">
            <div class="flex flex-row bg-amber-300 ">
              <div class="">
                <img
                  src={checkmark}
                  alt="Experience icon"
                  class="w-5 h-5 mx-5 "
                />
              </div>
              <div class="">
                HackerRank 100+ Problem Solved || 5⭐ in Java || 2⭐ in SQL
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dsa;
