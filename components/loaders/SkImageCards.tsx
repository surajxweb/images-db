import { Skeleton } from "@mui/material";
import styles from "./Loaders.module.css";

const SkImageCards = () => {
  return (
    <div className={styles.skeletons}>
      <div className={styles.skeleton}>
        <Skeleton
          sx={{ bgcolor: "grey.500", borderRadius: "20px" }}
          variant="rounded"
          width={290}
          animation="wave"
          height={220}
        />
        <Skeleton
          sx={{ bgcolor: "grey.500", margin: "5px 0 10px 0" }}
          variant="text"
          animation="wave"
          width={100}
          height={20}
        />
      </div>
      {/* <div className={styles.skeleton}>
      <Skeleton
        sx={{ bgcolor: "grey.500", borderRadius: "20px" }}
        variant="rounded"
        width={290}
        animation="wave"
        height={250}
     />
      <Skeleton
        sx={{ bgcolor: "grey.500", margin: "5px 0 10px 0" }}
        variant="text"
        animation="wave"
        width={120}
        height={20}
      />
    </div>
    <div className={styles.skeleton}>
      <Skeleton
        sx={{ bgcolor: "grey.500", borderRadius: "20px" }}
        variant="rounded"
        width={290}
        animation="wave"
        height={400} />
      <Skeleton
        sx={{ bgcolor: "grey.500", margin: "5px 0 10px 0" }}
        variant="text"
        animation="wave"
        width={150}
        height={20}
      />
    </div>
    <div className={styles.skeleton}>
      <Skeleton
        sx={{ bgcolor: "grey.500", borderRadius: "20px" }}
        variant="rounded"
        width={290}
        animation="wave"
        height={200}  />
      <Skeleton
        sx={{ bgcolor: "grey.500", margin: "5px 0 10px 0" }}
        variant="text"
        animation="wave"
        width={200}
        height={20}
      />
    </div>
    <div className={styles.skeleton}>
      <Skeleton
        sx={{ bgcolor: "grey.500", borderRadius: "20px" }}
        variant="rounded"
        width={290}
        animation="wave"
        height={220}
      />
      <Skeleton
        sx={{ bgcolor: "grey.500", margin: "5px 0 10px 0" }}
        variant="text"
        animation="wave"
        width={80}
        height={20}
      />
    </div> */}
    </div>
  );
};

export default SkImageCards;
