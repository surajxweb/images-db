"use client";
import { useAuth } from "@clerk/nextjs";
import styles from "./Navagation.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navigation = () => {
  const { userId } = useAuth();
  const path = usePathname();
  console.log(userId);

  return (
    <div className={styles.container}>
      <div className={styles.logo}>Homepage</div>
      {!userId && (
        <div className={styles.links}>
          <Link className={styles.signin} href={"/sign-in"}>
            Login
          </Link>
          <Link className={styles.signup} href={"/sign-up"}>
            Create Account
          </Link>
        </div>
      )}
      {userId && <div className={styles.logout}>Logout</div>}
    </div>
  );
};

export default Navigation;
