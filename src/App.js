import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <div className="git-link">
          <span> Project coded by Bethany Budzeak, </span>
          <a
            href="https://github.com/bbudzeak/weather-react-app-project"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
