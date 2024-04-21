import { useQuery } from "react-query";

const useFilters = () => {
  const { data, isLoading, isError, refetch } = useQuery(
    "globalFilter",
    //using a function to return the initial data
    () => ({ searchTerm: "" }),
    { refetchOnWindowFocus: false }
  );

  return { data, isLoading, isError, refetch };
};

export default useFilters;
