"use client"

import React from "react";
import "./herostyles.css";
import { motion } from "framer-motion";
// import { ClientRequest } from "http";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="overlap-group">
            <div className="ellipse" />
            <div className="banner">
              <div className="div">
                <img className="oval" alt="Oval" src="oval.svg" />
                <img className="fill" alt="Fill" src="fill-42.svg" />
                <img className="img" alt="Fill" src="fill-57.svg" />
                <img className="fill-copy" alt="Fill copy" src="fill-57-copy.svg" />
                <img className="fill-2" alt="Fill" src="fill-58.svg" />
                <img className="fill-3" alt="Fill" src="fill-64.svg" />
                <img className="fill-4" alt="Fill" src="fill-65.svg" />
                <img className="fill-5" alt="Fill" src="fill-72.svg" />
                <img className="fill-copy-2" alt="Fill copy" src="fill-72-copy.svg" />
                <img className="fill-6" alt="Fill" src="fill-84.svg" />
                <img className="fill-7" alt="Fill" src="fill-88.svg" />
                <div className="group">
                  <div className="div-wrapper">
                    <div className="text-wrapper">Learn More</div>
                  </div>
                </div>
                <div className="welcome-back-diane">WELCOME BACK!</div>
                <p className="you-have-completed">
                  You have completed 60% of your goal this week!
                  <br />
                  start a new goal and improve your result
                </p>
                <img className="artboard" alt="Artboard" src="artboard-7.svg" />
              </div>
            </div>
            <button className="rectangle"/>
            <div className="text-wrapper-2">Previous Student Audit</div>
          </div>
          <div className="overlap-2">
            <div className="ellipse-2" />
            <img className="rectangle-2" alt="Rectangle" src="rectangle-15.svg" />
            <div className="text-wrapper-3">Register New Student</div>
          </div>
        </div>
      </div>
    </div>
  );
};