import React, { Component } from "react";

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const date = this.calculateDate(this.props.date);
      // console.log(date);
      date ? this.setState(date) : this.stopCountdown();
    }, 1000);
  }
  /**
   * Given a date calculate the remaining time
   * @param {Date} date
   */
  calculateDate(date) {
    let difference =
      (Date.parse(new Date(date)) - Date.parse(new Date())) / 1000;
    if (difference <= 0) return false;

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
      millisec: 0
    };
    // calculate time difference between now and expected date
    //years
    if (difference >= 365.25 * 86400) {
      // 365.25 * 24 * 60 * 60
      timeLeft.years = Math.floor(difference / (365.25 * 86400));
      difference -= timeLeft.years * 365.25 * 86400;
    }
    //Days
    if (difference >= 86400) {
      // 24 * 60 * 60
      timeLeft.days = Math.floor(difference / 86400);
      difference -= timeLeft.days * 86400;
    }
    //Hours
    if (difference >= 3600) {
      // 60 * 60
      timeLeft.hours = Math.floor(difference / 3600);
      difference -= timeLeft.hours * 3600;
    }
    //Minutes
    if (difference >= 60) {
      timeLeft.min = Math.floor(difference / 60);
      difference -= timeLeft.min * 60;
    }

    //seconds
    timeLeft.sec = difference;

    return timeLeft;
  }

  stopCountdown() {
    clearInterval(this.interval);
  }

  render() {
    const countDown = this.state;

    return (
      <div>
        {countDown.days > 0 ? countDown.days + "d" : ""}{" "}
        {countDown.hours > 0 ? countDown.hours + "h" : ""}{" "}
        {countDown.min > 0 ? countDown.min + "m" : ""}{" "}
        {countDown.sec > 0 ? countDown.sec + "s remaining" : ""}
      </div>
    );
  }
}

export default Countdown;
