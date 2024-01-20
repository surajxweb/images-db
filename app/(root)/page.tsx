import Image from "next/image";
import styles from "./page.module.css";
import Navigation from "@/components/shared/Navigation";
import Search from "@/components/client/Search";
import Link from "next/link";
import { fetchRandomImage } from "@/lib/actions/pics.actions";

export default async function Home() {
  const randomImage = await fetchRandomImage();

  return (
    <main
      className={styles.main}
      style={{
        backgroundImage: `url(${randomImage?.urls?.regular || ""})`,
        backgroundColor: "#222",
      }}
    >
      <Navigation />
      <h1 className={styles.heading}>
        Discover over 2,000,000 free Stock Images
      </h1>
      <Search isNew={true} />
      <div className={styles.trending}>
        <div className={styles.trendingHeading}>Trending :</div>
        <div className={styles.links}>
          <Link className={styles.link} href={"/search?q=flowers"}>
            flowers,
          </Link>
          <Link className={styles.link} href={"/search?q=love"}>
            love,
          </Link>
          <Link className={styles.link} href={"/search?q=forest"}>
            forest,
          </Link>
          <Link className={styles.link} href={"/search?q=river"}>
            river
          </Link>
        </div>
      </div>
    </main>
  );
}
