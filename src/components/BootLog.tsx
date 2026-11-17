"use client";

import { useEffect, useState } from "react";

const lines = [
  { ok: true, text: "Started yeonju.service — systems → web" },
  { ok: true, text: "Mounted /home/yeonju/projects/codearena" },
  { ok: true, text: "Reached target: building things from scratch" },
  { ok: false, text: "notes.service — 첫 글 작성 대기 중" },
];

export function BootLog() {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setShown((prev) => {
        const next = prev + 1;
        if (next >= lines.length) clearInterval(id);
        return next;
      });
    }, 260);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ fontSize: 14 }}>
      {lines.slice(0, shown).map((line) => (
        <div key={line.text}>
          <span style={{ color: "var(--fg-dim)" }}>[</span>
          <span style={{ color: line.ok ? "var(--accent)" : "#fbbf24" }}>
            {line.ok ? "  OK  " : " WAIT "}
          </span>
          <span style={{ color: "var(--fg-dim)" }}>]</span> {line.text}
        </div>
      ))}
    </div>
  );
}