import React from "react";

// components

import CardStats from "components/Cards/CardStats.js";

export default function HeaderStats() {
  return (
    <>
      {/* Header */}
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-4/12 xl:w-4/12 px-4">
                <CardStats
                  statSubtitle="No. of Users"
                  statTitle="12"
                  
                  statIconName="fas fa-users"
                  statIconColor="bg-pink-500"
                  
                />
              </div>
              <div className="w-full lg:w-4/12 xl:w-4/12 px-4">
                <CardStats
                  statSubtitle="No. of Finite Automata"
                  statTitle="57"
                  
                  statIconName="fas fa-chart-pie"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-4/12 xl:w-4/12 px-4">
                <CardStats
                  statSubtitle="No. of Regular Languages"
                  statTitle="32"
                  
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
