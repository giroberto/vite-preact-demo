import { h, render, FunctionalComponent } from 'preact';
import { Router, Route, RouterOnChangeArgs } from "preact-router";
import NavigationBar from "./src/components/NavigationBar";
import ShowMovies from './src/pages/ShowMovies';

const App= () => {
  let currentUrl: string;
  const handleRoute = (e: RouterOnChangeArgs) => {
    currentUrl = e.url;
  };

  return (
    <div>
      <NavigationBar />
      <Router onChange={handleRoute}>
        <Route path="/" component={ShowMovies}/>
        <div path="/2">
          <div onClick={() => (window.location.href = "/")}>Tchay2</div>
        </div>
      </Router>
    </div>
  );
};

render(App(), document.getElementById("app"));
