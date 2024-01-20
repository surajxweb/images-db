"use client";

import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import Navigation from "@/components/shared/Navigation";
import styles from "./SearchPage.module.css";
import Search from "@/components/client/Search";
import { useEffect, useState } from "react";
import { Searching } from "@/lib/actions/pics.actions";
import ImageCard from "@/components/cards/ImageCard";
import Pagination from "@mui/material/Pagination";
import Skeleton from "@mui/material/Skeleton";
import SkImageCards from "@/components/loaders/SkImageCards";

interface SearchResult {
  imageUrl: string;
  previewWidth: number;
  previewHeight: number;
  tags: string;
  id: number;
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
  webformatURL: string;
  previewURL: string;
}

const SearchPage = () => {
  const router = useRouter();
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [size, setSize] = useState<number>(0);
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  const i = searchParams.get("i");
  const pageNum = searchParams.get("p");

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    router.push(`/search?q=${query}&p=${value.toString()}`);
  };

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      const data = await Searching({
        query: query || "",
        pageNumber: pageNum || "1",
      });
      setSize(Math.ceil(data.totalHits / 40));

      setSearchResults(data.hits);
      setIsLoading(false);
    };
    fetchData();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [query, pageNum]);

  return (
    <>
      <div
        className={styles.header}
        style={{
          backgroundImage: `url(${searchResults[0]?.largeImageURL || ""})`,
          backgroundColor: "#222",
        }}
      >
        <Navigation />
        <Search isNew={false} />
        <div className={styles.searchParams}>
          Results: <span className={styles.param}>{query}</span>
        </div>
      </div>
      {isLoading && <SkImageCards />}
      <div className="imageList">
       
        {!isLoading &&
          searchResults.map((pic: SearchResult) => (
            <ImageCard
              key={pic.id}
              imageUrl={pic.webformatURL}
              previewWidth={pic.previewWidth}
              previewHeight={pic.previewHeight}
              previewUrl={pic.previewURL}
              webformatWidth={pic.webformatWidth}
              webformatHeight={pic.webformatHeight}
              largeImageURL={pic.largeImageURL}
              imageWidth={pic.imageWidth}
              imageHeight={pic.imageHeight}
              user={pic.user}
              user_id={pic.user_id}
              type={pic.type}
              likes={pic.likes}
              views={pic.views}
              downloads={pic.downloads}
              tags={pic.tags}
              id={pic.id}
              query={query || ""}
              page={pageNum || ""}
            />
          ))}

        {!isLoading && searchResults.length === 0 && "No results found!"}
      </div>
      {size > 1 && (
        <div className={styles.pages}>
          <Pagination
            count={size}
            page={pageNum ? +pageNum : 1}
            onChange={handleChange}
            color="secondary"
          />
        </div>
      )}
    </>
  );
};

export default SearchPage;
