import Image from "next/image";
import { tv } from "tailwind-variants";
import { ProfileDetail } from "@/app/_layout/StickyHeader/ProfileDetail";
import { ProfileGuard } from "@/app/_layout/StickyHeader/ProfileGuard";
import { ThemeSelector } from "@/app/_layout/StickyHeader/ThemeSelector";

const tvStyle = tv({
    slots: {
        container: ["flex flex-row", "items-center justify-end", "grow px-6"],
        profile: ["grow flex flex-row", "items-center justify-start"],
        avatar: "ml-2 rounded-full h-12 w-12",
        name: "ml-2 text-lg font-serif font-bold tracking-wide",
    },
});

export function StickyHeader() {
    const style = tvStyle();

    return (
        <div className={style.container()}>
            <ProfileGuard>
                <div className={style.profile()}>
                    <ProfileDetail />
                    <Image
                        id="image"
                        src="/avatar.webp"
                        alt="Avatar"
                        width="50"
                        height="50"
                        className={style.avatar()}
                    />
                    <div className={style.name()}>Daniel Backes.</div>
                </div>
            </ProfileGuard>

            <ThemeSelector />
        </div>
    );
}
