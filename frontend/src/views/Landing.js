import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

// components

import Navbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

import { ReactComponent as GitHubIcon } from '../assets/img/github.svg';
import { ReactComponent as LinkedInIcon } from '../assets/img/linkedin.svg';

export default function Landing() {
  const [contactData, setContactData] = useState({
    fullName: "",
    email: "",
    message: ""
  });

  const handleContactChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const sendMessage = async () => {
    try {
      await axios.post('http://localhost:5050/api/email/send-email', contactData);
      await axios.post('https://jthlkvevyvukeufc.l.tunwg.com/api/email/send-email', contactData);
      //await axios.post('https://back.nullprime.com/api/email/send-email', contactData);
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message');
    }
  };
  
  return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://www.uib.no/sites/w3.uib.no/files/styles/content_main_wide_1x/public/media/algo10.jpg?itok=8XuWh17b&timestamp=1579187116')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-bold text-5xl">    AutoSim</h1>
                  <p className="mt-4 text-xl text-blueGray-100 lg:hidden">        a finite automata simulator</p>
                  <p className="mt-4 text-xl text-blueGray-100 hidden lg:block">         — a finite automata simulator —</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="pt-1 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-award"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Learn</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Learn the basics of automata theory...
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-1 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                      <i className="fas fa-retweet"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Design</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Design your own finite automata...
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-1 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <i className="fas fa-fingerprint"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Test</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Test the correctness of your machines...
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-user-friends text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  A tool to improve your productivity
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  Helping you learn one of the most important topics in CS...
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                  Use AutoSim to aid your studies and improve your grades!
                </p>
                <Link to="/auth/login" className="font-bold text-blueGray-700 mt-8">
                  Let's go and check it out!<br /> 
                </Link>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                  <img
                    alt="..."
                    src={require("assets/img/ThueMorseAutomaton.png").default}
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-lightBlue-500 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Finite Automata
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                    A finite automaton (FA) is a simple idealized machine used to recognize patterns within input taken from some character set (or alphabet) C. The job of an FA is to accept or reject an input depending on whether the pattern defined by the FA occurs in the input.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Our Team</h2>
                <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                  We are students of BS Computer Science at FAST-NUCES, Lahore.
                  <br />
                  This web app is our Software Engineering (BCS-6F) course project.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-4/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("assets/img/team-member-avatar.png").default}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Sultan Ahmad</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      21L-7560
                    </p>
                    <div className="mt-6">
                      <a href="https://www.linkedin.com/in/sultan-ahmad-2b753b260/"><button
                        className="bg-white text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <LinkedInIcon className="h-full w-full" />
                      </button></a>
                      <a href="https://github.com/SultanAhmad7560/"><button
                        className="bg-white text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <GitHubIcon className="h-full w-full" />
                      </button></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-4/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("assets/img/team-member-avatar.png").default}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">M. Asad Tariq</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      21L-5266
                    </p>
                    <div className="mt-6">
                      <a href="https://www.linkedin.com/in/m-asad-tariq/"><button
                        className="bg-white text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <LinkedInIcon className="h-full w-full" />
                      </button></a>
                      <a href="https://github.com/ASD0x41/"><button
                        className="bg-white text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <GitHubIcon className="h-full w-full" />
                      </button></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-4/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("assets/img/team-member-avatar.png").default}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Mudesser Ahmad</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      21L-5387
                    </p>
                    <div className="mt-6">
                      <a href="https://pk.linkedin.com/in/mudesser-ahmad-489a78228/"><button
                        className="bg-white text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <LinkedInIcon className="h-full w-full" />
                      </button></a>
                      <a href="https://github.com/MudesserAhmad/"><button
                        className="bg-white text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <GitHubIcon className="h-full w-full" />
                      </button></a>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 relative block bg-blueGray-800">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-800 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  <br />Master Automata Theory
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
                  Theory of Automata is one of the most fundamental topic in CS.
                  <br />
                  Master it using the AutoSim web app to get a fabulous grade!
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-medal text-xl"></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  Test Preparation
                </h6>
                <p className="mt-2 mb-4 text-blueGray-400">
                  Prepare for your tests by trying out various designs on the simulator rather than having to do the tedious task of drawing them on paper.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-poll text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Answer Verification
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                  Check your answers using the simulator before submitting your assignments so that you don't lose marks from a careless mistake.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-lightbulb text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Learning Aid
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                  Strengthen your concepts by learning about the notations and the definitions of the terminology associated with the theory of automata.
                </p>
                <br />
              </div>
            </div>
          </div>
        </section>
        <section className="relative block py-24 lg:pt-0 bg-blueGray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                      Contact Us
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                      Have any comment, feedback, suggestion, complaint or feature request?
                      We would love to hear from you!
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Full Name"
                        id="contactname"
                        name="name"
                        value={contactData.name}
                        onChange={handleContactChange}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Email Address"
                        id="contactemail"
                        name="email"
                        value={contactData.email}
                        onChange={handleContactChange}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Type a message..."
                        id="contactmsg"
                        name="message"
                        value={contactData.message}
                        onChange={handleContactChange}
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={sendMessage}
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
