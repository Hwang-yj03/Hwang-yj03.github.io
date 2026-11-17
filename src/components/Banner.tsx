const ROWS = [
  "█   █  █████   ███   █   █    ███  █   █",
  " █ █   █      █   █  ██  █      █  █   █",
  "  █    ████   █   █  █ █ █      █  █   █",
  "  █    █      █   █  █  ██  █   █  █   █",
  "  █    █████   ███   █   █   ███    ███",
];

const WIDTH = Math.max(...ROWS.map((r) => r.length));
const CELLS = ROWS.flatMap((r) => r.padEnd(WIDTH).split(""));

export function Banner() {
  return (
    <div
      className="banner"
      role="img"
      aria-label="YEONJU"
      style={{ gridTemplateColumns: `repeat(${WIDTH}, 1fr)` }}
    >
      {CELLS.map((c, i) => (
        <span key={i} className={c === "█" ? "px on" : "px"} />
      ))}
    </div>
  );
}