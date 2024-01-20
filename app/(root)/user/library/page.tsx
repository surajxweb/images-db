import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import styles from "../UserStyles.module.css";
import ImageCard from "@/components/cards/ImageCard";
import UserImageCard from "@/components/cards/UserImageCard";

const LibraryPage = async () => {
  const user = await currentUser();
  const userInfo = await fetchUser(user?.id || "");
  console.log(userInfo);

  return userInfo?._id ? (
    <div className={styles.container}>
      <div className="imageList">
        {userInfo?.userLibrary
          .reverse()
          .map((pic: any) => (
            <UserImageCard
              key={pic.id}
              imageUrl={pic.imageUrl}
              id={pic.imageId}
              path={"library"}
            />
          ))}
      </div>
    </div>
  ) : (
    <div className={styles.error}>No images found in your library.</div>
  );
};

export default LibraryPage;
