"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Express = require("express");
const app = Express();
const port = 3000;
app.get("/", (req, res) => {
    res.send("Hello, World!");
});
app.listen(port, () => {
    console.log(`Example app listening on post http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map