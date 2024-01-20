"use client";

import Image from "next/image";
import styles from "./ImageCard.module.css";
import ImageDetails from "../display/ImageDetails";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import { useRouter, useSearchParams } from "next/navigation";
import { FC } from "react";

interface ImageCardProps {
  imageUrl: string;
  previewWidth: number;
  previewHeight: number;
  tags: string;
  id: number;
  previewUrl: string;
  webformatWidth: number;
  webformatHeight: number;
  largeImageURL: string;
  imageWidth: number;
  imageHeight: number;
  user: string;
  user_id: string;
  type: string;
  likes: number;
  views: number;
  downloads: number;
  query: string;
  page: string;
}

const ImageCard: FC<ImageCardProps> = ({
  imageUrl,
  previewWidth,
  previewHeight,
  tags,
  id,
  previewUrl,
  webformatWidth,
  webformatHeight,
  largeImageURL,
  imageWidth,
  imageHeight,
  user,
  user_id,
  type,
  likes,
  views,
  downloads,
  query,
  page,
}) => {
  const searchParams = useSearchParams();
  const i = searchParams.get("i");

  const router = useRouter();

  const [open, setOpen] = useState(id.toString() === i?.toString());
  const handleOpen = () => {
    setOpen(true);
    router.push(`/search?q=${query}&p=${page.toString()}&i=${id}`, {
      scroll: false,
    });
  };

  const handleClose = () => {
    setOpen(false);
    router.push(`/search?q=${query}&p=${page.toString()}`, { scroll: false });
  };

  return (
    <>
      <div className={styles.container}>
        <Image
          onClick={handleOpen}
          src={imageUrl}
          height={previewHeight * 2}
          width={previewWidth * 2}
          alt="image"
        />
        <div className={styles.tags}>{tags}</div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ImageDetails
          handleClose={handleClose}
          id={id}
          image={imageUrl}
          tags={tags}
          previewWidth={previewWidth}
          previewHeight={previewHeight}
          previewUrl={previewUrl}
          webformatWidth={webformatWidth}
          webformatHeight={webformatHeight}
          largeImageURL={largeImageURL}
          imageWidth={imageWidth}
          imageHeight={imageHeight}
          user={user}
          user_id={user_id}
          type={type}
          likes={likes}
          views={views}
          downloads={downloads}
          pathToCopy={`/search?q=${query}&p=${page.toString()}&i=${id}`}
        />
      </Modal>
    </>
  );
};

export default ImageCard;
