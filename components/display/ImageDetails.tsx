import Image from "next/image";
import styles from "./ImageDetails.module.css";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { FaCopy } from "react-icons/fa6";
import Link from "next/link";
import { FC } from "react";
import { useState } from "react";
import { FaPlusSquare } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

interface ImageDetailsProps {
  handleClose: () => void;
  id: number;
  image: string;
  tags: string;
  previewHeight: number;
  previewWidth: number;
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
  pathToCopy: string;
}

const ImageDetails: FC<ImageDetailsProps> = ({
  handleClose,
  id,
  image,
  tags,
  previewHeight,
  previewWidth,
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
  pathToCopy,
}) => {
  const [selectedSize, setSelectedSize] = useState("preview");

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.success("Image Link Copied to Clipboard!");
    } catch (err) {
      console.error("Unable to copy text to clipboard:", err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>Preview ID: {id}</div>
        <svg
          onClick={handleClose}
          width="32"
          height="33"
          viewBox="0 0 32 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.8451 20.3409L20.2303 11.9557M20.2303 20.3409L11.8451 11.9557M11.5933 30.9631H20.4822C27.8896 30.9631 30.8525 28.0002 30.8525 20.5928V11.7039C30.8525 4.29646 27.8896 1.3335 20.4822 1.3335H11.5933C4.18586 1.3335 1.2229 4.29646 1.2229 11.7039V20.5928C1.2229 28.0002 4.18586 30.9631 11.5933 30.9631Z"
            stroke="#3B4043"
            stroke-width="2.22138"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div className={styles.content}>
        <div className={styles.image}>
          <Image
            src={image}
            height={previewHeight * 5}
            width={previewWidth * 5}
            alt="image"
          />
        </div>
        <div className={styles.info}>
          <section>
            <h2>Download</h2>
            <div className={styles.sizes}>
              <div
                className={`${styles.size} ${selectedSize === "preview" ? styles.selectedSize : styles.normalSize}`}
                onClick={() => setSelectedSize("preview")}
              >
                <div>Thumbnail</div>
                <div className={styles.option}>
                  <span>
                    {previewHeight}x{previewWidth}{" "}
                  </span>
                  {selectedSize === "preview" ? (
                    <FaCheckCircle color="green" />
                  ) : (
                    <MdOutlineRadioButtonUnchecked />
                  )}{" "}
                </div>
              </div>
              <div
                className={`${styles.size} ${selectedSize === "web" ? styles.selectedSize : styles.normalSize}`}
                onClick={() => setSelectedSize("web")}
              >
                <div>Web Friendly</div>
                <div className={styles.option}>
                  <span>
                    {webformatHeight}x{webformatWidth}{" "}
                  </span>
                  {selectedSize === "web" ? (
                    <FaCheckCircle color="green" />
                  ) : (
                    <MdOutlineRadioButtonUnchecked />
                  )}{" "}
                </div>
              </div>
              <div
                className={`${styles.size} ${selectedSize === "original" ? styles.selectedSize : styles.normalSize}`}
                onClick={() => setSelectedSize("original")}
              >
                <div>Original</div>
                <div className={styles.option}>
                  <span>
                    {imageHeight}x{imageWidth}{" "}
                  </span>
                  {selectedSize === "original" ? (
                    <FaCheckCircle color="green" />
                  ) : (
                    <MdOutlineRadioButtonUnchecked />
                  )}{" "}
                </div>
              </div>
            </div>
            <div className={styles.actions}>
              <button className={styles.like}>
                Add to Library <FaPlusSquare />
              </button>
              <button onClick={handleCopyToClipboard} className={styles.copy}>
                Copy link
                <FaCopy />
              </button>
            </div>

            <Link
              target="_blank"
              download
              prefetch={false}
              rel="noopener noreferrer"
              href={
                selectedSize === "preview"
                  ? previewUrl
                  : selectedSize === "web"
                    ? image
                    : largeImageURL
              }
              className={styles.download}
            >
              Download for free!
            </Link>
          </section>
          <section>
            <h2>Information</h2>
            <div className={styles.meta}>
              <div className={styles.metaCategory}>
                <div className={styles.question}>User</div>
                <div className={styles.answer}>{user}</div>
              </div>
              <div className={styles.metaCategory}>
                <div className={styles.question}>User ID</div>
                <div className={styles.answer}>{user_id}</div>
              </div>
              <div className={styles.metaCategory}>
                <div className={styles.question}>Type</div>
                <div className={styles.answer}>{type}</div>
              </div>
              <div className={styles.metaCategory}>
                <div className={styles.question}>Likes</div>
                <div className={styles.answer}>{likes}</div>
              </div>
              <div className={styles.metaCategory}>
                <div className={styles.question}>Views</div>
                <div className={styles.answer}>{views}</div>
              </div>
              <div className={styles.metaCategory}>
                <div className={styles.question}>Downloads</div>
                <div className={styles.answer}>{downloads}</div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className={styles.tags}>Tags: {tags}</div>
      <Toaster />
    </div>
  );
};

export default ImageDetails;
