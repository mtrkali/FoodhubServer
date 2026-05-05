import app from "./app";

const port = Number(process.env.PORT || 5000);

if (!port) {
    console.error("PORT is missing or invalid!");
    process.exit(1);
}

app.listen(port, "0.0.0.0", () => {
    console.log("Server running on", port);
});