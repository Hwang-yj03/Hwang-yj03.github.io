import { Prompt } from "@/components/Prompt";
import { TerminalWindow } from "@/components/TerminalWindow";

export default function Home() {
  return (
    <TerminalWindow>
      <section>
        <Prompt>whoami</Prompt>
        <h1>바닥부터 설계하고, 끝까지 만듭니다.</h1>
      </section>
    </TerminalWindow>
  );
}