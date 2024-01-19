import { SignUp } from "@clerk/nextjs";
import styles from "./Clerk.module.css";

export default function Page() {
  return (
    <div className={styles.container}>
      <div className={styles.clerk}>
        <SignUp />
      </div>
    </div>
  );
}
