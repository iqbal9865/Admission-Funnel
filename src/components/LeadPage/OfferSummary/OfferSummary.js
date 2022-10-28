import React from "react";
import { useState, useEffect, useRef } from "react";
import OfferSummaryCSS from "./OfferSummary.module.css";
import OptinForm from "../OptinForm/OptinForm";
import offerimg from "../../../images/Admission_banner.gif";
import logo from "../../../images/BC-removebg-preview.png";
const OfferSummary = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinites, setTimerMinites] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date("December 10, 2022 00:00:00").getTime();
    interval.current = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minites = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinites(minites);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <div
      style={{ backgroundColor: "#23303F" }}
      className={`container-fluid p-5 ${OfferSummaryCSS.topSection}`}
    >
      <div className="row py-5">
        <div className="col-md-6 p-4">
          <h1
            style={{ color: "#FA9516", fontWeight: "700" }}
            className="mx-3 px-2 py-3 mt-3"
          >
            50% OFF FOR SPRING SEMESTER 2021
          </h1>

          <img src={logo} alt="..." className="img-fluid w-50" />
          <h4 style={{ color: "white", fontWeight: "700" }} className="pt-2">
            10 December - 30 December
          </h4>

          <div
            style={{ color: "white" }}
            className="timer d-flex align-items-center justify-content-center my-3"
          >
            <section className="mx-3">
              <h3 style={{ color: "#FA9516", fontWeight: "700" }}>
                {timerDays}
              </h3>
              <h4>Days</h4>
            </section>

            <section className="mx-3">
              <h3 style={{ color: "#FA9516", fontWeight: "700" }}>
                {timerHours}
              </h3>
              <h4>Hours</h4>
            </section>

            <section className="mx-3">
              <h3 style={{ color: "#FA9516", fontWeight: "700" }}>
                {timerMinites}
              </h3>
              <h4>Minites</h4>
            </section>
            <section className="mx-3">
              <h3 style={{ color: "#FA9516", fontWeight: "700" }}>
                {timerSeconds}
              </h3>
              <h4>Seconds</h4>
            </section>
          </div>

          <div className="pb-2">
            <OptinForm />
            <p
              className="mx-5 px-5"
              style={{ color: "white", textAlign: "left", marginTop: "4px" }}
            >
              Submit Your Email To See More Details
            </p>
          </div>
        </div>
        <div className="col-md-6 p-5">
          <img className="img-fluid pt-5 w-75" src={offerimg} alt="" />
        </div>
      </div>
    </div>
  );
};
export default OfferSummary;
