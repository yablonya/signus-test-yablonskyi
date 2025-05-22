import { useQuery } from "@tanstack/react-query";

import { getCandidateLevels } from "@/api/assignment/api";

const useLevelsQuery = () => {
  const {
    data: levels = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["levels"],
    queryFn: getCandidateLevels,
  });

  return {
    levels,
    isLoading,
    error,
  };
};

export default useLevelsQuery;
