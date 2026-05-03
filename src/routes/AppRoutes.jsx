import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ToursPage from "../pages/Tour/Tours";
import ToursDetails from "../pages/Tour/ToursDetails";

export default function AppRoutes({ embedded = false }) {
    if (embedded) {
        return (
            <Routes>
                <Route index element={<ToursPage />} />
                <Route path=":id" element={<ToursDetails />} />
                <Route path="slug/:slug" element={<ToursDetails />} />
                <Route path="*" element={<Navigate to="." replace />} />
            </Routes>
        );
    }

    return (
        <Routes>
            <Route path="/" element={<Navigate to="/packages" replace />} />
            <Route path="/packages" element={<ToursPage />} />
            <Route path="/packages/:id" element={<ToursDetails />} />
            <Route path="/packages/slug/:slug" element={<ToursDetails />} />
            <Route path="*" element={<Navigate to="/packages" replace />} />
        </Routes>
    );
}
