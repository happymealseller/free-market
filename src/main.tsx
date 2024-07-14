import * as Sentry from "@sentry/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Routes } from "@/types/globalTypes";
import RootLayout from "@/routes/root";
import LandingPage from "@/pages/LandingPage";
import ListingPage from "@/pages/ListingPage";
import SearchResultsPage from "@/pages/SearchResultsPage";
import ErrorPage404 from "@/pages/ErrorPage404";
import ErrorPage500 from "@/pages/ErrorPage500";
import AuthProvider from "@/security/AuthProvider";
import "./index.css";

const dsnKey = import.meta.env.VITE_SENTRY_DSN_KEY;

Sentry.init({
    dsn: dsnKey,
    integrations: [
        Sentry.browserTracingIntegration(),
        Sentry.replayIntegration(),
    ],
    tracesSampleRate: 1.0,
    tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
});

const router = createBrowserRouter([
    {
        path: Routes.INDEX,
        element: <RootLayout />,
        errorElement: <ErrorPage404 />,
        children: [
            {
                errorElement: <ErrorPage404 />,
                children: [
                    {
                        index: true,
                        element: <LandingPage />,
                    },
                    {
                        path: Routes.LISTING_PAGE,
                        element: <ListingPage />,
                    },
                    {
                        path: Routes.SEARCH_RESULTS_PAGE,
                        element: <SearchResultsPage />,
                    },
                    {
                        path: Routes.ERROR_500,
                        element: <ErrorPage500 />,
                    },
                ],
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>
);
