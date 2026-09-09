import { tv } from "tailwind-variants";

const tvStyle = tv({
    slots: {
        footer: [
            "flex flex-col sm:flex-row",
            "justify-center items-center",
            "w-full",
            "gap-1 py-3 sm:py-4",
            "text-xs sm:text-sm",
        ],
        username:
            "font-bold underline decoration-secondary-light decoration-2 underline-offset-2",
        technology: "font-bold",
    },
});

export function Footer() {
    const style = tvStyle();

    return (
        <div className={style.footer()}>
            <div>
                <span className={style.username()}>@danielbackes</span> building
                software since 2010 with{" "}
            </div>
            <div>
                <span className={style.technology()}>PHP</span> and{" "}
                <span className={style.technology()}>JavaScript</span> 🐆
            </div>
        </div>
    );
}
