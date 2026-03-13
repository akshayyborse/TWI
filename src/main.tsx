import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const rootElement = document.getElementById("root");

if (rootElement) {
    try {
        const root = createRoot(rootElement);
        // Wrap to catch rendering errors
        const RootWrapper = () => {
            const [error, setError] = useState<Error | null>(null);

            useEffect(() => {
                const errorHandler = (e: ErrorEvent) => {
                    console.error("GLOBAL ERROR CAUGHT:", e);
                    setError(e.error);
                };
                const promiseHandler = (e: PromiseRejectionEvent) => {
                    console.error("PROMISE REJECTION:", e);
                    setError(new Error(String(e.reason)));
                };
                window.addEventListener("error", errorHandler);
                window.addEventListener("unhandledrejection", promiseHandler);
                return () => {
                    window.removeEventListener("error", errorHandler);
                    window.removeEventListener("unhandledrejection", promiseHandler);
                };
            }, []);

            if (error) {
                return (
                    <div style={{ padding: 20, color: 'red' }}>
                        <h1>Application Crashed</h1>
                        <pre>{error.stack || error.message}</pre>
                    </div>
                );
            }
            return <App />;
        }

        root.render(<RootWrapper />);
    } catch (err) {
        console.error("FAILED TO RENDER ROOT", err);
        document.body.innerHTML = `<div style="padding: 20px; color: red;">Failed to start app: ${err}</div>`;
    }
}
