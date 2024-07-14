/// <reference types="vitest" />
/// <reference types="vite/client" />
import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { sentryVitePlugin } from "@sentry/vite-plugin";

export default defineConfig({
    plugins: [
        react(),
        sentryVitePlugin({
            org: "happymealseller",
            project: "free-market-react",
        }),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: ["./src/setupTests"],
    },
    build: {
        sourcemap: true,
    },
});
