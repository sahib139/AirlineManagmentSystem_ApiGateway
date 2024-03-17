const express = require("express");
const app = express();

const morgan = require("morgan");
const { createProxyMiddleware } = require('http-proxy-middleware');
const { PORT, REQUEST_LIMIT } = require("./config/serverConfig");

app.use(morgan('combined'));
app.use(REQUEST_LIMIT);

const setUpAndStartServer = (req, res) => {

    app.use("/flightAndSearch",createProxyMiddleware({ target: "http://localhost:3000", changeOrigin: true }));
    app.use("/authService",createProxyMiddleware({ target: "http://localhost:3001", changeOrigin: true }));
    app.use("/bookingService", createProxyMiddleware({ target: "http://localhost:3002", changeOrigin: true }));
    app.use("/reminderService",createProxyMiddleware({ target: "http://localhost:3003", changeOrigin: true }));
    

    app.listen(PORT, () => {
        console.log(`ApiGateway Server started at Port No. ${PORT}`);
    });
}

setUpAndStartServer();


