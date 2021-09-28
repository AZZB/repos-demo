import { SearchIcon, XIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import SearchInput from "./SearchInput";

type Props = {};

export default function Navbar(props: Props) {
  const params: any = useParams();
  const history = useHistory();
  const [searchOpen, setSearchOpen] = useState(false);
  const [username, setUsername] = useState(params.username);

  const lookupAction = () => {
    if (!username || username === params.username) {
      return;
    }

    history.push(`/users/${username}/repos`);
  };

  useEffect(() => {
    setUsername(params.username);
  }, [params.username]);

  return (
    <header className="border-b flex items-center px-3 h-12">
      {searchOpen ? (
        <div className="flex justify-between items-center w-full">
          <SearchInput
            onPressEnter={lookupAction}
            value={username}
            onChangeValue={(value) => setUsername(value)}
          />
          <XIcon
            className="w-4 h-4 text-gray-700 cursor-pointer"
            onClick={() => setSearchOpen(false)}
          />
        </div>
      ) : (
        <div className="max-w-screen-lg m-auto flex-1">
          <div className=" flex justify-between sm:justify-start items-center ">
            <div className="text-gray-700 text-sm mr-6 tracking-widest">
              Repos
            </div>
            <div className="hidden sm:block w-full">
              <SearchInput
                onPressEnter={lookupAction}
                value={username}
                onChangeValue={(value) => setUsername(value)}
              />
            </div>
            <div>
              <SearchIcon
                className="w-4 h-4 text-gray-700 cursor-pointer sm:hidden"
                onClick={() => setSearchOpen(true)}
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
