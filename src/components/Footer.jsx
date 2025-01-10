import { useState, useEffect } from "react";

const Footer = () => {
  const startDate = new Date("2020-02-16T00:00:00"); // Data de início (16 de fevereiro de 2020)
  
  const calculateTimeElapsed = () => {
    const now = new Date();
    const timeDiff = now - startDate;
    
    const years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24)) % 365;
    const hours = Math.floor(timeDiff / (1000 * 60 * 60)) % 24;
    const minutes = Math.floor(timeDiff / (1000 * 60)) % 60;
    const seconds = Math.floor(timeDiff / 1000) % 60;

    return { years, days, hours, minutes, seconds };
  };

  const [timeElapsed, setTimeElapsed] = useState(calculateTimeElapsed());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeElapsed(calculateTimeElapsed());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="py-4 bg-gray-800 text-center text-white">
      <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      <p>
        I've been developing software for{" "}
        {timeElapsed.years} years, {timeElapsed.days} days, {timeElapsed.hours} hours,{" "}
        {timeElapsed.minutes} minutes, and {timeElapsed.seconds} seconds.
      </p>
    </footer>
  );
};

export default Footer;
