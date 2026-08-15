"use client";

import { useState, useEffect } from "react";

interface CurrentTimeProps {
  className?: string;
  style?: React.CSSProperties;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function CurrentTime({
  className,
  style,
  onMouseEnter,
  onMouseLeave
}: CurrentTimeProps) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      // Philippine Time (UTC+8)
      const options: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "Asia/Manila" // Philippine Time
      };

      const phTime = now.toLocaleTimeString("en-US", options) + " PHT";
      setTime(phTime);
    };

    updateTime(); // initial call
    const interval = setInterval(updateTime, 1000); // update every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={className}
      style={style}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {time}
    </div>
  );
}
