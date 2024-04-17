import React from "react";

// components

import CardAutomata from "components/Cards/CardAutomata.js";
import CardLanguages from "components/Cards/CardLanguages.js";

export default function Dashboard() {
  return (
    <>
      
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
          <CardAutomata />
        </div>
        <div className="w-full xl:w-6/12 px-4">
          <CardLanguages />
        </div>
      </div>
    </>
  );
}
