import ReactMarkdown from "react-markdown";

type Props = {
  content?: string;
};

const Readme = ({ content }: Props) => {
  return (
    <div className="text-gray-900 text-md pb-10 overflow-clip overflow-hidden">
      <ReactMarkdown>{content || ""}</ReactMarkdown>
    </div>
  );
};

export default Readme;
