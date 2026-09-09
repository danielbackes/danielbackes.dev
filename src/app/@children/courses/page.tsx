import { MdRocketLaunch } from "react-icons/md";
import { SiFreecodecamp, SiMongodb, SiSymfony } from "react-icons/si";
import { tv } from "tailwind-variants";
import { Card } from "@/component/Card";

const tvStyle = tv({
    base: [
        "grow",
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2",
        "gap-4 xl:gap-5",
        "m-2",
    ],
});

export default function Page() {
    const style = tvStyle();

    return (
        <div className={style}>
            <Card href="https://symfonycasts.com/u/danielbackes" target="_blank">
                <Card.Icon Icon={SiSymfony} />
                <Card.Text>
                    <div>
                        <span className="font-bold">Symfony</span>
                        <span className="font-normal">Casts</span>
                    </div>
                </Card.Text>
            </Card>
            <Card href="courses/rocketseat">
                <Card.Icon Icon={MdRocketLaunch} />
                <Card.Text>
                    <div className="font-bold">Rocketseat</div>
                </Card.Text>
            </Card>
            <Card href="courses/mongodb">
                <Card.Icon Icon={SiMongodb} />
                <Card.Text>
                    <div className="flex flex-col items-start">
                        <span className="font-bold">MongoDB</span>
                        <span className="font-normal">University</span>
                    </div>
                </Card.Text>
            </Card>
            <Card href="https://www.freecodecamp.org/danielbackes" target="_blank">
                <Card.Icon Icon={SiFreecodecamp} />
                <Card.Text>
                    <div className="font-bold">freeCodeCamp</div>
                </Card.Text>
            </Card>
        </div>
    );
}
