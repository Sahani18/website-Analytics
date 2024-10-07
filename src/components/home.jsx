import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { trackPageView } from "../analytics/googleAnalytics";

function Home() {
  useEffect(() => {
    trackPageView("/home");
  }, []);
  return (
    <>
      <p className="mx-auto text-orange-600 text-4xl pt-40">Home component </p>
      <div className="h-20" />
      <Link to={"/"} className="p-2 bg-orange-200 rounded-full">
        Go back
      </Link>
    </>
  );
}

export default Home;
