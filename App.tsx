import { h, render, Fragment } from "preact";
import { Router, Route, RouterOnChangeArgs } from "preact-router";
import NavigationBar from "./src/components/NavigationBar";
import ShowMovies from "./src/pages/ShowMovies";
import ShowMovie from "./src/pages/ShowMovie";

const App = () => {
  let currentUrl: string;
  const handleRoute = (e: RouterOnChangeArgs) => {
    currentUrl = e.url;
  };

  return (
    <div>
      <NavigationBar />
      <Router onChange={handleRoute}>
        <Route path="/" component={ShowMovies} />
        <Route path="/movie/:id" component={ShowMovie} />
      </Router>
    </div>
  );
};

render(App(), document.body);
