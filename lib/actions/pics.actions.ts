"use server";

export async function Searching({
  query,
  pageNumber,
}: {
  query: string;
  pageNumber: string;
}) {
  try {
    const response = await fetch(
      `https://pixabay.com/api/?key=${process.env.PIXBAY_API_KEY}&q=${query}&image_type=photo&page=${pageNumber}&per_page=40`
    );
    return await response.json();
  } catch (error: any) {
    console.error("Error fetching data:", error.message);
  }
}

export const fetchRandomImage = async () => {
  const response = await fetch(
    "https://api.unsplash.com/photos/random/?client_id=OF_UUhUzgH2YIAf1fEAqtRpnIEJxZUzTwWcYLc48bzE&orientation=landscape"
    // { cache: "no-store" }
  );
  return response.json();
};
