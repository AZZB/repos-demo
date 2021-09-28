import { useParams } from "react-router";
import Navbar from "../components/Navbar";
import Readme from "../components/Readme";
import { ReadmeResponse, useRepoReadme } from "../endpoints/queries";

export default function RepoReadme() {
  const params: any = useParams();

  const { readme, isReadmeError, isReadmeLoading }: ReadmeResponse =
    useRepoReadme(params.username, params.reponame);

  const Content = () => {
    if (isReadmeLoading) {
      return <div className="text-center">loading readme...</div>;
    }

    if (isReadmeError) {
      return (
        <div className="text-center">
          It looks like we are having network Error!
        </div>
      );
    }

    return <Readme content={readme} />;
  };

  return (
    <div>
      <Navbar />

      <main className="max-w-screen-lg m-auto mt-10 p-3 tracking-wider">
        <Content />
      </main>
    </div>
  );
}
