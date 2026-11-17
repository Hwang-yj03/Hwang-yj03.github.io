import { Prompt } from "@/components/Prompt";
import { TerminalWindow } from "@/components/TerminalWindow";

export default function Home() {
  return (
    <main style={{ padding: 32 }}>
      <span style={{ color: "var(--accent)" }}>yeonju@dev</span>
      <span style={{ color: "var(--fg-dim)" }}>:</span>
      <span style={{ color: "var(--dir)" }}>~</span>
      <span style={{ color: "var(--fg-dim)" }}>$</span> whoami
      <h1>바닥부터 설계하고, 끝까지 만듭니다.</h1>
    </main>
  );
}