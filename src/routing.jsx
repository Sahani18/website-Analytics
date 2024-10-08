import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/home";
import { initialiseGA } from "./analytics/googleAnalytics";

(()=>{
    initialiseGA()
})()
export const routing = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/home",
        element: <Home />
    }
])