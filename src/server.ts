import app from "./app";

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : undefined;

if (!port) {
    console.error("PORT is missing or invalid!");
    process.exit(1);
}

app.listen(port, "0.0.0.0", () => {
    console.log("Server running on", port);
});