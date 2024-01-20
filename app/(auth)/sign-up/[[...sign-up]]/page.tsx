import { SignUp } from "@clerk/nextjs";
import styles from "./Clerk.module.css";
import Login from "@/components/shared/Login";
import { fetchRandomImage } from "@/lib/actions/pics.actions";

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
        <SignUp />
      </div>
    </div>
  );
}
