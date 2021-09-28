import axios from "axios";
import { useQueries, useQuery } from "react-query";

export const useUserRepos = (username: string) => {
  const { data, isSuccess, isLoading, error, isError } = useQuery(
    ["repos", username],
    async () => {
      //const URL = `http://localhost:4000/users/${username}/repos`

      const repos: any = axios.post(
        `${window.location.origin}/.netlify/functions/user_repos`,
        {
          username,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
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
      const { data: readme } = await axios.post(
        `${window.location.origin}/.netlify/functions/repo_readme`,
        {
          username,
          repo,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
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
