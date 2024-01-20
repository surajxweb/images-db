import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import styles from "../UserStyles.module.css";
import ImageCard from "@/components/cards/ImageCard";
import UserImageCard from "@/components/cards/UserImageCard";

const HistoryPage = async () => {
  const user = await currentUser();
  const userInfo = await fetchUser(user?.id || "");

  return userInfo?._id ? (
    <div className={styles.container}>
      <div className="imageList">
        {userInfo?.downloadHistory
          .reverse()
          .map((pic: any) => (
            <UserImageCard
              key={pic.id}
              path={"history"}
              imageUrl={pic.imageUrl}
              id={pic.imageId}
            />
          ))}
      </div>
    </div>
  ) : (
    <div className={styles.error}>No images found in your library.</div>
  );
};

export default HistoryPage;
