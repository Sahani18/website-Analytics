import { Link } from "react-router-dom";
import Button from "./components/button";

import "./App.css";

function App() {
  return (
    <>
      <p className="mx-auto text-green-700 text-4xl pt-20">
        Hello Google Analytics...
      </p>
      <p className="pt-20">Click below to navigate to homepage</p>
      <br />
      <Link to={"/home"} className=" bg-yellow-200 rounded-full p-2">
        {" "}
        Home Page
      </Link>
      <div className="h-32" />
      <Button category="User Interaction" label="click" />
    </>
  );
}

export default App;
