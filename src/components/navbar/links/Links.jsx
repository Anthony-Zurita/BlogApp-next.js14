"use client";

import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import { useState } from "react";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Links = () => {
  const [open, setOpen] = useState(false);

  // TEMPORARY UNTIL AUTHENTICATION IS IMPLEMENTEDS

  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          // passing in link as a prop to NavLink component in NavLink.jsx

          <NavLink item={link} key={link.title} />
        ))}

        {/* Explanation for logic to handle auth:
          If session is true or have been authenticated , user will see logout button
          If session is true and user is admin, user will see admin button and logout button
          If session is false, user will see login button
      */}

        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>

      {/* Explanation for logic to handle responsive design:
          if open is true, show the mobile links div once the button is clicked
          the onclick event toggles the state of open by setting it to the opposite of its current value
      */}

      <button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}>Menu</button>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
