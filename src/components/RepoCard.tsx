import { useHistory } from "react-router";
import Button from "./Button";

type Props = {
  name: string;
  description: string;
  languages: string[];
  owner: string;
  url: string;
};

const RepoCard = ({ name, description, languages, owner, url }: Props) => {
  const history = useHistory();
  const readmeAction = () => {
    history.push(`/repos/${owner}/${name}`);
  };

  return (
    <article className="border py-2 px-3 mt-5 flex-1 md:flex-m1/2 ml-2">
      <h1 className="text-sm text-gray-900 mb-2">{name}</h1>
      <p className="text-sm text-gray-700 mb-2">{description}</p>
      <div>
        {languages.map((lan) => (
          <span
            key={lan}
            className="text-xs text-gray-700 border py-1 px-3 mr-2"
          >
            {lan}
          </span>
        ))}
      </div>
      <div className="flex justify-end pt-5 pb-2">
        <Button
          text="Readme"
          style={{ fontSize: 11, padding: "5px 25px" }}
          onClick={readmeAction}
        />
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="border border-black ml-2 font-bold text-gray-700 outline-none hover:opacity-80 cursor-pointer"
          style={{ fontSize: 11, padding: "5px 25px" }}
        >
          Open repo
        </a>
      </div>
    </article>
  );
};

export default RepoCard;
