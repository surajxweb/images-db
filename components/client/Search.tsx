"use client";
import { useRouter } from "next/navigation";
import styles from "./Search.module.css";
import { MdSearch } from "react-icons/md";
import { formatSearchQuery } from "@/lib/utils";

const Search = ({ isNew = true }: { isNew?: boolean }) => {
  const router = useRouter();

  const handelSearch = (e: any) => {
    e.preventDefault();
    const inputValue = e.currentTarget.elements.namedItem("searchInput")
      .value as HTMLInputElement;

    router.push(`/search?q=${formatSearchQuery(inputValue.toString())}&p=1`);
  };
  return (
    <form onSubmit={handelSearch} className={styles.container}>
      <MdSearch size={"1.7em"} />
      <input
        className={styles.input}
        type="text"
        placeholder={isNew ? "Search" : "Start new search"}
        name="searchInput"
      />
      <button type="submit" className={styles.go}>
        Go!
      </button>
    </form>
  );
};

export default Search;
