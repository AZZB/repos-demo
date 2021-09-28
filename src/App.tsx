import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import RepoReadme from "./pages/RepoReadme";
import Repos from "./pages/Repos";
import Notfound from "./pages/Notfound";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/repos/:username/:reponame" exact>
          <RepoReadme />
        </Route>
        <Route path="/users/:username/repos" exact>
          <Repos />
        </Route>
        <Route>
          <Notfound />
        </Route>
      </Switch>
    </QueryClientProvider>
  );
}

export default App;
