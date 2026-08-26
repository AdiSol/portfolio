import MeSVG from "./MeSVG";

export default function SelfPortrait() {
    return (
        <div className="mx-auto aspect-square w-full max-w-xs rounded-[var(--radius-card)] bg-[color:var(--surface-accent)]">
            <MeSVG />
        </div>
    )
}