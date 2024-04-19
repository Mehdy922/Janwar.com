import React, { useState } from "react";

export default function CardProfile() {
  const handleDeleteAccount = () => {
    // Add logic to delete the account
  };

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center">
              <div className="relative">
                <img
                  alt="..."
                  src={require("assets/img/team-member-avatar.png").default}
                  className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-10 max-w-150-px"
                />
              </div>
            </div>
            <div className="w-full px-4 text-center mt-20">
              <div className="flex justify-center py-4 lg:pt-4 pt-8">
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    12
                  </span>
                  <span className="text-sm text-blueGray-400">Automata</span>
                </div>
                <div className="p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    8
                  </span>
                  <span className="text-sm text-blueGray-400">Languages</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
            <div className="text-center mt-12">
              <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                John Doe
              </h3>
              <div className="flex items-center justify-center w-full mb-2 text-blueGray-600">
                <i className="fas fa-envelope mr-2 text-lg text-blueGray-400"></i>
                johndoe@example.com
              </div>
            </div>
            <br />
            <div className="px-6 pb-6">
              <button
                className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
                onClick={handleDeleteAccount}
              >
                Delete Account
              </button>
            </div>

          </div>
          <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="flex items-center justify-center w-full mb-2 text-blueGray-600">
                <i className="fas fa-venus-mars mr-2 text-lg text-blueGray-400"></i>
                Male
              </div>
              <div className="flex items-center justify-center w-full mb-2 text-blueGray-600">
                <i className="fas fa-calendar-alt mr-2 text-lg text-blueGray-400"></i>
                January 1, 1990
              </div>
            </div>
            <div className="flex flex-wrap justify-center">
              <div className="flex items-center justify-center w-full mb-2 text-blueGray-600">
                <i className="fas fa-graduation-cap mr-2 text-lg text-blueGray-400"></i>
                BS Computer Science
              </div>
              <div className="flex items-center justify-center w-full mb-2 text-blueGray-600">
                <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                FAST NUCES Lahore
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
