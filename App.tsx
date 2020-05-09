import { h, render, FunctionalComponent } from 'preact';
import { Router, Route, RouterOnChangeArgs } from "preact-router";

const App = () => {
  let currentUrl: string;
  const handleRoute = (e: RouterOnChangeArgs) => {
    currentUrl = e.url;
};

  return (<Router onChange={handleRoute}>
    <div path="/">
      <div onClick={() => window.location.href='2'}>Tchay2</div>
    </div>
    <div path="/2">
      <div>Tchay</div>
    </div>    
  </Router>);
};

render(App(), document.getElementById('app'));
