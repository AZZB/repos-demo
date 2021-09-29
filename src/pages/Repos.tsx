import { useParams } from "react-router";
import Navbar from "../components/Navbar";
import RepoCard from "../components/RepoCard";
import { useRepoLanguages, useUserRepos } from "../endpoints/queries";

export default function Repos() {
  const params: any = useParams();
  const { isLoading, isError, repos } = useUserRepos(params.username);
  const { languages }: any = useRepoLanguages(repos);

  const Content = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (isError) {
      return <div>error</div>;
    }

    return repos.map((repo: any) => (
      <RepoCard
        key={repo.name}
        name={repo.name}
        description={repo.description}
        languages={languages[repo.name] || [repo.language]}
        owner={repo.owner}
        url={repo.url}
      />
    ));
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-screen-lg m-auto  flex flex-wrap justify-center px-3 py-3">
        <Content />
      </div>
    </div>
  );
}
