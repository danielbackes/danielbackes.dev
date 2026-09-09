import {
    SiGithub,
    SiLinkedin,
    SiProtonmail,
    SiStackoverflow,
} from "react-icons/si";

import { Contact } from "@/app/_layout/Profile/Contact";

export function Contacts() {
    return (
        <>
            <Contact
                Icon={SiProtonmail}
                url="mailto:danielbackes@proton.me"
                text="danielbackes@proton.me"
            />
            <Contact
                Icon={SiGithub}
                url="https://github.com/danielbackes"
                text="GitHub"
            />
            <Contact
                Icon={SiStackoverflow}
                url="https://stackoverflow.com/users/10463549"
                text="Stack Overflow"
            />
            <Contact
                Icon={SiLinkedin}
                url="https://www.linkedin.com/in/daniel-nx-73177224"
                text="LinkedIn"
            />
        </>
    );
}
