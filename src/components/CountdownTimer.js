import { useState, useEffect } from "react";
import timerSound from "../lib/timer_end.mp3";

export default function CountdownTimer({ label, targetDate }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        years: Math.floor(difference / (1000 * 60 * 60 * 24 * 365)),
        months: Math.floor(
          (difference % (1000 * 60 * 60 * 24 * 365)) /
            (1000 * 60 * 60 * 24 * 30)
        ),
        days: Math.floor(
          (difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
        ),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  let isTimerExpired =
    timeLeft.years === 0 &&
    timeLeft.months === 0 &&
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds - 10 === 0
      ? true
      : false;

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  if (isTimerExpired) {
    const audio = new Audio(timerSound);
    audio.play();
  }
  return (
    <div className="countdown_timer style_basic">
      {timeLeft.years !== undefined ? (
        <>
          <h1>{label}</h1>
          <div className="timer">
            <span>{timeLeft.years} years :</span>
            <span> {timeLeft.months} months :</span>
            <span> {timeLeft.days} days :</span>
            <span> {timeLeft.hours} hours :</span>
            <span> {timeLeft.minutes} minutes :</span>
            <span> {timeLeft.seconds} seconds</span>
          </div>
        </>
      ) : (
        <h1 className="timer_end">Timer Ended!</h1>
      )}
    </div>
  );
}
