import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import route from "./route.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={route} />
	</StrictMode>
);
