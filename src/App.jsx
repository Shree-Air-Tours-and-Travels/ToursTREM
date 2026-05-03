import React from "react";
import AppRoutes from "./routes/AppRoutes";

export default function App({ embedded = false }) {
    return (
        <div className={embedded ? "tours-app-shell tours-app-shell--embedded" : "tours-app-shell"}>
            <AppRoutes embedded={embedded} />
        </div>
    );
}
