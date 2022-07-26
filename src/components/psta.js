import React from "react";
import "./PstaStyle.css";
import "./Cards.css";
import CardItem from "./CardItem";

import { Link } from "react-router-dom";

import Pod from "../assets/pod.jpg";
import Moon from "../assets/moon.jpg";

const Training = () => {
  return (
    <div className="training">
      <div className="left">
        <h1> </h1>
        <p align="left">
          <p>
            <h2>PSTA BLOCK</h2>
            <u>
              {" "}
              <h3></h3>
            </u>
          </p>
        </p>
        <div className="cards">
          <h1></h1>
          <div className="cards__container">
            <div className="cards__wrapper">
              <ul className="cards__items">
                <CardItem
                  src="images/pic1.jpeg"
                  text="LIBRARY"
                  label="FLOOR1"
                  path="/library"
                />
                <CardItem
                  src="images/of.png"
                  text="OFFICE"
                  label="FLOOR1"
                  path="/office1"
                />
                <CardItem
                  src="images/dr.jpg"
                  text="DIRECTOR OFFICE"
                  label="FLOOR1"
                  path="/director"
                />
              </ul>
              <ul className="cards__items">
                <CardItem
                  src="images/vp1.jpg"
                  text="VICE PRINCIPLE OFFICE"
                  label="FLOOR1"
                  path="/vp"
                />
                <CardItem
                  src="images/bd.jpg"
                  text="BOARD ROOM"
                  label="FLOOR1"
                  path="/board"
                />
                <CardItem
                  src="images/class.jpg"
                  text="Classroom C-209"
                  label="FLOOR1"
                  path="/class"
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="image-stack top">
            <img src={Moon} className="img" alt="" />
          </div>
          <div className="image-stack bottom">
            <img src={Pod} className="img" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
