// src/CountdownTimer.tsx
import React, { useCallback, useEffect, useState } from "react";

interface CountdownTimerProps {
  endDate: Date | null;
}

export const Countdown: React.FC<CountdownTimerProps> = ({ endDate }) => {
  const calculateTimeLeft = useCallback(() => {
    const now = new Date().getTime();
    const timeRemaining = endDate && endDate.getTime() - now;
    let timeLeft = {};

    if (timeRemaining) {
      timeLeft = {
        days: Math.floor(timeRemaining / (1000 * 60 * 60 * 24)),
        hours: Math.floor((timeRemaining / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((timeRemaining / 1000 / 60) % 60),
        seconds: Math.floor((timeRemaining / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  }, [endDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft, endDate]);

  const timerComponents: JSX.Element[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval as keyof typeof timeLeft]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval as keyof typeof timeLeft]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className="flex text-sm gap-1 bg-white px-3 py-2 rounded-md">
      {timerComponents.length ? (
        timerComponents
      ) : (
        <span className="text-red-500">This flash sale has ended!</span>
      )}
    </div>
  );
};
