import { useState } from "react";
import { useHistory } from "react-router";
import Button from "../components/Button";

export default function Home() {
  const [username, setUsername] = useState("");
  const history = useHistory();

  function lookupAction() {
    if (!username) {
      return;
    }

    history.push(`/users/${username}/repos`);
  }

  return (
    <div>
      <header className="py-2 px-3">
        <h1 className="text-sm text-gray-700 tracking-widest">
          RemoteMore Challenge!
        </h1>
      </header>
      <div className="h-screen flex justify-center items-center px-3">
        <main className="flex-1 md:flex-1/2 xl:flex-1/3">
          <input
            className="w-full border inline-block outline-none py-2 px-3 text-sm focus:border-gray-500"
            placeholder="GitHub's username..."
            onChange={(e) => setUsername(e.target.value)}
          />
          <div className="flex justify-center items-center pt-6">
            <Button text="Look up" onClick={lookupAction} />
          </div>
        </main>
      </div>
    </div>
  );
}
