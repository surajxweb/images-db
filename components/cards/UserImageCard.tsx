import styles from "./ImageCard.module.css";
import Image from "next/image";

const UserImageCard = ({ imageUrl, id }: { imageUrl: string; id: string }) => {
  return (
    <div className={styles.container}>
      <Image src={imageUrl} height={290} width={290} alt="image" />
    </div>
  );
};

export default UserImageCard;
