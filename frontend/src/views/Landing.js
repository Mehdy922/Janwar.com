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
            className="absolute top-40 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://www.southernliving.com/thmb/K59pQNwwQy8a01M1u6zkIycohXM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1312619551-15706e976a2d4e48bfedbf92bd4421c2.jpg')",
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
                  <h1 className="text-white font-bold text-5xl">    Janwar</h1>
                  <p className="mt-4 text-xl text-blueGray-100 lg:hidden">        An Online Pet Market-Place</p>
                  <p className="mt-4 text-xl text-blueGray-100 hidden lg:block">         — An Online Pet Market-Place —</p>
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
              viewBox="`0 0 2560 2560"
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
                      <i className="fas fa-money-bill-wave"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Buy</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                    Find your perfect companion and bring home joy by exploring our diverse selection of pets.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-1 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                      <i class="fas fa-home"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Adopt</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                    Open your heart and home to a furry friend by adopting a pet in need of love.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-1 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <i className="fas fa-bone"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Sell</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                    Let us help you find the right home for your pet when you're ready to sell.
                    </p>
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
          <br />Discover Your Perfect Pet
        </h2>
        <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
          Explore a wide range of pets available for adoption or purchase. <br />
          Our online marketplace makes it easy to find your new best friend and bring them home.
        </p>
      </div>
    </div>
    <div className="flex flex-wrap mt-12 justify-center">
      <div className="w-full lg:w-3/12 px-4 text-center">
        <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
          <i className="fas fa-search text-xl"></i>
        </div>
        <h6 className="text-xl mt-5 font-semibold text-white">
          Pet Listings
        </h6>
        <p className="mt-2 mb-4 text-blueGray-400">
          Browse through diverse listings to find the perfect match for your family.
        </p>
      </div>
      <div className="w-full lg:w-3/12 px-4 text-center">
        <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
          <i className="fas fa-lock text-xl"></i>
        </div>
        <h6 className="text-xl mt-5 font-semibold text-white">
          Secure Transactions
        </h6>
        <p className="mt-2 mb-4 text-blueGray-400">
          Enjoy peace of mind with our secure transaction system, designed to protect both buyers and sellers throughout the process.
        </p>
      </div>
      <div className="w-full lg:w-3/12 px-4 text-center">
        <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
          <i className="fas fa-users text-xl"></i>
        </div>
        <h6 className="text-xl mt-5 font-semibold text-white">
          Community Engagement
        </h6>
        <p className="mt-2 mb-4 text-blueGray-400">
          Join a community of pet lovers to share experiences and tips. Connect with others who share your passion for animals.
        </p>
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
                    <h5 className="text-xl font-bold">Hasnain Fatmi</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      21L-1773
                    </p>
                    <div className="mt-6">
                      <a href="https://www.linkedin.com/in/sultan-ahmad-2b753b260/"><button
                        className="bg-white text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <LinkedInIcon className="h-full w-full" />
                      </button></a>
                      <a href="https://github.com/Hasnain-Fatmi/"><button
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
                    <h5 className="text-xl font-bold">Umair Bin Asim</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      21L-1847
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
                    <h5 className="text-xl font-bold">Mehdy Hasnain</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      21L-1784
                    </p>
                    <div className="mt-6">
                      <a href="https://pk.linkedin.com/in/mudesser-ahmad-489a78228/"><button
                        className="bg-white text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <LinkedInIcon className="h-full w-full" />
                      </button></a>
                      <a href="https://github.com/Mehdy922/"><button
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
      </main>
      <Footer />
    </>
  );
}
