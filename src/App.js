import "./App.css";
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <p>You keep using that word</p>
          <h1>I do not think it means what you think it means</h1>
          <p>Dictionary app</p>
          <br />
          <Dictionary />
        </main>
        <footer className="text-center">
          <small>
            <a
              href="https://www.github.com/mansavy/dictionary-react"
              target="_blank"
              rel="noreferrer"
            >
              Coded
            </a>{" "}
            by{" "}
            <a
              href="https://storied-lily-1fbc84.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Mandy Savoie
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
