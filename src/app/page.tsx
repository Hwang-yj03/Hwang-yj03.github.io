import { Banner } from "@/components/Banner";
import { BootLog } from "@/components/BootLog";
import { Prompt } from "@/components/Prompt";
import { TerminalWindow } from "@/components/TerminalWindow";

export default function Home() {
  return (
    <TerminalWindow>
      <section style={{ display: "flex", flexDirection: "column", gap: 22 }}>
        <BootLog />
        <Banner />
        <div>
          <Prompt>whoami</Prompt>
          <h1>바닥부터 설계하고, 끝까지 만듭니다.</h1>
        </div>
      </section>
    </TerminalWindow>
  );
}