import Link from "next/link";

const tabs = [
    { label: "~", href: "/"},
    { label: "projects", href: "/#projects"},
    { label: "judge", href: "/#judge"},
    { label: "notes", href: "/#notes"},
    { label: "about", href: "/#about"},
];

export function TerminalWindow({ children }: { children: React.ReactNode }) {
    return (
        <div className="shell-wrap">
            <div className="window">
                <div className="titlebar">
                    <span className="dot" style={{ background: "#f87171" }} aria-hidden="true" />
                    <span className="dot" style={{ background: "#fbbf24" }} aria-hidden="true" />
                    <span className="dot" style={{ background: "#4ade80" }} aria-hidden="true" />
                    <span className="title">yeonju@dev: ~ - zsh - 120x40</span>
                </div>

                <nav className="tabs" aria-label="주요 메뉴">
                    {tabs.map((t, i) => (
                        <Link key={t.label} href={t.href} className={i === 0 ? "active" : undefined}>
                            {i}:{t.label}{i === 0 ? "*" : ""}
                        </Link>
                    ))}
                    <a className="push" href="https://github.com/Hwang-yj03">github ↗</a>
                </nav>

                <main className="content">{children}</main>

                <footer className="statusbar">
                    <span>[yeonjudev] 0:zsh* main ✓</span>
                    <span>utf-8 · next.js · github pages</span>
                </footer>
            </div>
        </div>
    );
}