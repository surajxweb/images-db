import { SignIn } from "@clerk/nextjs";
import styles from "../../sign-up/[[...sign-up]]/Clerk.module.css";
import { fetchRandomImage } from "@/lib/actions/pics.actions";
import Login from "@/components/shared/Login";

export default async function Page() {
  const randomImage = await fetchRandomImage();
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${randomImage?.urls?.regular || ""})`,
        backgroundColor: "#222",
      }}
    >
      <Login />

      <div className={styles.clerk}>
        <SignIn />
      </div>
    </div>
  );
}
