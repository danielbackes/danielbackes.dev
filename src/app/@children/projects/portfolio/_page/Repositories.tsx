import { PiDesktopTowerLight } from "react-icons/pi";
import { SiGithub } from "react-icons/si";
import { tv } from "tailwind-variants";
import { Card } from "@/component/Card";
import { SessionHeader } from "@/component/SessionHeader";

const tvStyle = tv({
    slots: {
        container: [
            "grid",
            "grid-cols-1 md:grid-cols-2 2xl:grid-cols-3",
            "gap-3 md:gap-4 2xl:gap-5",
        ],
    },
});

export function Repositories() {
    const style = tvStyle();

    return (
        <>
            <SessionHeader Icon={SiGithub} title="GitHub Repository" />
            <div className={style.container()}>
                <Card
                    href="https://github.com/danielbackes/danielbackes.dev"
                    target="_blank"
                >
                    <Card.Icon Icon={PiDesktopTowerLight} />
                    <Card.Text>Web</Card.Text>
                </Card>
            </div>
        </>
    );
}
