"use client";
import { useAuth } from "@clerk/nextjs";
import styles from "./Navagation.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
import UserButton from "../client/UserButton";
import { FaSignInAlt } from "react-icons/fa";

const Navigation = () => {
  const { userId } = useAuth();
  const path = usePathname();

  return (
    <div className={styles.container}>
      <Link href={"/"} className={styles.logo}>
        Image Harbor
      </Link>
      {!userId && (
        <div className={styles.links}>
          <Link className={styles.signinMobile} href={"/sign-in"}>
            <FaSignInAlt size="1.2em" />
          </Link>
          <Link className={styles.signin} href={"/sign-in"}>
            Login
          </Link>
          <Link className={styles.signup} href={"/sign-up"}>
            Create Account
          </Link>
        </div>
      )}
      {userId && (
        <div className={styles.user}>
          <UserButton />
        </div>
      )}
    </div>
  );
};

export default Navigation;
