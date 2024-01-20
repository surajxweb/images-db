import Link from "next/link";
import styles from "./ImageCard.module.css";
import Image from "next/image";

const UserImageCard = ({
  imageUrl,
  path,
  id,
}: {
  imageUrl: string;
  id: string;
  path: string;
}) => {
  return (
    <Link
      href={path === "library" ? `/user/library/${id}` : `/user/history/${id}`}
      className={styles.container}
    >
      <Image src={imageUrl} height={290} width={290} alt="image" />
    </Link>
  );
};

export default UserImageCard;
