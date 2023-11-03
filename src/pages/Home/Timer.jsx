import React, { useState, useEffect, useMemo } from "react";

export const Timer = () => {
  const targetDate = useMemo(() => new Date("Nov 1, 2024 00:00:00").getTime(), []);

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const timeDifference = targetDate - now;

      if (timeDifference > 0) {
        const daysRemaining = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hoursRemaining = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutesRemaining = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

        setDays(daysRemaining);
        setHours(hoursRemaining);
        setMinutes(minutesRemaining);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
    <section className="timer">
      <h6>Première version jouable</h6>
      <article className="clocksection">
        <div className="clock">
          <div className="container">
            <div className="column">
              <h2 id="day">{days < 10 ? `0${days}` : days}</h2>
              <p>Jours</p>
            </div>
            <h2 className="dot">:</h2>
            <div className="column">
              <h2 id="hour">{hours < 10 ? `0${hours}` : hours}</h2>
              <p>Heures</p>
            </div>
            <h2 className="dot">:</h2>
            <div className="column">
              <h2 id="minute">{minutes < 10 ? `0${minutes}` : minutes}</h2>
              <p>Minutes</p>
            </div>
          </div>
        </div>
      </article>
      <p>Revenez plus tard !</p>
    </section>
  );
}

