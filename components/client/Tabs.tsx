"use client";

import styles from "./Tabs.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Tabs() {
  const path = usePathname();
  return (
    <div className={styles.actionButtons}>
      <Link
        href={"/user/library"}
        className={`${styles.button} ${path === "/user/library" ? styles.activeTab : ""}`}
      >
        Library
      </Link>
      <Link
        href={"/user/history"}
        className={`${styles.button} ${path === "/user/history" ? styles.activeTab : ""}`}
      >
        Download History
      </Link>
    </div>
  );
}
