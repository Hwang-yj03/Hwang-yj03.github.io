type PromptProps = {
    path?: string;
    children?: React.ReactNode;
};

export function Pormpt({ path = "~", children }: PromptProps) {
    return (
        <div>
            <span className="p-user">yeonju@dev</span>
            <span className="p-sep">:</span>
            <span className="p-path">{path}</span>
            <span className="p-sep">$</span> {children}
        </div>
    );
}