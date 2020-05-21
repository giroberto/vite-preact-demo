import { render } from "preact";
import { Router, Route, RouterOnChangeArgs } from "preact-router";
import NavigationBar from "./src/components/NavigationBar";
import ShowMovies from "./src/pages/ShowMovies";
import ShowMovie from "./src/pages/ShowMovie";
import './styles.css'
import ShowActors from "./src/pages/ShowActors";
import ShowActor from "./src/pages/ShowActor";

const App = (): Element => {
  let currentUrl= "/";
  const handleRoute = (e: RouterOnChangeArgs): string => {
    return currentUrl = e.url;
  };

  return (
    <div>
      <NavigationBar />
      <Router onChange={handleRoute}>
        <Route path="/" component={ShowMovies} />
        <Route path="/movie/:id" component={ShowMovie} />
        <Route path="/actor/" component={ShowActors} />
        <Route path="/actor/:id" component={ShowActor} />
      </Router>
    </div>
  );
};

render(App(), document.body);
