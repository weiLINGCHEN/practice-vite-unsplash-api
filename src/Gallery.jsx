import { useQuery } from "@tanstack/react-query";
import customFetch from "./customFetch";
import { useGlobalValue } from "./context";

const Gallery = () => {
  const { searchValue } = useGlobalValue();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["image", searchValue],
    queryFn: async () => {
      const { data } = await customFetch.get(searchValue);
      return data;
    },
  });

  if (isLoading) {
    return (
      <section className="image-container">
        <p>Loading...</p>
      </section>
    );
  }
  if (isError) {
    return (
      <section className="image-container">
        <p>Something wrong...</p>
      </section>
    );
  }
  if (data.total === 0) {
    return (
      <section className="image-container">
        <p>No Image Founds...</p>{" "}
      </section>
    );
  }
  return (
    <section className="image-container">
      {data.results.map((img) => {
        const url = img?.urls?.small;
        const id = img?.id;
        const alt = img?.alt_description;
        return <img className="img" key={id} src={url} alt={alt} />;
      })}
    </section>
  );
};
export default Gallery;
