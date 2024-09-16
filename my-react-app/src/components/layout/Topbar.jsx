import Button from "../common/Button";
import styles from "./Topbar.module.scss";
import { LuBoxes } from "react-icons/lu";

const Topbar = () => {
    const links = [
      {
        href: "#",
        label: "Home",
      },
      {
        href: "#",
        label: "Services",
      },
      {
        href: "#",
        label: "About Us",
      },
    ];
    return (
        <div className={styles.topbar}>
            <div className={styles.leftside}>
            <LuBoxes />
                <nav className={styles.navigation}>
                {links.map((link) => (
                    <a key={link.label} href={link.href} className={styles.link}>
                        {link.label}
                    </a>
                ))}
                </nav>
            </div>
            <div className={styles.rightSide}>
                <Button>Login / Sign up</Button>
            </div>
        </div>
    )
}