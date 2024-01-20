import { fetchImageById } from "@/lib/actions/pics.actions";
import ImageDetails from "@/components/display/ImageDetails";

const ImagePage = async ({ params }: { params: { id: string } }) => {
  const data = await fetchImageById(params.id);
  const imageInfo = data.hits[0];

  const imageDetailsStyles = {
    position: "static",
    top: "auto",
    left: "auto",
    transform: "none",
  };

  return (
    <div>
      <ImageDetails
        id={imageInfo.id}
        image={imageInfo.webformatURL}
        tags={imageInfo.tags}
        previewWidth={imageInfo.previewWidth}
        previewHeight={imageInfo.previewHeight}
        previewUrl={imageInfo.previewURL}
        webformatWidth={imageInfo.webformatWidth}
        webformatHeight={imageInfo.webformatHeight}
        largeImageURL={imageInfo.largeImageURL}
        imageWidth={imageInfo.imageWidth}
        imageHeight={imageInfo.imageHeight}
        user={imageInfo.user}
        user_id={imageInfo.user_id}
        type={imageInfo.type}
        likes={imageInfo.likes}
        views={imageInfo.views}
        downloads={imageInfo.downloads}
        showClose={false}
        containerStyles={imageDetailsStyles}
      />
    </div>
  );
};

export default ImagePage;
