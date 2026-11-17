"use client";

import { useEffect, useState } from "react";

function seoulTime() {
    return new Date().toLocaleTimeString("en-GB", { timeZone: "Asia/Seoul" });
}

export function Clock() {
    const [time, setTime] = useState("--:--:--");

    useEffect(() => {
        setTime(seoulTime());
        const id = setInterval(() => setTime(seoulTime()), 1000);
        return () => clearInterval(id);
    }, []);

    return <span>Seoul {time}</span>;
}