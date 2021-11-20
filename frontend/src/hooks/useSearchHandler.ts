import React from "react";

function useSearchHandler<T extends { name: string }>(data: T[] = []) {
  const [searchData, setSearchData] = React.useState<T[]>(data);

  React.useEffect(() => {
    if (data) setSearchData(data);
  }, [data]);

  const handleSearch = React.useCallback(
    (value: string) =>
      setSearchData(
        data.filter((item) =>
          item.name.toLowerCase().includes(value.toLowerCase())
        )
      ),
    [data]
  );

  return {
    searchData,
    handleSearch,
  };
}

export { useSearchHandler };
