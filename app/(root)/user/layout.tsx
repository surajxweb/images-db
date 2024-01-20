import Navigation from "@/components/shared/Navigation";
import styles from "./UserStyles.module.css";
import Search from "@/components/client/Search";
import { useState } from "react";
import Tabs from "@/components/client/Tabs";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className={styles.header}>
        <Navigation />
        <Search isNew={false} />
        <div className={styles.searchParams}>Welcome to Image Harbor</div>
      </div>
      <Tabs />

      {children}
    </>
  );
}
