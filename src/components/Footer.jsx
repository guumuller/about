import { useEffect, useState } from "react";

const Footer = () => {
  const [timeElapsed, setTimeElapsed] = useState("");

  useEffect(() => {
    const startDate = new Date("2025-02-16T00:00:00");
    const interval = setInterval(() => {
      const now = new Date();
      const diff = now - startDate;

      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
      const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const seconds = Math.floor((diff % (1000 * 60 * 60)) / 1000);

      setTimeElapsed(`${years} years, ${days} days, ${hours} hours, ${seconds} seconds`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="py-4 bg-gray-800 text-center text-white">
      <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      <p className="mt-2">
        {timeElapsed} of developing software.
      </p>
    </footer>
  );
};

export default Footer;
