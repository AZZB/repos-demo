import axios from "axios";
import { useQueries, useQuery } from "react-query";

export const useUserRepos = (username: string) => {
  const { data, isSuccess, isLoading, error, isError } = useQuery(
    ["repos", username],
    async () => {
      const repos: any = axios(`http://localhost:4000/users/${username}/repos`);
      return repos;
    }
  );

  return { repos: data?.data, isSuccess, isLoading, error, isError };
};

export const useRepoLanguages = (repos: [] = []) => {
  const response = useQueries(
    repos.map((repo: any) => ({
      queryKey: ["languages", repo.languages_url],
      queryFn: async () => {
        const { data: languages } = await axios(repo.languages_url);
        return {
          [repo.name]: Object.entries(languages)
            .sort((a: any, b: any) => b[1] - a[1])
            .slice(0, 3)
            .map(([key]) => key),
        };
      },
    }))
  );

  const languages = response.reduce((acc: {}, { data, isSuccess }: any) => {
    if (!isSuccess) {
      return acc;
    }

    return { ...acc, ...data };
  }, {});

  return {
    languages,
  };
};

export type ReadmeResponse = {
  readme?: string;
  isReadmeLoading: boolean;
  isReadmeError: boolean;
};

export const useRepoReadme = (
  username: string,
  repo: string
): ReadmeResponse => {
  const { data, isLoading, isError } = useQuery(
    ["readme", username, repo],
    async () => {
      const { data: readme } = await axios(
        `http://localhost:4000/repos/${username}/${repo}/readme`
      );
      return readme;
    }
  );

  return {
    readme: data,
    isReadmeLoading: isLoading,
    isReadmeError: isError,
  };
};