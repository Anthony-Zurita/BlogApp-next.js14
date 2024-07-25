"use client";
import Link from "next/link";
import styles from "./navLink.module.css";
import { usePathname } from "next/navigation";

const NavLink = ({ item }) => {
  const pathName = usePathname();

  return (

    /*
        Once we are on the page, for example, about, the class name will be active
        to style it dynamically we use the backticks and the ternary operator
        Additionally need to use hook to check if the current page is active
        we do this by calling the usePathname hook from next/navigation and comparing it to item.path
        If it is, add the active class via styles.active
    */
    <Link
      href={item.path}
      className={`${styles.container} ${
        pathName === item.path && styles.active
      }`}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
