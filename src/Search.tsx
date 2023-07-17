import { ComponentProps } from "react";

const Search = ({
  onSearch,
  defaultValue,
}: {
  onSearch: (query: string) => void;
  defaultValue: string;
}) => {
  const handleSubmit: ComponentProps<"form">["onSubmit"] = (event) => {
    event.preventDefault();

    onSearch(new FormData(event.currentTarget).get("search") as string);
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
      }}
      onSubmit={handleSubmit}
    >
      <label htmlFor="search">Search</label>
      <input
        defaultValue={defaultValue}
        type="search"
        name="search"
        placeholder="Search products"
        autoFocus
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
